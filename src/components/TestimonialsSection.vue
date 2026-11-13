<template>
  <section class="py-24 relative overflow-hidden bg-dark-900/60 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold">
          <Star class="w-3.5 h-3.5 fill-brand-400 text-brand-400" />
          <span>Executive Endorsements</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
          Client Voices &amp; <span class="gold-gradient-text">Partner Trust</span>
        </h2>
        <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
          What founders, managing attorneys, and corporate executives say about working directly with Vivek Thapar.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div 
          v-for="item in testimonials" 
          :key="item.author"
          class="p-8 rounded-3xl glass-panel glass-panel-hover border border-slate-700/60 flex flex-col justify-between"
        >
          <div>
            <!-- Star rating -->
            <div class="flex items-center gap-1 text-brand-400 mb-4">
              <Star v-for="n in 5" :key="n" class="w-4 h-4 fill-brand-400" />
            </div>

            <!-- Quote Text -->
            <p class="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-6">
              "{{ item.quote }}"
            </p>
          </div>

          <!-- Author Info -->
          <div class="pt-4 border-t border-slate-800/80 flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-indigo-600 p-[1px] shrink-0">
              <div class="w-full h-full rounded-full bg-dark-950 flex items-center justify-center font-bold text-xs text-white">
                {{ item.initials }}
              </div>
            </div>
            <div>
              <h4 class="text-xs font-bold text-white">{{ item.author }}</h4>
              <p class="text-[11px] text-brand-300">{{ item.role }}</p>
              <p class="text-[10px] text-slate-500">{{ item.company }}</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { Star } from 'lucide-vue-next'

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
