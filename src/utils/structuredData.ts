import site from "../data/site.json";

type JsonLd = Record<string, unknown>;

interface PageSchemaInput {
  title: string;
  description: string;
  canonical: string;
  imageUrl?: string;
}

interface ArticleSchemaInput extends PageSchemaInput {
  datePublished: string;
  dateModified?: string;
  authorName?: string;
}

const organization = {
  "@type": "Organization",
  "@id": `${site.organization.url}#organization`,
  name: site.organization.name,
  url: site.organization.url,
  logo: site.organization.logo,
  email: site.organization.email
};

export function compactStructuredData(data: JsonLd | JsonLd[] | undefined): JsonLd[] {
  if (!data) {
    return [];
  }

  return (Array.isArray(data) ? data : [data]).filter((item) => Object.keys(item).length > 0);
}

export function buildWebPageStructuredData({
  title,
  description,
  canonical,
  imageUrl
}: PageSchemaInput): JsonLd[] {
  const pageId = `${canonical}#webpage`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${site.siteUrl}#website`,
      name: site.name,
      alternateName: site.shortName,
      url: site.siteUrl,
      publisher: {
        "@id": `${site.organization.url}#organization`
      },
      inLanguage: "zh-CN"
    },
    {
      "@context": "https://schema.org",
      ...organization
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": pageId,
      url: canonical,
      name: title,
      description,
      isPartOf: {
        "@id": `${site.siteUrl}#website`
      },
      publisher: {
        "@id": `${site.organization.url}#organization`
      },
      inLanguage: "zh-CN",
      ...(imageUrl ? { image: imageUrl } : {})
    }
  ];
}

export function buildArticleStructuredData({
  title,
  description,
  canonical,
  imageUrl,
  datePublished,
  dateModified,
  authorName = site.organization.name
}: ArticleSchemaInput): JsonLd[] {
  return [
    ...buildWebPageStructuredData({ title, description, canonical, imageUrl }),
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${canonical}#article`,
      headline: title,
      description,
      url: canonical,
      datePublished,
      dateModified: dateModified || datePublished,
      author: {
        "@type": "Organization",
        name: authorName
      },
      publisher: {
        "@id": `${site.organization.url}#organization`
      },
      mainEntityOfPage: {
        "@id": `${canonical}#webpage`
      },
      ...(imageUrl ? { image: imageUrl } : {})
    }
  ];
}
