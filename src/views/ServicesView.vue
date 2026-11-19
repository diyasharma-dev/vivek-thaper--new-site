<template>
  <div class="pt-20 sm:pt-24 pb-20 bg-transparent text-slate-100 min-h-screen">
    
    <!-- Hero Banner with Studio Image -->
    <section class="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 overflow-hidden border-b border-white/10">
      <!-- Subtle Ambient Lighting -->
      <div class="absolute -top-24 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-20 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Left Column (7 cols): Copy, Badges & CTAs -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-500/30 text-red-400 font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
              <Layers class="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Services &amp; Project Management · Queens, NYC</span>
            </div>

            <h1 class="hero-headline text-3xl sm:text-5xl lg:text-[46px] font-heading font-black text-white tracking-tight leading-[1.2] text-balance">
              Strategic Project Management &amp; <span class="gradient-text-brand">High-Performance Growth</span>
            </h1>

            <p class="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
              From custom website platforms and local Google Maps search dominance to targeted performance marketing and automated sales workflows — directed with 20+ years of agency founder experience.
            </p>

            <!-- Quick Capability Tags -->
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-mono">
              <span class="px-3 py-1 rounded-lg bg-[#0e111d] border border-white/10 text-slate-300">Website Project Management</span>
              <span class="px-3 py-1 rounded-lg bg-[#0e111d] border border-white/10 text-slate-300">Google Maps 3-Pack</span>
              <span class="px-3 py-1 rounded-lg bg-[#0e111d] border border-white/10 text-slate-300">Digital Ad Campaigns</span>
              <span class="px-3 py-1 rounded-lg bg-[#0e111d] border border-white/10 text-slate-300">Logic &amp; Automation</span>
            </div>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3">
              <router-link 
                to="/contact"
                class="btn-primary text-xs sm:text-sm w-full sm:w-auto"
              >
                <span>Schedule Scope Consultation</span>
                <ArrowRight class="w-4 h-4 ml-1 shrink-0" />
              </router-link>
              <a 
                href="tel:+17182074446"
                class="btn-secondary text-xs sm:text-sm font-mono font-bold w-full sm:w-auto"
              >
                <Phone class="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>(718) 207-4446</span>
              </a>
            </div>
          </div>

          <!-- Right Column (5 cols): Authentic Executive Showcase -->
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="w-full max-w-sm">
              <div class="relative rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-white/15 via-[#0e111d] to-[#07080e] border border-white/15 shadow-2xl group overflow-hidden">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[3/4] w-full bg-slate-900">
                  <img 
                    src="/media/vivek-thapar-ceo.webp" 
                    alt="Vivek Thapar - Project Director & Agency Founder"
                    class="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-700"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                <!-- Caption Badge Placed Underneath Image -->
                <div class="pt-3.5 px-2 pb-1">
                  <div class="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider mb-0.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span>Executive Agency Leadership</span>
                  </div>
                  <p class="text-xs sm:text-sm font-heading font-bold text-white tracking-tight">Vivek Thapar · Project Director</p>
                  <p class="text-[11px] text-slate-400 font-sans mt-0.5">Mirch Media (Est. 2006) · Forest Hills, Queens, NYC</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Services Detailed Breakdown (Dark Luxury Glass Cards) -->
    <section class="py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          <div 
            v-for="service in serviceDetails" 
            :key="service.title"
            class="card-glass p-7 sm:p-10 flex flex-col justify-between hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div>
              <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span class="text-xs font-mono font-bold text-red-400 uppercase tracking-widest">{{ service.track }}</span>
                <span class="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 font-bold border border-white/10">
                  {{ service.badge }}
                </span>
              </div>

              <h2 class="text-xl sm:text-2xl font-heading font-bold text-white mb-3 leading-snug group-hover:text-red-300 transition-colors">
                {{ service.title }}
              </h2>

              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                {{ service.description }}
              </p>

              <div class="space-y-3 border-t border-white/10 pt-5 mb-6">
                <h3 class="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">Core Deliverables</h3>
                <div 
                  v-for="d in service.deliverables" 
                  :key="d"
                  class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans"
                >
                  <CheckCircle2 class="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{{ d }}</span>
                </div>
              </div>
            </div>

            <!-- Card Bottom Bar -->
            <div class="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span class="text-[10px] font-mono text-slate-400 uppercase font-bold block">Primary Focus</span>
                <span class="text-xs sm:text-sm font-heading font-bold text-white">{{ service.focus }}</span>
              </div>

              <router-link 
                to="/contact" 
                class="btn-secondary text-xs w-full sm:w-auto"
              >
                <span>Schedule Discussion</span>
                <ArrowRight class="w-3.5 h-3.5 text-red-400 shrink-0" />
              </router-link>
            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- The 4-Stage Engagement Framework -->
    <section class="py-16 sm:py-24 border-y border-white/10 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="max-w-2xl mb-12 space-y-2">
          <span class="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">Delivery Methodology</span>
          <h2 class="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
            How Engagements Are Executed
          </h2>
          <p class="text-xs sm:text-sm text-slate-400 font-sans">
            A disciplined, milestone-based approach ensuring complete transparency and on-time completion.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
          <div class="p-6 rounded-2xl bg-[#0c0e17]/80 border border-white/10 hover:border-red-500/30 transition-all space-y-3 group">
            <span class="text-xs font-mono font-bold text-red-400 uppercase">Phase 01</span>
            <h3 class="text-base font-heading font-bold text-white group-hover:text-red-300 transition-colors">Discovery &amp; Logic Mapping</h3>
            <p class="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Vivek personally reviews your unit economics, user journeys, and competitive landscape to build an unambiguous architectural scope blueprint.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#0c0e17]/80 border border-white/10 hover:border-red-500/30 transition-all space-y-3 group">
            <span class="text-xs font-mono font-bold text-red-400 uppercase">Phase 02</span>
            <h3 class="text-base font-heading font-bold text-white group-hover:text-red-300 transition-colors">Rapid Architectural Sprints</h3>
            <p class="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Dedicated senior engineers build custom reactive user interfaces, clean database schemas, and API webhooks without bloated third-party plugins.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#0c0e17]/80 border border-white/10 hover:border-red-500/30 transition-all space-y-3 group">
            <span class="text-xs font-mono font-bold text-red-400 uppercase">Phase 03</span>
            <h3 class="text-base font-heading font-bold text-white group-hover:text-red-300 transition-colors">Founder QA &amp; Hardening</h3>
            <p class="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Vivek personally tests every funnel trigger, edge condition, mobile breakpoint, and conversion flow before opening staging environments.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-[#0c0e17]/80 border border-white/10 hover:border-red-500/30 transition-all space-y-3 group">
            <span class="text-xs font-mono font-bold text-red-400 uppercase">Phase 04</span>
            <h3 class="text-base font-heading font-bold text-white group-hover:text-red-300 transition-colors">Launch &amp; Code Ownership</h3>
            <p class="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
              Production rollout with zero vendor lock-in. 100% of the source code, design systems, and advertising assets belong entirely to your company.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- Founder Oversight Banner -->
    <section class="py-16 sm:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0c0e17] via-[#121625] to-[#0c0e17] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-red-600/10 rounded-full blur-[90px] pointer-events-none"></div>

          <div class="space-y-3 text-center md:text-left relative z-10">
            <span class="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">Direct Founder Oversight</span>
            <h3 class="text-2xl sm:text-3xl font-heading font-black text-white">
              Have a nuanced project requirement or growth goal?
            </h3>
            <p class="text-sm text-slate-300 font-sans max-w-xl">
              Connect directly with Vivek Thapar to discuss logic planning, custom development, or digital search positioning.
            </p>
          </div>

          <div class="w-full md:w-auto flex flex-wrap items-center justify-center gap-3 shrink-0 relative z-10">
            <router-link 
              to="/contact" 
              class="btn-primary text-xs sm:text-sm shadow-glow-red w-full sm:w-auto"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight class="w-4 h-4 ml-1 shrink-0" />
            </router-link>
            <a 
              href="tel:+17182074446"
              class="btn-secondary text-xs sm:text-sm font-mono font-bold w-full sm:w-auto"
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
    track: 'WEBSITES & PLATFORMS',
    title: 'Website & Platform Development Management',
    badge: 'Custom Architecture · UX',
    focus: 'Full-Cycle Delivery & Code Quality',
    description: 'Under Vivek\'s direct oversight, our agency engineering team builds high-speed, custom web platforms and client portals tailored to your specific business logic, with zero reliance on fragile off-the-shelf templates.',
    deliverables: [
      'Comprehensive architectural specification & user flow mapping before execution',
      'Responsive, lightning-fast client interfaces with full code ownership',
      'Secure Stripe, CRM, Twilio, and third-party business API integrations',
      'Admin portals, content management workflows, and role-based permissions'
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
