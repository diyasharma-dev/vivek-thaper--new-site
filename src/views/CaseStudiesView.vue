<template>
  <div class="pt-28 pb-20">
    
    <!-- Hero Header -->
    <section class="relative py-16 overflow-hidden">
      <div class="glow-ambient -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-600/15"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold mb-4">
          <Briefcase class="w-3.5 h-3.5" />
          <span>Case Studies &amp; Proven Track Record</span>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          Measurable Impact, <br />
          <span class="gold-gradient-text">Verified Client Results</span>
        </h1>
        <p class="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Explore how Vivek Thapar’s engineering, search dominance, and conversion logic helped diverse businesses capture market share and drive scalable revenue.
        </p>

        <!-- Industry Filter Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-2 pt-8">
          <button
            v-for="filter in filters"
            :key="filter.id"
            @click="activeFilter = filter.id"
            :class="[
              'px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer',
              activeFilter === filter.id
                ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-600/30'
                : 'bg-dark-900 text-slate-400 hover:text-white border border-slate-800'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Case Studies Detailed Grid -->
    <section class="py-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="study in filteredStudies" 
            :key="study.title"
            class="rounded-3xl overflow-hidden glass-panel glass-panel-hover flex flex-col justify-between group border border-slate-700/60"
          >
            <div>
              <!-- aspect-[4/3] preserves square artwork without severe clipping -->
              <div class="relative aspect-[4/3] overflow-hidden bg-dark-950">
                <img 
                  :src="study.image" 
                  :alt="study.title"
                  class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent"></div>
                
                <div class="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-dark-950/80 backdrop-blur-md border border-slate-700 text-[10px] font-bold uppercase tracking-wider text-brand-300">
                  {{ study.industry }}
                </div>

                <div class="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-brand-500 text-dark-950 text-xs font-black shadow-lg">
                  {{ study.metric }}
                </div>
              </div>

              <div class="p-6 space-y-4">
                <div>
                  <h2 class="text-xl font-bold text-white font-display group-hover:text-brand-300 transition-colors">
                    {{ study.title }}
                  </h2>
                  <p class="text-xs text-brand-400 font-semibold mt-0.5">{{ study.subtitle }}</p>
                </div>

                <div class="space-y-2 text-xs text-slate-300 leading-relaxed">
                  <p><strong>The Challenge:</strong> {{ study.challenge }}</p>
                  <p><strong>The Solution:</strong> {{ study.solution }}</p>
                </div>

                <div class="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
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

            <div class="px-6 py-4 bg-dark-950/60 border-t border-slate-800/80 flex items-center justify-between">
              <span class="text-xs font-bold text-white">Verified Result: {{ study.outcome }}</span>
              <router-link to="/contact" class="p-1 rounded text-brand-400 hover:text-white">
                <ArrowUpRight class="w-4 h-4" />
              </router-link>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Client Logo Wall Embed -->
    <ClientsLogoWall />

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Briefcase, ArrowUpRight } from 'lucide-vue-next'
import ClientsLogoWall from '@/components/ClientsLogoWall.vue'

const filters = [
  { id: 'all', label: 'All Case Studies' },
  { id: 'legal', label: 'Legal & Injury' },
  { id: 'retail', label: 'Retail & Telecom' },
  { id: 'realestate', label: 'Real Estate' },
  { id: 'tech', label: 'Tech & Mobile' }
]

const activeFilter = ref('all')

const allStudies = [
  {
    title: '1-800-ACCIDENT',
    subtitle: 'Tri-State Personal Injury Practice',
    category: 'legal',
    industry: 'Legal / Injury Law',
    metric: '40+ Calls / Day',
    outcome: '69% Lower CPA',
    image: '/media/work-vision.webp',
    challenge: 'High cost per click on Google Ads ($150+ per click) with low inquiry qualification and slow response times.',
    solution: 'Designed custom bilingual intake funnel, local 3-pack organic dominance, and automated lead routing with instant call forwarding.',
    tags: ['Bilingual Intake', 'Google 3-Pack', 'Call Automation']
  },
  {
    title: 'MetroPCS Hyperlocal',
    subtitle: 'Multi-Location Retail Franchise',
    category: 'retail',
    industry: 'Telecommunications',
    metric: '+340% Foot Traffic',
    outcome: 'Regional Top Performer',
    image: '/media/work-progress.webp',
    challenge: 'Intense competition from rival carriers and low foot-traffic conversion for retail store locations.',
    solution: 'Engineered geofenced radius campaigns, localized promo landing pages, and automated SMS offer redemption triggers.',
    tags: ['Geofencing', 'Retail Campaigns', 'SMS Offers']
  },
  {
    title: 'Zara Realty Operations',
    subtitle: 'NYC Enterprise Property Management',
    category: 'realestate',
    industry: 'Real Estate Ops',
    metric: '95%+ Satisfaction',
    outcome: '1,000+ Automated Tickets/Mo',
    image: '/media/work-foundation.webp',
    challenge: 'Manual tenant maintenance requests and fragmented communication across hundreds of residential units.',
    solution: 'Constructed custom centralized tenant portal, real-time ticket escalation logic, and brand reputation systems.',
    tags: ['Tenant Portal', 'Operations UI', 'Reputation Mgmt']
  },
  {
    title: 'BarberAnywhere Platform',
    subtitle: 'On-Demand Grooming Marketplace',
    category: 'tech',
    industry: 'Mobile Marketplace',
    metric: 'Thousands of Bookings',
    outcome: 'Full iOS & Android Ecosystem',
    image: '/media/work-creativity.webp',
    challenge: 'Creating a seamless two-sided marketplace connecting verified barbers with clients needing on-demand visits.',
    solution: 'Full mobile application engineering, GPS dispatching algorithms, calendar synchronization, and Stripe cashless checkout.',
    tags: ['iOS & Android', 'Geo-Dispatch', 'Stripe Payments']
  },
  {
    title: 'MirchProperty Portal',
    subtitle: 'Commercial & Residential Search',
    category: 'realestate',
    industry: 'PropTech Ecosystem',
    metric: 'Sub-Second MLS Sync',
    outcome: 'Direct Agent Routing',
    image: '/media/work-innovation.webp',
    challenge: 'Slow IDX property feeds causing high bounce rates and lost homebuyer inquiries.',
    solution: 'High-speed reactive Vue search architecture, automated valuation estimators, and direct licensed broker handoffs.',
    tags: ['MLS / IDX Sync', 'Interactive Map', 'Lead Routing']
  },
  {
    title: 'Web3 & RWA Tokenization',
    subtitle: 'Institutional Asset Platforms',
    category: 'tech',
    industry: 'FinTech & Blockchain',
    metric: '$15M+ Volume',
    outcome: 'Frictionless Non-Custodial UI',
    image: '/media/work-transformation.webp',
    challenge: 'Complex crypto wallet onboarding scaring off non-technical investors.',
    solution: 'Intuitive modern UI/UX with social login options, audited smart contract interactions, and real-time portfolio dashboards.',
    tags: ['Web3 UX', 'Smart Contracts', 'RWA Tokenization']
  }
]

const filteredStudies = computed(() => {
  if (activeFilter.value === 'all') return allStudies
  return allStudies.filter(s => s.category === activeFilter.value)
})
</script>
