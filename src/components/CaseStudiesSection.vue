<template>
  <section id="work" class="py-14 sm:py-16 md:py-20 relative overflow-hidden bg-slate-50/60 scroll-mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
        <div class="max-w-3xl space-y-2.5 sm:space-y-3">
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/90 text-orange-700 font-mono text-[11px] font-bold tracking-wider uppercase shadow-2xs">
            <Briefcase class="w-3.5 h-3.5 text-orange-600" />
            <span>Featured Portfolio &amp; Case Studies</span>
          </span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
            Flagship Platforms, Web Applications &amp; Commercial Outcomes
          </h2>
          <p class="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-sans">
            Every build is engineered for high performance, verified conversion lift, and enduring market authority.
          </p>
        </div>

        <!-- Filter Tabs (Horizontal Scrollable on Mobile) -->
        <div class="flex overflow-x-auto pb-1 scrollbar-none sm:flex-wrap items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'px-3 sm:px-3.5 py-1.5 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap shadow-2xs',
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25'
                : 'bg-white text-slate-700 hover:text-orange-600 hover:bg-orange-50/50 border border-slate-200'
            ]"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Case Studies Grid (All 6 Flagship Projects) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        
        <div 
          v-for="study in filteredStudies" 
          :key="study.title"
          class="bg-white border border-slate-200/90 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-300 hover:shadow-orange-500/10 hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
          @click="openModal(study)"
        >
          <div>
            <!-- Thumbnail Visual -->
            <div class="relative aspect-[16/10] overflow-hidden bg-slate-100">
              <img 
                :src="study.image" 
                :alt="study.title"
                class="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 filter contrast-[1.02]"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>
              
              <!-- Tag badge -->
              <div class="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-mono uppercase tracking-wider text-slate-900 font-bold shadow-xs">
                {{ study.industry }}
              </div>

              <!-- Quick Dossier CTA badge -->
              <div class="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-slate-900/90 text-white text-[11px] font-heading font-bold flex items-center gap-1 opacity-90 group-hover:opacity-100 transition-opacity">
                <span>Quick Dossier</span>
                <ArrowUpRight class="w-3 h-3 text-brand-400" />
              </div>
            </div>

            <!-- Content -->
            <div class="p-5 sm:p-6 space-y-3">
              <div class="space-y-1">
                <span class="text-[11px] font-mono font-bold text-brand-600 uppercase tracking-wider block">
                  {{ study.subtitle }}
                </span>
                <h3 class="text-base sm:text-lg font-heading font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
                  {{ study.title }}
                </h3>
              </div>

              <p class="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed line-clamp-2">
                {{ study.description }}
              </p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-1.5 pt-1">
                <span 
                  v-for="tag in study.tags.slice(0, 3)" 
                  :key="tag"
                  class="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] sm:text-[11px] font-mono font-semibold"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Bottom Metric & Action Bar -->
          <div class="px-5 sm:px-6 py-3.5 bg-gradient-to-r from-orange-50/50 via-slate-50 to-orange-50/30 border-t border-slate-100 flex items-center justify-between">
            <div>
              <span class="text-[10px] font-mono uppercase tracking-wider text-slate-400 block font-bold">Key Lift</span>
              <span class="text-xs sm:text-sm font-heading font-extrabold text-orange-600">{{ study.stat }}</span>
            </div>

            <button 
              class="text-xs font-heading font-bold text-slate-900 group-hover:text-orange-600 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>View Case Study</span>
              <ArrowRight class="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

        </div>

      </div>

      <!-- Bottom Portfolio Teaser Banner with Radiant Midnight Gradient -->
      <div class="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border border-orange-500/30 shadow-xl shadow-orange-500/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-1.5 text-center md:text-left">
          <span class="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold">Enterprise Client Dossiers</span>
          <h3 class="text-lg sm:text-xl font-heading font-bold text-white">
            Over 500+ commercial and startup web systems deployed since 2006.
          </h3>
          <p class="text-xs sm:text-sm text-slate-300 font-sans max-w-2xl">
            From legal retention engines to high-frequency medical scheduling portals, Vivek Thapar leads direct architecture from concept to market scale.
          </p>
        </div>

        <div class="flex items-center gap-3 shrink-0">
          <router-link 
            to="/case-studies"
            class="btn-primary text-xs"
          >
            <span>View All Case Studies</span>
            <ArrowRight class="w-3.5 h-3.5 text-orange-100" />
          </router-link>
        </div>
      </div>

    </div>

    <!-- Interactive Project Dossier Modal -->
    <Teleport to="body">
      <Transition name="fade">
        <div 
          v-if="selectedStudy"
          class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm"
          @click.self="closeModal"
        >
          <div 
            class="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl relative animate-scale-in"
          >
            <!-- Close Button -->
            <button 
              @click="closeModal"
              class="absolute top-3.5 right-3.5 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900/85 hover:bg-slate-900 text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
              aria-label="Close modal"
            >
              <X class="w-4 h-4" />
            </button>

            <!-- Modal Header Image -->
            <div class="relative aspect-video sm:aspect-[21/9] overflow-hidden bg-slate-950">
              <img 
                :src="selectedStudy.image" 
                :alt="selectedStudy.title"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <div class="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6 flex items-end justify-between">
                <div>
                  <span class="px-2.5 py-1 rounded-md bg-white/90 text-slate-900 font-mono text-[10px] font-bold uppercase tracking-wider">
                    {{ selectedStudy.industry }}
                  </span>
                  <h3 class="text-lg sm:text-2xl font-heading font-extrabold text-white mt-1.5">
                    {{ selectedStudy.title }}
                  </h3>
                </div>
                <div class="px-3 py-1.5 rounded-lg bg-brand-500 text-white font-mono text-xs font-bold shrink-0">
                  {{ selectedStudy.stat }}
                </div>
              </div>
            </div>

            <!-- Modal Body Details -->
            <div class="p-5 sm:p-7 space-y-5">
              
              <!-- Challenge & Solution -->
              <div class="space-y-3.5">
                <div class="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 class="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold mb-1">
                    The Commercial Challenge
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {{ selectedStudy.challenge }}
                  </p>
                </div>

                <div class="p-3.5 sm:p-4 rounded-xl bg-brand-50/70 border border-brand-200">
                  <h4 class="text-xs font-mono uppercase tracking-wider text-brand-900 font-bold mb-1">
                    The Engineering &amp; Strategic Solution
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                    {{ selectedStudy.solution }}
                  </p>
                </div>
              </div>

              <!-- Tech Stack & Tags -->
              <div>
                <h4 class="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                  Core Architecture &amp; Deliverables
                </h4>
                <div class="flex flex-wrap gap-1.5 sm:gap-2">
                  <span 
                    v-for="tag in selectedStudy.tags" 
                    :key="tag"
                    class="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 text-slate-800 font-bold border border-slate-200"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Outcome Banner -->
              <div class="p-4 rounded-xl sm:rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span class="text-[10px] font-mono uppercase tracking-widest text-slate-400">Verified Outcome</span>
                  <p class="text-xs sm:text-sm font-heading font-bold text-emerald-400">{{ selectedStudy.outcome }}</p>
                </div>
                <router-link 
                  to="/contact" 
                  @click="closeModal"
                  class="btn-secondary text-xs bg-white text-slate-900 border-none hover:bg-slate-100 shrink-0 w-full sm:w-auto justify-center"
                >
                  <span>Discuss Similar Build</span>
                  <ArrowRight class="w-3.5 h-3.5 text-brand-600" />
                </router-link>
              </div>

            </div>

          </div>
        </div>
      </Transition>
    </Teleport>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Briefcase, ArrowUpRight, ArrowRight, X } from 'lucide-vue-next'

