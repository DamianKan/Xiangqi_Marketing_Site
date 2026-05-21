import type { ReplicaLocale } from "./types";

export const helpNav = {
  "zh-CN": [
    { label: "开启象棋之旅", href: "/help/" },
    { label: "好友对战", href: "/play-with-a-friend/" },
    { label: "自定义残局", href: "/how-to-create-puzzle/" },
    { label: "比赛", href: "/tournament/" }
  ],
  "zh-Hant": [
    { label: "開始象棋之旅", href: "/tcn/help/" },
    { label: "好友對戰", href: "/tcn/play-with-a-friend/" },
    { label: "自訂殘局", href: "/tcn/how-to-create-puzzle/" },
    { label: "比賽", href: "/tcn/tournament/" }
  ],
  en: [
    { label: "Help Home", href: "/en/help/" },
    { label: "Play with a Friend", href: "/en/play-with-a-friend/" },
    { label: "Create Puzzle", href: "/en/how-to-create-puzzle/" },
    { label: "Tournament", href: "/en/help/tournament/" }
  ],
  vi: [
    { label: "Bat dau", href: "/vi/help/" },
    { label: "Dau voi ban be", href: "/vi/play-with-a-friend/" },
    { label: "Tao the co", href: "/vi/how-to-create-puzzle/" },
    { label: "Giai dau", href: "/vi/tournament/" }
  ]
} satisfies Record<ReplicaLocale, { label: string; href: string; external?: boolean }[]>;

export const mainNav = {
  "zh-CN": {
    help: "帮助",
    download: "下载 App",
    howToPlay: "如何下象棋",
    downloadHref: "/mobile/",
    howToPlayHref: "/how-to-play-xiangqi/"
  },
  "zh-Hant": {
    help: "幫助",
    download: "下載 App",
    howToPlay: "如何下象棋",
    downloadHref: "/tcn/mobile/",
    howToPlayHref: "/tcn/how-to-play/"
  },
  en: {
    help: "Help",
    download: "Download App",
    howToPlay: "How to Play",
    downloadHref: "/en/",
    howToPlayHref: "/en/how-to-play-xiangqi/"
  },
  vi: {
    help: "Tro giup",
    download: "Tai App",
    howToPlay: "Cach choi",
    downloadHref: "/vi/mobile/",
    howToPlayHref: "/vi/how-to-play/"
  }
} satisfies Record<
  ReplicaLocale,
  {
    help: string;
    download: string;
    howToPlay: string;
    downloadHref: string;
    howToPlayHref: string;
  }
>;
