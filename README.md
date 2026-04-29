# 相弈中文门户重构项目

本项目按《相弈重构项目方案书 V1.3》落地，目标是交付一个面向中文用户的中国象棋门户站，满足以下要求：

- Astro 静态站架构
- 页面内容、SEO、FAQ、导航配置文件化
- SEO / GEO 友好页面结构
- 可接入 Git 驱动 CI / CD 发布
- 为中国大陆访问优化和后续 CDN 演进预留标准化接口

## 项目结构

- `src/pages/`：页面路由
- `src/layouts/`：布局
- `src/components/`：页面组件
- `src/data/`：结构化内容文件
- `public/`：静态资源
- `docs/`：交付文档、迁移表、发布说明
- `.github/workflows/`：CI / CD 示例

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 交付物

- URL 迁移表：`docs/url-mapping.csv`
- 发布检查表：`docs/release-checklist.md`
- 内容维护说明：`docs/content-editing-guide.md`
- 部署说明：`docs/deployment-runbook.md`
- 大陆测速模板：`docs/mainland-performance-log-template.md`
