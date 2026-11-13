<template>
  <section id="speaking" class="py-24 relative overflow-hidden bg-white border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 space-y-3">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-mono text-[11px] font-semibold tracking-wider uppercase shadow-2xs">
          <Mic class="w-3.5 h-3.5 text-amber-600" />
          <span>Keynotes &amp; Industry Engagements</span>
        </span>
        <h2 class="text-3xl sm:text-4xl font-serif font-normal text-slate-900 tracking-tight leading-tight">
          Keynote Addresses, Masterclasses &amp; Strategic Panels
        </h2>
        <p class="text-slate-600 text-base leading-relaxed font-sans">
          Delivering practical, high-value presentations on entrepreneurship, AI search disruption, engineering management, and civic duty.
        </p>
      </div>

      <!-- Main Grid: Keynote Photo & Topics -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
        
        <!-- Keynote Stage Photo (5 cols) -->
        <div class="lg:col-span-5 relative">
          <div class="bg-slate-50 border border-slate-200 p-3.5 rounded-2xl shadow-xl">
            <div class="relative rounded-xl overflow-hidden aspect-[3/4] bg-slate-100">
              <img 
                src="/media/vivek-thapar-keynote.webp" 
                alt="Vivek Thapar delivering keynote at NYC conference"
                class="w-full h-full object-cover object-top filter contrast-[1.02]"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

              <div class="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                <span class="text-[10px] font-mono uppercase tracking-wider text-amber-700 block mb-0.5 font-bold">Live Stage Appearance</span>
                <p class="text-xs font-bold text-slate-900">NYC Tech &amp; Business Summits</p>
                <p class="text-[11px] text-slate-600">Keynotes, university masterclasses, and executive roundtables</p>
              </div>
            </div>

            <!-- Caption below stage photo -->
            <div class="mt-3 px-2 py-0.5 flex items-center justify-between text-[11px] text-slate-600 font-mono">
              <span class="font-semibold text-slate-800">Keynote Speaker &amp; Panelist</span>
              <span class="text-slate-400">Available Worldwide</span>
            </div>
          </div>
        </div>

        <!-- Topics Accordion & Details (7 cols) -->
        <div class="lg:col-span-7 space-y-4">
          <div class="mb-2">
            <h3 class="text-xl font-serif font-bold text-slate-900">Signature Keynote Presentations</h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-1 font-sans">Tailored for corporate conferences, university panels, and executive leadership retreats.</p>
          </div>

          <div 
            v-for="(topic, idx) in topics" 
            :key="topic.title"
            class="border border-slate-200 rounded-xl p-5 cursor-pointer transition-all shadow-2xs"
            :class="activeTopic === idx ? 'bg-white border-slate-300 shadow-sm' : 'bg-slate-50/70 hover:bg-slate-100/70'"
            @click="activeTopic = activeTopic === idx ? -1 : idx"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="text-xs font-mono font-bold text-amber-700">0{{ idx + 1 }}</span>
                <h4 class="text-sm sm:text-base font-bold text-slate-900">{{ topic.title }}</h4>
              </div>
              <ChevronDown 
                class="w-4 h-4 text-slate-500 transition-transform duration-200" 
                :class="{ 'rotate-180 text-amber-700': activeTopic === idx }"
              />
            </div>

            <div v-if="activeTopic === idx" class="mt-3 pt-3 border-t border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2 font-sans">
              <p>{{ topic.description }}</p>
              <div class="flex flex-wrap gap-1.5 pt-1">
                <span 
                  v-for="tag in topic.tags" 
                  :key="tag"
                  class="px-2.5 py-1 rounded-md text-[10px] font-mono bg-amber-50 text-amber-800 font-bold border border-amber-200/80"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Booking Callout Banner -->
          <div class="mt-6 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div class="space-y-0.5 text-center sm:text-left">
              <h4 class="text-sm font-bold text-white">Book Vivek for Your Next Event</h4>
              <p class="text-xs text-slate-300 font-sans">Keynotes · Fireside Chats · Executive Workshops</p>
            </div>
            <router-link 
              to="/contact" 
              class="px-4 py-2.5 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-md shrink-0 cursor-pointer"
            >
              Request Speaker Rider
            </router-link>
          </div>

        </div>

      </div>

      <!-- Awards & Press Recognition Triplet -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="card-architectural p-6 hover:-translate-y-0.5">
          <div class="flex items-center justify-between mb-3">
            <span class="text-[10px] font-mono uppercase tracking-wider text-amber-700 font-bold">Agency Leadership</span>
            <span class="text-xs text-slate-500 font-mono">2006 – 2026</span>
          </div>
          <h4 class="text-base font-bold text-slate-900 mb-1">Mirch Media Milestone</h4>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
            Recognized as a premier independent digital agency in Queens and the Greater New York Metropolitan area.
          </p>
        </div>

        <div class="card-architectural p-6 hover:-translate-y-0.5">
          <div class="flex items-center justify-between mb-3">
            <span class="text-[10px] font-mono uppercase tracking-wider text-amber-700 font-bold">Collegiate Impact</span>
            <span class="text-xs text-slate-500 font-mono">National</span>
          </div>
          <h4 class="text-base font-bold text-slate-900 mb-1">Iota Nu Delta Directorate</h4>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
            Guiding leadership development, scholarship, and community service across 25+ university chapters.
          </p>
        </div>

        <div class="card-architectural p-6 hover:-translate-y-0.5">
          <div class="flex items-center justify-between mb-3">
            <span class="text-[10px] font-mono uppercase tracking-wider text-amber-700 font-bold">Civic Leadership</span>
            <span class="text-xs text-slate-500 font-mono">NYC Parks</span>
          </div>
          <h4 class="text-base font-bold text-slate-900 mb-1">Urban Public Space Initiative</h4>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
            Honored for ongoing grassroots leadership with NYC Parks Department and Queens neighborhood restoration.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Mic, ChevronDown } from 'lucide-vue-next'

const activeTopic = ref(0)

const topics = [
  {
    title: 'Picking The Perfect Project Manager Is Essential',
    description: 'Why the intersection of software logic, consumer psychology, and relentless operational discipline determines company survival.',
    tags: ['Project Management', 'Operational Logic', 'Team Leadership']
  },
  {
    title: 'The AI Search Shift: Surviving GEO & Modern Search Engines',
    description: 'How generative AI and LLM search agents are redefining organic discovery, and how brands must restructure digital presence for AI visibility.',
    tags: ['Generative Engine Optimization', 'AI Search', 'Technical SEO']
  },
  {
    title: 'From Bootstrap to 20-Year Legacy: An NYC Founder Blueprint',
    description: 'Candid lessons from bootstrapping Mirch Media through multiple economic cycles, technological disruptions, and market shifts.',
    tags: ['Bootstrapping', 'Resilience', 'Entrepreneurship']
  },
  {
    title: 'Empathy in Product Engineering: Becoming Your Product',
    description: 'How understanding user behavioral psychology and mapping every conditional outcome creates digital products customers love.',
    tags: ['Product Empathy', 'User Experience', 'Conversion Architecture']
  }
]
</script>
