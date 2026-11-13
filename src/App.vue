<template>
  <div class="min-h-screen bg-[#0c0d10] text-[#f5f5f2] flex flex-col selection:bg-[#c59b63] selection:text-black">
    
    <!-- Navigation Bar -->
    <Navbar />

    <!-- Multi-Page Router View -->
    <main class="flex-grow">
      <router-view @open-video="isVideoModalOpen = true" />
    </main>

    <!-- Footer -->
    <FooterSection />

    <!-- Global Video Modal Player -->
    <VideoModal 
      :is-open="isVideoModalOpen" 
      @close="isVideoModalOpen = false" 
    />

    <!-- Quiet Floating Executive Contact Button -->
    <div class="fixed bottom-6 right-6 z-40 hidden sm:flex items-center">
      <router-link 
        to="/contact"
        class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#12141a]/95 backdrop-blur-md text-neutral-300 hover:text-white font-medium text-xs border border-white/[0.1] hover:border-[#c59b63] transition-all shadow-xl hover:-translate-y-0.5"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-[#c59b63]"></span>
        <span>Schedule Consultation</span>
      </router-link>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'
import VideoModal from './components/VideoModal.vue'

const isVideoModalOpen = ref(false)
</script>
