# V4 广告布局合同

2026-10-02 已确认的 horizontal 方案。Page Builder 在本站页面结构确定后选择语义位置与设备尺寸，并在本地实现、检查位置和空代码；上线 Builder 核对清单随成品发布，Adsterra Integrator 使用既有浏览器自动化创建/取码并绑定。内容更新保留已批准位置，不创建新岗位。

## 位置与尺寸

| 页面 | 位置 | 桌面 | 手机 |
| --- | --- | --- | --- |
| 首页/长攻略 | 导航后、Hero 或全文布局前 | 728×90，容器窄时 468×60 | 320×50 |
| 首页 | 主要任务入口后 | Native | Native |
| 首页 | 完整专题组之间 | 728×90 或 468×60 | 300×250 |
| 首页 | 目录旁独立窄栏 | 160×300 | 无 |
| 首页 | 目录结束、近期更新前 | 468×60 | 320×50 |
| 长攻略 | 第一段完整答案章节后 | Native | 短答案与折叠导航后、插图/长正文前 |
| 长攻略 | 完整章节之间 | 容器足够时 728×90，否则 468×60 | 320×50 |
| 长攻略 | 正文结束、FAQ 前 | 468×60 | 320×50 |
| 长攻略 | 侧栏导航/目录之后 | 按布局明确选 160×300 或 160×600 | 无 |
| 页面页脚 | 独立 Sponsored Link | Smartlink | Smartlink |

桌面全站不使用 300×250；攻略正文两端都不使用；手机首页专题间可以用。Social Bar 不加，Popunder 不属于此空间布局合同。Smartlink 不替换攻略、下载、工具按钮或正常内链。短页、目录与工具页按任务结构决定适用位置，不机械补齐长页全部位置。Trust 页仍为朴素无展示广告布局。

批准的 How to Fish / Fell & Sell 案例：首页桌面五处展示位与一条 Smartlink，手机四处展示位与一条 Smartlink；长攻略同数量。数量是样例布局结果，不是所有页面强制配额。

## 机器清单

`ad-placement-manifest.json` 是目标站的真实需求，不是全部格式能力列表：

```json
{
  "schema": "adsterra-placement-inventory-v1",
  "layout_version": "v4-horizontal-2026-10-02",
  "adUnits": [
    { "key": "top-desktop", "type": "Banner", "size": "728x90" },
    { "key": "top-mobile", "type": "Banner", "size": "320x50" }
  ],
  "slots": [
    { "id": "page-top", "page_kind": "all", "desktop": ["top-desktop"], "mobile": ["top-mobile"] }
  ]
}
```

- `page_kind` 为 all/home/guide/hub/workspace，all 表示可跨页面家族复用的位置；Trust 页不放横幅或 Native，独立 Sponsored Link 沿用现有全站页脚能力。每个设备数组为按容器宽度选择的候选；只挂载第一个能容纳的单元，容器太窄则不加载，不缩放创意。
- 同页并存的位置不得共享横幅平台代码；代码绑定 key 不能只用格式名。不同页面家族且不会同页出现的位置可共用清单 key 和平台单元，例如首页/攻略 Native，或首页专题间/攻略章节间的同尺寸横幅；不按每条 URL 创建单元。桌面/手机变体不能仅靠 CSS 隐藏已经执行的脚本。
- `src/data/ads.ts` 的 units 恰好匹配清单的 adUnits keys。Page Builder 交付时全空；Integrator 全部需求绑定后才完成。缺失是明确 blocker，不能复制旧代码凑数。
- 模板根清单展示可用位置与尺寸候选。Page Builder 根据本站装配方案重写清单和空代码配置，只保留实际位置；不使用的位置/尺寸不交给 Adsterra Integrator 申请代码。
- 旧站缺少清单时继续旧六键兼容，不自动迁移所有 enabled 站。迁移需指定目标和批准的新布局。

Page Builder 的 `page-assembly.md` 先记下每个位置的页面家族、桌面/手机锚点和尺寸，建站时写入清单。首页位置只可分配给 home 页面；其他位置按 guide/hub/workspace 等实际页面家族声明，清单位置须匹配。若站点另用结构化 Page Assembly，可将相同决定保存为 `ad_inventory` 与各 layout 的 `ad_placements`：

```json
[
  {
    "slot_id": "page-top",
    "desktop": { "anchor": "$header", "edge": "after" },
    "mobile": { "anchor": "$header", "edge": "after" }
  }
]
```

锚点可用真实 region id、`module:<已存在章节id>`、`$header`、`$footer`；edge 为 before/after/inside。不同设备 Native 可以绑定不同锚点。标记真实 DOM `data-ad-anchor="<anchor>"`；`data-v4-region` 和章节 id 也可供结构检查使用。不伪造隐藏锚点。

`AdModuleSequence` 的 `anchors` 使用 `{ after: "chapter-id", slot: "guide-section-break" }`，可加 device；缺失完整章节会明确报错。现成页面壳保留基础能力，实际 V4 站点本地组合必须实现所有批准位置，不硬猜第二模块/中点。

## 验收边界

Page Builder 对本站的实际清单执行 `validateAdInventory` 等位置、尺寸与空代码检查，并从最终构建产物查看桌面和手机占位预览。空配置生产页面不发广告请求、不保留虚假广告空白。上线 Builder 核对这些位置和清单随部署保留。

广告清单与组件检查须覆盖 slot/key/device/size、设备互斥、容器宽度规则和章节锚点。平台创建与取码保持浏览器串行、精确域名搜索、已有登录会话与明确失败边界。统计查询仍可用 API。

本地布局、代码绑定/推送、线上广告请求、实际收益分别需要证据；enabled 只表示真实代码已按需求绑定、相关本地检查通过并推送，不表示线上收益已经改善。
