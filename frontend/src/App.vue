<script setup lang="ts">
import { computed, ref } from 'vue'
import { useHead } from '@vueuse/head'
import PixelIcon from './components/PixelIcon.vue'
import type { PixelIconKey } from './components/PixelIcon.vue'
import PixelSprite from './components/PixelSprite.vue'

type PageKey = 'home' | 'about' | 'skills' | 'projects' | 'contact'

interface Skill {
  name: string
  level: number
  note: string
  colorClass: string
}

interface ProjectCard {
  icon: PixelIconKey
  title: string
  year: string
  status: string
  description: string
  stack: string[]
}

interface Star {
  left: string
  top: string
  size: string
  color: string
  duration: string
  delay: string
}

interface NavigationItem {
  key: PageKey
  label: string
}

interface TimelineEntry {
  period: string
  title: string
  detail: string
}

interface Faq {
  question: string
  answer: string
}

interface Step {
  title: string
  detail: string
}

const currentPage = ref<PageKey>('home')

const navigationItems: NavigationItem[] = [
  { key: 'home', label: '首頁' },
  { key: 'about', label: '關於' },
  { key: 'skills', label: '技能' },
  { key: 'projects', label: '作品' },
  { key: 'contact', label: '聯絡' },
]

const skills: Skill[] = [
  { name: 'HTML / CSS', level: 87, note: '版面、動畫、RWD，習慣手刻不靠套件', colorClass: 'is-red' },
  { name: 'Vue 3 / TypeScript', level: 79, note: '目前的主力，Composition API 寫得最順', colorClass: 'is-yellow' },
  { name: 'JavaScript', level: 76, note: '互動邏輯與瀏覽器 API', colorClass: 'is-green' },
  { name: 'React', level: 63, note: '能維護既有專案，新專案會先評估是否需要', colorClass: 'is-cyan' },
  { name: 'Node.js', level: 57, note: '小型 API 與建置腳本', colorClass: 'is-red' },
]

const inventory: string[] = ['VS Code', 'Figma', 'Git', 'Vite', 'GSAP', 'Aseprite']

const facts: { label: string; value: string }[] = [
  { label: '所在地', value: '台灣' },
  { label: '年資', value: '前端 3 年 6 個月' },
  { label: '專長', value: '互動介面與動畫' },
  { label: '最愛遊戲', value: 'Undertale、Celeste' },
]

const timeline: TimelineEntry[] = [
  {
    period: '2023',
    title: '第一份前端工作',
    detail: '在一間小型工作室負責活動頁與官網，第一次把設計稿完整做成上線的網站。',
  },
  {
    period: '2024',
    title: '改用 Vue 3 與 TypeScript',
    detail: '把舊專案從 jQuery 拆成元件，順便學會為什麼型別能少掉一半的除錯時間。',
  },
  {
    period: '2025',
    title: '開始做自己的小專案',
    detail: '用下班時間做像素風小工具，並開始把過程寫成筆記。',
  },
  {
    period: '2026',
    title: '接案與作品整理',
    detail: '把作品集重做一次，也開始接受小型網站與互動頁面的委託。',
  },
]

const projects: ProjectCard[] = [
  {
    icon: 'sword',
    title: '回合制戰鬥原型',
    year: '2026',
    status: '可試玩',
    description: '仿經典 RPG 的選單與回合流程，攻擊判定用計時按鍵，不是單純點選。',
    stack: ['Vue 3', 'TypeScript', 'GSAP'],
  },
  {
    icon: 'note',
    title: '像素音樂播放器',
    year: '2025',
    status: '已完成',
    description: '以 Web Audio 取得頻譜，用 8 × 8 的方塊畫出跳動的聲音。',
    stack: ['JavaScript', 'Web Audio', 'Canvas'],
  },
  {
    icon: 'phone',
    title: '像素記帳 App 介面',
    year: '2025',
    status: '設計稿',
    description: '手機端的記帳介面設計，每筆花費對應一個小圖示，月底會長成一張像素地圖。',
    stack: ['Figma', 'Aseprite'],
  },
  {
    icon: 'chart',
    title: '開發日誌儀表板',
    year: '2025',
    status: '維護中',
    description: '把 Git 提交紀錄整理成每週圖表，用來檢視自己什麼時候最有產出。',
    stack: ['React', 'Node.js', 'SQLite'],
  },
  {
    icon: 'book',
    title: '像素筆記',
    year: '2026',
    status: '撰寫中',
    description: '記錄做像素介面時踩過的坑，例如字體縮放、邊框對齊與無障礙。',
    stack: ['Vue 3', 'Markdown'],
  },
  {
    icon: 'window',
    title: '個人網站',
    year: '2026',
    status: '你正在看',
    description: '這個網站。以 Undertale 的對話框與選單為靈感，並維持可讀與可用。',
    stack: ['Vue 3', 'vite-ssg', 'CSS'],
  },
]

