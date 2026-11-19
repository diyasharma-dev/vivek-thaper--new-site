<template>
  <section id="faq" class="py-16 sm:py-24 relative overflow-hidden bg-transparent border-t border-white/10">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-12 sm:mb-16 space-y-3">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-500/30 text-red-400 font-mono text-xs font-bold tracking-wider uppercase shadow-glow-red">
          <HelpCircle class="w-3.5 h-3.5 text-red-500" />
          <span>Clarity &amp; Engagements</span>
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-[44px] font-heading font-black text-white tracking-tight leading-[1.2]">
          Frequently Answered <span class="gradient-text-brand">Founder Questions</span>
        </h2>
        <p class="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
          Clear, straightforward answers regarding advisory engagements, technical capabilities, and project delivery timelines.
        </p>
      </div>

      <!-- FAQ Accordion List -->
      <div class="space-y-3.5">
        <div 
          v-for="(item, idx) in faqs" 
          :key="item.q"
          class="rounded-2xl overflow-hidden transition-all duration-300"
          :class="activeFaq === idx ? 'card-glass border-red-500/40 shadow-glow-red' : 'bg-[#0c0e17]/80 border border-white/10 hover:border-white/20'"
        >
          <button 
            @click="activeFaq = activeFaq === idx ? -1 : idx"
            class="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors focus:outline-none cursor-pointer"
            :class="activeFaq === idx ? 'bg-red-950/20' : 'hover:bg-white/[0.02]'"
          >
            <span class="text-base sm:text-lg font-heading font-bold text-white">{{ item.q }}</span>
            <ChevronDown 
              class="w-4 h-4 shrink-0 transition-transform duration-300"
              :class="activeFaq === idx ? 'rotate-180 text-red-400' : 'text-slate-400'"
            />
          </button>

          <div 
            v-if="activeFaq === idx"
            class="px-5 sm:px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-white/10 bg-transparent font-sans"
          >
            {{ item.a }}
          </div>
        </div>
      </div>

      <!-- Still have questions footer banner -->
      <div class="mt-12 sm:mt-16 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0c0e17] via-[#141829] to-[#0c0e17] border border-red-500/30 text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left relative overflow-hidden">
        <div class="absolute -top-10 -right-10 w-60 h-60 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div class="relative z-10 space-y-1">
          <h4 class="text-lg sm:text-xl font-heading font-black text-white">Have a nuanced architectural question?</h4>
          <p class="text-xs sm:text-sm text-slate-300 font-sans">Speak directly with Vivek. No junior sales pitch, just practical strategic clarity.</p>
        </div>
        <router-link 
          to="/contact" 
          class="btn-primary text-xs shrink-0 relative z-10 w-full sm:w-auto shadow-glow-red"
        >
          <span>Schedule a Call</span>
          <ArrowRight class="w-3.5 h-3.5 ml-1 text-white shrink-0" />
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { HelpCircle, ChevronDown, ArrowRight } from 'lucide-vue-next'

const activeFaq = ref(0)

const faqs = [
  {
    q: 'Who works directly on my project?',
    a: 'Unlike traditional agencies that sell with senior leadership and then hand your work to offshore subcontractors or junior account managers, Vivek Thapar maintains direct strategic and technical oversight on every single engagement. All architecture and logic planning is conducted by Vivek personally.'
  },
  {
    q: 'Do I own the code, design files, and ad accounts?',
    a: 'Yes, 100%. All intellectual property, source code, design systems, domain names, and advertising accounts remain your exclusive property from day one. We never hold client assets hostage.'
  },
  {
    q: 'What industries does Vivek specialize in?',
    a: 'Over the past 20+ years, Vivek has architected platforms across 15+ sectors, with particular depth in high-intent legal practice (personal injury), enterprise property management & real estate, retail telecom franchises, healthcare systems, and mobile venture platforms.'
  },
  {
    q: 'How fast can an engagement begin?',
    a: 'Following our initial discovery and scope call, we typically deliver a comprehensive architectural logic blueprint within 3 to 5 business days. Development sprints begin immediately upon milestone authorization.'
  },
  {
    q: 'Can Vivek be booked for keynotes or panel discussions?',
    a: 'Yes. Vivek delivers keynotes and masterclasses on project management logic, local search acquisition, building enduring agencies, and civic leadership. Inquiries can be submitted directly via the Contact page.'
  }
]
</script>
