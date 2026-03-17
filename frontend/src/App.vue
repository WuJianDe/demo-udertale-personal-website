<script setup lang="ts">
import { computed, ref } from 'vue'
import { useHead } from '@vueuse/head'

type PageKey = 'home' | 'about' | 'skills' | 'projects' | 'contact'

interface Skill {
  name: string
  level: number
  colorClass: string
}

interface ProjectCard {
  icon: string
  title: string
  description: string
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

const currentPage = ref<PageKey>('home')

const navigationItems: NavigationItem[] = [
  { key: 'home', label: '首頁' },
  { key: 'about', label: '關於' },
  { key: 'skills', label: '技能' },
  { key: 'projects', label: '作品' },
  { key: 'contact', label: '聯絡' },
]

const skills: Skill[] = [
  { name: 'HTML / CSS', level: 85, colorClass: 'is-red' },
  { name: 'JavaScript', level: 78, colorClass: 'is-yellow' },
  { name: 'React', level: 70, colorClass: 'is-green' },
  { name: 'Node.js', level: 65, colorClass: 'is-cyan' },
]

const projects: ProjectCard[] = [
  {
    icon: '⚔',
    title: '戰鬥系統',
    description: '一個回合制戰鬥的互動原型，靈感來自經典 RPG。',
  },
  {
    icon: '♫',
    title: '音樂播放器',
    description: '復古像素風音樂播放介面，帶有視覺化效果。',
  },
  {
    icon: '▣',
    title: '像素 App',
    description: '用像素藝術風格設計的手機應用程式介面。',
  },
  {
    icon: '◈',
    title: '個人網站',
    description: '你正在看的這個！充滿決心的像素風格網站。',
  },
]

const starPalette = ['#ffffff', '#aaaaaa', '#666666', '#ffff00']

const stars: Star[] = Array.from({ length: 60 }, (_, index) => ({
  left: `${(index * 17) % 100}%`,
  top: `${(index * 29) % 100}%`,
  size: `${index % 5 === 0 || index % 7 === 0 ? 3 : 2}px`,
  color: starPalette[index % starPalette.length],
  duration: `${2 + (index % 5)}s`,
  delay: `${(index % 4) * 0.45}s`,
}))

const isPageVisible = (page: PageKey): boolean => currentPage.value === page

const contactGithubHref = computed<string>(() => 'https://github.com')

const switchPage = (page: PageKey): void => {
  currentPage.value = page

  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

useHead({
  title: 'Pixel Soul Portfolio',
  meta: [
    {
      name: 'description',
      content: 'Undertale 風格的像素作品集首頁，展示個人介紹、技能、作品與聯絡資訊。',
    },
    { property: 'og:title', content: 'Pixel Soul Portfolio' },
    {
      property: 'og:description',
      content: '充滿決心的像素風個人網站設計。',
    },
    {
      property: 'og:image',
      content: 'https://dummyimage.com/1200x630/0a0a0f/ffff00&text=Pixel+Soul+Portfolio',
    },
  ],
})
</script>

<template>
  <div class="portfolio-shell">
    <div class="scanline-overlay" aria-hidden="true"></div>

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
          @click="switchPage(item.key)"
        >
          <span class="top-nav__heart">❤</span>
          <span>{{ item.label }}</span>
        </button>
      </nav>

      <main class="page-stack">
        <section v-show="isPageVisible('home')" class="page-section page-section--hero">
          <div class="hero-grid">
            <div class="hero-grid__portrait">
              <div class="pixel-frame pixel-frame--yellow pixel-frame--portrait">
                <svg viewBox="0 0 32 48" class="pixel-character" aria-label="角色像素頭像">
                  <rect x="12" y="2" width="8" height="8" fill="#FFDAB9" />
                  <rect x="10" y="4" width="2" height="4" fill="#8B6914" />
                  <rect x="20" y="4" width="2" height="4" fill="#8B6914" />
                  <rect x="13" y="8" width="2" height="1" fill="#222222" />
                  <rect x="17" y="8" width="2" height="1" fill="#222222" />
                  <rect x="14" y="10" width="4" height="1" fill="#cc6666" />
                  <rect x="10" y="12" width="12" height="10" fill="#4444ff" />
                  <rect x="10" y="14" width="12" height="1" fill="#2222cc" />
                  <rect x="6" y="14" width="4" height="6" fill="#FFDAB9" />
                  <rect x="22" y="14" width="4" height="6" fill="#FFDAB9" />
                  <rect x="12" y="22" width="3" height="8" fill="#333333" />
                  <rect x="17" y="22" width="3" height="8" fill="#333333" />
                  <rect x="11" y="30" width="4" height="2" fill="#222222" />
                  <rect x="17" y="30" width="4" height="2" fill="#222222" />
                </svg>
              </div>
              <p class="hero-grid__level">LV 999 ★</p>
            </div>

            <div class="pixel-frame pixel-frame--yellow hero-card">
              <h1 class="hero-card__name">旅行者</h1>
              <p class="hero-card__title">前端開發者</p>

              <div class="hero-card__stats">
                <p>❤ HP: 999 / 999</p>
                <p>⚔ ATK: <span class="hero-card__accent">寫程式</span></p>
                <p>🛡 DEF: <span class="hero-card__support">除錯能力</span></p>
              </div>

              <div class="hero-card__bio">
                <p>* 嗨！歡迎來到我的世界。</p>
                <p>* 我是一位充滿決心的開發者。</p>
                <p class="hero-card__prompt">* 準備好冒險了嗎？</p>
              </div>

              <button type="button" class="pixel-button" @click="switchPage('about')">
                進行遊戲 →
              </button>
            </div>
          </div>
        </section>

        <section v-show="isPageVisible('about')" class="page-section">
          <h2 class="section-title section-title--yellow">─ 關於我 ─</h2>
          <div class="pixel-frame pixel-frame--yellow info-card">
            <div class="info-card__layout">
              <div class="info-card__avatar">
                <svg viewBox="0 0 16 16" class="info-card__avatar-art" aria-label="像素頭像">
                  <rect x="5" y="1" width="6" height="2" fill="#8B6914" />
                  <rect x="4" y="3" width="8" height="2" fill="#8B6914" />
                  <rect x="5" y="5" width="6" height="1" fill="#FFDAB9" />
                  <rect x="4" y="6" width="8" height="3" fill="#FFDAB9" />
                  <rect x="6" y="7" width="1" height="1" fill="#222222" />
                  <rect x="9" y="7" width="1" height="1" fill="#222222" />
                  <rect x="7" y="9" width="2" height="1" fill="#cc6666" />
                  <rect x="5" y="10" width="6" height="3" fill="#4444ff" />
                  <rect x="4" y="13" width="3" height="2" fill="#333333" />
                  <rect x="9" y="13" width="3" height="2" fill="#333333" />
                </svg>
              </div>

              <p class="info-card__text">
                嗨！我是一位對程式充滿熱情的開發者。我喜歡用程式碼打造有趣的體驗，就像 Undertale 用簡單的像素創造了令人難忘的冒險。我相信好的作品不需要華麗的外表，真正重要的是背後的「決心」。
              </p>
            </div>
          </div>
        </section>

        <section v-show="isPageVisible('skills')" class="page-section">
          <h2 class="section-title section-title--green">─ 技能 ─</h2>
          <div class="pixel-frame pixel-frame--green skills-card">
            <p class="skills-card__headline">♫ STATS</p>

            <div class="skills-list">
              <article v-for="skill in skills" :key="skill.name" class="skills-list__item">
                <div class="skills-list__label-row">
                  <span class="skills-list__name" :class="skill.colorClass">{{ skill.name }}</span>
                  <span class="skills-list__level">LV {{ skill.level }}</span>
                </div>

                <div class="skills-list__track">
                  <div
                    class="skills-list__fill"
                    :class="skill.colorClass"
                    :style="{ width: `${skill.level}%` }"
                  ></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section v-show="isPageVisible('projects')" class="page-section">
          <h2 class="section-title section-title--cyan">─ 作品集 ─</h2>
          <div class="project-grid">
            <article v-for="project in projects" :key="project.title" class="pixel-frame pixel-frame--cyan project-card">
              <p class="project-card__icon">{{ project.icon }}</p>
              <h3 class="project-card__title">{{ project.title }}</h3>
              <p class="project-card__description">{{ project.description }}</p>
            </article>
          </div>
        </section>

        <section v-show="isPageVisible('contact')" class="page-section">
          <h2 class="section-title section-title--orange">─ 聯絡我 ─</h2>
          <div class="pixel-frame pixel-frame--orange contact-card">
            <p class="contact-card__intro">
              * 想和我聊聊嗎？<br />
              * 隨時透過以下方式聯絡我！
            </p>

            <div class="contact-card__actions">
              <a class="pixel-button pixel-button--orange" href="mailto:hello@example.com">
                <span>✉</span>
                <span>hello@example.com</span>
              </a>
              <a
                class="pixel-button pixel-button--orange"
                :href="contactGithubHref"
                target="_blank"
                rel="noreferrer"
              >
                <span>⌘</span>
                <span>github.com/you</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <p>♥ 充滿決心地製作 ♥</p>
        <p>SAVE POINT REACHED</p>
      </footer>
    </div>
  </div>
</template>
