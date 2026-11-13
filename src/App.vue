<template>
  <div class="min-h-screen bg-dark-950 text-slate-100 flex flex-col selection:bg-brand-500 selection:text-white">
    
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

    <!-- Quick Floating Action Pill -->
    <div class="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2">
      <router-link 
        to="/contact"
        class="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white font-bold text-xs shadow-2xl shadow-brand-600/40 border border-brand-400/30 transition-all transform hover:scale-105 active:scale-95"
      >
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Book Strategy Call</span>
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
