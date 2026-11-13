<template>
  <section class="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden bg-[#0d0f12]">
    
    <!-- Subtle architectural hairline grid -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_60%,transparent_100%)] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
        
        <!-- Left Column: Copy & CTAs (7 cols) -->
        <div class="lg:col-span-7 space-y-7 text-center lg:text-left">
          
          <!-- Editorial Label -->
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13161c] border border-white/[0.08] text-neutral-300 text-xs">
            <span class="w-1.5 h-1.5 rounded-full bg-[#c59b63]"></span>
            <span class="font-mono uppercase tracking-widest text-[11px] text-[#d4a36a] font-medium">New York City · Est. 2006</span>
          </div>

          <!-- Main Title -->
          <h1 class="text-3xl sm:text-4xl lg:text-[46px] font-serif font-normal text-[#f4f4f0] tracking-tight leading-[1.2]">
            Twenty-one years building digital businesses, directing engineering, and scaling revenue in New York City.
          </h1>

          <!-- Personal Statement & Subheading -->
          <div class="space-y-4">
            <p class="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              <span class="text-white font-medium">"I have a confession to make:</span> I love creating, designing, logic planning, leading teams, and working with startups. My 21+ years of experience with digital marketing and website engineering make me a natural project manager."
            </p>

            <p class="text-sm text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Founder &amp; CEO of <strong class="text-neutral-200 font-semibold">Mirch Media</strong> in Forest Hills, Queens. Direct founder accountability for enterprises, law firms, healthcare systems, and growing startups.
            </p>
          </div>

          <!-- Primary & Secondary Action Buttons -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
            <button 
              @click="$emit('open-video')"
              class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg font-semibold text-sm text-[#0d0f12] bg-[#c59b63] hover:bg-[#dfc698] shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <div class="w-6 h-6 rounded-full bg-[#0d0f12]/20 flex items-center justify-center">
                <Play class="w-3.5 h-3.5 fill-[#0d0f12] text-[#0d0f12] ml-0.5" />
              </div>
              <span>Watch Message From Vivek (52s)</span>
            </button>

            <router-link 
              to="/contact"
              class="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium text-sm text-neutral-200 bg-[#13161c] hover:bg-[#181c24] border border-white/[0.1] hover:border-[#c59b63]/50 transition-all"
            >
              <span>Schedule Strategy Call</span>
              <ArrowUpRight class="w-4 h-4 text-[#d4a36a]" />
            </router-link>

            <a 
              href="tel:+17182074446"
              class="inline-flex items-center gap-2 px-4 py-3.5 rounded-lg text-xs font-mono font-medium text-neutral-400 hover:text-white transition-colors"
            >
              <Phone class="w-3.5 h-3.5 text-[#d4a36a]" />
              <span>(718) 207-4446</span>
            </a>
          </div>

          <!-- Editorial Metric Strip -->
          <div class="pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
            <div>
              <div class="text-2xl sm:text-3xl font-serif text-white">21+</div>
              <div class="text-xs text-neutral-400 font-medium uppercase tracking-wider mt-0.5">Years Experience</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-serif text-[#d4a36a]">500+</div>
              <div class="text-xs text-neutral-400 font-medium uppercase tracking-wider mt-0.5">Projects Shipped</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-serif text-white">98%</div>
              <div class="text-xs text-neutral-400 font-medium uppercase tracking-wider mt-0.5">Client Retention</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-serif text-white">NYC</div>
              <div class="text-xs text-neutral-400 font-medium uppercase tracking-wider mt-0.5">Queens Office</div>
            </div>
          </div>

        </div>

        <!-- Right Column: Gallery-Grade Executive Portrait (5 cols) -->
        <div class="lg:col-span-5 relative flex justify-center">
          
          <div class="relative w-full max-w-md">
            
            <!-- Museum-grade passe-partout frame -->
            <div class="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#13161c] shadow-2xl p-3">
              
              <!-- Perfect 3:4 portrait container preventing head or shoulder crop -->
              <div class="relative rounded-xl overflow-hidden aspect-[3/4] bg-[#090a0d]">
                <img 
                  src="/media/vivek-thapar-ceo.webp" 
                  alt="Vivek Thapar - Founder & CEO of Mirch Media"
                  class="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.01]"
                  loading="eager"
                />

                <!-- Subtle bottom shadow for caption contrast -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#0d0f12]/95 via-transparent to-transparent pointer-events-none"></div>

                <!-- Video trigger button quietly placed -->
                <button 
                  @click="$emit('open-video')"
                  class="absolute top-4 right-4 z-20 group/btn flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d0f12]/80 backdrop-blur-md border border-white/[0.15] hover:border-[#c59b63] text-white text-xs font-medium shadow-md transition-all cursor-pointer"
                >
                  <Play class="w-3 h-3 text-[#d4a36a] fill-[#d4a36a]" />
                  <span>Watch Video (0:52)</span>
                </button>

                <!-- In-card Bottom Identification -->
                <div class="absolute bottom-3 inset-x-3 p-3.5 rounded-lg bg-[#0d0f12]/90 backdrop-blur-md border border-white/[0.08]">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="text-sm font-semibold text-white">Vivek Thapar</h3>
                      <p class="text-[11px] text-[#d4a36a] font-normal">Founder &amp; CEO · Mirch Media NYC</p>
                    </div>
                    <div class="text-right shrink-0">
                      <span class="text-[9px] uppercase tracking-widest text-neutral-400 font-mono block">Headquarters</span>
                      <span class="text-xs font-medium text-neutral-200">Queens, NYC</span>
                    </div>
                  </div>
                </div>

              </div>

              <!-- Editorial caption beneath photo -->
              <div class="mt-3 px-1 py-1 flex items-center justify-between text-[11px] text-neutral-400">
                <span>Direct Executive Advisory</span>
                <span class="text-neutral-500 font-mono">108-14 72nd Ave, NY</span>
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
