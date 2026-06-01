import type { ReplicaCta, ReplicaPage, ReplicaSection } from "./types";

type StandalonePageSeed = {
  id: string;
  sourceUrl: string;
  route: string;
  title: string;
  description: string;
  heroTitle: string;
  sections: ReplicaSection[];
  ctas?: ReplicaCta[];
};

function buildStandalonePage(seed: StandalonePageSeed): ReplicaPage {
  return {
    id: seed.id,
    locale: "zh-CN",
    sourceUrl: seed.sourceUrl,
    route: seed.route,
    type: "help-detail",
    title: seed.title,
    description: seed.description,
    heroTitle: seed.heroTitle,
    ctas: seed.ctas ?? [],
    sections: seed.sections,
    faq: []
  };
}

export const standaloneReplicaPages: ReplicaPage[] = [
  buildStandalonePage({
    id: "ZH-045",
    sourceUrl: "https://www.zh.xiangqi.com/about/",
    route: "/about/",
    title: "我们的故事 - 相弈象棋",
    description: "复刻源站当前“我们的故事”页面内容，讲述 Xiangqi.com 与相弈象棋的创办经历。",
    heroTitle: "相弈象棋创办故事",
    ctas: [{ label: "查看团队", href: "/team/", variant: "primary" }],
    sections: [
      {
        title: "Xiangqi.com",
        body: [
          "在麻省理工学院就读时，两位越南同学教会了 Paul English 下中国象棋。从此之后，他便深深着迷于这款游戏。",
          "1997年，他决定创建一个网站，让人们可以在网上下中国象棋。最终，xiangqi.com 的服务器在七个国家安装上线，并吸引了超过 10 万名用户。"
        ]
      },
      {
        title: "重启与现在",
        body: [
          "后来网站一度中断。2020年，Paul 决定重新启动 xiangqi.com，从头设计新版网站，并把中文站命名为“相弈象棋”。",
          "全新的相弈象棋面向全球中国象棋爱好者，旨在向国际推广中国象棋，并以象棋为媒介发展跨国友谊。"
        ]
      },
      {
        title: "每周相聚",
        body: [
          "团队每周六都会在平台相聚，欢迎用户上线交友下棋，也欢迎继续给产品和内容提出建议。",
          "页面末尾也会继续引导用户前往团队页面查看更多成员。"
        ],
        links: [{ label: "我们的团队", href: "/team/" }]
      }
    ]
  }),
  buildStandalonePage({
    id: "ZH-046",
    sourceUrl: "https://www.zh.xiangqi.com/privacy/",
    route: "/privacy/",
    title: "隐私政策 - 相弈象棋",
    description: "说明平台如何收集、使用、保存与披露用户信息，以及用户可行使的数据权利。",
    heroTitle: "隐私政策",
    sections: [
      {
        title: "1. 信息收集",
        body: [
          "我们将收集以下用户个人信息，并在用户注册账号时使用这些信息来提供服务和管理账号。",
          "用户还可通过应用程序发送邀请或游戏挑战来添加好友；填写好友邮箱后，系统将发送邮件邀请其注册。",
          "应用程序还具有社交功能，用户可在当前或历史对弈页面聊天，也可在大厅观战进行中的对局。"
        ],
        list: ["姓名", "邮箱", "国家/地区"]
      },
      {
        title: "2. 数据存储",
        body: ["我们的数据存储在由 AWS 托管的安全服务器上。"]
      },
      {
        title: "3. 用户信息收集和使用",
        body: ["我们可能出于且仅出于以下目的收集、持有和使用用户个人信息："],
        list: [
          "用于技术评估，包括运营和改进应用程序、相关应用程序和相关社交媒体平台",
          "向用户提供应用程序和平台核心功能",
          "处理交易或正在进行的付款",
          "与用户联系和沟通",
          "履行我们的法律义务并解决可能存在的争议"
        ]
      },
      {
        title: "4. 用户权利和个人信息管理",
        body: [
          "用户可要求访问、导出、更正或删除其个人信息。",
          "如用户认为我们持有的个人信息不准确、过时、不完整或具有误导性，请通过页面提供的联系方式与我们联系。"
        ]
      },
      {
        title: "5. 联系方式",
        body: ["Xiangqi.com", "contact@xiangqi.com"]
      },
      {
        title: "6. 政策变更",
        body: ["为与时俱进，我们或将酌情更改本隐私政策，并通过应用程序或推送服务告知用户相关更改。"]
      }
    ]
  }),
  buildStandalonePage({
    id: "ZH-047",
    sourceUrl: "https://www.zh.xiangqi.com/terms/",
    route: "/terms/",
    title: "服务条款 - 相弈象棋",
    description: "相弈象棋当前服务条款页面，按源站服务条款页面内容与版式进行本地复刻。",
    heroTitle: "服务条款",
    sections: [
      {
        title: "1. 条款",
        body: ["用户访问此网站即表示其同意受本服务条款、所有适用法律法规之约束，并同意承担遵守当地适用法律的责任。"]
      },
      {
        title: "2. 用户许可",
        body: ["用户仅可在本网站持有一个账号，且应仅用于非商业目的。根据本许可，用户不得："],
        list: [
          "修改或复制本网站内容",
          "将上述内容用于商业目的或商业及非商业公开展示",
          "试图对本网站包含的软件进行反编译或逆向工程",
          "删除上述内容的版权或其他专利符号",
          "将上述内容传输给他人或通过“镜像”技术传输至其他服务器"
        ]
      },
      {
        title: "3. 用户注册",
        body: ["用户须在本网站注册账号。用户将提供个人邮箱地址，用于登录网站。"]
      },
      {
        title: "4. 免责声明",
        body: [
          "本网站资料均按“原样”提供。本网站不作出任何明示或默示保证。",
          "本网站亦不就用户使用其所含内容或相关内容或其外链网站所含内容的准确性、可能结果或可靠性作出任何保证和陈述。"
        ]
      },
      {
        title: "5. 责任限制",
        body: ["在任何情况下，本网站或其供应商均不为因使用或无法使用本网站而引起的任何损失承担责任。"]
      },
      {
        title: "6. 内容准确性",
        body: ["本网站所含内容可能出现技术、印刷或摄制等错误。本网站不保证所含内容之准确性、完整性或时效性。"]
      },
      {
        title: "7. 链接",
        body: ["本网站未审查与其链接的所有网站，亦不对此类外链网站内容负责。"]
      },
      {
        title: "8. 修订",
        body: ["本网站可随时修订应用程序服务条款，恕不另行通知。"]
      }
    ],
    ctas: [{ label: "免费畅玩", href: "/", variant: "primary" }]
  }),
  buildStandalonePage({
    id: "ZH-048",
    sourceUrl: "https://www.zh.xiangqi.com/badges/",
    route: "/badges/",
    title: "象棋徽章 - 相弈象棋",
    description: "通过相弈象棋软件平台便可以轻松实现线上中国象棋对弈，中国象棋在线玩，不受时间地点限制在线下象棋。",
    heroTitle: "象棋徽章",
    sections: [
      {
        title: "限时徽章",
        body: ["想在个人资料页点亮红色的象棋徽章吗？走过路过不要错过！"],
        items: [
          { title: "周游列国", description: "本月至少与五个国家的棋手对弈，即可获得此徽章。", links: [] },
          { title: "节节高升", description: "本月积分至少上升20分，即可获得此徽章！", links: [] },
          { title: "势如破竹", description: "连胜五场或以上，即可获得此徽章！", links: [] },
          { title: "稳中求胜", description: "连续至少四周每周获胜一次，即可获得此徽章。", links: [] },
          { title: "速战速决", description: "本月在5分钟限时对弈中至少获胜一次，即可获得此徽章。", links: [] }
        ]
      },
      {
        title: "永久徽章",
        body: [],
        items: [
          { title: "兵神", description: "用卒（兵）将死对方，即可获得此徽章。", links: [] },
          { title: "炮神", description: "用炮（砲）将死对方，即可获得此徽章。", links: [] },
          { title: "车神", description: "用车将死对方，即可获得此徽章。", links: [] },
          { title: "马神", description: "用马将死对方，即可获得此徽章。", links: [] },
          { title: "孙子", description: "用卒（兵）、车、炮（砲）、马各将死对方一次，即可获得此徽章！", links: [] }
        ]
      },
      {
        title: "查看更多关于象棋规则的信息",
        body: [],
        links: [
          { label: "象棋规则", href: "/how-to-play/" },
          { label: "棋子与走法", href: "/how-to-play-xiangqi/" },
          { label: "象棋等级分系统", href: "/rating/" }
        ]
      }
    ]
  }),
  buildStandalonePage({
    id: "ZH-049",
    sourceUrl: "https://www.zh.xiangqi.com/history/",
    route: "/history/",
    title: "中国象棋的历史和起源 - 相弈象棋",
    description:
      "象棋为何使用红子和黑子？为何红棋先走而黑棋后走？为什么将、帅不能碰面？刘邦、项羽和象棋有甚么关系？",
    heroTitle: "中国象棋的历史和起源",
    sections: [
      {
        title: "历史和传说",
        body: [
          "我们可以从棋盘、棋子、规则和战术背后的历史和传说中学到很多关于游戏规则的知识。",
          "象棋为何使用红子和黑子？刘邦率领起义军推翻秦朝，登基成为汉高祖。秦王的军队身穿黑色军服出征，败给了穿红衣的刘邦军队。"
        ],
        image: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAg3M3TqQYokKrqjAEwiwM46AI.jpg",
        imageAlt: "象棋棋子的历史配图"
      },
      {
        title: "象棋棋子",
        body: [
          "以下是每个棋子的名称、中文发音、对应的分值以及走法讲解。",
          "红子比黑子更显尊贵。根据历史记载，刘邦更多通过外交策略赢得胜利，用仁义使秦兵归顺。"
        ]
      },
      {
        title: "白脸将",
        body: [
          "为什么将、帅不能碰面？在广武山对峙中，刘邦对着项羽破口大骂，项羽一怒之下拿起弓箭射中了刘邦。",
          "有了这次濒死经历后，刘邦吓坏了，退到了牢牢保护他的军阵中。因此，将、帅不碰面是为了保持战场文明，同时也是为了避免己方棋子被致命冷箭射中。"
        ]
      }
    ]
  }),
  buildStandalonePage({
    id: "ZH-050",
    sourceUrl: "https://www.zh.xiangqi.com/admins/",
    route: "/admins/",
    title: "管理员 - 相弈象棋",
    description:
      "用户名旁带有黄色星号的用户拥有“管理员”权限。管理员的职责是协助我们维护网站的友好氛围，让大家可以在这里结识新朋友并提高棋艺。",
    heroTitle: "管理员",
    sections: [
      {
        title: "管理员",
        body: [
          "用户名旁带有黄色星号的用户拥有“管理员”权限。管理员的职责是协助我们维护网站的友好氛围，让大家可以在这里结识新朋友并提高棋艺。",
          "如果碰到管理员，就和他们打声招呼吧！如对网站有任何问题，也可随时询问他们。",
          "不过，管理员有权对违反公平对弈准则的玩家作出禁言或封号惩罚。全网禁言意味着其他玩家将无法收到您发出的信息。封号则意味着您的账号被停用，如需重返游戏平台，必须用新的个人资料重新创建账号。"
        ]
      },
      {
        title: "搜索获取更多相关文章",
        body: ["页面原版底部保留了搜索相关文章的输入框，用于继续查找相关说明。"],
        links: [{ label: "查看公平对弈政策", href: "/fair-play/" }]
      }
    ]
  }),
  buildStandalonePage({
    id: "ZH-051",
    sourceUrl: "https://www.zh.xiangqi.com/h-col-139.html",
    route: "/h-col-139.html/",
    title: "Xiangqi.com 页脚导航页 - 相弈象棋",
    description: "聚合页脚中的关于、帮助、下载与社交入口，作为源站页脚导航的完整承接页。",
    heroTitle: "Xiangqi.com 相弈象棋",
    ctas: [{ label: "前往系统导航页", href: "/sys-pgr/", variant: "primary" }],
    sections: [
      {
        title: "关于与帮助",
        body: ["源页底部两列分别集中展示关于类与帮助类链接。"],
        links: [
          { label: "我们的故事", href: "/about/" },
          { label: "我们的团队", href: "/team/" },
          { label: "产品路线图", href: "/roadmap/" },
          { label: "联系我们", href: "/contact/" },
          { label: "象棋规则", href: "/how-to-play/" },
          { label: "棋子与走法", href: "/pieces-and-moves/" },
          { label: "等级分系统", href: "/rating/" },
          { label: "象棋走法限制", href: "/limits/" }
        ]
      },
      {
        title: "更多、下载与社交",
        body: ["页面第三列集中展示更多页面入口，底部继续展示下载按钮、版权信息与社交入口。"],
        links: [
          { label: "商品周边", href: "/shop/" },
          { label: "资源", href: "/resources/" },
          { label: "公平对弈政策", href: "/fair-play/" },
          { label: "文明政策", href: "/polite/" },
          { label: "服务条款", href: "/terms/" },
          { label: "隐私政策", href: "/privacy/" }
        ]
      }
    ]
  }),
  buildStandalonePage({
    id: "ZH-052",
    sourceUrl: "https://www.zh.xiangqi.com/sys-msgBoard/",
    route: "/sys-msgBoard/",
    title: "留言板 - 相弈象棋",
    description: "对应源站的留言板页面，包含联系方式、留言表单与站内常用信息入口。",
    heroTitle: "留言板",
    sections: [
      {
        title: "留言信息",
        body: [
          "页面顶部包含昵称、邮箱、电话和内容等留言表单字段。",
          "页面下方还展示全部留言区域。"
        ]
      },
      {
        title: "底部导航",
        body: ["页面底部继续提供关于、帮助和更多三个栏目，以及版权和社交链接。"],
        links: [{ label: "联系页面", href: "/contact/" }]
      }
    ]
  }),
  buildStandalonePage({
    id: "ZH-053",
    sourceUrl: "https://www.zh.xiangqi.com/sys-login/",
    route: "/sys-login/",
    title: "注册 - 相弈象棋",
    description: "展示源站的登录、注册与下载引导入口，帮助用户进入对弈大厅或创建账号。",
    heroTitle: "注册",
    ctas: [
      { label: "前往登录", href: "https://play.xiangqi.com/account/signin?lang=zh-Hans", external: true, variant: "primary" },
      { label: "下载 App", href: "/mobile/", variant: "secondary" }
    ],
    sections: [
      {
        title: "注册与下载",
        body: [
          "页面主标题为“注册”，副标题强调通过相弈象棋软件平台即可轻松实现线上中国象棋对弈。",
          "页面同时展示 Google Play、Android APK 和 App Store 下载入口。"
        ]
      }
    ]
  }),
  buildStandalonePage({
    id: "ZH-054",
    sourceUrl: "https://www.zh.xiangqi.com/sys-pr/",
    route: "/sys-pr/",
    title: "产品筛选 - 相弈象棋",
    description: "对应源站的产品筛选界面，包含价格区间、排序栏与结果列表空状态展示。",
    heroTitle: "产品筛选",
    sections: [
      {
        title: "筛选工具栏",
        body: ["页面顶部提供价格区间输入框、确定按钮，以及“当前条件下搜索”输入框。"]
      },
      {
        title: "排序与空结果",
        body: [
          "页面中部提供名称、时间和价格三个排序入口。",
          "当前源页主体是空结果状态，并显示“未搜索到相关结果”的提示。"
        ]
      }
    ]
  }),
  buildStandalonePage({
    id: "ZH-055",
    sourceUrl: "https://www.zh.xiangqi.com/sys-profile/",
    route: "/sys-profile/",
    title: "个人资料 - 相弈象棋",
    description: "说明用户个人资料页中常见的展示模块，包括头像、战绩、徽章与公开信息。",
    heroTitle: "个人资料",
    sections: [
      {
        title: "资料模块",
        body: [
          "个人资料页通常会展示用户昵称、头像、国家地区、战绩、等级分与徽章等信息。",
          "这类页面既承担展示作用，也方便其他用户快速了解一位棋手的活跃情况。"
        ]
      },
      {
        title: "隐私与可见性",
        body: [
          "不同资料项可能受平台可见性设置影响，例如仅好友可见或部分信息默认隐藏。",
          "保留该页面有助于把与账号展示有关的系统路由一并补全。"
        ]
      }
    ]
  }),
  buildStandalonePage({
    id: "ZH-056",
    sourceUrl: "https://www.zh.xiangqi.com/sys-mCenter/",
    route: "/sys-mCenter/",
    title: "消息中心 - 相弈象棋",
    description: "概述消息中心中的通知、互动提醒、系统提示与站内消息管理方式。",
    heroTitle: "消息中心",
    sections: [
      {
        title: "消息类型",
        body: [
          "消息中心通常集中展示系统通知、好友互动、赛事提醒与其他站内更新信息。",
          "它帮助用户在一个入口里查看与自己相关的重要动态。"
        ]
      },
      {
        title: "使用场景",
        body: [
          "当用户参与比赛、收到挑战或关注的平台状态发生变化时，消息中心会成为主要查看入口。",
          "这也是账号体系与社区互动的重要组成部分。"
        ]
      }
    ]
  }),
  buildStandalonePage({
    id: "ZH-057",
    sourceUrl: "https://www.zh.xiangqi.com/sys-pgr/",
    route: "/sys-pgr/",
    title: "下象棋对弈游戏软件 | 中国象棋在线玩免费 | 真人人机对战 - 相弈象棋",
    description: "复刻相弈象棋源站当前 sys-pgr 页面内容，包含关于、帮助、更多栏目，三个下载按钮，以及源站当前页展示的搜索与社媒入口。",
    heroTitle: "Xiangqi.com 相弈象棋",
    ctas: [{ label: "返回首页", href: "/", variant: "primary" }],
    sections: [
      {
        title: "关于与帮助",
        body: ["页面前两列分别是关于与帮助栏目。"],
        links: [
          { label: "我们的故事", href: "/about/" },
          { label: "我们的团队", href: "/team/" },
          { label: "产品路线图", href: "/roadmap/" },
          { label: "联系我们", href: "/contact/" },
          { label: "象棋规则", href: "/how-to-play/" },
          { label: "棋子与走法", href: "/pieces-and-moves/" },
          { label: "等级分系统", href: "/rating/" },
          { label: "象棋走法限制", href: "/limits/" }
        ]
      },
      {
        title: "更多、下载与社交",
        body: [
          "页面第三列为更多栏目，底部展示 Google Play、Android APK、App Store 下载按钮。",
          "页面还保留知乎、微信公众号、哔哩哔哩、小红书和 WhatsApp 社交入口，以及搜索框和版权信息。"
        ],
        links: [
          { label: "商品周边", href: "/shop/" },
          { label: "资源", href: "/resources/" },
          { label: "公平对弈政策", href: "/fair-play/" },
          { label: "文明政策", href: "/polite/" },
          { label: "服务条款", href: "/terms/" },
          { label: "隐私政策", href: "/privacy/" }
        ]
      }
    ]
  }),
  buildStandalonePage({
    id: "ZH-058",
    sourceUrl: "https://www.zh.xiangqi.com/sys-sitemap/",
    route: "/sys-sitemap/",
    title: "站点地图 - 相弈象棋",
    description: "集中列出站点中的帮助页、内容页、系统页与文章页，方便快速浏览主要入口。",
    heroTitle: "站点地图",
    sections: [
      {
        title: "页面用途",
        body: [
          "站点地图页用于汇总站内的主要栏目、系统页面与内容入口，方便用户快速定位目标页面。",
          "对于内容层级较多的站点，它也常常是辅助 SEO 与人工导航的重要补充。"
        ]
      },
      {
        title: "与 sitemap 的关系",
        body: [
          "这里面向的是普通用户浏览，而 XML sitemap 更偏向搜索引擎抓取。",
          "两者用途不同，但都应在繁中路径下保持完整。"
        ]
      }
    ]
  }),
  buildStandalonePage({
    id: "ZH-059",
    sourceUrl: "https://www.zh.xiangqi.com/sys-cookie/",
    route: "/sys-cookie/",
    title: "Cookie 说明 - 相弈象棋",
    description: "说明站点如何使用 Cookie 与本地存储来支持登录状态、偏好设置与基础统计。",
    heroTitle: "Cookie 说明",
    sections: [
      {
        title: "Cookie 用途",
        body: [
          "Cookie 与本地存储通常用于保存登录状态、界面偏好、必要的站内会话信息与基本统计数据。",
          "这类页面帮助用户了解浏览器侧数据与账户体验之间的关系。"
        ]
      },
      {
        title: "与政策页联动",
        body: [
          "Cookie 说明页通常与隐私政策相互补充，共同构成平台的数据说明体系。",
          "保留该页面后，繁中路径下的政策类系统页会更加完整。"
        ],
        links: [{ label: "查看隐私政策", href: "/privacy/" }]
      }
    ]
  }),
  buildStandalonePage({
    id: "ZH-060",
    sourceUrl: "https://www.zh.xiangqi.com/sys-nd/17.html",
    route: "/sys-nd/17.html",
    title: "2024越南全国象棋个人赛-武国达爆冷夺冠 - 相弈象棋",
    description: "对应源站新闻详情页，报道 2024 越南全国象棋个人赛的赛况、冷门与冠军结果。",
    heroTitle: "2024越南全国象棋个人赛-武国达爆冷夺冠",
    sections: [
      {
        title: "黑马出击，爆冷连场",
        body: [
          "记2024年越南全国个人赛（4月13至22日在巴地头顿市举行）。",
          "2024越南全国象棋个人赛于4月13日至22日在巴地头顿市举行，武国达以8胜1和的成绩爆冷夺冠。"
        ]
      },
      {
        title: "赛事经过",
        body: [
          "文章正文继续介绍本届比赛的主要轮次、关键战局、最终名次和参赛亮点。",
          "末尾还保留了“点击此处查看更多精彩象棋新闻”的引导链接。"
        ]
      }
    ]
  }),
  buildStandalonePage({
    id: "ZH-061",
    sourceUrl: "https://www.zh.xiangqi.com/sys-nd/18.html",
    route: "/sys-nd/18.html",
    title: "马来西亚象棋盛会 · 两代棋王组合夺冠 - 相弈象棋",
    description: "对应源站新闻详情页，介绍马来西亚公开双人赛的举办背景、参赛阵容与赛后结果。",
    heroTitle: "马来西亚象棋盛会 · 两代棋王组合夺冠",
    sections: [
      {
        title: "赛事主题",
        body: [
          "文章介绍《拿督黄鸭圣市长杯》象棋公开双人赛的举办情况。",
          "正文依次展示开幕仪式、赛事剪影、闭幕仪式，以及成绩及奖励。"
        ]
      },
      {
        title: "赛事结构",
        body: [
          "页面中包含大量赛事现场图片与参赛嘉宾信息。",
          "结尾部分给出双人赛冠军和奖励说明。"
        ]
      }
    ]
  }),
  buildStandalonePage({
    id: "ZH-062",
    sourceUrl: "https://www.zh.xiangqi.com/sys-nd/19.html",
    route: "/sys-nd/19.html",
    title: "马来西亚冠军州属诞生！黎德志全胜获最佳个人 - 相弈象棋",
    description: "对应源站新闻详情页，报道马来西亚全国团体锦标赛的战况与最佳个人成绩。",
    heroTitle: "马来西亚冠军州属诞生！黎德志全胜获最佳个人",
    sections: [
      {
        title: "开幕与比赛亮点",
        body: [
          "文章记录马来西亚全国团体锦标赛的开幕仪式、比赛亮点与关键成绩。",
          "正文重点介绍各州代表队、最佳个人，以及团体名次。"
        ]
      },
      {
        title: "成绩",
        body: ["文章末段汇总最终成绩，并继续保留返回新闻链路的阅读路径。"]
      }
    ]
  }),
  buildStandalonePage({
    id: "ZH-063",
    sourceUrl: "https://www.zh.xiangqi.com/opening-elephant.html",
    route: "/opening-elephant.html",
    title: "象棋开局布局法：飞相布局主流变化简介 - 相弈象棋",
    description: "介绍飞相布局的基本思路、主流应对与常见后续变化，是一篇开局入门文章。",
    heroTitle: "飞相布局主流变化简介 - 相弈象棋",
    ctas: [{ label: "查看更多开局文章", href: "/sys-nr/", variant: "primary" }],
    sections: [
      {
        title: "开局特点",
        body: [
          "飞相布局第一步加固中路，并基本上排除了后补中炮的可能，在中路采取防守态势，旨在先巩固阵型再伺机进攻。",
          "文章随后分为左中炮、左过宫炮、左士角炮和右士角炮四个部分。"
        ]
      },
      {
        title: "章节结构",
        body: [
          "每一部分都介绍该应法的核心走向与布局思路。",
          "页面顶部保留“查看更多开局文章”的引导。"
        ]
      }
    ]
  }),
  buildStandalonePage({
    id: "ZH-064",
    sourceUrl: "https://www.zh.xiangqi.com/opening-central-cannon.html",
    route: "/opening-central-cannon.html",
    title: "象棋开局布局法：中炮布局主流变化简介 - 相弈象棋",
    description: "概述中炮体系的核心攻击思路，以及面对不同应法时的几种主流演变路径。",
    heroTitle: "中炮布局主流变化简介 - 相弈象棋",
    ctas: [{ label: "查看更多开局文章", href: "/sys-nr/", variant: "primary" }],
    sections: [
      {
        title: "开局特点",
        body: [
          "中炮布局第一步便瞄准黑方中卒，对黑将形成远程威慑，是进攻性最强的布局。",
          "文章随后按左马、右马、顺炮和列炮分章展开。"
        ]
      },
      {
        title: "章节结构",
        body: [
          "每个章节围绕一种常见应法，介绍变化主线和局面理解。",
          "它与飞相、仙人指路等文章共同构成开局学习入口。"
        ]
      }
    ]
  }),
  buildStandalonePage({
    id: "ZH-065",
    sourceUrl: "https://www.zh.xiangqi.com/opening-angels-guide.html",
    route: "/opening-angels-guide.html",
    title: "象棋开局布局法：仙人指路布局主流变化简介 - 相弈象棋",
    description: "介绍仙人指路的试探性开局思路，以及可向中炮或飞相等体系转换的主要变化。",
    heroTitle: "仙人指路布局主流变化简介 - 相弈象棋",
    ctas: [{ label: "查看更多开局文章", href: "/sys-nr/", variant: "primary" }],
    sections: [
      {
        title: "开局特点",
        body: [
          "“仙人指路”意为试探性开局，同时保留了演变为中炮类和飞相类的两种可能，可根据对方动向灵活调整。",
          "文章随后分为卒底炮、对卒、飞象和起马四节。"
        ]
      },
      {
        title: "章节结构",
        body: [
          "每一节都围绕一种常见应法，介绍其后续布局主线。",
          "这能为开局学习提供更完整的路径，而不仅是单纯记谱。"
        ]
      }
    ]
  })
];
