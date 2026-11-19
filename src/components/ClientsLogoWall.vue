<template>
  <section class="py-12 sm:py-16 relative overflow-hidden border-y border-white/[0.06]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center mb-8 sm:mb-10">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/50 border border-red-500/30 text-red-400 font-mono text-[11px] font-bold tracking-wider uppercase shadow-[0_0_12px_rgba(239,68,68,0.2)] mb-2">
          Client Engagements
        </span>
        <h2 class="text-base sm:text-xl font-heading font-extrabold text-white">
          Trusted by Commercial Businesses &amp; New York Institutions
        </h2>
      </div>

      <!-- Architectural Dark Glass Logo Grid -->
      <div class="border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden bg-white/[0.02] backdrop-blur-md shadow-2xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 divide-x divide-y divide-white/[0.06]">
        <div 
          v-for="client in clients" 
          :key="client.name"
          class="h-24 sm:h-28 md:h-32 p-3 sm:p-4 flex flex-col items-center justify-center gap-2.5 transition-all bg-white/[0.01] hover:bg-white/[0.06] hover:shadow-[inset_0_0_20px_rgba(239,68,68,0.15)] group cursor-default"
          :title="client.name"
        >
          <!-- Logo rendered cleanly with crisp hover glow -->
          <div class="h-8 sm:h-10 md:h-12 w-full flex items-center justify-center">
            <img 
              :src="client.logo" 
              :alt="client.name"
              class="max-h-7 sm:max-h-8 md:max-h-9 max-w-[105px] sm:max-w-[125px] w-auto h-auto object-contain filter grayscale invert opacity-60 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              loading="lazy"
              decoding="async"
            />
          </div>

          <!-- Crisp brand name underneath -->
          <span class="text-[10px] sm:text-[11px] font-mono font-bold text-slate-400 group-hover:text-red-400 transition-colors text-center truncate max-w-full px-1">
            {{ client.name }}
          </span>
        </div>
      </div>

      <!-- Trust & Engagement Principles -->
      <div class="mt-8 sm:mt-10 pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:flex sm:flex-wrap items-center justify-center gap-3 sm:gap-x-8 sm:gap-y-4 lg:gap-12 text-xs font-sans">
        <div class="flex items-center gap-2.5 px-3.5 py-2.5 sm:p-0 rounded-xl bg-white/[0.03] sm:bg-transparent border border-white/[0.06] sm:border-none">
          <div class="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 shadow-xs">
            <ShieldCheck class="w-4 h-4" />
          </div>
          <span class="font-bold text-slate-200">100% Client Code &amp; Asset Ownership</span>
        </div>
        <div class="flex items-center gap-2.5 px-3.5 py-2.5 sm:p-0 rounded-xl bg-white/[0.03] sm:bg-transparent border border-white/[0.06] sm:border-none">
          <div class="w-7 h-7 rounded-lg bg-red-500/15 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0 shadow-xs">
            <CheckCircle class="w-4 h-4" />
          </div>
          <span class="font-bold text-slate-200">Direct Founder Oversight &amp; Review</span>
        </div>
        <div class="flex items-center gap-2.5 px-3.5 py-2.5 sm:p-0 rounded-xl bg-white/[0.03] sm:bg-transparent border border-white/[0.06] sm:border-none">
          <div class="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 shadow-xs">
            <Clock class="w-4 h-4" />
          </div>
          <span class="font-bold text-slate-200">Responsive, Direct NYC Communication</span>
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