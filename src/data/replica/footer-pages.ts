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
    id: "ZH-039",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/slash/",
    route: "/slash/",
    title: "斜杠命令 - 相弈象棋",
    description:
      "我们即将推出一系列斜杠命令，用户可直接在聊天中输入相关命令。因此，用户不仅能用聊天输入框给其他用户发送消息，还可直接给系统发送消息和请求。",
    heroTitle: "斜杠命令",
    sections: [
      {
        title: "斜杠命令",
        body: [
          "我们即将推出一系列斜杠命令，用户可直接在聊天中输入相关命令。因此，用户不仅能用聊天输入框给其他用户发送消息，还可直接给系统发送消息和请求。",
          "以下是我们当前正在开发的斜杠命令。如对斜杠命令有其他想法，请发送邮件至 help@xiangqi.com，谢谢！"
        ]
      }
    ],
    faq: []
  }),
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
      { label: "版本发布公告", href: "/sys-nd/22.html" },
          { label: "help@xiangqi.com", href: "mailto:help@xiangqi.com" }
        ]
      }
    ],
    faq: []
  }),
  buildUtilityPage({
    id: "ZH-020C",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/contact/",
    route: "/contact/",
    title: "联系我们 | 关注我们 - 相弈象棋",
    description:
      "想认识我们的团队吗？请在美东时间每周六上午9点至11点（北京时间晚上9点至11点）登录 xiangqi.com，并通过当前页提供的社交渠道、公众号二维码和邮箱与我们联系。",
    heroTitle: "关注我们",
    sections: [
      {
        title: "联系与关注",
        body: [
          "想认识我们的团队吗？请在美东时间每周六上午9点至11点（北京时间晚上9点至11点）登录 xiangqi.com。",
          "在我们的 Facebook、Instagram、WhatsApp、YouTube 和 Discord 上关注我们的最新动态，加入 Discord 群组结识其他玩家。"
        ],
        links: [
          { label: "Facebook", href: "https://www.facebook.com/xiangqichess/", external: true },
          { label: "Instagram", href: "http://instagram.com/xiangqichess", external: true },
          { label: "WhatsApp", href: "https://chat.whatsapp.com/FwV8PQjH1xVKKfocOGgKl5", external: true },
          { label: "YouTube", href: "https://www.youtube.com/c/XiangqiChineseChess", external: true },
          { label: "Discord", href: "https://discord.gg/nDUBMUEjpc", external: true }
        ]
      },
      {
        title: "公众号与邮箱",
        body: [
          "扫描二维码订阅我们的微信公众号。",
          "如有任何问题或建议，请发送邮件至 help@xiangqi.com。"
        ],
        image: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAg47z6qwYo8PPjwwYwgAo4gAo.jpg",
        imageAlt: "相弈象棋微信公众号二维码",
        links: [{ label: "help@xiangqi.com", href: "mailto:help@xiangqi.com" }]
      }
    ],
    ctas: [{ label: "返回首页", href: "/", variant: "secondary" }],
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
              { label: "文章", href: "/sys-nr/" }
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
    id: "ZH-037",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/bugs/",
    route: "/bugs/",
    title: "如何报错？ - 相弈象棋",
    description:
      "如遇系统出错，请发送邮件至help@xiangqi.com。我们乐于学习，精进不休。有时我们也会犯错，用户或将不时看到错误。但进步最快的方法就是从错误中学习！为帮助我们更快解决问题，用户可填写报错模板，点击“help@xiangqi.com”发送邮件。",
    heroTitle: "如何报错？",
    sections: [
      {
        title: "",
        body: [
          "我们乐于学习, 精进不休。",
          "有时我们也会犯错，用户或将不时看到错误。",
          "但进步最快的方法就是从错误中学习！",
          "为帮助我们更快解决问题，用户可填写报错模板，点击“help@xiangqi.com”发送邮件。"
        ]
      },
      {
        title: "",
        body: ["我们将迅速（约2-5个工作日）处理报错邮件。", "感谢您的耐心等待！"],
        image: "/mirror/31680567.s21i.faiusr.com_4_2_ABUIABAEGAAgiNfTqQYo4KvrsAYwjAc4jAc.png",
        imageAlt: "相弈象棋 bugs 页面中的报错邮件插图"
      }
    ],
    faq: []
  }),
  buildUtilityPage({
    id: "ZH-038",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/report/",
    route: "/report/",
    title: "举报违规行为 - 相弈象棋",
    description:
      "很多优秀的人在此汇聚一堂，但互联网世界难免鱼龙混杂。如发现他人出现传播低俗内容、冒犯威胁、恶意针对用户、发送垃圾邮件、对局作弊或粗暴对待对手等行为，请举报出现上述行为的玩家。",
    heroTitle: "举报违规行为",
    sections: [
      {
        title: "",
        body: [
          "很多优秀的人在此汇聚一堂，但互联网世界难免鱼龙混杂。",
          "如发现他人出现以下行为：",
          "传播低俗、淫秽或色情内容，包括文字、图片、链接等",
          "冒犯、威胁或故意歧视任一种族、性别、性取向等",
          "诽谤、威胁或恶意针对用户",
          "发送“垃圾邮件”（未经批准发送商业网站链接等）",
          "对局时作弊、故意拖延时间、中途退出或粗暴对待对手",
          "请举报出现上述行为的玩家！"
        ]
      },
      {
        title: "举报",
        body: [
          "点击对方用户名，进入个人资料页。",
          "点击（!）举报，请在弹出的窗口中选择举报原因。",
          "选择举报原因，并在文本框中填写简要说明。",
          "请提供举报人认为可能相关的链接。",
          "选择举报原因后，单击提交。",
          "我们将认真审核举报内容。",
          "我们将创建举报人数据库，收到举报后由专门的团队即刻开展调查。",
          "如被举报达到一定次数，系统将标记、审核且可能关闭或暂停被举报人的账号。"
        ]
      },
      {
        title: "屏蔽",
        body: [
          "若遭他人骚扰，可点击其个人资料页上的“屏蔽”按钮将其屏蔽。",
          "遭屏蔽的用户无法向您发送消息或发起挑战。",
          "若此人尝试向您发送信息或发起挑战，其将收到已被屏蔽的通知。"
        ]
      },
      {
        title: "静音",
        body: ["您还可将聊天和通知静音以及在游戏大厅聊天信息推送视图中隐藏其他用户。"]
      }
    ],
    faq: []
  })
];