const activeCategory = ref('all')
const selectedStudy = ref(null)

const openModal = (study) => {
  selectedStudy.value = study
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedStudy.value = null
  document.body.style.overflow = ''
}

const categories = [
  { id: 'all', label: 'All Deployments' },
  { id: 'web', label: 'Web Applications' },
  { id: 'growth', label: 'Conversion & Growth' },
  { id: 'ops', label: 'Enterprise Systems' }
]

const allStudies = [
  {
    title: '1-800-ACCIDENT Platform',
    subtitle: 'High-Stakes Legal Retention Funnel',
    category: 'growth',
    industry: 'Legal / Litigation',
    stat: '+340% Retained Clients',
    outcome: '340% Higher Retained Case Volume & Sub-Second Load',
    image: '/media/work-digital-marketing.webp',
    description: 'Complete digital overhaul for high-volume personal injury intake. Architected instant-intake lead routing, multi-channel attribution, and sub-second load times.',
    challenge: 'High cost-per-click personal injury ads were suffering 78% mobile bounce rates due to legacy slow forms and fragmented lead qualification.',
    solution: 'Designed and engineered an instant-intake reactive funnel, real-time telephony routing with Twilio, and localized geo-landing pages.',
    tags: ['Next-Gen Funnels', 'Real-Time Routing', 'Geo-Targeting', 'Enterprise Analytics']
  },
  {
    title: 'MetroPCS NYC Regional Hub',
    subtitle: 'Multi-Location Retail Acquisition',
    category: 'growth',
    industry: 'Telecommunications',
    stat: '120+ Store Footprint',
    outcome: '#1 Local Pack Ranking Across 4 NYC Boroughs',
    image: '/media/work-collaboration.webp',
    description: 'Localized search dominance and omnichannel campaign coordination across Queens, Brooklyn, Bronx, and Manhattan retail outlets.',
    challenge: 'Intense local telecom competition with conflicting store citations and fragmented promotional pricing across 120+ franchise locations.',
    solution: 'Unified localized SEO architecture, automated Google Business Profile API sync, and localized promotional landing page engines.',
    tags: ['Local SEO Architecture', 'Omnichannel Ads', 'Multi-Unit CMS', 'Performance Dashboards']
  },
  {
    title: 'Zara Realty Tenant Engine',
    subtitle: 'Enterprise Property Management',
    category: 'ops',
    industry: 'Commercial Real Estate',
    stat: '4,500+ Units Managed',
    outcome: '99.4% On-Time Rent Settlement via Digital Portal',
    image: '/media/work-analytics.webp',
    description: 'Custom tenant portal, automated maintenance ticketing system, and integrated payment processing handling thousands of residential units.',
    challenge: 'Manual maintenance tickets and paper checks across 4,500+ apartment units causing administrative backlogs and tenant frustration.',
    solution: 'Constructed custom centralized tenant portal, real-time ticket escalation logic, and automated rent collection system.',
    tags: ['Tenant Web App', 'Workflow Automation', 'Local Authority', 'Stripe Core']
  },
  {
    title: 'BarberAnywhere Platform',
    subtitle: 'On-Demand Grooming Marketplace',
    category: 'web',
    industry: 'Mobile Marketplace',
    stat: '100K+ Bookings',
    outcome: 'Full iOS, Android & Reactive Web Ecosystem',
    image: '/media/work-creativity.webp',
    description: 'Architected consumer booking flow, geolocation dispatch system, and mobile-first web ecosystem connecting independent stylists with clients nationwide.',
    challenge: 'Creating a seamless two-sided marketplace connecting verified barbers with clients needing on-demand visits.',
    solution: 'Full mobile application engineering, GPS dispatching algorithms, calendar synchronization, and Stripe cashless checkout.',
    tags: ['Vue Application', 'GPS Dispatch', 'Stripe Payments', 'Real-Time Sync']
  },
  {
    title: 'MirchProperty Portal',
    subtitle: 'Commercial & Residential Search',
    category: 'ops',
    industry: 'PropTech Ecosystem',
    stat: 'Sub-Second MLS Sync',
    outcome: 'Sub-Second Speeds & Direct Broker Handoffs',
    image: '/media/work-innovation.webp',
    description: 'High-speed reactive search architecture, automated valuation estimators, and direct licensed broker handoffs.',
    challenge: 'Slow IDX property feeds causing high bounce rates and lost homebuyer inquiries.',
    solution: 'High-speed reactive Vue search architecture, automated valuation estimators, and direct licensed broker handoffs.',
    tags: ['MLS / IDX Sync', 'Interactive Map', 'Lead Routing', 'High Speed UI']
  },
  {
    title: 'Web3 & RWA Tokenization',
    subtitle: 'Institutional Asset Platforms',
    category: 'web',
    industry: 'FinTech & Blockchain',
    stat: '$15M+ Volume',
    outcome: 'Frictionless Non-Custodial UI & Smart Audits',
    image: '/media/work-transformation.webp',
    description: 'Intuitive modern UI/UX with social login options, audited smart contract interactions, and real-time portfolio dashboards.',
    challenge: 'Complex crypto wallet onboarding scaring off non-technical investors.',
    solution: 'Intuitive modern UI/UX with social login options, audited smart contract interactions, and real-time portfolio dashboards.',
    tags: ['Web3 UX', 'Smart Contracts', 'RWA Tokenization', 'Clean Security']
  }
]

const filteredStudies = computed(() => {
  if (activeCategory.value === 'all') return allStudies
  return allStudies.filter(s => s.category === activeCategory.value)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.animate-scale-in {
  animation: scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes scaleIn {
  from {
    transform: scale(0.96);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>