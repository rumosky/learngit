// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

// 【关键】在模块加载时立即执行，不等待 Vue 组件初始化
if (typeof window !== 'undefined') {
  const SEARCH_KEY = 'vitepress:local-search-detailed-list'
  if (localStorage.getItem(SEARCH_KEY) === null) {
    localStorage.setItem(SEARCH_KEY, 'true')
  }
}

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()

    const openDetails = () => {
      // 只有在浏览器环境下执行
      if (typeof window === 'undefined') return

      const hash = decodeURIComponent(window.location.hash)
      if (hash) {
        // 使用 nextTick 确保 DOM 已经渲染
        nextTick(() => {
          const target = document.querySelector(hash)
          if (target) {
            let parent = target.parentElement
            while (parent) {
              if (parent.tagName === 'DETAILS') {
                parent.setAttribute('open', '')
              }
              parent = parent.parentElement
            }
            // 滚动到目标
            target.scrollIntoView()
          }
        })
      }
    }

    onMounted(() => {
      openDetails()
      window.addEventListener('hashchange', openDetails)
    })

    watch(() => route.path, () => {
      nextTick(() => openDetails())
    })
  }
}