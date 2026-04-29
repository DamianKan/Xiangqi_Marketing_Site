export type ReplicaLocale = "zh-CN" | "zh-Hant";

export type ReplicaPageType =
  | "home"
  | "help-index"
  | "download"
  | "tutorial"
  | "help-detail"
  | "article-list"
  | "article-detail";

export type ReplicaCta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
};

export type ReplicaSection = {
  id: string;
  title: string;
  body: string[];
  kind?: "seo" | "hero" | "help-menu" | "steps" | "article" | "download" | "cards";
  items?: Array<{
    title: string;
    href?: string;
    description?: string;
  }>;
};

export type ReplicaFaq = {
  question: string;
  answer: string;
};

export type ReplicaArticleCard = {
  title: string;
  href: string;
  date: string;
  description: string;
  imageAlt?: string;
};

export type ReplicaPage = {
  id: string;
  locale: ReplicaLocale;
  sourceUrl: string;
  route: string;
  type: ReplicaPageType;
  title: string;
  description: string;
  heroTitle: string;
  cta: ReplicaCta[];
  sections: ReplicaSection[];
  faq?: ReplicaFaq[];
  articleCards?: ReplicaArticleCard[];
};

const playCta: ReplicaCta = {
  label: "在线对弈",
  href: "https://play.xiangqi.com/",
  variant: "primary",
  external: true,
};

const tcnPlayCta: ReplicaCta = {
  label: "線上對弈",
  href: "https://play.xiangqi.com/",
  variant: "primary",
  external: true,
};

const zhHelpMenu = [
  { title: "象棋规则", href: "/how-to-play/", description: "棋盘、棋子、胜负和基本走法。" },
  { title: "棋子与棋盘", href: "/how-to-play-xiangqi/", description: "从棋盘结构到各棋子的移动限制。" },
  { title: "开始第一盘", href: "/first-game/", description: "注册、进入大厅、匹配和完成第一盘。" },
  { title: "AI 复盘", href: "/help/", description: "对局结束后查看引擎建议和关键变化。" },
  { title: "邀请好友", href: "/invite/", description: "生成邀请链接并分享给好友。" },
  { title: "好友对战", href: "/play-with-a-friend/", description: "创建私人房间或加入好友对局。" },
  { title: "人机对战", href: "/first-game/", description: "选择电脑难度，先用练习局熟悉规则。" },
  { title: "比赛", href: "/tournament/", description: "报名、签到、配对、积分和排名说明。" },
  { title: "徽章", href: "/support-home/", description: "查看个人荣誉、任务和平台成就入口。" },
  { title: "残局", href: "/how-to-create-puzzle/", description: "挑战题库或创建自定义残局。" },
  { title: "下载 APP", href: "/download/", description: "查看移动端下载入口和安装说明。" },
  { title: "等级分", href: "/rating/", description: "了解 Elo 评分、排行榜和匹配参考。" },
];

const tcnHelpMenu = [
  { title: "開始第一盤", href: "/tcn/first-game/", description: "從登入、進入大廳到完成首局對弈。" },
  { title: "比賽", href: "/tcn/tournament/", description: "報名、簽到、配對、積分與名次說明。" },
  { title: "等級分", href: "/tcn/rating/", description: "了解評分變化、排行榜與配對參考。" },
  { title: "下載 APP", href: "/tcn/download/", description: "查看手機和平板上的下載入口。" },
  { title: "象棋規則", href: "/tcn/how-to-play/", description: "棋盤、棋子走法、將軍與勝負。" },
  { title: "幫助搜尋", href: "/tcn/support-home/", description: "以關鍵字查找常見操作教學。" },
];

const zhArticleCards: ReplicaArticleCard[] = [
  {
    title: "棋谱导入的格式说明",
    href: "/articles/import-game-notation/",
    date: "2024-08-30",
    description: "说明纯文本棋谱与 PGN 棋谱导入时的标题、走法、回合和常见错误处理。",
    imageAlt: "棋谱导入文章缩略图",
  },
  {
    title: "相弈象棋产品更新 2024 年 8 月",
    href: "/articles/product-update-2024-08/",
    date: "2024-08-15",
    description: "汇总导航、界面、移动端体验和社区数据等更新内容。",
    imageAlt: "产品更新文章缩略图",
  },
  {
    title: "相弈象棋新界面",
    href: "/articles/new-interface/",
    date: "2024-07-20",
    description: "介绍新版界面视觉、布局、功能入口和反馈方式。",
    imageAlt: "新界面文章缩略图",
  },
];

