<template>
  <header 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-2.5 sm:py-3 shadow-xs' 
        : 'bg-white/90 backdrop-blur-md border-b border-slate-200/60 py-3 sm:py-3.5'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between gap-3 sm:gap-6">
        
        <!-- Brand Monogram Logo & Name (Left) -->
        <router-link to="/" class="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <!-- Crystal-Clear Vector Brand Logo (No green dot) -->
          <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-700/80 group-hover:border-brand-500/80 p-1.5 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:shadow-brand-500/10 shrink-0">
            <!-- Razor-Sharp SVG Monogram -->
            <svg viewBox="0 0 36 36" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Geometric V in pure crisp white -->
              <path d="M5 7L13 27H16.5L24.5 7H20.5L14.8 22.2L9 7H5Z" fill="#FFFFFF"/>
              <!-- Interlocking T in fiery Mirch orange -->
              <path d="M16 10H30V13.5H25V27H21V13.5H16V10Z" fill="#F97316"/>
              <!-- Fiery accent spark dot -->
              <circle cx="28.5" cy="7.5" r="2" fill="#FBBF24"/>
            </svg>
          </div>

          <!-- Brand Typography Lockup (Compact & Pristine) -->
          <div class="flex items-center gap-2 shrink-0">
            <span class="font-heading font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-brand-600 transition-colors tracking-tight whitespace-nowrap">
              Vivek Thapar
            </span>
            <span class="inline-flex items-center px-2 py-0.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-[10px] font-mono font-bold tracking-wider uppercase shrink-0">
              <span class="hidden xs:inline">Mirch Media</span> NYC
            </span>
          </div>
        </router-link>

        <!-- Desktop Navigation Links (Center, hidden on < 1024px) -->
        <nav class="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
          <router-link 
            v-for="item in primaryLinks" 
            :key="item.name" 
            :to="item.to"
            class="px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-heading font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-all whitespace-nowrap"
            active-class="text-slate-950 bg-slate-100 font-bold shadow-2xs"
          >
            {{ item.name }}
          </router-link>

          <!-- More Dropdown for Secondary Links -->
          <div 
            class="relative"
            @mouseenter="dropdownOpen = true"
            @mouseleave="dropdownOpen = false"
          >
            <button 
              @click="dropdownOpen = !dropdownOpen"
              class="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs xl:text-[13px] font-heading font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-all whitespace-nowrap cursor-pointer"
            >
              <span>More</span>
              <ChevronDown class="w-3.5 h-3.5 transition-transform duration-200" :class="{ 'rotate-180': dropdownOpen }" />
            </button>

            <!-- Dropdown Panel -->
            <div 
              v-if="dropdownOpen"
              class="absolute top-full left-0 mt-2 w-52 py-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 flex flex-col"
            >
              <router-link 
                v-for="item in secondaryLinks" 
                :key="item.name" 
                :to="item.to"
                @click="dropdownOpen = false"
                class="px-4 py-2 text-xs font-heading font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-colors whitespace-nowrap"
                active-class="text-brand-600 bg-brand-50 font-bold"
              >
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </nav>

        <!-- Right Side: Direct Call & "Let's Connect" CTA (Desktop >= 1024px) -->
        <div class="hidden lg:flex items-center gap-2.5 shrink-0">
          <a 
            href="tel:+17182074446"
            class="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-bold text-slate-700 hover:text-slate-950 border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-all whitespace-nowrap shrink-0 shadow-2xs"
            title="Direct Executive Line"
          >
            <Phone class="w-3.5 h-3.5 text-brand-600 shrink-0" />
            <span class="whitespace-nowrap font-mono tracking-tight">(718) 207-4446</span>
          </a>

          <router-link 
            to="/contact"
            class="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl font-heading font-bold text-xs text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-md shadow-orange-500/25 hover:shadow-lg hover:shadow-orange-500/35 hover:-translate-y-0.5 border border-white/20"
          >
            <span class="whitespace-nowrap">Let's Connect</span>
            <ArrowRight class="w-3.5 h-3.5 shrink-0" />
          </router-link>
        </div>

        <!-- Mobile & Tablet Controls (< 1024px) -->
        <div class="flex items-center gap-2 lg:hidden shrink-0">
          <a 
            href="tel:+17182074446"
            class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-brand-700 bg-brand-50 border border-brand-200 whitespace-nowrap shrink-0"
            title="Call Vivek Thapar Direct"
          >
            <Phone class="w-3.5 h-3.5 text-brand-600 shrink-0" />
            <span class="font-mono text-[11px] font-bold whitespace-nowrap hidden sm:inline">(718) 207-4446</span>
          </a>

          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200 focus:outline-none shrink-0 cursor-pointer"
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
        class="lg:hidden fixed inset-x-0 top-full bg-white/98 backdrop-blur-xl border-b border-slate-200 p-5 shadow-2xl transition-all max-h-[85vh] overflow-y-auto"
      >
        <div class="flex flex-col gap-1.5">
          <router-link 
            v-for="item in allLinks" 
            :key="item.name" 
            :to="item.to"
            @click="mobileMenuOpen = false"
            class="px-4 py-2.5 rounded-lg text-sm font-heading font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors flex items-center justify-between"
            active-class="text-brand-800 bg-brand-50 font-bold"
          >
            <span>{{ item.name }}</span>
            <ArrowRight class="w-4 h-4 text-slate-400" />
          </router-link>

          <div class="pt-4 mt-2 border-t border-slate-200 flex flex-col gap-3">
            <a 
              href="tel:+17182074446"
              class="flex items-center justify-center gap-2 p-3 rounded-xl text-xs font-mono font-bold text-slate-800 border border-slate-200 bg-slate-50"
            >
              <Phone class="w-4 h-4 text-brand-600" />
              <span>Direct Desk: (718) 207-4446</span>
            </a>

            <router-link 
              to="/contact" 
              @click="mobileMenuOpen = false"
              class="flex items-center justify-center gap-2 p-3 rounded-xl text-xs font-heading font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 shadow-md shadow-orange-500/25"
            >
              <span>Schedule a Call</span>
              <ArrowRight class="w-4 h-4" />
            </router-link>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Phone, ArrowRight, Menu, X, ChevronDown } from 'lucide-vue-next'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const dropdownOpen = ref(false)

const primaryLinks = [
  { name: 'Selected Work', to: '/case-studies' },
  { name: 'About Vivek', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Speaking', to: '/speaking' },
  { name: 'Essays', to: '/blog' }
]

const secondaryLinks = [
  { name: 'Civic & Community', to: '/community' },
  { name: 'Contact & Office', to: '/contact' }
]

const allLinks = [
  { name: 'Home', to: '/' },
  { name: 'Selected Work', to: '/case-studies' },
  { name: 'About Vivek', to: '/about' },
  { name: 'Services & Capabilities', to: '/services' },
  { name: 'Speaking & Press', to: '/speaking' },
  { name: 'Civic & Community', to: '/community' },
  { name: 'Essays & Insights', to: '/blog' },
  { name: 'Contact & Office', to: '/contact' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 30
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
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