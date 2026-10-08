# V4 攻略模板能力接口

范围：共享模板的页面、组件、视觉与素材配置。本文描述模板接口，**不修改生产岗位职责、Skill、交接或准入**。它继续支持原有 V3 页面数据与静态部署合同；模板升级不自动迁移任何上线网站。

## 模板与调用配置的边界

模板提供页面外壳、布局选项、通用组件和配置接口。实际调用时，根据这个游戏的内容与视觉特征决定组件选择、顺序、数量、导航、配色、字体和素材。模板不根据游戏类型自动选定风格，也不要求使用某个完整页面组合。

`src/data/theme.ts` 仅提供能运行、能检查的中性占位配置。颜色 token、heading/body 字体、形状、密度、背景与导航都是调用侧输入；占位值不代表 V4 的品牌设计。游戏自定义字体按需放入本地 `public/` 并声明 font-face，不要求携带或使用样板的字体。

历史需求分类仅供理解组件能力，不参与生产页面的自动选择。工具继续使用 Workspace 和独立工具代码。

## 页面框架

Home、Hub、Content、Workspace 四种外壳共用 Header、Footer、搜索、广告、多语言、metadata、sitemap 和路由能力。

### 首页构图

| `presentation.variant` | 用途与组成 |
| --- | --- |
| `guide-portal` | 目录主题与导航提示在左；第一个模块形成右侧攻略入口。无图时仍保留左右结构 |
| `reference-desk` | 紧凑目录标题在上，宽幅索引在下；适合资料规模较大的 Wiki，可配全站侧栏导航 |
| `visual-cover` | 图文任务入口形成首屏，随后展开攻略目录；有图和无图均有完整布局 |
| `split-panel` / `media-hero` | 保留原有数据兼容，迁移不要求改动全部页面 |

首页是攻略目录，入口名称、分组和顺序帮助玩家找到当前任务对应的攻略。主要任务入口与完整分类目录按查找用途组合；第一个模块只渲染一次。Key Facts 按具体任务选用，空时不渲染。补充内容保留在原 HTML 的折叠补充区；`presentation.supplementary: "expanded"` 可展开。内页完整回答问题，各模块按步骤、条件、数据和相关任务组织。

### 全站导航与页内目录

`theme.navigation: "header" | "wiki-sidebar"`。全站树复用 `primaryNavigation[].children`，按当前 URL 标记位置，递归支持分类子项；窄屏导航复用 `GuideDisclosure`，有 JavaScript 时默认收起，桌面默认展开；无 JavaScript 时原生 details 与全部链接仍可操作。`WikiNavigation.desktopMinWidth` / `PageShell.navigationDesktopMinWidth` 可覆盖断点；共享布局默认 901px，与现有 900px 单栏 CSS 边界一致，自定义布局需让这两个边界一致。它负责跨页面查找，页内目录仍负责当前页面定位。导航标签通过 locale 配置提供 `wikiNavigation`，首页补充区使用 `homeDetails`。

## 组件目录

| 类型 | 主要字段 | 用途 |
| --- | --- | --- |
| `guide-index` | groups → title/items → label/href/description/badge；columns | 分组链接与关卡、问题、对象索引；不是整齐堆放长摘要 |
| `featured-guides` | lead + supporting；title/href/description/assetId | 主攻略与次级入口形成明确主次；没有图片也能显示 |
| `progression` | stages → title/href/description/label；可选 assetId/caption/visual | 有实际先后关系的学习或推进路线；路线长度和对象由调用侧决定，可使用已登记图片或传入视觉节点 |
| `fact-panel` | facts → label/value/href | 快速扫读属性、条件与关联对象 |
| `entity-grid` | items → title/summary/href/badge/assetId | 对象卡片或类别入口 |
| `comparison` | options → name/summary/bestFor/badge | 条件不同的选择，不编无依据排名 |
| `data-table` | columns + rows | 属性、价格、状态与差异对照 |
| `steps` | items → title/body/doneCondition；可选 assetId/caption | 操作顺序，可选配图与成功判断 |
| `recipes` / `schedule` | 原有投入产出、时间与状态字段 | 生产配方、已确认事件与时间 |
| `media-gallery` | assetIds | 已登记的本地素材 |
| `callout` / `prose` | 原有状态、正文和关联链接 | 限制与解释，不用泛正文代替可枚举答案 |

所有组件的精确类型由 `src/types/modules.ts` 定义。只把有顺序的内容放进 progression/steps；普通分类不编号。只使用真实目标链接，不能为了填组件创造事实、对象、评级或“热门”数据。

页面简答使用 `PageContent.quickAnswer`，较长的解释可选填 `quickAnswerContext`。Home、Hub、Content 和 Workspace 外壳通过 `AnswerSummary` 展示，两段内容都走共享 `RichText`；扩展上下文以调用语言的 `LocaleUiLabels.answerContext` 折叠显示。`WikiNavigation` 复用带 `children` 的全站导航树并标记当前页面；`guide-index` 提供页面内分组链接；`PageContents` 可放在正文或右栏并启用折叠，目录目标使用模块 `id`。文章模块继续由 `ModuleRenderer` 按 `prose`、`steps`、表格等语义类型渲染，Markdown 统一经 `RichText` 处理。

## 第二站提炼：组件组合形成攻略站

