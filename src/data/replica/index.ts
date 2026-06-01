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
import type { ReplicaArticleCard, ReplicaCta, ReplicaFaq, ReplicaPage, ReplicaSection } from "./types";
import { resourceReplicaPages } from "./resource-pages";
import { manualReplicaPages } from "./manual-pages";
import { manualArticlePages } from "./manual-article-pages";
import { smotheredCannonReplicaPages } from "./smothered-cannon-page";
import { whiteFacedGeneralReplicaPages } from "./white-faced-general-page";
import { earthReplicaPages } from "./earth-page";
import { annotationReplicaPages } from "./annotation-page";
import { standaloneReplicaPages } from "./standalone-pages";

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

function prefixTraditionalChineseRoute(route: string): string {
  if (!route.startsWith("/")) {
    return route;
  }

  if (route === "/") {
    return "/tcn/";
  }

  if (route.startsWith("/tcn/") || route.startsWith("/en/") || route.startsWith("/vi/")) {
    return route;
  }

  return `/tcn${route}`;
}

function mapTraditionalChineseHref(href: string | undefined): string | undefined {
  if (!href) return href;

  if (href.startsWith("https://www.zh.xiangqi.com/")) {
    return prefixTraditionalChineseRoute(new URL(href).pathname);
  }

  if (href.startsWith("/")) {
    return prefixTraditionalChineseRoute(href);
  }

  return href;
}

function mapTraditionalChineseCta(cta: ReplicaCta): ReplicaCta {
  const href = mapTraditionalChineseHref(cta.href) || cta.href;

  return {
    ...cta,
    href,
    external: href.startsWith("/") ? false : cta.external
  };
}

function mapTraditionalChineseFaq(faq: ReplicaFaq): ReplicaFaq {
  return { ...faq };
}

