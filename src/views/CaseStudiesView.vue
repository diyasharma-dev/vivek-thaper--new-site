<template>
  <div class="pt-20 sm:pt-24 pb-16 bg-white">
    
    <!-- Hero Header with Warm Ambient Glow -->
    <section class="relative py-12 sm:py-16 overflow-hidden bg-gradient-to-b from-orange-50/30 via-amber-50/15 to-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/90 text-orange-700 font-mono text-[11px] font-bold tracking-wider uppercase shadow-2xs mb-3">
          <Briefcase class="w-3.5 h-3.5 text-orange-600" />
          <span>Real Client Websites &amp; Deployments</span>
        </span>
        <h1 class="text-2xl sm:text-4xl lg:text-[44px] font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
          Commercial Websites Built Under <span class="gradient-text-brand">Vivek Thaper’s Guidance</span>
        </h1>
        <p class="mt-3 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-sans">
          Review the real-world websites, digital platforms, and conversion funnels designed and built by Vivek Thaper and his engineering team.
        </p>

        <!-- Industry Filter Buttons (Scrollable on Mobile) -->
        <div class="w-full max-w-full flex overflow-x-auto pb-1.5 -mx-1 px-1 scrollbar-none sm:flex-wrap items-center justify-start sm:justify-center gap-1.5 sm:gap-2 pt-6">
          <button
            v-for="filter in projectCategories"
            :key="filter.id"
            @click="activeFilter = filter.id"
            :class="[
              'px-3.5 py-1.5 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap shadow-2xs',
              activeFilter === filter.id
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25'
                : 'bg-white text-slate-700 hover:text-orange-600 hover:bg-orange-50/50 border border-slate-200'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Case Studies Detailed Grid -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div 
            v-for="study in filteredStudies" 
            :key="study.id"
            class="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
          >
            <div>
              <!-- Real Screenshot Visual Container -->
              <div class="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img 
                  :src="study.image" 
                  :alt="study.title"
                  class="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 filter contrast-[1.02]"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                
                <!-- Industry Tag -->
                <div class="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-mono uppercase tracking-wider text-slate-900 font-bold shadow-xs">
                  {{ study.industry }}
                </div>

                <!-- Live Site Link Button -->
                <a
                  :href="study.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="absolute top-3 right-3 px-2 py-1 rounded-lg bg-slate-900/90 hover:bg-orange-600 text-white text-[10px] font-mono font-bold flex items-center gap-1 shadow-md transition-colors"
                  title="Visit Live Website"
                >
                  <span>Live Site</span>
                  <ExternalLink class="w-3 h-3 text-orange-300" />
                </a>

                <!-- Metric Badge -->
                <div class="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-slate-900 text-orange-400 text-xs font-mono font-bold shadow-md border border-slate-800">
                  {{ study.stat }}
                </div>
              </div>

              <!-- Card Body Content -->
              <div class="p-5 sm:p-6 space-y-3.5">
                <div>
                  <h2 class="text-lg sm:text-xl font-heading font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
                    {{ study.title }}
                  </h2>
                  <p class="text-xs text-brand-600 font-mono font-semibold mt-0.5">{{ study.subtitle }}</p>
                </div>

                <p class="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {{ study.description }}
                </p>

                <div class="space-y-2 text-xs text-slate-600 leading-relaxed font-sans pt-1">
                  <div class="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <p><strong class="text-slate-900 font-bold font-mono text-[11px] uppercase tracking-wide block mb-0.5">The Challenge:</strong> {{ study.challenge }}</p>
                  </div>
                  <div class="p-2.5 rounded-xl bg-brand-50/60 border border-brand-200/80">
                    <p><strong class="text-brand-900 font-bold font-mono text-[11px] uppercase tracking-wide block mb-0.5">The Solution:</strong> {{ study.solution }}</p>
                  </div>
                  <div class="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80">
                    <p><strong class="text-amber-900 font-bold font-mono text-[11px] uppercase tracking-wide block mb-0.5">Vivek's Guidance:</strong> {{ study.guidance }}</p>
                  </div>
                </div>

                <!-- Tags -->
                <div class="pt-2.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                  <span 
                    v-for="tag in study.tags" 
                    :key="tag"
                    class="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono bg-slate-100 text-slate-700 font-semibold border border-slate-200/80"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Bottom Action Bar -->
            <div class="px-5 sm:px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
              <a 
                :href="study.liveUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 font-mono font-bold text-orange-600 hover:text-orange-700 transition-colors"
              >
                <Globe class="w-3.5 h-3.5" />
                <span>Visit Live Website</span>
                <ExternalLink class="w-3 h-3" />
              </a>

              <router-link 
                to="/contact" 
                class="p-1.5 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-orange-600 hover:border-orange-200 transition-colors shrink-0" 
                title="Inquire about similar build"
              >
                <ArrowUpRight class="w-4 h-4" />
              </router-link>
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
import { Briefcase, ArrowUpRight, ExternalLink, Globe } from 'lucide-vue-next'
import ClientsLogoWall from '@/components/ClientsLogoWall.vue'
import { projects, projectCategories } from '@/data/projects.js'

const activeFilter = ref('all')

const filteredStudies = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter(s => s.category === activeFilter.value)
})
</script>