<template>
  <div class="pt-20 sm:pt-24 pb-20 bg-white">
    
    <!-- Hero Banner with 100% Matched Studio Image -->
    <section class="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden bg-slate-950 text-white border-b border-slate-800">
      <!-- Ambient Lighting Blobs & Grid Texture -->
      <div class="absolute -top-24 right-0 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-20 w-[400px] h-[400px] bg-slate-800/50 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>

      <!-- Ambient blurred watermark of matched studio image -->
      <div class="absolute inset-0 opacity-10 filter blur-3xl scale-125 pointer-events-none overflow-hidden">
        <img src="/media/web-design-studio.webp" class="w-full h-full object-cover" alt="" />
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Left Column (7 cols): Copy, Badges & CTAs -->
          <div class="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-500/30 text-red-400 font-mono text-xs font-bold tracking-wider uppercase shadow-2xs">
              <Layers class="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Core Capabilities &amp; Architecture · NYC</span>
            </div>

            <h1 class="hero-headline text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-heading font-extrabold text-white tracking-normal leading-[1.32] sm:leading-[1.35] lg:leading-[1.38] text-balance my-3.5 sm:my-4">
              Custom Web Engineering &amp; <span class="text-red-500">High-Performance Growth</span>
            </h1>

            <p class="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
              From custom reactive web applications and local Google Maps 3-Pack authority to targeted performance advertising and automated sales routing systems — directed with founder accountability.
            </p>

            <!-- Quick Capability Tags -->
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-mono">
              <span class="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Full Code Ownership</span>
              <span class="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Local Maps 3-Pack</span>
              <span class="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Targeted Ad Funnels</span>
              <span class="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Sales Flowcharting</span>
            </div>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3">
              <router-link 
                to="/contact"
                class="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-xs sm:text-sm shadow-lg shadow-red-900/30 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span>Schedule Scope Consultation</span>
                <ArrowRight class="w-4 h-4 shrink-0" />
              </router-link>
              <a 
                href="tel:+17182074446"
                class="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-mono font-bold text-xs sm:text-sm transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Phone class="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>(718) 207-4446</span>
              </a>
            </div>
          </div>

          <!-- Right Column (5 cols): 100% Matched Studio Hero Banner Showcase -->
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="w-full max-w-md lg:max-w-none">
              <div class="relative rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-slate-800/80 via-slate-900/90 to-slate-950 border border-slate-700/80 shadow-2xl shadow-red-950/30 group overflow-hidden">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square lg:aspect-[4/3] h-[420px] sm:h-[480px] lg:h-[520px] bg-slate-900">
                  <img 
                    src="/media/web-design-studio.webp" 
                    alt="Modern Web Design & Development Studio - Mirch Media NYC"
                    class="w-full h-full object-cover object-center filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none"></div>

                  <!-- Glassmorphic Caption Badge on Image -->
                  <div class="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 shadow-lg">
                    <div class="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider mb-0.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                      <span>Agency Engineering Studio</span>
                    </div>
                    <p class="text-xs sm:text-sm font-heading font-bold text-white tracking-tight">Modern Web Design &amp; Systems Architecture</p>
                    <p class="text-[11px] text-slate-300 font-sans mt-0.5">Forest Hills, Queens &amp; Greater New York City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Services Detailed Breakdown (Human-Crafted Editorial Cards) -->
    <section class="py-14 sm:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          <div 
            v-for="service in serviceDetails" 
            :key="service.title"
            class="card-architectural p-6 sm:p-9 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span class="text-xs font-mono font-bold text-red-600 uppercase tracking-widest">{{ service.track }}</span>
                <span class="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-bold border border-slate-200">
                  {{ service.badge }}
                </span>
              </div>

              <h2 class="text-xl sm:text-2xl font-heading font-bold text-slate-900 mb-3 leading-snug">
                {{ service.title }}
              </h2>

              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                {{ service.description }}
              </p>

              <div class="space-y-2.5 border-t border-slate-100 pt-5 mb-6">
                <h3 class="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">Core Deliverables</h3>
                <div 
                  v-for="d in service.deliverables" 
                  :key="d"
                  class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-sans"
                >
                  <CheckCircle2 class="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <span>{{ d }}</span>
                </div>
              </div>
            </div>

            <!-- Card Bottom Bar -->
            <div class="pt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span class="text-[10px] font-mono text-slate-400 uppercase font-bold block">Primary Focus</span>
                <span class="text-xs sm:text-sm font-heading font-bold text-slate-900">{{ service.focus }}</span>
              </div>

              <router-link 
                to="/contact" 
                class="btn-secondary text-xs w-full sm:w-auto"
              >
                <span>Schedule Discussion</span>
                <ArrowRight class="w-3.5 h-3.5 text-red-600 shrink-0" />
              </router-link>
            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- The 4-Stage Engagement Framework -->
    <section class="py-14 sm:py-20 bg-slate-50/70 border-y border-slate-200/70">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="max-w-2xl mb-12 space-y-2">
          <span class="text-xs font-mono uppercase tracking-widest text-red-600 font-bold">Delivery Methodology</span>
          <h2 class="text-2xl sm:text-3xl font-heading font-bold text-slate-900 tracking-tight">
            How Engagements Are Executed
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 font-sans">
            A disciplined, milestone-based approach ensuring complete transparency and on-time completion.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
          <div class="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
            <span class="text-xs font-mono font-bold text-red-600 uppercase">Phase 01</span>
            <h3 class="text-base font-heading font-bold text-slate-900">Discovery &amp; Logic Mapping</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Vivek personally reviews your unit economics, user journeys, and competitive landscape to build an unambiguous architectural scope blueprint.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
            <span class="text-xs font-mono font-bold text-red-600 uppercase">Phase 02</span>
            <h3 class="text-base font-heading font-bold text-slate-900">Rapid Architectural Sprints</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Dedicated senior engineers build custom reactive user interfaces, clean database schemas, and API webhooks without bloated third-party plugins.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
            <span class="text-xs font-mono font-bold text-red-600 uppercase">Phase 03</span>
            <h3 class="text-base font-heading font-bold text-slate-900">Founder QA &amp; Hardening</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Vivek personally tests every funnel trigger, edge condition, mobile breakpoint, and conversion flow before opening staging environments.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
            <span class="text-xs font-mono font-bold text-red-600 uppercase">Phase 04</span>
            <h3 class="text-base font-heading font-bold text-slate-900">Launch &amp; Code Ownership</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Production rollout with zero vendor lock-in. 100% of the source code, design systems, and advertising assets belong entirely to your company.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- Founder Oversight Banner -->
    <section class="py-14 sm:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="p-6 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-2 text-center md:text-left">
            <span class="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">Direct Founder Oversight</span>
            <h3 class="text-xl sm:text-2xl font-heading font-bold text-white">
              Have a nuanced project requirements or growth goal?
            </h3>
            <p class="text-xs sm:text-sm text-slate-300 font-sans max-w-xl">
              Connect directly with Vivek Thapar to discuss logic planning, custom development, or digital search positioning.
            </p>
          </div>

          <div class="w-full md:w-auto flex flex-wrap items-center justify-center gap-3 shrink-0">
            <router-link 
              to="/contact" 
              class="btn-primary text-xs shadow-md w-full sm:w-auto"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight class="w-3.5 h-3.5 shrink-0" />
            </router-link>
            <a 
              href="tel:+17182074446"
              class="px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-bold transition-all text-center w-full sm:w-auto"
            >
              (718) 207-4446
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { Layers, CheckCircle2, ArrowRight, Phone } from 'lucide-vue-next'

