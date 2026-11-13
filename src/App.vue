<template>
  <div class="min-h-screen bg-[#0d0f12] text-[#f4f4f0] flex flex-col selection:bg-[#c59b63] selection:text-black">
    
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

    <!-- Understated Floating Executive Contact Action -->
    <div class="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2">
      <router-link 
        to="/contact"
        class="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#13161c]/95 backdrop-blur-md hover:bg-[#181c24] text-neutral-200 hover:text-white font-medium text-xs shadow-2xl border border-white/[0.1] hover:border-[#c59b63] transition-all transform hover:-translate-y-0.5"
      >
        <span class="w-2 h-2 rounded-full bg-[#c59b63]"></span>
        <span>Schedule Strategy Call</span>
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
