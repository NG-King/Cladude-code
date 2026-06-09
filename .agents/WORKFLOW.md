# Commercial Space Design Workflow Engine

## Architecture

```
                 ┌──────────────┐
                 │  User Input  │
                 └──────┬───────┘
                        ↓
              ┌──────────────────┐
              │  Planner Agent   │  → 拆解任務、定義依賴
              └──────────────────┘
                        ↓
              ┌──────────────────┐
              │  Router Agent    │  → 選 agents、決定執行模式
              └──────────────────┘
                        ↓
        ┌──────────────┬──────────────┐
        ↓              ↓              ↓
 Space Designer   VM Designer   Brand Strategist   ← Parallel Group 1
        ↓              ↓              ↓
        └──────────────┴──────────────┘
                        ↓
              ┌─────────┴─────────┐
              ↓                   ↓
      Cost Estimator      Project Manager          ← Parallel Group 2
              ↓                   ↓
              └─────────┬─────────┘
                        ↓
              ┌──────────────────┐
              │  Merger Agent    │  → 整合成可提案文件
              └──────────────────┘
                        ↓
               ┌────────────────┐
               │ Final Proposal │
               └────────────────┘
```

---

## Workflow Rules

### 1. Parallel Rule
如果 tasks 不互相依賴 → 同時執行（節省時間）

### 2. Sequential Rule
如果有依賴關係 → 排序執行
- Cost Estimator 依賴 Space Designer 的分區與展示結構
- Project Manager 依賴 Cost Estimator 的工項清單

### 3. Merge Rule
所有 agent outputs 必須進 Merger，由 Merger 統一格式輸出

---

## Agents

| Agent | 類型 | 職責 |
|-------|------|------|
| Planner | 系統 | 需求拆解、任務規劃 |
| Router | 系統 | Agent 路由、執行模式決策 |
| Space Designer | 設計 | 空間配置、動線、展示結構 |
| VM Designer | 設計 | 視覺陳列、焦點分布、打卡點 |
| Brand Strategist | 策略 | 品牌→情緒→空間轉譯 |
| Cost Estimator | 技術 | 工項拆解、預算分級 |
| CAD Reviewer | 技術 | 施工圖審查、問題分級 |
| Project Manager | 技術 | 工期規劃、風險控制 |
| Material Consultant | 技術 | 材質建議、替代方案 |
| Merger | 系統 | 整合所有輸出成提案文件 |

---

## Example Flow

**Input:** 「SK-II 快閃店，位於信義百貨，約15坪，預算100萬，6週後開幕」

**Planner output:**
- Project Type: 快閃店
- Required Agents: Brand Strategist, Space Designer, VM Designer, Cost Estimator, Project Manager, Material Consultant

**Router output:**
- Parallel Group 1: Brand Strategist + Space Designer + VM Designer
- Parallel Group 2: Cost Estimator + Project Manager + Material Consultant
- Final: Merger

**Final output:** 完整 8 區塊提案文件
