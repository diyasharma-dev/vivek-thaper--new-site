<template>
  <div class="pt-20 sm:pt-24 pb-16 bg-white">
    
    <!-- Hero Header with Warm Ambient Glow -->
    <section class="relative py-12 sm:py-16 overflow-hidden bg-gradient-to-b from-orange-50/30 via-amber-50/15 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/90 text-orange-700 font-mono text-[11px] font-bold tracking-wider uppercase shadow-2xs mb-3">
          <Layers class="w-3.5 h-3.5 text-orange-600" />
          <span>Executive Capabilities</span>
        </span>
        <h1 class="text-2xl sm:text-4xl lg:text-[46px] font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
          <span class="gradient-text-brand">Bespoke Engineering</span> &amp; High-Yield Revenue Systems
        </h1>
        <p class="mt-3 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-sans">
          From custom-coded reactive web applications to multi-million dollar organic search dominance and performance advertising.
        </p>
      </div>
    </section>

    <!-- Services Detailed Breakdown -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          <div 
            v-for="service in serviceDetails" 
            :key="service.title"
            class="card-architectural p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-mono font-bold text-brand-600 uppercase tracking-widest">{{ service.id }}</span>
                <span class="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-bold border border-slate-200">
                  {{ service.badge }}
                </span>
              </div>

              <h2 class="text-lg sm:text-xl md:text-2xl font-heading font-bold text-slate-900 mb-2.5">
                {{ service.title }}
              </h2>

              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 font-sans">
                {{ service.description }}
              </p>

              <div class="space-y-2 border-t border-slate-100 pt-4 mb-5">
                <h3 class="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">Core Deliverables</h3>
                <div 
                  v-for="d in service.deliverables" 
                  :key="d"
                  class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-sans"
                >
                  <CheckCircle2 class="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>{{ d }}</span>
                </div>
              </div>
            </div>

            <!-- Card Bottom Bar -->
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <span class="text-[10px] font-mono text-slate-400 uppercase font-bold block">Benchmark</span>
                <span class="text-xs sm:text-sm font-heading font-bold text-emerald-600">{{ service.stat }}</span>
              </div>

              <router-link 
                to="/contact" 
                class="btn-secondary text-xs"
              >
                <span>Schedule a Call</span>
                <ArrowRight class="w-3.5 h-3.5 text-brand-600" />
              </router-link>
            </div>

          </div>

        </div>

        <!-- Consultation Banner -->
        <div class="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-1.5 text-center md:text-left">
            <span class="text-xs font-mono uppercase tracking-widest text-brand-400 font-bold">Direct Consultation</span>
            <h3 class="text-lg sm:text-xl font-heading font-bold text-white">
              Need a custom web solution or digital growth strategy?
            </h3>
            <p class="text-xs sm:text-sm text-slate-300 font-sans max-w-xl">
              Connect directly with Vivek Thapar to discuss your project requirements, logic planning, and growth goals.
            </p>
          </div>

          <div class="flex items-center gap-3 shrink-0">
            <router-link 
              to="/contact"
              class="btn-primary bg-white text-slate-900 hover:bg-slate-100 text-xs shadow-md"
            >
              <span>Schedule a Call</span>
              <ArrowRight class="w-3.5 h-3.5 text-brand-600" />
            </router-link>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { Layers, CheckCircle2, ArrowRight } from 'lucide-vue-next'

const serviceDetails = [
  {
    id: 'SERVICE / 01',
    title: 'Custom Web & Application Engineering',
    badge: 'Vue · Node · Python',
    stat: 'Sub-800ms Load',
    description: 'We do not build generic WordPress websites. We engineer high-speed, bespoke web applications and platforms using modern reactive frameworks with airtight database security and seamless third-party API integrations.',
    deliverables: [
      'Reactive Vue.js Single Page Applications (SPA) with instant routing',
      'High-performance Node.js & Python backend services and endpoints',
      'Custom Stripe, Plaid, Twilio, and QuickBooks financial integrations',
      'Multi-tenant administration portals and role-based permissions'
    ]
  },
  {
    id: 'SERVICE / 02',
    title: 'Local SEO Dominance & Google 3-Pack',
    badge: 'Maps & Citations',
    stat: '#1 Rank Position',
    description: 'When potential clients search for high-value services in your metro area, your business must appear at the absolute top of the Google Maps 3-Pack. We build localized landing engines and clean citation graphs.',
    deliverables: [
      'Comprehensive Google Business Profile (GBP) optimization and audits',
      'Hyper-localized neighborhood landing pages and location schemas',
      'Authoritative tier-1 legal, medical, and commercial directory syndication',
      'Review acceleration workflows with automated customer SMS triggers'
    ]
  },
  {
    id: 'SERVICE / 03',
    title: 'High-ROI Performance Paid Advertising',
    badge: 'Google · Meta · TikTok',
    stat: '-69% CPA Reduction',
    description: 'Precision customer acquisition campaigns that stop wasting ad dollars on irrelevant clicks. We sculpt negative keywords and build dedicated high-converting landing pages.',
    deliverables: [
      'High-intent search keyword sculpting & negative list pruning',
      'Dynamic multi-touch remarketing funnels across Meta & TikTok',
      'A/B tested headline, hook, and offer angle variations',
      'Live dashboard with verified Cost Per Acquisition tracking'
    ]
  },
  {
    id: 'SERVICE / 04',
    title: 'Sales Automation & Logic Systems',
    badge: 'Funnels & CRM',
    stat: '100% Lead Capture',
    description: 'Turning visitors into customers automatically. If-this-then-that lead routing that sends automated SMS notifications, books calendar consultations, and syncs directly to your sales team.',
    deliverables: [
      'Sub-60 second automated SMS and email lead response engines',
      'HubSpot, Salesforce, and custom CRM webhook pipelines',
      'Two-way calendar booking with automatic reminders',
      'Automated review request generation post-service'
    ]
  }
]
</script>