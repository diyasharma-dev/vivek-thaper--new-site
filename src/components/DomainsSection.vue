<template>
  <section id="domains" class="py-20 sm:py-24 md:py-28 relative overflow-hidden border-b border-white/[0.08]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-12 sm:mb-16 space-y-3">
        <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
          <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span>Core Capabilities &amp; Stack</span>
        </div>
        <h2 class="hero-headline text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
          Specialized Disciplines Directed by <span class="gradient-text-brand">Vivek Thapar</span>
        </h2>
        <p class="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
          Vivek directs project logic, growth strategy, and quality oversight — while Mirch Media's dedicated engineering &amp; design team delivers production builds.
        </p>

        <!-- Category Filter Tabs -->
        <div class="w-full max-w-full flex overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none sm:flex-wrap items-center gap-1.5 sm:gap-2 pt-2 bg-white/[0.03] p-1.5 rounded-2xl border border-white/[0.08]">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="[
              'px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap',
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-glow-red'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
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
          class="card-glass p-6 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group"
        >
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs font-mono font-bold text-red-400">0{{ idx + 1 }}</span>
              <span class="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-slate-300 font-bold">
                {{ domain.tag }}
              </span>
            </div>

            <h3 class="text-base sm:text-lg font-heading font-bold text-white mb-2.5 group-hover:text-red-400 transition-colors">
              {{ domain.title }}
            </h3>

            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-sans">
              {{ domain.description }}
            </p>

            <ul class="space-y-2 pt-3 border-t border-white/[0.08]">
              <li 
                v-for="skill in domain.skills" 
                :key="skill"
                class="flex items-start gap-2 text-xs text-slate-300 font-sans"
              >
                <div class="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5"></div>
                <span>{{ skill }}</span>
              </li>
            </ul>
          </div>

          <!-- Bottom Focus Badge -->
          <div class="mt-6 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono">
            <span class="text-slate-400">Execution</span>
            <span class="text-white font-bold">{{ domain.focus }}</span>
          </div>

        </div>
      </div>

      <!-- Tech Stack Badges Strip -->
      <div class="mt-14 sm:mt-18 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c0f1d] via-[#101426] to-[#0c0f1d] text-white border border-white/10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div class="space-y-1.5 relative z-10">
          <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
            <span class="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
            <span>Production Technology</span>
          </div>
          <h3 class="text-base sm:text-lg font-heading font-bold text-white">Agency Technical Matrix</h3>
          <p class="text-xs sm:text-sm text-slate-300 font-sans max-w-xl">Technologies and frameworks leveraged by our engineering team at Mirch Media under Vivek's direct project management.</p>
        </div>

        <div class="flex flex-wrap gap-2 relative z-10">
          <span 
            v-for="tech in techStack" 
            :key="tech"
            class="px-3 py-1.5 rounded-xl text-xs font-mono bg-white/[0.05] text-slate-200 border border-white/10 font-medium hover:border-red-500/50 hover:text-white hover:bg-white/[0.1] transition-all"
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

const activeCategory = ref('all')

const categories = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'dev', label: 'Web & Applications' },
  { id: 'growth', label: 'SEO & Marketing' },
  { id: 'leadership', label: 'Project Management' }
]

const domains = [
  {
    title: 'Custom Web & Application Development',
    category: 'dev',
    tag: 'Engineering',
    description: 'High-performance reactive frontend web applications, secure REST APIs, bespoke client intake portals, and mobile-responsive architectures built by our specialized team.',
    skills: ['Vue.js & Modern Web Architecture', 'Tailwind CSS Custom Design Systems', 'Full-Stack Development by Agency Team', 'Fast Page Load & API Integrations'],
    focus: 'Custom-Coded Systems'
  },
  {
    title: 'Local SEO & Google Maps Presence',
    category: 'growth',
    tag: 'Acquisition',
    description: 'Methodical local search optimization across New York City and Tri-State boroughs, securing high-visibility Google Maps placement for commercial practices.',
    skills: ['Google Business Profile Optimization', 'Hyper-Local Borough Landing Pages', 'Structured Schema & Citation Consistency', 'Customer Review Acceleration'],
    focus: 'Google 3-Pack Presence'
  },
  {
    title: 'Paid Acquisition & Funnel Strategy',
    category: 'growth',
    tag: 'Performance',
    description: 'Data-driven paid search and social campaigns focused on high-intent lead acquisition, negative keyword sculpting, and frictionless landing page experiences.',
    skills: ['Google Ads PPC & Search Intent', 'Meta & Multi-Channel Remarketing', 'A/B Landing Page Testing', 'Conversion Flow Architecture'],
    focus: 'High-Intent Leads'
  },
  {
    title: 'Natural Project Management & Logic Planning',
    category: 'leadership',
    tag: 'Executive',
    description: 'Direct founder leadership, if-this-then-that software logic mapping, cross-functional developer direction, and consistent on-time milestone delivery.',
    skills: ['If-This-Then-That Business Logic', 'Agile Product & Sprint Planning', 'Cross-Functional Team Direction', 'Hands-on Founder Review'],
    focus: 'Founder Accountability'
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
