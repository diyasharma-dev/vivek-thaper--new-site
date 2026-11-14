<template>
  <Teleport to="body">
    <Transition name="fade">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md"
        @click.self="close"
      >
        <div class="relative w-full max-w-4xl bg-slate-900 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden">
          
          <!-- Modal Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
            <div class="flex items-center gap-3">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <div>
                <h3 class="text-sm font-heading font-bold text-white">Message from Vivek Thapar</h3>
                <p class="text-[11px] text-brand-400 font-mono">Founder &amp; CEO, Mirch Media NYC · Est. 2006</p>
              </div>
            </div>

            <button 
              @click="close"
              class="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
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

          <!-- Modal Footer -->
          <div class="p-5 bg-slate-950 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="space-y-0.5 text-center sm:text-left">
              <p class="text-xs font-sans italic text-slate-300">"We don't just do marketing, we build the businesses marketing supports."</p>
              <p class="text-[11px] text-slate-500 font-mono">Forest Hills, Queens, New York · Direct Founder Access</p>
            </div>

            <router-link 
              to="/contact" 
              @click="close"
              class="px-5 py-2.5 rounded-xl font-heading font-bold text-xs text-white bg-brand-500 hover:bg-brand-600 transition-all shrink-0 shadow-md cursor-pointer"
            >
              Book Strategy Session
            </router-link>
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

const close = () => {
  if (videoEl.value) {
    videoEl.value.pause()
  }
  emit('close')
}

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
    if (videoEl.value) {
      videoEl.value.pause()
    }
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
