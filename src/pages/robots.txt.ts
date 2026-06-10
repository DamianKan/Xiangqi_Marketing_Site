import site from "../data/site.json";

export function GET() {
  const sitemapUrl = new URL("/sitemap.xml", site.siteUrl).toString();
  const llmsUrl = new URL("/llms.txt", site.siteUrl).toString();
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\nLLMS: ${llmsUrl}\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
