# 相弈象棋复刻：下一阶段实施步骤

版本：v0.2  
日期：2026-04-28

## 0. 已确认实施决策

- 多语言页面按各自对应源站复刻：简中对照 `www.zh.xiangqi.com`，繁中对照 `www.zh.xiangqi.com/tcn/`，英语对照 `www.xiangqi.com`，Tiếng Việt 对照 `www.vn.xiangqi.com`。
- 在线对弈相关链接允许跳转 `https://play.xiangqi.com/`，打开方式为当前页跳转。
- 下载链接允许保留真实外链；如 `rel="noopener"` 或外链提示不影响页面效果与源站一致性，可以不额外添加。
- P1/P2 页面按“一次性全部完成”的目标执行，不拆成长期分批交付；批次仅作为内部实施顺序。

## 1. 实施顺序

1. 建立抓取脚本：按 `replica-page-inventory.csv` 抓取 HTML、图片、CSS 背景图、`original` 懒加载资源。
2. 建立资源映射：输出 `replica-asset-map.csv`，确认每个源站资源对应本地路径。
3. 重建页面数据层：按 locale/page type 拆分内容，不再把坏编码 HTML 直接塞进 Astro。
4. 先做 P0 首页：简中首页像素级复刻；繁中、英语、Tiếng Việt 首页按各自对应源站同标准复刻，不做简中翻译占位框架。
5. 完成导航交互：帮助下拉、语言下拉、移动端菜单、本地路由跳转。
6. 完成 P0 内容页：帮助、下载、教程、FAQ。
7. 完成 P1 帮助子页和文章详情页。
8. 做截图验收和构建验收。

## 2. 实施范围与顺序

目标是一次性完成全部 P0/P1/P2 页面；下面批次只表示内部开发顺序，不表示分阶段降低交付范围。

| 批次 | 页面 |
| --- | --- |
| Batch 1 | `/`, `/tcn/`, `/en/`, `/vi/` |
| Batch 2 | `/help/`, `/download/`, `/how-to-play-xiangqi/`, `/how-to-play/` |
| Batch 3 | `/en/help/`, `/en/help/menu/`, `/vi/how-to-play/`, `/vi/download/`, `/vi/cau-hoi-thuong-gap/` |
| Batch 4 | 帮助子页、文章列表、文章详情、政策页 |

## 3. 工程改造建议

- 新增 `src/data/replica/pages.ts`：统一管理页面元数据、source URL、本地路由、locale。
- 新增 `src/data/replica/assets.ts`：统一管理本地化图片资源。
- 新增 `src/layouts/ReplicaLayout.astro`：复刻站公共布局。
- 新增 `src/components/replica/`：Header、Footer、Hero、FAQ、ArticleCard、HelpMenu 等。
- 新增 `src/pages/[locale]/...` 或显式语言目录，避免语言逻辑散落。
- 删除或隔离当前占位式页面，防止误验收。

## 4. 构建验收

- `pnpm build` 必须通过。
- 页面中不允许出现乱码。
- 控制台不允许出现找不到图片、找不到脚本、未定义浏览器 API 的错误。
- sitemap 包含所有本地复刻页面。
- canonical、title、description、OG 图按语言输出。

## 5. 人工确认点

以下问题已确认：

- 英语和越南语源站与简中源站版式不完全相同时，按各自对应源站复刻。
- 在线对弈外链使用当前页跳转。
- 下载链接不额外添加影响视觉或交互效果的外链提示；安全属性仅在不影响源站一致性的前提下使用。
- P1/P2 页面一次性全部完成。
