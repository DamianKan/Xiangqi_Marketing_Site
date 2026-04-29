# 相弈象棋像素级复刻：URL 清单

版本：v0.3  
日期：2026-04-28  
目标站主域：`https://www.zh.xiangqi.com/`

## 1. 已确认复刻范围

本项目按以下口径执行：

- 需要复刻目标站全部可见子页面。
- 在线对弈允许跳转外部 `https://play.xiangqi.com/`。
- 下载页允许保留真实 APK、Google Play、App Store 下载链接。
- 需要实际复刻多语言页面：简中、繁中、英语、Tiếng Việt。
- 繁中、英语、Tiếng Việt 页面必须按照简体中文界面的同等复刻要求实现，包括页面结构、视觉还原、图片资源、图标、SEO 内容、教学文章、FAQ 交互、帮助交互、导航交互和移动端适配；不能只做入口、跳转页或简单翻译页。
- 首页要求像素级复刻。
- SEO 长内容保留。
- 教学文章、常见问题区域的实际交互必须复刻，不能只做静态 UI。
- 除明确允许的业务外链外，页面静态资源需本地化。

## 2. 简中核心页面

| 页面 | URL | 优先级 | 复刻要求 |
| --- | --- | --- | --- |
| 首页 | `https://www.zh.xiangqi.com/` | P0 | 像素级复刻，保留 SEO 长文、教学文章、FAQ 交互 |
| 帮助中心 | `https://www.zh.xiangqi.com/help/` | P0 | 复刻帮助入口、列表、站点条例、页脚链接 |
| 下载 APP | `https://www.zh.xiangqi.com/mobile/` | P0 | 复刻 APK / Google Play / App Store 真实下载入口 |
| 如何下象棋教程 | `https://www.zh.xiangqi.com/how-to-play-xiangqi/` | P0 | 复刻长文、目录、作者、语言切换、内容结构 |
| 象棋规则 | `https://www.zh.xiangqi.com/how-to-play/` | P0 | 复刻规则说明、棋盘摆放、棋子走法 |
| 好友对战 | `https://www.zh.xiangqi.com/play-with-a-friend/` | P1 | 复刻帮助子页面 |
| 自定义残局 | `https://www.zh.xiangqi.com/how-to-create-puzzle/` | P1 | 复刻帮助子页面 |
| 比赛 | `https://www.zh.xiangqi.com/tournament/` | P1 | 复刻帮助/赛事页面 |
| 邀请好友 | `https://www.zh.xiangqi.com/invite/` | P1 | 复刻邀请好友教程 |
| 棋盘标记 | `https://www.zh.xiangqi.com/help/markers.html` | P1 | 复刻画箭头/标记教程 |

## 3. 多语言页面

| 语言 | 入口 URL | 本地复刻建议 |
| --- | --- | --- |
| 简中 | `https://www.zh.xiangqi.com/` | `/` |
| 繁中 | `https://www.zh.xiangqi.com/tcn/` | `/tcn/` |
| English | `https://www.xiangqi.com/` | `/en/` |
| Tiếng Việt | `https://www.vn.xiangqi.com/` | `/vi/` |

多语言要求：

- 不是简单下拉 UI，必须有实际页面。
- 繁中、英语、Tiếng Việt 的验收标准与简中一致：对应语言首页及可见子页面都要按源站实际页面复刻，资源本地化、交互行为、响应式表现均纳入验收。
- 顶部语言菜单切换到对应本地页面。
- 英文、越南语页面资源也需要本地化。
- 如果内容量过大，先复刻首页及导航可见核心页，再逐步补齐语言内页。

## 4. 英文站参考页面

