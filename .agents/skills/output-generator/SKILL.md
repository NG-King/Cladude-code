---
name: output-generator
description: Output Generator Layer。將 Merger 的三層文件輸出為不同格式：Proposal（提案文件）、JSON（系統資料）、Docs（協作文件）。對應 Notion、Google Drive、Excel、Slack 等外部工具。
---

# Output Generator

## Role
將 Merger 輸出轉換為指定格式與平台

## Input
Merger 的三層輸出（Executive Summary / Design System / Execution Plan）

## Output Formats

| Format | 用途 | 目標工具 |
|--------|------|---------|
| Proposal Doc | 給客戶的提案 PDF/頁面 | Notion / Google Docs |
| JSON Export | 系統資料交換 | API / 資料庫 |
| Cost Sheet | 報價用試算表 | Excel / Google Sheets |
| Timeline | 工期甘特圖 | Notion / Excel |
| Moodboard Brief | 給圖像 AI 的 prompt | Midjourney / DALL-E |
| Alert Summary | 風險通知 | Slack / Email |

## Core Logic
1. 接收 Merger output
2. 依目標格式轉換結構
3. 輸出可直接使用的內容

## Moodboard Brief Template（給圖像 AI）

```
Brand: [brand name]
Style: [design keywords]
Space Type: [popup / department / exhibition]
Palette: [colors]
Mood: [emotional keywords]
Reference: [visual reference direction]
Format: brand-kit overview, 3×3 grid, dark canvas, cinematic
```

## Constraints
不修改設計內容 / 只做格式轉換

## Keywords (Routing用)
輸出 / export / 文件 / proposal / 格式 / notion / excel