const zhFaq: ReplicaFaq[] = [
  {
    question: "下中国象棋有什么好处？",
    answer: "下象棋可以训练逻辑推理、专注力、耐心和情绪管理，也能通过在线对弈认识不同地区的棋友。",
  },
  {
    question: "相弈象棋可以免费在线玩吗？",
    answer: "可以。网页端可直接开始体验，移动端可通过 App 使用真人对战、人机练习、残局和赛事等功能。",
  },
  {
    question: "可以和好友进行私人对局吗？",
    answer: "可以创建私人房间或邀请链接，并把链接发送给好友加入对局。",
  },
  {
    question: "对局结束后能复盘吗？",
    answer: "平台提供研究和 AI 分析入口，便于回看失误、比较变化并继续提升棋力。",
  },
];

const tcnFaq: ReplicaFaq[] = [
  {
    question: "相弈象棋可以免費線上玩嗎？",
    answer: "可以。網頁版和 App 都可用於真人對弈、人機練習、殘局與賽事。",
  },
  {
    question: "如何和朋友下私人局？",
    answer: "建立私人對局後分享邀請連結，朋友即可進入同一盤棋。",
  },
  {
    question: "等級分會如何變動？",
    answer: "評分局結束後會按雙方分差和結果調整，並作為排行榜與配對參考。",
  },
];

const zhHomeSeoSections: ReplicaSection[] = [
  {
    id: "free-online-xiangqi",
    kind: "seo",
    title: "免费象棋在线玩",
    body: [
      "想要在舒适的家中也可以象棋游戏在线玩吗？通过相弈象棋软件平台便可以轻松实现线上中国象棋对弈，不受时间地点限制，中国象棋想玩就玩。",
      "网页版和 App 版都提供免费入口，并设有真人对战、人机练习、残局、赛事和复盘功能，适合休闲娱乐与系统提升棋艺。",
    ],
  },
  {
    id: "two-player-online",
    kind: "seo",
    title: "双人在线象棋对战",
    body: [
      "玩家可以创建中国象棋双人联机对局，也可以加入他人已创建的对局进行真人对战。对局支持局时、加秒、步时、先后手等设置。",
      "平台还支持非即时对局，帮助棋友摆脱固定时间限制；对局结束后可用 AI 分析和研究功能推演变化。",
    ],
  },
  {
    id: "improve-skill",
    kind: "seo",
    title: "中国象棋游戏在线玩 在线下象棋提升技能",
    body: [
      "相弈象棋提供开局、战术、棋谱、名局解析和大量实战机会。玩家可以通过持续对局熟悉不同棋局，再借助复盘发现弱点。",
      "无论是初学者还是老手，都可以通过在线对弈、观战高手和分析失误不断积累经验。",
    ],
  },
  {
    id: "logic",
    kind: "seo",
    title: "中国象棋促进逻辑思维能力",
    body: [
      "中国象棋需要深思熟虑、逻辑推理和战略规划。经常进行象棋对局能够训练判断力和专注力，也能培养更清晰的思考习惯。",
    ],
  },
  {
    id: "computer",
    kind: "seo",
    title: "中国象棋人机对战",
    body: [
      "人机对战是象棋在线玩的起点，也是进入真人对战前的练习场。平台设置从易到难的电脑等级，便于玩家逐级挑战。",
    ],
  },
  {
    id: "balanced-challenge",
    kind: "seo",
    title: "难度适宜的中国象棋挑战",
    body: [
      "在线匹配会根据玩家水平寻找合适对手，让初学者逐步提高，也让高水平棋手获得足够强度的对抗。",
    ],
  },
  {
    id: "puzzles",
    kind: "seo",
    title: "中国象棋残局游戏",
    body: [
      "精选残局闯关覆盖从初级到高级的典型局面，玩家也可以创建自定义残局并分享给他人挑战。",
    ],
  },
  {
    id: "tournaments",
    kind: "seo",
    title: "全球象棋在线赛事",
    body: [
      "在线赛事为棋手提供展示实力和交流棋艺的舞台。赛事采用配对、积分和排名机制，玩家可按水平参与不同级别的比赛。",
    ],
  },
  {
    id: "rating",
    kind: "seo",
    title: "象棋等级分及排行榜",
    body: [
      "完成评分对战后，系统会根据 Elo 等级分机制调整分数。达到平台或国家排行榜前列时，玩家可进入排行榜展示。",
    ],
  },
  {
    id: "community",
    kind: "seo",
    title: "国际化的象棋网上社群",
    body: [
      "相弈象棋面向全球推广中国象棋，提供简体中文、繁体中文、英文和越南文界面，让不同地区的棋友无障碍交流。",
    ],
  },
  {
    id: "masters",
    kind: "seo",
    title: "向高水平象棋选手学习",
    body: [
      "观看高手对局可以学习开局、中局和残局技巧。玩家可从不同棋风中吸收经验，并把新的战术尝试带回自己的对局。",
    ],
  },
  {
    id: "devices",
    kind: "seo",
    title: "不同设备，同样在线象棋享受",
    body: [
      "桌面电脑、笔记本、平板和智能手机都可以使用相弈象棋。网页端免安装，移动设备也可选择 App 获得更完整体验。",
    ],
  },
  {
    id: "registration",
    kind: "seo",
    title: "免实名登记注册",
    body: [
      "玩家可以以访客身份先进入大厅与电脑对战或观战；如需评分对战、残局、赛事和 AI 复盘等功能，可使用电子邮件注册帐号。",
    ],
  },
  {
    id: "etiquette",
    kind: "seo",
    title: "中国象棋在线玩的礼仪",
    body: [
      "在线下棋需要尊重对手、遵守规则、保持礼貌，不使用攻击性语言或作弊行为。良好礼仪有助于建立公平愉快的对弈环境。",
    ],
  },
  {
    id: "future",
    kind: "seo",
    title: "在线下象棋的未来趋势",
    body: [
      "人工智能、机器学习和社交互动会继续改变在线象棋体验。未来玩家将获得更个性化的复盘建议、更智能的虚拟对手和更国际化的交流机会。",
    ],
  },
];

