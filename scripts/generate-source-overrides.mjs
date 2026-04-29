import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const csvPath = path.join(root, "docs", "replica-page-inventory.csv");
const outPath = path.join(root, "src", "data", "replica", "source-overrides.ts");

const sourceUrlFixes = new Map([
  ["EN-013", "https://www.xiangqi.com/fair-play"],
  ["EN-014", "https://www.xiangqi.com/polite"]
]);

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
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{2,}/g, "\n")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .filter((line) => !/^(0|Skip to Content|Open Menu|Close Menu|Folder:|Back|Sign In|登录|Đăng ký)$/.test(line))
    .join("\n");
}

function pageTitleFromText(lines, fallback) {
  return lines.find((line) => line.length >= 5 && line.length <= 90) || fallback;
}

function toSections(text) {
  const lines = text.split("\n").map((line) => line.trim()).filter(Boolean);
  const title = pageTitleFromText(lines, "Xiangqi.com");
  const filtered = lines.filter((line, index) => index === 0 || line !== title);
  const body = [];
  let buffer = "";
  for (const line of filtered.slice(1)) {
    if (line.length <= 2) continue;
    if ((buffer + " " + line).length > 520) {
      if (buffer) body.push(buffer.trim());
      buffer = line;
    } else {
      buffer = buffer ? `${buffer} ${line}` : line;
    }
    if (body.length >= 28) break;
  }
  if (buffer && body.length < 28) body.push(buffer.trim());
  return { title, body: body.filter((item) => item.length > 12) };
}

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 source-overrides" }
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return response.text();
}

const pages = parseCsv(fs.readFileSync(csvPath, "utf8"))
  .filter((page) => page.id.startsWith("EN-") || page.id.startsWith("VI-"));

const overrides = {};
for (const page of pages) {
  const sourceUrl = sourceUrlFixes.get(page.id) || page.source_url;
  try {
    const html = await fetchHtml(sourceUrl);
    const text = htmlToText(html);
    const section = toSections(text);
    overrides[page.id] = {
      sourceUrl,
      title: section.title,
      heroTitle: section.title,
      sections: [
        {
          title: section.title,
          body: section.body
        }
      ]
    };
    console.log(`ok ${page.id} ${sourceUrl}`);
  } catch (error) {
    console.log(`skip ${page.id} ${sourceUrl} ${error.message}`);
  }
}

const content = `import type { ReplicaPage } from "./types";

export const sourcePageOverrides: Record<string, Partial<ReplicaPage>> = ${JSON.stringify(overrides, null, 2)};
`;

fs.writeFileSync(outPath, content, "utf8");
console.log(`Wrote ${outPath}`);
