---
name: feedback-memory-sync
description: 記憶檔案的正式存放位置與雲端同步規則
metadata:
  node_type: memory
  type: feedback
  originSessionId: 41d5ae26-b3e1-4923-9112-f32fb4cb68dd
---

使用者的 md 記憶正式存放於 `F:\AI資料\claude-memory\`,而非 Claude Code 預設的 `.claude\projects\...\memory\`。此資料夾透過 `F:\AI資料\sync.bat`(呼叫 `F:\AI資料\cladude-code\sync.ps1`)與 GitHub repo `github.com/ng-king/cladude-code`(路徑 `cladude-code\memory\`)雙向同步。

**Why:** 使用者要記憶永久保存在 GitHub 雲端、跨裝置/跨對話一致,並自行掌控來源。

**How to apply:** 任何新增或修改記憶時,(1) 寫入 `F:\AI資料\claude-memory\` 並更新該處 MEMORY.md 索引;(2) 同步複製到 `F:\AI資料\cladude-code\memory\`;(3) git add/commit/push 推送到 GitHub 雲端。「雲端記憶」與「本地記憶」兩邊都必須保持一致。
