# Pixel Soul Portfolio

一個以 Undertale 為靈感的像素風個人網站專案，使用 Vue 3、TypeScript 與 Vite 製作。整體設計結合星空背景、復古 UI、像素字體與遊戲式導覽，將個人介紹、技能、作品集與聯絡資訊包裝成一場可互動的冒險。

## Demo Preview

- Undertale / retro pixel art 視覺風格
- 單頁式互動作品集
- 遊戲化導覽體驗
- 響應式版面設計
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
    ├── package.json
    ├── public/
    └── src/
```

目前主要實作集中在 `frontend/`，是一個公開展示用的前端網站子專案。

## Features

- 首頁 Hero 區塊，使用像素角色卡與 RPG 數值呈現個人定位
- 關於我區塊，以像素角色頭像與敘事文案建立主題風格
- 技能區塊，以遊戲數值條方式展示技術能力
- 作品集區塊，以卡片方式展示作品概念
- 聯絡區塊，提供 Email 與 GitHub 入口
- 星空閃爍、掃描線與復古配色，營造遊戲畫面氛圍

## Frontend Stack Details

`frontend/` 使用以下技術組合：

- Vue 3 Composition API
- `<script setup lang="ts">`
- TypeScript strict mode
- Vite 作為開發與建置工具
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
npm run dev
npm run build
npm run preview
```

## Design Direction

這個專案的核心目標不是做一個制式作品集，而是把個人網站做成具有世界觀的互動頁面。畫面風格參考 Undertale 的黑底、高對比色彩、像素邊框與遊戲選單語言，讓網站在展示資訊之外，也保留鮮明的角色感。

## Notes

- 目前聯絡資訊中的 Email 與 GitHub 連結仍為 placeholder，可依你的實際資料替換
- 專案名稱可以依你的品牌名稱再調整
- 若後續加入路由、API 串接或動畫，README 可以再擴充部署與功能說明

## License

This project is for personal portfolio and learning purposes.
