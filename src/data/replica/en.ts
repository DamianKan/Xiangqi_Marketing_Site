export type ReplicaPageType =
  | "home"
  | "help-index"
  | "tutorial"
  | "help-detail"
  | "landing-or-help"
  | "article-detail"
  | "policy";

export type ReplicaCta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "text";
};

export type ReplicaSection = {
  heading: string;
  summary: string;
  body: string[];
};

export type ReplicaFaq = {
  question: string;
  answer: string;
};

export type ReplicaArticleCard = {
  title: string;
  excerpt: string;
  href: string;
  tag?: string;
};

export type ReplicaPage = {
  id: `EN-${string}`;
  locale: "en";
  sourceUrl: string;
  route: string;
  type: ReplicaPageType;
  title: string;
  description: string;
  heroTitle: string;
  cta: ReplicaCta[];
  sections: ReplicaSection[];
  faq?: ReplicaFaq[];
  articleCards?: ReplicaArticleCard[];
};

export const englishReplicaPages: ReplicaPage[] = [
  {
    id: "EN-001",
    locale: "en",
    sourceUrl: "https://www.xiangqi.com/",
    route: "/en/",
    type: "home",
    title: "Xiangqi.com - Play Chinese Chess Online",
    description:
      "Play Xiangqi online, learn the rules of Chinese chess, solve puzzles, read guides, and find help for your first games on Xiangqi.com.",
    heroTitle: "Play Xiangqi Online",
    cta: [
      { label: "Play Now", href: "https://play.xiangqi.com/", variant: "primary" },
      { label: "Learn Xiangqi", href: "/en/how-to-play-xiangqi/", variant: "secondary" },
      { label: "Open Help Center", href: "/en/help/", variant: "text" },
    ],
    sections: [
      {
        heading: "A Complete Chinese Chess Hub",
        summary:
          "The English homepage introduces Xiangqi.com as the place to play, study, and improve at Chinese chess.",
        body: [
          "Xiangqi.com brings online games, learning resources, puzzles, ratings, tournaments, and player support into one English-language experience. The page should make it clear that visitors can start a game immediately or move into beginner material when they need a slower introduction.",
          "The content keeps the product promise practical: play against real opponents, review the board and setup, understand platform features, and return to the help center when a question appears during a game.",
        ],
      },
      {
        heading: "Start Playing or Learning",
        summary:
          "Homepage actions point users toward live play, rule learning, puzzle practice, and support content.",
        body: [
          "New players are guided toward the how-to-play tutorial and board setup help before they join competitive games. Returning players can move directly to play.xiangqi.com, tournaments, puzzle practice, or rating information.",
          "This page also previews article and FAQ content so that SEO, GEO, and internal navigation can surface meaningful English summaries instead of placeholder blocks.",
        ],
      },
      {
        heading: "Featured Help Topics",
        summary:
          "The homepage should expose common English support paths without requiring users to search first.",
        body: [
          "Recommended paths include board setup, markers, tournament play, handicap mode, ratings, fair play, and the politeness code. These topics match the inventory items for the English replica and keep the homepage aligned with the help experience.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I play Xiangqi online from this page?",
        answer:
          "Yes. The primary play action points to play.xiangqi.com, while the English content pages provide learning and support around that playing experience.",
      },
      {
        question: "Is this content for beginners?",
        answer:
          "Yes. The homepage links to rule explanations, board setup, markers, and first-principles guides so a new player can learn before joining a game.",
      },
      {
        question: "Where should experienced players go?",
        answer:
          "Experienced players can jump into live play, browse tournament help, solve puzzles, or review rating and fair-play information.",
      },
    ],
    articleCards: [
      {
        title: "What Is Xiangqi, Also Known as Chinese Chess?",
        excerpt:
          "A plain-English introduction to the board, pieces, river, palaces, and strategic personality of Xiangqi.",
        href: "/en/articles/what-is-xiangqi-aka-chinese-chess/",
        tag: "Guide",
      },
      {
        title: "Board and Set Up",
        excerpt:
          "Learn where every piece begins and how the board's river and palaces shape legal moves.",
        href: "/en/help/board-and-set-up/",
        tag: "Help",
      },
      {
        title: "Understand Xiangqi Ratings",
        excerpt:
          "A practical overview of how ratings summarize game results and help pair players fairly.",
        href: "/en/help/rating/",
        tag: "Help",
      },
    ],
  },
  {
    id: "EN-002",
    locale: "en",
    sourceUrl: "https://www.xiangqi.com/help",
    route: "/en/help/",
    type: "help-index",
    title: "Xiangqi Help Center",
    description:
      "Find English help for playing Xiangqi online, including board setup, markers, tournaments, handicap mode, ratings, fair play, and community conduct.",
    heroTitle: "Help Center",
    cta: [
      { label: "Browse Help Menu", href: "/en/help/menu/", variant: "primary" },
      { label: "Board Setup", href: "/en/help/board-and-set-up/", variant: "secondary" },
      { label: "Contact Support", href: "/en/support-home/", variant: "text" },
    ],
    sections: [
      {
        heading: "Answers for Common Game Questions",
        summary:
          "The help index organizes the English support surface around tasks players need during play.",
        body: [
          "Use this page when you need to understand the board, read move markers, join a tournament, try handicap mode, interpret ratings, or review behavior policies. Each topic is written as support content, not a marketing summary.",
          "The help center should work as a clear index: short descriptions, direct links, and enough context for users to choose the right article without opening every page.",
        ],
      },
      {
        heading: "Learning and Account Support",
        summary:
          "Help content connects beginner learning with platform-specific questions.",
        body: [
          "Players who are new to Xiangqi can start with setup and movement guidance, then continue into live play topics. Players who already know the game can move directly to ratings, tournaments, fair play, and etiquette.",
        ],
      },
    ],
    faq: [
      {
        question: "What should I read first?",
        answer:
          "If you are new to Xiangqi, start with board and setup, then read the introductory how-to-play tutorial.",
      },
      {
        question: "Where are policy pages listed?",
        answer:
          "Fair Play Policy and Politeness Code are part of the English help system and are linked as support topics.",
      },
    ],
    articleCards: [
      {
        title: "Board and Set Up",
        excerpt: "Identify the board areas, starting positions, and first setup checks.",
        href: "/en/help/board-and-set-up/",
        tag: "Beginner",
      },
      {
        title: "Markers",
        excerpt: "Understand the visual signals used while playing and reviewing games.",
        href: "/en/help/markers/",
        tag: "Interface",
      },
      {
        title: "Tournament",
        excerpt: "Learn how tournament play is organized and what to check before joining.",
        href: "/en/help/tournament/",
        tag: "Competition",
      },
      {
        title: "Rating",
        excerpt: "See how ratings describe strength and support fair pairings.",
        href: "/en/help/rating/",
        tag: "Account",
      },
    ],
  },
  {
    id: "EN-003",
    locale: "en",
    sourceUrl: "https://www.xiangqi.com/help/menu",
    route: "/en/help/menu/",
    type: "help-index",
    title: "Xiangqi Help Menu",
    description:
      "A compact English menu of Xiangqi.com help topics, from board setup and markers to tournament, rating, fair play, and etiquette pages.",
    heroTitle: "Help Menu",
    cta: [
      { label: "Open Main Help", href: "/en/help/", variant: "primary" },
      { label: "Read Fair Play", href: "/en/help/fair-play/", variant: "secondary" },
    ],
    sections: [
      {
        heading: "Quick Topic Navigation",
        summary:
          "The menu page provides a concise, renderable list of English support destinations.",
        body: [
          "Use this menu when you already know the kind of answer you need. It groups beginner setup, interface markers, competitive play, puzzle practice, ratings, and conduct topics into direct links.",
          "The page should be scannable on mobile and desktop: each menu item needs a short summary that explains the problem it solves before the user clicks through.",
        ],
      },
      {
        heading: "Recommended Reading Order",
        summary:
          "New players can follow a simple sequence from board basics to platform rules.",
        body: [
          "Start with Board and Set Up, continue to How to Play Xiangqi, then read Markers once you begin using the online board. After that, review Tournament, Handicap Mode, Rating, Fair Play, and Politeness Code as needed.",
        ],
      },
    ],
    articleCards: [
      {
        title: "How to Play Xiangqi",
        excerpt: "Learn the goal of the game and the basic shape of legal play.",
        href: "/en/how-to-play-xiangqi/",
        tag: "Tutorial",
      },
      {
        title: "Handicap Mode",
        excerpt: "Give new or lower-rated players a more balanced game.",
        href: "/en/help/handicap-mode/",
        tag: "Feature",
      },
      {
        title: "Politeness Code",
        excerpt: "Review expectations for respectful online play.",
        href: "/en/help/politeness-code/",
        tag: "Policy",
      },
    ],
  },
  {
    id: "EN-004",
    locale: "en",
    sourceUrl: "https://www.xiangqi.com/support-home",
    route: "/en/support-home/",
    type: "help-index",
    title: "Xiangqi Support Home",
    description:
      "Get support for Xiangqi.com questions, including account issues, game questions, help articles, fair play, and community guidance.",
    heroTitle: "Support Home",
    cta: [
      { label: "Visit Help Center", href: "/en/help/", variant: "primary" },
      { label: "Browse Help Menu", href: "/en/help/menu/", variant: "secondary" },
    ],
    sections: [
      {
        heading: "Support Starting Point",
        summary:
          "Support Home gives English users a single entry point for help, account, and policy content.",
        body: [
          "This page is designed for users who are unsure whether their issue is a rules question, a platform question, or a conduct concern. It routes them to the help center, menu, and policy pages with clear summaries.",
          "Support content should prioritize immediate resolution: identify the issue, open the relevant help article, and return to play once the question is answered.",
        ],
      },
      {
        heading: "What Support Covers",
        summary:
          "The page covers learning, online play features, ratings, tournaments, and community standards.",
        body: [
          "Common paths include setting up the board, understanding visual markers, joining tournaments, using handicap mode, reading rating guidance, and reviewing fair-play or politeness expectations.",
        ],
      },
    ],
    faq: [
      {
        question: "Is Support Home different from the Help Center?",
        answer:
          "Support Home is the broader entry point. The Help Center is the organized library of specific help articles.",
      },
      {
        question: "Can I find conduct rules here?",
        answer:
          "Yes. Fair Play Policy and Politeness Code are part of the support flow.",
      },
    ],
  },
  {
    id: "EN-005",
    locale: "en",
    sourceUrl: "https://www.xiangqi.com/how-to-play-xiangqi",
    route: "/en/how-to-play-xiangqi/",
    type: "tutorial",
    title: "How to Play Xiangqi",
    description:
      "Learn how to play Xiangqi, the Chinese chess game with generals, advisors, elephants, horses, chariots, cannons, and soldiers.",
    heroTitle: "How to Play Xiangqi",
    cta: [
      { label: "Play a Game", href: "https://play.xiangqi.com/", variant: "primary" },
      { label: "Board Setup Help", href: "/en/help/board-and-set-up/", variant: "secondary" },
      { label: "What Is Xiangqi?", href: "/en/articles/what-is-xiangqi-aka-chinese-chess/", variant: "text" },
    ],
    sections: [
      {
        heading: "Goal of the Game",
        summary:
          "Xiangqi is won by checkmating or trapping the opposing general.",
        body: [
          "Each player controls an army on a board divided by a river and anchored by two palaces. The goal is to attack the enemy general so it cannot escape, block, or be defended.",
          "Because generals face each other along open files and several pieces have board-area restrictions, Xiangqi creates fast tactical play even from a simple-looking setup.",
        ],
      },
      {
        heading: "Pieces and Movement",
        summary:
          "Every piece has a distinct movement pattern, and several pieces are limited by the river or palace.",
        body: [
          "Chariots move in straight lines, horses move in a point-turn pattern that can be blocked, cannons move like chariots but capture by jumping exactly one screen, and soldiers become more flexible after crossing the river.",
          "The general and advisors stay inside the palace, while elephants cannot cross the river. Learning these restrictions is the fastest way to understand why Xiangqi positions feel different from international chess.",
        ],
      },
      {
        heading: "First Game Checklist",
        summary:
          "Beginners should learn setup, legal moves, check, and simple attacks before playing fast games.",
        body: [
          "Before your first online game, confirm the starting formation, know how each piece captures, watch for the flying general rule, and use slower time controls while you learn.",
        ],
      },
    ],
    faq: [
      {
        question: "Is Xiangqi the same as chess?",
        answer:
          "It is a related strategy game, but the river, palace, cannon, flying general rule, and piece restrictions make it play very differently.",
      },
      {
        question: "What should I memorize first?",
        answer:
          "Start with the board setup and the seven piece types. You can learn deeper tactics after you can make legal moves confidently.",
      },
    ],
  },
  {
    id: "EN-006",
    locale: "en",
    sourceUrl: "https://www.xiangqi.com/help/board-and-set-up",
    route: "/en/help/board-and-set-up/",
    type: "help-detail",
    title: "Board and Set Up",
    description:
      "Learn how the Xiangqi board is arranged, where each piece starts, and how the river and palaces affect play.",
    heroTitle: "Board and Set Up",
    cta: [
      { label: "Learn How to Play", href: "/en/how-to-play-xiangqi/", variant: "primary" },
      { label: "Open Help Menu", href: "/en/help/menu/", variant: "secondary" },
    ],
    sections: [
      {
        heading: "Board Areas",
        summary:
          "The Xiangqi board is played on intersections and includes a river and two palaces.",
        body: [
          "Pieces sit on the intersections of the lines, not inside squares. The river divides the two sides, while each player has a nine-point palace that limits the general and advisors.",
          "These board areas are not decorative. The river changes soldier movement and blocks elephants, while the palace defines the most important defensive space around each general.",
        ],
      },
      {
        heading: "Starting Formation",
        summary:
          "Each side begins with the same army mirrored across the river.",
        body: [
          "The back rank holds chariots, horses, elephants, advisors, and the general. Cannons begin on the cannon points in front of the main army, and soldiers begin spread across the next rank.",
          "Before playing online, check that red and black are mirrored correctly. A correct setup makes piece movement easier to learn because each piece begins from a familiar tactical role.",
        ],
      },
    ],
    faq: [
      {
        question: "Do pieces move on squares or intersections?",
        answer:
          "Xiangqi pieces move on line intersections. This is one of the first visual differences from international chess.",
      },
      {
        question: "Can elephants cross the river?",
        answer:
          "No. Elephants stay on their own side of the river, which gives each army a clear defensive boundary.",
      },
    ],
  },
  {
    id: "EN-007",
    locale: "en",
    sourceUrl: "https://www.xiangqi.com/help/markers",
    route: "/en/help/markers/",
    type: "help-detail",
    title: "Markers",
    description:
      "Understand Xiangqi.com board markers, highlights, and visual signals used during online games and reviews.",
    heroTitle: "Markers",
    cta: [
      { label: "Back to Help", href: "/en/help/", variant: "primary" },
      { label: "Board Setup", href: "/en/help/board-and-set-up/", variant: "secondary" },
    ],
    sections: [
      {
        heading: "What Markers Show",
        summary:
          "Markers help players understand the current board state without reading a long explanation.",
        body: [
          "Online Xiangqi boards commonly use markers to show selected pieces, legal destinations, recent moves, checks, captures, or review positions. These visual cues help players confirm what just happened and what actions are available next.",
          "The page should explain markers in plain language so new players do not confuse interface highlights with special rule exceptions.",
        ],
      },
      {
        heading: "Using Markers During Play",
        summary:
          "Markers are most useful when selecting moves, reviewing threats, and learning from mistakes.",
        body: [
          "When a piece is selected, available destinations may be highlighted. After a move, previous and current positions may remain marked briefly so both players can track the last action.",
          "If a marker indicates check or danger, pause before moving quickly. The visual signal is a prompt to inspect the general, blocking pieces, and possible captures.",
        ],
      },
    ],
    faq: [
      {
        question: "Do markers change the rules?",
        answer:
          "No. Markers are interface hints. Legal moves are still determined by Xiangqi rules.",
      },
      {
        question: "Why do some positions stay highlighted?",
        answer:
          "They usually identify the most recent move, a selected piece, or an important tactical state such as check.",
      },
    ],
  },
  {
    id: "EN-008",
    locale: "en",
    sourceUrl: "https://www.xiangqi.com/help/tournament",
    route: "/en/help/tournament/",
    type: "help-detail",
    title: "Tournament",
    description:
      "Learn how Xiangqi.com tournament play works, what to check before joining, and how to prepare for scheduled competition.",
    heroTitle: "Tournament Help",
    cta: [
      { label: "Play Online", href: "https://play.xiangqi.com/", variant: "primary" },
      { label: "Read Rating Help", href: "/en/help/rating/", variant: "secondary" },
    ],
    sections: [
      {
        heading: "Before Joining",
        summary:
          "Players should understand schedule, format, time controls, and eligibility before entering a tournament.",
        body: [
          "Tournament pages should explain the basics clearly: when the event starts, how pairings are made, what time controls apply, and whether rating or account requirements exist.",
          "Before joining, make sure you have a stable connection, enough time to finish all rounds, and a basic understanding of the fair-play expectations for competitive games.",
        ],
      },
      {
        heading: "During the Event",
        summary:
          "Tournament play rewards punctuality, steady time management, and attention to rules.",
        body: [
          "Arrive before the event begins, watch for round pairings, and avoid leaving games unfinished. If a game is delayed or interrupted, follow the event instructions and support guidance.",
          "Tournament results may affect rating or standings depending on the event format, so players should review rating guidance before treating every event the same way.",
        ],
      },
    ],
    faq: [
      {
        question: "Do all tournaments affect rating?",
        answer:
          "Not necessarily. The tournament information should state whether games affect ratings or only event standings.",
      },
      {
        question: "What should I check before joining?",
        answer:
          "Check start time, time control, number of rounds, eligibility, and fair-play rules.",
      },
    ],
  },
  {
    id: "EN-009",
    locale: "en",
    sourceUrl: "https://www.xiangqi.com/help/handicap-mode",
    route: "/en/help/handicap-mode/",
    type: "help-detail",
    title: "Handicap Mode",
    description:
      "Learn how handicap mode can balance Xiangqi games between players of different strengths and support practice games.",
    heroTitle: "Handicap Mode",
    cta: [
      { label: "Start Playing", href: "https://play.xiangqi.com/", variant: "primary" },
      { label: "Learn the Rules", href: "/en/how-to-play-xiangqi/", variant: "secondary" },
    ],
    sections: [
      {
        heading: "Why Use Handicap Mode",
        summary:
          "Handicap play makes uneven practice games more useful for both players.",
        body: [
          "When one player is much stronger, a standard game can end too quickly for the newer player to learn. Handicap mode adjusts the starting conditions or expectations so the weaker player gets more meaningful decisions.",
          "The goal is not to replace normal rated play. It is a training format for friends, lessons, and practice sessions where balanced experience matters more than strict competitive comparison.",
        ],
      },
      {
        heading: "Good Handicap Habits",
        summary:
          "Treat handicap games as learning games and agree on the setup before starting.",
        body: [
          "Players should confirm the handicap settings before the first move, use time controls that allow thinking, and review key positions after the game.",
          "If a handicap game is unrated or practice-only, the page should state that clearly so players understand how the result will be used.",
        ],
      },
    ],
    faq: [
      {
        question: "Is handicap mode for rated competition?",
        answer:
          "It is usually best for practice or casual balancing. The page should clarify whether a specific handicap game affects rating.",
      },
      {
        question: "Who should use handicap mode?",
        answer:
          "Friends, coaches, and players with a clear skill gap can use it to create more instructive games.",
      },
    ],
  },
  {
    id: "EN-010",
    locale: "en",
    sourceUrl: "https://www.xiangqi.com/xiangqi-puzzle",
    route: "/en/xiangqi-puzzle/",
    type: "landing-or-help",
    title: "Xiangqi Puzzle",
    description:
      "Practice Xiangqi tactics with puzzles that train checks, captures, threats, defenses, and forcing sequences.",
    heroTitle: "Xiangqi Puzzle Practice",
    cta: [
      { label: "Play Xiangqi", href: "https://play.xiangqi.com/", variant: "primary" },
      { label: "Learn How to Play", href: "/en/how-to-play-xiangqi/", variant: "secondary" },
    ],
    sections: [
      {
        heading: "Train Tactical Vision",
        summary:
          "Puzzles help players practice forcing moves and common Xiangqi attacking patterns.",
        body: [
          "A Xiangqi puzzle presents a position with a tactical goal. The solution may involve checkmate, winning material, defending the general, or finding a precise forcing sequence.",
          "Puzzle practice is especially useful because Xiangqi rewards active threats, cannon tactics, pins, forks, and fast attacks against the palace.",
        ],
      },
      {
        heading: "How to Use Puzzles",
        summary:
          "Solve slowly, explain the candidate moves, then compare the solution with your plan.",
        body: [
          "Before moving, identify checks, captures, direct threats, and defensive resources for both sides. If the first move works only because of a later tactic, make sure you can see the whole line.",
          "After solving, replay the position and ask which rule or pattern made the answer possible. This turns a single tactic into a reusable habit for live games.",
        ],
      },
    ],
    faq: [
      {
        question: "Are puzzles good for beginners?",
        answer:
          "Yes, if they are paired with rules learning. Beginners should start with simple checks, captures, and mate-in-one ideas.",
      },
      {
        question: "What should I look for first?",
        answer:
          "Look for checks on the general, cannon screens, unprotected pieces, and palace weaknesses.",
      },
    ],
  },
  {
    id: "EN-011",
    locale: "en",
    sourceUrl: "https://www.xiangqi.com/articles/what-is-xiangqi-aka-chinese-chess",
    route: "/en/articles/what-is-xiangqi-aka-chinese-chess/",
    type: "article-detail",
    title: "What Is Xiangqi, Also Known as Chinese Chess?",
    description:
      "An English introduction to Xiangqi, also known as Chinese chess, covering its board, pieces, rules, and strategic character.",
    heroTitle: "What Is Xiangqi?",
    cta: [
      { label: "Learn How to Play", href: "/en/how-to-play-xiangqi/", variant: "primary" },
      { label: "Play Online", href: "https://play.xiangqi.com/", variant: "secondary" },
    ],
    sections: [
      {
        heading: "Chinese Chess in Brief",
        summary:
          "Xiangqi is a two-player strategy game with armies, generals, a river, and palace restrictions.",
        body: [
          "Xiangqi, often called Chinese chess, is one of the world's classic strategy board games. Two players command opposing armies and try to checkmate the enemy general.",
          "Although it shares the broad idea of chess-like conflict, Xiangqi has unique features: pieces move on intersections, the river changes movement, the palaces restrict key defensive pieces, and cannons capture by jumping a screen.",
        ],
      },
      {
        heading: "Why Xiangqi Feels Fast",
        summary:
          "Open lines, cannon tactics, and the flying general rule create sharp positions early.",
        body: [
          "The board begins with many open files and tactical possibilities. Chariots and cannons can become active quickly, while generals can never face each other directly along an open file.",
          "This gives Xiangqi a direct, tactical rhythm. Even beginners quickly learn to watch checks, pins, discovered attacks, and threats against the palace.",
        ],
      },
      {
        heading: "How to Begin",
        summary:
          "Start with setup and legal moves, then play slow games and solve simple puzzles.",
        body: [
          "New players should learn the seven piece types, set up the board correctly, and play slower games while reading markers and move feedback. Puzzles can then reinforce common tactical motifs.",
        ],
      },
    ],
    faq: [
      {
        question: "Why is Xiangqi called Chinese chess?",
        answer:
          "It is a chess-family strategy game from China with two armies, generals, and checkmate as the central objective.",
      },
      {
        question: "What makes it different from international chess?",
        answer:
          "The river, palaces, cannon captures, flying general rule, and intersection-based board create a different tactical style.",
      },
    ],
    articleCards: [
      {
        title: "How to Play Xiangqi",
        excerpt: "Move from introduction to practical rules and first-game guidance.",
        href: "/en/how-to-play-xiangqi/",
        tag: "Next",
      },
      {
        title: "Xiangqi Puzzle",
        excerpt: "Practice tactical patterns after learning the pieces.",
        href: "/en/xiangqi-puzzle/",
        tag: "Practice",
      },
    ],
  },
  {
    id: "EN-012",
    locale: "en",
    sourceUrl: "https://www.xiangqi.com/help/rating",
    route: "/en/help/rating/",
    type: "help-detail",
    title: "Understand Xiangqi Ratings",
    description:
      "Learn what Xiangqi ratings mean, how they help pair players, and how to interpret rating changes after games.",
    heroTitle: "Understand Xiangqi Ratings",
    cta: [
      { label: "Play Rated Games", href: "https://play.xiangqi.com/", variant: "primary" },
      { label: "Tournament Help", href: "/en/help/tournament/", variant: "secondary" },
    ],
    sections: [
      {
        heading: "What Ratings Represent",
        summary:
          "Ratings estimate playing strength from game results and help create fair pairings.",
        body: [
          "A rating is not a permanent label. It is a changing estimate of your current results against other players. Wins, losses, opponent strength, and game context can influence how much a rating changes.",
          "Ratings are most useful when they help players find competitive games. A close rating range usually creates games where both players have real chances and can learn from the result.",
        ],
      },
      {
        heading: "Reading Rating Changes",
        summary:
          "Rating movement can be larger when a player is new, inactive, or facing a much different opponent.",
        body: [
          "New accounts may move faster while the system gathers enough game history. Results against much stronger or weaker opponents may also change ratings differently than results against similarly rated players.",
          "Players should treat rating as feedback over many games, not as a judgment from one win or loss.",
        ],
      },
    ],
    faq: [
      {
        question: "Why did my rating change by a different amount than my opponent's?",
        answer:
          "Rating systems often consider prior rating, confidence, and expected result. Equal-looking games do not always produce equal changes.",
      },
      {
        question: "Should beginners worry about rating?",
        answer:
          "Beginners should use rating mainly to find suitable opponents. Learning stable moves and reviewing games matters more at first.",
      },
    ],
  },
  {
    id: "EN-013",
    locale: "en",
    sourceUrl: "https://www.xiangqi.com/help/fair-play",
    route: "/en/help/fair-play/",
    type: "policy",
    title: "Fair Play Policy",
    description:
      "Review the Xiangqi.com fair play expectations for honest games, independent decisions, and respectful competitive conduct.",
    heroTitle: "Fair Play Policy",
    cta: [
      { label: "Read Politeness Code", href: "/en/help/politeness-code/", variant: "primary" },
      { label: "Back to Help", href: "/en/help/", variant: "secondary" },
    ],
    sections: [
      {
        heading: "Play Your Own Moves",
        summary:
          "Fair play means making independent decisions without outside assistance during active games.",
        body: [
          "Players should not use engines, outside analysis, another person's advice, or hidden references while a live game is in progress unless the event or game mode explicitly allows it.",
          "The policy protects every player by making results meaningful. A fair loss can teach; an assisted win damages trust and weakens the competitive environment.",
        ],
      },
      {
        heading: "Respect the Competition",
        summary:
          "Fair play also includes avoiding manipulation, abuse, and dishonest account behavior.",
        body: [
          "Players should not intentionally lose to adjust rating, coordinate fake results, create misleading accounts, or exploit technical issues for advantage.",
          "If a game has a problem, use the support path rather than retaliating or disrupting the match. Clear reporting helps the platform review issues consistently.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I analyze after the game?",
        answer:
          "Yes. Post-game study is encouraged. The restriction applies to outside help during active games where independent play is expected.",
      },
      {
        question: "Why does fair play matter online?",
        answer:
          "Online players rely on trust, rating integrity, and honest competition because opponents cannot see each other's environment.",
      },
    ],
  },
  {
    id: "EN-014",
    locale: "en",
    sourceUrl: "https://www.xiangqi.com/help/politeness-code",
    route: "/en/help/politeness-code/",
    type: "policy",
    title: "Politeness Code",
    description:
      "Read the Xiangqi.com politeness code for respectful chat, sportsmanship, and community behavior during online Chinese chess games.",
    heroTitle: "Politeness Code",
    cta: [
      { label: "Read Fair Play", href: "/en/help/fair-play/", variant: "primary" },
      { label: "Open Support Home", href: "/en/support-home/", variant: "secondary" },
    ],
    sections: [
      {
        heading: "Respect Other Players",
        summary:
          "Good online Xiangqi depends on calm, respectful interaction before, during, and after games.",
        body: [
          "Players should avoid insults, harassment, threats, discriminatory language, and repeated unwanted messages. Competitive games can be intense, but the chat and account behavior should remain respectful.",
          "Politeness also includes accepting wins and losses gracefully, avoiding taunts, and giving opponents time to play within the agreed time control.",
        ],
      },
      {
        heading: "Keep the Community Welcoming",
        summary:
          "The code helps beginners, casual players, and competitive players share the same platform.",
        body: [
          "A welcoming community makes it easier for new players to ask questions, learn from stronger opponents, and return after difficult games.",
          "When behavior crosses a line, players should use support or reporting paths instead of escalating the conflict inside the game.",
        ],
      },
    ],
    faq: [
      {
        question: "Does politeness mean I cannot be competitive?",
        answer:
          "No. Strong competition is welcome. The code asks players to compete without abuse, harassment, or disruptive behavior.",
      },
      {
        question: "What should I do if someone is rude?",
        answer:
          "Avoid escalating. Use the available support or reporting process and keep your own communication calm.",
      },
    ],
  },
];

export const englishReplicaPagesById = Object.fromEntries(
  englishReplicaPages.map((page) => [page.id, page]),
) as Record<ReplicaPage["id"], ReplicaPage>;

export const englishReplicaPagesByRoute = Object.fromEntries(
  englishReplicaPages.map((page) => [page.route, page]),
) as Record<string, ReplicaPage>;

export const enReplicaPages = englishReplicaPages;

export const enReplicaPageMap = englishReplicaPagesById;
