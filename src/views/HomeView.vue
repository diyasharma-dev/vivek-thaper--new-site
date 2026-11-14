<template>
  <div>
    <!-- Hero Section -->
    <HeroSection @open-video="$emit('open-video')" />

    <!-- Client Logo Wall & Verification Strip -->
    <ClientsLogoWall />

    <!-- Featured Portfolio & Case Studies Showcase (Interactive with Dossier Modal) -->
    <CaseStudiesSection />

    <!-- About Vivek & Executive Philosophy -->
    <PhilosophyStory @open-video="$emit('open-video')" />

    <!-- Core Domains & Capabilities -->
    <DomainsSection />

    <!-- Client Endorsements & Social Proof -->
    <TestimonialsSection />

    <!-- Direct Consultation & Contact Desk -->
    <ContactConsultation />
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import ClientsLogoWall from '@/components/ClientsLogoWall.vue'
import CaseStudiesSection from '@/components/CaseStudiesSection.vue'
import PhilosophyStory from '@/components/PhilosophyStory.vue'
import DomainsSection from '@/components/DomainsSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import ContactConsultation from '@/components/ContactConsultation.vue'

defineEmits(['open-video'])
</script>
