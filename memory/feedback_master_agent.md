---
name: feedback-master-agent
description: 何時應派生 Master Agent（子代理）來處理任務
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 094f117e-7d07-4951-a6ad-0afa29cf0f7b
---

除了一般提問或簡單爬文回答之外，凡涉及以下情況都應主動調用 Master Agent（Agent tool 派生子代理）：

- 深度分析（商業分析、資料分析、競品研究等）
- 創意生成（企劃、文案、報告撰寫等）
- 大量代碼編輯或生成
- 多步驟複雜任務
- 需要產出文件（PDF、DOCX、XLSX 等）

**Why:** 保護主 context 不被大量內容佔滿，讓主 Agent 保持流暢；子代理可獨立執行並回報結果。

**How to apply:** 收到任務後先判斷是否屬於上述類別，是則直接派生子代理並給予完整自包含的 prompt，不需詢問用戶確認。
