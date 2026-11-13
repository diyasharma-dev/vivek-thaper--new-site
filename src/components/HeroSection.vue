<template>
  <section class="relative min-h-[90vh] pt-32 pb-20 flex items-center overflow-hidden bg-[#0c0d10]">
    
    <!-- Architectural subtle grid background -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,#000_60%,transparent_100%)] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        <!-- Left Column: Copy & Actions (7 cols) -->
        <div class="lg:col-span-7 space-y-7 text-center lg:text-left">
          
          <!-- Editorial Label -->
          <div>
            <span class="eyebrow-label">
              <span class="w-1.5 h-1.5 rounded-full bg-[#c59b63]"></span>
              <span>New York City · Est. 2006</span>
            </span>
          </div>

          <!-- Main Title -->
          <h1 class="text-3xl sm:text-5xl lg:text-[50px] font-serif font-normal text-[#f5f5f2] tracking-[-0.02em] leading-[1.18]">
            Twenty-one years building digital businesses, directing engineering, and scaling revenue in New York City.
          </h1>

          <!-- Personal Statement & Subheading -->
          <div class="space-y-4">
            <blockquote class="border-l-2 border-[#c59b63] pl-4 py-0.5 text-left text-base sm:text-lg text-neutral-300 font-sans leading-relaxed">
              <span class="text-white font-medium">"I have a confession to make:</span> I love creating, designing, logic planning, leading teams, and working with startups. My 21+ years of experience with digital marketing and website engineering make me a natural project manager."
            </blockquote>

            <p class="text-sm text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Founder &amp; CEO of <strong class="text-neutral-200 font-medium">Mirch Media</strong> in Forest Hills, Queens. Direct founder accountability for enterprises, law firms, healthcare systems, and growing startups.
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-1">
            <button 
              @click="$emit('open-video')"
              class="btn-primary"
            >
              <div class="w-5 h-5 rounded-full bg-[#0c0d10]/20 flex items-center justify-center">
                <Play class="w-3 h-3 fill-[#0c0d10] text-[#0c0d10] ml-0.5" />
              </div>
              <span>Watch Message From Vivek (52s)</span>
            </button>

            <router-link 
              to="/contact"
              class="btn-secondary"
            >
              <span>Schedule Strategy Call</span>
              <ArrowUpRight class="w-4 h-4 text-[#c59b63]" />
            </router-link>

            <a 
              href="tel:+17182074446"
              class="inline-flex items-center gap-2 px-3 py-2.5 rounded-md text-xs font-mono font-medium text-neutral-400 hover:text-white transition-colors"
            >
              <Phone class="w-3.5 h-3.5 text-[#c59b63]" />
              <span>(718) 207-4446</span>
            </a>
          </div>

          <!-- Editorial Metric Strip -->
          <div class="pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
            <div>
              <div class="text-2xl sm:text-3xl font-serif text-white">21+</div>
              <div class="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-0.5">Years Experience</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-serif text-[#c59b63]">500+</div>
              <div class="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-0.5">Projects Shipped</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-serif text-white">98%</div>
              <div class="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-0.5">Retention Rate</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-serif text-white">NYC</div>
              <div class="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mt-0.5">Queens Office</div>
            </div>
          </div>

        </div>

        <!-- Right Column: Museum-Quality Portrait Frame (5 cols) -->
        <div class="lg:col-span-5 relative flex justify-center">
          
          <div class="relative w-full max-w-md">
            
            <!-- Gallery passe-partout frame -->
            <div class="card-architectural p-3 shadow-2xl">
              
              <!-- Perfect 3:4 portrait container preventing head or shoulder crop -->
              <div class="relative rounded-lg overflow-hidden aspect-[3/4] bg-[#090a0d]">
                <img 
                  src="/media/vivek-thapar-ceo.webp" 
                  alt="Vivek Thapar - Founder & CEO of Mirch Media"
                  class="w-full h-full object-cover object-top filter contrast-[1.02]"
                  loading="eager"
                />

                <!-- Subtle bottom gradient for caption legibility -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#0c0d10]/95 via-transparent to-transparent pointer-events-none"></div>

                <!-- Video trigger button -->
                <button 
                  @click="$emit('open-video')"
                  class="absolute top-3.5 right-3.5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0c0d10]/85 backdrop-blur-md border border-white/[0.15] hover:border-[#c59b63] text-white text-xs font-medium transition-all cursor-pointer shadow-md"
                >
                  <Play class="w-3 h-3 text-[#c59b63] fill-[#c59b63]" />
                  <span>Play Intro (0:52)</span>
                </button>

                <!-- In-card Bottom Identification -->
                <div class="absolute bottom-3 inset-x-3 p-3 rounded-md bg-[#0c0d10]/90 backdrop-blur-md border border-white/[0.08]">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="text-sm font-semibold text-white">Vivek Thapar</h3>
                      <p class="text-[11px] text-[#c59b63] font-normal">Founder &amp; CEO · Mirch Media NYC</p>
                    </div>
                    <div class="text-right shrink-0">
                      <span class="text-[9px] uppercase tracking-widest text-neutral-400 font-mono block">Headquarters</span>
                      <span class="text-xs font-medium text-neutral-200">Queens, NYC</span>
                    </div>
                  </div>
                </div>

              </div>

              <!-- Editorial caption beneath photo -->
              <div class="mt-3 px-1 py-0.5 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>Executive Advisory</span>
                <span class="text-neutral-500">108-14 72nd Ave, NY</span>
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
