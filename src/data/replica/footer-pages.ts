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
    description: "以下是我们团队计划在 2024 年构建的一些高级功能，我们也会持续修复用户反馈的问题。",
    heroTitle: "产品路线图",
    sections: [
      {
        title: "",
        body: [
          "以下是我们团队计划在2024年构建的一些高级功能。我们每周仍将持续处理用户报告的错误，努力让网站和App变得完美！:)"
        ]
      },
      {
        title: "",
        body: [],
        list: [
          "用户界面翻新：崭新时尚的外观，提升浏览和游玩体验。",
          "新的手机 App：支持离线人机对战和玩家对局。",
          "私聊功能。",
          "多频道公共聊天室。",
          "自定义对局功能升级：创建公开挑战时可限制对手等级分；创建公开挑战后可直接挑战在线空闲玩家。",
          "课程功能升级：引入开局课程，提高开局知识。",
          "初学者助手：为等级分低于一定水平的玩家高亮显示一步内的潜在威胁和战术机会。",
          "玩家统计数据：全面分析对局表现，包括随时间变化的表现、先后手对局统计、不同用时下的表现、所用开局体系分析、开局/中局/残局表现分析、战术机会把握率，以及优劣势棋胜率。"
        ]
      },
      {
        title: "",
        body: [
          "另请参阅我们的版本发布公告。",
          "更多绝密功能正在酝酿中——我们想用这些功能给您带来惊喜！",
          "如果您有其他想要的功能，请发送邮件到 help@xiangqi.com 告诉我们！"
        ],
        links: [
          { label: "版本发布公告", href: "/articles/product-update-2024-08/" },
          { label: "help@xiangqi.com", href: "mailto:help@xiangqi.com" }
        ]
      }
    ],
    faq: []
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
    description: "复刻源站当前商品周边页，展示便携式中国象棋套装与 Jim Png 象棋书籍相关内容。",
    heroTitle: "商品周边",
    sections: [
      {
        title: "便携式中国象棋套装",
        body: [
          "源站当前商品页的主体是一套便携式中国象棋套装，配有双面棋子、棋盘、收纳袋和英文说明册。",
          "页面同时提供 eBay 与 Amazon 购买入口，并在下半部分展示 Jim Png 的象棋书籍。"
        ]
      },
      {
        title: "Jim Png 的象棋书籍",
        body: [
          "源站在本页集中展示了 Jim Png 已出版的象棋书籍，并通过 Amazon 作者页承接更多图书内容。",
          "本地复刻页仅使用当前源页的图片与信息结构进行还原。"
        ]
      }
    ],
    faq: []
  }),
  buildUtilityPage({
    id: "ZH-023",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/resources/",
    route: "/resources/",
    title: "相关资料及友情链接 - 相弈象棋",
    description: "按源站当前资源页重构的本地副本，集中整理站内资料与外部友情链接。",
    heroTitle: "相关资料及友情链接",
    sections: [
      {
        title: "站内资源",
        body: [
          "查看帮助和文章，继续阅读相弈象棋站内的教程、规则、资源与团队信息。"
        ],
        items: [
          {
            title: "帮助与文章",
            description: "查看帮助和文章。",
            links: [
              { label: "帮助", href: "/help/" },
              { label: "文章", href: "/articles/" }
            ]
          },
          {
            title: "国际象棋与中国象棋",
            description: "国际象棋与中国象棋（YouTube）。",
            links: [
              {
                label: "国际象棋与中国象棋",
                href: "https://www.youtube.com/watch?v=vklqOLf6mtU",
                external: true
              },
              { label: "YouTube", href: "/youtube/" }
            ]
          },
          {
            title: "象棋题库",
            description: "可在象棋题库查看他人创建的挑战，也可自行创建挑战。",
            links: [
              {
                label: "象棋题库",
                href: "https://play.xiangqi.com/puzzles",
                external: true
              }
            ]
          },
          {
            title: "棋盘编辑器",
            description: "可在棋盘编辑器创建自定义棋盘，用于文章或其他帖子。",
            links: [
              {
                label: "棋盘编辑器",
                href: "https://play.xiangqi.com/editor",
                external: true
              }
            ]
          },
          {
            title: "象棋图标",
            description: "象棋图标包含了网站使用的相关图标。",
            links: [{ label: "象棋图标", href: "/graphics/" }]
          },
          {
            title: "视频制作",
            description: "可在视频制作页面学习制作象棋视频，请参照视频范例。",
            links: [
              { label: "视频制作", href: "/video/" },
              {
                label: "视频范例",
                href: "https://www.youtube.com/watch?v=jQL_ClxS_RE",
                external: true
              }
            ]
          },
          {
            title: "中文短语",
            description: "可在中文短语版块学习对弈中常用的实用短语。",
            links: [{ label: "中文短语", href: "/chinese/" }]
          },
          {
            title: "排行榜",
            description: "可查看全网顶级棋手排行榜，包括中国、新加坡、马来西亚、越南、美国等。",
            links: [
              { label: "排行榜", href: "https://play.xiangqi.com/leaders", external: true },
              { label: "中国", href: "https://play.xiangqi.com/leaders/cn", external: true },
              { label: "新加坡", href: "https://play.xiangqi.com/leaders/sg", external: true },
              { label: "马来西亚", href: "https://play.xiangqi.com/leaders/my", external: true },
              { label: "越南", href: "https://play.xiangqi.com/leaders/vn", external: true },
              { label: "美国", href: "https://play.xiangqi.com/leaders/us", external: true }
            ]
          },
          {
            title: "产品路线图",
            description: "查看产品路线图。",
            links: [{ label: "产品路线图", href: "/roadmap/" }]
          },
          {
            title: "团队与联系",
            description: "认识我们的团队并获取我们的联系方式。",
            links: [
              { label: "我们的团队", href: "/team/" },
              { label: "联系方式", href: "/contact/" }
            ]
          }
        ]
      },
      {
        title: "外部链接",
        body: [],
        items: [
          {
            title: "中国象棋入门",
            description: "中国象棋入门（Rick Knowlton）。",
            links: [
              {
                label: "中国象棋入门",
                href: "https://www.youtube.com/watch?v=kSL7JErRMx8",
                external: true
              },
              {
                label: "Rick Knowlton",
                href: "https://play.xiangqi.com/@/rick-knowlton",
                external: true
              }
            ]
          },
          {
            title: "XQinEnglish.com",
            description: "XQinEnglish.com（Jim Hau Cheng Png）。",
            links: [
              { label: "XQinEnglish.com", href: "http://www.xqinenglish.com/", external: true },
              {
                label: "Jim Hau Cheng Png",
                href: "https://play.xiangqi.com/@/jim-png",
                external: true
              }
            ]
          },
          {
            title: "象棋数据库",
            description: "象棋数据库。",
            links: [{ label: "象棋数据库", href: "http://www.01xq.com/", external: true }]
          },
          {
            title: "Reddit",
            description: "Reddit。",
            links: [{ label: "Reddit", href: "http://reddit.com/r/xiangqi", external: true }]
          },
          {
            title: "中体象棋网",
            description: "中体象棋网。",
            links: [{ label: "中体象棋网", href: "http://www.gdchess.com/", external: true }]
          },
          {
            title: "天下棋苑",
            description: "天下棋苑。",
            links: [{ label: "天下棋苑", href: "http://www.01xq.com/", external: true }]
          },
          {
            title: "东萍象棋",
            description: "东萍象棋。",
            links: [{ label: "东萍象棋", href: "http://dpxq.com/", external: true }]
          },
          {
            title: "泓弈棋牌网",
            description: "泓弈棋牌网。",
            links: [{ label: "泓弈棋牌网", href: "http://www.tychess.com/forum.php", external: true }]
          },
          {
            title: "象棋套装",
            description: "象棋套装（亚马逊）。",
            links: [
              {
                label: "亚马逊",
                href: "https://www.amazon.com/Xiangqi-Portable-Chinese-15-inch-Carrying/dp/B09L1K3SK3?language=zh_CN&currency=CNY",
                external: true
              }
            ]
          },
          {
            title: "象棋书籍",
            description: "象棋书籍（亚马逊）。",
            links: [
              {
                label: "亚马逊",
                href: "https://www.amazon.com/Jim-Hau-Cheng-Png/e/B07SHGMFZF?qid=1593188344&ref=sr_ntt_srch_lnk_1&sr=8-1",
                external: true
              }
            ]
          }
        ]
      }
    ],
    faq: []
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
    description: "以下是我們團隊計劃在 2024 年打造的一些高級功能，同時也會持續修復使用者回報的問題。",
    heroTitle: "產品路線圖",
    sections: [
      {
        title: "",
        body: [
          "以下是我們團隊計劃在2024年構建的一些高級功能。我們每周仍將持續處理用戶報告的錯誤，努力讓網站和App變得完美！:)"
        ]
      },
      {
        title: "",
        body: [],
        list: [
          "使用者介面翻新：以全新而時尚的外觀提升瀏覽與遊玩體驗。",
          "新的手機 App：支援離線人機對戰與玩家對局。",
          "私聊功能。",
          "多頻道公共聊天室。",
          "自訂對局功能升級：建立公開挑戰時可限制對手等級分；建立公開挑戰後可直接挑戰線上空閒玩家。",
          "課程功能升級：引入開局課程，提升開局知識。",
          "初學者助手：為等級分低於一定水平的玩家高亮顯示一步內的潛在威脅與戰術機會。",
          "玩家統計數據：全面分析對局表現，包括隨時間變化的表現、先後手對局統計、不同用時下的表現、所用開局體系分析、開局/中局/殘局表現分析、戰術機會把握率，以及優劣勢棋勝率。"
        ]
      },
      {
        title: "",
        body: [
          "另請參閱我們的版本發布公告。",
          "更多絕密功能正在醞釀中——我們想用這些功能給您帶來驚喜！",
          "如果您有其他想要的功能，請發送郵件到 help@xiangqi.com 告訴我們！"
        ],
        links: [
          { label: "版本發布公告", href: "/articles/product-update-2024-08/" },
          { label: "help@xiangqi.com", href: "mailto:help@xiangqi.com" }
        ]
      }
    ],
    faq: []
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
    description: "復刻源站目前的商品周邊頁，展示便攜式中國象棋套裝與 Jim Png 象棋書籍內容。",
    heroTitle: "商品周邊",
    sections: [
      {
        title: "便攜式中國象棋套裝",
        body: [
          "源站目前商品頁的主體是一套便攜式中國象棋套裝，包含雙面棋子、棋盤、收納袋與英文說明冊。",
          "頁面同時提供 eBay 與 Amazon 購買入口，並在下半部展示 Jim Png 的象棋書籍。"
        ]
      },
      {
        title: "Jim Png 的象棋書籍",
        body: [
          "源站在本頁集中展示 Jim Png 已出版的象棋書籍，並透過 Amazon 作者頁承接更多圖書資訊。",
          "本地復刻頁僅使用目前源頁的圖片與資訊結構進行還原。"
        ]
      }
    ],
    faq: []
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
