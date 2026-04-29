# 发布检查表

## 发布前

1. 确认 `title`、`meta description`、`H1`、`canonical` 在每个核心页均唯一。
2. 确认 `robots.txt` 与 `sitemap.xml` 构建产物存在。
3. 确认首页、对弈页、下载页、规则页、FAQ 页、新闻页均具备页面摘要块。
4. 确认 FAQ 与结构化数据语义一致。
5. 确认旧 URL 到新 URL 的 301 规则已按 [url-mapping.csv](/D:/Git-Project/test/docs/url-mapping.csv) 配置。
6. 确认需要保留收录的页面可访问，需要 `noindex` 的页面未被误收录。
7. 确认图片、字体、图标不依赖第三方慢 CDN。

## 发布中

1. 在受控分支合并前查看 CI 构建是否通过。
2. 验证预览环境首页、核心页与新闻详情页路由正常。
3. 合并主分支后执行生产部署。
4. 发布完成后刷新 CDN 或执行缓存预热。

## 发布后

1. 提交 Google Search Console、Bing Webmaster Tools 与百度搜索资源平台所需 sitemap。
2. 检查 404、软 404、canonical 指向和重复收录风险。
3. 记录北京、上海、广州、深圳、成都五地测速结果。
4. 观察 7 天，决定是否追加缓存层或 CDN。
