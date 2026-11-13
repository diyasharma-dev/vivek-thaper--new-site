<template>
  <Teleport to="body">
    <Transition name="fade">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md"
        @click.self="close"
      >
        <div class="relative w-full max-w-4xl bg-[#13161c] rounded-2xl border border-white/[0.1] shadow-2xl overflow-hidden">
          
          <!-- Modal Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0d0f12]">
            <div class="flex items-center gap-3">
              <span class="w-2.5 h-2.5 rounded-full bg-[#c59b63]"></span>
              <div>
                <h3 class="text-sm font-semibold text-white">Message from Vivek Thapar</h3>
                <p class="text-[11px] text-neutral-400">Founder &amp; CEO, Mirch Media NYC · Est. 2006</p>
              </div>
            </div>

            <button 
              @click="close"
              class="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/[0.05] transition-colors"
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
          <div class="p-5 bg-[#0d0f12] border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="space-y-0.5 text-center sm:text-left">
              <p class="text-xs font-serif italic text-neutral-300">"We don't just do marketing, we build the businesses marketing supports."</p>
              <p class="text-[11px] text-neutral-500">Forest Hills, Queens, New York · Direct Founder Access</p>
            </div>

            <router-link 
              to="/contact" 
              @click="close"
              class="px-5 py-2.5 rounded-lg font-semibold text-xs text-[#0d0f12] bg-[#c59b63] hover:bg-[#dfc698] transition-all shrink-0"
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
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
