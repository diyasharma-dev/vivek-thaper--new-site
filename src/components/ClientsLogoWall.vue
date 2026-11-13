<template>
  <section class="py-16 relative overflow-hidden bg-white border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center mb-8">
        <p class="text-[11px] uppercase tracking-widest font-mono text-slate-500 font-bold">
          Selected Commercial Clients, Enterprise Brands &amp; Local Institutions
        </p>
      </div>

      <!-- Architectural Logo Grid on Clean Slate Background -->
      <div class="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 shadow-2xs grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 divide-x divide-y divide-slate-200">
        <div 
          v-for="client in clients" 
          :key="client.name"
          class="h-28 sm:h-32 p-4 flex flex-col items-center justify-center gap-2.5 transition-all hover:bg-white group cursor-default hover:shadow-inner"
          :title="client.name"
        >
          <!-- Logo rendered naturally with subtle professional tone -->
          <div class="h-10 sm:h-12 w-full flex items-center justify-center">
            <img 
              :src="client.logo" 
              :alt="client.name"
              class="max-h-8 sm:max-h-9 max-w-[125px] sm:max-w-[135px] w-auto h-auto object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200"
              loading="lazy"
            />
          </div>

          <!-- Crisp brand name underneath -->
          <span class="text-[11px] font-mono font-medium text-slate-500 group-hover:text-slate-900 transition-colors text-center truncate max-w-full px-1">
            {{ client.name }}
          </span>
        </div>
      </div>

      <!-- Trust & Engagement Principles -->
      <div class="mt-10 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-slate-700 text-xs font-sans">
        <div class="flex items-center gap-2">
          <ShieldCheck class="w-4 h-4 text-amber-600 shrink-0" />
          <span class="font-semibold text-slate-800">Clients Retain 100% Full Ownership of All Code &amp; Assets</span>
        </div>
        <div class="flex items-center gap-2">
          <CheckCircle class="w-4 h-4 text-amber-600 shrink-0" />
          <span class="font-semibold text-slate-800">Direct Founder Architecture &amp; Senior Code Oversight</span>
        </div>
        <div class="flex items-center gap-2">
          <Clock class="w-4 h-4 text-amber-600 shrink-0" />
          <span class="font-semibold text-slate-800">Under 24-Hour Executive Direct Response Guarantee</span>
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
