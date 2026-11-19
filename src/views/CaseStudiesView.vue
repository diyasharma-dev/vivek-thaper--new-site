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
            v-reveal
            class="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            @click="openModal(study)"
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
                  @click.stop
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
                
                <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5 p-4">
                  <a
                    :href="study.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    @click.stop
                    class="px-3.5 py-2 rounded-xl bg-white text-slate-900 font-heading font-bold text-xs shadow-lg hover:bg-red-50 hover:text-red-600 transition-colors flex items-center gap-1.5"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink class="w-3 h-3" />
                  </a>
                  <button
                    class="px-3.5 py-2 rounded-xl bg-slate-900/90 text-white font-heading font-bold text-xs shadow-lg hover:bg-slate-900 transition-colors flex items-center gap-1.5"
                  >
                    <span>Case Dossier</span>
                    <ArrowUpRight class="w-3 h-3 text-red-400" />
                  </button>
                </div>
              </div>

              <!-- Card Body Content (Compact, uncluttered) -->
              <div class="p-5 sm:p-6 space-y-3">
                <div class="space-y-1">
                  <span class="text-[11px] font-mono font-bold text-red-700 uppercase tracking-wider block">
                    {{ study.industry }}
                  </span>
                  <h2 class="text-lg font-heading font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                    {{ study.title }}
                  </h2>
                  <p class="text-xs text-slate-500 font-medium">
                    {{ study.subtitle }}
                  </p>
                </div>

                <p class="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed line-clamp-2">
                  {{ study.description }}
                </p>

                <!-- Clean Single Deliverable Highlight Chip (replaces 3 bulky stacked boxes) -->
                <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 font-sans leading-relaxed">
                  <span class="font-bold text-slate-900 font-mono text-[10px] uppercase tracking-wide block mb-0.5">Key Deliverable:</span>
                  {{ study.deliverable }}
                </div>

                <!-- Deliverable Tags -->
                <div class="flex flex-wrap gap-1.5 pt-1">
                  <span 
                    v-for="tag in study.tags.slice(0, 3)" 
                    :key="tag"
                    class="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 text-slate-700 font-medium"
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
                @click.stop
                class="inline-flex items-center gap-1.5 font-mono font-bold text-slate-600 hover:text-red-600 transition-colors truncate max-w-[170px]"
              >
                <Globe class="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span class="truncate">{{ study.displayUrl }}</span>
              </a>

              <div class="font-heading font-bold text-slate-900 group-hover:text-red-600 flex items-center gap-1 transition-colors shrink-0">
                <span>View Dossier</span>
                <ArrowRight class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

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
              class="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
              aria-label="Close modal"
            >
              <X class="w-4 h-4" />
            </button>

            <!-- Modal Header Image in Browser Chrome -->
            <div class="relative aspect-[16/10] overflow-hidden bg-slate-950">
              <img 
                :src="selectedStudy.image" 
                :alt="selectedStudy.title"
                class="w-full h-full object-cover object-top"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <div class="absolute bottom-4 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                <span class="px-2.5 py-1 rounded-md bg-white/95 text-slate-900 font-mono text-[10px] font-bold uppercase tracking-wider inline-block">
                  {{ selectedStudy.industry }}
                </span>
                <h3 class="text-xl sm:text-2xl font-heading font-extrabold text-white mt-2 leading-tight">
                  {{ selectedStudy.title }}
                </h3>
                <p class="text-xs text-slate-300 font-sans mt-0.5">{{ selectedStudy.subtitle }}</p>
              </div>
            </div>

            <!-- Modal Body Details -->
            <div class="p-5 sm:p-7 space-y-4 sm:space-y-5">
              
              <!-- Live Site Link Button Strip -->
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div class="flex items-center gap-2.5 min-w-0">
                  <div class="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                    <Globe class="w-4 h-4" />
                  </div>
                  <div class="min-w-0">
                    <span class="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">Live Commercial Website</span>
                    <span class="text-xs sm:text-sm font-heading font-bold text-slate-900 truncate block">{{ selectedStudy.client }}</span>
                  </div>
                </div>
                <a 
                  :href="selectedStudy.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-heading font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 w-full sm:w-auto shrink-0"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink class="w-3.5 h-3.5" />
                </a>
              </div>

              <!-- Challenge & Solution -->
              <div class="space-y-3">
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 class="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1">
                    The Commercial Challenge
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {{ selectedStudy.challenge }}
                  </p>
                </div>

                <div class="p-4 rounded-xl bg-red-50/50 border border-red-200/70">
                  <h4 class="text-xs font-mono uppercase tracking-wider text-red-900 font-bold mb-1">
                    The Engineering &amp; Strategic Solution
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                    {{ selectedStudy.solution }}
                  </p>
                </div>

                <!-- Guidance & Technical Leadership -->
                <div class="p-4 rounded-xl bg-amber-50/40 border border-amber-200/70">
                  <h4 class="text-xs font-mono uppercase tracking-wider text-amber-900 font-bold mb-1">
                    Vivek Thapar's Guidance &amp; Oversight
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                    {{ selectedStudy.guidance }}
                  </p>
                </div>
              </div>

              <!-- Tech Stack & Tags -->
              <div>
                <h4 class="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                  Project Deliverables &amp; Disciplines
                </h4>
                <div class="flex flex-wrap gap-1.5">
                  <span 
                    v-for="tag in selectedStudy.tags" 
                    :key="tag"
                    class="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 text-slate-800 font-medium border border-slate-200"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Modal Footer -->
              <div class="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  :href="selectedStudy.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xs font-mono font-bold text-slate-600 hover:text-red-600 flex items-center gap-1.5 transition-colors"
                >
                  <Globe class="w-3.5 h-3.5 text-slate-400" />
                  <span>{{ selectedStudy.displayUrl }}</span>
                </a>
                <router-link 
                  to="/contact" 
                  @click="closeModal"
                  class="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-xs transition-colors flex items-center justify-center gap-1.5 w-full sm:w-auto"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight class="w-3.5 h-3.5" />
                </router-link>
              </div>

            </div>

          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Client Verification Strip -->
    <ClientsLogoWall />

  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { ExternalLink, Globe, ArrowRight, ArrowUpRight, X } from 'lucide-vue-next'
import ClientsLogoWall from '@/components/ClientsLogoWall.vue'
import { projects, projectCategories } from '@/data/projects.js'

const activeFilter = ref('all')
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
  if (activeFilter.value === 'all') return projects
  return projects.filter(s => s.category === activeFilter.value)
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
  }
}
</style>
