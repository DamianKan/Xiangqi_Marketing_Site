export type ReplicaCta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "download";
};

export type ReplicaSection = {
  heading: string;
  body: string[];
  imageAlt?: string;
  items?: string[];
};

export type ReplicaFaq = {
  question: string;
  answer: string;
};

export type ReplicaArticleCard = {
  title: string;
  href: string;
  excerpt: string;
  date?: string;
};

export type ReplicaPage = {
  id: string;
  locale: "vi";
  sourceUrl: string;
  route: string;
  type:
    | "home"
    | "tutorial"
    | "download"
    | "faq"
    | "help-detail"
    | "article-detail";
  title: string;
  description: string;
  heroTitle: string;
  cta: ReplicaCta[];
  sections: ReplicaSection[];
  faq?: ReplicaFaq[];
  articleCards?: ReplicaArticleCard[];
};

const commonFaq: ReplicaFaq[] = [
  {
    question: "Tôi có thể chơi cờ tướng trực tuyến miễn phí không?",
    answer:
      "Có. Người chơi có thể vào sảnh chơi trên web, luyện với máy hoặc tạo ván với bạn bè. Một số tính năng tài khoản như lưu lịch sử ván, theo dõi Elo và tham gia giải đấu cần đăng nhập để đồng bộ dữ liệu.",
  },
  {
    question: "Người mới nên bắt đầu từ đâu?",
    answer:
      "Hãy học cách xếp bàn cờ, tên từng quân và luật di chuyển cơ bản, sau đó chơi vài ván không tính điểm để quen nhịp. Trang hướng dẫn /vi/how-to-play/ và các bài viết luật chơi là lộ trình phù hợp cho người mới.",
  },
  {
    question: "Xiangqi.com có ứng dụng di động không?",
    answer:
      "Có. Trang /vi/mobile/ giới thiệu lựa chọn chơi trên trình duyệt, Google Play, App Store và gói APK khi người dùng Android cần cài thủ công.",
  },
];

const articleCards: ReplicaArticleCard[] = [
  {
    title: "Luật chơi cờ tướng",
    href: "/vi/articles/luat-choi-co-tuong/",
    excerpt:
      "Tóm tắt mục tiêu ván cờ, điều kiện chiếu bí, hòa cờ và các nguyên tắc cơ bản khi bắt đầu học cờ tướng.",
    date: "2024-09-12",
  },
  {
    title: "Cách di chuyển cờ tướng",
    href: "/vi/articles/cach-di-chuyen-co-tuong/",
    excerpt:
      "Giải thích từng quân Tướng, Sĩ, Tượng, Xe, Pháo, Mã, Tốt đi như thế nào và các lỗi người mới thường gặp.",
    date: "2024-09-15",
  },
  {
    title: "Các quân cờ trong cờ tướng",
    href: "/vi/articles/cac-quan-co-trong-co-tuong/",
    excerpt:
      "Nhận diện vai trò của 32 quân trên bàn cờ, cách phối hợp quân mạnh và cách bảo vệ Tướng trong trung cuộc.",
    date: "2024-09-18",
  },
  {
    title: "Elo cờ tướng",
    href: "/vi/articles/elo-co-tuong/",
    excerpt:
      "Diễn giải điểm Elo, cách điểm thay đổi sau mỗi ván và vì sao nên dùng Elo để tìm đối thủ vừa sức.",
    date: "2024-09-21",
  },
  {
    title: "Cách xếp cờ tướng",
    href: "/vi/articles/cach-xep-co-tuong/",
    excerpt:
      "Hướng dẫn đặt đủ quân ở hai bên sông, phân biệt vị trí Pháo, Tốt và các quân bảo vệ Tướng.",
    date: "2024-09-24",
  },
  {
    title: "Nguồn gốc cờ tướng",
    href: "/vi/articles/nguon-goc-co-tuong/",
    excerpt:
      "Nhìn lại lịch sử, ý nghĩa bàn cờ có sông và vì sao cờ tướng trở thành trò chơi trí tuệ phổ biến tại châu Á.",
    date: "2024-09-27",
  },
];

