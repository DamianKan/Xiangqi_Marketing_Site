import fs from "node:fs";

const html = fs.readFileSync(
  "D:/Git-Project/xiangqi_auto/tmp-five-deployment-rendered.html",
  "utf8"
);

const contentMarker = '<div class="jz_fix_ue_img">';
const contentStart = html.indexOf(contentMarker);
const paginationStart =
  html.indexOf('<div class="news_pagination">') !== -1
    ? html.indexOf('<div class="news_pagination">')
    : html.indexOf("上一篇");

if (contentStart === -1 || paginationStart === -1 || paginationStart <= contentStart) {
  console.error("ARTICLE_BLOCK_NOT_FOUND");
  console.error({ contentStart, paginationStart });
  process.exit(1);
}

const articleHtml = html.slice(contentStart + contentMarker.length, paginationStart);

const stripTags = (value) =>
  value
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .trim();

const title = html.match(/<h1 class="news_detail_title"[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "";
const author = html.match(/<span class="news_detail_info_item">([\s\S]*?)<\/span>/)?.[1] ?? "";
const intro = articleHtml.match(/<p[^>]*><em><span[^>]*>([\s\S]*?)<\/span><\/em><\/p>/)?.[1] ?? "";

const h2Pattern = /<h2[^>]*>([\s\S]*?)<\/h2>/g;
const headingMatches = [...articleHtml.matchAll(h2Pattern)];
const sections = [];

for (let index = 0; index < headingMatches.length; index += 1) {
  const current = headingMatches[index];
  const next = headingMatches[index + 1];
  const start = current.index + current[0].length;
  const end = next ? next.index : articleHtml.length;
  const content = articleHtml.slice(start, end);
  const heading = stripTags(current[1]);
  const paragraphs = [...content.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((match) =>
    stripTags(match[1])
  );
  const images = [...content.matchAll(/<img\b[^>]*?\ssrc="([^"]+)"[^>]*>/g)].map((match) => match[1]);
  sections.push({ heading, paragraphs, images });
}

const previousTextIndex = html.indexOf("上一篇");
const nextTextIndex = html.indexOf("下一篇");
const previousHtml =
  previousTextIndex === -1 || nextTextIndex === -1
    ? ""
    : html.slice(previousTextIndex, nextTextIndex);
const nextHtml = nextTextIndex === -1 ? "" : html.slice(nextTextIndex, nextTextIndex + 600);

const previous = previousHtml.match(/href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/);
const next = nextHtml.match(/href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/);

console.log(
  JSON.stringify(
    {
      title: stripTags(title),
      author: stripTags(author),
      intro: stripTags(intro),
      sections,
      previous: previous ? { href: previous[1], label: stripTags(previous[2]) } : null,
      next: next ? { href: next[1], label: stripTags(next[2]) } : null
    },
    null,
    2
  )
);
