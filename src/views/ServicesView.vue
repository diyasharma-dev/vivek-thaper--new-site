<template>
  <div class="pt-28 pb-20">
    
    <!-- Hero Header -->
    <section class="relative py-16 overflow-hidden">
      <div class="glow-ambient -top-40 right-1/4 w-[600px] h-[400px] bg-brand-600/15"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold mb-4">
          <Layers class="w-3.5 h-3.5" />
          <span>Full-Funnel Capabilities</span>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          Executive Services &amp; <br />
          <span class="gold-gradient-text">High-Performance Systems</span>
        </h1>
        <p class="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          From custom-coded reactive web infrastructure to multi-million dollar organic search dominance and performance advertising.
        </p>
      </div>
    </section>

    <!-- Services Detailed Breakdown -->
    <section class="py-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div 
            v-for="service in serviceDetails" 
            :key="service.title"
            class="p-8 rounded-3xl glass-panel glass-panel-hover border border-slate-700/70 flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-xs font-mono font-bold text-brand-400 uppercase tracking-widest">{{ service.id }}</span>
                <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-dark-950 text-slate-300 border border-slate-800">
                  {{ service.badge }}
                </span>
              </div>

              <h2 class="text-xl sm:text-2xl font-bold font-display text-white mb-3">
                {{ service.title }}
              </h2>

              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {{ service.description }}
              </p>

              <div class="space-y-2 border-t border-slate-800/80 pt-4 mb-6">
                <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Core Deliverables:</h3>
                <div 
                  v-for="d in service.deliverables" 
                  :key="d"
                  class="flex items-center gap-2.5 text-xs text-slate-300"
                >
                  <CheckCircle2 class="w-4 h-4 text-brand-400 shrink-0" />
                  <span>{{ d }}</span>
                </div>
              </div>
            </div>

            <div class="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span class="text-xs font-bold text-brand-300">{{ service.stat }}</span>
              <router-link 
                to="/contact" 
                class="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-brand-300 transition-colors"
              >
                <span>Inquire Plan</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </router-link>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- 4 Step Engagement Workflow -->
    <section class="py-20 bg-dark-900/50 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-xs font-bold text-brand-400 uppercase tracking-widest font-mono">Process &amp; Methodology</span>
          <h2 class="text-3xl font-display font-bold text-white mt-2">From Napkin Idea to Launch to Sales</h2>
          <p class="text-xs sm:text-sm text-slate-400 mt-2">How Vivek structures every project engagement with military precision.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl glass-panel">
            <span class="text-3xl font-display font-extrabold gold-gradient-text">01</span>
            <h3 class="text-base font-bold text-white mt-2 mb-1">Discovery &amp; Audit</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              Deep immersion into unit economics, traffic quality, conversion drop-offs, and competitor vulnerabilities.
            </p>
          </div>

          <div class="p-6 rounded-2xl glass-panel">
            <span class="text-3xl font-display font-extrabold gold-gradient-text">02</span>
            <h3 class="text-base font-bold text-white mt-2 mb-1">Logic Blueprint</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              If-this-then-that flowcharting. Technical schema, user conversion journeys, and funnel architecture mapped.
            </p>
          </div>

          <div class="p-6 rounded-2xl glass-panel">
            <span class="text-3xl font-display font-extrabold gold-gradient-text">03</span>
            <h3 class="text-base font-bold text-white mt-2 mb-1">Custom Engineering</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              Clean reactive code written from scratch. Zero bloated themes, sub-second load times, and HIPAA/ADA compliance.
            </p>
          </div>

          <div class="p-6 rounded-2xl glass-panel">
            <span class="text-3xl font-display font-extrabold gold-gradient-text">04</span>
            <h3 class="text-base font-bold text-white mt-2 mb-1">Omnichannel Scaling</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              Turning on high-intent PPC, Google 3-pack local dominance, and automated lead capture follow-ups.
            </p>
          </div>
        </div>

      </div>
    </section>

    <!-- Embedded Growth ROI Calculator -->
    <div class="border-t border-slate-800">
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