export const viReplicaPages: ReplicaPage[] = [
  {
    id: "VI-001",
    locale: "vi",
    sourceUrl: "https://www.vn.xiangqi.com/",
    route: "/vi/",
    type: "home",
    title: "Cờ tướng online miễn phí | Chơi cờ tướng với người thật và máy - Xiangqi.com",
    description:
      "Xiangqi.com phiên bản Tiếng Việt giúp người chơi cờ tướng vào sảnh online, học luật, tải ứng dụng, luyện cờ với máy, đọc bài hướng dẫn và xem câu hỏi thường gặp.",
    heroTitle: "Chơi cờ tướng online ngay hôm nay",
    cta: [
      { label: "Chơi online", href: "https://play.xiangqi.com/", variant: "primary" },
      { label: "Tải ứng dụng", href: "/vi/mobile/", variant: "download" },
      { label: "Học cách chơi", href: "/vi/how-to-play/", variant: "secondary" },
    ],
    sections: [
      {
        heading: "Cờ tướng miễn phí trên web và điện thoại",
        body: [
          "Xiangqi.com là điểm vào dành cho người chơi muốn mở một ván cờ tướng nhanh mà không cần chuẩn bị bàn cờ thật. Người dùng có thể chơi trên trình duyệt, dùng ứng dụng di động hoặc tiếp tục học luật trước khi vào sảnh.",
          "Trang chủ Tiếng Việt cần thể hiện rõ ba nhu cầu chính: bắt đầu đối ván, tải ứng dụng và học cờ. Nội dung được viết như một trang thật, có thể đưa lên giao diện để hiển thị ngay thay vì chỉ là nhãn dịch tạm.",
        ],
        imageAlt: "Bàn cờ tướng trực tuyến với các quân đỏ đen",
      },
      {
        heading: "Luyện cờ với đối thủ thật, máy và bài tập",
        body: [
          "Người mới có thể luyện với máy ở mức dễ, sau đó chuyển sang đối thủ thật khi đã quen cách đi quân. Người chơi có kinh nghiệm hơn có thể dùng ván xếp hạng, xem lại biên bản và phân tích sai lầm sau trận.",
          "Các bài viết trên trang chủ liên kết đến nội dung về luật chơi, cách đi quân, cách xếp cờ, Elo và lịch sử cờ tướng để người đọc có một lộ trình học mạch lạc.",
        ],
        items: [
          "Chơi nhanh trên web mà không cần cài đặt.",
          "Tải ứng dụng để chơi ổn định hơn trên điện thoại.",
          "Đọc hướng dẫn luật và bài viết chuyên đề bằng Tiếng Việt.",
          "Dùng FAQ để xử lý câu hỏi về tài khoản, xếp hạng và thiết bị.",
        ],
      },
      {
        heading: "Cộng đồng cờ tướng đa ngôn ngữ",
        body: [
          "Phiên bản Tiếng Việt là một phần của hệ sinh thái Xiangqi.com cùng các trang tiếng Trung, tiếng Anh và tiếng Việt. Người chơi ở nhiều quốc gia có thể cùng tham gia sảnh, so tài và học hỏi các phong cách khai cuộc khác nhau.",
          "Nội dung trang ưu tiên ngôn ngữ tự nhiên, thuật ngữ cờ tướng quen thuộc với người Việt và đường dẫn nội bộ để người dùng tiếp tục khám phá trong cùng website.",
        ],
      },
    ],
    faq: commonFaq,
    articleCards,
  },
  {
    id: "VI-002",
    locale: "vi",
    sourceUrl: "https://www.vn.xiangqi.com/how-to-play",
    route: "/vi/how-to-play/",
    type: "tutorial",
    title: "Cách chơi cờ tướng | Luật, bàn cờ và nước đi cơ bản - Xiangqi.com",
    description:
      "Hướng dẫn cách chơi cờ tướng bằng Tiếng Việt: mục tiêu ván cờ, bàn cờ, cách xếp quân, cách di chuyển từng quân và lộ trình chơi ván đầu tiên.",
    heroTitle: "Cách chơi cờ tướng cho người mới",
    cta: [
      { label: "Vào sảnh chơi", href: "https://play.xiangqi.com/", variant: "primary" },
      { label: "Xem luật chi tiết", href: "/vi/articles/luat-choi-co-tuong/", variant: "secondary" },
    ],
    sections: [
      {
        heading: "Mục tiêu của một ván cờ",
        body: [
          "Cờ tướng là trò chơi chiến thuật giữa hai bên Đỏ và Đen. Mỗi bên điều khiển 16 quân, bảo vệ Tướng của mình và tìm cách chiếu bí Tướng đối phương. Một ván kết thúc khi một bên bị chiếu bí, chịu thua, hết thời gian hoặc đạt điều kiện hòa theo luật.",
          "Người mới nên nhớ rằng bắt quân chưa phải là mục tiêu cuối cùng. Điều quan trọng là tạo thế phối hợp để Tướng đối phương không còn nước hợp lệ.",
        ],
      },
      {
        heading: "Bàn cờ và cách xếp quân",
        body: [
          "Bàn cờ gồm 9 đường dọc và 10 đường ngang, các quân được đặt trên giao điểm. Ở giữa có sông chia hai phần bàn cờ, còn Tướng và Sĩ hoạt động trong cung 3 x 3 ở cuối bàn.",
          "Hàng cuối mỗi bên lần lượt có Xe, Mã, Tượng, Sĩ, Tướng, Sĩ, Tượng, Mã, Xe. Pháo đứng ở hàng thứ ba, Tốt đứng trên năm vị trí phía trước. Khi xếp đúng, hai bên đối xứng qua sông.",
        ],
        imageAlt: "Sơ đồ vị trí ban đầu của các quân cờ tướng",
      },
      {
        heading: "Cách đi từng quân",
        body: [
          "Tướng đi một ô ngang hoặc dọc trong cung. Sĩ đi chéo một ô trong cung. Tượng đi chéo hai ô và không được qua sông. Xe đi thẳng ngang dọc không giới hạn nếu không bị cản. Mã đi theo hình một ô thẳng rồi một ô chéo và có thể bị cản chân. Pháo đi như Xe nhưng khi ăn quân phải nhảy qua đúng một quân. Tốt đi thẳng một ô, sau khi qua sông được đi ngang nhưng không được lùi.",
          "Đây là phần người mới dễ nhầm nhất, vì vậy nên luyện từng quân riêng trước khi chơi ván có tính điểm.",
        ],
      },
      {
        heading: "Chơi ván đầu tiên",
        body: [
          "Hãy bắt đầu với thời gian dài để có đủ thời gian suy nghĩ. Mở quân nhẹ nhàng, đưa Xe và Mã vào vị trí hoạt động, đừng vội đẩy Tốt trước mặt Tướng nếu chưa hiểu thế phòng thủ.",
          "Sau ván đầu tiên, hãy xem lại những nước bị mất quân hoặc bỏ lỡ chiếu. Việc phân tích lại ván giúp người mới tiến bộ nhanh hơn nhiều so với chỉ chơi liên tục.",
        ],
      },
    ],
    faq: [
      {
        question: "Cờ tướng có giống cờ vua không?",
        answer:
          "Hai trò đều là cờ chiến thuật nhưng khác bàn cờ, quân cờ và luật. Cờ tướng có sông, cung Tướng, quân Pháo đặc trưng và luật hai Tướng không được nhìn thẳng nhau trên cùng một cột.",
      },
      {
        question: "Người mới nên học quân nào trước?",
        answer:
          "Nên học Tướng, Xe, Mã, Pháo trước vì chúng xuất hiện nhiều trong tình huống chiếu và bắt quân. Sau đó học Sĩ, Tượng và Tốt để hiểu phòng thủ.",
      },
    ],
    articleCards,
  },
  {
    id: "VI-003",
    locale: "vi",
    sourceUrl: "https://www.vn.xiangqi.com/mobile",
    route: "/vi/mobile/",
    type: "download",
    title: "Tải Xiangqi.com | Cờ tướng trên Android, iOS và web",
    description:
      "Trang tải ứng dụng Xiangqi.com bằng Tiếng Việt, giới thiệu cách chơi cờ tướng trên trình duyệt, Google Play, App Store và APK Android.",
    heroTitle: "Tải ứng dụng cờ tướng Xiangqi.com",
    cta: [
      { label: "Chơi trên web", href: "https://play.xiangqi.com/", variant: "primary" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.xiangqi.chess", variant: "download" },
      { label: "App Store", href: "https://apps.apple.com/app/xiangqi-chinese-chess-online/id1527090021", variant: "download" },
    ],
    sections: [
      {
        heading: "Chọn cách chơi phù hợp với thiết bị",
        body: [
          "Nếu đang dùng máy tính hoặc muốn thử nhanh, người chơi có thể mở phiên bản web để vào sảnh ngay. Nếu chơi thường xuyên trên điện thoại, ứng dụng di động mang lại trải nghiệm ổn định hơn, dễ nhận thông báo và thuận tiện khi theo dõi ván.",
          "Trang tải cần giữ các lối vào thật như web, Google Play, App Store và APK, đồng thời giải thích rõ khi nào nên dùng từng lựa chọn.",
        ],
      },
      {
        heading: "Ứng dụng di động giữ cùng hệ sinh thái",
        body: [
          "Tài khoản Xiangqi.com giúp người chơi tiếp tục theo dõi ván, điểm số và hoạt động trên nhiều thiết bị. Người mới có thể học luật trên web, sau đó dùng điện thoại để luyện cờ trong thời gian rảnh.",
          "Khi cài APK thủ công trên Android, người dùng nên tải từ nguồn chính thức và kiểm tra quyền cài đặt của thiết bị trước khi mở tệp.",
        ],
        items: [
          "Web: phù hợp để chơi nhanh và học luật.",
          "Google Play: lựa chọn quen thuộc cho Android.",
          "App Store: lựa chọn chính cho iPhone và iPad.",
          "APK: dùng khi thiết bị Android không truy cập được cửa hàng ứng dụng.",
        ],
      },
      {
        heading: "Trước khi tải",
        body: [
          "Hãy đảm bảo thiết bị có kết nối ổn định, còn đủ dung lượng và dùng phiên bản hệ điều hành được hỗ trợ. Nếu gặp lỗi đăng nhập, hãy thử cập nhật ứng dụng hoặc dùng phiên bản web để kiểm tra tài khoản.",
        ],
      },
    ],
    faq: [
      {
        question: "Có bắt buộc tải ứng dụng mới chơi được không?",
        answer:
          "Không. Người chơi có thể dùng phiên bản web. Ứng dụng di động phù hợp khi muốn chơi thường xuyên trên điện thoại.",
      },
      {
        question: "Dữ liệu tài khoản có dùng chung giữa web và app không?",
        answer:
          "Có, khi đăng nhập cùng tài khoản, các hoạt động liên quan đến tài khoản như xếp hạng và lịch sử có thể được đồng bộ theo hệ thống.",
      },
    ],
  },
  {
    id: "VI-004",
    locale: "vi",
    sourceUrl: "https://www.vn.xiangqi.com/cau-hoi-thuong-gap",
    route: "/vi/cau-hoi-thuong-gap/",
    type: "faq",
    title: "Câu hỏi thường gặp về cờ tướng online - Xiangqi.com",
    description:
      "FAQ Tiếng Việt của Xiangqi.com: giải đáp cách chơi, tải ứng dụng, tài khoản, điểm Elo, chơi với bạn bè và các câu hỏi phổ biến khi dùng nền tảng.",
    heroTitle: "Câu hỏi thường gặp",
    cta: [
      { label: "Học cách chơi", href: "/vi/how-to-play/", variant: "secondary" },
      { label: "Tải ứng dụng", href: "/vi/mobile/", variant: "download" },
    ],
    sections: [
      {
        heading: "Tìm nhanh câu trả lời trước khi vào ván",
        body: [
          "Trang FAQ tập trung vào những câu hỏi người dùng Tiếng Việt thường gặp khi lần đầu đến Xiangqi.com: cách bắt đầu, có cần tài khoản không, chơi trên điện thoại ra sao, điểm Elo được tính thế nào và làm gì khi chưa biết luật.",
          "Mỗi câu hỏi có thể hiển thị dạng mở rộng và thu gọn để giữ trang gọn trên di động. Các liên kết trong câu trả lời ưu tiên trỏ về trang nội bộ như hướng dẫn chơi, tải ứng dụng và bài viết Elo.",
        ],
      },
    ],
    faq: [
      ...commonFaq,
      {
        question: "Elo cờ tướng là gì?",
        answer:
          "Elo là điểm xếp hạng phản ánh kết quả của bạn trước các đối thủ khác. Thắng đối thủ mạnh thường tăng nhiều điểm hơn, thua đối thủ yếu có thể mất nhiều điểm hơn. Xem thêm tại /vi/help/rating/.",
      },
      {
        question: "Tôi có thể mời bạn bè chơi riêng không?",
        answer:
          "Có. Người chơi có thể tạo ván hoặc phòng riêng rồi gửi liên kết mời. Đây là cách phù hợp khi muốn chơi với bạn bè thay vì ghép cặp ngẫu nhiên.",
      },
      {
        question: "Tôi nên làm gì nếu liên tục thua?",
        answer:
          "Hãy giảm tốc độ ván, học lại cách đi quân, xem lại biên bản và tập trung vào lỗi mất quân đơn giản. Các bài viết về luật chơi và cách di chuyển quân sẽ giúp xây nền trước khi chơi xếp hạng.",
      },
      {
        question: "Có thể chơi trên máy tính bảng không?",
        answer:
          "Có. Người chơi có thể dùng trình duyệt trên máy tính bảng hoặc cài ứng dụng nếu hệ điều hành hỗ trợ. Giao diện cần được kiểm tra để nút, bàn cờ và FAQ không bị tràn trên màn hình nhỏ.",
      },
    ],
  },
  {
    id: "VI-005",
    locale: "vi",
    sourceUrl: "https://www.vn.xiangqi.com/help/rating",
    route: "/vi/help/rating/",
    type: "help-detail",
    title: "Điểm Elo cờ tướng và xếp hạng - Xiangqi.com",
    description:
      "Giải thích hệ thống điểm Elo trong cờ tướng online, cách điểm tăng giảm, vì sao cần xếp hạng và cách dùng Elo để tìm đối thủ phù hợp.",
    heroTitle: "Hiểu điểm Elo cờ tướng",
    cta: [
      { label: "Đọc bài Elo", href: "/vi/articles/elo-co-tuong/", variant: "secondary" },
      { label: "Chơi ván xếp hạng", href: "https://play.xiangqi.com/", variant: "primary" },
    ],
    sections: [
      {
        heading: "Elo dùng để làm gì?",
        body: [
          "Elo giúp hệ thống ước lượng sức cờ tương đối của người chơi. Khi bạn đấu với người có điểm gần mình, ván cờ thường cân bằng hơn và kết quả phản ánh đúng quá trình tiến bộ.",
          "Điểm Elo không phải danh hiệu cố định. Nó thay đổi sau các ván được tính điểm và có thể tăng hoặc giảm tùy kết quả, sức mạnh đối thủ và quy tắc xếp hạng của nền tảng.",
        ],
      },
      {
        heading: "Vì sao điểm thay đổi khác nhau?",
        body: [
          "Nếu thắng người có Elo cao hơn, bạn thường nhận nhiều điểm hơn vì kết quả đó khó xảy ra hơn theo mô hình xếp hạng. Nếu thua người có Elo thấp hơn, số điểm mất có thể lớn hơn.",
          "Ngược lại, khi người mạnh thắng người yếu, điểm tăng thường ít. Cách tính này giúp bảng xếp hạng ổn định hơn và khuyến khích người chơi gặp đối thủ vừa sức.",
        ],
      },
      {
        heading: "Cách dùng Elo để luyện cờ",
        body: [
          "Đừng chỉ nhìn điểm như mục tiêu duy nhất. Hãy dùng Elo để chọn đối thủ ngang sức, theo dõi tiến bộ theo từng giai đoạn và nhận ra khi nào cần học lại khai cuộc, trung cuộc hoặc tàn cuộc.",
        ],
      },
    ],
    faq: [
      {
        question: "Chơi không xếp hạng có ảnh hưởng Elo không?",
        answer:
          "Thông thường các ván không xếp hạng hoặc luyện tập không làm thay đổi Elo. Người chơi nên kiểm tra chế độ ván trước khi bắt đầu.",
      },
      {
        question: "Elo cao có nghĩa là luôn thắng không?",
        answer:
          "Không. Elo chỉ là ước lượng sức cờ tương đối. Phong độ, thời gian suy nghĩ, khai cuộc và sai lầm trong ván vẫn có thể làm kết quả thay đổi.",
      },
    ],
  },
  {
    id: "VI-006",
    locale: "vi",
    sourceUrl: "https://www.vn.xiangqi.com/articles/luat-choi-co-tuong/",
    route: "/vi/articles/luat-choi-co-tuong/",
    type: "article-detail",
    title: "Luật chơi cờ tướng cho người mới - Xiangqi.com",
    description:
      "Bài viết Tiếng Việt tóm tắt luật chơi cờ tướng, điều kiện thắng thua, chiếu bí, hòa cờ và những nguyên tắc người mới cần biết.",
    heroTitle: "Luật chơi cờ tướng",
    cta: [
      { label: "Học cách chơi", href: "/vi/how-to-play/", variant: "secondary" },
      { label: "Chơi thử", href: "https://play.xiangqi.com/", variant: "primary" },
    ],
    sections: [
      {
        heading: "Mục tiêu: chiếu bí Tướng",
        body: [
          "Trong cờ tướng, mỗi bên cố gắng bảo vệ Tướng của mình và tạo thế khiến Tướng đối phương bị chiếu mà không còn nước hợp lệ để thoát. Đó là chiếu bí, kết quả thắng rõ ràng nhất của một ván cờ.",
          "Một nước đi hợp lệ không được để Tướng của mình bị chiếu. Vì vậy đôi khi bạn không thể bắt quân hấp dẫn nếu sau nước đó Tướng rơi vào thế nguy hiểm.",
        ],
      },
      {
        heading: "Các cách kết thúc ván",
        body: [
          "Ván cờ có thể kết thúc bằng chiếu bí, một bên chịu thua, hết thời gian hoặc hòa. Hòa có thể xảy ra khi hai bên không còn đủ lực tấn công, lặp lại thế cờ theo quy định hoặc cùng đồng ý hòa.",
          "Người mới nên tập nhận biết chiếu, chống chiếu và các thế Tướng đối mặt trực tiếp vì đây là lỗi luật rất phổ biến.",
        ],
      },
      {
        heading: "Nguyên tắc an toàn khi mới học",
        body: [
          "Không mở cung Tướng quá sớm, không đưa quân mạnh đi xa mà thiếu bảo vệ, và luôn kiểm tra xem nước đi của đối thủ có đang đe dọa chiếu hay bắt quân quan trọng không.",
          "Khi chưa chắc, hãy ưu tiên nước đi giữ quân và cải thiện vị trí thay vì tấn công quá nhanh.",
        ],
      },
    ],
    faq: [
      {
        question: "Có được đi Tướng ra ngoài cung không?",
        answer: "Không. Tướng chỉ được đi trong cung 3 x 3 của bên mình.",
      },
      {
        question: "Hai Tướng có được nhìn thẳng nhau không?",
        answer:
          "Không. Nếu trên cùng một cột không có quân nào chắn giữa hai Tướng, thế cờ đó là không hợp lệ.",
      },
    ],
  },
  {
    id: "VI-007",
    locale: "vi",
    sourceUrl: "https://www.vn.xiangqi.com/articles/cach-di-chuyen-co-tuong/",
    route: "/vi/articles/cach-di-chuyen-co-tuong/",
    type: "article-detail",
    title: "Cách di chuyển cờ tướng | Từng quân đi như thế nào",
    description:
      "Giải thích cách di chuyển của từng quân cờ tướng: Tướng, Sĩ, Tượng, Xe, Pháo, Mã và Tốt bằng Tiếng Việt dễ hiểu.",
    heroTitle: "Cách di chuyển các quân cờ tướng",
    cta: [
      { label: "Xem cách xếp cờ", href: "/vi/articles/cach-xep-co-tuong/", variant: "secondary" },
      { label: "Luyện trên bàn cờ", href: "https://play.xiangqi.com/", variant: "primary" },
    ],
    sections: [
      {
        heading: "Quân phòng thủ quanh Tướng",
        body: [
          "Tướng đi một ô ngang hoặc dọc trong cung. Sĩ đi chéo một ô và cũng không rời cung. Tượng đi chéo hai ô, không được qua sông và bị cản nếu có quân đứng ở điểm giữa đường đi.",
          "Ba loại quân này tạo lớp phòng thủ chính. Người mới thường thua nhanh khi mở cung quá sớm hoặc bỏ qua vai trò che chắn của Sĩ và Tượng.",
        ],
      },
      {
        heading: "Quân tấn công mạnh",
        body: [
          "Xe đi thẳng ngang dọc không giới hạn, là quân có sức mạnh ổn định nhất. Mã đi theo dạng một ô thẳng rồi một ô chéo, nhưng nếu ô thẳng đầu tiên bị chặn thì Mã không đi được. Pháo đi như Xe khi di chuyển, nhưng khi ăn quân phải nhảy qua đúng một quân làm ngòi.",
          "Hiểu chân Mã và ngòi Pháo là chìa khóa để tránh mất quân bất ngờ.",
        ],
      },
      {
        heading: "Tốt sau khi qua sông",
        body: [
          "Tốt trước khi qua sông chỉ đi thẳng một ô. Sau khi qua sông, Tốt có thể đi ngang một ô hoặc tiếp tục tiến lên, nhưng không bao giờ được lùi.",
          "Tốt có vẻ nhỏ nhưng trong tàn cuộc, Tốt qua sông có thể tạo áp lực lớn nếu phối hợp với Xe, Pháo hoặc Mã.",
        ],
      },
    ],
  },
  {
    id: "VI-008",
    locale: "vi",
    sourceUrl: "https://www.vn.xiangqi.com/articles/cac-quan-co-trong-co-tuong/",
    route: "/vi/articles/cac-quan-co-trong-co-tuong/",
    type: "article-detail",
    title: "Các quân cờ trong cờ tướng và vai trò của chúng",
    description:
      "Tìm hiểu 7 loại quân trong cờ tướng, số lượng mỗi bên, giá trị tương đối và cách phối hợp quân trong một ván cờ.",
    heroTitle: "Các quân cờ trong cờ tướng",
    cta: [
      { label: "Học cách đi quân", href: "/vi/articles/cach-di-chuyen-co-tuong/", variant: "secondary" },
      { label: "Chơi online", href: "https://play.xiangqi.com/", variant: "primary" },
    ],
    sections: [
      {
        heading: "Mỗi bên có 16 quân",
        body: [
          "Một bên gồm 1 Tướng, 2 Sĩ, 2 Tượng, 2 Xe, 2 Pháo, 2 Mã và 5 Tốt. Hai bên dùng quân đỏ và đen, chữ trên quân có thể khác nhau nhưng chức năng tương ứng giống nhau.",
          "Việc nhớ đủ số quân giúp người mới kiểm tra bàn cờ trước khi chơi và dễ đọc các bài hướng dẫn chiến thuật.",
        ],
      },
      {
        heading: "Giá trị không chỉ nằm ở điểm số",
        body: [
          "Xe thường là quân mạnh nhất vì đi xa và kiểm soát nhiều đường. Pháo nguy hiểm khi có ngòi. Mã mạnh trong thế mở nhưng yếu khi bị cản. Sĩ và Tượng ít tấn công nhưng cực kỳ quan trọng để giữ Tướng.",
          "Giá trị quân thay đổi theo thế cờ. Một Tốt đã qua sông có thể đáng hơn nhiều so với khi còn ở sân nhà.",
        ],
      },
      {
        heading: "Phối hợp quân",
        body: [
          "Tấn công hiệu quả thường cần nhiều quân phối hợp: Xe kiểm soát đường, Pháo dùng ngòi tạo đe dọa, Mã khai thác điểm yếu và Tốt ép không gian. Nếu chỉ dùng một quân đơn lẻ, đối thủ thường dễ phòng thủ.",
        ],
      },
    ],
  },
  {
    id: "VI-009",
    locale: "vi",
    sourceUrl: "https://www.vn.xiangqi.com/articles/elo-co-tuong/",
    route: "/vi/articles/elo-co-tuong/",
    type: "article-detail",
    title: "Elo cờ tướng là gì? Cách hiểu điểm xếp hạng",
    description:
      "Bài viết giải thích Elo cờ tướng, vì sao điểm tăng giảm, cách đọc mức xếp hạng và cách dùng Elo để luyện tập hiệu quả hơn.",
    heroTitle: "Elo cờ tướng",
    cta: [
      { label: "Xem trợ giúp xếp hạng", href: "/vi/help/rating/", variant: "secondary" },
      { label: "Chơi xếp hạng", href: "https://play.xiangqi.com/", variant: "primary" },
    ],
    sections: [
      {
        heading: "Elo là thước đo tương đối",
        body: [
          "Elo không nói chính xác bạn biết bao nhiêu khai cuộc, nhưng cho thấy kết quả của bạn so với cộng đồng người chơi. Khi dữ liệu ván đủ nhiều, điểm Elo giúp ghép cặp công bằng hơn.",
          "Người chơi mới có thể thấy điểm dao động mạnh trong giai đoạn đầu. Điều này bình thường vì hệ thống cần thêm kết quả để ước lượng sức cờ ổn định hơn.",
        ],
      },
      {
        heading: "Điểm tăng giảm theo kỳ vọng kết quả",
        body: [
          "Nếu hai người có điểm gần nhau, thắng thua thường làm điểm thay đổi ở mức vừa phải. Nếu chênh lệch lớn, kết quả bất ngờ sẽ làm điểm thay đổi nhiều hơn.",
          "Vì vậy, thay vì né đối thủ mạnh hoặc chỉ tìm đối thủ yếu, người chơi nên gặp đối thủ ngang sức để ván cờ có giá trị luyện tập tốt nhất.",
        ],
      },
      {
        heading: "Dùng Elo để đặt mục tiêu",
        body: [
          "Một mục tiêu tốt không chỉ là tăng điểm, mà là giảm lỗi lặp lại: mất quân miễn phí, bỏ sót chiếu, không biết chống Pháo hoặc để Tướng hở. Khi lỗi giảm, Elo thường tăng theo một cách tự nhiên hơn.",
        ],
      },
    ],
  },
  {
    id: "VI-010",
    locale: "vi",
    sourceUrl: "https://www.vn.xiangqi.com/articles/cach-xep-co-tuong/",
    route: "/vi/articles/cach-xep-co-tuong/",
    type: "article-detail",
    title: "Cách xếp cờ tướng đúng vị trí ban đầu",
    description:
      "Hướng dẫn cách xếp bàn cờ tướng đúng: vị trí Tướng, Sĩ, Tượng, Xe, Mã, Pháo, Tốt và mẹo kiểm tra trước khi chơi.",
    heroTitle: "Cách xếp cờ tướng",
    cta: [
      { label: "Học luật chơi", href: "/vi/articles/luat-choi-co-tuong/", variant: "secondary" },
      { label: "Mở bàn cờ online", href: "https://play.xiangqi.com/", variant: "primary" },
    ],
    sections: [
      {
        heading: "Đặt bàn cờ đúng chiều",
        body: [
          "Bàn cờ tướng có sông ở giữa và cung Tướng ở hai đầu. Khi nhìn từ phía mình, hàng cuối là nơi đặt các quân chính, còn Tốt đứng phía trước gần sông hơn.",
          "Nếu chơi bàn thật, hãy kiểm tra chữ trên quân hướng về người chơi và hai bên xếp đối xứng. Nếu chơi online, hệ thống thường xếp sẵn nhưng người mới vẫn nên hiểu bố cục để đọc thế cờ.",
        ],
      },
      {
        heading: "Hàng cuối và hai quân Pháo",
        body: [
          "Hàng cuối lần lượt là Xe, Mã, Tượng, Sĩ, Tướng, Sĩ, Tượng, Mã, Xe. Hai quân Pháo đặt trên hàng thứ ba, mỗi quân cách biên hai đường dọc.",
          "Sai vị trí Pháo là lỗi phổ biến nhất khi tự xếp cờ vì Pháo không nằm ở hàng cuối như Xe và Mã.",
        ],
      },
      {
        heading: "Năm quân Tốt",
        body: [
          "Năm quân Tốt đứng cách nhau một đường, trải đều trước mặt quân chính. Chúng là tuyến đầu kiểm soát không gian và thường quyết định nhịp khai cuộc.",
        ],
      },
    ],
  },
  {
    id: "VI-011",
    locale: "vi",
    sourceUrl: "https://www.vn.xiangqi.com/articles/nguon-goc-co-tuong/",
    route: "/vi/articles/nguon-goc-co-tuong/",
    type: "article-detail",
    title: "Nguồn gốc cờ tướng và ý nghĩa bàn cờ",
    description:
      "Bài viết giới thiệu nguồn gốc cờ tướng, ý nghĩa sông, cung Tướng, hệ quân và lý do cờ tướng trở thành trò chơi trí tuệ phổ biến.",
    heroTitle: "Nguồn gốc cờ tướng",
    cta: [
      { label: "Đọc luật chơi", href: "/vi/articles/luat-choi-co-tuong/", variant: "secondary" },
      { label: "Chơi cờ tướng", href: "https://play.xiangqi.com/", variant: "primary" },
    ],
    sections: [
      {
        heading: "Một trò chơi chiến thuật lâu đời",
        body: [
          "Cờ tướng phát triển trong văn hóa Á Đông và phản ánh tư duy chiến trường cổ điển: hai bên có Tướng, quân bảo vệ, quân cơ động và tuyến Tốt phía trước. Bàn cờ không chỉ là lưới đường mà còn có sông và cung, tạo nên bản sắc khác biệt so với nhiều trò cờ khác.",
          "Qua nhiều thế hệ, cờ tướng trở thành trò chơi trí tuệ phổ biến trong gia đình, quán cờ, câu lạc bộ và nay là các nền tảng online.",
        ],
      },
      {
        heading: "Ý nghĩa của sông và cung",
        body: [
          "Sông chia bàn cờ thành hai nửa và ảnh hưởng trực tiếp đến Tượng, Tốt. Tượng không qua sông, còn Tốt sau khi qua sông có thêm quyền đi ngang. Cung giới hạn Tướng và Sĩ, khiến phòng thủ trung tâm trở thành phần rất quan trọng.",
          "Những yếu tố này làm cờ tướng có nhịp riêng: khai cuộc cần phát triển quân, trung cuộc cần phối hợp tấn công, tàn cuộc thường xoay quanh Tướng, Xe, Pháo, Mã và Tốt qua sông.",
        ],
      },
      {
        heading: "Cờ tướng trong thời đại online",
        body: [
          "Khi lên môi trường trực tuyến, cờ tướng giữ nguyên luật cốt lõi nhưng thêm nhiều công cụ học tập: ghép cặp tự động, lưu biên bản, phân tích ván, bài tập tàn cuộc và cộng đồng đa ngôn ngữ.",
          "Nhờ vậy người mới có thể học nhanh hơn, còn người chơi lâu năm có thêm không gian để luyện tập và gặp đối thủ ở nhiều trình độ.",
        ],
      },
    ],
  },
];

export const viReplicaPageMap = Object.fromEntries(
  viReplicaPages.map((page) => [page.id, page]),
) as Record<string, ReplicaPage>;
