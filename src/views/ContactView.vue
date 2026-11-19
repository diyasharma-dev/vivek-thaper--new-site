<template>
  <div class="pt-20 sm:pt-24 pb-12 sm:pb-20 bg-slate-50/50">
    
    <!-- Hero Banner with Light Luxury Editorial Styling -->
    <section class="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white border-b border-slate-200/80 text-slate-900">
      <!-- Subtle architectural grid background -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_25%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <!-- Soft Warm Ambient Glow -->
      <div class="absolute -top-24 -right-12 w-96 h-96 bg-gradient-to-br from-red-400/10 via-rose-300/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Left Column (7 cols): Copy & Direct Consultation Credentials -->
          <div class="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs font-semibold tracking-wider uppercase shadow-2xs">
              <Send class="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span>Direct Founder Consultation · New York City</span>
            </div>

            <h1 class="hero-headline text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-heading font-extrabold text-slate-900 tracking-normal leading-[1.32] sm:leading-[1.35] lg:leading-[1.38] text-balance my-3.5 sm:my-4">
              Initiate Direct Collaboration with <span class="text-red-600">Vivek Thapar</span>
            </h1>

            <p class="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
              Direct founder consultation without sales reps or intermediaries. Discuss your custom web engineering, local SEO 3-Pack, or digital systems strategy directly.
            </p>

            <!-- Quick Contact Tags -->
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-mono">
              <a href="tel:+17182074446" class="px-3 py-1 rounded-lg bg-red-50 border border-red-200 text-red-700 font-bold hover:bg-red-100 transition-colors">
                Phone: (718) 207-4446
              </a>
              <span class="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-medium">Forest Hills, Queens Office</span>
              <span class="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-medium">Direct Founder Oversight</span>
              <span class="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 font-medium">Confidential Discovery</span>
            </div>
          </div>

          <!-- Right Column (5 cols): Matched NYC Office Showcase -->
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="w-full max-w-md lg:max-w-none">
              <div class="relative rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 bg-white border border-slate-200/90 shadow-xl group overflow-hidden">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                  <img 
                    src="/media/nyc-office.webp" 
                    alt="Mirch Media NYC Headquarters - Forest Hills, Queens"
                    class="w-full h-full object-cover object-center filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                  />
                </div>

                <!-- Editorial Caption Beneath Photo -->
                <div class="pt-3 px-1">
                  <div class="flex items-center gap-1.5 text-[11px] font-mono text-slate-700 font-bold uppercase tracking-wider mb-0.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                    <span>Agency Headquarters</span>
                  </div>
                  <p class="text-sm font-heading font-bold text-slate-900 tracking-tight">Mirch Media New York Office</p>
                  <p class="text-[11px] text-slate-500 font-sans mt-0.5">Forest Hills, Queens, New York City</p>
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
