<template>
  <section id="cases" class="py-24 relative overflow-hidden bg-slate-50/70 border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 space-y-3">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 font-mono text-[11px] font-semibold tracking-wider uppercase shadow-2xs">
          <Briefcase class="w-3.5 h-3.5 text-amber-600" />
          <span>Selected Case Dossiers</span>
        </span>
        <h2 class="text-3xl sm:text-4xl font-serif font-normal text-slate-900 tracking-tight leading-tight">
          Measurable Commercial Outcomes &amp; Proven Case Histories
        </h2>
        <p class="text-slate-600 text-base leading-relaxed font-sans">
          From multi-million dollar legal practices to enterprise real estate portals and nationwide consumer platforms.
        </p>
      </div>

      <!-- Case Studies Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div 
          v-for="study in caseStudies" 
          :key="study.title"
          class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
        >
          <div>
            <!-- Thumbnail Visual -->
            <div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <img 
                :src="study.image" 
                :alt="study.title"
                class="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 filter contrast-[1.02]"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
              
              <!-- Tag badge -->
              <div class="absolute top-3 left-3 px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-mono uppercase tracking-wider text-slate-900 font-bold shadow-xs">
                {{ study.industry }}
              </div>

              <!-- Metric Highlight Pill -->
              <div class="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-mono font-bold shadow-md">
                {{ study.stat }}
              </div>
            </div>

            <!-- Content Area -->
            <div class="p-6 space-y-3">
              <h3 class="text-lg font-serif font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
                {{ study.title }}
              </h3>
              
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {{ study.description }}
              </p>

              <!-- Key deliverables tags -->
              <div class="pt-2 flex flex-wrap gap-1.5">
                <span 
                  v-for="tag in study.tags" 
                  :key="tag"
                  class="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 text-slate-700 font-medium border border-slate-200/80"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Bottom Action / Key Outcome -->
          <div class="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
            <div class="text-slate-700 font-sans">
              Verified: <strong class="text-slate-950 font-bold">{{ study.outcome }}</strong>
            </div>
            <router-link to="/case-studies" class="p-1 rounded-md text-amber-700 hover:text-amber-900 transition-colors">
              <ArrowUpRight class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </router-link>
          </div>

        </div>

      </div>

      <!-- Bottom Consultation Teaser -->
      <div class="mt-14 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 class="text-sm font-bold text-slate-900">Require an in-depth case briefing for your specific industry?</h4>
          <p class="text-xs sm:text-sm text-slate-600 mt-0.5 font-sans">We maintain extensive private performance dossiers across legal, medical, and franchise sectors.</p>
        </div>
        <router-link 
          to="/contact" 
          class="btn-secondary text-xs shrink-0"
        >
          <span>Request Industry Dossier</span>
          <ArrowRight class="w-3.5 h-3.5 text-amber-700" />
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Briefcase, ArrowUpRight, ArrowRight } from 'lucide-vue-next'

const caseStudies = [
  {
    title: '1-800-ACCIDENT / Tri-State Litigation',
    industry: 'High-Intent Legal',
    stat: '40+ Calls/Day',
    description: 'Engineered a localized organic search and high-intent PPC acquisition framework for New York and Tri-State personal injury litigation.',
    image: '/media/work-vision.webp',
    tags: ['Custom Architecture', 'Geo-Targeted Search', 'Conversion Logic'],
    outcome: '-64% CPA Reduction'
  },
  {
    title: 'Zara Realty / Multi-Family Asset Portfolio',
    industry: 'Real Estate & Housing',
    stat: '50,000+ Units',
    description: 'Designed unified tenant communication portals, automated leasing inquiry workflows, and localized neighborhood visibility across Queens & Long Island.',
    image: '/media/work-progress.webp',
    tags: ['Tenant Web App', 'Workflow Automation', 'Local Brand Authority'],
    outcome: '99.4% Online Payment Adoption'
  },
  {
    title: 'BarberAnywhere / Mobile On-Demand Platform',
    industry: 'Technology & Marketplace',
    stat: '100K+ Bookings',
    description: 'Architected consumer booking flow, geolocation dispatch system, and mobile-first web ecosystem connecting independent stylists with clients nationwide.',
    image: '/media/work-foundation.webp',
    tags: ['Vue Application', 'Real-Time Dispatch', 'Stripe Payment Core'],
    outcome: '4.9 Star Rating Across 12 Cities'
  }
]
</script>
