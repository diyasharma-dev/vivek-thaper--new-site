<template>
  <section id="domains" class="py-24 relative overflow-hidden bg-dark-900/40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold">
          <Layers class="w-3.5 h-3.5" />
          <span>Executive Knowledgebase</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
          Specialized Domains <span class="gold-gradient-text">&amp; Capabilities</span>
        </h2>
        <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
          Comprehensive full-lifecycle execution — from product logic and custom coding to omnichannel customer acquisition.
        </p>

        <!-- Category Filter Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2 pt-4">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer',
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-600/30'
                : 'bg-dark-850/80 text-slate-400 hover:text-white border border-slate-800'
            ]"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Domain Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="domain in filteredDomains"
          :key="domain.title"
          class="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between group"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <div :class="['w-11 h-11 rounded-xl flex items-center justify-center border', domain.iconBg]">
                <component :is="domain.icon" class="w-5 h-5" :class="domain.iconColor" />
              </div>
              <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-dark-950/80 text-slate-400 border border-slate-800">
                {{ domain.tag }}
              </span>
            </div>

            <h3 class="text-base font-bold text-white font-display mb-2 group-hover:text-brand-300 transition-colors">
              {{ domain.title }}
            </h3>

            <p class="text-xs text-slate-300 leading-relaxed mb-4">
              {{ domain.description }}
            </p>

            <ul class="space-y-1.5 pt-2 border-t border-slate-800/80">
              <li 
                v-for="bullet in domain.bullets" 
                :key="bullet"
                class="flex items-center gap-2 text-[11px] text-slate-400"
              >
                <div class="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0"></div>
                <span>{{ bullet }}</span>
              </li>
            </ul>
          </div>

          <div class="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between">
            <span class="text-[10px] text-slate-500 font-medium">Metric Impact</span>
            <span class="text-xs font-bold text-brand-400">{{ domain.impact }}</span>
          </div>
        </div>
      </div>

      <!-- Studio & NYC Office Feature Strip: aspect-[4/3] avoids awkward square crop -->
      <div class="mt-16 p-8 rounded-3xl glass-panel border border-slate-700/70 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-4 rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto h-full min-h-[220px] relative border border-slate-700/50">
          <img 
            src="/media/web-design-studio.webp" 
            alt="Modern Web Design & Engineering Studio"
            class="w-full h-full object-cover object-center"
          />
          <div class="absolute inset-0 bg-dark-950/40"></div>
          <div class="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-dark-950/80 backdrop-blur-md border border-slate-700 text-[11px] font-bold text-white">
            NYC Development Lab
          </div>
        </div>

        <div class="lg:col-span-8 space-y-3">
          <div class="inline-flex items-center gap-2 text-xs font-bold text-brand-400 uppercase tracking-wider">
            <Terminal class="w-4 h-4" />
            <span>Architecture &amp; Full-Stack Tech Stack</span>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold font-display text-white">
            Engineered for Extreme Speed, Conversions &amp; Modern Search
          </h3>
          <p class="text-sm text-slate-300 leading-relaxed">
            From reactive Vue.js web applications, headless commerce, and high-performance serverless backends to AI-assisted workflow engines. Vivek aligns modern engineering with proven business fundamentals.
          </p>

          <div class="flex flex-wrap gap-2 pt-2">
            <span 
              v-for="tech in techBadges" 
              :key="tech"
              class="px-2.5 py-1 rounded-lg bg-dark-950/80 border border-slate-800 text-xs font-mono text-slate-300"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { 
  Layers, Search, Globe, Target, Cpu, 
  Workflow, Palette, ShieldCheck, UserCheck, Terminal 
} from 'lucide-vue-next'

const categories = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'strategy', label: 'Strategy & Advisory' },
  { id: 'engineering', label: 'Engineering & Web' },
  { id: 'growth', label: 'Marketing & SEO' }
]

const activeCategory = ref('all')

const techBadges = [
  'Vue.js 3', 'Vite', 'Tailwind CSS', 'TypeScript', 'Node.js', 
  'Headless CMS', 'Next.js', 'REST & GraphQL', 'AI Workflows', 'AWS / Cloudflare'
]

