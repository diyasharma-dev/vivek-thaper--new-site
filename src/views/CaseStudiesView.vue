<template>
  <div class="pt-20 sm:pt-24 pb-20 bg-transparent text-slate-100 min-h-screen">
    
    <!-- Hero Banner with Matched Portfolio Transformation Image -->
    <section class="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 overflow-hidden border-b border-white/10">
      <!-- Subtle Ambient Lighting -->
      <div class="absolute -top-24 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-20 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Left Column (7 cols): Copy & Category Filter Buttons -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-500/30 text-red-400 font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
              <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>Client Portfolio &amp; Platforms · 2006 – Present</span>
            </div>

            <h1 class="hero-headline text-3xl sm:text-5xl lg:text-[46px] font-heading font-black text-white tracking-tight leading-[1.2] text-balance">
              Client Platforms Directed by <span class="gradient-text-brand">Vivek Thapar</span>
            </h1>

            <p class="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
              Explore real-world commercial platforms, law firm portals, restaurant ordering systems, and corporate web platforms managed and delivered by Vivek Thapar and the Mirch Media team.
            </p>

            <!-- Category Filter Buttons Inside Banner -->
            <div class="pt-2">
              <p class="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">Filter Client Projects</p>
              <div class="w-full max-w-full flex overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none sm:flex-wrap items-center justify-center lg:justify-start gap-2">
                <button
                  v-for="filter in projectCategories"
                  :key="filter.id"
                  @click="activeFilter = filter.id"
                  :class="[
                    'px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap',
                    activeFilter === filter.id
                      ? 'bg-red-600 text-white shadow-glow-red'
                      : 'bg-[#0c0e17] text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                  ]"
                >
                  {{ filter.label }}
                </button>
              </div>
            </div>
          </div>

          <!-- Right Column (5 cols): Real Client Platform Feature -->
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="w-full max-w-lg lg:max-w-none">
              <div class="relative rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-white/15 via-[#0e111d] to-[#07080e] border border-white/15 shadow-2xl group overflow-hidden">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/10] w-full bg-slate-900">
                  <img 
                    src="/media/projects/austinoptics.webp" 
                    alt="Austin Optics - Forest Hills Optometry Platform"
                    class="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-700"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                <!-- Caption Badge Placed Underneath Image -->
                <div class="pt-3.5 px-2 pb-1">
                  <div class="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider mb-0.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span>Featured Live Platform</span>
                  </div>
                  <p class="text-xs sm:text-sm font-heading font-bold text-white tracking-tight">Austin Optics · Optometry &amp; Vision Care</p>
                  <p class="text-[11px] text-slate-400 font-sans mt-0.5">Online Exam Scheduling &amp; Local Queens Platform Directed by Vivek Thapar</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Case Studies Detailed Grid -->
    <section class="py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="study in filteredStudies" 
            :key="study.id"
            class="card-glass overflow-hidden flex flex-col justify-between group hover:border-red-500/40 hover:-translate-y-1.5 transition-all duration-300"
          >
            <div>
              <!-- Browser Window Chrome Mockup -->
              <div class="bg-[#0e111d] border-b border-white/10 px-4 py-3 flex items-center justify-between gap-2 select-none">
                <div class="flex items-center gap-1.5 shrink-0">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                </div>

                <div class="px-2.5 py-1 rounded-md bg-[#07080e] border border-white/10 text-[11px] font-mono text-slate-300 truncate flex items-center gap-1.5 max-w-[200px]">
                  <Globe class="w-3 h-3 text-red-400 shrink-0" />
                  <span class="truncate">{{ study.displayUrl }}</span>
                </div>

                <a
                  :href="study.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-slate-400 hover:text-red-400 transition-colors p-0.5"
                  title="Open live website"
                  aria-label="Open live website"
                >
                  <ExternalLink class="w-3.5 h-3.5" />
                </a>
              </div>

              <!-- Real Screenshot Visual Container -->
              <div class="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-white/5">
                <img 
                  :src="study.image" 
                  :alt="study.title"
                  class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
                
                <div class="absolute inset-0 bg-[#07080e]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <a
                    :href="study.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-primary text-xs shadow-glow-red"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink class="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>

              <!-- Card Body Content -->
              <div class="p-6 space-y-4">
                <div>
                  <span class="text-[11px] font-mono font-bold text-red-400 uppercase tracking-wider block mb-1">
                    {{ study.industry }}
                  </span>
                  <h2 class="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-red-300 transition-colors leading-snug">
                    {{ study.title }}
                  </h2>
                  <p class="text-xs text-slate-400 font-medium mt-0.5">{{ study.subtitle }}</p>
                </div>

                <p class="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {{ study.description }}
                </p>

                <div class="space-y-2.5 text-xs text-slate-300 leading-relaxed font-sans pt-1">
                  <div class="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                    <p><strong class="text-slate-200 font-bold font-mono text-[10px] uppercase tracking-wide block mb-0.5">The Challenge:</strong> {{ study.challenge }}</p>
                  </div>
                  <div class="p-3 rounded-xl bg-red-950/30 border border-red-500/20">
                    <p><strong class="text-red-300 font-bold font-mono text-[10px] uppercase tracking-wide block mb-0.5">The Solution:</strong> {{ study.solution }}</p>
                  </div>
                  <div class="p-3 rounded-xl bg-amber-950/20 border border-amber-500/20">
                    <p><strong class="text-amber-300 font-bold font-mono text-[10px] uppercase tracking-wide block mb-0.5">Vivek's Guidance:</strong> {{ study.guidance }}</p>
                  </div>
                </div>

                <!-- Deliverable Tags -->
                <div class="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                  <span 
                    v-for="tag in study.tags" 
                    :key="tag"
                    class="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300 font-medium"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Bottom Action Bar -->
            <div class="px-6 py-3.5 bg-[#0e111d]/80 border-t border-white/10 flex items-center justify-between gap-3 text-xs">
              <a 
                :href="study.liveUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 font-mono font-bold text-slate-300 hover:text-red-400 transition-colors"
              >
                <Globe class="w-3.5 h-3.5 text-red-500" />
                <span>{{ study.displayUrl }}</span>
              </a>

              <a
                :href="study.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 text-xs font-heading font-bold text-red-400 hover:text-red-300"
              >
                <span>Visit Live Site</span>
                <ExternalLink class="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Client Verification Strip -->
    <ClientsLogoWall />

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ExternalLink, Globe } from 'lucide-vue-next'
import ClientsLogoWall from '@/components/ClientsLogoWall.vue'
import { projects, projectCategories } from '@/data/projects.js'

const activeFilter = ref('all')

const filteredStudies = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter(s => s.category === activeFilter.value)
})
</script>