| 页面 | URL | 说明 |
| --- | --- | --- |
| 英文首页 | `https://www.xiangqi.com/` | 英文多语言首页参考 |
| 英文帮助 | `https://www.xiangqi.com/help` | 英文帮助中心 |
| 英文帮助菜单 | `https://www.xiangqi.com/help/menu` | 帮助项目更完整，供子页面补全 |
| 英文教程 | `https://www.xiangqi.com/how-to-play-xiangqi` | 英文长文教程 |
| 英文摆棋教程 | `https://www.xiangqi.com/help/board-and-set-up` | 英文规则/棋盘设置子页面 |
| 英文文章：What is Xiangqi | `https://www.xiangqi.com/articles/what-is-xiangqi-aka-chinese-chess` | 教学文章交互参考 |

## 5. 导航与外链策略

| 项目 | 处理方式 |
| --- | --- |
| 在线对弈 | 允许跳转 `https://play.xiangqi.com/` |
| 注册、游戏大厅、正式对弈 | 允许使用 `play.xiangqi.com` 外链 |
| APK 下载 | 允许真实下载链接，需确认源地址 |
| Google Play | 允许真实外链 |
| App Store | 允许真实外链 |
| 社交媒体 | 允许外链，但图标和展示需与源站一致 |
| 普通页面导航 | 必须指向本地复刻页面 |
| 图片/CSS/JS | 必须本地化，不直接引用源站静态资源 |

## 6. 首页内容结构

首页需保留并复刻以下内容块：

- 顶部导航：帮助、下载APP、如何下象棋、语言切换。
- 首屏：logo、红色导航栏、山林/棋子/棋盘 banner、标题、两个 CTA。
- 免费象棋在线玩。
- 双人在线象棋对战。
- 中国象棋游戏在线玩。
- 在线下象棋提升技能。
- 中国象棋促进逻辑思维能力。
- 中国象棋人机对战。
- 难度适宜的中国象棋挑战。
- 中国象棋残局游戏。
- 全球象棋在线赛事。
- 象棋等级分及排行榜。
- 国际化的象棋网上社群。
- 向高水平象棋选手学习。
- 不同设备，同样在线象棋享受。
- 免实名登记注册。
- 中国象棋在线玩的礼仪。
- 在线下象棋的未来趋势。
- 教学文章区域。
- 常见问题区域。
- 页脚：关于、帮助、更多、应用商店、社交媒体。

## 7. 教学文章与 FAQ 交互

| 模块 | 交互要求 |
| --- | --- |
| 教学文章列表 | 复刻文章卡片、图片/摘要、日期、更多入口、点击进入文章详情 |
| 教学文章详情 | 复刻文章标题、作者、日期、正文、上下篇或返回列表入口 |
| FAQ 列表 | 复刻源站展开/折叠效果或等效交互 |
| FAQ 链接 | FAQ 中的内部链接指向本地页面；允许的业务外链按策略保留 |

## 8. 待继续发现的 URL

下一阶段需要继续用站内搜索、目标页链接提取和手工点击补全：

- 帮助中心所有二级页面。
- 所有教学文章详情页。
- FAQ 中引用的内部说明页。
- 页脚关于类页面：我们的故事、我们的团队、产品路线图、联系我们。
- 条款类页面：服务条款、隐私政策、公平对弈政策、文明政策。
- 多语言版本对应页面。

## 9. 当前资料来源

- `https://www.zh.xiangqi.com/`
- `https://www.zh.xiangqi.com/help/`
- `https://www.zh.xiangqi.com/mobile/`
- `https://www.zh.xiangqi.com/how-to-play-xiangqi/`
- `https://www.zh.xiangqi.com/how-to-play/`
- `https://www.zh.xiangqi.com/tcn/`
- `https://www.zh.xiangqi.com/invite/`
- `https://www.zh.xiangqi.com/help/markers.html`
- `https://www.xiangqi.com/`
- `https://www.xiangqi.com/help`
- `https://www.xiangqi.com/help/menu`
- `https://www.xiangqi.com/how-to-play-xiangqi`
- `https://www.xiangqi.com/help/board-and-set-up`

## 10. 下一阶段输出

确认本文档后，下一阶段应产出：

- 完整站点 URL 抓取表。
- 静态资源清单。
- 页面截图对照表。
- 每个页面的复刻优先级和完成状态表。
