<template>
  <div class="pt-20 sm:pt-24 pb-12 sm:pb-20 bg-slate-50/50">
    
    <!-- Hero Header -->
    <section class="relative py-10 sm:py-16 overflow-hidden bg-gradient-to-b from-slate-100/90 via-white to-slate-50 border-b border-slate-200/80">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 font-mono text-[11px] font-bold tracking-wider uppercase shadow-2xs mb-4">
          <Send class="w-3.5 h-3.5 text-brand-600 shrink-0" />
          <span>Direct Consultation · 24-Hour Response</span>
        </span>
        <h1 class="text-2xl sm:text-4xl lg:text-[48px] font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
          Contact Vivek Thapar
        </h1>
        <p class="mt-3 sm:mt-4 text-xs sm:text-base text-slate-600 leading-relaxed font-sans">
          Whether you need web development, SEO, digital strategy, or consulting — reach out directly.
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
