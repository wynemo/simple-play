播放音乐的项目
可以添加本地文件夹
进行播放

前端使用 nextjs shadcn
后端使用 fastapi
前端与后端使用restful api通讯


- 在 readme.md:1 描述的 Next.js + FastAPI 架构基础上，先整理一份 OpenAPI/接口契约文档并放入仓库，确保前后端并行开发时对路由、鉴权、错误码有统一约定。
- 前端侧尽早拆分出播放器核心组件（播放队列、进度条、音量、热键）与库管理视图，使用 Next.js Server Actions/Route Handlers 处理耗时操作，并用 shadcn/ui 保持交互一致性。
- 后端利用 FastAPI 的异步能力封装本地文件库扫描任务（可配合 APScheduler/任务队列定期同步），将音轨元数据写入 SQLite/PostgreSQL，提供分页检索与多条件过滤接口。
- 文件播放建议支持分块/Range Streaming，配合缓存头或本地缓存目录提升大文件启动速度