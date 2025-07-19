# votejava_frontend
Vue 3 + Vite 投票前端練習系統。本專案採用 SPA（Single Page Application）架構，並使用 Vue Router 進行前端路由管理。

## 主要功能
- [x] 顯示所有投票項目與累積票數
- [x] 對投票項目進行投票
- [x] 管理投票項

## 專案目錄結構
```
votejava_frontend/
  ├─ public/
  ├─ src/
  │   ├─ api/            # API 請求封裝
  │   ├─ assets/         # 靜態資源
  │   ├─ components/     # Vue 元件
  │   ├─ views/          # 頁面元件
  │   ├─ router/         # 路由設定
  │   ├─ App.vue         # 主元件
  │   ├─ main.js         # 入口
  │   └─ style.css       # 全域樣式
  ├─ index.html
  ├─ package.json
  ├─ vite.config.js
  └─ README.md
```

## 技術與依賴
- Vue 3
- Vite
- Vue Router
- Tailwind CSS
- Toastr（訊息提示）
- Axios（API 請求）

## 安全性說明
- **XSS 防護**：任何 api 參數皆使用 **Vue 模板語法**，不直接使用 v-html，可使 XSS 攻擊防護力增加。

## 安裝與啟動
1. 安裝 Node.js
2. 安裝專案依賴：
   ```bash
   npm install
   ```
3. 啟動開發伺服器：
   ```bash
   npm run dev
   ```

## API 介接
- 本專案預設串接後端 API，請先啟動後端服務（votejava_backend）。
- API 路徑與參數請參考 `/src/api/` 內的說明。