const traditionalChinesePhrases = [
  ["简体中文", "簡體中文"],
  ["繁体中文", "繁體中文"],
  ["下载 APP", "下載 APP"],
  ["下载 App", "下載 App"],
  ["下载APK", "下載 APK"],
  ["下载按钮", "下載按鈕"],
  ["联系我们", "聯絡我們"],
  ["我们的", "我們的"],
  ["产品路线图", "產品路線圖"],
  ["产品更新", "產品更新"],
  ["产品", "產品"],
  ["帮助搜索", "幫助搜尋"],
  ["帮助中心", "幫助中心"],
  ["帮助", "幫助"],
  ["搜索", "搜尋"],
  ["开始第一盘对局", "開始第一盤對局"],
  ["开始第一盘", "開始第一盤"],
  ["第一盘", "第一盤"],
  ["开启", "開啟"],
  ["开始", "開始"],
  ["好友对战", "好友對戰"],
  ["邀请好友对弈", "邀請好友對弈"],
  ["邀请好友", "邀請好友"],
  ["人机对战", "人機對戰"],
  ["在线比赛", "線上比賽"],
  ["在线赛事", "線上賽事"],
  ["在线平台", "線上平台"],
  ["在线玩", "線上玩"],
  ["在线对弈", "線上對弈"],
  ["在线对战", "線上對戰"],
  ["对局", "對局"],
  ["对战", "對戰"],
  ["对弈", "對弈"],
  ["对手", "對手"],
  ["对局后", "對局後"],
  ["复盘", "復盤"],
  ["训练", "訓練"],
  ["练习", "練習"],
  ["学习", "學習"],
  ["观看", "觀看"],
  ["观战", "觀戰"],
  ["观众", "觀眾"],
  ["视频", "影片"],
  ["图形棋子", "圖形棋子"],
  ["图标", "圖標"],
  ["图腾", "圖騰"],
  ["规则", "規則"],
  ["等级分系统", "等級分系統"],
  ["等级分", "等級分"],
  ["排行榜", "排行榜"],
  ["资源", "資源"],
  ["团队", "團隊"],
  ["国际", "國際"],
  ["联系", "聯繫"],
  ["关于", "關於"],
  ["隐私政策", "隱私政策"],
  ["隐私", "隱私"],
  ["服务条款", "服務條款"],
  ["服务", "服務"],
  ["用户", "用戶"],
  ["账号", "帳號"],
  ["登录", "登入"],
  ["邮箱", "郵箱"],
  ["密码", "密碼"],
  ["注册", "註冊"],
  ["验证", "驗證"],
  ["进入", "進入"],
  ["大厅", "大廳"],
  ["创建", "創建"],
  ["选择", "選擇"],
  ["评分", "評分"],
  ["积分", "積分"],
  ["说明", "說明"],
  ["详细", "詳細"],
  ["说明页", "說明頁"],
  ["页面", "頁面"],
  ["页脚", "頁腳"],
  ["首页", "首頁"],
  ["网页端", "網頁版"],
  ["网页", "網頁"],
  ["网站", "網站"],
  ["移动端", "行動端"],
  ["手机应用", "手機應用"],
  ["手机", "手機"],
  ["电脑", "電腦"],
  ["应用", "應用"],
  ["系统", "系統"],
  ["语言", "語言"],
  ["问题", "問題"],
  ["步骤", "步驟"],
  ["按钮", "按鈕"],
  ["时区", "時區"],
  ["时间", "時間"],
  ["地点", "地點"],
  ["即时", "即時"],
  ["非即时", "非即時"],
  ["战术", "戰術"],
  ["战绩", "戰績"],
  ["体验", "體驗"],
  ["开局", "開局"],
  ["残局", "殘局"],
  ["棋盘", "棋盤"],
  ["将军", "將軍"],
  ["胜负", "勝負"],
  ["阅读更多", "閱讀更多"],
  ["阅读全文", "閱讀全文"],
  ["大师", "大師"],
  ["反馈", "回饋"],
  ["发展方向", "發展方向"],
  ["联系方式", "聯絡方式"],
  ["复刻", "復刻"],
  ["中国", "中國"],
  ["免费", "免費"],
  ["线下", "線下"],
  ["线上", "線上"]
] as const;