Fell & Sell 的实际重建验证了同一组组件能承接探索与经营两种需求。可复用的是下面的组织方法，完整实现与验证见 [第二站记录](../../../docs/V4-Fell-Sell第二站重建.md)。这是一份装配参考，不要求每个游戏使用同样顺序、数量或布局。

| 页面要解决的事情 | 可复用做法与组件 | 调用时决定 |
| --- | --- | --- |
| 玩家一进站知道该去哪里 | 少量主要任务入口；`EntityGrid` / `GuideIndex`，有明确主次时用 `FeaturedGuides` | 根据真实问题分类，不按文章发布日期排列全部入口 |
| 看懂多种玩法之间的联系 | `Progression` 连接有依据的阶段与攻略 URL | 只在确有顺序/循环时使用；不把普通分类编号 |
| 快速找全站攻略 | 完整分类目录用 `GuideIndex`，全站导航用 `WikiNavigation` | 主入口精简，完整目录负责查找，两者分工不同 |
| 进内页尽快得到答案 | `AnswerSummary` 把短答案和补充背景分别呈现 | 背景折叠但保留 HTML；不删除步骤、条件、例外来换取短页面 |
| 在长攻略中定位 | `PageContents` 绑定真实模块 id；正文按 steps/table/prose 等语义组件组织 | 全站目录与页内目录分开；手机减少正文前的导航占用 |
| 游戏个性和阅读兼顾 | 游戏素材与个性字体用于身份、入口和必要说明，正文保持可读层级 | 截图位置、裁切、色彩、字体均由当前游戏决定，不抽成统一皮肤 |

迁移验收比较原 URL、模块、答案、FAQ 与复核日期：样式重做不等于事实重新核实。每个原模块只出现一次；手机宽表格在局部容器内滚动，页面本身不溢出。

经营/探索站的装配示例见 [V4_ASSEMBLY.md](V4_ASSEMBLY.md#第二站装配经验经营与探索并存)。需要游戏专属构图时，直接组合上述组件与站点本地布局；Home/Hub/Content/Workspace 是可用的起点，不限制最终视觉。

## 第三站提炼：对象资料与攻略说明分开

Kingdom Rush 6 验证了另一种需求：玩家先找某个英雄、塔或法术，再读其说明。可复用能力是可浏览对象目录，不是塔防专属外壳。记录见 [第三站重建](../../../docs/V4-Kingdom-Rush第三站重建.md)。

`ReferenceDirectory` 是可选的直接装配组件，接收已有 `EntityGridModule` 与当前 URL。提供名称/标签/摘要搜索、原标签筛选、结果数量、无结果清除和唯一对象锚点；服务端 HTML 保留全部项目，无 JavaScript 时仍能阅读和定位。它不改变 `ModuleRenderer` 或普通 `EntityGrid` 的默认行为，也不新增规划数据合同。

- 已有可枚举名单时，可用目录帮助查对象；普通任务入口仍用 `EntityGrid`，规则说明仍用 steps/table/prose。
- 每项仅展示已有名字、摘要、标签、链接与登记素材。缺头像、数值或具体对象攻略时，不补造数据，也不为排版创建空 URL。
- 同路径且没有 query/hash 的链接可以指向对象自己的页内锚点；已有章节、查询条件和外部链接保持原目标。首页对象预览可用相同 helper 生成锚点。
- 搜索文案、类别名称、结果计数和清除标签由调用方传入；游戏视觉继续使用语义 token 与站内 CSS。列数、模块位置与是否启用目录均由实际装配决定。

使用示例见 [V4_ASSEMBLY.md](V4_ASSEMBLY.md#第三站装配经验对象目录与攻略并存)。迁移对照对象总数、原摘要/链接、规则正文与原日期；目录能查找不等于对象事实已经核实或攻略覆盖完整。

## 游戏专属视觉配置

`src/types/theme.ts` 定义配置接口；`themeStyle()` 将调用侧的值映射到共享 CSS 变量。没有固定皮肤名称或配色/字体预设清单。相同组件可以使用不同游戏的颜色、字体、边框、密度与素材，也可以跨布局复用。布局选项描述空间关系，不绑定某种游戏或视觉风格。

每个游戏自行确定视觉值与字体；模板不提供待选皮肤。

## 可选素材

正式素材继续登记在 `src/data/assets.ts`，包含本地路径、来源页、下载来源、署名、用途、尺寸、替代文字、关联页面与焦点位置。Page Builder 使用 Collector 素材，公开页面不输出素材来源等级或检查日期。

- 仅非必要装饰图片缺失或不可用不阻塞模板验收；必要地图、步骤截图必须进入可见本地 asset 组件并通过内容守恒，缺失走补采，不可隐藏。装饰图：保留警告，采用 surface/gradient/hide 配置；浏览器加载失败同样切换 fallback。
- 图片不热链。不能用虚构画面冒充游戏截图，也不使用官方 Logo。
- Hero、精选攻略、对象卡片、步骤和 gallery 均能使用登记素材；焦点裁切与手机端仍需检查。

## 当前站验证

`npm run verify` 只检查类型、lint 与静态构建。修改共享代码时，围绕本次改动另写一次性检查；制作具体网站时，以该站最终 HTML 核对路由、元信息、语义正文和目录目标，并在桌面和手机浏览器检查构图、字体、图片、导航、局部表格滚动及页面溢出。

结构与视觉通过不代表游戏答案、排名、停留或收入通过。上线站迁移、生产岗位接入与岗位职责/Skill 修改分别处理。
