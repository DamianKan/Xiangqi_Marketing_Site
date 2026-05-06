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

function normalizeSection(section: any): ReplicaSection {
  return {
    title: section.title || section.heading || "Xiangqi.com",
    body: Array.isArray(section.body) ? section.body : section.summary ? [section.summary] : [],
    image: section.image,
    imageAlt: section.imageAlt,
    links: section.links,
    list: section.list || section.items?.map((item: any) => item.description ? `${item.title}: ${item.description}` : item.title),
    items: section.items,
    gallery: section.gallery
  };
}

function normalizeArticle(article: any): ReplicaArticleCard {
  return {
    title: article.title,
    date: article.date || article.tag,
    excerpt: article.excerpt || article.description || "",
    href: article.href,
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
    route: corrected.route.endsWith("/") ? corrected.route : `${corrected.route}/`,
    type: corrected.type,
    title: inviteGuideOverride.title || corrected.title,
    description: inviteGuideOverride.description || corrected.description,
    heroTitle: inviteGuideOverride.heroTitle || corrected.heroTitle,
    heroSubtitle: corrected.heroSubtitle,
    ctas: corrected.ctas || corrected.cta || [],
    sections: (corrected.sections || []).map(normalizeSection),
    faq: corrected.faq || [],
    articleCards: (corrected.articleCards || []).map(normalizeArticle)
  };
}

export const replicaPages: ReplicaPage[] = [
  ...zhReplicaPages,
  ...footerReplicaPages,
  ...resourceReplicaPages,
  ...enReplicaPages,
  ...viReplicaPages
].map(normalizePage);

export const replicaPagesByRoute = new Map(replicaPages.map((page) => [page.route, page]));

export function getReplicaPageByRoute(route: string): ReplicaPage | undefined {
  const normalized = route.endsWith("/") ? route : `${route}/`;
  return replicaPagesByRoute.get(normalized);
}
