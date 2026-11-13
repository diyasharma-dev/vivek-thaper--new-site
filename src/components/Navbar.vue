<template>
  <header 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-dark-900/95 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3' : 'bg-transparent py-4 sm:py-5'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between gap-4">
        
        <!-- Brand Logo / Monogram (Left) -->
        <router-link to="/" class="flex items-center gap-2.5 sm:gap-3 group shrink-0 whitespace-nowrap">
          <div class="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-400 via-brand-600 to-brand-800 p-[1px] shadow-lg shadow-brand-900/40 group-hover:shadow-brand-500/20 transition-all shrink-0">
            <div class="w-full h-full bg-dark-950 rounded-[11px] flex items-center justify-center font-display font-black text-base sm:text-lg gold-gradient-text tracking-tighter">
              VT
            </div>
          </div>
          <div class="shrink-0">
            <div class="font-display font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-brand-300 transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <span>Vivek Thapar</span>
              <span class="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-brand-500/10 text-brand-400 border border-brand-500/20">NYC</span>
            </div>
            <p class="text-[11px] text-slate-400 font-medium hidden 2xl:block whitespace-nowrap">Serial Entrepreneur &amp; Digital Strategist</p>
          </div>
        </router-link>

        <!-- Desktop Navigation Links (Center) -->
        <nav class="hidden lg:flex items-center gap-1 xl:gap-2">
          <router-link 
            v-for="item in primaryLinks" 
            :key="item.name" 
            :to="item.to"
            class="px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap"
            active-class="text-brand-400 bg-brand-500/10"
          >
            {{ item.name }}
          </router-link>

          <!-- Extra links shown on wide screens (>= 1280px) -->
          <router-link 
            v-for="item in extraLinks" 
            :key="item.name" 
            :to="item.to"
            class="hidden xl:inline-block px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap"
            active-class="text-brand-400 bg-brand-500/10"
          >
            {{ item.name }}
          </router-link>

          <!-- More Dropdown (Shown on 1024px - 1279px) -->
          <div 
            class="relative xl:hidden"
            @mouseenter="dropdownOpen = true"
            @mouseleave="dropdownOpen = false"
          >
            <button 
              @click="dropdownOpen = !dropdownOpen"
              class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all whitespace-nowrap"
            >
              <span>More</span>
              <ChevronDown class="w-3.5 h-3.5 transition-transform duration-200" :class="{ 'rotate-180': dropdownOpen }" />
            </button>

            <!-- Dropdown Menu Panel -->
            <div 
              v-if="dropdownOpen"
              class="absolute top-full left-0 mt-1 w-44 py-1.5 bg-dark-900/98 backdrop-blur-xl border border-slate-800 rounded-xl shadow-2xl z-50 flex flex-col"
            >
              <router-link 
                v-for="item in extraLinks"
                :key="item.name"
                :to="item.to"
                @click="dropdownOpen = false"
                class="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-brand-300 hover:bg-slate-800/70 transition-colors whitespace-nowrap"
                active-class="text-brand-400 bg-brand-500/10"
              >
                {{ item.name }}
              </router-link>
              <router-link 
                to="/contact"
                @click="dropdownOpen = false"
                class="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-brand-300 hover:bg-slate-800/70 transition-colors whitespace-nowrap border-t border-slate-800/80"
              >
                Founder FAQ
              </router-link>
            </div>
          </div>
        </nav>

        <!-- Right Side: Phone & Consultation CTA -->
        <div class="hidden md:flex items-center gap-2.5 xl:gap-3 shrink-0 ml-auto lg:ml-0 z-10">
          <a 
            href="tel:+17182074446"
            class="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-slate-200 hover:text-white border border-slate-800 hover:border-brand-500/40 bg-dark-850/90 hover:bg-dark-800 transition-all whitespace-nowrap shrink-0 shadow-sm"
            title="Direct Executive Line"
          >
            <Phone class="w-3.5 h-3.5 text-brand-400 shrink-0" />
            <span class="whitespace-nowrap font-mono tracking-tight">(718) 207-4446</span>
          </a>

          <router-link 
            to="/contact"
            class="relative inline-flex items-center justify-center gap-1.5 px-3.5 xl:px-4 py-2 rounded-xl font-bold text-xs text-dark-950 bg-gradient-to-r from-brand-300 via-brand-gold to-brand-500 hover:from-brand-goldLight hover:to-brand-gold shadow-md shadow-brand-500/20 hover:shadow-brand-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
          >
            <span class="whitespace-nowrap">Book Consultation</span>
            <ArrowRight class="w-3.5 h-3.5 shrink-0" />
          </router-link>
        </div>

        <!-- Mobile & Tablet Hamburger Button -->
        <div class="flex items-center gap-2 lg:hidden">
          <a 
            href="tel:+17182074446"
            class="md:hidden flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-bold text-brand-300 bg-brand-500/10 border border-brand-500/20 whitespace-nowrap shrink-0"
          >
            <Phone class="w-3 h-3 text-brand-400 shrink-0" />
            <span class="font-mono text-[11px] whitespace-nowrap">(718) 207-4446</span>
          </a>

          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 border border-slate-800/80 focus:outline-none shrink-0"
            aria-label="Toggle navigation menu"
          >
            <Menu v-if="!mobileMenuOpen" class="w-5 h-5" />
            <X v-else class="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>

    <!-- Mobile Drawer Menu -->
    <Transition name="slide-down">
      <div 
        v-if="mobileMenuOpen" 
        class="lg:hidden fixed inset-x-0 top-full bg-dark-900/98 backdrop-blur-2xl border-b border-slate-800 p-5 shadow-2xl transition-all max-h-[85vh] overflow-y-auto"
      >
        <div class="flex flex-col gap-2">
          
          <router-link 
            v-for="item in allNavLinks" 
            :key="item.name" 
            :to="item.to"
            @click="mobileMenuOpen = false"
            class="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-brand-300 hover:bg-slate-800/60 transition-all flex items-center justify-between whitespace-nowrap"
            active-class="text-brand-400 bg-brand-500/10"
          >
            <span>{{ item.name }}</span>
            <ChevronRight class="w-4 h-4 text-slate-500 shrink-0" />
          </router-link>

          <div class="pt-4 mt-2 border-t border-slate-800/80 flex flex-col gap-2.5">
            <a 
              href="tel:+17182074446"
              class="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-slate-200 bg-dark-850 border border-slate-800 hover:border-brand-500/40 whitespace-nowrap"
            >
              <Phone class="w-4 h-4 text-brand-400 shrink-0" />
              <span class="whitespace-nowrap font-mono">Direct Office: (718) 207-4446</span>
            </a>
            
            <router-link 
              to="/contact"
              @click="mobileMenuOpen = false"
              class="flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold text-dark-950 bg-gradient-to-r from-brand-300 via-brand-gold to-brand-500 shadow-lg shadow-brand-500/25 whitespace-nowrap"
            >
              <span class="whitespace-nowrap">Schedule Executive Strategy Call</span>
              <ArrowRight class="w-4 h-4 shrink-0" />
            </router-link>
          </div>

        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Phone, ArrowRight, Menu, X, ChevronRight, ChevronDown } from 'lucide-vue-next'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const dropdownOpen = ref(false)

// Primary page routes
const primaryLinks = [
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Case Studies', to: '/case-studies' },
  { name: 'Speaking', to: '/speaking' },
  { name: 'Blog', to: '/blog' }
]

// Secondary routes shown directly on large screens (>=1280px), or in More dropdown
const extraLinks = [
  { name: 'Community', to: '/community' },
  { name: 'Contact', to: '/contact' }
]

// Complete page routes for mobile menu
const allNavLinks = [
  { name: 'Home', to: '/' },
  { name: 'About Vivek', to: '/about' },
  { name: 'Services & Architecture', to: '/services' },
  { name: 'Client Case Studies', to: '/case-studies' },
  { name: 'Keynotes & Speaking', to: '/speaking' },
  { name: 'Civic & Community', to: '/community' },
  { name: 'Articles & Blog', to: '/blog' },
  { name: 'Contact & Booking', to: '/contact' }
]

function handleScroll() {
  scrolled.value = window.scrollY > 25
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
