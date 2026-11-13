<template>
  <section id="speaking" class="py-24 relative overflow-hidden bg-[#0c0d10] border-t border-white/[0.06]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 space-y-3">
        <span class="eyebrow-label">
          <Mic class="w-3.5 h-3.5" />
          <span>Keynotes &amp; Industry Engagements</span>
        </span>
        <h2 class="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight leading-tight">
          Keynote Addresses, Masterclasses &amp; Strategic Panels
        </h2>
        <p class="text-neutral-300 text-base leading-relaxed font-sans">
          Delivering practical, high-value presentations on entrepreneurship, AI search disruption, engineering management, and civic duty.
        </p>
      </div>

      <!-- Main Grid: Keynote Photo & Topics -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
        
        <!-- Keynote Stage Photo (5 cols) -->
        <div class="lg:col-span-5 relative">
          <div class="card-architectural p-3 shadow-2xl">
            <div class="relative rounded-lg overflow-hidden aspect-[3/4] bg-[#090a0d]">
              <img 
                src="/media/vivek-thapar-keynote.webp" 
                alt="Vivek Thapar delivering keynote at NYC conference"
                class="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02]"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0c0d10]/90 via-transparent to-transparent pointer-events-none"></div>

              <div class="absolute bottom-3 inset-x-3 p-3 rounded-md bg-[#0c0d10]/90 backdrop-blur-md border border-white/[0.08]">
                <span class="text-[10px] font-mono uppercase tracking-wider text-[#c59b63] block mb-0.5 font-medium">Live Stage Appearance</span>
                <p class="text-xs font-semibold text-white">NYC Tech &amp; Business Summits</p>
                <p class="text-[11px] text-neutral-300">Keynotes, university masterclasses, and executive roundtables</p>
              </div>
            </div>

            <!-- Caption below stage photo -->
            <div class="mt-3 px-2 py-0.5 flex items-center justify-between text-[11px] text-neutral-300 font-mono">
              <span class="font-medium text-neutral-200">Keynote Speaker &amp; Panelist</span>
              <span class="text-neutral-400">Available Worldwide</span>
            </div>
          </div>
        </div>

        <!-- Topics Accordion & Details (7 cols) -->
        <div class="lg:col-span-7 space-y-4">
          <div class="mb-2">
            <h3 class="text-xl font-serif text-white">Signature Keynote Presentations</h3>
            <p class="text-xs sm:text-sm text-neutral-300 mt-1 font-sans">Tailored for corporate conferences, university panels, and executive leadership retreats.</p>
          </div>

          <div 
            v-for="(topic, idx) in topics" 
            :key="topic.title"
            class="card-architectural p-5 cursor-pointer"
            @click="activeTopic = activeTopic === idx ? -1 : idx"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="text-xs font-mono font-semibold text-[#c59b63]">0{{ idx + 1 }}</span>
                <h4 class="text-sm sm:text-base font-semibold text-white">{{ topic.title }}</h4>
              </div>
              <ChevronDown 
                class="w-4 h-4 text-neutral-300 transition-transform duration-200" 
                :class="{ 'rotate-180 text-[#c59b63]': activeTopic === idx }"
              />
            </div>

            <div v-if="activeTopic === idx" class="mt-3 pt-3 border-t border-white/[0.06] text-xs sm:text-sm text-neutral-200 leading-relaxed space-y-2 font-sans">
              <p>{{ topic.description }}</p>
              <div class="flex flex-wrap gap-1.5 pt-1">
                <span 
                  v-for="tag in topic.tags" 
                  :key="tag"
                  class="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0c0d10] text-[#c59b63] font-medium border border-white/[0.08]"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Booking Callout Banner -->
          <div class="mt-6 p-6 rounded-xl card-architectural flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="space-y-0.5 text-center sm:text-left">
              <h4 class="text-sm font-semibold text-white">Book Vivek for Your Next Event</h4>
              <p class="text-xs sm:text-sm text-neutral-300 font-sans">Keynotes · Fireside Chats · Executive Workshops</p>
            </div>
            <router-link 
              to="/contact" 
              class="btn-primary text-xs shrink-0"
            >
              Request Speaker Rider
            </router-link>
          </div>

        </div>

      </div>

      <!-- Awards & Press Recognition Triplet -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="card-architectural p-6">
          <div class="flex items-center justify-between mb-3">
            <span class="text-[10px] font-mono uppercase tracking-wider text-[#c59b63] font-medium">Agency Leadership</span>
            <span class="text-xs text-neutral-400 font-mono">2006 – 2026</span>
          </div>
          <h4 class="text-base font-semibold text-white mb-1">Mirch Media Milestone</h4>
          <p class="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
            Recognized as a premier independent digital agency in Queens and the Greater New York Metropolitan area.
          </p>
        </div>

        <div class="card-architectural p-6">
          <div class="flex items-center justify-between mb-3">
            <span class="text-[10px] font-mono uppercase tracking-wider text-[#c59b63] font-medium">Collegiate Impact</span>
            <span class="text-xs text-neutral-400 font-mono">National</span>
          </div>
          <h4 class="text-base font-semibold text-white mb-1">Iota Nu Delta Directorate</h4>
          <p class="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
            Guiding leadership development, scholarship, and community service across 25+ university chapters.
          </p>
        </div>

        <div class="card-architectural p-6">
          <div class="flex items-center justify-between mb-3">
            <span class="text-[10px] font-mono uppercase tracking-wider text-[#c59b63] font-medium">Civic Leadership</span>
            <span class="text-xs text-neutral-400 font-mono">NYC Parks</span>
          </div>
          <h4 class="text-base font-semibold text-white mb-1">Urban Public Space Initiative</h4>
          <p class="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
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
