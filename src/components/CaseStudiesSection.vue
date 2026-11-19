<template>
  <section id="work" class="py-20 sm:py-24 md:py-28 relative overflow-hidden scroll-mt-20 border-b border-white/[0.08]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div class="max-w-3xl space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-red-500"></span>
            <span class="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">Client Portfolio</span>
          </div>
          <h2 class="hero-headline text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            Client Websites &amp; Platforms Directed by <span class="gradient-text-brand">Vivek Thapar</span>
          </h2>
          <p class="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
            Explore live commercial platforms, client intake funnels, and responsive web applications engineered for New York and regional businesses.
          </p>
        </div>

        <!-- Filter Segmented Controls -->
        <div class="w-full md:w-auto flex overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none sm:flex-wrap items-center gap-1.5 sm:gap-2 md:shrink-0 bg-white/[0.03] p-1.5 rounded-2xl border border-white/[0.08]">
          <button
            v-for="cat in projectCategories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap',
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-glow-red'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
            ]"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Projects Grid: Sophisticated Dark Browser Window Mockups -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
        
        <div 
          v-for="study in filteredStudies" 
          :key="study.id"
          class="card-glass overflow-hidden flex flex-col justify-between group cursor-pointer hover:-translate-y-1.5 transition-all duration-300"
          @click="openModal(study)"
        >
          <div>
            <!-- Realistic Browser Window Frame Mockup -->
            <div class="bg-[#0b0e18] border-b border-white/[0.08] px-3.5 py-2.5 flex items-center justify-between gap-2 select-none">
              <!-- Window Control Dots -->
              <div class="flex items-center gap-1.5 shrink-0">
                <span class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
              </div>

              <!-- Domain address bar -->
              <div class="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-[11px] font-mono text-slate-300 truncate flex items-center gap-1.5 max-w-[200px]">
                <Globe class="w-3 h-3 text-red-400 shrink-0" />
                <span class="truncate">{{ study.displayUrl }}</span>
              </div>

              <!-- Quick external live site link -->
              <a
                :href="study.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                @click.stop
                class="text-slate-400 hover:text-red-400 transition-colors p-0.5 rounded"
                title="Open live website in new tab"
                aria-label="Open live website"
              >
                <ExternalLink class="w-3.5 h-3.5" />
              </a>
            </div>

            <!-- Screenshot Visual Container -->
            <div class="relative aspect-[16/10] overflow-hidden bg-slate-950">
              <img 
                :src="study.image" 
                :alt="study.title"
                class="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500 filter contrast-[1.03]"
                loading="lazy"
                decoding="async"
              />
              <!-- Subtle gradient overlay on hover only -->
              <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5 p-4 backdrop-blur-xs">
                <a
                  :href="study.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  @click.stop
                  class="px-3.5 py-2 rounded-xl bg-white text-slate-900 font-heading font-bold text-xs shadow-lg hover:bg-red-50 hover:text-red-600 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Visit Website</span>
                  <ExternalLink class="w-3 h-3" />
                </a>
                <button
                  class="px-3.5 py-2 rounded-xl bg-red-600 text-white font-heading font-bold text-xs shadow-lg hover:bg-red-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Case Overview</span>
                  <ArrowUpRight class="w-3 h-3" />
                </button>
              </div>
            </div>

            <!-- Card Body Content -->
            <div class="p-5 sm:p-6 space-y-3.5">
              <div class="space-y-1">
                <span class="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider block">
                  {{ study.industry }}
                </span>
                <h3 class="text-lg font-heading font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                  {{ study.title }}
                </h3>
                <p class="text-xs font-sans text-slate-400 font-medium">
                  {{ study.subtitle }}
                </p>
              </div>

              <p class="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed line-clamp-2">
                {{ study.description }}
              </p>

              <!-- Technical Guidance Highlight -->
              <div class="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-xs text-slate-300 font-sans leading-relaxed">
                <span class="font-bold text-red-400 font-mono text-[10px] uppercase tracking-wide block mb-0.5">Key Deliverable:</span>
                {{ study.deliverable }}
              </div>

              <!-- Tags -->
              <div class="flex flex-wrap gap-1.5 pt-1">
                <span 
                  v-for="tag in study.tags.slice(0, 3)" 
                  :key="tag"
                  class="px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-slate-300 text-[11px] font-mono font-medium"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Bottom Action Bar -->
          <div class="px-5 sm:px-6 py-3.5 bg-white/[0.02] border-t border-white/[0.08] flex items-center justify-between gap-2">
            <a
              :href="study.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              @click.stop
              class="text-xs font-mono font-bold text-slate-400 hover:text-red-400 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 truncate max-w-[170px]"
            >
              <Globe class="w-3.5 h-3.5 text-red-400 shrink-0" />
              <span class="truncate">{{ study.displayUrl }}</span>
            </a>

            <div class="text-xs font-heading font-bold text-white group-hover:text-red-400 flex items-center gap-1 transition-colors">
              <span>View Dossier</span>
              <ArrowRight class="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

        </div>

      </div>

      <!-- Bottom Authentic Portfolio Record Banner -->
      <div class="mt-14 sm:mt-18 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c0f1d] via-[#101426] to-[#0c0f1d] text-white border border-white/10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="absolute -top-24 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="space-y-2 text-center md:text-left relative z-10">
          <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
            <span class="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
            <span>Two Decades of Commercial Web &amp; Digital Execution</span>
          </div>
          <h3 class="text-lg sm:text-xl font-heading font-bold text-white">
            Real commercial websites built with direct founder accountability.
          </h3>
          <p class="text-xs sm:text-sm text-slate-300 font-sans max-w-2xl leading-relaxed">
            From high-conversion legal intake engines to multi-location business platforms, Vivek Thapar guides digital architecture from conceptual logic to production deployment.
          </p>
        </div>

        <div class="w-full md:w-auto flex items-center justify-center gap-3 shrink-0 relative z-10">
          <router-link 
            to="/case-studies"
            class="btn-primary text-xs sm:text-sm w-full sm:w-auto"
          >
            <span>Explore All 9 Projects</span>
            <ArrowRight class="w-4 h-4" />
          </router-link>
        </div>
      </div>

    </div>

    <!-- Interactive Project Dossier Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div 
          v-if="selectedStudy"
          class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
          @click.self="closeModal"
        >
          <div 
            class="bg-[#0b0e1a] rounded-3xl max-w-2xl w-full max-h-[92dvh] overflow-y-auto border border-white/15 shadow-2xl relative animate-scale-in text-white"
          >
            <!-- Close Button -->
            <button 
              @click="closeModal"
              class="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
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
              <div class="absolute inset-0 bg-gradient-to-t from-[#0b0e1a] via-[#0b0e1a]/40 to-transparent"></div>
              
              <div class="absolute bottom-4 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                <span class="px-2.5 py-1 rounded-md bg-red-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider inline-block">
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
              <div class="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div class="flex items-center gap-2.5 min-w-0">
                  <div class="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 border border-red-500/40 flex items-center justify-center shrink-0">
                    <Globe class="w-4 h-4" />
                  </div>
                  <div class="min-w-0">
                    <span class="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Live Commercial Website</span>
                    <span class="text-xs sm:text-sm font-heading font-bold text-white truncate block">{{ selectedStudy.client }}</span>
                  </div>
                </div>
                <a 
                  :href="selectedStudy.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-primary text-xs py-2 px-4 w-full sm:w-auto shrink-0"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink class="w-3.5 h-3.5" />
                </a>
              </div>

              <!-- Challenge & Solution -->
              <div class="space-y-3">
                <div class="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <h4 class="text-xs font-mono uppercase tracking-wider text-red-400 font-bold mb-1">
                    The Commercial Challenge
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {{ selectedStudy.challenge }}
                  </p>
                </div>

                <div class="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <h4 class="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-1">
                    The Engineering &amp; Strategic Solution
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {{ selectedStudy.solution }}
                  </p>
                </div>

                <!-- Guidance & Technical Leadership -->
                <div class="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  <h4 class="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-1">
                    Vivek Thapar's Guidance &amp; Oversight
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                    {{ selectedStudy.guidance }}
                  </p>
                </div>
              </div>

              <!-- Tech Stack & Tags -->
              <div>
                <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Project Deliverables &amp; Disciplines
                </h4>
                <div class="flex flex-wrap gap-1.5">
                  <span 
                    v-for="tag in selectedStudy.tags" 
                    :key="tag"
                    class="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.05] text-slate-300 font-medium border border-white/10"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Modal Footer -->
              <div class="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  :href="selectedStudy.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xs font-mono font-bold text-slate-400 hover:text-red-400 flex items-center gap-1.5 transition-colors"
                >
                  <Globe class="w-3.5 h-3.5 text-red-400" />
                  <span>{{ selectedStudy.displayUrl }}</span>
                </a>
                <router-link 
                  to="/contact" 
                  @click="closeModal"
                  class="btn-primary text-xs py-2 px-4 w-full sm:w-auto"
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

  </section>
</template>

<script setup>
import { ref, computed, onUnmounted } from 'vue'
import { ArrowUpRight, ArrowRight, X, ExternalLink, Globe } from 'lucide-vue-next'
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
