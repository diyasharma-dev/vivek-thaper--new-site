<template>
  <div class="pt-28 pb-20">
    
    <!-- Hero Header -->
    <section class="relative py-16 overflow-hidden">
      <div class="glow-ambient -top-40 right-1/4 w-[600px] h-[400px] bg-brand-600/15"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold mb-4">
          <Send class="w-3.5 h-3.5" />
          <span>Direct Access · 24-Hour Guarantee</span>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          Get in Touch With <br />
          <span class="gold-gradient-text">Vivek Thapar</span>
        </h1>
        <p class="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Whether you need executive advisory, enterprise web engineering, or a keynote speaker for your next conference — we are here to help.
        </p>
      </div>
    </section>

    <!-- Interactive Contact Form & NYC Office Section -->
    <ContactConsultation />

    <!-- FAQ Section -->
    <div class="border-t border-slate-800">
      <FaqSection />
    </div>

  </div>
</template>

<script setup>
import { Send } from 'lucide-vue-next'
import ContactConsultation from '@/components/ContactConsultation.vue'
import FaqSection from '@/components/FaqSection.vue'
</script>
