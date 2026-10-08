# V4 装配示例

组件与配置的用法示例；不作为固定页面方案或生产岗位的新指令。

## 传入游戏自己的视觉配置

`src/data/theme.ts` 的中性值只让空模板能够运行。实际建站时，填写游戏自己的 `ThemeConfig`：

| 配置 | 调用时决定 |
| --- | --- |
| `tokens` | 游戏自己的语义配色，包括正文、背景、链接、重点与状态 |
| `typography` | 游戏自己的标题/正文字体及 fallback；本地字体按需登记 |
| `shape` / `density` | 边框、圆角、留白与信息密度 |
| `background` / 素材清单 | 是否用背景及游戏自己的截图/图片 |
| `navigation` / `variants` | 导航方式、首页构图及其他外壳布局 |

没有主题名称选择步骤，没有游戏类型到配色或字体的固定映射。框架以配置值渲染，而不是识别某个预设名称。

## 首页入口模块

```ts
{
  id: "walkthrough-index",
  type: "guide-index",
  heading: "Find a walkthrough",
  columns: 1,
  groups: [{
    title: "Start here",
    items: [{
      label: "Beginner guide",
      href: "/guides/beginner", // 只绑定该站已经规划的真实 URL
      description: "Controls and first-session help.",
    }],
  }],
}
```

作为首页第一个模块会进入 guide-portal/reference-desk 首屏资料区；在 visual-cover 中会成为首屏后的入口。也可以将其他模块放在第一个位置，或选择另一种布局。模块的选择、先后、数量都由实际页面决定；本示例不是固定首页顺序。

## 步骤与图片

```ts
{
  id: "solution",
  type: "steps",
  heading: "Follow the solution",
  items: [{
    title: "真实操作标题",
    body: "有依据的操作说明。",
    doneCondition: "有依据的完成状态。",
    assetId: "已登记素材 ID", // 可省略；缺图不会阻塞
    caption: "图片解释。",
  }],
}
```

## 可组合路线与答案上下文

`progression` 接收任意有顺序的页面或对象，条目数、名字和目标 URL 由调用侧提供。图片使用已登记的 `assetId`，需要游戏专属图形时可传入调用侧的 `visual` 节点；未配置视觉时仍显示纯文本路线。

```tsx
{
  id: "shop-cycle",
  type: "progression",
  heading: "Turn a find into an upgrade",
  stages: [
    { title: "Loot", href: "/loot", description: "Find stock." },
    { title: "Craft", href: "/craft", assetId: "workbench", label: "Prepare" },
    { title: "Sell", href: "/shop", visual: <WorkshopMark />, caption: "Set the offer." },
    { title: "Reinvest", href: "/upgrades", description: "Improve the next run." },
  ],
}
```

`PageContent.quickAnswerContext` 可保存短答案之后的补充解释。`AnswerSummary` 在各页面外壳中用同一个 `RichText` 渲染摘要与展开内容；展开标签来自当前 locale 的 `ui.answerContext`。页面目录由 `PageContents` 读取模块 `id`，可在正文/侧栏放置并按需折叠。

```ts
{
  quickAnswer: "Sell recovered materials to fund the next expedition.",
  quickAnswerContext: "Prioritize items the current workshop can process.\n\n- Keep one reserve item.\n- Reinvest the rest in capacity.",
}
```

## 第二站装配经验：经营与探索并存

Fell & Sell 的价值在于验证一站可以同时承接不同玩法，而不需要复制一套“经营类模板”。首页首先帮助玩家选问题，完整目录再提供查找入口。下面只示范组件组合；文案、URL、分类与顺序在实际调用时确定。

### 首页：入口、路线、目录各司其职

- **任务入口**：经营决策和探索准备分别给出可点击入口，摘要说明能解决什么问题。多个任务同等重要时复用 `EntityGrid`，不硬套一主多次的精选文章版式。
- **玩法联系**：确有循环或阶段关系时用 `Progression` 连接相关攻略；没有这种关系就省略。
- **完整目录**：`GuideIndex` 放真实路由的分类链接，方便回访用户查找。不是把每篇长摘要再铺一遍。
- **更新信息**：若需要显示最近复核内容，使用真实复核日期；重做外观不刷新日期。

```ts
import type { EntityGridModule } from "@/types/modules";

// 两个同等重要的任务入口；只是用法示例，不是固定游戏类型。
const taskEntries: EntityGridModule = {
  id: "task-entries",
  type: "entity-grid",
  heading: "What do you need help with?",
  items: [
    { title: "Prepare an expedition", summary: "Equipment and supplies before a run.", href: "/expedition" },
    { title: "Manage the workshop", summary: "Production and stock decisions.", href: "/workshop" },
  ],
};
```

目标 URL 必须替换为当前站已有规划路由。可组合 `EntityGrid → Progression → GuideIndex`，也可省略路线或调换区域；组件只描述内容用途，列数、位置和游戏视觉由装配方决定。

### 内页：答案、定位、细节逐层展开

第二站的内页用法是分组导航 → 聚焦标题与原复核日期 → 短答案/背景 → 页内目录 → 正文 → FAQ/相关攻略。可复用的是角色分工，不是必须使用这一固定排列：