const traditionalChineseCharacters: Record<string, string> = {
  "万": "萬",
  "与": "與",
  "专": "專",
  "业": "業",
  "东": "東",
  "丝": "絲",
  "两": "兩",
  "个": "個",
  "丰": "豐",
  "为": "為",
  "义": "義",
  "乌": "烏",
  "乐": "樂",
  "乔": "喬",
  "习": "習",
  "乡": "鄉",
  "书": "書",
  "买": "買",
  "乱": "亂",
  "争": "爭",
  "于": "於",
  "亏": "虧",
  "云": "雲",
  "亚": "亞",
  "产": "產",
  "亩": "畝",
  "亲": "親",
  "亿": "億",
  "仅": "僅",
  "从": "從",
  "仓": "倉",
  "仪": "儀",
  "们": "們",
  "价": "價",
  "众": "眾",
  "优": "優",
  "会": "會",
  "伞": "傘",
  "伟": "偉",
  "传": "傳",
  "伤": "傷",
  "伦": "倫",
  "伪": "偽",
  "体": "體",
  "余": "餘",
  "佣": "傭",
  "侦": "偵",
  "侧": "側",
  "侨": "僑",
  "侣": "侶",
  "侥": "僥",
  "侦": "偵",
  "儿": "兒",
  "兑": "兌",
  "党": "黨",
  "兰": "蘭",
  "关": "關",
  "兴": "興",
  "养": "養",
  "兽": "獸",
  "内": "內",
  "册": "冊",
  "写": "寫",
  "军": "軍",
  "农": "農",
  "冲": "沖",
  "决": "決",
  "况": "況",
  "冻": "凍",
  "净": "淨",
  "凉": "涼",
  "减": "減",
  "几": "幾",
  "凤": "鳳",
  "凫": "鳧",
  "凭": "憑",
  "凯": "凱",
  "击": "擊",
  "凿": "鑿",
  "刘": "劉",
  "则": "則",
  "刚": "剛",
  "创": "創",
  "删": "刪",
  "别": "別",
  "刮": "颳",
  "制": "製",
  "剂": "劑",
  "剑": "劍",
  "剧": "劇",
  "办": "辦",
  "动": "動",
  "务": "務",
  "劝": "勸",
  "励": "勵",
  "劳": "勞",
  "势": "勢",
  "勋": "勳",
  "匀": "勻",
  "区": "區",
  "医": "醫",
  "华": "華",
  "协": "協",
  "单": "單",
  "卖": "賣",
  "卧": "臥",
  "卫": "衛",
  "却": "卻",
  "厅": "廳",
  "历": "歷",
  "压": "壓",
  "厉": "厲",
  "厦": "廈",
  "厨": "廚",
  "厩": "廄",
  "县": "縣",
  "叁": "參",
  "双": "雙",
  "发": "發",
  "变": "變",
  "叙": "敘",
  "叠": "疊",
  "号": "號",
  "叶": "葉",
  "后": "後",
  "吗": "嗎",
  "听": "聽",
  "启": "啟",
  "吴": "吳",
  "呐": "吶",
  "员": "員",
  "周": "週",
  "和": "和",
  "咏": "詠",
  "咙": "嚨",
  "咸": "鹹",
  "响": "響",
  "哑": "啞",
  "哔": "嗶",
  "唇": "脣",
  "唤": "喚",
  "啰": "囉",
  "啸": "嘯",
  "喷": "噴",
  "嘱": "囑",
  "团": "團",
  "园": "園",
  "围": "圍",
  "国": "國",
  "图": "圖",
  "圆": "圓",
  "圣": "聖",
  "场": "場",
  "坏": "壞",
  "块": "塊",
  "坚": "堅",
  "坛": "壇",
  "坝": "壩",
  "坞": "塢",
  "坟": "墳",
  "坠": "墜",
  "垄": "壟",
  "垅": "壠",
  "垒": "壘",
  "埃": "埃",
  "埙": "塤",
  "堑": "塹",
  "墙": "牆",
  "壮": "壯",
  "声": "聲",
  "壳": "殼",
  "处": "處",
  "备": "備",
  "复": "復",
  "够": "夠",
  "头": "頭",
  "夹": "夾",
  "夺": "奪",
  "奋": "奮",
  "奖": "獎",
  "妆": "妝",
  "妇": "婦",
  "妈": "媽",
  "妩": "嫵",
  "娱": "娛",
  "娄": "婁",
  "娅": "婭",
  "娇": "嬌",
  "娱": "娛",
  "孙": "孫",
  "学": "學",
  "宁": "寧",
  "宝": "寶",
  "实": "實",
  "宠": "寵",
  "审": "審",
  "宫": "宮",
  "宾": "賓",
  "宽": "寬",
  "宾": "賓",
  "对": "對",
  "寻": "尋",
  "导": "導",
  "将": "將",
  "层": "層",
  "属": "屬",
  "岁": "歲",
  "岂": "豈",
  "岗": "崗",
  "岛": "島",
  "岭": "嶺",
  "岳": "嶽",
  "峡": "峽",
  "币": "幣",
  "帅": "帥",
  "师": "師",
  "帐": "帳",
  "带": "帶",
  "帮": "幫",
  "库": "庫",
  "应": "應",
  "庙": "廟",
  "广": "廣",
  "庆": "慶",
  "庄": "莊",
  "床": "牀",
  "庐": "廬",
  "废": "廢",
  "开": "開",
  "异": "異",
  "弃": "棄",
  "张": "張",
  "弥": "彌",
  "弯": "彎",
  "弹": "彈",
  "强": "強",
  "归": "歸",
  "当": "當",
  "录": "錄",
  "彝": "彞",
  "彻": "徹",
  "征": "徵",
  "径": "徑",
  "从": "從",
  "忆": "憶",
  "忏": "懺",
  "忧": "憂",
  "怀": "懷",
  "态": "態",
  "怂": "慫",
  "怜": "憐",
  "总": "總",
  "恋": "戀",
  "恒": "恆",
  "恳": "懇",
  "恶": "惡",
  "恼": "惱",
  "悦": "悅",
  "悬": "懸",
  "惊": "驚",
  "惧": "懼",
  "惨": "慘",
  "惩": "懲",
  "惯": "慣",
  "想": "想",
  "愈": "癒",
  "爱": "愛",
  "爷": "爺",
  "营": "營",
  "战": "戰",
  "户": "戶",
  "扑": "撲",
  "执": "執",
  "扩": "擴",
  "扫": "掃",
  "扬": "揚",
  "扰": "擾",
  "抚": "撫",
  "抛": "拋",
  "抢": "搶",
  "护": "護",
  "报": "報",
  "担": "擔",
  "拟": "擬",
  "拢": "攏",
  "拥": "擁",
  "择": "擇",
  "挂": "掛",
  "挤": "擠",
  "挥": "揮",
  "损": "損",
  "换": "換",
  "据": "據",
  "掳": "擄",
  "掴": "摑",
  "掷": "擲",
  "掸": "撣",
  "揽": "攬",
  "搀": "攙",
  "摊": "攤",
  "撑": "撐",
  "摄": "攝",
  "摆": "擺",
  "摇": "搖",
  "摈": "擯",
  "敌": "敵",
  "数": "數",
  "斋": "齋",
  "断": "斷",
  "无": "無",
  "旧": "舊",
  "时": "時",
  "显": "顯",
  "晓": "曉",
  "暂": "暫",
  "术": "術",
  "机": "機",
  "杂": "雜",
  "权": "權",
  "条": "條",
  "来": "來",
  "杨": "楊",
  "极": "極",
  "构": "構",
  "枢": "樞",
  "样": "樣",
  "枪": "槍",
  "标": "標",
  "栋": "棟",
  "栏": "欄",
  "树": "樹",
  "栈": "棧",
  "桥": "橋",
  "检": "檢",
  "楼": "樓",
  "横": "橫",
  "欢": "歡",
  "欧": "歐",
  "步": "步",
  "岁": "歲",
  "残": "殘",
  "毁": "毀",
  "毕": "畢",
  "气": "氣",
  "汇": "匯",
  "汉": "漢",
  "汤": "湯",
  "沟": "溝",
  "没": "沒",
  "泽": "澤",
  "洁": "潔",
  "浅": "淺",
  "浇": "澆",
  "浓": "濃",
  "涂": "塗",
  "涛": "濤",
  "润": "潤",
  "涩": "澀",
  "淀": "澱",
  "渊": "淵",
  "渔": "漁",
  "湾": "灣",
  "湿": "濕",
  "温": "溫",
  "测": "測",
  "游": "遊",
  "滤": "濾",
  "满": "滿",
  "灭": "滅",
  "灯": "燈",
  "灵": "靈",
  "点": "點",
  "炼": "煉",
  "热": "熱",
  "爱": "愛",
  "爷": "爺",
  "狱": "獄",
  "献": "獻",
  "环": "環",
  "现": "現",
  "理": "理",
  "电": "電",
  "画": "畫",
  "畅": "暢",
  "疗": "療",
  "皱": "皺",
  "盘": "盤",
  "着": "著",
  "矶": "磯",
  "矿": "礦",
  "码": "碼",
  "砖": "磚",
  "礼": "禮",
  "祸": "禍",
  "离": "離",
  "种": "種",
  "积": "積",
  "称": "稱",
  "稳": "穩",
  "筑": "築",
  "签": "簽",
  "简": "簡",
  "粮": "糧",
  "纪": "紀",
  "级": "級",
  "约": "約",
  "红": "紅",
  "纤": "纖",
  "纲": "綱",
  "纳": "納",
  "纸": "紙",
  "纹": "紋",
  "练": "練",
  "组": "組",
  "细": "細",
  "织": "織",
  "终": "終",
  "绍": "紹",
  "经": "經",
  "绑": "綁",
  "结": "結",
  "绕": "繞",
  "绘": "繪",
  "给": "給",
  "络": "絡",
  "绝": "絕",
  "统": "統",
  "继": "繼",
  "绩": "績",
  "绪": "緒",
  "续": "續",
  "维": "維",
  "绵": "綿",
  "绿": "綠",
  "编": "編",
  "缘": "緣",
  "网": "網",
  "罚": "罰",
  "罗": "羅",
  "职": "職",
  "联": "聯",
  "闻": "聞",
  "聪": "聰",
  "肠": "腸",
  "肤": "膚",
  "胁": "脅",
  "胜": "勝",
  "脑": "腦",
  "脚": "腳",
  "脸": "臉",
  "脱": "脫",
  "舆": "輿",
  "舰": "艦",
  "艺": "藝",
  "节": "節",
  "芦": "蘆",
  "苏": "蘇",
  "药": "藥",
  "获": "獲",
  "营": "營",
  "蓝": "藍",
  "虑": "慮",
  "虚": "虛",
  "虫": "蟲",
  "虽": "雖",
  "虾": "蝦",
  "蚀": "蝕",
  "蚁": "蟻",
  "虽": "雖",
  "补": "補",
  "装": "裝",
  "裤": "褲",
  "见": "見",
  "观": "觀",
  "规": "規",
  "视": "視",
  "览": "覽",
  "觉": "覺",
  "触": "觸",
  "计": "計",
  "订": "訂",
  "认": "認",
  "讥": "譏",
  "讨": "討",
  "让": "讓",
  "训": "訓",
  "议": "議",
  "讯": "訊",
  "记": "記",
  "讲": "講",
  "设": "設",
  "访": "訪",
  "证": "證",
  "评": "評",
  "话": "話",
  "该": "該",
  "详": "詳",
  "语": "語",
  "误": "誤",
  "说": "說",
  "读": "讀",
  "课": "課",
  "调": "調",
  "请": "請",
  "论": "論",
  "谋": "謀",
  "谜": "謎",
  "谢": "謝",
  "谱": "譜",
  "贝": "貝",
  "贡": "貢",
  "败": "敗",
  "货": "貨",
  "质": "質",
  "贩": "販",
  "贺": "賀",
  "费": "費",
  "贵": "貴",
  "赁": "賃",
  "赛": "賽",
  "赞": "讚",
  "赵": "趙",
  "赶": "趕",
  "趋": "趨",
  "跃": "躍",
  "车": "車",
  "轨": "軌",
  "转": "轉",
  "轮": "輪",
  "软": "軟",
  "轻": "輕",
  "载": "載",
  "较": "較",
  "辅": "輔",
  "辆": "輛",
  "输": "輸",
  "辞": "辭",
  "边": "邊",
  "辽": "遼",
  "达": "達",
  "迁": "遷",
  "过": "過",
  "迈": "邁",
  "运": "運",
  "还": "還",
  "这": "這",
  "进": "進",
  "远": "遠",
  "违": "違",
  "连": "連",
  "迟": "遲",
  "适": "適",
  "选": "選",
  "递": "遞",
  "逻": "邏",
  "遗": "遺",
  "邮": "郵",
  "郁": "鬱",
  "郑": "鄭",
  "释": "釋",
  "里": "裡",
  "鉴": "鑒",
  "针": "針",
  "钟": "鐘",
  "钢": "鋼",
  "录": "錄",
  "钱": "錢",
  "铁": "鐵",
  "铃": "鈴",
  "销": "銷",
  "锁": "鎖",
  "锅": "鍋",
  "错": "錯",
  "长": "長",
  "门": "門",
  "闭": "閉",
  "问": "問",
  "闲": "閒",
  "间": "間",
  "闯": "闖",
  "队": "隊",
  "际": "際",
  "难": "難",
  "雏": "雛",
  "离": "離",
  "难": "難",
  "雾": "霧",
  "静": "靜",
  "顶": "頂",
  "顺": "順",
  "项": "項",
  "须": "須",
  "顾": "顧",
  "顿": "頓",
  "预": "預",
  "领": "領",
  "频": "頻",
  "题": "題",
  "颜": "顏",
  "额": "額",
  "风": "風",
  "飞": "飛",
  "饭": "飯",
  "饮": "飲",
  "馆": "館",
  "驱": "驅",
  "验": "驗",
  "马": "馬",
  "驻": "駐",
  "驾": "駕",
  "骂": "罵",
  "鱼": "魚",
  "鸡": "雞",
  "麦": "麥",
  "黄": "黃",
  "点": "點"
};

