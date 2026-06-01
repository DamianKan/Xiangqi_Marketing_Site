# TCN Route Audit

Checked against `src/pages/sitemap.xml.ts`.

Status meanings:
- `match`: `/tcn/...` is generated from the same replica-data path as the corresponding zh-CN page, or the zh-CN direct page itself reads replica data.
- `mismatch`: the zh-CN page is a standalone `.astro` page, but `/tcn/...` is currently generated from a different replica-data source, so the content does not truly correspond page-to-page.

| zh-CN route | tcn route | status | zh-CN source | current tcn source |
| --- | --- | --- | --- | --- |
| `/` | `/tcn/` | `match` | `src/pages/index.astro` | `zh.ts` |
| `/help/` | `/tcn/help/` | `match` | `-` | `zh.ts` |
| `/play-with-a-friend/` | `/tcn/play-with-a-friend/` | `match` | `-` | `zh.ts` |
| `/how-to-create-puzzle/` | `/tcn/how-to-create-puzzle/` | `match` | `-` | `zh.ts` |
| `/tournament/` | `/tcn/tournament/` | `match` | `-` | `zh.ts` |
| `/mobile/` | `/tcn/mobile/` | `match` | `-` | `zh.ts` |
| `/how-to-play-xiangqi/` | `/tcn/how-to-play-xiangqi/` | `match` | `-` | `zh.ts` |
| `/h-col-139.html` | `/tcn/h-col-139.html` | `mismatch` | `src/pages/h-col-139.html.astro` | `standalone-pages.ts` |
| `/contact/` | `/tcn/contact/` | `mismatch` | `src/pages/contact.astro` | `footer-pages.ts` |
| `/roadmap/` | `/tcn/roadmap/` | `match` | `-` | `footer-pages.ts` |
| `/team/` | `/tcn/team/` | `match` | `-` | `footer-pages.ts` |
| `/about/` | `/tcn/about/` | `mismatch` | `src/pages/about.astro` | `standalone-pages.ts` |
| `/new-user/` | `/tcn/new-user/` | `match` | `-` | `zh.ts` |
| `/verified/` | `/tcn/verified/` | `match` | `-` | `zh.ts` |
| `/privacy/` | `/tcn/privacy/` | `mismatch` | `src/pages/privacy.astro` | `standalone-pages.ts` |
| `/terms/` | `/tcn/terms/` | `mismatch` | `src/pages/terms.astro` | `standalone-pages.ts` |
| `/polite/` | `/tcn/polite/` | `match` | `-` | `footer-pages.ts` |
| `/fair-play/` | `/tcn/fair-play/` | `match` | `-` | `footer-pages.ts` |
| `/resources/` | `/tcn/resources/` | `match` | `-` | `footer-pages.ts` |
| `/shop/` | `/tcn/shop/` | `match` | `-` | `footer-pages.ts` |
| `/limits/` | `/tcn/limits/` | `match` | `-` | `footer-pages.ts` |
| `/rating/` | `/tcn/rating/` | `match` | `-` | `zh.ts` |
| `/pieces-and-moves/` | `/tcn/pieces-and-moves/` | `match` | `-` | `generated from normalized replica data` |
| `/how-to-play/` | `/tcn/how-to-play/` | `match` | `-` | `zh.ts` |
| `/youtube/` | `/tcn/youtube/` | `match` | `-` | `resource-pages.ts` |
| `/first-game/` | `/tcn/first-game/` | `match` | `-` | `zh.ts` |
| `/invite/` | `/tcn/invite/` | `match` | `-` | `zh.ts` |
| `/computer/` | `/tcn/computer/` | `match` | `-` | `zh.ts` |
| `/analysis/` | `/tcn/analysis/` | `match` | `-` | `zh.ts` |
| `/badges/` | `/tcn/badges/` | `mismatch` | `src/pages/badges.astro` | `standalone-pages.ts` |
| `/graphics/` | `/tcn/graphics/` | `mismatch` | `src/pages/graphics.astro` | `resource-pages.ts` |
| `/video/` | `/tcn/video/` | `mismatch` | `src/pages/video.astro` | `resource-pages.ts` |
| `/chinese/` | `/tcn/chinese/` | `mismatch` | `src/pages/chinese.astro` | `resource-pages.ts` |
| `/history/` | `/tcn/history/` | `mismatch` | `src/pages/history.astro` | `standalone-pages.ts` |
| `/bugs/` | `/tcn/bugs/` | `match` | `-` | `footer-pages.ts` |
| `/report/` | `/tcn/report/` | `match` | `-` | `footer-pages.ts` |
| `/admins/` | `/tcn/admins/` | `mismatch` | `src/pages/admins.astro` | `standalone-pages.ts` |
| `/slash/` | `/tcn/slash/` | `match` | `-` | `footer-pages.ts` |
| `/mark/` | `/tcn/mark/` | `match` | `-` | `zh.ts` |
| `/smothered-cannon/` | `/tcn/smothered-cannon/` | `match` | `-` | `smothered-cannon-page.ts` |
| `/white-faced-general/` | `/tcn/white-faced-general/` | `match` | `-` | `white-faced-general-page.ts` |
| `/earth/` | `/tcn/earth/` | `match` | `-` | `earth-page.ts` |
| `/support-home/` | `/tcn/support-home/` | `mismatch` | `src/pages/support-home.astro` | `zh.ts` |
| `/help/annotation.html` | `/tcn/help/annotation.html` | `match` | `-` | `annotation-page.ts` |
| `/help/markers.html` | `/tcn/help/markers.html` | `match` | `src/pages/help/markers.html.astro` | `same direct page reads replica data` |
| `/releases/` | `/tcn/releases/` | `match` | `-` | `zh.ts` |
| `/contributors/` | `/tcn/contributors/` | `match` | `-` | `manual-pages.ts` |
| `/sys-msgBoard/` | `/tcn/sys-msgBoard/` | `mismatch` | `src/pages/sys-msgBoard.astro` | `standalone-pages.ts` |
| `/sys-signup/` | `/tcn/sys-signup/` | `match` | `-` | `zh.ts` |
| `/sys-login/` | `/tcn/sys-login/` | `mismatch` | `src/pages/sys-login.astro` | `standalone-pages.ts` |
| `/sys-pr/` | `/tcn/sys-pr/` | `mismatch` | `src/pages/sys-pr.astro` | `standalone-pages.ts` |
| `/sys-profile/` | `/tcn/sys-profile/` | `match` | `-` | `standalone-pages.ts` |
| `/sys-nr/` | `/tcn/sys-nr/` | `mismatch` | `src/pages/sys-nr.astro` | `zh.ts` |
| `/sys-mCenter/` | `/tcn/sys-mCenter/` | `match` | `-` | `standalone-pages.ts` |
| `/sys-pgr/` | `/tcn/sys-pgr/` | `mismatch` | `src/pages/sys-pgr.astro` | `standalone-pages.ts` |
| `/sys-sitemap/` | `/tcn/sys-sitemap/` | `match` | `-` | `standalone-pages.ts` |
| `/sys-cookie/` | `/tcn/sys-cookie/` | `match` | `-` | `standalone-pages.ts` |
| `/sys-nd/23.html` | `/tcn/sys-nd/23.html` | `match` | `-` | `zh.ts` |
| `/sys-nd/22.html` | `/tcn/sys-nd/22.html` | `match` | `-` | `zh.ts` |
| `/sys-nd/20.html` | `/tcn/sys-nd/20.html` | `match` | `-` | `zh.ts` |
| `/sys-nd/19.html` | `/tcn/sys-nd/19.html` | `mismatch` | `src/pages/sys-nd/19.html.astro` | `standalone-pages.ts` |
| `/sys-nd/18.html` | `/tcn/sys-nd/18.html` | `mismatch` | `src/pages/sys-nd/18.html.astro` | `standalone-pages.ts` |
| `/sys-nd/17.html` | `/tcn/sys-nd/17.html` | `mismatch` | `src/pages/sys-nd/17.html.astro` | `standalone-pages.ts` |
| `/opening-elephant.html` | `/tcn/opening-elephant.html` | `mismatch` | `src/pages/opening-elephant.html.astro` | `standalone-pages.ts` |
| `/opening-central-cannon.html` | `/tcn/opening-central-cannon.html` | `mismatch` | `src/pages/opening-central-cannon.html.astro` | `standalone-pages.ts` |
| `/opening-angels-guide.html` | `/tcn/opening-angels-guide.html` | `mismatch` | `src/pages/opening-angels-guide.html.astro` | `standalone-pages.ts` |
| `/articles/five-chinese-chess-deployment-tactics.html` | `/tcn/articles/five-chinese-chess-deployment-tactics.html` | `match` | `-` | `manual-article-pages.ts` |
| `/articles/ten-ways-to-improve-chinese-chess-skills.html` | `/tcn/articles/ten-ways-to-improve-chinese-chess-skills.html` | `match` | `-` | `manual-article-pages.ts` |
| `/articles/5-xiangqi-situation-analysis-indicators.html` | `/tcn/articles/5-xiangqi-situation-analysis-indicators.html` | `match` | `-` | `manual-article-pages.ts` |
| `/articles/10-xiangqi-endgame-principles.html` | `/tcn/articles/10-xiangqi-endgame-principles.html` | `match` | `-` | `manual-article-pages.ts` |
| `/articles/10-xiangqi-midgame-principles.html` | `/tcn/articles/10-xiangqi-midgame-principles.html` | `match` | `src/pages/articles/10-xiangqi-midgame-principles.html.astro` | `manual-article-pages.ts` |
| `/articles/10-xiangqi-opening-principles.html` | `/tcn/articles/10-xiangqi-opening-principles.html` | `match` | `src/pages/articles/10-xiangqi-opening-principles.html.astro` | `manual-article-pages.ts` |

Summary:
- `49` routes are currently `match`.
- `23` routes are currently `mismatch`.
