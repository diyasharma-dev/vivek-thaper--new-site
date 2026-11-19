<template>
  <section class="relative pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-18 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white">
    
    <!-- Subtle architectural grid background -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_25%,#000_70%,transparent_100%)] pointer-events-none"></div>

    <!-- Soft Warm Ambient Glow -->
    <div class="absolute -top-24 -right-12 w-96 h-96 bg-gradient-to-br from-red-400/15 via-rose-300/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        <!-- Left Column: Copy & Actions (7 cols) -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          <!-- Editorial Label: Mirch Media NYC Heritage -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white font-mono text-[11px] font-semibold tracking-wider uppercase shadow-2xs">
              <span class="w-1.5 h-1.5 rounded-full bg-red-400"></span>
              <span>Mirch Media NYC · Est. 2006</span>
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-medium border border-slate-200">
              Founder &amp; CEO · Forest Hills, Queens
            </span>
          </div>

          <!-- Main Executive Headline with Generous Line-Height and Spacing -->
          <h1 class="hero-headline text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-heading font-extrabold text-slate-900 tracking-normal leading-[1.32] sm:leading-[1.35] lg:leading-[1.38] text-balance my-3.5 sm:my-4">
            Twenty years building digital businesses, directing strategy, and scaling revenue in <span class="text-red-600">New York City.</span>
          </h1>

          <!-- Founder Confession Quote (Authentic from vivekthapar.com) -->
          <div class="space-y-4">
            <blockquote class="border-l-4 border-red-500 bg-red-50/50 p-4 sm:p-5 rounded-r-2xl text-left text-sm sm:text-base text-slate-800 font-sans leading-relaxed shadow-2xs">
              <span class="text-slate-950 font-bold">"I have a confession to make:</span> I love creating, designing, logic planning, leading teams, working with startups, and volunteer groups. My 20+ years of experience with digital marketing and website development makes me a natural project manager."
              <footer class="block text-xs font-mono font-bold text-red-700 mt-2.5 not-italic">
                — Vivek Thapar, Serial Entrepreneur &amp; Agency Founder
              </footer>
            </blockquote>

            <p class="text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Founder &amp; CEO of <strong class="text-slate-900 font-bold">Mirch Media</strong> in Forest Hills, Queens. Direct founder accountability, logic planning, and project management backed by a dedicated agency team of developers, designers, and marketers.
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-1">
            <a 
              href="#work"
              class="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Selected Work</span>
              <ArrowDown class="w-4 h-4 text-red-400 shrink-0" />
            </a>

            <button 
              @click="$emit('open-video')"
              class="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-heading font-bold text-xs sm:text-sm border border-slate-200/90 shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <div class="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                <Play class="w-2.5 h-2.5 fill-red-600 text-red-600 ml-0.5" />
              </div>
              <span>Watch Video Message</span>
              <span class="text-slate-400 font-mono text-xs">(0:52)</span>
            </button>

            <a 
              href="tel:+17182074446"
              class="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 rounded-xl text-xs font-mono font-bold text-slate-700 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              <Phone class="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span>(718) 207-4446</span>
            </a>
          </div>

          <!-- Grounded Authentic Credentials Strip (No fake metrics) -->
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
              <div class="text-base sm:text-lg xl:text-xl font-heading font-extrabold text-slate-900 whitespace-nowrap">NYC Agency</div>
              <div class="text-[10px] sm:text-[11px] font-mono text-slate-600 font-medium mt-0.5 whitespace-nowrap">Founder &amp; CEO, Mirch</div>
            </div>
            <div class="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200/80 overflow-hidden">
              <div class="text-base sm:text-lg xl:text-xl font-heading font-extrabold text-slate-900 whitespace-nowrap">Direct QA</div>
              <div class="text-[10px] sm:text-[11px] font-mono text-slate-600 font-medium mt-0.5 whitespace-nowrap">Founder Oversight</div>
            </div>
          </div>

        </div>

        <!-- Right Column: Museum-Quality Portrait Frame (5 cols) -->
        <div class="lg:col-span-5 relative flex justify-center">
          
          <div class="relative w-full max-w-sm sm:max-w-md">
            
            <div class="bg-white p-3 sm:p-3.5 rounded-3xl border border-slate-200/90 shadow-xl relative group transition-all duration-300">
              
              <div class="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100">
                <img 
                  src="/media/vivek-thapar-ceo.webp" 
                  alt="Vivek Thapar - Founder & CEO of Mirch Media"
                  class="w-full h-full object-cover object-top filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                />

                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none"></div>

                <!-- Video trigger button -->
                <button 
                  @click="$emit('open-video')"
                  class="absolute top-3.5 right-3.5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 hover:border-red-500 text-slate-900 text-xs font-bold transition-all cursor-pointer shadow-md hover:scale-105"
                >
                  <Play class="w-3 h-3 text-red-600 fill-red-600" />
                  <span>Play Intro (0:52)</span>
                </button>

                <!-- In-card Bottom Identification -->
                <div class="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                  <div class="flex items-center justify-between gap-2">
                    <div class="min-w-0">
                      <h3 class="text-sm font-heading font-bold text-slate-900 truncate">Vivek Thapar</h3>
                      <p class="text-[11px] text-red-600 font-bold truncate">Founder &amp; CEO · Mirch Media</p>
                    </div>
                    <div class="text-right shrink-0">
                      <span class="text-[9px] uppercase tracking-widest text-slate-400 font-mono font-bold block">Studio</span>
                      <span class="text-xs font-bold text-slate-800">Queens, NYC</span>
                    </div>
                  </div>
                </div>

              </div>

              <!-- Editorial caption beneath photo -->
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
import { ArrowDown, Play, Phone } from 'lucide-vue-next'

defineEmits(['open-video'])
</script>
