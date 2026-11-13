<template>
  <div class="min-h-screen bg-[#f8fafc] text-[#1e293b] flex flex-col selection:bg-[#0f172a] selection:text-white">
    
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
    <div class="fixed bottom-6 right-6 z-40 hidden sm:flex items-center">
      <router-link 
        to="/contact"
        class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 backdrop-blur-md text-slate-800 hover:text-black font-semibold text-xs border border-slate-200 hover:border-slate-400 transition-all shadow-lg hover:-translate-y-0.5"
      >
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
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