function traditionalizeText(text: string | undefined): string | undefined {
  if (!text) {
    return text;
  }

  let converted = text;

  for (const [source, target] of traditionalChinesePhrases) {
    converted = converted.replaceAll(source, target);
  }

  converted = Array.from(converted, (char) => traditionalChineseCharacters[char] || char).join("");

  return converted;
}

function traditionalizeTextList(values: string[] | undefined): string[] | undefined {
  return values?.map((value) => traditionalizeText(value) || value);
}

function traditionalizeSection(section: ReplicaSection): ReplicaSection {
  return {
    ...section,
    title: traditionalizeText(section.title) || section.title,
    body: traditionalizeTextList(section.body) || [],
    metaPrefix: traditionalizeText(section.metaPrefix),
    metaLinks: section.metaLinks?.map((link) => ({
      ...mapTraditionalChineseCta(link),
      label: traditionalizeText(link.label) || link.label
    })),
    metaSuffix: traditionalizeText(section.metaSuffix),
    subSections: section.subSections?.map((subSection) => ({
      ...subSection,
      title: traditionalizeText(subSection.title) || subSection.title,
      body: traditionalizeTextList(subSection.body) || [],
      list: traditionalizeTextList(subSection.list)
    })),
    imageAlt: traditionalizeText(section.imageAlt),
    imageCaption: traditionalizeText(section.imageCaption),
    table: section.table?.map((row) => row.map((cell) => traditionalizeText(cell) || cell)),
    links: section.links?.map((link) => ({
      ...mapTraditionalChineseCta(link),
      label: traditionalizeText(link.label) || link.label
    })),
    list: traditionalizeTextList(section.list),
    items: section.items?.map((item) => ({
      ...item,
      title: traditionalizeText(item.title) || item.title,
      description: traditionalizeText(item.description),
      links: item.links?.map((link) => ({
        ...mapTraditionalChineseCta(link),
        label: traditionalizeText(link.label) || link.label
      }))
    })),
    gallery: section.gallery?.map((item) => ({
      ...item,
      title: traditionalizeText(item.title) || item.title,
      imageAlt: traditionalizeText(item.imageAlt)
    }))
  };
}

