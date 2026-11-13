<template>
  <div class="pt-28 pb-20 bg-slate-50/50">
    
    <!-- Hero Header -->
    <section class="relative py-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 font-mono text-[11px] font-semibold tracking-wider uppercase shadow-2xs mb-4">
          <Briefcase class="w-3.5 h-3.5 text-amber-600" />
          <span>Case Studies &amp; Performance Record</span>
        </span>
        <h1 class="text-3xl sm:text-5xl lg:text-[48px] font-serif font-normal text-slate-900 tracking-tight leading-tight">
          Measurable Commercial Outcomes &amp; Case Histories
        </h1>
        <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
          Explore how Vivek Thapar’s engineering, search dominance, and conversion logic helped diverse businesses capture market share and drive scalable revenue.
        </p>

        <!-- Industry Filter Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-2 pt-8">
          <button
            v-for="filter in filters"
            :key="filter.id"
            @click="activeFilter = filter.id"
            :class="[
              'px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-2xs',
              activeFilter === filter.id
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:text-black border border-slate-200 hover:bg-slate-50'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Case Studies Detailed Grid -->
    <section class="py-16 bg-white border-b border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="study in filteredStudies" 
            :key="study.title"
            class="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
          >
            <div>
              <div class="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img 
                  :src="study.image" 
                  :alt="study.title"
                  class="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 filter contrast-[1.02]"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
                
                <div class="absolute top-3 left-3 px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-mono uppercase tracking-wider text-slate-900 font-bold shadow-xs">
                  {{ study.industry }}
                </div>

                <div class="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-mono font-bold shadow-md">
                  {{ study.metric }}
                </div>
              </div>

              <div class="p-6 space-y-4">
                <div>
                  <h2 class="text-xl font-serif font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
                    {{ study.title }}
                  </h2>
                  <p class="text-xs text-amber-700 font-mono font-semibold mt-0.5">{{ study.subtitle }}</p>
                </div>

                <div class="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  <p><strong class="text-slate-900 font-bold">The Challenge:</strong> {{ study.challenge }}</p>
                  <p><strong class="text-slate-900 font-bold">The Solution:</strong> {{ study.solution }}</p>
                </div>

                <div class="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
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

            <div class="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
              <span class="text-slate-700 font-sans">Outcome: <strong class="text-slate-950 font-bold">{{ study.outcome }}</strong></span>
              <router-link to="/contact" class="p-1.5 rounded-md text-amber-700 hover:text-amber-900 transition-colors">
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
