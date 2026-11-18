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

    <!-- Floating Executive Contact Button -->
    <div class="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 hidden sm:flex items-center">
      <router-link 
        to="/contact"
        class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-heading font-bold text-xs shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 border border-white/25 transition-all hover:-translate-y-0.5"
      >
        <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
        <span>Schedule a Call</span>
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