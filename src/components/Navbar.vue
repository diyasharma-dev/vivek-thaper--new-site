<template>
  <header 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-3 shadow-xs' 
        : 'bg-white/85 backdrop-blur-sm border-b border-slate-200/60 py-4 sm:py-5'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between gap-4">
        
        <!-- Brand Monogram & Name (Left) -->
        <router-link to="/" class="flex items-center gap-3 group shrink-0 whitespace-nowrap">
          <div class="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 group-hover:bg-slate-800 flex items-center justify-center text-amber-400 font-serif font-bold text-base transition-colors shadow-xs">
            VT
          </div>
          <div class="shrink-0">
            <div class="font-sans font-bold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-black transition-colors flex items-center gap-2">
              <span>Vivek Thapar</span>
              <span class="text-[10px] font-mono uppercase tracking-wider text-amber-700 font-semibold px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200/80">Mirch Media NYC</span>
            </div>
            <p class="text-[11px] text-slate-500 font-normal hidden xl:block">Founder &amp; CEO · Digital Engineering &amp; Search Dominance</p>
          </div>
        </router-link>

        <!-- Desktop Navigation Links (Center) -->
        <nav class="hidden lg:flex items-center gap-1 xl:gap-1.5">
          <router-link 
            v-for="item in primaryLinks" 
            :key="item.name" 
            :to="item.to"
            class="px-3.5 py-1.5 rounded-lg text-[13px] font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-all whitespace-nowrap"
            active-class="text-slate-950 bg-slate-100 font-semibold shadow-2xs"
          >
            {{ item.name }}
          </router-link>

          <!-- Extra links on screens >= 1280px -->
          <router-link 
            v-for="item in extraLinks" 
            :key="item.name" 
            :to="item.to"
            class="hidden xl:inline-block px-3.5 py-1.5 rounded-lg text-[13px] font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-all whitespace-nowrap"
            active-class="text-slate-950 bg-slate-100 font-semibold shadow-2xs"
          >
            {{ item.name }}
          </router-link>

          <!-- Dropdown for 1024px - 1279px viewports -->
          <div 
            class="relative xl:hidden"
            @mouseenter="dropdownOpen = true"
            @mouseleave="dropdownOpen = false"
          >
            <button 
              @click="dropdownOpen = !dropdownOpen"
              class="flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-[13px] font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100 transition-all whitespace-nowrap cursor-pointer"
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
                v-for="item in extraLinks"
                :key="item.name"
                :to="item.to"
                @click="dropdownOpen = false"
                class="px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-colors whitespace-nowrap"
                active-class="text-amber-700 bg-amber-50 font-semibold"
              >
                {{ item.name }}
              </router-link>
              <router-link 
                to="/contact"
                @click="dropdownOpen = false"
                class="px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-colors whitespace-nowrap border-t border-slate-100"
              >
                Founder FAQ
              </router-link>
            </div>
          </div>
        </nav>

        <!-- Right Side: Phone & Consultation CTA -->
        <div class="hidden md:flex items-center gap-3 shrink-0 ml-auto lg:ml-0 z-10">
          <a 
            href="tel:+17182074446"
            class="flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium text-slate-700 hover:text-slate-950 border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-all whitespace-nowrap shrink-0 shadow-2xs"
            title="Direct Executive Line"
          >
            <Phone class="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span class="whitespace-nowrap font-mono font-medium tracking-tight">(718) 207-4446</span>
          </a>

          <router-link 
            to="/contact"
            class="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-xs text-white bg-slate-900 hover:bg-slate-800 transition-all whitespace-nowrap shrink-0 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span class="whitespace-nowrap">Book Consultation</span>
            <ArrowRight class="w-3.5 h-3.5 shrink-0" />
          </router-link>
        </div>

        <!-- Mobile & Tablet Controls -->
        <div class="flex items-center gap-2 lg:hidden">
          <a 
            href="tel:+17182074446"
            class="md:hidden flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 whitespace-nowrap shrink-0"
          >
            <Phone class="w-3 h-3 text-amber-600 shrink-0" />
            <span class="font-mono text-[11px] font-semibold whitespace-nowrap">(718) 207-4446</span>
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
            class="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors flex items-center justify-between"
            active-class="text-amber-800 bg-amber-50 font-semibold"
          >
            <span>{{ item.name }}</span>
            <ArrowRight class="w-4 h-4 text-slate-400" />
          </router-link>

          <div class="pt-4 mt-2 border-t border-slate-200 flex flex-col gap-3">
            <a 
              href="tel:+17182074446"
              class="flex items-center justify-center gap-2 p-3 rounded-xl text-xs font-medium text-slate-800 border border-slate-200 bg-slate-50"
            >
              <Phone class="w-4 h-4 text-amber-600" />
              <span class="font-mono font-medium">Direct Desk: (718) 207-4446</span>
            </a>

            <router-link 
              to="/contact" 
              @click="mobileMenuOpen = false"
              class="flex items-center justify-center gap-2 p-3 rounded-xl text-xs font-semibold text-white bg-slate-900 shadow-sm"
            >
              <span>Schedule Strategy Call</span>
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
  { name: 'About', to: '/about' },
  { name: 'Services', to: '/services' },
  { name: 'Case Studies', to: '/case-studies' },
  { name: 'Speaking', to: '/speaking' },
  { name: 'Community', to: '/community' }
]

const extraLinks = [
  { name: 'Scope Estimator', to: '/#calculator' },
  { name: 'Essays', to: '/blog' }
]

const allLinks = [
  { name: 'Home', to: '/' },
  { name: 'About Vivek', to: '/about' },
  { name: 'Services & Capabilities', to: '/services' },
  { name: 'Case Studies', to: '/case-studies' },
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
