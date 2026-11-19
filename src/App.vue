<template>
  <div class="min-h-screen w-full overflow-x-clip bg-[#07080e] text-slate-100 flex flex-col selection:bg-red-500 selection:text-white relative">
    
    <!-- Ambient Fixed Lighting Orbs -->
    <div class="fixed top-0 left-1/4 w-[600px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
    <div class="fixed top-1/3 -right-20 w-[550px] h-[550px] bg-amber-500/[0.06] rounded-full blur-[150px] pointer-events-none -z-10"></div>
    <div class="fixed bottom-10 left-10 w-[500px] h-[500px] bg-indigo-600/[0.08] rounded-full blur-[160px] pointer-events-none -z-10"></div>
    
    <!-- Subtle architectural grid texture -->
    <div class="fixed inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_15%,#000_70%,transparent_100%)] pointer-events-none -z-10"></div>

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