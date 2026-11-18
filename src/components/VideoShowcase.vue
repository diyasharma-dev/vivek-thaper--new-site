<template>
  <section id="video" class="py-14 sm:py-16 md:py-24 relative overflow-hidden bg-slate-50/70 border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-10 sm:mb-14 space-y-2.5 sm:space-y-3">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 font-mono text-[11px] font-semibold tracking-wider uppercase shadow-2xs">
          <Film class="w-3.5 h-3.5 text-amber-600" />
          <span>Executive Briefing · 52 Seconds</span>
        </span>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-slate-900 tracking-tight leading-tight">
          A personal message on founder accountability, engineering logic, and transparent growth.
        </h2>
        <p class="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-sans">
          Hear Vivek explain why direct senior involvement and bespoke software development outperform agency middlemen.
        </p>
      </div>

      <!-- Main Video Theater Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        
        <!-- Video Player Column (7 cols) -->
        <div class="lg:col-span-7">
          <div class="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg">
            
            <!-- Video element with poster -->
            <video 
              ref="player"
              src="/media/vivek-intro-video.mp4"
              poster="/media/vivek-thapar-founder.webp"
              playsinline
              controls
              class="w-full aspect-video object-cover bg-slate-950"
              @play="isPlaying = true"
              @pause="isPlaying = false"
            ></video>

            <!-- Video Status Bar -->
            <div class="p-3.5 sm:p-4 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <span class="font-sans text-slate-800 font-semibold">Vivek Thapar speaking from NYC</span>
              </div>
              <div class="font-mono text-[11px] text-slate-500 font-medium">
                0:52 Full HD
              </div>
            </div>

          </div>
        </div>

        <!-- Takeaways & Key Pillars Column (5 cols) -->
        <div class="lg:col-span-5 space-y-3.5 sm:space-y-4">
          
          <div class="card-architectural p-5 sm:p-6 hover:-translate-y-0.5">
            <span class="text-[11px] font-mono uppercase tracking-widest text-amber-700 font-bold block mb-1">01 / Proven Experience</span>
            <h3 class="text-base font-bold text-slate-900 mb-1.5">21-Year Agency Track Record</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Driving lead generation, organic search supremacy, and customer lifetime value across legal, healthcare, real estate, and venture startups.
            </p>
          </div>

          <div class="card-architectural p-5 sm:p-6 hover:-translate-y-0.5">
            <span class="text-[11px] font-mono uppercase tracking-widest text-amber-700 font-bold block mb-1">02 / Architecture</span>
            <h3 class="text-base font-bold text-slate-900 mb-1.5">Zero Cookie-Cutter Templates</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Custom-coded architectures engineered from the ground up for lightning speed, frictionless conversion flow, and sustainable scalability.
            </p>
          </div>

          <div class="card-architectural p-5 sm:p-6 hover:-translate-y-0.5">
            <span class="text-[11px] font-mono uppercase tracking-widest text-amber-700 font-bold block mb-1">03 / Partnership</span>
            <h3 class="text-base font-bold text-slate-900 mb-1.5">Direct Founder Oversight</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              No account coordinators, no offshore handoffs, and zero inflated agency retainers. You collaborate directly with Vivek on vision and execution.
            </p>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Film } from 'lucide-vue-next'

const player = ref(null)
const isPlaying = ref(false)
</script>
