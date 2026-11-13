<template>
  <section class="relative min-h-[92vh] pt-32 pb-20 flex items-center overflow-hidden">
    <!-- Ambient Background Light Gradients -->
    <div class="glow-ambient -top-40 -left-40 w-[550px] h-[550px] bg-brand-600/15"></div>
    <div class="glow-ambient top-1/2 -right-40 w-[600px] h-[600px] bg-indigo-900/15"></div>
    <div class="glow-ambient -bottom-32 left-1/3 w-[500px] h-[500px] bg-brand-500/10"></div>

    <!-- Subtle Grid Background -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Left Column: Copy & CTAs (7 cols) -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          <!-- Availability / Credential Pill -->
          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-brand-500/30 shadow-inner">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span class="w-2 h-2 rounded-full bg-emerald-400 -ml-4"></span>
            <span class="text-xs font-semibold text-slate-300">
              NYC Founder &amp; Digital Growth Strategist <span class="text-brand-400 font-bold ml-1">· Est. 2006</span>
            </span>
          </div>

          <!-- Main Title -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12]">
            Transforming Ideas Into <br class="hidden sm:inline" />
            <span class="gold-gradient-text">High-Velocity Digital Growth</span>
          </h1>

          <!-- Personal Statement & Subheading -->
          <p class="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            <strong class="text-white font-semibold">"I have a confession to make:</strong> I love creating, designing, logic planning, leading teams, and working with startups. My <span class="text-brand-300 font-semibold">21+ years</span> of digital marketing and web engineering make me a natural project manager."
          </p>

          <p class="text-sm text-slate-400 max-w-xl mx-auto lg:mx-0">
            Founder &amp; CEO of <strong>Mirch Media</strong> in Forest Hills, Queens. Helping founders, enterprise leaders, and local communities turn digital presence into real revenue and measurable impact.
          </p>

          <!-- Primary & Secondary Action Buttons -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <button 
              @click="$emit('open-video')"
              class="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-sm text-dark-950 bg-gradient-to-r from-brand-300 via-brand-gold to-brand-500 hover:from-brand-goldLight hover:to-brand-gold shadow-lg shadow-brand-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <div class="w-7 h-7 rounded-full bg-dark-950/20 flex items-center justify-center">
                <Play class="w-3.5 h-3.5 fill-dark-950 text-dark-950 ml-0.5" />
              </div>
              <span>Watch Message From Vivek</span>
            </button>

            <router-link 
              to="/contact"
              class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-brand-500/50 shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <span>Schedule Strategy Call</span>
              <ArrowUpRight class="w-4 h-4 text-brand-400" />
            </router-link>

            <router-link 
              to="/speaking"
              class="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <Mic class="w-4 h-4 text-slate-400" />
              <span>Keynote &amp; Media</span>
            </router-link>
          </div>

          <!-- Metric Strip -->
          <div class="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center sm:text-left">
            <div>
              <div class="text-2xl sm:text-3xl font-display font-extrabold text-white">21+</div>
              <div class="text-xs text-slate-400 font-medium">Years Experience</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-display font-extrabold gold-gradient-text">500+</div>
              <div class="text-xs text-slate-400 font-medium">Projects Shipped</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-display font-extrabold text-white">300+</div>
              <div class="text-xs text-slate-400 font-medium">Clients Scaled</div>
            </div>
            <div>
              <div class="text-2xl sm:text-3xl font-display font-extrabold text-brand-400">98%</div>
              <div class="text-xs text-slate-400 font-medium">Client Retention</div>
            </div>
          </div>

        </div>

        <!-- Right Column: Interactive Portrait Card (5 cols) -->
        <div class="lg:col-span-5 relative flex justify-center">
          
          <div class="relative w-full max-w-md">
            
            <!-- Glow background halo -->
            <div class="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-brand-600/40 via-brand-400/20 to-indigo-600/30 blur-2xl opacity-75"></div>

            <!-- Portrait Frame -->
            <div class="relative rounded-3xl overflow-hidden border border-slate-700/60 bg-dark-900/90 shadow-2xl p-2.5">
              
              <!-- Perfect 3:4 container preventing any cropping of head or body -->
              <div class="relative rounded-2xl overflow-hidden aspect-[3/4] bg-dark-950">
                <img 
                  src="/media/vivek-thapar-ceo.webp" 
                  alt="Vivek Thapar - Founder & CEO of Mirch Media"
                  class="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[1.02] transform hover:scale-[1.02] transition-transform duration-500"
                  loading="eager"
                />

                <!-- Subtle gradient scrim at bottom to ensure info text contrast without masking body -->
                <div class="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/10 to-transparent"></div>

                <!-- Floating Video Trigger Over Photo -->
                <button 
                  @click="$emit('open-video')"
                  class="absolute top-4 right-4 z-20 group/btn flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-dark-950/80 backdrop-blur-md border border-brand-500/40 hover:border-brand-400 text-white text-xs font-semibold shadow-xl transition-all cursor-pointer"
                >
                  <span class="relative flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
                  </span>
                  <span>Play Intro (0:52)</span>
                </button>

                <!-- In-card Bottom Identification Info -->
                <div class="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-dark-900/90 backdrop-blur-md border border-slate-700/70">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="text-sm sm:text-base font-display font-bold text-white flex items-center gap-1.5">
                        Vivek Thapar
                        <CheckCircle class="w-4 h-4 text-brand-400 fill-brand-500/20 shrink-0" />
                      </h3>
                      <p class="text-[11px] sm:text-xs text-brand-300 font-medium">Founder &amp; CEO · Mirch Media NYC</p>
                    </div>
                    <div class="text-right shrink-0">
                      <span class="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">Base</span>
                      <span class="text-xs font-semibold text-slate-200">Queens, NYC</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            <!-- Floating Credential Badge 1 (Top Left) -->
            <div class="absolute -top-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-dark-900/90 backdrop-blur-xl border border-slate-700/70 shadow-2xl animate-float-slow">
              <div class="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                <Briefcase class="w-5 h-5" />
              </div>
              <div class="whitespace-nowrap">
                <p class="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Agency Leadership</p>
                <p class="text-xs font-bold text-white">Mirch Media (2006–Present)</p>
              </div>
            </div>

            <!-- Floating Credential Badge 2 (Bottom Right) -->
            <div class="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-dark-900/90 backdrop-blur-xl border border-slate-700/70 shadow-2xl">
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Users class="w-5 h-5" />
              </div>
              <div class="whitespace-nowrap">
                <p class="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Civic &amp; Community</p>
                <p class="text-xs font-bold text-white">Board Director &amp; Volunteer Leader</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { Play, ArrowUpRight, Mic, CheckCircle, Briefcase, Users } from 'lucide-vue-next'

defineEmits(['open-video'])
</script>
