import site from "../data/site.json";
import { replicaPages } from "../data/replica";

const extraPaths = ["/about/", "/terms/", "/privacy/", "/play/"];

function urlEntry(path: string, lastmod: string) {
  return `<url><loc>${site.siteUrl}${path}</loc><lastmod>${lastmod}</lastmod></url>`;
}

export function GET() {
  const paths = Array.from(new Set([...replicaPages.map((page) => page.route), ...extraPaths]));
  const body = `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    paths.map((path) => urlEntry(path, "2026-04-28")).join("") +
    `</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
