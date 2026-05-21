import { zhReplicaPages } from "./zh";
import { enReplicaPages } from "./en";
import { viReplicaPages } from "./vi";
import { replicaAssets } from "./assets";
import { replicaPageCorrections } from "./corrections";
import { sourcePageOverrides } from "./source-overrides";
import { zhSourcePageOverrides } from "./zh-source-overrides";
import { homePageOverrides } from "./home-overrides";
import { pageOverrides } from "./page-overrides";
import { footerReplicaPages } from "./footer-pages";
import type { ReplicaArticleCard, ReplicaPage, ReplicaSection } from "./types";
import { resourceReplicaPages } from "./resource-pages";
import { manualReplicaPages } from "./manual-pages";
import { manualArticlePages } from "./manual-article-pages";
import { smotheredCannonReplicaPages } from "./smothered-cannon-page";
import { whiteFacedGeneralReplicaPages } from "./white-faced-general-page";
import { earthReplicaPages } from "./earth-page";
import { annotationReplicaPages } from "./annotation-page";

function normalizeHrefByLabel(label: string | undefined, href: string | undefined): string | undefined {
  if (!href) return href;

  if (
    href === "/articles/import-game-notation/" ||
    href === "https://www.zh.xiangqi.com/articles/import-game-notation/"
  ) {
    return "/sys-nd/23.html";
  }

  if (
    href === "/articles/product-update-2024-08/" ||
    href === "https://www.zh.xiangqi.com/articles/product-update-2024-08/"
  ) {
    return "/sys-nd/22.html";
  }

  if (
    href === "/articles/new-interface/" ||
    href === "https://www.zh.xiangqi.com/articles/new-interface/"
  ) {
    return "/sys-nd/20.html";
  }

  if (href === "/download/" || href === "https://www.zh.xiangqi.com/mobile/") {
    return "/mobile/";
  }

  if (href === "/tcn/download/" || href === "https://www.zh.xiangqi.com/tcn/mobile/") {
    return "/tcn/mobile/";
  }

  if (
    href === "/vi/download/" ||
    href === "https://www.vn.xiangqi.com/mobile" ||
    href === "https://www.vn.xiangqi.com/mobile/"
  ) {
    return "/vi/mobile/";
  }

  if ((label === "棋子与走法" || label === "象棋棋子与走法") && href === "/how-to-play-xiangqi/") {
    return "/pieces-and-moves/";
  }

  if (
    href === "/opening-principles/" ||
    href === "/articles/10-xiangqi-opening-principles.html" ||
    href === "https://www.zh.xiangqi.com/opening-principles/" ||
    href === "https://www.zh.xiangqi.com/articles/10-xiangqi-opening-principles.html"
  ) {
    return "/articles/10-xiangqi-opening-principles.html";
  }

  if (
    href === "/middlegame-principles/" ||
    href === "/articles/10-xiangqi-midgame-principles.html" ||
    href === "https://www.zh.xiangqi.com/middlegame-principles/" ||
    href === "https://www.zh.xiangqi.com/articles/10-xiangqi-midgame-principles.html"
  ) {
    return "/articles/10-xiangqi-midgame-principles.html";
  }

  if (
    href === "/endgame-principles/" ||
    href === "/articles/10-xiangqi-endgame-principles.html" ||
    href === "https://www.zh.xiangqi.com/endgame-principles/" ||
    href === "https://www.zh.xiangqi.com/articles/10-xiangqi-endgame-principles.html"
  ) {
    return "/articles/10-xiangqi-endgame-principles.html";
  }

  if (
    href === "/position-evaluation/" ||
    href === "/articles/5-xiangqi-situation-analysis-indicators.html" ||
    href === "https://www.zh.xiangqi.com/position-evaluation/" ||
    href === "https://www.zh.xiangqi.com/articles/5-xiangqi-situation-analysis-indicators.html"
  ) {
    return "/articles/5-xiangqi-situation-analysis-indicators.html";
  }

  if (
    href === "/piece-maneuvers/" ||
    href === "/articles/five-chinese-chess-deployment-tactics.html" ||
    href === "https://www.zh.xiangqi.com/piece-maneuvers/" ||
    href === "https://www.zh.xiangqi.com/articles/five-chinese-chess-deployment-tactics.html"
  ) {
    return "/articles/five-chinese-chess-deployment-tactics.html";
  }

  if (
    href === "/ten-ways-to-improve-chinese-chess-skills/" ||
    href === "/articles/ten-ways-to-improve-chinese-chess-skills.html" ||
    href === "https://www.zh.xiangqi.com/ten-ways-to-improve-chinese-chess-skills/" ||
    href === "https://www.zh.xiangqi.com/articles/ten-ways-to-improve-chinese-chess-skills.html"
  ) {
    return "/articles/ten-ways-to-improve-chinese-chess-skills.html";
  }

  return href;
}

