<template>
  <section class="py-16 relative overflow-hidden bg-[#0c0d10] border-y border-white/[0.06]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center mb-8">
        <p class="text-[11px] uppercase tracking-widest font-mono text-neutral-300 font-semibold">
          Selected Commercial Clients, Enterprise Brands &amp; Local Institutions
        </p>
      </div>

      <!-- High-Contrast Architectural Logo Grid -->
      <div class="border border-white/[0.12] rounded-xl overflow-hidden bg-[#12141a] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 divide-x divide-y divide-white/[0.08]">
        <div 
          v-for="client in clients" 
          :key="client.name"
          class="h-28 sm:h-32 p-4 flex flex-col items-center justify-center gap-2.5 transition-colors hover:bg-[#181c24] group cursor-default"
          :title="client.name"
        >
          <!-- Logo rendered in pure crisp white via brightness-0 invert so it pops clearly against dark background -->
          <div class="h-10 sm:h-12 w-full flex items-center justify-center">
            <img 
              :src="client.logo" 
              :alt="client.name"
              class="max-h-8 sm:max-h-9 max-w-[125px] sm:max-w-[135px] w-auto h-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-200"
              loading="lazy"
            />
          </div>

          <!-- Crisp, readable brand name text underneath -->
          <span class="text-[11px] font-mono font-medium text-neutral-300 group-hover:text-white transition-colors text-center truncate max-w-full px-1">
            {{ client.name }}
          </span>
        </div>
      </div>

      <!-- Trust & Engagement Principles with high-contrast text -->
      <div class="mt-10 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-neutral-300 text-xs font-sans">
        <div class="flex items-center gap-2">
          <ShieldCheck class="w-4 h-4 text-[#c59b63] shrink-0" />
          <span class="font-medium text-neutral-200">Clients Retain 100% Full Ownership of All Code &amp; Assets</span>
        </div>
        <div class="flex items-center gap-2">
          <CheckCircle class="w-4 h-4 text-[#c59b63] shrink-0" />
          <span class="font-medium text-neutral-200">Direct Founder Architecture &amp; Senior Code Oversight</span>
        </div>
        <div class="flex items-center gap-2">
          <Clock class="w-4 h-4 text-[#c59b63] shrink-0" />
          <span class="font-medium text-neutral-200">Under 24-Hour Executive Direct Response Guarantee</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ShieldCheck, CheckCircle, Clock } from 'lucide-vue-next'

const clients = [
  { name: '1-800-ACCIDENT', logo: '/media/client-1800accident.webp' },
  { name: 'MetroPCS', logo: '/media/client-metropcs.webp' },
  { name: 'Zara Realty', logo: '/media/client-zara.webp' },
  { name: 'Austin Dental', logo: '/media/client-austin.webp' },
  { name: 'ET CPA & Associates', logo: '/media/client-etcpa.webp' },
  { name: 'R&S Law Group', logo: '/media/client-rs.webp' },
  { name: 'TOBI Fashion', logo: '/media/client-tobi.webp' },
  { name: 'Community Pharmacy', logo: '/media/client-communitypharmacy.webp' },
  { name: 'Bespoke Metals', logo: '/media/client-bespoke.webp' },
  { name: 'BarberAnywhere', logo: '/media/client-barber.webp' },
  { name: 'Divs Gourmet', logo: '/media/client-divs.webp' },
  { name: 'GreenVision Eco', logo: '/media/client-greenvision.webp' }
]
</script>
