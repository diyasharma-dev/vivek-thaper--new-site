<template>
  <section class="relative pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-18 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white">
    
    <!-- Subtle architectural grid background -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_25%,#000_70%,transparent_100%)] pointer-events-none"></div>

    <!-- Soft Warm Ambient Glow with Gentle Breathing Motion -->
    <div class="absolute -top-24 -right-12 w-96 h-96 bg-gradient-to-br from-red-400/15 via-rose-300/10 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        <!-- Left Column: Copy & Actions (6 cols on lg) -->
        <div class="lg:col-span-6 space-y-6 text-center lg:text-left">
          
          <!-- Editorial Label: Mirch Media NYC Heritage + Live Active Beacon -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white font-mono text-[11px] font-semibold tracking-wider uppercase shadow-2xs">
              <span class="w-1.5 h-1.5 rounded-full bg-red-400"></span>
              <span>Mirch Media NYC · Est. 2006</span>
            </span>

            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-medium border border-slate-200">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Executive Advisory · Queens, NYC</span>
            </span>
          </div>

          <!-- Main Executive Headline with Generous Line-Height and Spacing -->
          <h1 class="hero-headline text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-heading font-extrabold text-slate-900 tracking-normal leading-[1.32] sm:leading-[1.35] lg:leading-[1.38] text-balance my-3.5 sm:my-4">
            Twenty years building digital businesses, directing strategy, and scaling revenue in <span class="text-red-600">New York City.</span>
          </h1>

          <!-- Statement Quote (Authentic from vivekthapar.com) -->
          <div class="space-y-4">
            <blockquote class="border-l-4 border-red-500 bg-red-50/50 p-4 sm:p-5 rounded-r-2xl text-left text-sm sm:text-base text-slate-800 font-sans leading-relaxed shadow-2xs">
              <span class="text-slate-950 font-bold">"I have a confession to make:</span> I love creating, designing, logic planning, leading teams, working with startups, and volunteer groups. My 20+ years of experience with digital marketing and website development makes me a natural project manager."
              <footer class="block text-xs font-mono font-bold text-red-700 mt-2.5 not-italic">
                — Vivek Thapar, Principal Strategist &amp; Project Architect
              </footer>
            </blockquote>

            <p class="text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Guiding <strong class="text-slate-900 font-bold">Mirch Media</strong> from Forest Hills, Queens. Delivering strategic accountability, engineering logic, and hands-on project management backed by a specialized NYC team of developers, designers, and marketers.
            </p>
          </div>

          <!-- Clean Action Buttons (Duplicate play control removed, phone number removed) -->
          <div class="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-1">
            <a 
              href="#work"
              class="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Selected Work</span>
              <ArrowDown class="w-4 h-4 text-red-400 shrink-0" />
            </a>

            <router-link 
              to="/contact"
              class="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-heading font-bold text-xs sm:text-sm border border-slate-200/90 shadow-2xs transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Schedule Consultation</span>
              <ArrowRight class="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
            </router-link>
          </div>

          <!-- Grounded Authentic Credentials Strip (Repetitive founder wording replaced) -->
          <div class="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 lg:gap-3 text-center sm:text-left">
            <div class="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80 overflow-hidden">
              <div class="text-base sm:text-lg xl:text-xl font-heading font-extrabold text-slate-900 whitespace-nowrap">Est. 2006</div>
              <div class="text-[10px] sm:text-[11px] font-mono text-slate-600 font-medium mt-0.5 whitespace-nowrap">Forest Hills, Queens</div>
            </div>
            <div class="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80 overflow-hidden">
              <div class="text-base sm:text-lg xl:text-xl font-heading font-extrabold text-slate-900 whitespace-nowrap">20+ Years</div>
              <div class="text-[10px] sm:text-[11px] font-mono text-slate-600 font-medium mt-0.5 whitespace-nowrap">Project Management</div>
            </div>
            <div class="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80 overflow-hidden">
              <div class="text-base sm:text-lg xl:text-xl font-heading font-extrabold text-slate-900 whitespace-nowrap">Mirch Media</div>
              <div class="text-[10px] sm:text-[11px] font-mono text-slate-600 font-medium mt-0.5 whitespace-nowrap">Full-Service Studio</div>
            </div>
            <div class="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80 overflow-hidden">
              <div class="text-base sm:text-lg xl:text-xl font-heading font-extrabold text-slate-900 whitespace-nowrap">Executive QA</div>
              <div class="text-[10px] sm:text-[11px] font-mono text-slate-600 font-medium mt-0.5 whitespace-nowrap">End-to-End Delivery</div>
            </div>
          </div>

        </div>

        <!-- Right Column: Live Video Player Showcase (6 cols on lg) -->
        <div class="lg:col-span-6 relative flex justify-center">
          
          <div class="relative w-full max-w-lg lg:max-w-none">
            
            <div class="bg-white p-3.5 sm:p-4 rounded-3xl border border-slate-200/90 shadow-xl relative group transition-all duration-300">
              
              <!-- Video Frame: Native 16:9 widescreen with object-contain so ZERO text or images are cut -->
              <div class="relative rounded-2xl overflow-hidden aspect-video bg-black shadow-inner">
                <!-- Live Video Preview (Autoplaying muted preview of Vivek speaking) -->
                <video 
                  ref="previewVideo"
                  src="/media/vivek-intro-video.mp4" 
                  autoplay
                  muted
                  loop
                  playsinline
                  preload="auto"
                  class="w-full h-full object-contain bg-black"
                ></video>
              </div>

              <!-- Dedicated Player Controls & Info Bar (Placed BELOW video so video is 100% clean & unobstructed) -->
              <div class="mt-3.5 p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
                <div class="min-w-0">
                  <div class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse"></span>
                    <h3 class="text-sm font-heading font-bold text-slate-900 truncate">Vivek Thapar</h3>
                    <span class="px-2 py-0.5 rounded-full bg-red-100 text-red-700 text-[10px] font-mono font-bold uppercase tracking-wider">Briefing</span>
                  </div>
                  <p class="text-[11px] text-slate-500 font-medium truncate mt-0.5">Founder &amp; CEO · Mirch Media NYC · Queens, NY</p>
                </div>

                <div class="flex items-center gap-2 shrink-0">
                  <!-- Audio Toggle Button -->
                  <button 
                    @click="toggleAudio"
                    class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold transition-all cursor-pointer shadow-2xs border border-slate-200 hover:border-slate-300"
                    :title="isMuted ? 'Turn Sound On' : 'Mute Video'"
                    :aria-label="isMuted ? 'Turn Sound On' : 'Mute Video'"
                  >
                    <VolumeX v-if="isMuted" class="w-3.5 h-3.5 text-slate-500" />
                    <template v-else>
                      <Volume2 class="w-3.5 h-3.5 text-red-600" />
                      <span class="inline-flex items-center gap-0.5">
                        <span class="w-0.5 h-2 bg-red-600 rounded-full animate-bounce"></span>
                        <span class="w-0.5 h-3 bg-red-600 rounded-full animate-bounce [animation-delay:0.15s]"></span>
                        <span class="w-0.5 h-1.5 bg-red-600 rounded-full animate-bounce [animation-delay:0.3s]"></span>
                      </span>
                    </template>
                    <span class="text-[11px] font-mono">{{ isMuted ? 'Sound' : 'Playing' }}</span>
                  </button>

                  <!-- Theatre Modal Expand Button -->
                  <button 
                    @click="handleOpenTheatre"
                    class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all cursor-pointer shadow-2xs hover:scale-105"
                    title="Expand to Full Theatre"
                    aria-label="Expand video to full theatre"
                  >
                    <Maximize2 class="w-3.5 h-3.5 text-white" />
                    <span class="text-[11px] font-mono">Theatre</span>
                  </button>
                </div>
              </div>

              <!-- Editorial caption beneath video card -->
              <div class="mt-2.5 px-1 flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5 text-[11px] text-slate-500 font-mono">
                <span class="text-slate-800 font-bold">Executive Office</span>
                <span>108-14 72nd Ave, Forest Hills, NY</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowDown, ArrowRight, Volume2, VolumeX, Maximize2 } from 'lucide-vue-next'

const emit = defineEmits(['open-video'])

const previewVideo = ref(null)
const isMuted = ref(true)

function toggleAudio() {
  if (previewVideo.value) {
    if (previewVideo.value.muted) {
      previewVideo.value.muted = false
      previewVideo.value.currentTime = 0
      previewVideo.value.play()
      isMuted.value = false
    } else {
      previewVideo.value.muted = true
      isMuted.value = true
    }
  }
}

function handleOpenTheatre() {
  if (previewVideo.value) {
    previewVideo.value.pause()
  }
  emit('open-video')
}
</script>
