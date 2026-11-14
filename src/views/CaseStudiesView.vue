<template>
  <div class="pt-20 sm:pt-24 pb-16 bg-white">
    
    <!-- Hero Header with Warm Ambient Glow -->
    <section class="relative py-12 sm:py-16 overflow-hidden bg-gradient-to-b from-orange-50/30 via-amber-50/15 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/90 text-orange-700 font-mono text-[11px] font-bold tracking-wider uppercase shadow-2xs mb-3">
          <Briefcase class="w-3.5 h-3.5 text-orange-600" />
          <span>Case Studies &amp; Performance Record</span>
        </span>
        <h1 class="text-2xl sm:text-4xl lg:text-[46px] font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
          Measurable Commercial Outcomes &amp; <span class="gradient-text-brand">Case Histories</span>
        </h1>
        <p class="mt-3 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-sans">
          Explore how Vivek Thapar’s engineering, search dominance, and conversion logic helped diverse businesses capture market share and drive scalable revenue.
        </p>

        <!-- Industry Filter Buttons (Scrollable on Mobile) -->
        <div class="flex overflow-x-auto pb-1 scrollbar-none sm:flex-wrap items-center justify-start sm:justify-center gap-1.5 sm:gap-2 pt-6">
          <button
            v-for="filter in filters"
            :key="filter.id"
            @click="activeFilter = filter.id"
            :class="[
              'px-3.5 py-1.5 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap shadow-2xs',
              activeFilter === filter.id
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25'
                : 'bg-white text-slate-700 hover:text-orange-600 hover:bg-orange-50/50 border border-slate-200'
            ]"
          >
            {{ filter.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Case Studies Detailed Grid -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div 
            v-for="study in filteredStudies" 
            :key="study.title"
            class="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
          >
            <div>
              <div class="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  :src="study.image" 
                  :alt="study.title"
                  class="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 filter contrast-[1.02]"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none"></div>
                
                <div class="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-mono uppercase tracking-wider text-slate-900 font-bold shadow-xs">
                  {{ study.industry }}
                </div>

                <div class="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-slate-900 text-brand-400 text-xs font-mono font-bold shadow-md border border-slate-800">
                  {{ study.metric }}
                </div>
              </div>

              <div class="p-5 sm:p-6 space-y-3.5">
                <div>
                  <h2 class="text-lg sm:text-xl font-heading font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
                    {{ study.title }}
                  </h2>
                  <p class="text-xs text-brand-600 font-mono font-semibold mt-0.5">{{ study.subtitle }}</p>
                </div>

                <div class="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  <p><strong class="text-slate-900 font-bold">The Challenge:</strong> {{ study.challenge }}</p>
                  <p><strong class="text-slate-900 font-bold">The Solution:</strong> {{ study.solution }}</p>
                </div>

                <div class="pt-2.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                  <span 
                    v-for="tag in study.tags" 
                    :key="tag"
                    class="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono bg-slate-100 text-slate-700 font-semibold border border-slate-200/80"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <div class="px-5 sm:px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs">
              <span class="text-slate-700 font-sans">Outcome: <strong class="text-slate-950 font-bold">{{ study.outcome }}</strong></span>
              <router-link to="/contact" class="p-1.5 rounded-md text-brand-600 hover:text-brand-800 transition-colors">
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

const allCaseStudies = [
  {
    title: '1-800-ACCIDENT Platform',
    subtitle: 'High-Volume Legal Funnel & Telephony Integration',
    industry: 'Legal / Litigation',
    filterCategory: 'legal',
    metric: '+340% Retained Clients',
    outcome: '340% increase in signed retained case volume',
    image: '/media/work-digital-marketing.webp',
    challenge: 'High cost-per-click personal injury ads were suffering 78% mobile bounce rates due to legacy slow forms and fragmented lead qualification.',
    solution: 'Designed and engineered an instant-intake reactive funnel, real-time telephony routing with Twilio, and localized geo-landing pages.',
    tags: ['Next-Gen Funnels', 'Real-Time Routing', 'Geo-Targeting', 'Enterprise Analytics']
  },
  {
    title: 'MetroPCS NYC Regional Hub',
    subtitle: 'Local SEO Dominance & 120+ Store Footprint',
    industry: 'Telecommunications',
    filterCategory: 'retail',
    metric: '120+ Store Citations',
    outcome: '#1 ranking across 4 NYC Boroughs in Google Maps',
    image: '/media/work-collaboration.webp',
    challenge: 'Intense local telecom competition with conflicting store citations and fragmented promotional pricing across 120+ franchise locations.',
    solution: 'Unified localized SEO architecture, automated Google Business Profile API sync, and localized promotional landing page engines.',
    tags: ['Local SEO Architecture', 'Omnichannel Ads', 'Multi-Unit CMS', 'Performance Dashboards']
  },
  {
    title: 'Zara Realty Tenant Portal',
    subtitle: 'Enterprise Property & Maintenance Engine',
    industry: 'Commercial Real Estate',
    filterCategory: 'realestate',
    metric: '4,500+ Units Managed',
    outcome: '99.4% on-time digital rent payments & ticket resolution',
    image: '/media/work-analytics.webp',
    challenge: 'Manual maintenance tickets and paper checks across 4,500+ apartment units causing administrative backlogs and tenant frustration.',
    solution: 'Constructed custom centralized tenant portal, real-time ticket escalation logic, and automated rent collection system.',
    tags: ['Tenant Web App', 'Workflow Automation', 'Local Authority', 'Stripe Core']
  },
  {
    title: 'BarberAnywhere Mobile Platform',
    subtitle: 'Two-Sided On-Demand Grooming Marketplace',
    industry: 'Mobile Marketplace',
    filterCategory: 'tech',
    metric: '100K+ Completed Bookings',
    outcome: 'Full iOS, Android & Reactive Web Ecosystem',
    image: '/media/work-creativity.webp',
    challenge: 'Creating a seamless two-sided marketplace connecting verified barbers with clients needing on-demand visits.',
    solution: 'Full mobile application engineering, GPS dispatching algorithms, calendar synchronization, and Stripe cashless checkout.',
    tags: ['Vue Application', 'GPS Dispatch', 'Stripe Payments', 'Real-Time Sync']
  },
  {
    title: 'MirchProperty Search Engine',
    subtitle: 'High-Frequency Real Estate MLS Sync',
    industry: 'PropTech Ecosystem',
    filterCategory: 'realestate',
    metric: 'Sub-Second MLS Query',
    outcome: '42,000+ monthly active property searches',
    image: '/media/work-innovation.webp',
    challenge: 'Slow IDX property feeds causing high bounce rates and lost homebuyer inquiries.',
    solution: 'High-speed reactive Vue search architecture, automated valuation estimators, and direct licensed broker handoffs.',
    tags: ['MLS / IDX Sync', 'Interactive Map', 'Lead Routing', 'High Speed UI']
  },
  {
    title: 'Web3 & RWA Tokenization Hub',
    subtitle: 'Institutional Asset Tokenization & Dashboard',
    industry: 'FinTech & Blockchain',
    filterCategory: 'tech',
    metric: '$15M+ Volume Processed',
    outcome: 'Frictionless non-custodial onboarding flow',
    image: '/media/work-transformation.webp',
    challenge: 'Complex crypto wallet onboarding scaring off non-technical investors.',
    solution: 'Intuitive modern UI/UX with social login options, audited smart contract interactions, and real-time portfolio dashboards.',
    tags: ['Web3 UX', 'Smart Contracts', 'RWA Tokenization', 'Clean Security']
  }
]

const filteredStudies = computed(() => {
  if (activeFilter.value === 'all') return allCaseStudies
  return allCaseStudies.filter(s => s.filterCategory === activeFilter.value)
})
</script>