function createTraditionalChineseCopy(page: ReplicaPage): ReplicaPage {
  const sourceUrl = page.sourceUrl.startsWith("https://www.zh.xiangqi.com/")
    ? `https://www.zh.xiangqi.com${prefixTraditionalChineseRoute(new URL(page.sourceUrl).pathname)}`
    : page.sourceUrl;

  return {
    ...page,
    locale: "zh-Hant",
    sourceUrl,
    route: prefixTraditionalChineseRoute(page.route),
    title: traditionalizeText(page.title) || page.title,
    description: traditionalizeText(page.description) || page.description,
    heroTitle: traditionalizeText(page.heroTitle) || page.heroTitle,
    heroSubtitle: traditionalizeText(page.heroSubtitle),
    ctas: page.ctas?.map((cta) => ({
      ...mapTraditionalChineseCta(cta),
      label: traditionalizeText(cta.label) || cta.label
    })),
    sections: page.sections.map(traditionalizeSection),
    faq: page.faq?.map((faq) => ({
      ...mapTraditionalChineseFaq(faq),
      question: traditionalizeText(faq.question) || faq.question,
      answer: traditionalizeText(faq.answer) || faq.answer
    })),
    articleCards: page.articleCards?.map((card) => ({
      ...card,
      title: traditionalizeText(card.title) || card.title,
      excerpt: traditionalizeText(card.excerpt) || card.excerpt,
      href: mapTraditionalChineseHref(card.href) || card.href
    }))
  };
}

