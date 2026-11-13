<template>
  <section class="py-24 relative overflow-hidden bg-[#0d0f12] border-t border-white/[0.06]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13161c] border border-white/[0.08] text-neutral-300 text-xs">
          <Quote class="w-3.5 h-3.5 text-[#d4a36a]" />
          <span class="font-mono uppercase tracking-widest text-[11px] text-[#d4a36a]">Client Endorsements</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight leading-tight">
          Executive Voices &amp; Long-Term Client Partnerships
        </h2>
        <p class="text-neutral-400 text-base leading-relaxed font-sans">
          What founders, managing attorneys, and corporate executives say about partnering directly with Vivek Thapar.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div 
          v-for="item in testimonials" 
          :key="item.author"
          class="p-8 rounded-xl bg-[#13161c] border border-white/[0.08] flex flex-col justify-between"
        >
          <div>
            <!-- Star rating in quiet matte brass -->
            <div class="flex items-center gap-1 text-[#d4a36a] mb-5">
              <Star v-for="n in 5" :key="n" class="w-3.5 h-3.5 fill-[#d4a36a]" />
            </div>

            <!-- Quote Text in editorial serif -->
            <p class="text-xs sm:text-sm text-neutral-300 leading-relaxed font-serif italic mb-6">
              "{{ item.quote }}"
            </p>
          </div>

          <!-- Author Info -->
          <div class="pt-4 border-t border-white/[0.06] flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg bg-[#0d0f12] border border-white/[0.1] flex items-center justify-center font-mono text-xs font-semibold text-[#d4a36a] shrink-0">
              {{ item.initials }}
            </div>
            <div>
              <h4 class="text-xs font-semibold text-white">{{ item.author }}</h4>
              <p class="text-[11px] text-[#d4a36a] font-normal">{{ item.role }}</p>
              <p class="text-[10px] text-neutral-500">{{ item.company }}</p>
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
