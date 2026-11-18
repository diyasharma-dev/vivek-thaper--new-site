<template>
  <section id="work" class="py-14 sm:py-16 md:py-20 relative overflow-hidden bg-slate-50/60 scroll-mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div class="max-w-3xl space-y-2.5 sm:space-y-3">
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/90 text-orange-700 font-mono text-[11px] font-bold tracking-wider uppercase shadow-2xs">
            <Briefcase class="w-3.5 h-3.5 text-orange-600" />
            <span>Featured Client Deployments</span>
          </span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
            Commercial Websites &amp; Platforms Built Under Vivek Thaper’s Guidance
          </h2>
          <p class="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-sans">
            Explore live commercial systems, conversion funnels, and enterprise web applications engineered by Vivek Thaper and his engineering team.
          </p>
        </div>

        <!-- Filter Tabs (Horizontal Scrollable on Mobile) -->
        <div class="w-full md:w-auto max-w-full flex overflow-x-auto pb-1.5 -mx-1 px-1 scrollbar-none sm:flex-wrap items-center gap-1.5 sm:gap-2 md:shrink-0">
          <button
            v-for="cat in projectCategories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap shadow-2xs',
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25'
                : 'bg-white text-slate-700 hover:text-orange-600 hover:bg-orange-50/50 border border-slate-200'
            ]"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Case Studies Grid (All 9 Real Client Projects) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        
        <div 
          v-for="study in filteredStudies" 
          :key="study.id"
          class="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-300 hover:shadow-orange-500/10 hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
          @click="openModal(study)"
        >
          <div>
            <!-- Real Screenshot Thumbnail Visual -->
            <div class="relative aspect-[16/10] overflow-hidden bg-slate-950">
              <img 
                :src="study.image" 
                :alt="study.title"
                class="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 filter contrast-[1.02]"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
              
              <!-- Tag badge: Industry -->
              <div class="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-mono uppercase tracking-wider text-slate-900 font-bold shadow-xs">
                {{ study.industry }}
              </div>

              <!-- Live Website Pill Badge -->
              <a
                :href="study.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                @click.stop
                class="absolute top-3 right-3 px-2 py-1 rounded-lg bg-slate-900/90 hover:bg-orange-600 text-white text-[10px] font-mono font-bold flex items-center gap-1 shadow-md transition-colors"
                title="Visit Live Website"
              >
                <span>Live Site</span>
                <ExternalLink class="w-3 h-3 text-orange-300" />
              </a>

              <!-- Quick Dossier CTA badge -->
              <div class="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-slate-900/90 text-white text-[11px] font-heading font-bold flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                <span>Case Dossier</span>
                <ArrowUpRight class="w-3 h-3 text-brand-400" />
              </div>

              <!-- Key Metric pill on image -->
              <div class="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-orange-500/90 text-white text-[10px] font-mono font-bold backdrop-blur-xs">
                {{ study.stat }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-5 sm:p-6 space-y-3">
              <div class="space-y-1">
                <div class="flex items-center justify-between gap-2">
                  <span class="text-[11px] font-mono font-bold text-brand-600 uppercase tracking-wider block">
                    {{ study.subtitle }}
                  </span>
                </div>
                <h3 class="text-base sm:text-lg font-heading font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
                  {{ study.title }}
                </h3>
              </div>

              <p class="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed line-clamp-2">
                {{ study.description }}
              </p>

              <!-- Vivek's Guidance Highlight Note -->
              <div class="p-2.5 rounded-xl bg-orange-50/70 border border-orange-100 text-[11px] text-slate-700 font-sans leading-relaxed">
                <span class="font-bold text-orange-800 font-mono text-[10px] uppercase tracking-wide block mb-0.5">Vivek’s Technical Guidance:</span>
                {{ study.guidance }}
              </div>

              <!-- Tags -->
              <div class="flex flex-wrap gap-1.5 pt-1">
                <span 
                  v-for="tag in study.tags.slice(0, 3)" 
                  :key="tag"
                  class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] sm:text-[11px] font-mono font-semibold"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Bottom Metric & Action Bar -->
          <div class="px-5 sm:px-6 py-3.5 bg-gradient-to-r from-orange-50/50 via-slate-50 to-orange-50/30 border-t border-slate-100 flex items-center justify-between gap-2">
            <a
              :href="study.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              @click.stop
              class="text-xs font-mono font-bold text-slate-600 hover:text-orange-600 flex items-center gap-1 transition-colors cursor-pointer shrink-0 truncate max-w-[150px]"
            >
              <Globe class="w-3 h-3 text-orange-500 shrink-0" />
              <span class="truncate">{{ study.liveUrl.replace('https://', '').replace(/\/$/, '') }}</span>
            </a>

            <button 
              class="text-xs font-heading font-bold text-slate-900 group-hover:text-orange-600 flex items-center gap-1 transition-colors cursor-pointer shrink-0 whitespace-nowrap"
            >
              <span>View Dossier</span>
              <ArrowRight class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 shrink-0" />
            </button>
          </div>

        </div>

      </div>

      <!-- Bottom Portfolio Teaser Banner with Radiant Midnight Gradient -->
      <div class="mt-10 sm:mt-12 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border border-orange-500/30 shadow-xl shadow-orange-500/5 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
        <div class="space-y-1.5 text-center md:text-left">
          <span class="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold">Client Portfolios &amp; Engineering Record</span>
          <h3 class="text-lg sm:text-xl font-heading font-bold text-white">
            500+ commercial websites and applications built under Vivek Thaper's leadership.
          </h3>
          <p class="text-xs sm:text-sm text-slate-300 font-sans max-w-2xl">
            From high-conversion legal intake engines to multi-location retail platforms, Vivek Thaper guides every architecture from conceptualization to market dominance.
          </p>
        </div>

        <div class="w-full md:w-auto flex items-center justify-center gap-3 shrink-0">
          <router-link 
            to="/case-studies"
            class="btn-primary text-xs w-full sm:w-auto"
          >
            <span>Explore All 9 Case Studies</span>
            <ArrowRight class="w-3.5 h-3.5 text-orange-100 shrink-0" />
          </router-link>
        </div>
      </div>

    </div>

    <!-- Interactive Project Dossier Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div 
          v-if="selectedStudy"
          class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm"
          @click.self="closeModal"
        >
          <div 
            class="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[92dvh] overflow-y-auto border border-slate-200 shadow-2xl relative animate-scale-in"
          >
            <!-- Close Button -->
            <button 
              @click="closeModal"
              class="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900/85 hover:bg-slate-900 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
              aria-label="Close modal"
            >
              <X class="w-4 h-4" />
            </button>

            <!-- Modal Header Image -->
            <div class="relative aspect-[16/10] overflow-hidden bg-slate-950">
              <img 
                :src="selectedStudy.image" 
                :alt="selectedStudy.title"
                class="w-full h-full object-cover object-top"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
              
              <div class="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div class="min-w-0 pr-8 sm:pr-0">
                  <span class="px-2.5 py-0.5 sm:py-1 rounded-md bg-white/90 text-slate-900 font-mono text-[10px] font-bold uppercase tracking-wider inline-block">
                    {{ selectedStudy.industry }}
                  </span>
                  <h3 class="text-base sm:text-2xl font-heading font-extrabold text-white mt-1.5 leading-tight">
                    {{ selectedStudy.title }}
                  </h3>
                </div>
                <div class="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-brand-500 text-white font-mono text-[11px] sm:text-xs font-bold shrink-0 self-start sm:self-auto">
                  {{ selectedStudy.stat }}
                </div>
              </div>
            </div>

            <!-- Modal Body Details -->
            <div class="p-4 sm:p-7 space-y-4 sm:space-y-5">
              
              <!-- Live Site Link Button Strip -->
              <div class="p-3 sm:p-3.5 rounded-xl bg-orange-50/80 border border-orange-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-lg bg-orange-500 text-white flex items-center justify-center shrink-0">
                    <Globe class="w-4 h-4" />
                  </div>
                  <div>
                    <span class="text-[10px] font-mono uppercase tracking-wider text-orange-700 font-bold block">Live Commercial Website</span>
                    <span class="text-xs sm:text-sm font-heading font-bold text-slate-900">{{ selectedStudy.client }}</span>
                  </div>
                </div>
                <a 
                  :href="selectedStudy.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-primary text-xs w-full sm:w-auto justify-center"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink class="w-3.5 h-3.5 ml-1 text-white" />
                </a>
              </div>

              <!-- Challenge & Solution -->
              <div class="space-y-3.5">
                <div class="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 class="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1">
                    The Commercial Challenge
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {{ selectedStudy.challenge }}
                  </p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-xl bg-brand-50/70 border border-brand-200">
                  <h4 class="text-xs font-mono uppercase tracking-wider text-brand-900 font-bold mb-1">
                    The Engineering &amp; Strategic Solution
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                    {{ selectedStudy.solution }}
                  </p>
                </div>

                <!-- Guidance & Technical Leadership -->
                <div class="p-3.5 sm:p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                  <h4 class="text-xs font-mono uppercase tracking-wider text-amber-900 font-bold mb-1">
                    Vivek Thaper's Guidance &amp; Technical Leadership
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                    {{ selectedStudy.guidance }}
                  </p>
                </div>
              </div>

              <!-- Tech Stack & Tags -->
              <div>
                <h4 class="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                  Core Architecture &amp; Deliverables
                </h4>
                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                  <span 
                    v-for="tag in selectedStudy.tags" 
                    :key="tag"
                    class="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 text-slate-800 font-bold border border-slate-200"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Outcome Banner -->
              <div class="p-4 rounded-xl sm:rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span class="text-[10px] font-mono uppercase tracking-widest text-slate-400">Verified Outcome</span>
                  <p class="text-xs sm:text-sm font-heading font-bold text-emerald-400">{{ selectedStudy.outcome }}</p>
                </div>
                <div class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <a
                    :href="selectedStudy.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-secondary text-xs bg-slate-800 hover:bg-slate-700 text-white border-slate-700 shrink-0 w-full sm:w-auto justify-center"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink class="w-3.5 h-3.5 ml-1 text-orange-400" />
                  </a>
                  <router-link 
                    to="/contact" 
                    @click="closeModal"
                    class="btn-primary text-xs shrink-0 w-full sm:w-auto justify-center"
                  >
                    <span>Discuss Similar Build</span>
                    <ArrowRight class="w-3.5 h-3.5 text-orange-100" />
                  </router-link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </Transition>
    </Teleport>

  </section>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { Briefcase, ArrowUpRight, ArrowRight, X, ExternalLink, Globe } from 'lucide-vue-next'
import { projects, projectCategories } from '@/data/projects.js'

const activeCategory = ref('all')
const selectedStudy = ref(null)

const openModal = (study) => {
  selectedStudy.value = study
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedStudy.value = null
  document.body.style.overflow = ''
}

onUnmounted(() => {
  document.body.style.overflow = ''
})

const filteredStudies = computed(() => {
  if (activeCategory.value === 'all') return projects
  return projects.filter(s => s.category === activeCategory.value)
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
.animate-scale-in {
  animation: scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes scaleIn {
  from {
    transform: scale(0.96);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>