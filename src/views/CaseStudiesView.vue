<template>
  <div class="pt-28 pb-20 bg-[#0c0d10]">
    
    <!-- Hero Header -->
    <section class="relative py-16 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
        <span class="eyebrow-label mb-4">
          <Briefcase class="w-3.5 h-3.5" />
          <span>Case Studies &amp; Performance Record</span>
        </span>
        <h1 class="text-3xl sm:text-5xl lg:text-[48px] font-serif font-normal text-white tracking-tight leading-tight">
          Measurable Commercial Outcomes &amp; Case Histories
        </h1>
        <p class="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
          Explore how Vivek Thapar’s engineering, search dominance, and conversion logic helped diverse businesses capture market share and drive scalable revenue.
        </p>

        <!-- Industry Filter Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-2 pt-8">
          <button
            v-for="filter in filters"
            :key="filter.id"
            @click="activeFilter = filter.id"
            :class="[
              'px-4 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer',
              activeFilter === filter.id
                ? 'bg-[#c59b63] text-[#0c0d10] font-semibold'
                : 'bg-[#12141a] text-neutral-400 hover:text-white border border-white/[0.08]'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Case Studies Detailed Grid -->
    <section class="py-12 border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="study in filteredStudies" 
            :key="study.title"
            class="card-architectural overflow-hidden flex flex-col justify-between group"
          >
            <div>
              <div class="relative aspect-[4/3] overflow-hidden bg-[#090a0d]">
                <img 
                  :src="study.image" 
                  :alt="study.title"
                  class="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 filter contrast-[1.02]"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent pointer-events-none"></div>
                
                <div class="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0c0d10]/90 backdrop-blur-md border border-white/[0.1] text-[10px] font-mono uppercase tracking-wider text-[#c59b63]">
                  {{ study.industry }}
                </div>

                <div class="absolute bottom-3 right-3 px-3 py-1 rounded-md bg-[#c59b63] text-[#0c0d10] text-xs font-mono font-bold">
                  {{ study.metric }}
                </div>
              </div>

              <div class="p-6 space-y-4">
                <div>
                  <h2 class="text-xl font-serif text-white group-hover:text-[#c59b63] transition-colors leading-snug">
                    {{ study.title }}
                  </h2>
                  <p class="text-xs text-[#c59b63] font-mono mt-0.5">{{ study.subtitle }}</p>
                </div>

                <div class="space-y-2 text-xs text-neutral-400 leading-relaxed font-sans">
                  <p><strong class="text-neutral-200">The Challenge:</strong> {{ study.challenge }}</p>
                  <p><strong class="text-neutral-200">The Solution:</strong> {{ study.solution }}</p>
                </div>

                <div class="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
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

            <div class="px-6 py-4 bg-[#0c0d10] border-t border-white/[0.06] flex items-center justify-between text-xs">
              <span class="text-neutral-300 font-medium">Outcome: {{ study.outcome }}</span>
              <router-link to="/contact" class="p-1 rounded text-[#c59b63] hover:text-white transition-colors">
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
