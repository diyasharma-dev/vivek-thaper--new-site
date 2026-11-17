<template>
  <section class="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-orange-50/20 via-white to-white">
    
    <!-- Architectural subtle grid background -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#0f172a06_1px,transparent_1px),linear-gradient(to_bottom,#0f172a06_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_25%,#000_70%,transparent_100%)] pointer-events-none"></div>

    <!-- Warm ambient glow (Mirch signature fiery amber + subtle tech blue) -->
    <div class="absolute -top-24 -right-12 w-96 h-96 bg-gradient-to-br from-orange-400/20 via-amber-300/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/2 -left-20 w-80 h-80 bg-gradient-to-tr from-blue-500/10 via-indigo-400/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <!-- Left Column: Copy & Actions (7 cols) -->
        <div class="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
          
          <!-- Editorial Label with Mirch Media Heritage -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/5 border border-orange-500/30 text-orange-700 font-mono text-[11px] font-bold tracking-wider uppercase shadow-2xs">
              <span class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              <span>Mirch Media NYC · Est. 2006</span>
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold border border-blue-200/80">
              Founder &amp; CEO · Tech Architect
            </span>
          </div>

          <!-- Main Title: Modern Bold Geometric Heading with Vibrant Brand Gradient -->
          <h1 class="text-2xl sm:text-4xl lg:text-[46px] font-heading font-extrabold text-slate-900 tracking-tight leading-[1.18] sm:leading-[1.14]">
            Twenty years building digital businesses, directing strategy, and scaling revenue in <span class="gradient-text-brand">New York City</span>.
          </h1>

          <!-- Personal Statement & Subheading -->
          <div class="space-y-3 sm:space-y-4">
            <blockquote class="border-l-4 border-orange-500 bg-gradient-to-r from-orange-50/80 via-amber-50/50 to-white p-3.5 sm:p-4 rounded-r-xl text-left text-xs sm:text-sm md:text-base text-slate-800 font-sans leading-relaxed shadow-2xs">
              <span class="text-slate-950 font-bold">"I have a confession to make:</span> I love creating, designing, logic planning, leading teams, and working with startups. My 20+ years of experience with digital marketing and website development make me a natural project manager."
              <span class="block text-xs font-mono font-bold text-orange-600 mt-2">— Vivek Thapar, Serial Entrepreneur</span>
            </blockquote>

            <p class="text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Founder &amp; CEO of <strong class="text-slate-900 font-bold">Mirch Media</strong> in Forest Hills, Queens. Direct founder accountability, logic planning, and project management backed by a talented agency team of developers, designers, and marketers.
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 pt-1">
            <a 
              href="#work"
              class="btn-primary"
            >
              <span>Explore Selected Work</span>
              <ArrowDown class="w-4 h-4 text-orange-100 ml-0.5" />
            </a>

            <button 
              @click="$emit('open-video')"
              class="btn-secondary"
            >
              <div class="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                <Play class="w-2.5 h-2.5 fill-orange-600 text-orange-600 ml-0.5" />
              </div>
              <span>Watch Message (52s)</span>
            </button>

            <router-link 
              to="/contact"
              class="btn-secondary"
            >
              <span>Schedule Call</span>
              <ArrowUpRight class="w-3.5 h-3.5 text-orange-600" />
            </router-link>

            <a 
              href="tel:+17182074446"
              class="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-bold text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
            >
              <Phone class="w-3.5 h-3.5 text-orange-500" />
              <span>(718) 207-4446</span>
            </a>
          </div>

          <!-- Modern High-Contrast Metric Strip with Distinct Colors -->
          <div class="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center sm:text-left">
            <div class="p-3 rounded-2xl bg-slate-50/80 border border-slate-100">
              <div class="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900">20+</div>
              <div class="text-[10px] sm:text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mt-0.5">Years in Business</div>
            </div>
            <div class="p-3 rounded-2xl bg-orange-50/70 border border-orange-100">
              <div class="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-orange-600">500+</div>
              <div class="text-[10px] sm:text-[11px] font-mono font-bold text-orange-700 uppercase tracking-wider mt-0.5">Platforms Shipped</div>
            </div>
            <div class="p-3 rounded-2xl bg-blue-50/70 border border-blue-100">
              <div class="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-blue-600">300+</div>
              <div class="text-[10px] sm:text-[11px] font-mono font-bold text-blue-700 uppercase tracking-wider mt-0.5">Clients Scaled</div>
            </div>
            <div class="p-3 rounded-2xl bg-amber-50/70 border border-amber-100">
              <div class="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-amber-600">NYC</div>
              <div class="text-[10px] sm:text-[11px] font-mono font-bold text-amber-700 uppercase tracking-wider mt-0.5">Queens Studio</div>
            </div>
          </div>

        </div>

        <!-- Right Column: Museum-Quality Portrait Frame (5 cols) -->
        <div class="lg:col-span-5 relative flex justify-center">
          
          <div class="relative w-full max-w-sm sm:max-w-md">
            
            <!-- Gallery container with warm depth glow -->
            <div class="bg-white p-3 sm:p-3.5 rounded-3xl border border-orange-200/70 shadow-xl shadow-orange-500/5 relative group hover:border-orange-400/80 transition-all duration-300">
              
              <!-- Perfect 3:4 portrait container -->
              <div class="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100">
                <img 
                  src="/media/vivek-thapar-ceo.webp" 
                  alt="Vivek Thapar - Founder & CEO of Mirch Media"
                  class="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                />

                <!-- Subtle bottom gradient for caption legibility -->
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none"></div>

                <!-- Video trigger button -->
                <button 
                  @click="$emit('open-video')"
                  class="absolute top-3.5 right-3.5 z-20 flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 hover:border-orange-500 text-slate-900 text-xs font-bold transition-all cursor-pointer shadow-md hover:scale-105"
                >
                  <Play class="w-3 h-3 text-orange-500 fill-orange-500" />
                  <span>Play Intro (0:52)</span>
                </button>

                <!-- In-card Bottom Identification -->
                <div class="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-orange-200/80 shadow-md">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="text-sm font-heading font-bold text-slate-900">Vivek Thapar</h3>
                      <p class="text-[11px] text-orange-600 font-bold">Founder &amp; CEO · Mirch Media</p>
                    </div>
                    <div class="text-right shrink-0">
                      <span class="text-[9px] uppercase tracking-widest text-slate-400 font-mono font-bold block">HQ Studio</span>
                      <span class="text-xs font-bold text-slate-800">Queens, NYC</span>
                    </div>
                  </div>
                </div>

              </div>

              <!-- Editorial caption beneath photo -->
              <div class="mt-2.5 px-1 flex items-center justify-between text-[11px] text-slate-500 font-mono font-medium">
                <span class="text-orange-700 font-bold">Executive Office</span>
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
import { Play, ArrowUpRight, ArrowDown, Phone } from 'lucide-vue-next'

defineEmits(['open-video'])
</script>