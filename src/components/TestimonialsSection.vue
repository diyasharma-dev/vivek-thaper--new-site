<template>
  <section class="py-24 relative overflow-hidden bg-slate-50/70 border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 space-y-3">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 font-mono text-[11px] font-semibold tracking-wider uppercase shadow-2xs">
          <Quote class="w-3.5 h-3.5 text-amber-600" />
          <span>Client Endorsements</span>
        </span>
        <h2 class="text-3xl sm:text-4xl font-serif font-normal text-slate-900 tracking-tight leading-tight">
          Executive Voices &amp; Long-Term Client Partnerships
        </h2>
        <p class="text-slate-600 text-base leading-relaxed font-sans">
          What founders, managing attorneys, and corporate executives say about partnering directly with Vivek Thapar.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div 
          v-for="item in testimonials" 
          :key="item.author"
          class="card-architectural p-8 flex flex-col justify-between hover:-translate-y-1"
        >
          <div>
            <!-- Star rating in warm amber -->
            <div class="flex items-center gap-1 text-amber-500 mb-5">
              <Star v-for="n in 5" :key="n" class="w-4 h-4 fill-amber-500" />
            </div>

            <!-- Quote Text in editorial serif -->
            <p class="text-sm text-slate-700 leading-relaxed font-serif italic mb-6">
              "{{ item.quote }}"
            </p>
          </div>

          <!-- Author Info -->
          <div class="pt-5 border-t border-slate-100 flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-mono text-xs font-bold text-slate-900 shrink-0">
              {{ item.initials }}
            </div>
            <div>
              <h4 class="text-xs font-bold text-slate-900 font-sans">{{ item.author }}</h4>
              <p class="text-[11px] text-amber-700 font-semibold font-sans">{{ item.role }}</p>
              <p class="text-[10px] text-slate-500 font-sans">{{ item.company }}</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { Star, Quote } from 'lucide-vue-next'

const testimonials = [
  {
    quote: "Vivek's understanding of high-intent search and conversion funnel logic transformed our legal practice. Our qualified inbound call volume jumped to 40+ calls a day while reducing our acquisition costs by over 60%. Having the founder directly involved makes all the difference.",
    author: "Managing Partner",
    role: "Legal Practice Director",
    company: "1-800-ACCIDENT / Tri-State Litigation",
    initials: "MP"
  },
  {
    quote: "Most agencies give you cookie-cutter talk. Vivek treats your capital like his own. From engineering our tenant portal to scaling localized campaign reach, his logic and execution speed are unmatched in New York.",
    author: "Senior Operations Director",
    role: "Property Management & Asset Operations",
    company: "Zara Realty Group",
    initials: "SO"
  },
  {
    quote: "As a startup founder, finding an advisor who understands both hardcore software engineering and aggressive customer acquisition is rare. Vivek guided our architecture and marketing rollout with flawless precision.",
    author: "Founder & CEO",
    role: "Mobile App Platform",
    company: "BarberAnywhere Ecosystem",
    initials: "FA"
  }
]
</script>
