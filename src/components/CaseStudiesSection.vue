<template>
  <section id="cases" class="py-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold">
          <Briefcase class="w-3.5 h-3.5" />
          <span>Case Studies &amp; Proven Impact</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
          Real Results For <span class="gold-gradient-text">Real Enterprises</span>
        </h2>
        <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
          From multimillion-dollar legal practices to hyperlocal retail and venture-backed mobile platforms.
        </p>
      </div>

      <!-- Case Studies Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div 
          v-for="study in caseStudies" 
          :key="study.title"
          class="rounded-3xl overflow-hidden glass-panel glass-panel-hover flex flex-col justify-between group border border-slate-700/60"
        >
          <div>
            <!-- Thumbnail Visual: aspect-[4/3] perfectly preserves 1:1 square artwork without chopping top/bottom -->
            <div class="relative aspect-[4/3] overflow-hidden bg-dark-950">
              <img 
                :src="study.image" 
                :alt="study.title"
                class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent"></div>
              
              <!-- Tag badge -->
              <div class="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-dark-950/80 backdrop-blur-md border border-slate-700 text-[10px] font-bold uppercase tracking-wider text-brand-300">
                {{ study.industry }}
              </div>

              <!-- Metric Highlight Pill -->
              <div class="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-brand-500 text-dark-950 text-xs font-black shadow-lg">
                {{ study.stat }}
              </div>
            </div>

            <!-- Content Area -->
            <div class="p-6 space-y-3">
              <h3 class="text-lg font-bold text-white font-display group-hover:text-brand-300 transition-colors">
                {{ study.title }}
              </h3>
              
              <p class="text-xs text-slate-300 leading-relaxed">
                {{ study.description }}
              </p>

              <!-- Key deliverables tags -->
              <div class="pt-3 flex flex-wrap gap-1.5">
                <span 
                  v-for="tag in study.tags" 
                  :key="tag"
                  class="px-2 py-0.5 rounded text-[10px] font-medium bg-dark-950 text-slate-400 border border-slate-800"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Bottom Action / Key Outcome -->
          <div class="px-6 py-4 bg-dark-950/60 border-t border-slate-800/80 flex items-center justify-between">
            <div class="text-[11px] text-slate-400">
              Key Outcome: <strong class="text-white">{{ study.outcome }}</strong>
            </div>
            <router-link to="/case-studies" class="p-1 rounded text-brand-400 hover:text-white">
              <ArrowUpRight class="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </router-link>
          </div>

        </div>

      </div>

      <!-- Bottom Consultation Teaser -->
      <div class="mt-16 text-center">
        <p class="text-sm text-slate-400 mb-4">Want to see a customized case study relevant to your specific sector?</p>
        <router-link 
          to="/contact" 
          class="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-brand-500/50 transition-all"
        >
          <span>Request Industry Strategy Briefing</span>
          <ArrowRight class="w-4 h-4 text-brand-400" />
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Briefcase, ArrowUpRight, ArrowRight } from 'lucide-vue-next'

const caseStudies = [
  {
    title: '1-800-ACCIDENT',
    industry: 'Personal Injury Law',
    stat: '40+ Calls / Day',
    image: '/media/work-vision.webp',
    description: 'High-intent legal client acquisition with bilingual intake funnels and aggressive Google 3-pack local search dominance across the Tri-State area.',
    tags: ['Bilingual Intake', 'Google 3-Pack', 'PPC Optimization'],
    outcome: '69% Lower Cost Per Acquisition'
  },
  {
    title: 'MetroPCS Hyperlocal',
    industry: 'Telecommunications',
    stat: '+340% Foot Traffic',
    image: '/media/work-progress.webp',
    description: 'Hyperlocal retail customer acquisition campaigns for multi-unit retail locations in Massachusetts and New York, turning digital impressions into verified store visits.',
    tags: ['Geofencing', 'Retail Traffic', 'Promo Architecture'],
    outcome: 'Dominant regional sales branch'
  },
  {
    title: 'Zara Realty Ops',
    industry: 'Property Management',
    stat: '95%+ Satisfaction',
    image: '/media/work-foundation.webp',
    description: 'Comprehensive digital infrastructure for enterprise property operations, tenant portal integration, and centralized reputation management across NYC.',
    tags: ['Tenant Portal', 'Operations UI', 'Reputation Mgmt'],
    outcome: 'Automated 1,000+ monthly requests'
  },
  {
    title: 'BarberAnywhere App',
    industry: 'Mobile Marketplace',
    stat: 'Thousands of Bookings',
    image: '/media/work-creativity.webp',
    description: 'The "Uber for Barbers": complete end-to-end iOS and Android mobile app architecture, live geolocation dispatching, and secure cashless in-app payments.',
    tags: ['iOS & Android', 'Geo-Dispatch', 'Stripe Payments'],
    outcome: 'Full on-demand mobile platform'
  },
  {
    title: 'MirchProperty Ecosystem',
    industry: 'Real Estate & PropTech',
    stat: 'Sub-Second MLS Sync',
    image: '/media/work-innovation.webp',
    description: 'Complete high-performance real estate portal with real-time MLS/IDX synchronization, interactive neighborhood map discovery, and automated buyer routing.',
    tags: ['MLS / IDX Sync', 'Interactive Maps', 'Fast Search'],
    outcome: 'Seamless agent lead pipeline'
  },
  {
    title: 'Web3 & RWA Tokenization',
    industry: 'FinTech & Blockchain',
    stat: '$15M+ Volume',
    image: '/media/work-transformation.webp',
    description: 'User-friendly interfaces for decentralized finance exchanges, NFT marketplaces, and real-world asset (RWA) tokenization platforms with audited security.',
    tags: ['Web3 UX', 'Smart Contracts', 'DeFi Onboarding'],
    outcome: 'Frictionless non-custodial onboarding'
  }
]
</script>
