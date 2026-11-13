<template>
  <section class="py-16 relative overflow-hidden bg-dark-950/80 border-y border-slate-800/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="text-center mb-10">
        <p class="text-xs uppercase tracking-widest font-bold text-slate-400">
          Trusted by Industry Leaders, Enterprise Franchises &amp; Thriving Local Brands
        </p>
      </div>

      <!-- Logos Grid: object-contain with balanced max dimensions ensuring zero logo clipping -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 items-center">
        <div 
          v-for="client in clients" 
          :key="client.name"
          class="h-20 sm:h-24 p-3 sm:p-4 rounded-2xl bg-dark-900/60 border border-slate-800/80 hover:border-brand-500/40 hover:bg-dark-850 flex items-center justify-center transition-all group cursor-default shadow-sm"
          :title="client.name"
        >
          <img 
            :src="client.logo" 
            :alt="client.name"
            class="max-h-11 sm:max-h-12 max-w-[130px] sm:max-w-[150px] w-auto h-auto object-contain filter grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Trust Badges Bar -->
      <div class="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-slate-400 text-xs font-medium">
        <div class="flex items-center gap-2">
          <ShieldCheck class="w-4 h-4 text-brand-400 shrink-0" />
          <span>Clients Own 100% Of All Digital IP &amp; Assets</span>
        </div>
        <div class="flex items-center gap-2">
          <CheckCircle class="w-4 h-4 text-emerald-400 shrink-0" />
          <span>5.0 Star Rating Across Enterprise Reviews</span>
        </div>
        <div class="flex items-center gap-2">
          <Clock class="w-4 h-4 text-brand-400 shrink-0" />
          <span>Under 24-Hour Founder Response Guarantee</span>
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
  { name: 'Bespoke Cleaners', logo: '/media/client-bespoke.webp' },
  { name: 'BarberAnywhere', logo: '/media/client-barber.webp' },
  { name: 'Divs Gourmet', logo: '/media/client-divs.webp' },
  { name: 'GreenVision Eco', logo: '/media/client-greenvision.webp' }
]
</script>
