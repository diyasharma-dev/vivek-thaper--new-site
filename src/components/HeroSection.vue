<template>
  <section class="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden">
    
    <!-- Ambient Radial Glow Behind Hero -->
    <div class="absolute -top-20 right-10 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
    <div class="absolute top-1/2 left-0 w-[400px] h-[400px] bg-amber-500/[0.08] rounded-full blur-[130px] pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        <!-- Left Column: Copy & Actions (7 cols) -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          <!-- Editorial Label: Interactive Media + Technology -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 font-mono text-[11px] font-bold tracking-wider uppercase">
              <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              <span>Interactive Media + Technology</span>
            </span>
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.04] text-slate-300 text-xs font-mono font-medium border border-white/10">
              Founder &amp; CEO, Mirch Media · Queens, NYC
            </span>
          </div>

          <!-- Main Executive Headline (Directly from vivekthapar.com) -->
          <h1 class="hero-headline text-3xl sm:text-5xl lg:text-[52px] xl:text-[56px] font-heading font-extrabold text-white tracking-tight leading-[1.15] text-balance my-3.5 sm:my-4">
            Picking The Perfect Project Manager <span class="gradient-text-brand">Is Important.</span>
          </h1>

          <!-- Founder Confession Quote (Authentic from vivekthapar.com) -->
          <div class="space-y-4">
            <blockquote class="card-glass border-l-4 border-l-red-500 p-4 sm:p-5 rounded-2xl text-left text-sm sm:text-base text-slate-200 font-sans leading-relaxed">
              <span class="text-white font-bold">"I have a confession to make:</span> I love creating, designing, logic planning, leading teams, working with startups, and volunteer groups. My 20+ years of experience with Digital Marketing and Website Development makes me a natural project manager."
              <footer class="block text-xs font-mono font-bold text-red-400 mt-2.5 not-italic">
                — Vivek Thapar, Serial Entrepreneur &amp; Agency Founder
              </footer>
            </blockquote>

            <p class="text-xs sm:text-sm md:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
              Product branding, custom development management, logic planning, and search engine growth. Based in Forest Hills, Queens, backed by my dedicated New York agency team at <strong class="text-white font-bold">Mirch Media</strong>.
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
            <a 
              href="#work"
              class="btn-primary text-xs sm:text-sm"
            >
              <span>View Client Portfolio</span>
              <ArrowDown class="w-4 h-4 text-white shrink-0 ml-1" />
            </a>

            <button 
              @click="$emit('open-video')"
              class="btn-secondary text-xs sm:text-sm"
            >
              <div class="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 border border-red-500/40">
                <Play class="w-2.5 h-2.5 fill-red-400 text-red-400 ml-0.5" />
              </div>
              <span>Watch Video Message</span>
              <span class="text-slate-400 font-mono text-xs">(0:52)</span>
            </button>

            <a 
              href="tel:+17182074446"
              class="inline-flex items-center justify-center gap-1.5 px-3.5 py-3 rounded-xl text-xs font-mono font-bold text-slate-300 hover:text-white hover:bg-white/[0.05] border border-white/[0.08] transition-colors"
            >
              <Phone class="w-3.5 h-3.5 text-red-400 shrink-0" />
              <span>(718) 207-4446</span>
            </a>
          </div>

          <!-- Grounded Authentic Credentials Strip -->
          <div class="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-center sm:text-left">
            <div class="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-red-500/30 transition-colors">
              <div class="text-base sm:text-lg xl:text-xl font-heading font-extrabold text-white whitespace-nowrap">Est. 2006</div>
              <div class="text-[10px] sm:text-[11px] font-mono text-slate-400 font-medium mt-0.5 whitespace-nowrap">Forest Hills, Queens</div>
            </div>
            <div class="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-red-500/30 transition-colors">
              <div class="text-base sm:text-lg xl:text-xl font-heading font-extrabold text-white whitespace-nowrap">20+ Years</div>
              <div class="text-[10px] sm:text-[11px] font-mono text-slate-400 font-medium mt-0.5 whitespace-nowrap">Project Management</div>
            </div>
            <div class="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-red-500/30 transition-colors">
              <div class="text-base sm:text-lg xl:text-xl font-heading font-extrabold text-white whitespace-nowrap">NYC Agency</div>
              <div class="text-[10px] sm:text-[11px] font-mono text-slate-400 font-medium mt-0.5 whitespace-nowrap">Founder &amp; CEO, Mirch</div>
            </div>
            <div class="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-red-500/30 transition-colors">
              <div class="text-base sm:text-lg xl:text-xl font-heading font-extrabold text-white whitespace-nowrap">Direct QA</div>
              <div class="text-[10px] sm:text-[11px] font-mono text-slate-400 font-medium mt-0.5 whitespace-nowrap">Founder Oversight</div>
            </div>
          </div>

        </div>

        <!-- Right Column: Museum-Quality Portrait Frame (5 cols) -->
        <div class="lg:col-span-5 relative flex justify-center">
          
          <div class="relative w-full max-w-sm sm:max-w-md">
            
            <!-- Ambient Glow Halo Behind Portrait -->
            <div class="absolute -inset-2 bg-gradient-to-tr from-red-600/30 to-amber-500/20 rounded-[2.5rem] blur-2xl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"></div>

            <div class="relative bg-gradient-to-b from-white/10 via-white/[0.04] to-black/40 p-3 sm:p-3.5 rounded-3xl border border-white/15 shadow-2xl backdrop-blur-xl group transition-all duration-300 hover:border-red-500/50">
              
              <div class="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-900">
                <img 
                  src="/media/vivek-thapar-ceo.webp" 
                  alt="Vivek Thapar - Founder & CEO of Mirch Media"
                  class="w-full h-full object-cover object-top filter contrast-[1.05] group-hover:scale-[1.03] transition-transform duration-700"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                />

                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>

                <!-- Video trigger button -->
                <button 
                  @click="$emit('open-video')"
                  class="absolute top-3.5 right-3.5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 hover:border-red-500 text-white text-xs font-bold transition-all cursor-pointer shadow-lg hover:scale-105"
                >
                  <Play class="w-3 h-3 text-red-500 fill-red-500" />
                  <span>Play Intro (0:52)</span>
                </button>

                <!-- Floating Agency Badge -->
                <div class="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-950/70 backdrop-blur-md border border-red-500/40 text-[10px] font-mono font-bold text-red-300">
                  <span class="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                  <span>Mirch Media</span>
                </div>

                <!-- In-card Bottom Identification -->
                <div class="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-black/80 backdrop-blur-xl border border-white/15 shadow-lg">
                  <div class="flex items-center justify-between gap-2">
                    <div class="min-w-0">
                      <h3 class="text-sm font-heading font-bold text-white truncate">Vivek Thapar</h3>
                      <p class="text-[11px] text-red-400 font-bold truncate">Founder &amp; CEO · Mirch Media</p>
                    </div>
                    <div class="text-right shrink-0">
                      <span class="text-[9px] uppercase tracking-widest text-slate-400 font-mono font-bold block">Studio</span>
                      <span class="text-xs font-bold text-white">Queens, NYC</span>
                    </div>
                  </div>
                </div>

              </div>

              <!-- Editorial caption beneath photo -->
              <div class="mt-2.5 px-1 flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5 text-[11px] text-slate-400 font-mono">
                <span class="text-white font-bold">Executive Studio</span>
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