function normalizeLink(link: any) {
  const normalizedHref = normalizeHrefByLabel(link.label, link.href);

  return {
    ...link,
    href: normalizedHref,
    external: normalizedHref?.startsWith("/") ? false : link.external
  };
}

function normalizeCta(cta: any) {
  if (!cta) return cta;

  const normalizedHref = normalizeHrefByLabel(cta.label, cta.href);

  return {
    ...cta,
    href: normalizedHref,
    external: normalizedHref?.startsWith("/") ? false : cta.external
  };
}

function normalizeSection(section: any): ReplicaSection {
  return {
    title: section.title || section.heading || "Xiangqi.com",
    body: Array.isArray(section.body) ? section.body : section.summary ? [section.summary] : [],
    metaPrefix: section.metaPrefix,
    metaLinks: section.metaLinks?.map(normalizeLink),
    metaSuffix: section.metaSuffix,
    subSections: section.subSections?.map((subSection: any) => ({
      title: subSection.title || "Xiangqi.com",
      body: Array.isArray(subSection.body)
        ? subSection.body
        : subSection.summary
          ? [subSection.summary]
          : [],
      list: subSection.list
    })),
    image: section.image,
    imageAlt: section.imageAlt,
    imageCaption: section.imageCaption,
    imagePlacement: section.imagePlacement,
    table: section.table,
    links: section.links?.map(normalizeLink),
    list: section.list || section.items?.map((item: any) => item.description ? `${item.title}: ${item.description}` : item.title),
    items: section.items?.map((item: any) => ({
      ...item,
      links: item.links?.map(normalizeLink)
    })),
    gallery: section.gallery
  };
}

function normalizeArticle(article: any): ReplicaArticleCard {
  const normalizedHref = normalizeHrefByLabel(article.title, article.href) || article.href;

  return {
    title: article.title,
    date: article.date || article.tag,
    excerpt: article.excerpt || article.description || "",
    href: normalizedHref,
    image: article.image || replicaAssets.article
  };
}

function normalizePage(page: any): ReplicaPage {
  const zhSourceOverride = zhSourcePageOverrides[page.id];
  const usableZhSourceOverride = zhSourceOverride?.sections?.some((section: any) => section.body?.length)
    ? zhSourceOverride
    : undefined;
  const sourceOverride = sourcePageOverrides[page.id];
  const usableSourceOverride = sourceOverride?.sections?.some((section: any) => section.body?.length)
    ? sourceOverride
    : undefined;
  const corrected = {
    ...page,
    ...(usableZhSourceOverride || {}),
    ...(usableSourceOverride || {}),
    ...(replicaPageCorrections[page.id] || {}),
    ...(homePageOverrides[page.id as keyof typeof homePageOverrides] || {}),
    ...(pageOverrides[page.id] || {})
  };
  const inviteGuideOverride: Partial<ReplicaPage> =
    corrected.id === "ZH-010"
      ? {
          title: "邀请好友对弈 - 相弈象棋",
          description:
            "查看当前源站的邀请好友教程：打开好友列表、发送邮件或复制邀请链接，并在好友完成注册后直接发起挑战。",
          heroTitle: "邀请好友对弈"
        }
      : {};
  return {
    id: corrected.id,
    locale: corrected.locale,
    sourceUrl: corrected.sourceUrl,
    route:
      corrected.route.endsWith("/") || corrected.route.endsWith(".html")
        ? corrected.route
        : `${corrected.route}/`,
    type: corrected.type,
    title: inviteGuideOverride.title || corrected.title,
    description: inviteGuideOverride.description || corrected.description,
    heroTitle: inviteGuideOverride.heroTitle || corrected.heroTitle,
    heroSubtitle: corrected.heroSubtitle,
    ctas: (corrected.ctas || corrected.cta || []).map(normalizeCta),
    sections: (corrected.sections || []).map(normalizeSection),
    faq: corrected.faq || [],
    articleCards: (corrected.articleCards || []).map(normalizeArticle)
  };
}

export const replicaPages: ReplicaPage[] = [
  ...zhReplicaPages,
  ...footerReplicaPages,
  ...resourceReplicaPages,
  ...manualReplicaPages,
  ...manualArticlePages,
  ...annotationReplicaPages,
  ...smotheredCannonReplicaPages,
  ...whiteFacedGeneralReplicaPages,
  ...earthReplicaPages,
  ...enReplicaPages,
  ...viReplicaPages
].map(normalizePage);

export const replicaPagesByRoute = new Map(replicaPages.map((page) => [page.route, page]));

export function getReplicaPageByRoute(route: string): ReplicaPage | undefined {
  const normalized = route.endsWith("/") || route.endsWith(".html") ? route : `${route}/`;
  return replicaPagesByRoute.get(normalized);
}