- `WikiNavigation` 负责换攻略，`PageContents` 负责找当前答案中的章节；两者不是同一目录。
- `AnswerSummary` 使用明确的 `quickAnswer` / `quickAnswerContext` 输入。不要用按句号截断等方式自动拆 Markdown；列表、链接、条件和警告必须完整保留。
- `ModuleRenderer` 按问题使用步骤、表格、比较和解释；不将所有内容重新拼成一篇长 prose。`module.id` 同时作为目录锚点。
- `WikiNavigation` 已接入 `GuideDisclosure`：手机默认折叠完整导航、桌面展开，仍可手动切换。自定义组装可传 `desktopMinWidth`；使用 `PageShell` 则传 `navigationDesktopMinWidth`。默认 901px 跟随共享 CSS，自定义断点须与站内布局同步，不复制第二站的 701px。
- 只在图片能帮助识别游戏、理解步骤或对象时放素材；无图时保留完整内容，不伪造截图补版式。

### 复用什么，保留什么

回到共享框架：任务入口、分类目录、任意长度路线、答案/背景分层、响应式折叠、语义正文和目录锚点。已有组件直接使用，不再复制新的 MerchantHome/Article 到生产模板。

留在单站：绿色导航、浅色阅读面、铜金强调、Bitter 字体、四阶段名称、具体场景和首页构图。这些说明游戏设计有依据，不是所有经营游戏的默认配置。

验收时检查原答案/FAQ 不丢、模块不重复、原复核日期不变；桌面/手机都能找到任务入口和正文，宽表格局部滚动。此类检查证明页面交付，不能证明内容事实、流量或收入改善。

## 第三站装配经验：对象目录与攻略并存

Kingdom Rush 的英雄、塔和法术名单验证了“先找对象，再读说明”的需求。共享框架新增可选 `ReferenceDirectory`，直接接收既有 `EntityGridModule`；不新增模块类型，不让所有对象卡片自动变成可筛选目录。玩家任务入口仍可用普通 `EntityGrid`，规则解释继续组合正文、表格与步骤。

```tsx
import { ReferenceDirectory } from "@/components/content/ReferenceDirectory";
import { referenceAnchors } from "@/lib/reference-directory";
import type { EntityGridModule } from "@/types/modules";

const materials: EntityGridModule = {
  id: "materials",
  type: "entity-grid",
  heading: "Materials directory",
  items: [
    { title: "Copper ore", badge: "Ore", summary: "Confirmed source and use.", href: "/materials" },
    { title: "Linen", badge: "Cloth", summary: "Confirmed source and use.", href: "/materials" },
  ],
};

// 将示例替换为该站真实对象与已规划 URL；不预设物品数量或分类。
<ReferenceDirectory guideModule={materials} currentUrl="/materials" />;

// 首页预览用完整列表计算 ID，再选条目，避免重复名称的片段链接歧义。
const anchors = referenceAnchors(materials.id, materials.items);
const firstMaterialHref = `/materials#${anchors[0]}`;
```

搜索只匹配已有名称、标签与摘要；筛选只使用原标签，不推断职业、稀有度或能力。对象名字（含中文、符号及重复名）生成确定且互不重复的锚点，服务端输出全部条目。没有 JavaScript 仍可阅读；搜索与筛选是渐进增强。

链接处理只把没有查询参数/片段的同页 URL 改为该对象锚点。真实独立页、既有章节、查询条件和外部 URL 保持原目标。缺独立攻略时使用真实章节，不增加空壳对象页。可复用的 `filterReferenceItems` 与 `referenceAnchors` 也能供首页预览或站内自有布局使用。

`labels` 支持覆盖完整搜索、筛选、计数、清除、空态和链接文案；计数及链接使用 `{total}` / `{visible}` / `{title}` 字符串模板，保持服务端到客户端输入可序列化。完整字段见组件导出的 `ReferenceDirectoryLabels`，`entryCountOne` 单独提供单条计数文案。默认英文仅用于未传文案的直接调用，不替代站点 locale。目录样式使用共享语义 token；`--reference-columns` 可调整宽屏列数，760px 以下默认单列，站内可覆写布局。

三站共通能力仍是身份/主要入口、真实分类导航、答案/背景、章节定位及语义正文。差异发生在装配：推进路线、经营循环和对象目录按实际问题选用。英雄图、蓝色金边、Bree Serif、具体对象分类与首页构图留在 Kingdom Rush，不生成第三套皮肤。

验收检查数据和摘要不丢、对象锚点唯一、原目标保留、组合搜索/筛选/清除、空名单/无标签、手机宽度与无 JavaScript 阅读。修改目录组件时，针对本次改动编写一次性数据/渲染检查；浏览器另检交互和定位。这些证明组件行为，不证明游戏事实、内容覆盖或流量改善。

## 查看当前站的静态产物

```sh
npm run verify
python3 -m http.server 4174 --bind 127.0.0.1 --directory out
```

打开 `http://127.0.0.1:4174/`，检查的是当前站构建后的页面。

`GuideDisclosure({ title, className?, desktopMinWidth?, children })` 从 How to Fish 抽取响应式折叠容器：桌面展开、手机折叠，用户可自行切换，跨断点重新采用对应初始状态。它只负责 disclosure 行为；导航内容、断点和视觉由调用站决定。适合避免手机正文前出现整屏导航。不是全站统一布局。
