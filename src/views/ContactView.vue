<template>
  <div class="pt-20 sm:pt-24 pb-20 bg-transparent text-slate-100 min-h-screen">
    
    <!-- Hero Banner with Matched NYC Office Image -->
    <section class="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 overflow-hidden border-b border-white/10">
      <!-- Subtle Ambient Lighting -->
      <div class="absolute -top-24 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-20 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Left Column (7 cols): Copy & Direct Consultation Credentials -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-500/30 text-red-400 font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
              <Send class="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Direct Founder Consultation · Queens, NYC</span>
            </div>

            <h1 class="hero-headline text-3xl sm:text-5xl lg:text-[46px] font-heading font-black text-white tracking-tight leading-[1.2] text-balance">
              Connect Directly with <span class="gradient-text-brand">Vivek Thapar</span>
            </h1>

            <p class="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
              Direct consultation without account reps or sales handoffs. Discuss your custom website platform, local SEO 3-Pack, or digital marketing strategy directly with the founder.
            </p>

            <!-- Quick Contact Tags -->
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-mono">
              <a href="tel:+17182074446" class="px-3.5 py-1.5 rounded-lg bg-red-600/20 border border-red-500/40 text-red-300 font-bold hover:bg-red-600/30 transition-colors shadow-sm">
                Phone: (718) 207-4446
              </a>
              <span class="px-3 py-1.5 rounded-lg bg-[#0e111d] border border-white/10 text-slate-300">Forest Hills, Queens Studio</span>
              <span class="px-3 py-1.5 rounded-lg bg-[#0e111d] border border-white/10 text-slate-300">Direct Founder Oversight</span>
              <span class="px-3 py-1.5 rounded-lg bg-[#0e111d] border border-white/10 text-slate-300">Confidential Discovery</span>
            </div>
          </div>

          <!-- Right Column (5 cols): Authentic Consultation Showcase -->
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="w-full max-w-sm">
              <div class="relative rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-white/15 via-[#0e111d] to-[#07080e] border border-white/15 shadow-2xl group overflow-hidden">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[3/4] w-full bg-slate-900">
                  <img 
                    src="/media/vivek-thapar-strategy.webp" 
                    alt="Vivek Thapar - Founder & Principal Consultant Strategy Session"
                    class="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-700"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                <!-- Caption Badge Placed Underneath Image -->
                <div class="pt-3.5 px-2 pb-1">
                  <div class="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider mb-0.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span>Direct Founder Consultation</span>
                  </div>
                  <p class="text-xs sm:text-sm font-heading font-bold text-white tracking-tight">Vivek Thapar · Founder &amp; Principal</p>
                  <p class="text-[11px] text-slate-400 font-sans mt-0.5">Mirch Media (Est. 2006) · Forest Hills, Queens, NYC</p>
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
