# Commercial Space Design Agent System v2

## Architecture Overview

```
                 ┌────────────────────┐
                 │     USER INPUT     │
                 └─────────┬──────────┘
                           ↓
                ┌────────────────────┐
                │  Planner Agent     │  → Task Graph (nodes + edges)
                └─────────┬──────────┘
                           ↓
                ┌────────────────────┐
                │  Router Agent      │  → parallel_groups + sequential_chain
                └─────────┬──────────┘
                           ↓
        ┌──────────────────┼──────────────────┐
        ↓                  ↓                  ↓
 Space / VM / Brand   Cost / Material   Project Manager
 (Parallel Group 1)  (Parallel Group 2) (Sequential)
        ↓                  ↓                  ↓
        └──────────────┬──────────────────────┘
                       ↓
            ┌────────────────────┐
            │   Merger Agent     │  → 3-layer document
            └─────────┬──────────┘
                      ↓
        ┌────────────────────────────┐
        │  Output Generator Layer   │  → Proposal / JSON / Docs
        └─────────┬──────────────────┘
                  ↓
        ┌────────────────────────────┐
        │  Memory + Logging Layer    │  → Project / Client / System Memory
        └────────────────────────────┘
```

---

## Four Layers

### 1. Intelligence Layer（AI Agents）
| Agent | 類型 | 職責 |
|-------|------|------|
| planner | 系統 | 需求→Task Graph |
| router | 系統 | Task Graph→調度計劃 |
| brand-strategist | 設計 | 品牌→情緒→空間 |
| space-designer | 設計 | 空間配置、動線 |
| vm-designer | 設計 | 視覺陳列、焦點 |
| cost-estimator | 技術 | 工項拆解、預算 |
| material-consultant | 技術 | 材質建議 |
| project-manager | 技術 | 工期、風險 |
| cad-reviewer | 技術 | 施工圖審查 |
| merger | 系統 | 整合→三層文件 |
| output-generator | 系統 | 格式轉換輸出 |

### 2. Orchestration Layer（Workflow Engine）
- **Parallel Rule**: 無依賴關係的 tasks 同時執行
- **Sequential Rule**: 有依賴關係的 tasks 排序執行
- **Merge Rule**: 所有 outputs 必須進 Merger

### 3. Memory Layer（Project Context）
| 記憶類型 | 範圍 | 儲存位置 |
|----------|------|----------|
| Project Memory | 單案 | `.agents/memory/project-memory.schema.json` |
| Client Memory | 客戶 | `.agents/memory/client-memory.schema.json` |
| System Memory | 全局 | `.agents/memory/system-memory.schema.json` |

### 4. Tool Layer（外部系統）
| 工具 | 用途 |
|------|------|
| Notion | 提案文件、專案管理 |
| Google Drive | 檔案儲存 |
| Google Sheets | 成本試算表 |
| Slack / Email | 風險通知 |
| Midjourney / DALL-E | Moodboard 生成 |

---

## Data Flow

```
Input → Planner (Task Graph JSON)
      → Router (Schedule JSON)
      → Agents (Output Schema JSON)
      → Merger (3-layer Doc JSON)
      → Output Generator (Format)
      → Memory Layer (Log)
```

---

## Agent Output Schemas

所有 agents 輸出標準化 JSON，見 `.agents/schemas/agent-output.schema.json`

---

## Example: SK-II 快閃店

**Input:** SK-II 快閃店，信義百貨，15坪，預算100萬，6週後開幕

**Task Graph:**
```json
{
  "nodes": ["brand_analysis", "space_design", "vm_design", "cost_estimation", "material_selection", "project_schedule"],
  "edges": [
    ["brand_analysis", "space_design"],
    ["space_design", "vm_design"],
    ["space_design", "cost_estimation"],
    ["space_design", "material_selection"],
    ["cost_estimation", "project_schedule"]
  ]
}
```

**Execution:**
- Group 1: brand-strategist
- Group 2: space-designer
- Group 3 (parallel): vm-designer + cost-estimator + material-consultant
- Group 4: project-manager
- Final: merger → output-generator
