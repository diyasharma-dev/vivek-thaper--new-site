<template>
  <section id="faq" class="py-24 relative overflow-hidden bg-white border-b border-slate-200/80">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 space-y-3">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 text-orange-700 font-mono text-[11px] font-bold tracking-wider uppercase shadow-2xs">
          <HelpCircle class="w-3.5 h-3.5 text-orange-500" />
          <span>Clarity &amp; Engagements</span>
        </span>
        <h2 class="text-3xl sm:text-4xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
          Frequently Answered <span class="gradient-text-brand">Founder Questions</span>
        </h2>
        <p class="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
          Clear, straightforward answers regarding advisory engagements, technical capabilities, and project delivery timelines.
        </p>
      </div>

      <!-- FAQ Accordion List -->
      <div class="space-y-3">
        <div 
          v-for="(item, idx) in faqs" 
          :key="item.q"
          class="border rounded-2xl overflow-hidden transition-all shadow-2xs"
          :class="activeFaq === idx ? 'border-orange-300 shadow-sm bg-gradient-to-r from-orange-50/20 via-white to-amber-50/20' : 'border-slate-200 bg-white'"
        >
          <button 
            @click="activeFaq = activeFaq === idx ? -1 : idx"
            class="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors focus:outline-none cursor-pointer"
            :class="activeFaq === idx ? 'bg-orange-50/40' : 'hover:bg-orange-50/20'"
          >
            <span class="text-sm sm:text-base font-heading font-bold text-slate-900">{{ item.q }}</span>
            <ChevronDown 
              class="w-4 h-4 shrink-0 transition-transform duration-200"
              :class="activeFaq === idx ? 'rotate-180 text-orange-600' : 'text-slate-400'"
            />
          </button>

          <div 
            v-if="activeFaq === idx"
            class="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-orange-100 bg-white/60 font-sans"
          >
            {{ item.a }}
          </div>
        </div>
      </div>

      <!-- Still have questions footer banner -->
      <div class="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-orange-500/30 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
        <div class="absolute -top-10 -right-10 w-48 h-48 bg-orange-500/15 rounded-full blur-2xl pointer-events-none"></div>
        <div class="relative z-10">
          <h4 class="text-base font-heading font-bold text-white">Have a nuanced architectural question?</h4>
          <p class="text-xs sm:text-sm text-slate-300 mt-0.5 font-sans">Speak directly with Vivek. No junior sales pitch, just practical strategic clarity.</p>
        </div>
        <router-link 
          to="/contact" 
          class="btn-primary text-xs shrink-0 relative z-10"
        >
          <span>Schedule Strategy Call</span>
          <ArrowRight class="w-3.5 h-3.5 text-white" />
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
    a: 'Yes. Vivek delivers keynotes and masterclasses worldwide on AI search disruption (GEO), project management logic, bootstrapping agencies, and civic leadership. Inquiries can be submitted directly via the Contact page.'
  }
]
</script>
