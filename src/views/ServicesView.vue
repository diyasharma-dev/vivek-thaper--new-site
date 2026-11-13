<template>
  <div class="pt-28 pb-20 bg-slate-50/50">
    
    <!-- Hero Header -->
    <section class="relative py-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 font-mono text-[11px] font-semibold tracking-wider uppercase shadow-2xs mb-4">
          <Layers class="w-3.5 h-3.5 text-amber-600" />
          <span>Executive Capabilities</span>
        </span>
        <h1 class="text-3xl sm:text-5xl lg:text-[48px] font-serif font-normal text-slate-900 tracking-tight leading-tight">
          Bespoke Engineering &amp; High-Yield Revenue Systems
        </h1>
        <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
          From custom-coded reactive web applications to multi-million dollar organic search dominance and performance advertising.
        </p>
      </div>
    </section>

    <!-- Services Detailed Breakdown -->
    <section class="py-16 bg-white border-b border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div 
            v-for="service in serviceDetails" 
            :key="service.title"
            class="card-architectural p-8 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest">{{ service.id }}</span>
                <span class="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                  {{ service.badge }}
                </span>
              </div>

              <h2 class="text-xl sm:text-2xl font-serif font-bold text-slate-900 mb-3">
                {{ service.title }}
              </h2>

              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                {{ service.description }}
              </p>

              <div class="space-y-2 border-t border-slate-100 pt-4 mb-6">
                <h3 class="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">Core Deliverables</h3>
                <div 
                  v-for="d in service.deliverables" 
                  :key="d"
                  class="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium font-sans"
                >
                  <CheckCircle2 class="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{{ d }}</span>
                </div>
              </div>
            </div>

            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span class="text-xs font-mono font-bold text-amber-700">{{ service.stat }}</span>
              <router-link 
                to="/contact" 
                class="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-amber-700 transition-colors"
              >
                <span>Inquire Scope</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </router-link>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- 4 Step Engagement Workflow -->
    <section class="py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="max-w-2xl mb-14 space-y-2">
          <span class="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">Execution Framework</span>
          <h2 class="text-3xl font-serif font-bold text-slate-900">From Strategic Logic to Shipped Revenue</h2>
          <p class="text-xs sm:text-sm text-slate-600 font-sans">How Vivek structures every project engagement with military precision.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="card-architectural p-6 hover:-translate-y-0.5">
            <span class="text-3xl font-serif font-bold text-slate-900">01</span>
            <h3 class="text-base font-bold text-slate-900 mt-2 mb-1">Discovery &amp; Audit</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Deep immersion into unit economics, traffic quality, conversion drop-offs, and competitor vulnerabilities.
            </p>
          </div>

          <div class="card-architectural p-6 hover:-translate-y-0.5">
            <span class="text-3xl font-serif font-bold text-slate-900">02</span>
            <h3 class="text-base font-bold text-slate-900 mt-2 mb-1">Logic Blueprint</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              If-this-then-that flowcharting. Technical schema, user conversion journeys, and funnel architecture mapped.
            </p>
          </div>

          <div class="card-architectural p-6 hover:-translate-y-0.5">
            <span class="text-3xl font-serif font-bold text-slate-900">03</span>
            <h3 class="text-base font-bold text-slate-900 mt-2 mb-1">Custom Engineering</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Clean reactive code written from scratch. Zero bloated themes, sub-second load times, and HIPAA/ADA compliance.
            </p>
          </div>

          <div class="card-architectural p-6 hover:-translate-y-0.5">
            <span class="text-3xl font-serif font-bold text-slate-900">04</span>
            <h3 class="text-base font-bold text-slate-900 mt-2 mb-1">Omnichannel Scaling</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Turning on high-intent PPC, Google 3-pack local dominance, and automated lead capture follow-ups.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- Embedded Growth ROI Calculator -->
    <div>
      <RoiCalculator />
    </div>

  </div>
</template>

<script setup>
import { Layers, CheckCircle2, ArrowRight } from 'lucide-vue-next'
import RoiCalculator from '@/components/RoiCalculator.vue'

const serviceDetails = [
  {
    id: 'SERVICE / 01',
    title: 'Custom Web & Application Engineering',
    badge: 'Vue.js · Full-Stack',
    stat: 'Sub-Second Speeds',
    description: 'Bespoke web applications engineered for speed, conversion, and clean security. Zero sluggish WordPress themes; 100% custom reactive architecture that clients own outright.',
    deliverables: [
      'Reactive Vue.js 3 / SPA single-page architecture',
      'Mobile-first responsive design for 100% device compatibility',
      'Secure API integrations, CRM webhooks, and payment gateways',
      'HIPAA, ADA, and Bar-compliant industry standards'
    ]
  },
  {
    id: 'SERVICE / 02',
    title: 'High-Authority SEO & Generative AI Search (GEO)',
    badge: 'Organic Dominance',
    stat: '40+ Daily Calls',
    description: 'We help brands dominate Google Maps 3-Pack and emerging conversational AI models (ChatGPT, Gemini, Perplexity). Semantic entity optimization that establishes undeniable authority.',
    deliverables: [
      'Hyperlocal Queens, Manhattan, and Tri-State 3-Pack capture',
      'Generative Engine Optimization (GEO) structured schema',
      'Technical crawl optimization, core web vitals, and indexation',
      'High-authority backlink architecture and local citations'
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
