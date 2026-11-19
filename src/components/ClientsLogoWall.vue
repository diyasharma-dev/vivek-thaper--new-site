<template>
  <section class="py-10 sm:py-14 relative overflow-hidden bg-gradient-to-b from-white via-red-50/20 to-white border-b border-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center mb-6 sm:mb-8">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-red-700 font-mono text-[11px] font-bold tracking-wider uppercase shadow-2xs mb-2">
          Commercial Partnerships
        </span>
        <p class="text-xs sm:text-sm font-heading font-bold text-slate-700">
          Trusted by Commercial Businesses &amp; New York Regional Institutions
        </p>
      </div>

      <!-- Infinite Smooth Moving Marquee Carousel -->
      <div class="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] py-2">
        <div class="animate-marquee flex items-center gap-4 sm:gap-6 w-max">
          <!-- Double list to create seamless infinite loop -->
          <div 
            v-for="(client, index) in marqueeClients" 
            :key="`${client.name}-${index}`"
            class="w-44 sm:w-52 h-20 sm:h-24 px-4 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-red-300 transition-all flex flex-col items-center justify-center gap-1.5 group cursor-default shrink-0"
          >
            <div class="h-8 sm:h-9 w-full flex items-center justify-center">
              <img 
                :src="client.logo" 
                :alt="client.name"
                class="max-h-7 sm:max-h-8 max-w-[110px] sm:max-w-[130px] w-auto h-auto object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                loading="lazy"
              />
            </div>
            <span class="text-[10px] font-mono font-bold text-slate-400 group-hover:text-red-600 transition-colors truncate max-w-full">
              {{ client.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- Trust & Engagement Principles with Colorful Icon Badges -->
      <div class="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:flex sm:flex-wrap items-center justify-center gap-2.5 sm:gap-x-8 sm:gap-y-4 lg:gap-12 text-slate-700 text-xs font-sans">
        <div class="flex items-center gap-2.5 px-3.5 py-2.5 sm:p-0 rounded-xl sm:rounded-none bg-white sm:bg-transparent border border-slate-100 sm:border-none">
          <div class="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs">
            <ShieldCheck class="w-4 h-4" />
          </div>
          <span class="font-bold text-slate-800">100% Client Code &amp; Asset Ownership</span>
        </div>
        <div class="flex items-center gap-2.5 px-3.5 py-2.5 sm:p-0 rounded-xl sm:rounded-none bg-white sm:bg-transparent border border-slate-100 sm:border-none">
          <div class="w-7 h-7 rounded-lg bg-red-100 text-red-600 flex items-center justify-center shrink-0 shadow-2xs">
            <CheckCircle class="w-4 h-4" />
          </div>
          <span class="font-bold text-slate-800">Direct Executive Oversight &amp; Review</span>
        </div>
        <div class="flex items-center gap-2.5 px-3.5 py-2.5 sm:p-0 rounded-xl sm:rounded-none bg-white sm:bg-transparent border border-slate-100 sm:border-none">
          <div class="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
            <Clock class="w-4 h-4" />
          </div>
          <span class="font-bold text-slate-800">Responsive, Direct Communication</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { ShieldCheck, CheckCircle, Clock } from 'lucide-vue-next'

const clients = [
  { name: '1-800-ACCIDENT', logo: '/media/client-1800accident.webp' },
  { name: 'MetroPCS NYC', logo: '/media/client-metropcs.webp' },
  { name: 'Zara Realty', logo: '/media/client-zara.webp' },
  { name: 'Austin Optics', logo: '/media/client-austin.webp' },
  { name: 'ETCPA Global', logo: '/media/client-etcpa.webp' },
  { name: 'R&S Law Group', logo: '/media/client-rs.webp' },
  { name: 'TOBI Fashion', logo: '/media/client-tobi.webp' },
  { name: 'Community Pharmacy', logo: '/media/client-communitypharmacy.webp' },
  { name: 'Bespoke Metals', logo: '/media/client-bespoke.webp' },
  { name: 'BarberAnywhere', logo: '/media/client-barber.webp' },
  { name: 'Divs.io Tech', logo: '/media/client-divs.webp' },
  { name: 'GreenVision Eco', logo: '/media/client-greenvision.webp' }
]

// Duplicate array for infinite seamless looping
const marqueeClients = computed(() => [...clients, ...clients])
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 28s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}
</style>