const domains = [
  {
    title: 'Digital Marketing Strategy',
    category: 'strategy',
    tag: 'Leadership',
    impact: '3.4x Avg Lead Growth',
    icon: Target,
    iconBg: 'bg-amber-500/10 border-amber-500/20',
    iconColor: 'text-amber-400',
    description: 'Bespoke go-to-market and full-funnel customer acquisition roadmaps tailored to client industry economics.',
    bullets: ['Market penetration roadmaps', 'Unit economic optimization', 'Multi-channel attribution']
  },
  {
    title: 'High-Authority SEO & AI Search',
    category: 'growth',
    tag: 'Organic',
    impact: '#1 Rankings in NYC',
    icon: Search,
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    iconColor: 'text-emerald-400',
    description: 'Architecting search dominance across Google, Google Maps 3-Pack, and emerging AI generative search models.',
    bullets: ['Hyperlocal Queens/NYC 3-pack', 'Technical crawl audit & speed', 'Generative Engine Optimization']
  },
  {
    title: 'Custom Web & App Architecture',
    category: 'engineering',
    tag: 'Full-Stack',
    impact: 'Sub-second Load Times',
    icon: Globe,
    iconBg: 'bg-blue-500/10 border-blue-500/20',
    iconColor: 'text-blue-400',
    description: 'Custom-coded Vue.js and modern web infrastructure engineered for ultra-fast performance and seamless UX.',
    bullets: ['Custom Vue / SPA development', 'Mobile responsive first', 'Security & HIPAA compliance']
  },
  {
    title: 'High-ROI Paid Advertising',
    category: 'growth',
    tag: 'Performance',
    impact: '-69% CPA Reduction',
    icon: Cpu,
    iconBg: 'bg-purple-500/10 border-purple-500/20',
    iconColor: 'text-purple-400',
    description: 'Precision PPC campaigns across Google Ads, Meta Ads, and TikTok with conversion-rate optimization.',
    bullets: ['Negative keyword sculpting', 'High-intent search capture', 'Dynamic retargeting funnels']
  },
  {
    title: 'Sales Automation & Logic Systems',
    category: 'engineering',
    tag: 'Automation',
    impact: '100% Lead Capture',
    icon: Workflow,
    iconBg: 'bg-rose-500/10 border-rose-500/20',
    iconColor: 'text-rose-400',
    description: 'If-this-then-that automation mapping that captures every inbound lead, books calls, and syncs to CRM.',
    bullets: ['Automated SMS/Email follow-ups', 'CRM & calendar integration', 'Zero missed opportunities']
  },
  {
    title: 'Product Branding & Identity',
    category: 'strategy',
    tag: 'Design',
    impact: 'Premium Perception',
    icon: Palette,
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    iconColor: 'text-cyan-400',
    description: 'Comprehensive brand positioning, visual design systems, and digital assets that instill institutional trust.',
    bullets: ['Brand architecture & guidelines', 'High-impact design language', 'Conversion copywriting']
  },
  {
    title: 'Enterprise Project Management',
    category: 'strategy',
    tag: 'Execution',
    impact: 'On-Time, On-Budget',
    icon: ShieldCheck,
    iconBg: 'bg-orange-500/10 border-orange-500/20',
    iconColor: 'text-orange-400',
    description: '21+ years running engineering sprints, scoping requirements, managing cross-functional teams, and delivery.',
    bullets: ['Agile delivery workflows', 'Risk mitigation & QA', 'Stakeholder alignment']
  },
  {
    title: 'Startup Advisory & Mentorship',
    category: 'strategy',
    tag: 'Advisory',
    impact: '100+ Founders Mentored',
    icon: UserCheck,
    iconBg: 'bg-teal-500/10 border-teal-500/20',
    iconColor: 'text-teal-400',
    description: 'Hands-on business mentorship for early-stage founders in NYC navigating product-market fit and funding.',
    bullets: ['Pitch deck & model refinement', 'Operational scaling strategies', 'NYC tech ecosystem access']
  }
]

const filteredDomains = computed(() => {
  if (activeCategory.value === 'all') return domains
  return domains.filter(d => d.category === activeCategory.value)
})
</script>
