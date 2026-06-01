import type { ReplicaPage } from "./types";

export const resourceReplicaPages: ReplicaPage[] = [
  {
    id: "ZH-R001",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/youtube/",
    route: "/youtube/",
    type: "landing-or-help",
    title: "我们的Youtube频道 - 相弈象棋",
    description: "复刻源站当前 YouTube 页面，承接资源页中的站内跳转。",
    heroTitle: "我们的Youtube频道",
    sections: [
      {
        title: "我们的Youtube频道",
        body: [
          "请点击此处关注我们的Youtube频道，也欢迎在评论区留言、帮助我们提升排名哦！",
          "不要错过我们最受欢迎的象棋视频！如需自行制作Youtube视频，请点击此处查看教程。",
          "如有想看的视频内容，欢迎发送邮件至 help@xiangqi.com。"
        ],
        links: [
          {
            label: "最受欢迎的象棋视频",
            href: "https://www.youtube.com/watch?v=vklqOLf6mtU",
            external: true
          },
          {
            label: "视频制作教程",
            href: "/video/"
          },
          {
            label: "help@xiangqi.com",
            href: "mailto:help@xiangqi.com"
          }
        ]
      }
    ],
    faq: []
  },
  {
    id: "ZH-R002",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/graphics/",
    route: "/graphics/",
    type: "landing-or-help",
    title: "象棋图标 - 相弈象棋",
    description:
      "通过相弈象棋软件平台便可以轻松实现线上中国象棋对弈，中国象棋在线玩，不受时间地点限制在线下象棋。马上进行在线象棋对战吧！作为最国际化的线上象棋对战游戏平台，相弈象棋软件平台上有着来自世界各地超过四十个国家的棋手，是借助象棋对弈结交国际友人的最佳选择。玩家可以在网页版或手机 app 象棋在线平台根据个人喜好选择中国象棋真人对战或中国象棋人机对战进行象棋在线对弈。",
    heroTitle: "象棋图标",
    sections: [
      {
        title: "使用说明",
        body: [
          "如需使用我们的象棋图标，建议前往棋盘编辑器。在棋盘编辑器中，您可将棋子放在棋盘的任意位置。",
          "因本网站图片受版权保护（可免费使用，但需注明来源），截图发布时请务必在楚河汉界中附上本网站链接，便于受众知悉图片来源。",
          "如需使用整套棋子图标，请点击下方链接下载压缩文件。"
        ],
        links: [
          {
            label: "棋盘编辑器",
            href: "https://play.xiangqi.com/editor",
            external: true
          },
          {
            label: "象棋图标压缩包",
            href: "/mirror/Pieces.zip"
          }
        ]
      },
      {
        title: "图标与字体",
        body: [
          "棋子的中文图标采用了象棋的繁体汉字。国际图标则采用了最受欢迎的象棋英文网页维基百科象棋条目中的国际棋子图标。",
          "本网站标题字体为 Averia Serif Libre，正文字体为 Poppins，LOGO 字体为 Grenze。"
        ],
        links: [
          {
            label: "维基百科象棋条目",
            href: "https://en.wikipedia.org/wiki/Xiangqi#Pieces",
            external: true
          },
          {
            label: "Averia Serif Libre",
            href: "https://www.mianfeiziti.com/thread-3761.htm",
            external: true
          },
          {
            label: "Poppins",
            href: "https://www.mianfeiziti.com/thread-177505.htm",
            external: true
          },
          {
            label: "Grenze",
            href: "https://www.mianfeiziti.com/thread-72229.htm",
            external: true
          }
        ]
      },
      {
        title: "其他图标",
        body: ["以下是网站使用的其他图标，包括移动应用程序图标和网站顶部横幅。"],
        gallery: [
          {
            title: "小尺寸棋子图标",
            image: "/mirror/31680567.s21i.faiusr.com_4_2_ABUIABAEGAAg_PHJqQYo5NPz9AEwkQE4kQE.png",
            imageAlt: "小尺寸棋子图标"
          },
          {
            title: "中小尺寸棋子图标",
            image: "/mirror/31680567.s21i.faiusr.com_4_2_ABUIABAEGAAgvvLJqQYo6NeuvwYwxwI4bg.png",
            imageAlt: "中小尺寸棋子图标"
          },
          {
            title: "中尺寸棋子图标",
            image: "/mirror/31680567.s21i.faiusr.com_4_2_ABUIABAEGAAgzPLJqQYooIDI4gEwgAQ4kQE.png",
            imageAlt: "中尺寸棋子图标"
          },
          {
            title: "网站顶部横幅图标",
            image: "/mirror/31680567.s21i.faiusr.com_4_2_ABUIABAEGAAg9-LJqQYordW_gQMw1ws4ogI.png",
            imageAlt: "网站顶部横幅图标"
          }
        ]
      }
    ],
    faq: []
  },
  {
    id: "ZH-R003",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/video/",
    route: "/video/",
    type: "landing-or-help",
    title: "制作象棋视频 - 相弈象棋",
    description: "玩家可自行录制视频，在讲解行棋步骤时，视频画面可同时展示说话人和棋盘动态。详情请参照下方教程。",
    heroTitle: "制作象棋视频",
    sections: [
      {
        title: "教程说明",
        body: [
          "玩家可自行录制视频，在讲解行棋步骤时，视频画面可同时展示说话人和棋盘动态。详情请参照下方教程。",
          "该教程将介绍录制象棋教学视频所需的电脑配置以及本网站自带的功能。此教程还包含录制高清视频的若干窍门，便于制作者将视频发布到 Youtube 或其他平台。"
        ]
      },
      {
        title: "硬件要求",
        body: [],
        list: [
          "电脑内存（RAM）至少为4G(苹果或其他电脑均可)",
          "好的处理器（英特尔酷睿i5 2代或更高版本，其他同等处理器亦可）",
          "高清摄像头（可用电脑内置网络摄像头，但高清外置网络摄像头更佳，如罗技C920）",
          "收音设备（可用电脑内置麦克风或外置麦克风）",
          "建议使用辅助/外接显示器，但不强制"
        ]
      },
      {
        title: "软件要求",
        body: [],
        list: [
          "Windows、Mac或Linux",
          "推荐使用谷歌Chrome浏览器，但火狐或其他现代浏览器均可",
          "OBS Studio软件（免费开源软件）"
        ],
        links: [
          {
            label: "点击此处下载 OBS Studio",
            href: "https://obsproject.com/",
            external: true
          }
        ]
      },
      {
        title: "安装和设置 OBS Studio",
        body: [
          "关于OBS Studio的安装和设置，请参照 OBS实用教程。（顺便给视频点个赞，支持一下作者吧！）",
          "在电脑上完成OBS Studio设置后，可先录制几个视频试试水；如无问题，再正式开始录制视频。查看录制好的视频，检查音频、视频及录屏质量是否良好，随后再进行下一步。"
        ],
        links: [{ label: "OBS实用教程", href: "https://www.youtube.com/watch?v=EuSUPpoi0Vs", external: true }]
      },
      {
        title: "在我们的网站界面开始录制",
        body: [],
        list: [
          "确保OBS录制功能已开启，并将其最小化。",
          "关闭所有桌面通知（如WhatsApp或其他应用程序），避免视频录制中断。",
          "确保视频构图无误，并将浏览器窗口或操作系统菜单栏等无关界面排除在外。",
          "确保在开始游戏前有一段开场白，避免“直奔主题”。",
          "确保音频清晰，无背景噪音。",
          "确保摄像头拍摄清晰无遮挡，且人脸处于恰当位置。",
          "如需要，可提前准备脚本，在录制视频时用作参考。也可提前练习需要录制的内容，最后呈现准备充分的视频。"
        ],
        links: [{ label: "OBS教程的视频界面裁剪部分", href: "https://youtu.be/EuSUPpoi0Vs?t=224", external: true }]
      },
      {
        title: "本网站自带功能",
        body: [
          "在浏览器中打开我们的网站并登录账号。在游戏大厅开始新游戏或加入公开游戏。在进行上述操作时，可以一边录制一边讲解，也可在游戏开始后进行录制。除了实战录制外，还可使用我们的棋盘编辑器或谜题编辑器。",
          "若录制视频时采用网络摄像头拍摄，摄像头拍摄的画面在屏幕中的位置不应干扰视频主画面（如棋盘）。建议将摄像头拍摄的画面置于棋盘右侧的聊天区。",
          "如录制实时对局，可将摄像头拍摄的画面置于聊天区上半部分（因为玩家可能正在聊天，底部会弹出新消息）。",
          "如针对已结束的对局录制分析视频，则可将摄像头拍摄的画面置于聊天区下半部分，同时可在上半部分的空白区域投放自定义文案。"
        ],
        links: [
          {
            label: "棋盘编辑器",
            href: "https://play.xiangqi.com/editor",
            external: true
          },
          {
            label: "help@xiangqi.com",
            href: "mailto:help@xiangqi.com"
          }
        ]
      },
      {
        title: "投稿说明",
        body: [
          "完成视频录制后，检查是否符合上述质量标准。检查完毕后，即可将其发送至 help@xiangqi.com。",
          "我们后续将联系投稿人，说明视频用途，并在使用视频时署上投稿人的名字，以致谢意。"
        ]
      }
    ],
    faq: []
  },
  {
    id: "ZH-R004",
    locale: "zh-CN",
    sourceUrl: "https://www.zh.xiangqi.com/chinese/",
    route: "/chinese/",
    type: "landing-or-help",
    title: "中文短语 - 相弈象棋",
    description: "相弈象棋中文短语页面，按源站极简结构复刻。",
    heroTitle: "中文短语",
    sections: [
      {
        title: "中文短语",
        body: ["中文短语"]
      }
    ],
    faq: []
  }
];
