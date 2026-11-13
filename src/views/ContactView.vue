<template>
  <div class="pt-28 pb-20 bg-[#0c0d10]">
    
    <!-- Hero Header -->
    <section class="relative py-16 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
        <span class="eyebrow-label mb-4">
          <Send class="w-3.5 h-3.5" />
          <span>Direct Desk · 24-Hour Guarantee</span>
        </span>
        <h1 class="text-3xl sm:text-5xl lg:text-[48px] font-serif font-normal text-white tracking-tight leading-tight">
          Direct Advisory &amp; Consultation with Vivek Thapar
        </h1>
        <p class="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
          Whether you need executive advisory, enterprise web engineering, or a keynote speaker for your next conference — connect directly.
        </p>
      </div>
    </section>

    <!-- Interactive Contact Form & NYC Office Section -->
    <ContactConsultation />

    <!-- FAQ Section -->
    <div class="border-t border-white/[0.06]">
      <FaqSection />
    </div>

  </div>
</template>

<script setup>
import { Send } from 'lucide-vue-next'
import ContactConsultation from '@/components/ContactConsultation.vue'
import FaqSection from '@/components/FaqSection.vue'
</script>
