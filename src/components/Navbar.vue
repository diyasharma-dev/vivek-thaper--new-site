<template>
  <header 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled 
        ? 'bg-[#070910]/90 backdrop-blur-xl border-b border-white/[0.08] py-2.5 sm:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.6)]' 
        : 'bg-[#070910]/70 backdrop-blur-lg border-b border-white/[0.05] py-3 sm:py-4'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between gap-2 sm:gap-6">
        
        <!-- Brand Monogram Logo & Name (Left) -->
        <router-link to="/" class="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <!-- Razor-Sharp SVG Monogram with Subtle Red Glow -->
          <div class="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-obsidian-900 to-obsidian-950 border border-white/10 group-hover:border-red-500/60 p-1.5 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.35)] shrink-0">
            <svg viewBox="0 0 36 36" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Geometric V in pure crisp white -->
              <path d="M5 7L13 27H16.5L24.5 7H20.5L14.8 22.2L9 7H5Z" fill="#FFFFFF"/>
              <!-- Interlocking T in fiery Mirch orange/red -->
              <path d="M16 10H30V13.5H25V27H21V13.5H16V10Z" fill="#EF4444"/>
              <!-- Fiery accent spark dot -->
              <circle cx="28.5" cy="7.5" r="2" fill="#FBBF24"/>
            </svg>
          </div>

          <!-- Brand Typography Lockup -->
          <div class="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <span class="font-heading font-extrabold text-[15px] sm:text-lg text-white group-hover:text-red-400 transition-colors tracking-tight whitespace-nowrap shrink-0">
              Vivek Thapar
            </span>
            <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-[10px] font-mono font-bold tracking-wider uppercase shrink-0">
              <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              <span class="hidden sm:inline">Mirch Media&nbsp;</span><span>NYC</span>
            </span>
          </div>
        </router-link>

        <!-- Desktop Navigation Links (Center, hidden on < 1024px) -->
        <nav class="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1 backdrop-blur-md">
          <router-link 
            v-for="item in primaryLinks" 
            :key="item.name" 
            :to="item.to"
            class="relative px-3 py-1.5 text-xs xl:text-[13px] font-heading font-semibold text-slate-300 hover:text-white transition-colors whitespace-nowrap rounded-full"
            :class="{ '!text-white font-bold bg-white/[0.08] shadow-xs': $route.path === item.to || ($route.path.startsWith(item.to) && item.to !== '/') }"
          >
            <span>{{ item.name }}</span>
            <span 
              v-if="$route.path === item.to || ($route.path.startsWith(item.to) && item.to !== '/')"
              class="absolute bottom-0 inset-x-3 h-[2px] bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.8)]"
            ></span>
          </router-link>
        </nav>

        <!-- Right Side: Direct Call & "Let's Connect" CTA (Desktop >= 1024px) -->
        <div class="hidden lg:flex items-center gap-2.5 shrink-0">
          <a 
            href="tel:+17182074446"
            class="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-bold text-slate-200 hover:text-white border border-white/10 hover:border-red-500/50 bg-white/[0.04] hover:bg-white/[0.08] transition-all whitespace-nowrap shrink-0 shadow-xs"
            title="Direct Executive Line"
          >
            <Phone class="w-3.5 h-3.5 text-red-400 shrink-0" />
            <span class="whitespace-nowrap font-mono tracking-tight">(718) 207-4446</span>
          </a>

          <router-link 
            to="/contact"
            class="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl font-heading font-bold text-xs text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-[0_0_20px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] hover:-translate-y-0.5 border border-white/20"
          >
            <span class="whitespace-nowrap">Let's Connect</span>
            <ArrowRight class="w-3.5 h-3.5 shrink-0" />
          </router-link>
        </div>

        <!-- Mobile & Tablet Controls (< 1024px) -->
        <div class="flex items-center gap-2 lg:hidden shrink-0">
          <a 
            href="tel:+17182074446"
            class="flex items-center justify-center gap-1.5 min-w-[38px] h-9 px-2.5 rounded-lg text-xs font-medium text-red-300 bg-red-950/40 border border-red-500/30 whitespace-nowrap shrink-0"
            title="Call Vivek Thapar Direct"
            aria-label="Call Vivek Thapar Direct"
          >
            <Phone class="w-4 h-4 text-red-400 shrink-0" />
            <span class="font-mono text-[11px] font-bold whitespace-nowrap hidden sm:inline">(718) 207-4446</span>
          </a>

          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="w-9 h-9 flex items-center justify-center rounded-lg text-slate-200 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 focus:outline-none shrink-0 cursor-pointer"
            aria-label="Toggle navigation menu"
            :aria-expanded="mobileMenuOpen"
          >
            <Menu v-if="!mobileMenuOpen" class="w-5 h-5" />
            <X v-else class="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Backdrop Overlay -->
    <Transition name="fade">
      <div
        v-if="mobileMenuOpen"
        @click="mobileMenuOpen = false"
        class="lg:hidden fixed inset-x-0 top-full h-[100dvh] bg-black/70 backdrop-blur-sm z-40"
        aria-hidden="true"
      ></div>
    </Transition>

    <!-- Mobile Drawer Menu -->
    <Transition name="slide-down">
      <div 
        v-if="mobileMenuOpen" 
        class="lg:hidden fixed inset-x-0 top-full z-50 bg-[#0a0d18]/95 backdrop-blur-2xl border-b border-white/10 px-4 py-5 sm:p-6 shadow-2xl transition-all max-h-[calc(100dvh-4rem)] overflow-y-auto"
      >
        <div class="flex flex-col gap-1.5">
          <router-link 
            v-for="item in allLinks" 
            :key="item.name" 
            :to="item.to"
            @click="mobileMenuOpen = false"
            class="px-4 py-3 rounded-xl text-sm font-heading font-semibold text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors flex items-center justify-between"
            active-class="!text-white !bg-red-950/40 border border-red-500/30 font-bold"
          >
            <span>{{ item.name }}</span>
            <ArrowRight class="w-4 h-4 text-slate-500 shrink-0" />
          </router-link>

          <div class="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
            <a 
              href="tel:+17182074446"
              class="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-mono font-bold text-slate-200 border border-white/10 bg-white/[0.04]"
            >
              <Phone class="w-4 h-4 text-red-400 shrink-0" />
              <span>Direct Desk: (718) 207-4446</span>
            </a>

            <router-link 
              to="/contact" 
              @click="mobileMenuOpen = false"
              class="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-heading font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 shadow-glow-red"
            >
              <span>Schedule a Call</span>
              <ArrowRight class="w-4 h-4 shrink-0" />
            </router-link>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Phone, ArrowRight, Menu, X } from 'lucide-vue-next'

const route = useRoute()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

watch(() => route.fullPath, () => {
  mobileMenuOpen.value = false
})

watch(mobileMenuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : ''
})

const primaryLinks = [
  { name: 'Portfolio', to: '/case-studies' },
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Community', to: '/community' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contact', to: '/contact' }
]

const allLinks = [
  { name: 'Home', to: '/' },
  { name: 'Portfolio', to: '/case-studies' },
  { name: 'About Vivek', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Community & Civic', to: '/community' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contact', to: '/contact' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 30
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease-out;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>