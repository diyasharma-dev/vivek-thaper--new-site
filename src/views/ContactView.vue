<template>
  <div class="pt-20 sm:pt-24 pb-12 sm:pb-20 bg-slate-50/50">
    
    <!-- Hero Banner with 100% Matched NYC Office Image -->
    <section class="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden bg-slate-950 text-white border-b border-slate-800">
      <div class="absolute -top-24 right-0 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-20 w-[400px] h-[400px] bg-slate-800/50 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>

      <!-- Ambient blurred watermark of NYC office image -->
      <div class="absolute inset-0 opacity-10 filter blur-3xl scale-125 pointer-events-none overflow-hidden">
        <img src="/media/nyc-office.webp" class="w-full h-full object-cover" alt="" />
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Left Column (7 cols): Copy & Direct Consultation Credentials -->
          <div class="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-500/30 text-red-400 font-mono text-xs font-bold tracking-wider uppercase shadow-2xs">
              <Send class="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Direct Founder Consultation · New York City</span>
            </div>

            <h1 class="hero-headline text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-heading font-extrabold text-white tracking-normal leading-[1.32] sm:leading-[1.35] lg:leading-[1.38] text-balance my-3.5 sm:my-4">
              Initiate Direct Collaboration with <span class="text-red-500">Vivek Thapar</span>
            </h1>

            <p class="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
              Direct founder consultation without sales reps or intermediaries. Discuss your custom web engineering, local SEO 3-Pack, or digital systems strategy directly.
            </p>

            <!-- Quick Contact Tags -->
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-mono">
              <a href="tel:+17182074446" class="px-3 py-1 rounded-lg bg-red-600/20 border border-red-500/40 text-red-300 font-bold hover:bg-red-600/30 transition-colors">
                Phone: (718) 207-4446
              </a>
              <span class="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Forest Hills, Queens Office</span>
              <span class="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Direct Founder Oversight</span>
              <span class="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Confidential Discovery</span>
            </div>
          </div>

          <!-- Right Column (5 cols): 100% Matched NYC Office Showcase -->
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="w-full max-w-md lg:max-w-none">
              <div class="relative rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-slate-800/80 via-slate-900/90 to-slate-950 border border-slate-700/80 shadow-2xl shadow-red-950/30 group overflow-hidden">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square lg:aspect-[4/3] h-[420px] sm:h-[480px] lg:h-[520px] bg-slate-900">
                  <img 
                    src="/media/nyc-office.webp" 
                    alt="Mirch Media NYC Headquarters - Forest Hills, Queens"
                    class="w-full h-full object-cover object-center filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none"></div>

                  <!-- Glassmorphic Caption Badge on Image -->
                  <div class="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 shadow-lg">
                    <div class="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider mb-0.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                      <span>Agency Headquarters</span>
                    </div>
                    <p class="text-xs sm:text-sm font-heading font-bold text-white tracking-tight">Mirch Media New York Office</p>
                    <p class="text-[11px] text-slate-300 font-sans mt-0.5">Forest Hills, Queens, New York City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Interactive Contact Form & NYC Office Section -->
    <ContactConsultation />

    <!-- FAQ Section -->
    <div>
      <FaqSection />
    </div>

  </div>
</template>

<script setup>
import { Send } from 'lucide-vue-next'
import ContactConsultation from '@/components/ContactConsultation.vue'
import FaqSection from '@/components/FaqSection.vue'
</script>
