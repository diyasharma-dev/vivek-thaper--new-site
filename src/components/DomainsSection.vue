<template>
  <section id="domains" class="py-14 sm:py-16 md:py-20 relative overflow-hidden bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-10 sm:mb-12 space-y-2.5 sm:space-y-3">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/90 text-orange-700 font-mono text-[11px] font-bold tracking-wider uppercase shadow-2xs">
          <Layers class="w-3.5 h-3.5 text-orange-600" />
          <span>Agency Capabilities &amp; Stack</span>
        </span>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
          Specialized Disciplines Directed by Vivek Thapar
        </h2>
        <p class="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-sans">
          Vivek directs project logic, growth strategy, and quality oversight — while Mirch Media's dedicated engineering &amp; design team delivers production builds.
        </p>

        <!-- Category Filter Tabs (Horizontal Scrollable on Mobile) -->
        <div class="w-full max-w-full flex overflow-x-auto pb-1.5 -mx-1 px-1 scrollbar-none sm:flex-wrap items-center gap-1.5 sm:gap-2 pt-2">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'px-3.5 py-1.5 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap shadow-2xs',
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25'
                : 'bg-white text-slate-700 hover:text-orange-600 hover:bg-orange-50/50 border border-slate-200'
            ]"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Domain Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        <div
          v-for="(domain, idx) in filteredDomains"
          :key="domain.title"
          class="card-architectural p-5 sm:p-6 flex flex-col justify-between group hover:-translate-y-1 hover:border-orange-300 hover:shadow-orange-500/10"
        >
          <div>
            <div class="flex items-center justify-between mb-3.5">
              <span class="text-xs font-mono font-bold text-orange-600">0{{ idx + 1 }}</span>
              <span class="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-md bg-orange-50 text-orange-700 font-bold border border-orange-200/80">
                {{ domain.tag }}
              </span>
            </div>

            <h3 class="text-base sm:text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
              {{ domain.title }}
            </h3>

            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-sans">
              {{ domain.description }}
            </p>

            <ul class="space-y-1.5 pt-3 border-t border-slate-100">
              <li 
                v-for="skill in domain.skills" 
                :key="skill"
                class="flex items-center gap-2 text-xs text-slate-700 font-medium font-sans"
              >
                <div class="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></div>
                <span>{{ skill }}</span>
              </li>
            </ul>
          </div>

          <!-- Bottom Metric -->
          <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono">
            <span class="text-slate-500 font-medium">Standard</span>
            <span class="text-orange-600 font-bold">{{ domain.metric }}</span>
          </div>

        </div>
      </div>

      <!-- Tech Stack Badges Strip -->
      <div class="mt-10 sm:mt-12 p-5 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border border-orange-500/30 shadow-xl shadow-orange-500/5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6">
        <div class="space-y-1">
          <span class="text-[10px] font-mono uppercase tracking-widest text-orange-400 font-bold">Agency Tech Matrix</span>
          <h3 class="text-base sm:text-lg font-heading font-bold text-white">Agency Production Tech Stack</h3>
          <p class="text-xs text-slate-300 font-sans">Technologies and frameworks leveraged by our engineering team at Mirch Media under Vivek's direct project management.</p>
        </div>

        <div class="flex flex-wrap gap-1.5 sm:gap-2">
          <span 
            v-for="tech in techStack" 
            :key="tech"
            class="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700 font-medium hover:border-orange-500 hover:text-orange-300 transition-colors"
          >
            {{ tech }}
          </span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Layers } from 'lucide-vue-next'

const activeCategory = ref('all')

const categories = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'dev', label: 'Web & App Development' },
  { id: 'growth', label: 'SEO & Growth Strategy' },
  { id: 'leadership', label: 'Project Management & Advisory' }
]

const domains = [
  {
    title: 'Custom Web & Application Development',
    category: 'dev',
    tag: 'Agency Team',
    description: 'High-performance reactive frontend web applications, REST/GraphQL APIs, bespoke CMS setups, and client portals engineered by our specialized development team.',
    skills: ['Vue.js & Modern Web Architecture', 'Tailwind CSS Custom Design Systems', 'Full-Stack Development by Agency Team', 'Fast Page Load & API Integrations'],
    metric: '< 800ms Load Time'
  },
  {
    title: 'Local SEO Dominance & Google 3-Pack',
    category: 'growth',
    tag: 'Acquisition',
    description: 'Multi-location local search supremacy across New York City and national metros. Google Maps #1 positioning.',
    skills: ['Google Business Profile Optimization', 'Hyper-Local Geo-Landing Pages', 'Structured Data & Schema Graphs', 'Reputation & Citation Network'],
    metric: '#1 Map Rankings'
  },
  {
    title: 'Generative Engine Optimization (GEO)',
    category: 'growth',
    tag: 'Future-Proof',
    description: 'Engineering brand citations and algorithmic trust signals so LLMs (ChatGPT, Gemini, Perplexity) recommend your business.',
    skills: ['Knowledge Graph Entity Seeding', 'AI Search Citation Engineering', 'Semantic Schema Markup', 'Information Density Authoring'],
    metric: 'LLM Source Citation'
  },
  {
    title: 'Natural Project Management & Logic Planning',
    category: 'leadership',
    tag: 'Executive',
    description: 'Direct founder mentorship, if-this-then-that software logic architecture, team leadership, and on-time milestone delivery.',
    skills: ['If-This-Then-That Business Logic', 'Agile Product & Sprint Management', 'Cross-Functional Team Leadership', 'Startup Mentorship & Growth'],
    metric: '20+ Yrs Track Record'
  }
]

const techStack = [
  'Vue.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Python', 'TypeScript',
  'PostgreSQL', 'Redis', 'Twilio API', 'Stripe Payments', 'Google Cloud',
  'Docker', 'Cloudflare CDN', 'Schema.org JSON-LD'
]

const filteredDomains = computed(() => {
  if (activeCategory.value === 'all') return domains
  return domains.filter(d => d.category === activeCategory.value)
})
</script>