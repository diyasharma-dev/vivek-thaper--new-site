<template>
  <section id="faq" class="py-24 relative overflow-hidden bg-white border-b border-slate-200/80">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 space-y-3">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-mono text-[11px] font-semibold tracking-wider uppercase shadow-2xs">
          <HelpCircle class="w-3.5 h-3.5 text-amber-600" />
          <span>Clarity &amp; Engagements</span>
        </span>
        <h2 class="text-3xl sm:text-4xl font-serif font-normal text-slate-900 tracking-tight leading-tight">
          Frequently Answered Founder Questions
        </h2>
        <p class="text-slate-600 text-base leading-relaxed font-sans">
          Clear, straightforward answers regarding advisory engagements, technical capabilities, and project delivery timelines.
        </p>
      </div>

      <!-- FAQ Accordion List -->
      <div class="space-y-3">
        <div 
          v-for="(item, idx) in faqs" 
          :key="item.q"
          class="border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-2xs"
          :class="activeFaq === idx ? 'border-slate-300 shadow-sm' : ''"
        >
          <button 
            @click="activeFaq = activeFaq === idx ? -1 : idx"
            class="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors focus:outline-none cursor-pointer"
            :class="activeFaq === idx ? 'bg-slate-50' : 'bg-white hover:bg-slate-50/60'"
          >
            <span class="text-sm sm:text-base font-bold text-slate-900 font-sans">{{ item.q }}</span>
            <ChevronDown 
              class="w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200"
              :class="{ 'rotate-180 text-amber-700': activeFaq === idx }"
            />
          </button>

          <div 
            v-if="activeFaq === idx"
            class="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white font-sans"
          >
            {{ item.a }}
          </div>
        </div>
      </div>

      <!-- Still have questions footer banner -->
      <div class="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 class="text-sm sm:text-base font-bold text-white">Have a specific question regarding your platform?</h4>
          <p class="text-xs sm:text-sm text-slate-300 mt-0.5 font-sans">Speak directly with Vivek Thapar. No sales reps, zero pressure.</p>
        </div>
        <a 
          href="tel:+17182074446"
          class="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-bold text-slate-950 bg-amber-500 hover:bg-amber-400 transition-all shrink-0 shadow-md"
        >
          <Phone class="w-4 h-4 text-slate-950" />
          <span>(718) 207-4446</span>
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
    a: 'Vivek Thapar is a serial entrepreneur, digital strategist, and the Founder & CEO of Mirch Media, an acclaimed digital marketing and web engineering agency established in 2006 in Forest Hills, Queens, NYC. With over 21 years in technology, he has launched 500+ projects across 15+ industries.'
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
  }
]
</script>
