# Pixel Soul Portfolio

一個以 Undertale 為靈感的像素風個人網站專案，使用 Vue 3、TypeScript 與 Vite 製作。整體設計結合星空背景、缺角雙線對話框、像素角色與圖示、像素字體與遊戲式導覽，將個人介紹、技能、作品集與合作資訊包裝成一場可互動的冒險。

線上展示：<https://demo.adevic.dev/demo/pixels-1/>

## Demo Preview

- Undertale / retro pixel art 視覺風格
- 單頁式互動作品集
- 遊戲化導覽體驗
- 響應式版面設計
- 注重可用性：跳到主內容連結、焦點外框、鍵盤可操作、支援減少動態偏好
- 適合作為個人品牌網站或前端作品集起點

## Tech Stack

- Vue 3
- TypeScript
- Vite
- VueUse Head
- Pinia
- Axios
- GSAP
- Sass

## Project Structure

```text
/
├── AGENTS.md
├── README.md
└── frontend/
    ├── AGENTS.md
    ├── index.html
    ├── package.json
    ├── vite.config.ts
    ├── public/
    └── src/
        ├── App.vue
        ├── style.css
        └── components/
            ├── PixelIcon.vue    # 8×8 點陣圖示（愛心、劍、盾等）
            └── PixelSprite.vue  # 依調色盤逐格繪製的像素精靈圖
```

目前主要實作集中在 `frontend/`，是一個公開展示用的前端網站子專案。

## Features

網站為單頁式，以頂部導覽切換五個區塊：

- **首頁**：像素角色與 RPG 數值卡，附接案狀態與兩個行動按鈕
- **關於**：自我介紹、基本資料，以及 2023 至 2026 的「冒險日誌」時間軸
- **技能**：以區段式 HP 條呈現五項技術，並列出「道具欄」常用工具
- **作品**：六件作品卡片，標示年份、狀態、說明與技術標籤
- **聯絡**：Email 與 GitHub 入口、三步合作流程與常見問題（FAQ）

視覺與體驗細節：

- 自繪像素角色與 8×8 像素圖示，不使用 emoji
- 缺角雙線邊框、閃爍游標、星空背景與復古配色
- 動畫僅使用 `transform` 與 `opacity`，並提供 `prefers-reduced-motion` 降級
- 內建語意標記與 ARIA 屬性（`aria-current`、進度條）

> 目前頁面中的姓名、經歷、作品與時程皆為示範用假資料。

## Frontend Stack Details

`frontend/` 使用以下技術組合：

- Vue 3 Composition API
- `<script setup lang="ts">`
- TypeScript strict mode
- Vite 作為開發與建置工具，`base` 設為 `/demo/pixels-1/` 以對應部署子路徑
- `@vueuse/head` 處理頁面 SEO 資訊
- 預留 `Pinia`、`Axios`、`GSAP` 作為後續擴充狀態管理、資料請求與動畫能力

## Getting Started

請在 `frontend/` 目錄內執行指令：

```bash
cd frontend
npm install
npm run dev
```

開發完成後可使用以下指令建置與預覽：

```bash
npm run build
npm run preview
```

## Available Scripts

在 `frontend/` 目錄中可使用：

```bash
npm run dev       # 開發伺服器
npm run build     # 型別檢查（vue-tsc）並建置至 dist/
npm run preview   # 預覽建置結果
```

## Deployment

建置後將 `frontend/dist/` 的全部內容上傳至伺服器對應 `/demo/pixels-1/` 的目錄即可。本站為單頁應用，頁面切換不變更網址，因此不需要額外的路由重寫設定。若要部署到其他路徑，請修改 `frontend/vite.config.ts` 的 `base`。

## Design Direction

這個專案的核心目標不是做一個制式作品集，而是把個人網站做成具有世界觀的互動頁面。畫面風格參考 Undertale 的黑底、高對比色彩、像素邊框與遊戲選單語言，讓網站在展示資訊之外，也保留鮮明的角色感。

## Notes

- 目前聯絡資訊中的 Email 與 GitHub 連結仍為 placeholder，可依你的實際資料替換
- 站上內容資料集中在 `frontend/src/App.vue` 的 `skills`、`facts`、`timeline`、`projects`、`steps`、`faqs` 陣列，替換即可
- 專案名稱可以依你的品牌名稱再調整
- 若後續加入路由、API 串接或動畫，README 可以再擴充部署與功能說明

## License

This project is for personal portfolio and learning purposes.
