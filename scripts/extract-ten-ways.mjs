import fs from "node:fs";

const html = fs.readFileSync(new URL("../tmp-ten-ways-rendered.html", import.meta.url), "utf8");

const startToken = '<div class="news_detail_content"><div class="jz_fix_ue_img">';
const endToken = '<div class="news_detail_footer">';
const startIndex = html.indexOf(startToken);
const endIndex = html.indexOf(endToken, startIndex);

if (startIndex === -1 || endIndex === -1) {
  console.error("Article block not found.");
  process.exit(1);
}

const block = html.slice(startIndex + startToken.length, endIndex);

const strip = (value) =>
  value
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\u00a0/g, " ")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{2,}/g, "\n")
    .trim();

const tokens = [...block.matchAll(/<(h2|p|img)\b([\s\S]*?)(?:>([\s\S]*?)<\/\1>|\/>)/g)];
const results = [];

for (const token of tokens) {
  const [, tag, attrs, inner = ""] = token;
  if (tag === "img") {
    const src = attrs.match(/src="([^"]+)"/)?.[1] || attrs.match(/src-original="([^"]+)"/)?.[1];
    const alt = attrs.match(/alt="([^"]*)"/)?.[1] || "";
    results.push({ type: "image", src, alt });
    continue;
  }

  const text = strip(inner);
  if (!text) continue;
  results.push({ type: tag === "h2" ? "heading" : "paragraph", text });
}

console.log(JSON.stringify(results, null, 2));