const tcnHomeSeoSections: ReplicaSection[] = [
  {
    id: "free-online-xiangqi",
    kind: "seo",
    title: "免費象棋線上玩",
    body: [
      "相弈象棋讓玩家在瀏覽器或 App 中隨時開始中國象棋對弈，不受時間和地點限制。",
      "真人對戰、人機練習、殘局、賽事與復盤功能共同組成完整的線上象棋體驗。",
    ],
  },
  {
    id: "two-player-online",
    kind: "seo",
    title: "雙人線上象棋對戰",
    body: [
      "玩家可以建立房間、加入大廳對局，並設定局時、加秒、步時和先後手。",
      "非即時對局讓不同時區的棋友也能完成一盤棋，賽後可用研究和 AI 分析檢討變化。",
    ],
  },
  {
    id: "skill",
    kind: "seo",
    title: "在線下象棋提升棋藝",
    body: [
      "平台提供棋譜、戰術、名局解析和大量實戰機會，適合新手累積基本功，也適合進階玩家檢視弱點。",
    ],
  },
  {
    id: "computer",
    kind: "seo",
    title: "中國象棋人機對戰",
    body: [
      "不同難度的電腦對手可作為練習階梯，幫助玩家在真人對戰前熟悉局面與走法限制。",
    ],
  },
  {
    id: "puzzle",
    kind: "seo",
    title: "中國象棋殘局遊戲",
    body: [
      "殘局題庫涵蓋常見殺法和進階局面，也支援自訂殘局並分享給其他棋友挑戰。",
    ],
  },
  {
    id: "tournaments",
    kind: "seo",
    title: "全球象棋線上賽事",
    body: [
      "每週賽事提供報名、配對、積分與排行，讓棋手在固定節奏中交流與競爭。",
    ],
  },
  {
    id: "rating",
    kind: "seo",
    title: "象棋等級分及排行榜",
    body: [
      "評分局結束後，系統依據 Elo 機制調整分數，並用於排行榜展示與對手匹配。",
    ],
  },
  {
    id: "devices",
    kind: "seo",
    title: "不同裝置，同樣享受",
    body: [
      "桌面、平板和手機都可使用相弈象棋。網頁版免安裝，App 則適合需要更穩定行動體驗的玩家。",
    ],
  },
  {
    id: "etiquette",
    kind: "seo",
    title: "中國象棋線上禮儀",
    body: [
      "尊重對手、遵守規則並避免作弊，是維持良好社群與公平對弈的核心。",
    ],
  },
];

const articleListSection: ReplicaSection = {
  id: "article-list",
  kind: "cards",
  title: "教学文章",
  body: ["文章列表需要展示标题、日期、摘要和卡片入口，首页更多链接也进入本地文章列表。"],
  items: zhArticleCards.map((card) => ({
    title: card.title,
    href: card.href,
    description: `${card.date} · ${card.description}`,
  })),
};

