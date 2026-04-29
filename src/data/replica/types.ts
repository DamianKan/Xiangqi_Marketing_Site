export type ReplicaLocale = "zh-CN" | "zh-Hant" | "en" | "vi";

export type ReplicaPageType =
  | "home"
  | "help-index"
  | "help-detail"
  | "download"
  | "tutorial"
  | "faq"
  | "article-list"
  | "article-detail"
  | "policy"
  | "landing-or-help";

export interface ReplicaCta {
  label: string;
  href: string;
  external?: boolean;
  variant?: "primary" | "secondary";
}

export interface ReplicaSection {
  title: string;
  body: string[];
  image?: string;
  imageAlt?: string;
  links?: ReplicaCta[];
  list?: string[];
}

export interface ReplicaFaq {
  question: string;
  answer: string;
}

export interface ReplicaArticleCard {
  title: string;
  date?: string;
  excerpt: string;
  href: string;
  image?: string;
}

export interface ReplicaPage {
  id: string;
  locale: ReplicaLocale;
  sourceUrl: string;
  route: string;
  type: ReplicaPageType;
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle?: string;
  ctas?: ReplicaCta[];
  sections: ReplicaSection[];
  faq?: ReplicaFaq[];
  articleCards?: ReplicaArticleCard[];
}

export interface LocaleConfig {
  locale: ReplicaLocale;
  label: string;
  route: string;
  htmlLang: string;
}
