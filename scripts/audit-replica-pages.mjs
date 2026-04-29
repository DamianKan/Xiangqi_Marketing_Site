import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const csvPath = path.join(root, "docs", "replica-page-inventory.csv");
const outCsv = path.join(root, "docs", "replica-page-audit.csv");
const outMd = path.join(root, "docs", "replica-page-audit.md");
const sourceCacheDir = path.join(root, ".cache", "source-pages");

const sourceUrlFixes = new Map([
  ["EN-013", "https://www.xiangqi.com/fair-play"],
  ["EN-014", "https://www.xiangqi.com/polite"]
]);

const noisePatterns = [
  /Skip to Content|Open Menu|Close Menu|Folder:|Back/i,
  /帮助\s+开启象棋之旅\s+好友对战\s+自定义残局\s+比赛/,
  /幫助\s+開啟象棋之旅\s+好友對戰\s+自定義殘局\s+比賽/,
  /Download APP\s+How to Play|Help\s+Menu|Board Set Up/i,
  /Tải APP|Tiếng Việt|Câu hỏi thường gặp/i,
  /关于\s+我们的故事\s+我们的团队\s+产品路线图\s+联系我们/,
  /關於\s+我們的故事\s+我們的團隊\s+產品路線圖\s+聯繫我們/,
  /About\s+Our Story\s+Our Team\s+Roadmap\s+Contact/i,
  /©2024|版权|版權|关注我们|關註我們|Follow Us/i,
  /服务条款|服務條款|隐私政策|隱私政策|Privacy Policy|Terms of Service/i
];

function parseCsv(text) {
  const rows = [];
  let current = [];
  let value = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (quoted && char === '"' && next === '"') {
      value += '"';
      i += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (!quoted && char === ",") {
      current.push(value);
      value = "";
    } else if (!quoted && (char === "\n" || char === "\r")) {
      if (char === "\r" && next === "\n") i += 1;
      current.push(value);
      if (current.some(Boolean)) rows.push(current);
      current = [];
      value = "";
    } else {
      value += char;
    }
  }
  if (value || current.length) {
    current.push(value);
    rows.push(current);
  }
  const [header, ...body] = rows;
  return body.map((row) => Object.fromEntries(header.map((key, index) => [key, row[index] || ""])));
}

function decodeEntities(text) {
  return text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&mdash;/g, "—")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, num) => String.fromCodePoint(Number(num)));
}

function extractMain(html) {
  const mainStart = html.search(/<main\b/i);
  if (mainStart < 0) return html;
  const mainEnd = html.search(/<\/main>/i);
  return html.slice(mainStart, mainEnd > mainStart ? mainEnd : undefined);
}

function htmlToText(html) {
  return decodeEntities(extractMain(html))
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{2,}/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
}

function localFileForRoute(route) {
  if (route === "/") return path.join(root, "dist", "index.html");
  return path.join(root, "dist", route.replace(/^\/|\/$/g, ""), "index.html");
}

function isNoise(part) {
  return noisePatterns.some((pattern) => pattern.test(part));
}

function snippetsFromSource(text) {
  const parts = text
    .split(/\n+|[。！？.!?]\s*|\s+[•|]\s+/)
    .map((part) => part.trim())
    .filter((part) => part.length >= 18)
    .filter((part) => !/^0$|^Xiangqi\.com|^Skip to Content|^Open Menu|^Close Menu|^Folder:|^Back$|^About$|^Help$/i.test(part))
    .filter((part) => !isNoise(part));
  return Array.from(new Set(parts)).slice(0, 80);
}

function normalizeForCompare(text) {
  return text
    .replace(/\s+/g, "")
    .replace(/[，。！？、；：,.!?;:"“”‘’'`´（）()[\]{}《》<>·…\-—–_\u200d]/g, "")
    .toLowerCase();
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 replica-audit"
    }
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  const buffer = await response.arrayBuffer();
  return new TextDecoder("utf-8").decode(buffer);
}

const pages = parseCsv(fs.readFileSync(csvPath, "utf8"));
const rows = [];

for (const page of pages) {
  const localPath = localFileForRoute(page.local_route);
  const localExists = fs.existsSync(localPath);
  let sourceText = "";
  let localText = "";
  let error = "";
  try {
    const cachedSource = path.join(sourceCacheDir, `${page.id}.html`);
    const sourceHtml = fs.existsSync(cachedSource)
      ? fs.readFileSync(cachedSource, "utf8")
      : await fetchText(sourceUrlFixes.get(page.id) || page.source_url);
    sourceText = htmlToText(sourceHtml);
  } catch (err) {
    error = `source:${err.message}`;
  }
  try {
    localText = localExists ? htmlToText(fs.readFileSync(localPath, "utf8")) : "";
  } catch (err) {
    error = `${error} local:${err.message}`.trim();
  }

  const sourceSnippets = snippetsFromSource(sourceText);
  const localNorm = normalizeForCompare(localText);
  const missing = sourceSnippets.filter((snippet) => {
    const normalized = normalizeForCompare(snippet);
    return normalized.length > 0 && !localNorm.includes(normalized.slice(0, Math.min(60, normalized.length)));
  });
  const coverage = sourceSnippets.length
    ? Math.round(((sourceSnippets.length - missing.length) / sourceSnippets.length) * 100)
    : 0;
  const status = error
    ? "error"
    : sourceSnippets.length === 0 && localExists
      ? "pass"
      : coverage >= 70
        ? "pass"
        : coverage >= 40
          ? "partial"
          : "fail";

  rows.push({
    id: page.id,
    locale: page.locale,
    route: page.local_route,
    source: sourceUrlFixes.get(page.id) || page.source_url,
    local_exists: String(localExists),
    source_snippets: String(sourceSnippets.length),
    missing_snippets: String(missing.length),
    coverage: String(coverage),
    status,
    missing_examples: missing.slice(0, 5).join(" | "),
    error
  });
}

const header = Object.keys(rows[0] || {});
const escapeCsv = (value) => `"${String(value).replace(/"/g, '""')}"`;
fs.writeFileSync(outCsv, [header.join(","), ...rows.map((row) => header.map((key) => escapeCsv(row[key])).join(","))].join("\n"), "utf8");

const failing = rows.filter((row) => row.status !== "pass");
const md = [
  "# Replica Page Audit",
  "",
  `Generated: ${new Date().toISOString()}`,
  "",
  `Pages checked: ${rows.length}`,
  `Pass: ${rows.filter((row) => row.status === "pass").length}`,
  `Partial: ${rows.filter((row) => row.status === "partial").length}`,
  `Fail: ${rows.filter((row) => row.status === "fail").length}`,
  `Error: ${rows.filter((row) => row.status === "error").length}`,
  "",
  "## Non-Passing Pages",
  "",
  "| id | route | status | coverage | missing examples | error |",
  "| --- | --- | --- | ---: | --- | --- |",
  ...failing.map((row) => `| ${row.id} | \`${row.route}\` | ${row.status} | ${row.coverage}% | ${row.missing_examples.replace(/\|/g, "/")} | ${row.error} |`)
].join("\n");
fs.writeFileSync(outMd, md, "utf8");

console.log(`Wrote ${outCsv}`);
console.log(`Wrote ${outMd}`);
console.log(`pass=${rows.filter((row) => row.status === "pass").length} partial=${rows.filter((row) => row.status === "partial").length} fail=${rows.filter((row) => row.status === "fail").length} error=${rows.filter((row) => row.status === "error").length}`);
