<template>
  <section id="cases" class="py-24 relative overflow-hidden bg-[#0c0d10] border-t border-white/[0.06]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 space-y-3">
        <span class="eyebrow-label">
          <Briefcase class="w-3.5 h-3.5" />
          <span>Selected Case Dossiers</span>
        </span>
        <h2 class="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight leading-tight">
          Measurable Commercial Outcomes &amp; Proven Case Histories
        </h2>
        <p class="text-neutral-400 text-base leading-relaxed font-sans">
          From multi-million dollar legal practices to enterprise real estate portals and nationwide consumer platforms.
        </p>
      </div>

      <!-- Case Studies Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div 
          v-for="study in caseStudies" 
          :key="study.title"
          class="card-architectural overflow-hidden flex flex-col justify-between group"
        >
          <div>
            <!-- Thumbnail Visual -->
            <div class="relative aspect-[4/3] overflow-hidden bg-[#090a0d]">
              <img 
                :src="study.image" 
                :alt="study.title"
                class="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 filter contrast-[1.02]"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent pointer-events-none"></div>
              
              <!-- Tag badge -->
              <div class="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0c0d10]/90 backdrop-blur-md border border-white/[0.1] text-[10px] font-mono uppercase tracking-wider text-[#c59b63]">
                {{ study.industry }}
              </div>

              <!-- Metric Highlight Pill -->
              <div class="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-[#c59b63] text-[#0c0d10] text-xs font-mono font-bold">
                {{ study.stat }}
              </div>
            </div>

            <!-- Content Area -->
            <div class="p-6 space-y-3">
              <h3 class="text-lg font-serif text-white group-hover:text-[#c59b63] transition-colors leading-snug">
                {{ study.title }}
              </h3>
              
              <p class="text-xs text-neutral-400 leading-relaxed font-sans">
                {{ study.description }}
              </p>

              <!-- Key deliverables tags -->
              <div class="pt-2 flex flex-wrap gap-1.5">
                <span 
                  v-for="tag in study.tags" 
                  :key="tag"
                  class="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0c0d10] text-neutral-400 border border-white/[0.06]"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Bottom Action / Key Outcome -->
          <div class="px-6 py-4 bg-[#0c0d10] border-t border-white/[0.06] flex items-center justify-between text-xs">
            <div class="text-neutral-400 font-sans">
              Verified: <strong class="text-neutral-200 font-medium">{{ study.outcome }}</strong>
            </div>
            <router-link to="/case-studies" class="p-1 rounded text-[#c59b63] hover:text-white transition-colors">
              <ArrowUpRight class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </router-link>
          </div>

        </div>

      </div>

      <!-- Bottom Consultation Teaser -->
      <div class="mt-14 p-6 rounded-xl card-architectural flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 class="text-sm font-semibold text-white">Require an in-depth case briefing for your specific industry?</h4>
          <p class="text-xs text-neutral-400 mt-0.5 font-sans">We maintain extensive private performance dossiers across legal, medical, and franchise sectors.</p>
        </div>
        <router-link 
          to="/contact" 
          class="btn-secondary text-xs shrink-0"
        >
          <span>Request Industry Dossier</span>
          <ArrowRight class="w-3.5 h-3.5 text-[#c59b63]" />
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
