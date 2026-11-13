<template>
  <section id="timeline" class="py-24 relative overflow-hidden bg-dark-950 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold">
          <Clock class="w-3.5 h-3.5" />
          <span>The 20-Year Evolution</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
          Two Decades Of <span class="gold-gradient-text">Relentless Execution</span>
        </h2>
        <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
          From a solo web developer in Queens to an acclaimed NYC agency founder, advisor, and keynote speaker.
        </p>
      </div>

      <!-- Timeline Vertical Track -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Central Line -->
        <div class="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 via-brand-600/40 to-slate-800 sm:-translate-x-1/2"></div>

        <div class="space-y-12">
          
          <div 
            v-for="(item, idx) in milestones" 
            :key="item.year"
            :class="[
              'relative flex flex-col sm:flex-row items-start gap-8',
              idx % 2 === 0 ? 'sm:flex-row-reverse text-left' : 'text-left'
            ]"
          >
            <!-- Timeline Pin / Dot -->
            <div class="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-dark-950 border-2 border-brand-400 shadow-lg shadow-brand-500/30 flex items-center justify-center z-10 mt-1">
              <div class="w-2.5 h-2.5 rounded-full bg-brand-400"></div>
            </div>

            <!-- Content Card -->
            <div class="ml-12 sm:ml-0 sm:w-1/2 px-2 sm:px-6">
              <div class="p-6 rounded-2xl glass-panel glass-panel-hover border border-slate-700/70">
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-brand-500/20 text-brand-300 border border-brand-500/30">
                    {{ item.year }}
                  </span>
                  <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">{{ item.tag }}</span>
                </div>

                <h3 class="text-lg font-bold text-white font-display mb-2">{{ item.title }}</h3>
                <p class="text-xs text-slate-300 leading-relaxed">{{ item.description }}</p>

                <div class="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-semibold text-brand-400">
                  {{ item.metric }}
                </div>
              </div>
            </div>

            <!-- Empty Counterpart for spacing on desktop -->
            <div class="hidden sm:block sm:w-1/2"></div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { Clock } from 'lucide-vue-next'

const milestones = [
  {
    year: '2006',
    tag: 'Origin Story',
    title: 'Mirch Media Founded in Queens, NYC',
    description: 'Vivek starts Mirch Media as a one-person freelance web engineering operation with a laptop and a commitment to transparent delivery for local businesses.',
    metric: 'Milestone 01 · 100% Bootstrap & Client-First DNA'
  },
  {
    year: '2010',
    tag: 'Service Expansion',
    title: 'Expanded to Full-Service Performance Marketing',
    description: 'Integrated data-backed SEO, negative-keyword PPC sculpting, and conversion rate optimization into client deliverables.',
    metric: 'Milestone 02 · Full-Service Digital Firm'
  },
  {
    year: '2015',
    tag: 'Enterprise Scale',
    title: 'Multi-Industry Commercial Portfolio Growth',
    description: 'Sustained growth across high-stakes industries including personal injury law, healthcare, telecom, and e-commerce across the Tri-State area.',
    metric: 'Milestone 03 · 200+ Active Clients Serviced'
  },
  {
    year: '2020',
    tag: 'Resilience',
    title: 'Digital Transformation & Pandemic Pivot',
    description: 'Guided dozens of brick-and-mortar retail and service clients through emergency online transitions, cloud ordering, and digital-first operations.',
    metric: 'Milestone 04 · Zero Client Downtime During Crisis'
  },
  {
    year: '2024–2026',
    tag: 'AI Disruption',
    title: 'AI Search (GEO) & Next-Gen Vue Architecture',
    description: 'Leading the frontier of Generative Engine Optimization (GEO), automated lead routing engines, and high-performance custom Vue.js web applications.',
    metric: 'Milestone 05 · 500+ Projects & Global Reach'
  }
]
</script>
