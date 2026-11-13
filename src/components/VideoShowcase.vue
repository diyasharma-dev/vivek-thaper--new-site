<template>
  <section id="video" class="py-24 relative overflow-hidden bg-dark-900/60 border-y border-slate-800/80">
    <!-- Ambient glow behind section -->
    <div class="glow-ambient top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-600/10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold">
          <Film class="w-3.5 h-3.5" />
          <span>Executive Message · HD 1080P</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
          Hear Directly From <span class="gold-gradient-text">Vivek Thapar</span>
        </h2>
        <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
          Watch Vivek share his 20-year commitment to transparent client growth, custom software engineering, and direct founder accountability.
        </p>
      </div>

      <!-- Main Video Theater Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        <!-- Video Player Column (7 cols) -->
        <div class="lg:col-span-7">
          <div class="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-dark-950 shadow-2xl group">
            
            <!-- Video element with poster -->
            <video 
              ref="player"
              src="/media/vivek-intro-video.mp4"
              poster="/media/vivek-thapar-founder.webp"
              playsinline
              controls
              class="w-full aspect-video object-cover"
              @play="isPlaying = true"
              @pause="isPlaying = false"
            ></video>

            <!-- Video Status Bar overlay -->
            <div class="p-4 bg-dark-950/90 border-t border-slate-800 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-2.5 h-2.5 rounded-full bg-brand-400 animate-pulse"></div>
                <span class="text-xs font-semibold text-slate-300">NYC Headquarters • Queens, NY</span>
              </div>
              <div class="flex items-center gap-2 text-xs text-slate-400">
                <span class="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[11px]">Audio Ready</span>
                <span class="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-[11px]">1080p HD</span>
              </div>
            </div>

          </div>
        </div>

        <!-- Takeaways & Key Pillars Column (5 cols) -->
        <div class="lg:col-span-5 space-y-5">
          
          <div class="p-6 rounded-2xl glass-panel glass-panel-hover border-l-4 border-l-brand-500">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0 mt-0.5">
                <Award class="w-5 h-5" />
              </div>
              <div>
                <h3 class="text-base font-bold text-white font-display">20-Year NYC Growth Track Record</h3>
                <p class="text-xs text-slate-300 mt-1 leading-relaxed">
                  Driving scalable revenue, lead acquisition, and customer retention across 15+ complex industries from legal to healthcare and fintech.
                </p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl glass-panel glass-panel-hover border-l-4 border-l-indigo-500">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                <Cpu class="w-5 h-5" />
              </div>
              <div>
                <h3 class="text-base font-bold text-white font-display">Custom Engineering &amp; AI Systems</h3>
                <p class="text-xs text-slate-300 mt-1 leading-relaxed">
                  Zero generic templates. High-converting custom web applications, workflow automation, and search dominance built from ground up.
                </p>
              </div>
            </div>
          </div>

          <div class="p-6 rounded-2xl glass-panel glass-panel-hover border-l-4 border-l-emerald-500">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                <ShieldCheck class="w-5 h-5" />
              </div>
              <div>
                <h3 class="text-base font-bold text-white font-display">Direct Founder Accountability</h3>
                <p class="text-xs text-slate-300 mt-1 leading-relaxed">
                  Direct senior oversight on every engagement. No junior agency pass-offs, no inflated overhead, and 100% transparent delivery.
                </p>
              </div>
            </div>
          </div>

          <div class="pt-2 flex items-center gap-4">
            <a 
              href="#contact" 
              class="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 shadow-lg shadow-brand-700/25 transition-all text-center"
            >
              <span>Discuss Your Project With Vivek</span>
              <ArrowRight class="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Film, Award, Cpu, ShieldCheck, ArrowRight } from 'lucide-vue-next'

const player = ref(null)
const isPlaying = ref(false)
</script>
