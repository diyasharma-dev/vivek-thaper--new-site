<template>
  <div class="pt-28 pb-20 bg-slate-50/50">
    
    <!-- Hero Header -->
    <section class="relative py-16 overflow-hidden bg-gradient-to-b from-slate-100/90 via-white to-slate-50 border-b border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 font-mono text-[11px] font-bold tracking-wider uppercase shadow-2xs mb-4">
          <Send class="w-3.5 h-3.5 text-brand-600" />
          <span>Direct Desk · 24-Hour Guarantee</span>
        </span>
        <h1 class="text-3xl sm:text-5xl lg:text-[48px] font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
          Direct Advisory &amp; Consultation with Vivek Thapar
        </h1>
        <p class="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
          Whether you need executive advisory, enterprise web engineering, or a keynote speaker for your next conference — connect directly.
        </p>
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
