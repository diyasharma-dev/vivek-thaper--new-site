<template>
  <div class="pt-20 sm:pt-24 pb-16 bg-white">
    
    <!-- Hero Banner with 100% Matched Portfolio Transformation Image -->
    <section class="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden bg-slate-950 text-white border-b border-slate-800">
      <div class="absolute -top-24 right-0 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-20 w-[400px] h-[400px] bg-slate-800/50 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>

      <!-- Ambient blurred watermark of transformation image -->
      <div class="absolute inset-0 opacity-10 filter blur-3xl scale-125 pointer-events-none overflow-hidden">
        <img src="/media/work-transformation.webp" class="w-full h-full object-cover" alt="" />
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Left Column (7 cols): Copy & Category Filter Buttons -->
          <div class="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-500/30 text-red-400 font-mono text-xs font-bold tracking-wider uppercase shadow-2xs">
              <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>Commercial Client Portfolios &amp; Systems · 2006 – Present</span>
            </div>

            <h1 class="hero-headline text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-heading font-extrabold text-white tracking-normal leading-[1.32] sm:leading-[1.35] lg:leading-[1.38] text-balance my-3.5 sm:my-4">
              Commercial Websites Built Under <span class="text-red-500">Vivek Thapar’s Guidance</span>
            </h1>

            <p class="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
              Review real-world digital platforms, intake funnels, and responsive web applications engineered for New York and regional commercial clients.
            </p>

            <!-- Category Filter Buttons Inside Banner -->
            <div class="pt-2">
              <p class="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2.5">Filter Commercial Deployments</p>
              <div class="w-full max-w-full flex overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none sm:flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
                <button
                  v-for="filter in projectCategories"
                  :key="filter.id"
                  @click="activeFilter = filter.id"
                  :class="[
                    'px-3.5 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap shadow-2xs',
                    activeFilter === filter.id
                      ? 'bg-red-600 text-white shadow-md shadow-red-900/40'
                      : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  ]"
                >
                  {{ filter.label }}
                </button>
              </div>
            </div>
          </div>

          <!-- Right Column (5 cols): 100% Matched Portfolio Transformation Image -->
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="w-full max-w-md lg:max-w-none">
              <div class="relative rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-slate-800/80 via-slate-900/90 to-slate-950 border border-slate-700/80 shadow-2xl shadow-red-950/30 group overflow-hidden">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square lg:aspect-[4/3] h-[420px] sm:h-[480px] lg:h-[520px] bg-slate-900">
                  <img 
                    src="/media/work-transformation.webp" 
                    alt="Commercial Web Engineering Showcase"
                    class="w-full h-full object-cover object-center filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none"></div>

                  <!-- Glassmorphic Caption Badge on Image -->
                  <div class="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 shadow-lg">
                    <div class="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider mb-0.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                      <span>Verified Commercial Showcase</span>
                    </div>
                    <p class="text-xs sm:text-sm font-heading font-bold text-white tracking-tight">9 Live Production Platforms</p>
                    <p class="text-[11px] text-slate-300 font-sans mt-0.5">Legal, Real Estate, Healthcare &amp; Hospitality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Case Studies Detailed Grid -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          <div 
            v-for="study in filteredStudies" 
            :key="study.id"
            class="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <!-- Browser Window Chrome Mockup -->
              <div class="bg-slate-100 border-b border-slate-200/80 px-3.5 py-2.5 flex items-center justify-between gap-2 select-none">
                <div class="flex items-center gap-1.5 shrink-0">
                  <span class="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-rose-400 transition-colors"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-amber-400 transition-colors"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-emerald-400 transition-colors"></span>
                </div>

                <div class="px-2.5 py-1 rounded-md bg-white border border-slate-200/80 text-[11px] font-mono text-slate-600 truncate flex items-center gap-1.5 max-w-[200px] shadow-2xs">
                  <Globe class="w-3 h-3 text-slate-400 shrink-0" />
                  <span class="truncate">{{ study.displayUrl }}</span>
                </div>

                <a
                  :href="study.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-slate-400 hover:text-red-600 transition-colors p-0.5"
                  title="Open live website"
                  aria-label="Open live website"
                >
                  <ExternalLink class="w-3.5 h-3.5" />
                </a>
              </div>

              <!-- Real Screenshot Visual Container -->
              <div class="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img 
                  :src="study.image" 
                  :alt="study.title"
                  class="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 filter contrast-[1.02]"
                  loading="lazy"
                />
                
                <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <a
                    :href="study.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-4 py-2 rounded-xl bg-white text-slate-900 font-heading font-bold text-xs shadow-lg hover:bg-red-50 hover:text-red-600 transition-colors flex items-center gap-1.5"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink class="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <!-- Card Body Content -->
              <div class="p-5 sm:p-6 space-y-3.5">
                <div>
                  <span class="text-[11px] font-mono font-bold text-red-700 uppercase tracking-wider block mb-1">
                    {{ study.industry }}
                  </span>
                  <h2 class="text-lg sm:text-xl font-heading font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                    {{ study.title }}
                  </h2>
                  <p class="text-xs text-slate-500 font-medium mt-0.5">{{ study.subtitle }}</p>
                </div>

                <p class="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {{ study.description }}
                </p>

                <div class="space-y-2 text-xs text-slate-600 leading-relaxed font-sans pt-1">
                  <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <p><strong class="text-slate-900 font-bold font-mono text-[10px] uppercase tracking-wide block mb-0.5">The Challenge:</strong> {{ study.challenge }}</p>
                  </div>
                  <div class="p-3 rounded-xl bg-red-50/40 border border-red-200/70">
                    <p><strong class="text-red-950 font-bold font-mono text-[10px] uppercase tracking-wide block mb-0.5">The Solution:</strong> {{ study.solution }}</p>
                  </div>
                  <div class="p-3 rounded-xl bg-amber-50/40 border border-amber-200/70">
                    <p><strong class="text-amber-950 font-bold font-mono text-[10px] uppercase tracking-wide block mb-0.5">Vivek's Guidance:</strong> {{ study.guidance }}</p>
                  </div>
                </div>

                <!-- Deliverable Tags -->
                <div class="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                  <span 
                    v-for="tag in study.tags" 
                    :key="tag"
                    class="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 text-slate-700 font-medium"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Bottom Action Bar -->
            <div class="px-5 sm:px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
              <a 
                :href="study.liveUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 font-mono font-bold text-slate-600 hover:text-red-600 transition-colors"
              >
                <Globe class="w-3.5 h-3.5 text-slate-400" />
                <span>{{ study.displayUrl }}</span>
              </a>

              <a
                :href="study.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 text-xs font-heading font-bold text-red-600 hover:text-red-700"
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