const zhLegacyOverrideDisabledRoutes = new Set([
  "/h-col-139.html",
  "/contact/",
  "/about/",
  "/privacy/",
  "/terms/",
  "/badges/",
  "/graphics/",
  "/video/",
  "/chinese/",
  "/history/",
  "/admins/",
  "/support-home/",
  "/sys-msgBoard/",
  "/sys-login/",
  "/sys-pr/",
  "/sys-nr/",
  "/sys-pgr/",
  "/sys-nd/19.html",
  "/sys-nd/18.html",
  "/sys-nd/17.html",
  "/opening-elephant.html",
  "/opening-central-cannon.html",
  "/opening-angels-guide.html"
]);

function normalizePage(page: any): ReplicaPage {
  const skipLegacyOverrides = page.locale === "zh-CN" && zhLegacyOverrideDisabledRoutes.has(page.route);
  const zhSourceOverride = skipLegacyOverrides ? undefined : zhSourcePageOverrides[page.id];
  const usableZhSourceOverride = zhSourceOverride?.sections?.some((section: any) => section.body?.length)
    ? zhSourceOverride
    : undefined;
  const sourceOverride = skipLegacyOverrides ? undefined : sourcePageOverrides[page.id];
  const usableSourceOverride = sourceOverride?.sections?.some((section: any) => section.body?.length)
    ? sourceOverride
    : undefined;
  const corrected = {
    ...page,
    ...(usableZhSourceOverride || {}),
    ...(usableSourceOverride || {}),
    ...(skipLegacyOverrides ? {} : replicaPageCorrections[page.id] || {}),
    ...(skipLegacyOverrides ? {} : homePageOverrides[page.id as keyof typeof homePageOverrides] || {}),
    ...(skipLegacyOverrides ? {} : pageOverrides[page.id] || {})
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

const sourceReplicaPages = [
  ...zhReplicaPages,
  ...footerReplicaPages,
  ...resourceReplicaPages,
  ...manualReplicaPages,
  ...manualArticlePages,
  ...standaloneReplicaPages,
  ...annotationReplicaPages,
  ...smotheredCannonReplicaPages,
  ...whiteFacedGeneralReplicaPages,
  ...earthReplicaPages,
  ...enReplicaPages,
  ...viReplicaPages
].filter((page) => !page.route.startsWith("/tcn/"));

const normalizedReplicaPages = sourceReplicaPages.map(normalizePage);

const generatedTraditionalChinesePages = normalizedReplicaPages
  .filter((page) => page.locale === "zh-CN")
  .map(createTraditionalChineseCopy);

export const replicaPages: ReplicaPage[] = [
  ...normalizedReplicaPages,
  ...generatedTraditionalChinesePages
];

export const replicaPagesByRoute = new Map(replicaPages.map((page) => [page.route, page]));

export function getReplicaPageByRoute(route: string): ReplicaPage | undefined {
  const normalized = route.endsWith("/") || route.endsWith(".html") ? route : `${route}/`;
  return replicaPagesByRoute.get(normalized);
}
