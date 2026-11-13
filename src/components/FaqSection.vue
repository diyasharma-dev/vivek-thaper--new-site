<template>
  <section id="faq" class="py-24 relative overflow-hidden bg-dark-950">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold">
          <HelpCircle class="w-3.5 h-3.5" />
          <span>Clarity &amp; Transparency</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
          Frequently Asked <span class="gold-gradient-text">Questions</span>
        </h2>
        <p class="text-slate-300 text-base leading-relaxed">
          Clear answers regarding advisory engagements, technical capabilities, and project delivery timelines.
        </p>
      </div>

      <!-- FAQ Accordion List -->
      <div class="space-y-4">
        <div 
          v-for="(item, idx) in faqs" 
          :key="item.q"
          class="rounded-2xl glass-panel border border-slate-800 overflow-hidden transition-all"
        >
          <button 
            @click="activeFaq = activeFaq === idx ? -1 : idx"
            class="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-850/50 transition-colors focus:outline-none"
          >
            <span class="text-sm sm:text-base font-bold text-white font-display">{{ item.q }}</span>
            <ChevronDown 
              class="w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300"
              :class="{ 'rotate-180 text-brand-400': activeFaq === idx }"
            />
          </button>

          <div 
            v-if="activeFaq === idx"
            class="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60"
          >
            {{ item.a }}
          </div>
        </div>
      </div>

      <!-- Still have questions footer banner -->
      <div class="mt-12 p-6 rounded-2xl bg-dark-900 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="text-center sm:text-left">
          <h4 class="text-sm font-bold text-white">Have a specific question about your project?</h4>
          <p class="text-xs text-slate-400">Speak directly with Vivek Thapar. No obligations, zero sales pressure.</p>
        </div>
        <a 
          href="tel:+17182074446"
          class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-dark-850 border border-slate-700 hover:border-brand-500/50 transition-all shrink-0"
        >
          <Phone class="w-3.5 h-3.5 text-brand-400" />
          <span>Call: (718) 207-4446</span>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { HelpCircle, ChevronDown, Phone } from 'lucide-vue-next'

const activeFaq = ref(0)

const faqs = [
  {
    q: 'Who is Vivek Thapar and what is Mirch Media?',
    a: 'Vivek Thapar is a serial entrepreneur, growth strategist, and the Founder & CEO of Mirch Media, an acclaimed digital marketing and web engineering agency established in 2006 in Forest Hills, Queens, NYC. With over 21 years in tech, he has launched 500+ projects across 15+ industries.'
  },
  {
    q: 'What makes working with Vivek different from a traditional marketing agency?',
    a: 'Direct founder accountability. Vivek doesn\'t hand your project off to junior account managers. You get direct senior engineering oversight, custom-coded architecture rather than bloated templates, and a logical, business-first methodology that protects your capital and scales revenue.'
  },
  {
    q: 'What industries and client stages do you specialize in?',
    a: 'Vivek works across high-intent legal practices (personal injury, corporate litigation), healthcare & dental, real estate & property management, enterprise retail franchises, e-commerce, and high-growth venture startups needing custom digital infrastructure.'
  },
  {
    q: 'How does the consultation and strategy onboarding process work?',
    a: 'It starts with a complimentary 30-minute Executive Strategy Call. Vivek conducts a deep-dive analysis of your current digital assets, search visibility, conversion bottlenecks, and competition. Within one business day, you receive a tailored roadmap detailing exact technical and marketing action steps.'
  },
  {
    q: 'How can I book Vivek Thapar for a keynote speech or panel?',
    a: 'You can submit an inquiry through the booking form below or reach out directly at (718) 207-4446. Vivek regularly keynotes at technology conferences, university summits, and entrepreneurship retreats on AI search disruption, revenue engineering, and civic leadership.'
  },
  {
    q: 'Do you offer mentorship for early-stage startup founders?',
    a: 'Yes. Vivek actively mentors emerging entrepreneurs across New York City through local incubation programs, university alumni panels, and fraternal initiatives, offering guidance on business models, MVP validation, and fundraising strategy.'
  }
]
</script>
