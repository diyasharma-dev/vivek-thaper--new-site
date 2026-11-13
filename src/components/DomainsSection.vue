<template>
  <section id="domains" class="py-24 relative overflow-hidden bg-white border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-12 space-y-3">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-mono text-[11px] font-semibold tracking-wider uppercase shadow-2xs">
          <Layers class="w-3.5 h-3.5 text-amber-600" />
          <span>Core Competencies</span>
        </span>
        <h2 class="text-3xl sm:text-4xl font-serif font-normal text-slate-900 tracking-tight leading-tight">
          Specialized Domains &amp; Engineering Disciplines
        </h2>
        <p class="text-slate-600 text-base leading-relaxed font-sans">
          Full-lifecycle execution — from product logic planning and bespoke code development to omnichannel search dominance.
        </p>

        <!-- Category Filter Tabs -->
        <div class="flex flex-wrap items-center gap-2 pt-3">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-2xs',
              activeCategory === cat.id
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-50 text-slate-700 hover:text-black hover:bg-slate-100 border border-slate-200'
            ]"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Domain Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(domain, idx) in filteredDomains"
          :key="domain.title"
          class="card-architectural p-6 flex flex-col justify-between group hover:-translate-y-1"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono font-bold text-amber-700">0{{ idx + 1 }}</span>
              <span class="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-semibold border border-slate-200/80">
                {{ domain.tag }}
              </span>
            </div>

            <h3 class="text-base font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
              {{ domain.title }}
            </h3>

            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-sans">
              {{ domain.description }}
            </p>

            <ul class="space-y-1.5 pt-3 border-t border-slate-100">
              <li 
                v-for="bullet in domain.bullets" 
                :key="bullet"
                class="flex items-center gap-2 text-xs text-slate-700 font-medium font-sans"
              >
                <div class="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0"></div>
                <span>{{ bullet }}</span>
              </li>
            </ul>
          </div>

          <div class="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span class="text-slate-400 font-mono text-[10px] uppercase tracking-wider font-medium">Impact</span>
            <span class="font-bold text-amber-700 font-mono">{{ domain.impact }}</span>
          </div>
        </div>
      </div>

      <!-- Studio & NYC Office Feature Strip -->
      <div class="mt-16 p-8 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
        <div class="lg:col-span-4 rounded-xl overflow-hidden aspect-[4/3] lg:aspect-auto h-full min-h-[220px] relative border border-slate-200 bg-slate-100">
          <img 
            src="/media/web-design-studio.webp" 
            alt="Modern Web Design & Engineering Studio"
            class="w-full h-full object-cover object-center filter contrast-[1.02]"
          />
          <div class="absolute inset-0 bg-slate-900/10"></div>
          <div class="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-mono uppercase tracking-wider text-slate-900 font-bold shadow-xs">
            NYC Development Lab
          </div>
        </div>

        <div class="lg:col-span-8 space-y-4">
          <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">
            <Terminal class="w-3.5 h-3.5" />
            <span>Architecture &amp; Code Quality</span>
          </div>
          <h3 class="text-xl sm:text-2xl font-serif text-slate-900 font-semibold">
            Engineered for Extreme Speed, Natural Search Dominance &amp; Conversion Logic
          </h3>
          <p class="text-sm text-slate-600 leading-relaxed font-sans">
            We reject bloated page builders and fragile template marketplaces. Every platform is architected with modern component systems, optimized database schemas, and structured schema data that search engines index with priority.
          </p>

          <div class="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-700 font-medium">
            <span class="px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs">Vue 3 / Vite</span>
            <span class="px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs">Tailwind CSS</span>
            <span class="px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs">REST &amp; GraphQL APIs</span>
            <span class="px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs">Semantic Schema Markup</span>
            <span class="px-3 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs">Edge CDN Delivery</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Layers, Terminal } from 'lucide-vue-next'

const activeCategory = ref('all')

const categories = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'strategy', label: 'Strategy & Architecture' },
  { id: 'dev', label: 'Custom Engineering' },
  { id: 'growth', label: 'Search & Acquisition' }
]

const domains = [
  {
    title: 'Project Direction & Systems',
    category: 'strategy',
    tag: 'Executive',
    description: 'Senior product architecture, logic mapping, milestone management, and operational workflows.',
    bullets: ['Requirements Analysis', 'Conditional User Mapping', 'Sprint Management'],
    impact: '100% On-Time Delivery'
  },
  {
    title: 'Custom Web & App Engineering',
    category: 'dev',
    tag: 'Development',
    description: 'Hand-crafted reactive applications built with Vue 3, Vite, Node, and scalable microservices.',
    bullets: ['Custom Component Logic', 'API Integration', 'Zero Template Bloat'],
    impact: '<0.8s Page Load Times'
  },
  {
    title: 'Local SEO & Organic Dominance',
    category: 'growth',
    tag: 'Acquisition',
    description: 'Targeted organic rank engineering for competitive metropolitan markets and service categories.',
    bullets: ['Schema Architecture', 'Intent Keywording', 'Google Maps Top 3'],
    impact: '+340% Organic Inbounds'
  },
  {
    title: 'Conversion Funnel Optimization',
    category: 'growth',
    tag: 'Revenue',
    description: 'Eliminating friction points and designing high-persuasion conversion funnels that convert visitors.',
    bullets: ['Behavioral Analytics', 'Form Friction Reduction', 'A/B Testing Loops'],
    impact: '+64% Conversion Lift'
  },
  {
    title: 'Brand Identity & Visual Direction',
    category: 'strategy',
    tag: 'Branding',
    description: 'Distinctive, authoritative brand positioning that communicates market leadership and credibility.',
    bullets: ['Editorial Typography', 'Logo & Visual Systems', 'Brand Guidelines'],
    impact: 'Elevated Market Authority'
  },
  {
    title: 'Paid Media & High-Intent PPC',
    category: 'growth',
    tag: 'Performance',
    description: 'Data-driven Google Ads and Meta performance campaigns engineered for minimum CPA.',
    bullets: ['Negative Keyword Auditing', 'Dynamic Landing Pages', 'Real-Time ROI Tracking'],
    impact: '-62% Acquisition Cost'
  },
  {
    title: 'Enterprise Technical Architecture',
    category: 'dev',
    tag: 'Scale',
    description: 'Secure, high-availability hosting pipelines, automated deployments, and continuous monitoring.',
    bullets: ['Edge Deployment', 'Zero Downtime', 'Enterprise Security'],
    impact: '99.99% Guaranteed Uptime'
  },
  {
    title: 'Founder Advisory & Mentorship',
    category: 'strategy',
    tag: 'Advisory',
    description: 'Direct strategic counsel for startup founders on technical roadmap, team hiring, and capital deployment.',
    bullets: ['MVP Scoping', 'Technical Due Diligence', 'Founder Coaching'],
    impact: 'Capital Efficiency'
  }
]

const filteredDomains = computed(() => {
  if (activeCategory.value === 'all') return domains
  return domains.filter(d => d.category === activeCategory.value)
})
</script>
