<template>
  <Teleport to="body">
    <Transition name="fade">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-dark-950/90 backdrop-blur-xl"
        @click.self="close"
      >
        <div class="relative w-full max-w-4xl bg-dark-900 rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden animate-in">
          
          <!-- Modal Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-dark-950/60">
            <div class="flex items-center gap-3">
              <div class="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <div>
                <h3 class="text-sm font-bold text-white font-display">Executive Video Message</h3>
                <p class="text-[11px] text-slate-400">Vivek Thapar · Founder &amp; CEO, Mirch Media NYC</p>
              </div>
            </div>

            <button 
              @click="close"
              class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X class="w-5 h-5" />
            </button>
          </div>

          <!-- Video Player Container -->
          <div class="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
            <video 
              ref="videoEl"
              src="/media/vivek-intro-video.mp4" 
              controls
              autoplay
              playsinline
              class="w-full h-full object-contain"
            ></video>
          </div>

          <!-- Modal Footer / Highlights -->
          <div class="p-6 bg-dark-950/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="space-y-1 text-center sm:text-left">
              <p class="text-xs font-semibold text-brand-300">"We don't just do marketing, we build the businesses marketing supports."</p>
              <p class="text-[11px] text-slate-400">Direct founder oversight on all client engagements · Forest Hills, Queens, NYC</p>
            </div>

            <a 
              href="#contact" 
              @click="close"
              class="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 shadow-md transition-all shrink-0"
            >
              Book Strategy Session
            </a>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue'
import { X } from 'lucide-vue-next'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])
const videoEl = ref(null)

watch(() => props.isOpen, (newVal) => {
  if (!newVal && videoEl.value) {
    videoEl.value.pause()
  } else if (newVal && videoEl.value) {
    setTimeout(() => {
      videoEl.value?.play().catch(() => {})
    }, 200)
  }
})

function close() {
  emit('close')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