const steps: Step[] = [
  { title: '先聊需求', detail: '用一封信或一次視訊釐清目標、時程與預算，通常一至兩天內回覆。' },
  { title: '做出原型', detail: '一週內提供可操作的畫面，確認方向後再細修。' },
  { title: '上線與交接', detail: '部署完成後附上簡短的維護說明，一個月內的小問題免費處理。' },
]

const faqs: Faq[] = [
  {
    question: '你接哪些類型的案子？',
    answer: '企業或個人的形象網站、活動頁、互動式展示頁。大型後台系統我會建議找更合適的團隊。',
  },
  {
    question: '一個頁面大約要多久？',
    answer: '單頁網站通常 1 至 2 週，多頁網站約 3 至 5 週，實際時間依內容是否齊備而定。',
  },
  {
    question: '可以只做像素風格嗎？',
    answer: '可以，但我會先確認風格是否符合你的受眾。不適合的話，我會直接說明並提出替代方案。',
  },
  {
    question: '怎麼報價？',
    answer: '依頁數與互動複雜度估價，確認需求後會提供書面報價，不收取額外的隱藏費用。',
  },
]

const starPalette = ['#ffffff', '#aaaaaa', '#666666', '#ffff00']

const stars: Star[] = Array.from({ length: 48 }, (_, index) => ({
  left: `${(index * 17) % 100}%`,
  top: `${(index * 29) % 100}%`,
  size: `${index % 5 === 0 || index % 7 === 0 ? 3 : 2}px`,
  color: starPalette[index % starPalette.length],
  duration: `${3 + (index % 5)}s`,
  delay: `${(index % 4) * 0.45}s`,
}))

const spriteRows: string[] = [
  '................',
  '....oooooooo....',
  '...ohhhhhhhho...',
  '..ohhhhhhhhhho..',
  '..ohhhhhhhhhho..',
  '..ohhsssssshho..',
  '..ohsessssesho..',
  '..ohssssssssho..',
  '...osssmmssso...',
  '....osssssso....',
  '......osso......',
  '..oppppppppppo..',
  '.opdpqqqqqqpdpo.',
  '.opdppppppppdpo.',
  '.opdpqqqqqqpdpo.',
  '.osdppppppppdso.',
  '..ooodddddddooo.',
  '....oPPooPPo....',
  '....oPPooPPo....',
  '....oPPooPPo....',
  '....oPPooPPo....',
  '...okkkookkko...',
  '...oooooooooo...',
  '................',
]

const avatarRows: string[] = spriteRows.slice(1, 11)

const spritePalette: Record<string, string> = {
  o: '#120e1f',
  h: '#6b3f1d',
  s: '#ffd9b0',
  e: '#120e1f',
  m: '#c0504d',
  p: '#4a4ae0',
  q: '#8c8cff',
  d: '#2a2a99',
  P: '#2b2b3d',
  k: '#5a3a1a',
}

const isPageVisible = (page: PageKey): boolean => currentPage.value === page

const contactGithubHref = computed<string>(() => 'https://github.com')

