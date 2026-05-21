import type { ReplicaPage } from "./types";

export const smotheredCannonReplicaPages: ReplicaPage[] = [
  {
    id: "ZH-040",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/smothered-cannon/",
    route: "/smothered-cannon/",
    type: "help-detail",
    title: "象棋教学 | 象棋基本杀法：闷宫杀 - 相弈象棋",
    description:
      "闷宫杀是以炮针对对手的堡垒士进行攻杀的基本杀法，在中国象棋对局中非常常见。马上过来学习并挑战相弈象棋上的相关杀法题吧！",
    heroTitle: "象棋基本杀法",
    sections: [
      {
        title: "闷宫杀",
        body: ["闷宫杀是一个以炮针对对手的堡垒士进行攻杀的战术。"],
        image: "/mirror/31680567.s21i.faiusr.com_4_2_ABUIABAEGAAggOvTqQYosPGBggYw6wM4rAQ.png",
        imageAlt: "闷宫杀示意图"
      },
      {
        title: "闷宫杀成立的条件如下：",
        body: ["常见形状可分为底线闷官杀、肋线闷官杀、及宫顶线闷宫杀。"],
        list: [
          "对方作为我方炮架的士不能移动。",
          "对方的将或帅不能透过移动来避开炮的攻击。",
          "对方无法阻挡炮的攻击。",
          "没有棋子能消灭炮。"
        ]
      },
      {
        title: "杀形示例及题目挑战",
        body: [],
        gallery: [
          {
            title: "宫顶线闷宫杀",
            image: "/mirror/31680567.s21i.faiusr.com_4_2_ABUIABAEGAAgqe3TqQYoxoKQlgEwhwM4vQM.png",
            imageAlt: "宫顶线闷宫杀示例图"
          },
          {
            title: "底线闷宫杀",
            image: "/mirror/31680567.s21i.faiusr.com_4_2_ABUIABAEGAAgs_3TqQYo0qTP0gcwhAM4ugM.png",
            imageAlt: "底线闷宫杀示例图"
          },
          {
            title: "肋顶线闷宫杀",
            image: "/mirror/31680567.s21i.faiusr.com_4_2_ABUIABAEGAAgue3TqQYop_-RkAYwhwM4tAM.png",
            imageAlt: "肋顶线闷宫杀示例图"
          }
        ]
      }
    ]
  }
];
