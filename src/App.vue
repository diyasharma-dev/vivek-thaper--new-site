<template>
  <div class="min-h-screen w-full overflow-x-clip bg-white text-slate-900 flex flex-col selection:bg-brand-500 selection:text-white">
    
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



  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'
import VideoModal from './components/VideoModal.vue'

const isVideoModalOpen = ref(false)
</script>