const switchPage = (page: PageKey): void => {
  currentPage.value = page

  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

useHead({
  title: '旅行者｜前端開發者作品集',
  meta: [
    {
      name: 'description',
      content: '前端開發者的像素風作品集：個人介紹、技能、六件作品、合作流程與常見問題。',
    },
    { property: 'og:title', content: '旅行者｜前端開發者作品集' },
    {
      property: 'og:description',
      content: '以 Undertale 為靈感的像素風個人網站，收錄作品與合作方式。',
    },
    {
      property: 'og:image',
      content: 'https://dummyimage.com/1200x630/0a0a0f/ffff00&text=Traveler+Portfolio',
    },
  ],
})
</script>

<template>
  <div class="portfolio-shell">
    <a class="skip-link" href="#main">跳到主要內容</a>

    <div class="starfield" aria-hidden="true">
      <span
        v-for="(star, index) in stars"
        :key="index"
        class="starfield__star"
        :style="{
          left: star.left,
          top: star.top,
          width: star.size,
          height: star.size,
          backgroundColor: star.color,
          animationDuration: star.duration,
          animationDelay: star.delay,
        }"
      />
    </div>

    <div class="portfolio-shell__content">
      <nav class="top-nav" aria-label="主要導覽">
        <button
          v-for="item in navigationItems"
          :key="item.key"
          type="button"
          class="top-nav__item"
          :class="{ 'is-active': currentPage === item.key }"
          :aria-current="currentPage === item.key ? 'page' : undefined"
          @click="switchPage(item.key)"
        >
          <PixelIcon class="top-nav__heart" icon="heart" />
          <span>{{ item.label }}</span>
        </button>
      </nav>

      <main id="main" class="page-stack">
        <section v-show="isPageVisible('home')" class="page-section page-section--hero">
          <div class="hero-grid">
            <div class="hero-grid__portrait">
              <div class="pixel-frame pixel-frame--yellow pixel-frame--portrait">
                <PixelSprite class="pixel-character" :rows="spriteRows" :palette="spritePalette" label="像素風角色頭像" />
              </div>
              <p class="hero-grid__level">LV 23 ・ EXP 4,812</p>
            </div>

            <div class="pixel-frame pixel-frame--yellow hero-card">
              <h1 class="hero-card__name">旅行者</h1>
              <p class="hero-card__title">前端開發者｜Vue 與互動介面</p>

              <div class="hero-card__stats">
                <p><PixelIcon icon="heart" class="stat-icon stat-icon--red" /> HP: 87 / 100</p>
                <p><PixelIcon icon="sword" class="stat-icon stat-icon--red" /> ATK: <span class="hero-card__accent">把設計稿做成能用的網站</span></p>
                <p><PixelIcon icon="shield" class="stat-icon stat-icon--green" /> DEF: <span class="hero-card__support">除錯與無障礙檢查</span></p>
              </div>

              <div class="hero-card__bio">
                <p>* 我做網站三年多，現在主要用 Vue 3 和 TypeScript。</p>
                <p>* 喜歡把遊戲裡的小細節搬進網頁，但前提是好讀、好用。</p>
                <p class="hero-card__prompt">* 目前接案中，12 月起可排新案。<span class="blink-cursor" aria-hidden="true"></span></p>
              </div>

              <div class="hero-card__actions">
                <button type="button" class="pixel-button" @click="switchPage('projects')">
                  查看六件作品 →
                </button>
                <button type="button" class="pixel-button pixel-button--quiet" @click="switchPage('contact')">
                  寄信討論案子
                </button>
              </div>
            </div>
          </div>
        </section>

        <section v-show="isPageVisible('about')" class="page-section">
          <h2 class="section-title section-title--yellow">─ 關於我 ─</h2>
          <div class="pixel-frame pixel-frame--yellow info-card">
            <div class="info-card__layout">
              <div class="info-card__avatar">
                <PixelSprite class="info-card__avatar-art" :rows="avatarRows" :palette="spritePalette" label="像素頭像" />
              </div>

              <div class="info-card__body">
                <p class="info-card__text">
                  我是一名前端開發者，習慣從畫面最小的細節開始做起：按鈕按下去的回饋、文字換行的位置、鍵盤能不能走完整個流程。
                </p>
                <p class="info-card__text">
                  Undertale 讓我印象最深的是它用很簡單的像素，就讓人記住每個角色。我想在網站上做到同樣的事：視覺不必複雜，但每個選擇都要有理由。
                </p>
              </div>
            </div>

            <dl class="facts">
              <div v-for="fact in facts" :key="fact.label" class="facts__row">
                <dt>{{ fact.label }}</dt>
                <dd>{{ fact.value }}</dd>
              </div>
            </dl>
          </div>

          <h3 class="subsection-title">冒險日誌</h3>
          <ol class="timeline">
            <li v-for="entry in timeline" :key="entry.period" class="pixel-frame pixel-frame--yellow timeline__item">
              <p class="timeline__period">{{ entry.period }}</p>
              <h4 class="timeline__title">{{ entry.title }}</h4>
              <p class="timeline__detail">{{ entry.detail }}</p>
            </li>
          </ol>
        </section>

        <section v-show="isPageVisible('skills')" class="page-section">
          <h2 class="section-title section-title--green">─ 技能 ─</h2>
          <div class="pixel-frame pixel-frame--green skills-card">
            <p class="skills-card__headline"><PixelIcon icon="note" class="stat-icon" /> STATS</p>

            <div class="skills-list">
              <article v-for="skill in skills" :key="skill.name" class="skills-list__item">
                <div class="skills-list__label-row">
                  <span class="skills-list__name" :class="skill.colorClass">{{ skill.name }}</span>
                  <span class="skills-list__level">LV {{ skill.level }}</span>
                </div>

                <div
                  class="skills-list__track"
                  role="progressbar"
                  :aria-label="skill.name"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  :aria-valuenow="skill.level"
                >
                  <div
                    class="skills-list__fill"
                    :class="skill.colorClass"
                    :style="{ width: `${skill.level}%` }"
                  ></div>
                </div>
                <p class="skills-list__note">{{ skill.note }}</p>
              </article>
            </div>
          </div>

          <h3 class="subsection-title">道具欄</h3>
          <ul class="inventory">
            <li v-for="item in inventory" :key="item" class="inventory__item">{{ item }}</li>
          </ul>
        </section>

        <section v-show="isPageVisible('projects')" class="page-section">
          <h2 class="section-title section-title--cyan">─ 作品集 ─</h2>
          <div class="project-grid">
            <article
              v-for="project in projects"
              :key="project.title"
              class="pixel-frame pixel-frame--cyan project-card"
            >
              <PixelIcon class="project-card__icon" :icon="project.icon" />
              <div class="project-card__meta">
                <span>{{ project.year }}</span>
                <span>{{ project.status }}</span>
              </div>
              <h3 class="project-card__title">{{ project.title }}</h3>
              <p class="project-card__description">{{ project.description }}</p>
              <ul class="project-card__stack">
                <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
              </ul>
            </article>
          </div>
        </section>

        <section v-show="isPageVisible('contact')" class="page-section">
          <h2 class="section-title section-title--orange">─ 聯絡我 ─</h2>
          <div class="pixel-frame pixel-frame--orange contact-card">
            <p class="contact-card__intro">
              * 有網站或互動頁面的想法嗎？<br />
              * 寄信告訴我目標與時程，我會在兩個工作天內回覆。
            </p>

            <div class="contact-card__actions">
              <a class="pixel-button pixel-button--orange" href="mailto:hello@example.com">
                <PixelIcon icon="mail" class="stat-icon" />
                <span>hello@example.com</span>
              </a>
              <a
                class="pixel-button pixel-button--orange"
                :href="contactGithubHref"
                target="_blank"
                rel="noreferrer"
              >
                <PixelIcon icon="prompt" class="stat-icon" />
                <span>github.com/you</span>
              </a>
            </div>
          </div>

          <h3 class="subsection-title">合作流程</h3>
          <ol class="steps">
            <li v-for="(step, index) in steps" :key="step.title" class="pixel-frame pixel-frame--orange steps__item">
              <p class="steps__index">0{{ index + 1 }}</p>
              <h4 class="steps__title">{{ step.title }}</h4>
              <p class="steps__detail">{{ step.detail }}</p>
            </li>
          </ol>

          <h3 class="subsection-title">常見問題</h3>
          <div class="faq">
            <details v-for="faq in faqs" :key="faq.question" class="faq__item">
              <summary>{{ faq.question }}</summary>
              <p>{{ faq.answer }}</p>
            </details>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <p>用 Vue 3 與一點決心製作</p>
        <p>SAVE POINT ・ 2026</p>
      </footer>
    </div>
  </div>
</template>
