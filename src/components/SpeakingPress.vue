<template>
  <section id="speaking" class="py-14 sm:py-16 md:py-24 relative overflow-hidden bg-white border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 text-red-700 font-mono text-[11px] font-bold tracking-wider uppercase shadow-2xs">
          <Mic class="w-3.5 h-3.5 text-red-500" />
          <span>Keynotes &amp; Industry Engagements</span>
        </span>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 tracking-normal leading-[1.3] sm:leading-[1.32] lg:leading-[1.35]">
          Keynote Addresses, <span class="gradient-text-brand">Masterclasses &amp; Strategic Panels</span>
        </h2>
        <p class="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-sans">
          Delivering practical, high-value presentations on entrepreneurship, project management, digital marketing, and civic leadership.
        </p>
      </div>

      <!-- Main Grid: Keynote Photo & Topics -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 sm:mb-16">
        
        <!-- Keynote Stage Photo (5 cols) -->
        <div class="lg:col-span-5 relative flex justify-center">
          <div class="w-full max-w-sm sm:max-w-md bg-gradient-to-br from-slate-50 via-red-50/20 to-amber-50/30 border-2 border-red-200/80 p-3 sm:p-3.5 rounded-3xl shadow-xl hover:shadow-red-500/10 transition-all">
            <div class="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100">
              <img 
                src="/media/vivek-thapar-keynote.webp" 
                alt="Vivek Thapar delivering keynote at NYC conference"
                class="w-full h-full object-cover object-top filter contrast-[1.03]"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

              <div class="absolute bottom-3 inset-x-3 p-3 sm:p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-red-200 shadow-md">
                <span class="text-[10px] font-mono uppercase tracking-wider text-red-600 block mb-0.5 font-bold">Live Stage Appearance</span>
                <p class="text-xs font-heading font-bold text-slate-900">NYC Tech &amp; Business Summits</p>
                <p class="text-[11px] text-slate-600">Keynotes, university masterclasses, and executive roundtables</p>
              </div>
            </div>

            <!-- Caption below stage photo -->
            <div class="mt-3 px-2 py-0.5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600 font-mono">
              <span class="font-bold text-slate-800">Keynote Speaker &amp; Panelist</span>
              <span class="text-red-600 font-semibold">Available Worldwide</span>
            </div>
          </div>
        </div>

        <!-- Topics Accordion & Details (7 cols) -->
        <div class="lg:col-span-7 space-y-3.5 sm:space-y-4">
          <div class="mb-2">
            <h3 class="text-lg sm:text-xl font-heading font-bold text-slate-900">Signature Keynote Presentations</h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-1 font-sans">Tailored for corporate conferences, university panels, and executive leadership retreats.</p>
          </div>

          <div 
            v-for="(topic, idx) in topics" 
            :key="topic.title"
            class="border rounded-2xl p-4 sm:p-5 cursor-pointer transition-all shadow-2xs"
            :class="activeTopic === idx ? 'bg-gradient-to-r from-red-50/50 via-white to-amber-50/30 border-red-400 shadow-md' : 'bg-slate-50/70 border-slate-200 hover:border-red-300 hover:bg-red-50/20'"
            @click="activeTopic = activeTopic === idx ? -1 : idx"
          >
            <div class="flex items-center justify-between gap-3">
              <div class="flex items-center gap-3 min-w-0">
                <span class="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0" :class="activeTopic === idx ? 'bg-red-500 text-white' : 'bg-red-100 text-red-700'">{{ topic.num }}</span>
                <h4 class="text-sm sm:text-base font-heading font-bold text-slate-900 leading-snug">{{ topic.title }}</h4>
              </div>
              <ChevronDown 
                class="w-4 h-4 shrink-0 transition-transform duration-200"
                :class="activeTopic === idx ? 'rotate-180 text-red-600' : 'text-slate-400'"
              />
            </div>

            <div v-if="activeTopic === idx" class="mt-3 pt-3 border-t border-red-100 space-y-3">
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">{{ topic.desc }}</p>
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <div class="text-[11px] font-mono text-slate-500 font-semibold">
                  <span class="text-red-600 font-bold">Audience:</span>
                  <span class="text-slate-800 ml-1">{{ topic.target }}</span>
                </div>
                <router-link 
                  to="/contact" 
                  @click.stop
                  class="btn-primary py-2 px-3.5 text-xs font-bold font-heading shrink-0 shadow-2xs w-full sm:w-auto"
                >
                  <span>Schedule Call</span>
                  <ArrowRight class="w-3.5 h-3.5 shrink-0" />
                </router-link>
              </div>
            </div>
          </div>

          <div class="pt-3 sm:pt-4">
            <router-link 
              to="/speaking" 
              class="btn-secondary text-xs w-full sm:w-auto"
            >
              <span>View All Speaking Topics &amp; Formats</span>
              <ArrowRight class="w-3.5 h-3.5 text-red-600 shrink-0" />
            </router-link>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Mic, ChevronDown, ArrowRight } from 'lucide-vue-next'

const activeTopic = ref(0)

const topics = [
  {
    num: '01',
    title: 'Digital Marketing Strategy & Local Search Supremacy',
    desc: 'How NYC businesses capture market share through high-intent Google Maps rankings, consumer behavior psychology, and conversion funnels. Insights from 20+ years directing agency campaigns.',
    target: 'Business Owners, CMOs, Agency Leaders'
  },
  {
    num: '02',
    title: 'Picking The Perfect Project Manager: Execution Over Theory',
    desc: 'Why great ideas fail without relentless logic planning, if-this-then-that dependency flowcharting, and an obsessive commitment to on-time milestone delivery.',
    target: 'Product Directors, Project Managers, Startup Teams'
  },
  {
    num: '03',
    title: 'Bootstrapping a 20-Year Agency in Queens, NYC',
    desc: 'Unfiltered, battle-tested lessons on client retention, operational solvency, weathering macroeconomic shocks, and leading high-performing teams without venture capital.',
    target: 'Founders, Entrepreneurs, Business Students'
  },
  {
    num: '04',
    title: 'Civic Responsibility & Youth Mentorship',
    desc: '“You make a living by what you get. You make a life by what you give.” Why local neighborhood involvement, youth mentorship, and public space preservation are vital civic duties.',
    target: 'Community Summits, Non-Profit Boards, Civic Forums'
  }
]
</script>