const zhDownloadSections: ReplicaSection[] = [
  {
    id: "download-options",
    kind: "download",
    title: "下载入口",
    body: [
      "下载页保留 APK、Google Play 和 App Store 三类真实下载入口，按钮视觉应与源站应用商店徽章一致。",
      "无法安装 App 的用户仍可使用网页版进入在线对弈、残局、人机练习和观战功能。",
    ],
    items: [
      { title: "APK 下载", href: "https://www.zh.xiangqi.com/mobile/", description: "保留源站真实 APK 下载地址。" },
      { title: "Google Play", href: "https://play.google.com/store/apps/details?id=com.xiangqi", description: "Android 官方商店入口。" },
      { title: "App Store", href: "https://apps.apple.com/app/xiangqi-com/id1503457821", description: "iPhone 与 iPad 下载入口。" },
    ],
  },
  {
    id: "install-notes",
    kind: "download",
    title: "安装与使用说明",
    body: [
      "移动端适合需要通知、稳定触控体验和快速回到对局的用户。桌面端可直接使用浏览器访问，无需安装。",
      "下载安装后建议登录同一帐号，以便同步好友、等级分、赛事记录和复盘内容。",
    ],
  },
];

function helpIndexSections(menu: ReplicaSection["items"], title = "帮助菜单"): ReplicaSection[] {
  return [
    {
      id: "help-search",
      kind: "help-menu",
      title: "帮助搜索",
      body: ["帮助首页需要提供搜索框和帮助项目列表，输入关键词后可筛选规则、对局、下载、等级分等内容。"],
      items: menu,
    },
    {
      id: "help-groups",
      kind: "help-menu",
      title,
      body: ["帮助项目按新手入门、对局功能、赛事排行、账号设备等分组展示，所有项目都指向本地复刻页面。"],
      items: menu,
    },
  ];
}

function detailSections(topic: string, steps: string[], extra: string[] = []): ReplicaSection[] {
  return [
    {
      id: "overview",
      kind: "article",
      title: `${topic}概览`,
      body: [
        `${topic}页面用于承接源站帮助或教程详情，页面层可直接渲染标题、导语、正文段落和相关链接。`,
        ...extra,
      ],
    },
    {
      id: "steps",
      kind: "steps",
      title: "操作步骤",
      body: ["按源站帮助页的线性教程组织，每一步可搭配截图资源，移动端按纵向步骤展示。"],
      items: steps.map((description, index) => ({
        title: `步骤 ${index + 1}`,
        description,
      })),
    },
    {
      id: "related",
      kind: "cards",
      title: "相关帮助",
      body: ["详情页底部保留返回帮助中心和继续阅读入口。"],
      items: [
        { title: "帮助中心", href: "/help/", description: "返回帮助项目列表。" },
        { title: "在线对弈", href: "https://play.xiangqi.com/", description: "进入对弈大厅开始实践。" },
      ],
    },
  ];
}

function tutorialSections(topic: string, items: Array<{ title: string; body: string }>): ReplicaSection[] {
  return [
    {
      id: "toc",
      kind: "cards",
      title: "目录",
      body: ["教程页保留目录、锚点、作者和日期信息，目录项点击后滚动至对应章节。"],
      items: items.map((item) => ({ title: item.title, href: `#${item.title}` })),
    },
    ...items.map((item, index) => ({
      id: `section-${index + 1}`,
      kind: "article" as const,
      title: item.title,
      body: [item.body],
    })),
    {
      id: "next",
      kind: "cards",
      title: "继续学习",
      body: [`读完${topic}后，可进入人机练习、好友对战或帮助中心继续完成第一盘。`],
      items: [
        { title: "开始第一盘", href: "/first-game/", description: "从教程进入实战。" },
        { title: "好友对战", href: "/play-with-a-friend/", description: "邀请朋友一起练习。" },
      ],
    },
  ];
}

function articleSections(title: string, paragraphs: string[]): ReplicaSection[] {
  return [
    {
      id: "article-meta",
      kind: "article",
      title,
      body: ["作者：Xiangqi.com Team", "日期：2024 年", ...paragraphs],
    },
    {
      id: "article-nav",
      kind: "cards",
      title: "文章导航",
      body: ["详情页保留返回列表和继续阅读入口。"],
      items: [
        { title: "返回教学文章", href: "/articles/", description: "查看全部教学文章卡片。" },
        { title: "如何下象棋", href: "/how-to-play-xiangqi/", description: "继续阅读入门教程。" },
      ],
    },
  ];
}

