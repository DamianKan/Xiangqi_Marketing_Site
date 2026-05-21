import type { ReplicaPage } from "./types";

const annotationImages = {
  intro: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAgk7a3rQYotvHO3QUw-w443QY.jpg",
  openNote: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAgl8C3rQYo2uGR6wQw-w443wY.jpg",
  boardAndNotes: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAg88G3rQYo6PGLBzD-DjjiBg.jpg",
  jumpToMove: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAgm8m3rQYogP3F7gEw-w444AY.jpg",
  editTitle: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAgxcq3rQYo6pyb8QIw-w443wY.jpg",
  saveTitle: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAgnMy3rQYo1aS1igYw-w444AY.jpg",
  reviewButton: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAg4c23rQYogOrPjgYw-w443QY.jpg",
  reportPage: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAgzM_3rQYo9cWyxAUw-A44oQY.jpg",
  analysisButton: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAgtNG3rQYojPWzjQUw-w444AY.jpg",
  addVariation: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAg59S3rQYoxqujzwQw-w444AY.jpg",
  saveDraft: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAg8Na3rQYowMXA6gYw-w444QY.jpg",
  confirmSave: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAgtNm3rQYoz-fBiQYw-w443wY.jpg",
  notesTab: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAgytq3rQYooPX4YTD_DjjhBg.jpg",
  deleteNoteEntry: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAgg9y3rQYouLOApQcwxwo4uQI.jpg",
  deleteNoteAction: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAgg-HXrQYotoLk-gYwxwo4uwI.jpg",
  openAnalysisMenu: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAg6PHXrQYo4fiJUDDKCji7Ag.jpg",
  customAnnotationButton: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAgxPLXrQYooOeq1wYwywI47QY.jpg",
  customAnnotationBoard: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAgw-PXrQYogMbE5gUwgA84iAg.jpg",
  cta: "/mirror/31680567.s21i.faiusr.com_2_2_ABUIABACGAAgkvTXrQYo_OqMkQcwgA84iAg.jpg"
} as const;

export const annotationReplicaPages: ReplicaPage[] = [
  {
    id: "ZH-043",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/help/annotation.html",
    route: "/help/annotation.html",
    type: "help-detail",
    title: "对局笔记 - 相弈象棋",
    description: "复刻源站当前“对局笔记”帮助页，完整展示注释、复盘、分析、保存与自定义对局注释流程。",
    heroTitle: "对局笔记",
    ctas: [],
    sections: [
      {
        title: "",
        body: ["对局过后，你可能想要为对局添加注释，用于自我研究或与朋友分享。那么，你可以使用我们的对局笔记功能来满足这个需求！"],
        image: annotationImages.intro,
        imageAlt: "对局笔记页面入口示意图"
      },
      {
        title: "",
        body: ["在接下来的教程中，我们将介绍如何使用对局笔记功能来注释您的对局，包括在相弈象棋上的对局以及其它自定义对局。"]
      },
      {
        title: "注释在相弈象棋上的对局",
        body: []
      },
      {
        title: "",
        body: ["点击底部的“注释”按钮"],
        image: annotationImages.openNote,
        imageAlt: "点击注释按钮示意图"
      },
      {
        title: "",
        body: ["可以看到，页面的左侧是棋盘，右侧是棋谱和注释的界面。"],
        image: annotationImages.boardAndNotes,
        imageAlt: "对局笔记界面布局示意图"
      },
      {
        title: "",
        body: ["您可以点击棋谱跳转到相应的局面，并在文本框中添加注释。"],
        image: annotationImages.jumpToMove,
        imageAlt: "通过棋谱跳转并添加注释示意图"
      },
      {
        title: "",
        body: ["您可以点击编辑图标来编辑对局笔记的标题。"],
        image: annotationImages.editTitle,
        imageAlt: "编辑对局笔记标题示意图"
      },
      {
        title: "",
        body: ["您可以在文本框中输入新的标题，然后点击保存按钮。"],
        image: annotationImages.saveTitle,
        imageAlt: "输入并保存新标题示意图"
      },
      {
        title: "",
        body: ["如果您想回顾自己在对局中的表现，请点击底部的\"复盘\"按钮。"],
        image: annotationImages.reviewButton,
        imageAlt: "点击复盘按钮示意图"
      },
      {
        title: "",
        body: ["复盘页面将为您生成一份对局报告，您可以在报告中查看对局的局势曲线和表现统计。"],
        image: annotationImages.reportPage,
        imageAlt: "复盘报告页面示意图"
      },
      {
        title: "",
        body: ["您还可以点击\"分析\"按钮来查看任意局面的软件分析。", "如果您想了解更多分析和复盘相关的功能信息，您可以查看这篇教程。"],
        image: annotationImages.analysisButton,
        imageAlt: "点击分析按钮示意图",
        links: [{ label: "这篇教程", href: "/analysis/" }]
      },
      {
        title: "",
        body: ["您可以直接在棋盘上走棋来添加变着。带有变着的棋步旁边会有括号，括号内的字母表示该变着。您可以点击它们来查看不同的变着。"],
        image: annotationImages.addVariation,
        imageAlt: "添加变着与查看分支示意图"
      },
      {
        title: "",
        body: ["在编辑笔记的过程中，点击底部的“保存”按钮，可以中途保存。"],
        image: annotationImages.saveDraft,
        imageAlt: "中途保存笔记示意图"
      },
      {
        title: "",
        body: ["点击弹窗上的“保存”按钮，就能保存好修改过的笔记！"],
        image: annotationImages.confirmSave,
        imageAlt: "确认保存笔记示意图"
      },
      {
        title: "",
        body: ["要查看或编辑此前保存的笔记，请转到您的个人页面，点击\"笔记\"选项卡。您将能够在这里看到您保存的所有笔记。"],
        image: annotationImages.notesTab,
        imageAlt: "个人页面中的笔记选项卡示意图"
      },
      {
        title: "",
        body: ["如果想删除笔记，可以点击编辑按钮。"],
        image: annotationImages.deleteNoteEntry,
        imageAlt: "进入笔记编辑示意图"
      },
      {
        title: "",
        body: ["如果想删除笔记，可以点击编辑按钮。"],
        image: annotationImages.deleteNoteAction,
        imageAlt: "删除笔记操作示意图"
      },
      {
        title: "",
        body: ["您也可以在相弈象棋注释您自己创建的对局！首先，打开菜单，然后选择\"分析\"选项。"],
        image: annotationImages.openAnalysisMenu,
        imageAlt: "打开分析菜单示意图"
      },
      {
        title: "",
        body: ["点击页面底部的\"注释\"按钮。"],
        image: annotationImages.customAnnotationButton,
        imageAlt: "自定义对局中的注释按钮示意图"
      },
      {
        title: "",
        body: ["页面会跳转到自定义对局的注释界面。您可以在棋盘上走棋并进行注释！有关注释系统的更多说明，请参考上文。"],
        image: annotationImages.customAnnotationBoard,
        imageAlt: "自定义对局注释界面示意图"
      },
      {
        title: "",
        body: ["来试试吧！"],
        image: annotationImages.cta,
        imageAlt: "进入注释功能按钮示意图",
        links: [{ label: "进入注释功能", href: "https://play.xiangqi.com/note/create", external: true }]
      }
    ],
    faq: [],
    articleCards: []
  }
];
