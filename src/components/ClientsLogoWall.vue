<template>
  <section class="py-10 sm:py-12 relative overflow-hidden bg-gradient-to-b from-white via-orange-50/25 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center mb-6 sm:mb-8">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 font-mono text-[11px] font-bold tracking-wider uppercase shadow-2xs mb-2">
          Enterprise Verification Strip
        </span>
        <p class="text-xs sm:text-sm font-heading font-bold text-slate-700">
          Trusted by Commercial Clients, Enterprise Brands &amp; Tri-State Institutions
        </p>
      </div>

      <!-- Architectural Logo Grid with Warm Accent Hover -->
      <div class="border border-orange-200/60 rounded-2xl sm:rounded-3xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-sm grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 divide-x divide-y divide-slate-100">
        <div 
          v-for="client in clients" 
          :key="client.name"
          class="h-24 sm:h-28 md:h-32 p-3 sm:p-4 flex flex-col items-center justify-center gap-2 transition-all hover:bg-orange-50/40 group cursor-default"
          :title="client.name"
        >
          <!-- Logo rendered naturally with subtle professional tone -->
          <div class="h-8 sm:h-10 md:h-12 w-full flex items-center justify-center">
            <img 
              :src="client.logo" 
              :alt="client.name"
              class="max-h-7 sm:max-h-8 md:max-h-9 max-w-[105px] sm:max-w-[125px] w-auto h-auto object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              loading="lazy"
            />
          </div>

          <!-- Crisp brand name underneath -->
          <span class="text-[10px] sm:text-[11px] font-mono font-bold text-slate-500 group-hover:text-orange-600 transition-colors text-center truncate max-w-full px-1">
            {{ client.name }}
          </span>
        </div>
      </div>

      <!-- Trust & Engagement Principles with Colorful Icon Badges -->
      <div class="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12 text-slate-700 text-xs font-sans text-center sm:text-left">
        <div class="flex items-center gap-2.5">
          <div class="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs">
            <ShieldCheck class="w-4 h-4" />
          </div>
          <span class="font-bold text-slate-800">100% Client Code &amp; Asset Ownership</span>
        </div>
        <div class="flex items-center gap-2.5">
          <div class="w-7 h-7 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 shadow-2xs">
            <CheckCircle class="w-4 h-4" />
          </div>
          <span class="font-bold text-slate-800">Direct Founder Architecture &amp; Review</span>
        </div>
        <div class="flex items-center gap-2.5">
          <div class="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
            <Clock class="w-4 h-4" />
          </div>
          <span class="font-bold text-slate-800">Under 24-Hour Executive SLA Guarantee</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
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
</script>