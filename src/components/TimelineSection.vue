<template>
  <section id="timeline" class="py-24 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200/80">
    <!-- Ambient Glow -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-orange-400/5 via-amber-300/5 to-blue-400/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-16 space-y-3">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 text-orange-700 font-mono text-[11px] font-bold tracking-wider uppercase shadow-2xs">
          <Clock class="w-3.5 h-3.5 text-orange-500" />
          <span>Chronological Milestones</span>
        </span>
        <h2 class="text-3xl sm:text-4xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
          Two Decades of Continuous <span class="gradient-text-brand">Evolution &amp; Execution</span>
        </h2>
        <p class="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
          From launching web solutions in Queens to building Mirch Media, managing cross-functional teams, and advising high-growth brands.
        </p>
      </div>

      <!-- Timeline Vertical Track -->
      <div class="relative max-w-4xl mx-auto">
        <!-- Central Line with Gradient Accent -->
        <div class="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-400 via-amber-400 to-slate-200 sm:-translate-x-1/2"></div>

        <div class="space-y-12">
          
          <div 
            v-for="(item, idx) in milestones" 
            :key="item.year"
            :class="[
              'relative flex flex-col sm:flex-row items-start gap-8',
              idx % 2 === 0 ? 'sm:flex-row-reverse text-left' : 'text-left'
            ]"
          >
            <!-- Timeline Pin / Dot with Fiery Glow -->
            <div class="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-orange-500 shadow-md shadow-orange-500/20 flex items-center justify-center z-10 mt-1">
              <div class="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500"></div>
            </div>

            <!-- Content Card -->
            <div class="ml-12 sm:ml-0 sm:w-1/2 px-2 sm:px-6">
              <div class="card-architectural p-6 hover:-translate-y-1 hover:border-orange-300 transition-all duration-300">
                <div class="flex items-center gap-2 mb-2">
                  <span class="text-xs font-mono font-bold text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded-md border border-orange-200 shadow-2xs">
                    {{ item.year }}
                  </span>
                  <span class="text-slate-300">·</span>
                  <span class="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">{{ item.tag }}</span>
                </div>

                <h3 class="text-base font-heading font-bold text-slate-900 mb-2">{{ item.title }}</h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">{{ item.description }}</p>

                <div class="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-orange-600 font-bold flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
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
    tag: 'ORIGIN / NYC',
    title: 'Mirch Media Established in Queens',
    description: 'Armed with a laptop and dial-up connection, Vivek launches Mirch Media in Forest Hills to engineer high-speed websites for local NYC practices.',
    metric: 'Milestone 01 · First 20 Clients'
  },
  {
    year: '2010',
    tag: 'EXPANSION / SEARCH',
    title: 'Full-Service Digital Marketing Pivot',
    description: 'Expanded beyond custom coding into high-intent search acquisition, Google Ads PPC management, and conversion rate optimization across the Tri-State.',
    metric: 'Milestone 02 · 100+ Platforms Delivered'
  },
  {
    year: '2015',
    tag: 'PORTFOLIO GROWTH',
    title: 'Enterprise Legal & Healthcare Dominance',
    description: 'Secured flagship multi-year engagements including 1-800-ACCIDENT and regional healthcare networks, pioneering localized 3-pack search frameworks.',
    metric: 'Milestone 03 · 40+ Qualified Calls / Day'
  },
  {
    year: '2020',
    tag: 'RESILIENCE & MOBILE',
    title: 'Pandemic Digital Transformation & Venture Builds',
    description: 'Engineered cloud tenant portals for Zara Realty (50k+ units) and launched BarberAnywhere on-demand marketplace on iOS & Android.',
    metric: 'Milestone 04 · Enterprise Scale'
  },
  {
    year: 'Present',
    tag: 'AI & EXPANSION',
    title: 'GEO & Generative Search Architecture',
    description: 'Pioneering Generative Engine Optimization (GEO) ensuring clients dominate AI-assisted search across ChatGPT, Claude, and Google Gemini.',
    metric: 'Milestone 05 · Next-Gen AI Dominance'
  }
]
</script>
