<template>
  <section id="speaking" class="py-24 relative overflow-hidden bg-dark-900/60 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold">
          <Mic class="w-3.5 h-3.5" />
          <span>Thought Leadership &amp; Appearances</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
          Keynote Speaking <span class="gold-gradient-text">&amp; Industry Insights</span>
        </h2>
        <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
          Sharing real-world battle-tested playbooks on entrepreneurship, AI search disruption, software engineering, and civic leadership.
        </p>
      </div>

      <!-- Main Grid: Keynote Photo & Topics -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
        
        <!-- Keynote Stage Photo (5 cols) -->
        <div class="lg:col-span-5 relative">
          <div class="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-dark-900 shadow-2xl p-2.5">
            <!-- Exact 3:4 aspect ratio matching 3024x4032 image with object-top preventing head crop -->
            <div class="relative rounded-2xl overflow-hidden aspect-[3/4] bg-dark-950">
              <img 
                src="/media/vivek-thapar-keynote.webp" 
                alt="Vivek Thapar delivering keynote at NYC conference"
                class="w-full h-full object-cover object-top filter brightness-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent"></div>

              <div class="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-dark-900/90 backdrop-blur-md border border-slate-700/60">
                <span class="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-brand-500/20 text-brand-300 uppercase tracking-wider mb-1">Live Stage</span>
                <p class="text-xs font-bold text-white">NYC Tech &amp; Business Conferences</p>
                <p class="text-[11px] text-slate-400">Keynote addresses, startup panels, and digital growth masterclasses</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Topics Accordion & Details (7 cols) -->
        <div class="lg:col-span-7 space-y-4">
          <div class="mb-4">
            <h3 class="text-xl sm:text-2xl font-bold font-display text-white">Signature Keynote Presentations</h3>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">Available for corporate conferences, university panels, and executive retreats.</p>
          </div>

          <div 
            v-for="(topic, idx) in topics" 
            :key="topic.title"
            class="p-5 rounded-2xl glass-panel glass-panel-hover border border-slate-800 transition-all cursor-pointer"
            @click="activeTopic = activeTopic === idx ? -1 : idx"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <span class="text-xs font-mono font-bold text-brand-400">0{{ idx + 1 }}</span>
                <h4 class="text-sm sm:text-base font-bold text-white font-display">{{ topic.title }}</h4>
              </div>
              <ChevronDown 
                class="w-4 h-4 text-slate-400 transition-transform duration-300" 
                :class="{ 'rotate-180 text-brand-400': activeTopic === idx }"
              />
            </div>

            <div v-if="activeTopic === idx" class="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-300 leading-relaxed space-y-2">
              <p>{{ topic.description }}</p>
              <div class="flex flex-wrap gap-2 pt-1">
                <span 
                  v-for="tag in topic.tags" 
                  :key="tag"
                  class="px-2 py-0.5 rounded text-[10px] font-semibold bg-dark-950 text-brand-300 border border-slate-800"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Booking Callout Banner -->
          <div class="mt-6 p-6 rounded-2xl bg-gradient-to-r from-dark-900 to-dark-850 border border-brand-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="space-y-1 text-center sm:text-left">
              <h4 class="text-sm font-bold text-white">Inquire for Speaking Engagements</h4>
              <p class="text-xs text-slate-400">Keynotes · Fireside Chats · Executive Workshops</p>
            </div>
            <router-link 
              to="/contact" 
              class="px-5 py-2.5 rounded-xl font-bold text-xs text-dark-950 bg-gradient-to-r from-brand-300 via-brand-gold to-brand-500 hover:from-brand-goldLight hover:to-brand-gold shadow-md transition-all shrink-0"
            >
              Request Speaker Rider
            </router-link>
          </div>

        </div>

      </div>

      <!-- Awards & Press Recognition Triplet -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div class="p-6 rounded-2xl glass-panel flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
            <Trophy class="w-6 h-6" />
          </div>
          <div>
            <h4 class="text-sm font-bold text-white font-display">Top-Rated NYC Digital Agency</h4>
            <p class="text-xs text-slate-400 mt-1">Recognized for sustained excellence and multi-channel revenue generation since 2006.</p>
          </div>
        </div>

        <div class="p-6 rounded-2xl glass-panel flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
            <Award class="w-6 h-6" />
          </div>
          <div>
            <h4 class="text-sm font-bold text-white font-display">20+ Years NYC Leadership</h4>
            <p class="text-xs text-slate-400 mt-1">Over two decades of direct founder participation across the New York business landscape.</p>
          </div>
        </div>

        <div class="p-6 rounded-2xl glass-panel flex items-start gap-4">
          <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
            <Sparkles class="w-6 h-6" />
          </div>
          <div>
            <h4 class="text-sm font-bold text-white font-display">AI Search &amp; GEO Pioneer</h4>
            <p class="text-xs text-slate-400 mt-1">Architecting cutting-edge Generative Engine Optimization for Tri-State enterprise brands.</p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Mic, ChevronDown, Trophy, Award, Sparkles } from 'lucide-vue-next'

const activeTopic = ref(0)

const topics = [
  {
    title: 'Architecting High-Velocity Revenue in the Digital Era',
    description: 'How modern businesses must marry custom software logic with ruthless conversion marketing. Why template-driven strategies fail and custom architecture consistently unlocks 3x to 5x lead multiples.',
    tags: ['Revenue Architecture', 'Growth Strategy', 'Executive Mindset']
  },
  {
    title: 'The Future of Search: Dominating Google & Generative AI Models',
    description: 'A deep-dive into how ChatGPT, Perplexity, and Google AI Overviews are replacing traditional search. How founders can future-proof their digital footprint and maintain #1 authority.',
    tags: ['AI Search', 'GEO Systems', 'Organic Dominance']
  },
  {
    title: 'The Relentless Project Manager: From Freelancer to Agency CEO',
    description: 'Vivek shares his 21-year journey of launching Mirch Media with zero capital in Queens to directing multi-million dollar digital infrastructure projects and managing elite teams.',
    tags: ['Entrepreneurship', 'Scaling Teams', 'Execution Logic']
  },
  {
    title: 'Civic Leadership & Heritage: Making a Life by What You Give',
    description: 'Bridging commercial success with community service. How founding volunteer parks groups, mentoring youth, and serving on fraternal boards builds an enduring legacy.',
    tags: ['Community Impact', 'Social Responsibility', 'NYC Leadership']
  }
]
</script>
