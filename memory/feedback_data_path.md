---
name: feedback-data-path
description: All new code written for this project should use F:\AI資料 as the default data path
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 8ba2bffc-d1e6-4e48-bb46-636f5e8cbef8
---

所有新建的程式碼都使用 `F:\AI資料` 作為資料路徑。

**Why:** 使用者明確指定此為專案的資料根目錄。

**How to apply:** 任何涉及檔案讀寫、資料載入、輸出儲存的程式碼，預設路徑一律使用 `F:\AI資料` 或其子目錄。
