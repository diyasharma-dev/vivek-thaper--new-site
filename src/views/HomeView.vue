<template>
  <div>
    <!-- Hero Section -->
    <HeroSection @open-video="$emit('open-video')" />

    <!-- Client Logo Wall & Verification Strip -->
    <ClientsLogoWall />

    <!-- In-Page Video Theater Showcase -->
    <VideoShowcase />

    <!-- Philosophy & Confession Story -->
    <PhilosophyStory />

    <!-- Interactive Growth ROI Calculator -->
    <RoiCalculator />

    <!-- Core Domains & Capabilities -->
    <DomainsSection />

    <!-- Proven Case Studies -->
    <CaseStudiesSection />

    <!-- Keynote Speaking & Media -->
    <SpeakingPress />

    <!-- Civic & Community Impact -->
    <CommunitySection />

    <!-- 20-Year Evolution Roadmap -->
    <TimelineSection />

    <!-- Client Endorsements -->
    <TestimonialsSection />

    <!-- Founder FAQ -->
    <FaqSection />

    <!-- Direct Consultation Form -->
    <ContactConsultation />
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import ClientsLogoWall from '@/components/ClientsLogoWall.vue'
import VideoShowcase from '@/components/VideoShowcase.vue'
import PhilosophyStory from '@/components/PhilosophyStory.vue'
import RoiCalculator from '@/components/RoiCalculator.vue'
import DomainsSection from '@/components/DomainsSection.vue'
import CaseStudiesSection from '@/components/CaseStudiesSection.vue'
import SpeakingPress from '@/components/SpeakingPress.vue'
import CommunitySection from '@/components/CommunitySection.vue'
import TimelineSection from '@/components/TimelineSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import FaqSection from '@/components/FaqSection.vue'
import ContactConsultation from '@/components/ContactConsultation.vue'

defineEmits(['open-video'])
</script>