const pages: ReplicaPage[] = [
  {
    id: "ZH-001",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/",
    route: "/",
    type: "home",
    title: "Xiangqi.com 相弈象棋 - 中国象棋在线玩",
    description:
      "通过相弈象棋软件平台轻松实现线上中国象棋对弈，支持真人对战、人机对战、残局、赛事、等级分和多设备体验。",
    heroTitle: "马上进行中国象棋\n在线对战吧！",
    cta: [playCta, { label: "下载 App", href: "/download/", variant: "secondary" }],
    sections: [
      {
        id: "home-hero",
        kind: "hero",
        title: "首页首屏",
        body: ["红色导航、山林雾气背景、悬浮棋子、棋盘和两个 CTA 组成首页首屏。"],
      },
      ...zhHomeSeoSections,
      articleListSection,
    ],
    faq: zhFaq,
    articleCards: zhArticleCards,
  },
  {
    id: "ZH-002",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/help/",
    route: "/help/",
    type: "help-index",
    title: "帮助中心 - 相弈象棋",
    description: "查看相弈象棋规则、第一盘、AI 复盘、邀请好友、比赛、残局、下载和等级分帮助项目。",
    heroTitle: "帮助中心",
    cta: [{ label: "搜索帮助", href: "/support-home/", variant: "primary" }, playCta],
    sections: helpIndexSections(zhHelpMenu, "简中帮助菜单"),
    faq: zhFaq,
  },
  {
    id: "ZH-003",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/mobile/",
    route: "/download/",
    type: "download",
    title: "下载 App - 相弈象棋",
    description: "下载相弈象棋 App，或使用免安装网页版进行在线对弈、人机练习、残局和赛事。",
    heroTitle: "下载相弈象棋 App",
    cta: [{ label: "进入网页版", href: "https://play.xiangqi.com/", variant: "primary", external: true }],
    sections: zhDownloadSections,
    faq: [
      { question: "没有 App 可以玩吗？", answer: "可以，网页版支持免安装在线对弈。" },
      { question: "移动端数据会同步吗？", answer: "登录同一帐号后，可同步好友、等级分和对局记录。" },
    ],
  },
  {
    id: "ZH-004",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/how-to-play-xiangqi/",
    route: "/how-to-play-xiangqi/",
    type: "tutorial",
    title: "如何下象棋 - 相弈象棋",
    description: "学习中国象棋基础规则、棋子走法、开局思路、将军应对和第一盘实战步骤。",
    heroTitle: "如何下象棋",
    cta: [{ label: "开始第一盘", href: "/first-game/", variant: "primary" }],
    sections: tutorialSections("如何下象棋", [
      { title: "认识棋盘", body: "中国象棋棋盘由九条纵线、十条横线组成，中间为楚河汉界，双方在各自九宫内保护将帅。" },
      { title: "认识棋子", body: "双方各有将帅、士仕、象相、车、马、炮、兵卒。每种棋子都有固定走法和限制。" },
      { title: "胜负目标", body: "目标是将死对方将帅。对局中需要同时考虑进攻、保护己方将帅和控制关键线路。" },
      { title: "开始实战", body: "新手可以先用人机低难度熟悉走法，再进入真人匹配或好友对局。" },
    ]),
    faq: zhFaq.slice(0, 3),
  },
  {
    id: "ZH-005",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/how-to-play/",
    route: "/how-to-play/",
    type: "tutorial",
    title: "象棋规则和入门教程 - 相弈象棋",
    description: "了解象棋棋盘摆放、棋子移动、将军、胜负、违规走法和入门练习路径。",
    heroTitle: "象棋规则",
    cta: [{ label: "查看如何下象棋", href: "/how-to-play-xiangqi/", variant: "primary" }],
    sections: tutorialSections("象棋规则", [
      { title: "棋盘摆放", body: "红黑双方隔河相对，将帅位于九宫中央底线，车马相士按固定顺序排列，炮在炮位，兵卒在卒线。" },
      { title: "棋子走法", body: "车走直线，马走日字，炮隔子吃子，象走田且不过河，士走斜线，将帅在九宫内移动，兵卒过河后可横走。" },
      { title: "将军与应将", body: "被将军时必须立刻化解，可以移动将帅、吃掉攻击棋子、垫子或阻断线路。" },
      { title: "胜负判定", body: "将死对方获胜，长将、违规、超时或认输等情况按平台规则处理。" },
    ]),
    faq: zhFaq.slice(0, 4),
  },
  {
    id: "ZH-006",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/first-game/",
    route: "/first-game/",
    type: "help-detail",
    title: "开始第一盘对局 - 相弈象棋帮助",
    description: "从进入大厅、选择模式、匹配对手到完成第一盘中国象棋对局的步骤说明。",
    heroTitle: "开始第一盘对局",
    cta: [playCta],
    sections: detailSections("开始第一盘对局", ["进入对弈大厅或选择人机练习。", "确认局时、先后手和是否评分。", "完成走子、将军、认输或复盘操作。"]),
  },
  {
    id: "ZH-007",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/play-with-a-friend/",
    route: "/play-with-a-friend/",
    type: "help-detail",
    title: "好友对战 - 相弈象棋帮助",
    description: "创建私人象棋对局，复制邀请链接并与好友开始在线对战。",
    heroTitle: "好友对战",
    cta: [playCta],
    sections: detailSections("好友对战", ["登录并进入创建对局。", "选择私人房间和时间设置。", "复制邀请链接发送给好友。", "好友进入后开始对弈。"]),
  },
  {
    id: "ZH-008",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/how-to-create-puzzle/",
    route: "/how-to-create-puzzle/",
    type: "help-detail",
    title: "自定义残局 - 相弈象棋帮助",
    description: "学习如何创建、命名、保存和分享自定义中国象棋残局。",
    heroTitle: "自定义残局",
    cta: [{ label: "查看残局", href: "https://play.xiangqi.com/", variant: "primary", external: true }],
    sections: detailSections("自定义残局", ["进入残局或研究工具。", "摆放双方棋子并设置轮到哪方走。", "填写标题、说明和难度。", "保存后分享给其他玩家挑战。"]),
  },
  {
    id: "ZH-009",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/tournament/",
    route: "/tournament/",
    type: "help-detail",
    title: "比赛 - 相弈象棋帮助",
    description: "了解相弈象棋在线比赛的报名、签到、自动配对、积分和排名流程。",
    heroTitle: "在线比赛",
    cta: [{ label: "进入比赛大厅", href: "https://play.xiangqi.com/", variant: "primary", external: true }],
    sections: detailSections("在线比赛", ["查看赛事列表和规则。", "在报名时间内提交报名。", "开赛前签到并等待自动配对。", "完成对局后查看积分和排名。"], ["赛事页面需要展示报名条件、赛制、时间、奖励和常见问题。"]),
    faq: [{ question: "比赛需要提前报名吗？", answer: "多数比赛需要在开赛前报名并按时签到。" }],
  },
  {
    id: "ZH-010",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/invite/",
    route: "/invite/",
    type: "help-detail",
    title: "邀请好友 - 相弈象棋帮助",
    description: "通过邀请链接把好友带入相弈象棋，开始私人对局或加入平台。",
    heroTitle: "邀请好友",
    cta: [playCta],
    sections: detailSections("邀请好友", ["打开邀请或好友入口。", "生成邀请链接。", "通过聊天工具分享给好友。", "好友打开链接后登录或以访客身份进入。"]),
  },
  {
    id: "ZH-011",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/help/markers.html",
    route: "/help/markers/",
    type: "help-detail",
    title: "棋盘标记和箭头 - 相弈象棋帮助",
    description: "了解如何在棋盘上使用标记、箭头和分析提示辅助讲解棋局。",
    heroTitle: "棋盘标记和箭头",
    cta: [{ label: "进入研究", href: "https://play.xiangqi.com/", variant: "primary", external: true }],
    sections: detailSections("棋盘标记和箭头", ["进入研究或复盘界面。", "选择标记工具。", "在棋盘格点绘制箭头或高亮。", "清除标记或继续添加讲解。"]),
  },
  {
    id: "ZH-012",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/rating/",
    route: "/rating/",
    type: "help-detail",
    title: "等级分系统 - 相弈象棋帮助",
    description: "了解相弈象棋 Elo 等级分、评分对局、排行榜和匹配参考方式。",
    heroTitle: "等级分系统",
    cta: [{ label: "查看排行榜", href: "https://play.xiangqi.com/", variant: "primary", external: true }],
    sections: detailSections("等级分系统", ["参加评分对局。", "系统依据双方分差和胜负调整分数。", "分数用于展示排行榜和辅助匹配。"], ["等级分说明页需要包含公式解释、示例和相关帮助链接。"]),
    faq: [{ question: "非评分局会影响等级分吗？", answer: "非评分局通常不影响等级分，可用于练习或好友娱乐。" }],
  },
  {
    id: "ZH-013",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/support-home/",
    route: "/support-home/",
    type: "help-index",
    title: "帮助搜索 - 相弈象棋",
    description: "通过帮助搜索快速找到规则、对局、下载、比赛、残局、邀请和等级分说明。",
    heroTitle: "帮助搜索",
    cta: [{ label: "返回帮助中心", href: "/help/", variant: "primary" }],
    sections: helpIndexSections(zhHelpMenu, "搜索结果项目"),
  },
  {
    id: "ZH-014",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/articles/",
    route: "/articles/",
    type: "article-list",
    title: "教学文章 - 相弈象棋",
    description: "浏览棋谱导入、产品更新、新界面说明等相弈象棋教学与公告文章。",
    heroTitle: "教学文章",
    cta: [{ label: "如何下象棋", href: "/how-to-play-xiangqi/", variant: "primary" }],
    sections: [articleListSection],
    articleCards: zhArticleCards,
  },
  {
    id: "ZH-015",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/articles/import-game-notation/",
    route: "/articles/import-game-notation/",
    type: "article-detail",
    title: "棋谱导入的格式说明 - 相弈象棋",
    description: "说明棋谱导入支持的文本格式、回合写法、标题信息和常见错误。",
    heroTitle: "棋谱导入的格式说明",
    cta: [{ label: "返回文章列表", href: "/articles/", variant: "secondary" }],
    sections: articleSections("棋谱导入的格式说明", [
      "导入棋谱前需要确认文本编码正常，标题、对局双方、日期和走法应按约定顺序排列。",
      "走法部分建议逐回合书写，避免混用无法识别的符号。导入失败时先检查棋子名称、进退平和目标位置。",
      "成功导入后可进入研究界面复盘、添加变化并分享给其他棋友。",
    ]),
  },
  {
    id: "ZH-016",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/articles/product-update-2024-08/",
    route: "/articles/product-update-2024-08/",
    type: "article-detail",
    title: "相弈象棋产品更新 2024 年 8 月",
    description: "汇总 2024 年 8 月相弈象棋界面、导航、移动端和社区体验更新。",
    heroTitle: "相弈象棋产品更新 2024 年 8 月",
    cta: [{ label: "返回文章列表", href: "/articles/", variant: "secondary" }],
    sections: articleSections("相弈象棋产品更新 2024 年 8 月", [
      "本次更新优化了导航结构，让在线对弈、下载、帮助和教程入口更清晰。",
      "移动端布局经过调整，按钮、卡片和 FAQ 展开状态在手机宽度下更易操作。",
      "社区数据和赛事体验继续完善，帮助玩家更快找到合适对手和活动。",
    ]),
  },
  {
    id: "ZH-017",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/articles/new-interface/",
    route: "/articles/new-interface/",
    type: "article-detail",
    title: "相弈象棋新界面",
    description: "介绍相弈象棋新版界面的视觉变化、功能入口和使用反馈方式。",
    heroTitle: "相弈象棋新界面",
    cta: [{ label: "返回文章列表", href: "/articles/", variant: "secondary" }],
    sections: articleSections("相弈象棋新界面", [
      "新版界面强调更清晰的棋盘区域、更直接的对局入口和更一致的移动端体验。",
      "常用功能会围绕对弈、复盘、好友和赛事重新组织，减少用户寻找入口的成本。",
      "页面保留反馈入口，方便玩家提交界面建议和使用问题。",
    ]),
  },
  {
    id: "TCN-001",
    locale: "zh-Hant",
    sourceUrl: "https://www.zh.xiangqi.com/tcn/",
    route: "/tcn/",
    type: "home",
    title: "Xiangqi.com 相弈象棋 - 中國象棋線上玩",
    description: "繁中首頁按源站結構承接線上對弈、下載、教學文章、FAQ、SEO 長文和多裝置體驗。",
    heroTitle: "馬上進行中國象棋\n線上對戰吧！",
    cta: [tcnPlayCta, { label: "下載 App", href: "/tcn/download/", variant: "secondary" }],
    sections: [
      { id: "home-hero", kind: "hero", title: "繁中首頁首屏", body: ["紅色導航、主視覺、棋盤和兩個 CTA 對照繁中源站復刻。"] },
      ...tcnHomeSeoSections,
      {
        ...articleListSection,
        title: "教學文章",
        body: ["繁中首頁保留教學文章卡片、日期、摘要與更多入口。"],
      },
    ],
    faq: tcnFaq,
    articleCards: zhArticleCards.map((card) => ({
      ...card,
      title: card.title.replace("棋谱", "棋譜").replace("产品", "產品").replace("新界面", "新介面"),
    })),
  },
  {
    id: "TCN-002",
    locale: "zh-Hant",
    sourceUrl: "https://www.zh.xiangqi.com/tcn/support-home/",
    route: "/tcn/support-home/",
    type: "help-index",
    title: "幫助搜尋 - 相弈象棋",
    description: "繁中幫助搜尋頁，展示第一盤、比賽、等級分、下載和象棋規則等項目。",
    heroTitle: "幫助搜尋",
    cta: [{ label: "查看幫助項目", href: "/tcn/support-home/", variant: "primary" }],
    sections: helpIndexSections(tcnHelpMenu, "繁中幫助項目"),
    faq: tcnFaq,
  },
  {
    id: "TCN-003",
    locale: "zh-Hant",
    sourceUrl: "https://www.zh.xiangqi.com/tcn/first-game/",
    route: "/tcn/first-game/",
    type: "help-detail",
    title: "開始第一盤對局 - 相弈象棋幫助",
    description: "繁中第一盤教程，說明登入、進入大廳、選擇模式和完成首局。",
    heroTitle: "開始第一盤對局",
    cta: [tcnPlayCta],
    sections: detailSections("開始第一盤對局", ["進入對弈大廳或人機練習。", "選擇局時、先後手和評分設定。", "完成走子並在賽後查看復盤。"]),
  },
  {
    id: "TCN-004",
    locale: "zh-Hant",
    sourceUrl: "https://www.zh.xiangqi.com/tcn/tournament/",
    route: "/tcn/tournament/",
    type: "help-detail",
    title: "比賽 - 相弈象棋幫助",
    description: "繁中比賽教程，包含報名、簽到、配對、積分和排行榜。",
    heroTitle: "線上比賽",
    cta: [{ label: "進入比賽大廳", href: "https://play.xiangqi.com/", variant: "primary", external: true }],
    sections: detailSections("線上比賽", ["查看賽事列表與規則。", "在報名時間內完成報名。", "開賽前簽到並等待配對。", "賽後查看積分和名次。"]),
    faq: [{ question: "比賽是否需要簽到？", answer: "多數賽事需要在開賽前完成簽到，否則可能無法配對。" }],
  },
  {
    id: "TCN-005",
    locale: "zh-Hant",
    sourceUrl: "https://www.zh.xiangqi.com/tcn/rating/",
    route: "/tcn/rating/",
    type: "help-detail",
    title: "等級分系統 - 相弈象棋幫助",
    description: "繁中等級分頁，說明 Elo 評分、評分局、排行榜和配對參考。",
    heroTitle: "等級分系統",
    cta: [{ label: "查看排行榜", href: "https://play.xiangqi.com/", variant: "primary", external: true }],
    sections: detailSections("等級分系統", ["參加評分對局。", "系統依據雙方分差和結果調整分數。", "分數用於排行榜與配對參考。"]),
    faq: tcnFaq.slice(2),
  },
  {
    id: "TCN-006",
    locale: "zh-Hant",
    sourceUrl: "https://www.zh.xiangqi.com/tcn/mobile/",
    route: "/tcn/download/",
    type: "download",
    title: "下載 App - 相弈象棋",
    description: "繁中下載頁，保留 APK、Google Play、App Store 入口和安裝說明。",
    heroTitle: "下載相弈象棋 App",
    cta: [{ label: "進入網頁版", href: "https://play.xiangqi.com/", variant: "primary", external: true }],
    sections: zhDownloadSections.map((section) => ({
      ...section,
      title: section.title.replace("下载", "下載").replace("安装", "安裝"),
      body: section.body.map((text) =>
        text
          .replaceAll("下载", "下載")
          .replaceAll("移动端", "行動端")
          .replaceAll("网页版", "網頁版")
          .replaceAll("对弈", "對弈")
          .replaceAll("帐号", "帳號")
      ),
    })),
    faq: [{ question: "沒有 App 可以玩嗎？", answer: "可以，網頁版支援免安裝線上對弈。" }],
  },
  {
    id: "TCN-007",
    locale: "zh-Hant",
    sourceUrl: "https://www.zh.xiangqi.com/tcn/how-to-play/",
    route: "/tcn/how-to-play/",
    type: "tutorial",
    title: "象棋規則和入門教程 - 相弈象棋",
    description: "繁中規則教程，介紹棋盤、棋子走法、將軍、勝負和第一盤實戰。",
    heroTitle: "象棋規則",
    cta: [{ label: "開始第一盤", href: "/tcn/first-game/", variant: "primary" }],
    sections: tutorialSections("象棋規則", [
      { title: "棋盤擺放", body: "紅黑雙方隔河相對，將帥位於九宮中央底線，車馬相士、炮和兵卒按固定位置排列。" },
      { title: "棋子走法", body: "車走直線，馬走日字，炮隔子吃子，象走田且不過河，士走斜線，兵卒過河後可橫走。" },
      { title: "將軍與應將", body: "被將軍時必須立即化解，可以移動將帥、吃掉攻擊棋子、墊子或阻斷線路。" },
      { title: "開始實戰", body: "新手可先用人機低難度熟悉規則，再進入真人匹配或朋友對局。" },
    ]),
    faq: tcnFaq,
  },
];

export const zhReplicaPages = pages;

export const zhReplicaPagesById = Object.fromEntries(
  zhReplicaPages.map((page) => [page.id, page])
) as Record<string, ReplicaPage>;

export const zhReplicaPagesByRoute = Object.fromEntries(
  zhReplicaPages.map((page) => [page.route, page])
) as Record<string, ReplicaPage>;

export function getZhReplicaPage(idOrRoute: string): ReplicaPage | undefined {
  return zhReplicaPagesById[idOrRoute] ?? zhReplicaPagesByRoute[idOrRoute];
}
