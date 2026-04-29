import site from "../data/site.json";

export function GET() {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${site.siteUrl}/sitemap.xml\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
