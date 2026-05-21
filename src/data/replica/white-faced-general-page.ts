import type { ReplicaPage } from "./types";

export const whiteFacedGeneralReplicaPages: ReplicaPage[] = [
  {
    id: "ZH-041",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/white-faced-general/",
    route: "/white-faced-general/",
    type: "help-detail",
    title: "象棋教学 | 象棋基本杀法：白脸将 - 相弈象棋",
    description:
      "白脸将是利用「将帅不见面」规则进行攻杀的基本杀法，在中国象棋对局中非常常见。马上过来学习并挑战相弈象棋上的相关杀法题吧！",
    heroTitle: "白脸将",
    sections: [
      {
        title: "白脸将",
        body: ["白脸将是由于「将帅不见面」而成立的基本杀法。"],
        image: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAggfDTqQYotbvv-AUwswM46gM.jpg",
        imageAlt: "白脸将示意图"
      },
      {
        title: "「将帅不见面」是指：",
        body: [
          "在对弈时，我们不能「主动」把「将」或「帅」移到与对方「将」或「帅」成一直线，",
          "且中间没有任何棋子阻挡。",
          "换言之，如黑「将」主动横移，红「帅」可利用这规则吃掉黑「将」获胜。"
        ]
      },
      {
        title: "杀形示例及题目挑战",
        body: [],
        gallery: [
          {
            title: "白脸将（车）",
            image: "/mirror/31680567.s21i.faiusr.com_4_2_ABUIABAEGAAgkPHTqQYoiJ-jjQEw2QQ4nAU.png",
            imageAlt: "白脸将车杀法示例图"
          },
          {
            title: "白脸将（炮）",
            image: "/mirror/31680567.s21i.faiusr.com_4_2_ABUIABAEGAAgpPHTqQYovf_Q4wcw3gQ4sgU.png",
            imageAlt: "白脸将炮杀法示例图"
          }
        ]
      }
    ]
  }
];
