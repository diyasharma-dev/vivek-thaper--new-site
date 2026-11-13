<template>
  <section id="video" class="py-24 relative overflow-hidden bg-[#0d0f12]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13161c] border border-white/[0.08] text-neutral-300 text-xs">
          <Film class="w-3.5 h-3.5 text-[#d4a36a]" />
          <span class="font-mono uppercase tracking-widest text-[11px] text-[#d4a36a]">Executive Briefing · 52 Seconds</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight leading-tight">
          A personal message on founder accountability, engineering logic, and transparent growth.
        </h2>
        <p class="text-neutral-400 text-base leading-relaxed font-sans">
          Hear Vivek explain why direct senior involvement and bespoke software development outperform agency middlemen.
        </p>
      </div>

      <!-- Main Video Theater Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        <!-- Video Player Column (7 cols) -->
        <div class="lg:col-span-7">
          <div class="rounded-2xl overflow-hidden border border-white/[0.1] bg-[#13161c] shadow-2xl">
            
            <!-- Video element with poster -->
            <video 
              ref="player"
              src="/media/vivek-intro-video.mp4"
              poster="/media/vivek-thapar-founder.webp"
              playsinline
              controls
              class="w-full aspect-video object-cover bg-black"
              @play="isPlaying = true"
              @pause="isPlaying = false"
            ></video>

            <!-- Video Status Bar -->
            <div class="p-4 bg-[#13161c] border-t border-white/[0.08] flex items-center justify-between text-xs text-neutral-400">
              <div class="flex items-center gap-2.5">
                <span class="w-2 h-2 rounded-full bg-[#c59b63]"></span>
                <span class="font-sans text-neutral-300 font-medium">Vivek Thapar speaking from NYC</span>
              </div>
              <div class="font-mono text-[11px] text-neutral-400">
                0:52 Runtime
              </div>
            </div>

          </div>
        </div>

        <!-- Takeaways & Key Pillars Column (5 cols) -->
        <div class="lg:col-span-5 space-y-4">
          
          <div class="p-5 rounded-xl bg-[#13161c] border border-white/[0.07] hover:border-white/[0.15] transition-all">
            <span class="text-[10px] font-mono uppercase tracking-widest text-[#d4a36a] block mb-1">01 / Experience</span>
            <h3 class="text-base font-semibold text-white mb-1.5">21-Year Proven Track Record</h3>
            <p class="text-xs text-neutral-400 leading-relaxed">
              Driving lead generation, organic search supremacy, and customer lifetime value across legal, healthcare, real estate, and venture startups.
            </p>
          </div>

          <div class="p-5 rounded-xl bg-[#13161c] border border-white/[0.07] hover:border-white/[0.15] transition-all">
            <span class="text-[10px] font-mono uppercase tracking-widest text-[#d4a36a] block mb-1">02 / Architecture</span>
            <h3 class="text-base font-semibold text-white mb-1.5">Zero Cookie-Cutter Templates</h3>
            <p class="text-xs text-neutral-400 leading-relaxed">
              Custom-coded architectures engineered from the ground up for lightning speed, frictionless conversion flow, and sustainable scalability.
            </p>
          </div>

          <div class="p-5 rounded-xl bg-[#13161c] border border-white/[0.07] hover:border-white/[0.15] transition-all">
            <span class="text-[10px] font-mono uppercase tracking-widest text-[#d4a36a] block mb-1">03 / Partnership</span>
            <h3 class="text-base font-semibold text-white mb-1.5">Direct Founder Oversight</h3>
            <p class="text-xs text-neutral-400 leading-relaxed">
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

const isPlaying = ref(false)
</script>
