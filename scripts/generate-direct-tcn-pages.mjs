import fs from "node:fs/promises";
import path from "node:path";

const repoRoot = process.cwd();
const pagesRoot = path.join(repoRoot, "src", "pages");
const tcnRoot = path.join(pagesRoot, "tcn");

const sourceFiles = [
  "about.astro",
  "admins.astro",
  "badges.astro",
  "chinese.astro",
  "contact.astro",
  "graphics.astro",
  "h-col-139.html.astro",
  "history.astro",
  "index.astro",
  "opening-angels-guide.html.astro",
  "opening-central-cannon.html.astro",
  "opening-elephant.html.astro",
  "privacy.astro",
  "support-home.astro",
  "sys-login.astro",
  "sys-msgBoard.astro",
  "sys-nr.astro",
  "sys-pgr.astro",
  "sys-pr.astro",
  "terms.astro",
  "video.astro",
  "articles/10-xiangqi-midgame-principles.html.astro",
  "articles/10-xiangqi-opening-principles.html.astro",
  "help/markers.html.astro",
  "sys-nd/17.html.astro",
  "sys-nd/18.html.astro",
  "sys-nd/19.html.astro"
];

const internalRoutes = [
  "/help/",
  "/play-with-a-friend/",
  "/how-to-create-puzzle/",
  "/tournament/",
  "/mobile/",
  "/how-to-play-xiangqi/",
  "/h-col-139.html",
  "/contact/",
  "/roadmap/",
  "/team/",
  "/about/",
  "/new-user/",
  "/verified/",
  "/privacy/",
  "/terms/",
  "/polite/",
  "/fair-play/",
  "/resources/",
  "/shop/",
  "/limits/",
  "/rating/",
  "/pieces-and-moves/",
  "/how-to-play/",
  "/youtube/",
  "/first-game/",
  "/invite/",
  "/computer/",
  "/analysis/",
  "/badges/",
  "/graphics/",
  "/video/",
  "/chinese/",
  "/history/",
  "/bugs/",
  "/report/",
  "/admins/",
  "/slash/",
  "/mark/",
  "/smothered-cannon/",
  "/white-faced-general/",
  "/earth/",
  "/support-home/",
  "/help/annotation.html",
  "/help/markers.html",
  "/releases/",
  "/contributors/",
  "/sys-msgBoard/",
  "/sys-signup/",
  "/sys-login/",
  "/sys-pr/",
  "/sys-profile/",
  "/sys-nr/",
  "/sys-mCenter/",
  "/sys-pgr/",
  "/sys-sitemap/",
  "/sys-cookie/",
  "/sys-nd/23.html",
  "/sys-nd/22.html",
  "/sys-nd/20.html",
  "/sys-nd/19.html",
  "/sys-nd/18.html",
  "/sys-nd/17.html",
  "/opening-elephant.html",
  "/opening-central-cannon.html",
  "/opening-angels-guide.html",
  "/articles/five-chinese-chess-deployment-tactics.html",
  "/articles/ten-ways-to-improve-chinese-chess-skills.html",
  "/articles/5-xiangqi-situation-analysis-indicators.html",
  "/articles/10-xiangqi-endgame-principles.html",
  "/articles/10-xiangqi-midgame-principles.html",
  "/articles/10-xiangqi-opening-principles.html"
];

function prefixTraditionalChineseRoute(route) {
  if (!route.startsWith("/")) return route;
  if (route === "/") return "/tcn/";
  if (route.startsWith("/tcn/") || route.startsWith("/en/") || route.startsWith("/vi/")) {
    return route;
  }
  return `/tcn${route}`;
}

function replaceAll(content, search, replacement) {
  return content.split(search).join(replacement);
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function replaceRouteOnce(content, route) {
  const pattern = new RegExp(`(?<!\\/tcn)(?<!\\/en)(?<!\\/vi)${escapeRegExp(route)}`, "g");
  return content.replace(pattern, prefixTraditionalChineseRoute(route));
}

function remapImports(content) {
  return content.replace(
    /(import\s+(?:[^'"]+\s+from\s+)?["'])(\.\.?\/[^"']+)(["'])/g,
    (_, prefix, relPath, suffix) => `${prefix}${path.posix.join("..", relPath)}${suffix}`
  );
}

function remapInternalRoutes(content) {
  let next = content;

  next = next.replace(/getReplicaPageByRoute\("\/"\)/g, 'getReplicaPageByRoute("/tcn/")');
  next = next.replace(/getReplicaPageByRoute\('\/'\)/g, "getReplicaPageByRoute('/tcn/')");
  next = next.replace(/route="\/"/g, 'route="/tcn/"');
  next = next.replace(/route: "\/"/g, 'route: "/tcn/"');
  next = next.replace(/href="\/"/g, 'href="/tcn/"');
  next = next.replace(/href='\/'/g, "href='/tcn/'");
  next = next.replace(/href: "\/"/g, 'href: "/tcn/"');
  next = next.replace(/href: '\/'/g, "href: '/tcn/'");
  next = next.replace(/https:\/\/www\.zh\.xiangqi\.com\/tcn\//g, "/tcn/");

  for (const route of internalRoutes) {
    next = replaceRouteOnce(next, route);
  }

  return next;
}

function remapLocale(content) {
  return content
    .replaceAll('locale="zh-CN"', 'locale="zh-Hant"')
    .replaceAll('locale: "zh-CN" as const', 'locale: "zh-Hant" as const')
    .replaceAll('locale: "zh-CN"', 'locale: "zh-Hant"')
    .replaceAll('lang="zh-CN"', 'lang="zh-Hant"');
}

function transformPage(source) {
  return remapLocale(remapInternalRoutes(remapImports(source)));
}

async function main() {
  for (const relativeFile of sourceFiles) {
    const sourcePath = path.join(pagesRoot, relativeFile);
    const targetPath = path.join(tcnRoot, relativeFile);
    const source = await fs.readFile(sourcePath, "utf8");
    const transformed = transformPage(source);

    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    await fs.writeFile(targetPath, transformed, "utf8");
    console.log(`generated ${path.relative(repoRoot, targetPath)}`);
  }
}

await main();
