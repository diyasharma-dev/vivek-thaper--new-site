import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// Global Scroll Reveal Directive & Observer
app.directive('reveal', {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.arg) {
      el.classList.add(`reveal-delay-${binding.arg}`)
    }
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add('revealed')
              observer.unobserve(el)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
      )
      el._revealObserver = observer
      observer.observe(el)
    } else {
      el.classList.add('revealed')
    }
  },
  unmounted(el) {
    if (el._revealObserver) {
      el._revealObserver.disconnect()
    }
  }
})

// Auto-initialize any elements with .reveal class dynamically
if (typeof window !== 'undefined') {
  router.afterEach(() => {
    setTimeout(() => {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('revealed')
                observer.unobserve(entry.target)
              }
            })
          },
          { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
        )
        document.querySelectorAll('.reveal:not(.revealed)').forEach((el) => {
          observer.observe(el)
        })
      }
    }, 100)
  })
}

app.use(router)
app.mount('#app')