const serviceDetails = [
  {
    track: 'ENGINEERING & PLATFORMS',
    title: 'Custom Web & Application Development',
    badge: 'Vue · Node · Python',
    focus: 'Performance & Reactive Architecture',
    description: 'We do not build generic WordPress websites. We engineer high-speed, bespoke web applications and platforms using modern reactive frameworks with robust database design and seamless third-party API integrations.',
    deliverables: [
      'Reactive Single Page Applications (SPA) with instant client-side routing',
      'High-performance Node.js and Python backend endpoints & database schemas',
      'Custom Stripe, Plaid, Twilio, and QuickBooks financial integrations',
      'Multi-tenant administration portals and role-based permissions'
    ]
  },
  {
    track: 'SEARCH & LOCAL REACH',
    title: 'Local SEO Dominance & Google Maps 3-Pack',
    badge: 'Maps · Citations · Schema',
    focus: 'High-Intent Metro Search Reach',
    description: 'When potential clients search for high-value services in your metro area, your business must appear prominently on the Google Maps 3-Pack. We build localized landing engines and clean citation graphs.',
    deliverables: [
      'Comprehensive Google Business Profile (GBP) optimization and audits',
      'Hyper-localized neighborhood landing pages and location schemas',
      'Authoritative tier-1 legal, medical, and commercial directory syndication',
      'Review acceleration workflows with automated customer SMS triggers'
    ]
  },
  {
    track: 'PAID MEDIA ACQUISITION',
    title: 'Targeted Performance Paid Advertising',
    badge: 'Google · Meta · YouTube',
    focus: 'Lower CPA & Qualified Inbound Pipeline',
    description: 'Precision customer acquisition campaigns that stop wasting ad dollars on irrelevant clicks. We sculpt negative keywords and build dedicated high-converting landing pages.',
    deliverables: [
      'High-intent search keyword sculpting & negative list pruning',
      'Dynamic multi-touch remarketing funnels across Meta & YouTube',
      'A/B tested headline, hook, and offer angle variations',
      'Live dashboard with verified Cost Per Acquisition tracking'
    ]
  },
  {
    track: 'AUTOMATION & LOGIC',
    title: 'Sales Automation & Workflow Logic Systems',
    badge: 'Funnels · Webhooks · CRM',
    focus: 'Rapid Lead Response & Operations',
    description: 'Turning visitors into customers automatically. If-this-then-that lead routing that sends automated notifications, books calendar consultations, and syncs directly to your sales pipeline.',
    deliverables: [
      'Automated SMS and email lead response workflows',
      'HubSpot, Salesforce, and custom CRM webhook pipelines',
      'Two-way calendar booking with automatic reminders',
      'Automated review request generation post-service'
    ]
  }
]
</script>
