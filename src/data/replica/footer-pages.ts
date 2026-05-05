import type { ReplicaCta, ReplicaFaq, ReplicaPage, ReplicaSection } from "./types";

type UtilityPageSeed = {
  id: string;
  locale: "zh-CN" | "zh-Hant";
  sourceUrl: string;
  route: string;
  title: string;
  description: string;
  heroTitle: string;
  sections: ReplicaSection[];
  faq?: ReplicaFaq[];
  ctas?: ReplicaCta[];
};

const zhFooterFaq: ReplicaFaq[] = [
  {
    question: "这些页面和原站是什么关系？",
    answer: "它们是为本地重构站补齐的信息页副本，保留了原站的内容结构与导航作用，但跳转全部留在本地站点内。"
  }
];

const tcnFooterFaq: ReplicaFaq[] = [
  {
    question: "這些頁面是否仍然可以在本地瀏覽？",
    answer: "可以。繁中資訊頁已同步補成本地副本，用於承接頁腳導航，不再跳回源站。"
  }
];

function buildUtilityPage(seed: UtilityPageSeed): ReplicaPage {
  return {
    id: seed.id,
    locale: seed.locale,
    sourceUrl: seed.sourceUrl,
    route: seed.route,
    type: "help-detail",
    title: seed.title,
    description: seed.description,
    heroTitle: seed.heroTitle,
    ctas: seed.ctas ?? [],
    sections: seed.sections,
    faq: seed.faq ?? []
  };
}

