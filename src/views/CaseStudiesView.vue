<template>
  <div class="pt-20 sm:pt-24 pb-16 bg-white">
    
    <!-- Hero Banner with Light Luxury Editorial Styling -->
    <section class="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white border-b border-slate-200/80 text-slate-900">
      <!-- Subtle architectural grid background -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_25%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <!-- Soft Warm Ambient Glow -->
      <div class="absolute -top-24 -right-12 w-96 h-96 bg-gradient-to-br from-red-400/10 via-rose-300/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Left Column (7 cols): Copy & Category Filter Buttons -->
          <div class="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs font-semibold tracking-wider uppercase shadow-2xs">
              <span class="w-2 h-2 rounded-full bg-red-600"></span>
              <span>Commercial Client Portfolios &amp; Systems · 2006 – Present</span>
            </div>

            <h1 class="hero-headline text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-heading font-extrabold text-slate-900 tracking-normal leading-[1.32] sm:leading-[1.35] lg:leading-[1.38] text-balance my-3.5 sm:my-4">
              Commercial Websites Built Under <span class="text-red-600">Vivek Thapar’s Guidance</span>
            </h1>

            <p class="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
              Review real-world digital platforms, intake funnels, and responsive web applications engineered for New York and regional commercial clients.
            </p>

            <!-- Category Filter Buttons Inside Banner -->
            <div class="pt-2">
              <p class="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2.5">Filter Commercial Deployments</p>
              <div class="w-full max-w-full flex overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none sm:flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
                <button
                  v-for="filter in projectCategories"
                  :key="filter.id"
                  @click="activeFilter = filter.id"
                  :class="[
                    'px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap shadow-2xs',
                    activeFilter === filter.id
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
                  ]"
                >
                  {{ filter.label }}
                </button>
              </div>
            </div>
          </div>

          <!-- Right Column (5 cols): Matched Portfolio Transformation Image -->
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="w-full max-w-md lg:max-w-none">
              <div class="relative rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 bg-white border border-slate-200/90 shadow-xl group overflow-hidden">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                  <img 
                    src="/media/work-transformation.webp" 
                    alt="Commercial Web Engineering Showcase"
                    class="w-full h-full object-cover object-center filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                  />
                </div>

                <!-- Editorial Caption Beneath Photo -->
                <div class="pt-3 px-1">
                  <div class="flex items-center gap-1.5 text-[11px] font-mono text-slate-700 font-bold uppercase tracking-wider mb-0.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                    <span>Verified Commercial Showcase</span>
                  </div>
                  <p class="text-sm font-heading font-bold text-slate-900 tracking-tight">11 Live Production Platforms</p>
                  <p class="text-[11px] text-slate-500 font-sans mt-0.5">Legal, Real Estate, Healthcare, Finance &amp; Hospitality</p>
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
              <!-- Bespoke Agency Project Header -->
              <div class="bg-slate-50 border-b border-slate-200/80 px-4 py-2.5 flex items-center justify-between gap-3 select-none">
                <div class="flex items-center gap-2 min-w-0">
                  <span class="w-2 h-2 rounded-full bg-red-600 shrink-0"></span>
                  <span class="text-[11px] font-mono font-bold tracking-wider uppercase text-slate-700 truncate">
                    {{ study.industry }}
                  </span>
                </div>

                <!-- Live Domain Link Tag -->
                <a
                  :href="study.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-2.5 py-1 rounded-md bg-white hover:bg-slate-100 border border-slate-200 text-[11px] font-mono font-bold text-slate-700 hover:text-red-600 transition-all flex items-center gap-1.5 shrink-0 shadow-2xs group/link"
                  title="Open live website"
                  aria-label="Open live website"
                >
                  <span>{{ study.displayUrl }}</span>
                  <ExternalLink class="w-3.5 h-3.5 text-red-500 group-hover/link:translate-x-0.5 transition-transform" />
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
