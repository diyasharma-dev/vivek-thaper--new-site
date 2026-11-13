<template>
  <section class="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/80 border-b border-slate-200/80">
    
    <!-- Architectural subtle grid background -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,#000_70%,transparent_100%)] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        <!-- Left Column: Copy & Actions (7 cols) -->
        <div class="lg:col-span-7 space-y-7 text-center lg:text-left">
          
          <!-- Editorial Label -->
          <div class="flex items-center justify-center lg:justify-start gap-2.5">
            <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 font-mono text-[11px] font-semibold tracking-wider uppercase shadow-2xs">
              <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span>Mirch Media NYC · Est. 2006</span>
            </span>
            <span class="hidden sm:inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
              Founder &amp; CEO
            </span>
          </div>

          <!-- Main Title -->
          <h1 class="text-3xl sm:text-5xl lg:text-[52px] font-serif font-normal text-slate-900 tracking-[-0.025em] leading-[1.16]">
            Twenty-one years building digital businesses, directing engineering, and scaling revenue in New York City.
          </h1>

          <!-- Personal Statement & Subheading -->
          <div class="space-y-4">
            <blockquote class="border-l-3 border-amber-600 bg-amber-50/50 p-4 rounded-r-xl text-left text-base sm:text-lg text-slate-800 font-sans leading-relaxed shadow-2xs">
              <span class="text-slate-950 font-bold">"I have a confession to make:</span> I love creating, designing, logic planning, leading teams, and working with startups. My 21+ years of experience with digital marketing and website engineering make me a natural project manager."
            </blockquote>

            <p class="text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Founder &amp; CEO of <strong class="text-slate-900 font-semibold">Mirch Media</strong> in Forest Hills, Queens. Vivek brings direct founder accountability to enterprise brands, legal firms, healthcare networks, and venture-backed startups.
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
            <button 
              @click="$emit('open-video')"
              class="btn-primary"
            >
              <div class="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <Play class="w-3 h-3 fill-white text-white ml-0.5" />
              </div>
              <span>Watch Message From Vivek (52s)</span>
            </button>

            <router-link 
              to="/contact"
              class="btn-secondary"
            >
              <span>Schedule Strategy Call</span>
              <ArrowUpRight class="w-4 h-4 text-amber-700" />
            </router-link>

            <a 
              href="tel:+17182074446"
              class="inline-flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-mono font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-100 transition-colors"
            >
              <Phone class="w-3.5 h-3.5 text-amber-600" />
              <span>(718) 207-4446</span>
            </a>
          </div>

          <!-- Editorial Metric Strip -->
          <div class="pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
            <div>
              <div class="text-2xl sm:text-3xl font-serif text-slate-900 font-semibold">21+</div>
              <div class="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">Years Experience</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-serif text-amber-700 font-semibold">500+</div>
              <div class="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">Platforms Shipped</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-serif text-slate-900 font-semibold">98%</div>
              <div class="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">Client Retention</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-serif text-slate-900 font-semibold">NYC</div>
              <div class="text-[11px] font-mono text-slate-500 uppercase tracking-wider mt-0.5">Queens Headquarters</div>
            </div>
          </div>

        </div>

        <!-- Right Column: Museum-Quality Portrait Frame (5 cols) -->
        <div class="lg:col-span-5 relative flex justify-center">
          
          <div class="relative w-full max-w-md">
            
            <!-- Gallery passe-partout frame with crisp modern lighting -->
            <div class="bg-white p-3.5 rounded-2xl border border-slate-200/90 shadow-xl relative">
              
              <!-- Perfect 3:4 portrait container preventing head or shoulder crop -->
              <div class="relative rounded-xl overflow-hidden aspect-[3/4] bg-slate-100">
                <img 
                  src="/media/vivek-thapar-ceo.webp" 
                  alt="Vivek Thapar - Founder & CEO of Mirch Media"
                  class="w-full h-full object-cover object-top filter contrast-[1.02]"
                  loading="eager"
                />

                <!-- Subtle bottom gradient for caption legibility -->
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

                <!-- Video trigger button -->
                <button 
                  @click="$emit('open-video')"
                  class="absolute top-3.5 right-3.5 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 hover:border-amber-500 text-slate-900 text-xs font-semibold transition-all cursor-pointer shadow-md hover:scale-105"
                >
                  <Play class="w-3 h-3 text-amber-600 fill-amber-600" />
                  <span>Play Intro (0:52)</span>
                </button>

                <!-- In-card Bottom Identification -->
                <div class="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="text-sm font-bold text-slate-900">Vivek Thapar</h3>
                      <p class="text-[11px] text-amber-700 font-semibold">Founder &amp; CEO · Mirch Media</p>
                    </div>
                    <div class="text-right shrink-0">
                      <span class="text-[9px] uppercase tracking-widest text-slate-400 font-mono block">Direct Studio</span>
                      <span class="text-xs font-semibold text-slate-800">Queens, NYC</span>
                    </div>
                  </div>
                </div>

              </div>

              <!-- Editorial caption beneath photo -->
              <div class="mt-3 px-1 py-0.5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span class="font-medium text-slate-700">Executive Consultation</span>
                <span>108-14 72nd Ave, Forest Hills</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Play, ArrowUpRight, Phone } from 'lucide-vue-next'

defineEmits(['open-video'])
</script>
