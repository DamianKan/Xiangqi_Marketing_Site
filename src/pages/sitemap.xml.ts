import site from "../data/site.json";

type SitemapEntry = {
  path: string;
  priority: string;
  lastmod: string;
  changefreq: string;
};

const liveLastmod = "2026-05-14T20:59:22+08:00";

const sitemapEntries: SitemapEntry[] = [
  { path: "", priority: "1.0", lastmod: liveLastmod, changefreq: "always" },
  { path: "/help/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/play-with-a-friend/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/how-to-create-puzzle/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/tournament/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/mobile/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/how-to-play-xiangqi/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/tcn/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/h-col-139.html", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/contact/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/roadmap/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/team/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/about/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/new-user/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/verified/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/privacy/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/terms/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/polite/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/fair-play/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/resources/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/shop/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/limits/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/rating/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/pieces-and-moves/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/how-to-play/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/youtube/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/first-game/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/invite/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/computer/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/analysis/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/badges/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/graphics/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/video/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/chinese/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/history/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/bugs/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/report/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/admins/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/slash/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/mark/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/smothered-cannon/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/white-faced-general/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/earth/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/support-home/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/help/annotation.html", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/help/markers.html", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/releases/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/contributors/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/sys-msgBoard/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/sys-signup/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/sys-login/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/sys-pr/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/sys-profile/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/sys-nr/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/sys-mCenter/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/sys-pgr/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/sys-sitemap/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/sys-cookie/", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/sys-nd/23.html", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/sys-nd/22.html", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/sys-nd/20.html", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/sys-nd/19.html", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/sys-nd/18.html", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/sys-nd/17.html", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/opening-elephant.html", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/opening-central-cannon.html", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  { path: "/opening-angels-guide.html", priority: "0.8", lastmod: liveLastmod, changefreq: "always" },
  {
    path: "/articles/five-chinese-chess-deployment-tactics.html",
    priority: "0.8",
    lastmod: liveLastmod,
    changefreq: "always"
  },
  {
    path: "/articles/ten-ways-to-improve-chinese-chess-skills.html",
    priority: "0.8",
    lastmod: liveLastmod,
    changefreq: "always"
  },
  {
    path: "/articles/5-xiangqi-situation-analysis-indicators.html",
    priority: "0.8",
    lastmod: liveLastmod,
    changefreq: "always"
  },
  {
    path: "/articles/10-xiangqi-endgame-principles.html",
    priority: "0.8",
    lastmod: liveLastmod,
    changefreq: "always"
  },
  {
    path: "/articles/10-xiangqi-midgame-principles.html",
    priority: "0.8",
    lastmod: liveLastmod,
    changefreq: "always"
  },
  {
    path: "/articles/10-xiangqi-opening-principles.html",
    priority: "0.8",
    lastmod: liveLastmod,
    changefreq: "always"
  }
];

function toLoc(baseUrl: string, path: string) {
  return path ? `${baseUrl}${path}` : baseUrl;
}

function urlEntry(baseUrl: string, entry: SitemapEntry) {
  return (
    `<url>` +
    `<loc>${toLoc(baseUrl, entry.path)}</loc>` +
    `<priority>${entry.priority}</priority>` +
    `<lastmod>${entry.lastmod}</lastmod>` +
    `<changefreq>${entry.changefreq}</changefreq>` +
    `</url>`
  );
}

export function GET() {
  const baseUrl = site.siteUrl.replace(/\/+$/, "");
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    sitemapEntries.map((entry) => urlEntry(baseUrl, entry)).join("") +
    `</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