export const footerReplicaPages: ReplicaPage[] = [
  buildUtilityPage({
    id: "ZH-018",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/team/",
    route: "/team/",
    title: "国际团队 | 技术团队 - 相弈象棋",
    description: "了解相弈象棋的国际团队与技术团队，包括成员职责、个人介绍与团队分工。",
    heroTitle: "国际团队",
    sections: [
      {
        title: "团队分工",
        body: [
          "相弈象棋围绕产品体验、内容运营、赛事服务与平台研发协同推进，确保网页端、移动端和帮助内容保持一致更新。",
          "本地重构版本延续这一结构，把原本散落在源站页脚的信息页集中补齐，方便用户在本地环境内完成浏览。"
        ]
      },
      {
        title: "协作方式",
        body: [
          "内容团队负责规则、教程与公告的整理，技术团队负责页面实现、资源本地化与多端适配。",
          "当产品或导航结构更新时，这些信息页也会一起同步，避免页脚出现跳回源站的断裂体验。"
        ]
      }
    ],
    faq: zhFooterFaq
  }),
  buildUtilityPage({
    id: "ZH-019",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/roadmap/",
    route: "/roadmap/",
    title: "产品路线图 - 相弈象棋",
    description: "查看相弈象棋在玩法、内容、赛事和多端体验上的后续规划。",
    heroTitle: "产品路线图",
    sections: [
      {
        title: "近期重点",
        body: [
          "近期规划聚焦帮助中心补全、本地副本页一致性、文章页体验优化以及下载页信息梳理。",
          "同时会继续完善教程、赛事说明、评级系统介绍与本地资源镜像能力。"
        ]
      },
      {
        title: "长期方向",
        body: [
          "长期会围绕多语言体验、移动端适配、内容可维护性和站内导航闭环继续打磨。",
          "所有新增入口会优先落在本地路由中，避免用户在浏览过程中被带回外部源站。"
        ]
      }
    ],
    faq: zhFooterFaq
  }),
  buildUtilityPage({
    id: "ZH-020",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/contact/",
    route: "/contact/",
    title: "联系我们 - 相弈象棋",
    description: "查看相弈象棋的反馈方式、问题提交方向与合作沟通入口说明。",
    heroTitle: "联系我们",
    sections: [
      {
        title: "反馈内容",
        body: [
          "如果你在使用相弈象棋时遇到页面异常、导航问题、内容错误或资源缺失，可以通过既有社区与客服渠道反馈。",
          "本地副本页重点承接信息展示，帮助用户明确应当反馈的问题类型与对应场景。"
        ]
      },
      {
        title: "沟通范围",
        body: [
          "常见沟通主题包括账号与对局体验、教程建议、赛事问题、下载说明以及本地化页面勘误。",
          "若是与帮助内容相关的问题，也可先回到帮助中心或相关文章页查找对应说明。"
        ]
      }
    ],
    ctas: [{ label: "返回帮助中心", href: "/help/", variant: "secondary" }],
    faq: zhFooterFaq
  }),
  buildUtilityPage({
    id: "ZH-021",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/limits/",
    route: "/limits/",
    title: "走法限制说明 - 相弈象棋",
    description: "集中说明相弈象棋中常见的走法限制、判负场景与平台中的对局规范。",
    heroTitle: "走法限制说明",
    sections: [
      {
        title: "规则边界",
        body: [
          "页面用于补充基础规则页未展开的限制说明，例如将帅照面、长将长捉、非法着法与超时判定等。",
          "玩家在进行真人对局、好友对战或赛事对局前，可先通过本页了解这些平台通用约束。"
        ]
      },
      {
        title: "对局提示",
        body: [
          "当系统检测到不合法走子或违规循环时，会阻止提交或按规则进行判定。",
          "如果你想先熟悉这些限制，建议结合“象棋规则”和“如何下象棋”页面一起阅读。"
        ]
      }
    ],
    ctas: [{ label: "查看象棋规则", href: "/how-to-play/", variant: "primary" }],
    faq: zhFooterFaq
  }),
  buildUtilityPage({
    id: "ZH-022",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/shop/",
    route: "/shop/",
    title: "商品周边 - 相弈象棋",
    description: "介绍相弈象棋周边与站内资源展示页在本地重构站中的承接方式。",
    heroTitle: "商品周边",
    sections: [
      {
        title: "页面用途",
        body: [
          "原站页脚中的商品入口主要承担品牌与内容延伸展示作用，本地副本页保留了这一信息结构。",
          "当前页面以说明与导览为主，后续若补充更多周边内容，也会优先挂接到本站内路由。"
        ]
      },
      {
        title: "浏览建议",
        body: [
          "如果你是第一次访问本站，建议先查看下载、规则、帮助中心与文章页，再回到周边内容页继续浏览。",
          "这样能保证整个探索路径都留在本地站点内部，交互体验更加连续。"
        ]
      }
    ],
    faq: zhFooterFaq
  }),
  buildUtilityPage({
    id: "ZH-023",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/resources/",
    route: "/resources/",
    title: "资源中心 - 相弈象棋",
    description: "汇总相弈象棋教程、帮助、文章与下载说明等本地可访问资源入口。",
    heroTitle: "资源中心",
    sections: [
      {
        title: "可用资源",
        body: [
          "资源中心适合集中承接规则页、教程页、文章列表、常见问题与下载说明等知识型内容。",
          "在本地重构站中，这些资源已经分别映射为可直接访问的本地页面。"
        ]
      },
      {
        title: "继续阅读",
        body: [
          "如果你想系统学习，可先从“如何下象棋”与“象棋规则”开始，再阅读文章页中的操作说明与产品更新。",
          "如果你更关注实战体验，则可以前往帮助中心查看好友对战、比赛和评级系统等说明。"
        ]
      }
    ],
    ctas: [{ label: "查看教学文章", href: "/articles/", variant: "primary" }],
    faq: zhFooterFaq
  }),
  buildUtilityPage({
    id: "ZH-024",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/fair-play/",
    route: "/fair-play/",
    title: "公平对弈政策 | 举报作弊棋手 - 相弈象棋",
    description: "查看相弈象棋公平对弈政策、举报作弊说明，以及页面内的“举报违规行为”跳转入口。",
    heroTitle: "公平对弈政策",
    sections: [
      {
        title: "公平原则",
        body: [
          "公平对弈页面用于说明平台在比赛、评级对局和日常对战中的基本行为准则。",
          "重点包括禁止借助外部辅助工具、恶意操控结果、扰乱赛事秩序或破坏其他玩家体验。"
        ]
      },
      {
        title: "处理方式",
        body: [
          "当系统或人工审核确认存在违规行为时，平台可能采取限制参与、取消成绩、回收荣誉或进一步审核等措施。",
          "本地副本页保留政策说明入口，便于用户在本站内直接找到相关规范。"
        ]
      }
    ],
    faq: zhFooterFaq
  }),
  buildUtilityPage({
    id: "ZH-025",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/polite/",
    route: "/polite/",
    title: "文明交流政策 - 相弈象棋",
    description: "说明相弈象棋社区交流、互动礼仪与用户沟通规范。",
    heroTitle: "文明交流政策",
    sections: [
      {
        title: "交流规范",
        body: [
          "平台鼓励理性讨论、友善交流和建设性反馈，反对辱骂、人身攻击、恶意骚扰与刷屏行为。",
          "这一页面用于补足页脚中的社区规范入口，让用户在本地站内即可查看基本准则。"
        ]
      },
      {
        title: "社区氛围",
        body: [
          "无论是帮助页、文章页还是赛事说明页，清晰且礼貌的交流都能帮助更多用户获得稳定体验。",
          "如果你需要反馈问题，建议结合具体页面、现象和复现步骤进行描述，沟通效率会更高。"
        ]
      }
    ],
    faq: zhFooterFaq
  }),
  buildUtilityPage({
    id: "TCN-008",
    locale: "zh-Hant",
    sourceUrl: "https://www.zh.xiangqi.com/tcn/about/",
    route: "/tcn/about/",
    title: "關於相弈象棋 - Xiangqi.com",
    description: "繁中版本的本地介紹頁，說明相弈象棋與本站重構的定位。",
    heroTitle: "關於相弈象棋",
    sections: [
      {
        title: "頁面定位",
        body: [
          "這裡補上繁中版本的品牌介紹頁，承接頁腳中的資訊入口，避免再次跳回源站。",
          "頁面聚焦站點定位、內容架構與本地重構的整體目標。"
        ]
      },
      {
        title: "本地重構方向",
        body: [
          "繁中副本將持續補齊教學、下載、規則與政策頁面，讓使用者在本地站內完成完整瀏覽。",
          "後續如有新增頁腳入口，也會優先建立對應的本地路由。"
        ]
      }
    ],
    faq: tcnFooterFaq
  }),
  buildUtilityPage({
    id: "TCN-009",
    locale: "zh-Hant",
    sourceUrl: "https://www.zh.xiangqi.com/tcn/team/",
    route: "/tcn/team/",
    title: "我們的團隊 - Xiangqi.com",
    description: "介紹繁中站點對應的內容、產品與技術協作角色。",
    heroTitle: "我們的團隊",
    sections: [
      {
        title: "協作內容",
        body: [
          "團隊共同維護規則說明、教學內容、賽事資訊與下載入口，確保繁中版本可以獨立承接使用流程。",
          "本地副本頁則負責讓頁腳資訊頁同樣留在站內，不再依賴源站導航。"
        ]
      },
      {
        title: "維護原則",
        body: [
          "當產品導航、幫助內容或文章結構更新時，相關資訊頁也會同步調整。",
          "這能避免使用者在繁中頁面中遇到跨站跳轉與體驗中斷。"
        ]
      }
    ],
    faq: tcnFooterFaq
  }),
  buildUtilityPage({
    id: "TCN-010",
    locale: "zh-Hant",
    sourceUrl: "https://www.zh.xiangqi.com/tcn/roadmap/",
    route: "/tcn/roadmap/",
    title: "產品路線圖 - Xiangqi.com",
    description: "整理繁中本地站在內容補齊與互動一致性上的規劃方向。",
    heroTitle: "產品路線圖",
    sections: [
      {
        title: "近期規劃",
        body: [
          "近期會持續補齊繁中幫助頁、說明頁與政策頁，讓頁腳導覽能完整留在本地站內。",
          "同時會逐步改善文章呈現、下載說明與多裝置瀏覽體驗。"
        ]
      },
      {
        title: "後續方向",
        body: [
          "後續將強化多語系一致性、本地內容可維護性與站內資訊架構的完整程度。",
          "所有新增頁腳入口都會優先規劃本地對應頁，而不是回退到源站。"
        ]
      }
    ],
    faq: tcnFooterFaq
  }),
  buildUtilityPage({
    id: "TCN-011",
    locale: "zh-Hant",
    sourceUrl: "https://www.zh.xiangqi.com/tcn/contact/",
    route: "/tcn/contact/",
    title: "聯絡我們 - Xiangqi.com",
    description: "說明繁中版本中可回報的問題類型與資訊頁的用途。",
    heroTitle: "聯絡我們",
    sections: [
      {
        title: "可回報問題",
        body: [
          "若你在繁中頁面中遇到內容錯漏、跳轉異常、版面問題或資訊不一致，可先整理具體情境再回報。",
          "本地副本頁主要承接資訊導覽，幫助使用者明確找到對應說明頁與聯絡方向。"
        ]
      },
      {
        title: "建議做法",
        body: [
          "描述問題時建議附上所在頁面、裝置環境與操作步驟，能更快協助定位。",
          "若是使用流程問題，也可先回到幫助中心或規則頁查看補充說明。"
        ]
      }
    ],
    ctas: [{ label: "返回幫助搜尋", href: "/tcn/support-home/", variant: "secondary" }],
    faq: tcnFooterFaq
  }),
  buildUtilityPage({
    id: "TCN-012",
    locale: "zh-Hant",
    sourceUrl: "https://www.zh.xiangqi.com/tcn/how-to-play-xiangqi/",
    route: "/tcn/how-to-play-xiangqi/",
    title: "棋子與走法 - Xiangqi.com",
    description: "補足繁中版本中棋盤結構、棋子走法與基礎入門說明。",
    heroTitle: "棋子與走法",
    sections: [
      {
        title: "基礎認識",
        body: [
          "頁面用來說明棋盤結構、各類棋子的移動方式，以及新手最常遇到的基本限制。",
          "這個入口原本在頁腳中會連回源站，現在改由本地副本頁承接。"
        ]
      },
      {
        title: "搭配閱讀",
        body: [
          "若想完整掌握對局規則，建議再搭配閱讀繁中版的規則頁與第一局說明頁。",
          "這樣能從棋子認識一路接到實戰流程與平台操作。"
        ]
      }
    ],
    ctas: [{ label: "查看繁中規則頁", href: "/tcn/how-to-play/", variant: "primary" }],
    faq: tcnFooterFaq
  }),
  buildUtilityPage({
    id: "TCN-013",
    locale: "zh-Hant",
    sourceUrl: "https://www.zh.xiangqi.com/tcn/limits/",
    route: "/tcn/limits/",
    title: "走法限制說明 - Xiangqi.com",
    description: "整理繁中版本中的非法著法、循環限制與常見判定補充。",
    heroTitle: "走法限制說明",
    sections: [
      {
        title: "規則限制",
        body: [
          "本頁補充將帥照面、長將長捉、非法走子與超時等平台常見判定。",
          "玩家在進入評分對局、好友對戰或比賽前，都可先透過此頁快速理解限制。"
        ]
      },
      {
        title: "使用情境",
        body: [
          "當系統阻止落子或對局結果與預期不同時，可先回到本頁對照相關規則。",
          "若需要完整入門內容，建議再搭配繁中規則頁與棋子走法頁一起閱讀。"
        ]
      }
    ],
    ctas: [{ label: "返回繁中規則", href: "/tcn/how-to-play/", variant: "primary" }],
    faq: tcnFooterFaq
  }),
  buildUtilityPage({
    id: "TCN-014",
    locale: "zh-Hant",
    sourceUrl: "https://www.zh.xiangqi.com/tcn/shop/",
    route: "/tcn/shop/",
    title: "商品周邊 - Xiangqi.com",
    description: "承接繁中頁腳中的周邊與延伸資訊入口。",
    heroTitle: "商品周邊",
    sections: [
      {
        title: "頁面角色",
        body: [
          "原站中的商品頁主要用於延伸品牌與內容瀏覽，本地副本頁保留這個資訊節點。",
          "目前以導覽與說明為主，確保頁腳中的相關連結仍能在本地站內打開。"
        ]
      },
      {
        title: "站內瀏覽",
        body: [
          "建議先從下載、規則、幫助與文章頁熟悉平台內容，再回到周邊頁繼續延伸閱讀。",
          "這樣能讓整條瀏覽路徑保持在本地站內，不會中途跳回源站。"
        ]
      }
    ],
    faq: tcnFooterFaq
  }),
  buildUtilityPage({
    id: "TCN-015",
    locale: "zh-Hant",
    sourceUrl: "https://www.zh.xiangqi.com/tcn/resources/",
    route: "/tcn/resources/",
    title: "資源中心 - Xiangqi.com",
    description: "匯總繁中可用的幫助、文章、下載與教學入口。",
    heroTitle: "資源中心",
    sections: [
      {
        title: "內容範圍",
        body: [
          "資源中心適合整理規則頁、教學頁、文章頁與下載說明等知識型內容。",
          "在本地重構站中，這些入口都已有對應的本地路由可直接訪問。"
        ]
      },
      {
        title: "閱讀路徑",
        body: [
          "若你偏向系統學習，可先閱讀棋子走法與規則頁；若偏向實戰操作，可再前往比賽、評分與好友對戰說明頁。",
          "所有這些入口現在都能由頁腳直接留在本地站內完成。"
        ]
      }
    ],
    ctas: [{ label: "查看繁中文章", href: "/articles/", variant: "primary" }],
    faq: tcnFooterFaq
  }),
  buildUtilityPage({
    id: "TCN-016",
    locale: "zh-Hant",
    sourceUrl: "https://www.zh.xiangqi.com/tcn/fair-play/",
    route: "/tcn/fair-play/",
    title: "公平對弈政策 - Xiangqi.com",
    description: "整理繁中版本中的公平對局與賽事秩序說明。",
    heroTitle: "公平對弈政策",
    sections: [
      {
        title: "基本準則",
        body: [
          "公平對弈頁用於說明平台在評分對局、比賽與日常互動中的基本行為標準。",
          "內容重點包括禁止作弊、惡意操控結果、干擾賽事流程或破壞其他玩家體驗。"
        ]
      },
      {
        title: "站內承接",
        body: [
          "此頁是頁腳政策入口在本地站的對應副本，可避免使用者查看規範時被帶回外部網站。",
          "後續若政策文案擴充，也能直接在本站內同步更新。"
        ]
      }
    ],
    faq: tcnFooterFaq
  }),
  buildUtilityPage({
    id: "TCN-017",
    locale: "zh-Hant",
    sourceUrl: "https://www.zh.xiangqi.com/tcn/polite/",
    route: "/tcn/polite/",
    title: "文明交流政策 - Xiangqi.com",
    description: "說明繁中站中的社群互動禮儀與溝通規範。",
    heroTitle: "文明交流政策",
    sections: [
      {
        title: "互動禮儀",
        body: [
          "平台鼓勵理性討論、友善回饋與清楚表達，並反對辱罵、騷擾、惡意挑釁與洗版行為。",
          "本頁補齊頁腳中的社群規範入口，讓政策內容能直接在本地站內查看。"
        ]
      },
      {
        title: "回報建議",
        body: [
          "若需要反映問題，建議搭配具體頁面、現象與操作步驟一併描述，能更快協助確認。",
          "良好的交流方式也能幫助其他使用者更有效率地獲得支援。"
        ]
      }
    ],
    faq: tcnFooterFaq
  })
];
