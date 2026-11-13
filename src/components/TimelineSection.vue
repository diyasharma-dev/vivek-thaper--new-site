<template>
  <section id="timeline" class="py-24 relative overflow-hidden bg-white border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-16 space-y-3">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-mono text-[11px] font-semibold tracking-wider uppercase shadow-2xs">
          <Clock class="w-3.5 h-3.5 text-amber-600" />
          <span>Chronological Milestones</span>
        </span>
        <h2 class="text-3xl sm:text-4xl font-serif font-normal text-slate-900 tracking-tight leading-tight">
          Two Decades of Continuous Evolution &amp; Execution
        </h2>
        <p class="text-slate-600 text-base leading-relaxed font-sans">
          From a solo web developer in Queens to an acclaimed NYC agency founder, advisor, and keynote speaker.
        </p>
      </div>

      <!-- Timeline Vertical Track -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Central Line -->
        <div class="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 sm:-translate-x-1/2"></div>

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
            <div class="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-slate-900 shadow-md flex items-center justify-center z-10 mt-1">
              <div class="w-2.5 h-2.5 rounded-full bg-amber-600"></div>
            </div>

            <!-- Content Card -->
            <div class="ml-12 sm:ml-0 sm:w-1/2 px-2 sm:px-6">
              <div class="card-architectural p-6 hover:-translate-y-0.5">
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/80">
                    {{ item.year }}
                  </span>
                  <span class="text-slate-400">·</span>
                  <span class="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">{{ item.tag }}</span>
                </div>

                <h3 class="text-base font-serif font-bold text-slate-900 mb-2">{{ item.title }}</h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">{{ item.description }}</p>

                <div class="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500 font-semibold">
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
    tag: 'Founding',
    title: 'Mirch Media Founded in Queens, NYC',
    description: 'Vivek establishes Mirch Media as an independent web engineering practice with a commitment to transparent delivery for local and regional businesses.',
    metric: 'Milestone 01 · 100% Bootstrap DNA'
  },
  {
    year: '2011',
    tag: 'Enterprise Expansion',
    title: 'Scaling Into Multi-Location Healthcare & Law',
    description: 'Expands into high-stakes industries, building specialized acquisition funnels and custom search architectures for major regional practices.',
    metric: 'Milestone 02 · 100+ Systems Deployed'
  },
  {
    year: '2016',
    tag: 'Custom SaaS & Portals',
    title: 'Architecting Enterprise Web Applications',
    description: 'Transitions agency focus toward bespoke reactive software development, building tenant portals and real-time dispatch systems handling millions in GMV.',
    metric: 'Milestone 03 · 250+ Commercial Clients'
  },
  {
    year: '2020',
    tag: 'Civic Directorate',
    title: 'Assuming Presidency of Underbridge Dog Run & IND Board',
    description: 'Formalizes civic commitments, partnering with NYC Parks Department for urban space upkeep and leading fraternal scholarship initiatives nationwide.',
    metric: 'Milestone 04 · Civic Leadership & Mentorship'
  },
  {
    year: '2024',
    tag: 'Generative Engine Optimization',
    title: 'Pioneering AI Search & Intent Architecture',
    description: 'Helps enterprises navigate generative engine optimization (GEO), LLM search indexing, and modern AI automation workflows.',
    metric: 'Milestone 05 · Next-Gen Search Leadership'
  },
  {
    year: 'Present',
    tag: '20+ Year Legacy',
    title: 'Direct Senior Advisory & Strategic Tech Direction',
    description: 'Actively partnering with ambitious founders, business owners, and corporate boards seeking direct accountability and verified market growth.',
    metric: 'Milestone 06 · 500+ Projects Completed'
  }
]
</script>
