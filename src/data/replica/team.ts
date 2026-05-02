export type TeamMember = {
  name: string;
  role: string;
  location?: string;
  bio: string[];
  image: string;
  imageAlt: string;
  link?: {
    label: string;
    href: string;
    external?: boolean;
  };
};

export type TeamGroup = {
  title: string;
  members: TeamMember[];
};

export const zhTeamGroups: TeamGroup[] = [
  {
    title: "国际团队",
    members: [
      {
        name: "Paul English",
        location: "美国",
        role: "创始人",
        bio: [
          "Paul 是相弈象棋的创始人，此前还和他人联合创立了 Kayak.com 和 Lola.com。他常驻波士顿。",
          "Paul 非常期待在相弈象棋和大家下象棋。"
        ],
        image: "/mirror/team/paul-english.png",
        imageAlt: "Paul English 肖像",
        link: {
          label: "如需了解更多关于他的信息，请前往 paulenglish.com。",
          href: "https://paulenglish.com",
          external: true
        }
      },
      {
        name: "David Kwan",
        location: "中国香港",
        role: "总经理",
        bio: [
          "David 是一位高级象棋教练和软件管理专家，他在相弈象棋负责运营工作。",
          "此前，他共同创立了 hok6.com 并开发了同行网络应用 UrHeard。出于对向全球推广中国象棋的热情，他致力于将相弈象棋打造成象棋爱好者的最佳平台。"
        ],
        image: "/mirror/team/david-kwan.jpg",
        imageAlt: "David Kwan 肖像"
      },
      {
        name: "Johnny Chen",
        location: "中国",
        role: "公平竞技专员",
        bio: [
          "Johnny 是前广东象棋队成员，曾获全国智力运动会青年团体象棋第三名及全国少年象棋赛男子14岁组第二名。",
          "现主要在业余时间推广象棋，希望让更多人喜欢这项运动。他在相弈象棋负责网站的反作弊检查。"
        ],
        image: "/mirror/team/johnny-chen.jpg",
        imageAlt: "Johnny Chen 肖像"
      },
      {
        name: "Hiudy Tsang",
        location: "中国香港",
        role: "创意经理",
        bio: [
          "Hiudy 负责管理和执行平台的数字化营销策略。",
          "她创作了各类精美的视频和图像设计，期望将相弈象棋打造成全球各地象棋玩家的首选平台。"
        ],
        image: "/mirror/team/hiudy-tsang.jpg",
        imageAlt: "Hiudy Tsang 肖像"
      },
      {
        name: "Calvin Chan",
        location: "中国香港",
        role: "平台管理员",
        bio: [
          "Calvin 是一个象棋爱好者，已经下了象棋多年。",
          "他是相弈象棋的平台管理员。"
        ],
        image: "/mirror/team/calvin-chan.png",
        imageAlt: "Calvin Chan 肖像"
      },
      {
        name: "Jason Chi",
        location: "中国香港",
        role: "内容创作者",
        bio: ["Jason 负责创作象棋教学文章和视频。"],
        image: "/mirror/team/jason-chi.png",
        imageAlt: "Jason Chi 肖像"
      }
    ]
  },
  {
    title: "技术团队",
    members: [
      {
        name: "Bilal Zaib",
        location: "巴基斯坦",
        role: "开发总监",
        bio: [
          "Bilal 擅长解决棘手问题，并确保平台上的所有功能运行顺畅。",
          "他领导团队为全球象棋爱好者提供更好的平台。"
        ],
        image: "/mirror/team/bilal-zaib.jpg",
        imageAlt: "Bilal Zaib 肖像"
      },
      {
        name: "Huwaiza Tahir",
        location: "巴基斯坦",
        role: "后端工程师",
        bio: [
          "Huwaiza 是一名后端工程师，为我们设计简洁而有效的解决方案。",
          "他还在人工智能开发方面深有造诣。几年前，他利用 NLTK 和 AIML 等人工智能技术，开发了一个通过图灵测试的机器人。"
        ],
        image: "/mirror/team/huwaiza-tahir.jpg",
        imageAlt: "Huwaiza Tahir 肖像"
      },
      {
        name: "Khurram Mehmood",
        location: "巴基斯坦",
        role: "前端工程师",
        bio: [
          "Khurram 在相弈象棋负责前端工作，建设我们的平台，并给团队提供技术支持。",
          "加入我们之前，他曾负责 RockMaker Web 药物研发项目，并将团队从2名成员发展到15名。"
        ],
        image: "/mirror/team/khurram-mehmood.jpg",
        imageAlt: "Khurram Mehmood 肖像"
      },
      {
        name: "Altamash Shaban",
        location: "巴基斯坦",
        role: "高级产品经理",
        bio: [
          "Altamash 负责相弈象棋的用户体验设计。他表现出色，带来了卓越的用户体验。",
          "此前，他是 Graana.com（巴基斯坦头部在线房地产交易平台）的产品设计主管。"
        ],
        image: "/mirror/team/altamash-shaban.jpg",
        imageAlt: "Altamash Shaban 肖像"
      },
      {
        name: "Asad Shabir",
        location: "巴基斯坦",
        role: "移动应用工程师",
        bio: [
          "Asad 负责完善我们的移动应用程序，使其更便于用户使用。",
          "他是帮助我们 APP 研发的主要负责人。"
        ],
        image: "/mirror/team/asad-shabir.jpg",
        imageAlt: "Asad Shabir 肖像"
      },
      {
        name: "Mubasher Ikram",
        location: "巴基斯坦",
        role: "软件项目经理",
        bio: [
          "Mubasher 是 Scrum 敏捷开发的专家，擅长挖掘用户需求并规划项目。",
          "他有 8 年移动游戏和应用程序的项目管理经验。"
        ],
        image: "/mirror/team/mubasher-ikram.png",
        imageAlt: "Mubasher Ikram 肖像"
      },
      {
        name: "Muhammad Ammar",
        location: "巴基斯坦",
        role: "全栈工程师",
        bio: [
          "Ammar 在相弈象棋任职全栈工程师，主要负责前端工作。",
          "他主要负责相弈象棋的新功能开发。"
        ],
        image: "/mirror/team/muhammad-ammar.jpg",
        imageAlt: "Muhammad Ammar 肖像"
      },
      {
        name: "Asad Farooqi",
        location: "巴基斯坦",
        role: "前端工程师",
        bio: [
          "Asad 是 UI 设计和功能开发方面的专家。",
          "他在相弈象棋几乎所有新功能的开发都扮演着关键角色。"
        ],
        image: "/mirror/team/asad-farooqi.jpg",
        imageAlt: "Asad Farooqi 肖像"
      },
      {
        name: "Mahdeed Azhar",
        location: "巴基斯坦",
        role: "测试工程师",
        bio: [
          "Mahdeed 是网页和移动 APP 的专业测试人员。",
          "她通过测试来确保 APP 的稳定性，检查安全性问题，确保 APP 易于使用，并保持其功能随时间的良好运行。"
        ],
        image: "/mirror/team/mahdeed-azhar.jpg",
        imageAlt: "Mahdeed Azhar 肖像"
      },
      {
        name: "Sufian Mirza",
        location: "巴基斯坦",
        role: "全栈工程师",
        bio: [
          "Sufian 对于前端和后端开发都很擅长，能够为不同的问题提供流畅的解决方案。",
          "他对创新的热爱帮助他创造了卓越的用户体验。"
        ],
        image: "/mirror/team/sufian-mirza.jpg",
        imageAlt: "Sufian Mirza 肖像"
      }
    ]
  }
];
