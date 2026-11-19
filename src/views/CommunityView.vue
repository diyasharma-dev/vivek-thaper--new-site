<template>
  <div class="pt-20 sm:pt-24 pb-20 bg-transparent text-slate-100 min-h-screen">
    
    <!-- Hero Banner with Matched Civic Collaboration Image -->
    <section class="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 overflow-hidden border-b border-white/10">
      <!-- Subtle Ambient Lighting -->
      <div class="absolute -top-24 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-20 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Left Column (7 cols): Copy, Quote & Credentials -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-500/30 text-red-400 font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
              <Heart class="w-3.5 h-3.5 text-red-500 fill-red-500/20 shrink-0" />
              <span>Civic Leadership &amp; Philanthropy · New York City</span>
            </div>

            <h1 class="hero-headline text-3xl sm:text-5xl lg:text-[46px] font-heading font-black text-white tracking-tight leading-[1.2] text-balance">
              Beyond Business: <span class="gradient-text-brand">Uplifting New York</span> Communities
            </h1>

            <blockquote class="p-4 sm:p-5 rounded-2xl bg-[#0c0e17]/90 border border-white/10 text-sm text-slate-300 font-sans italic leading-relaxed text-left">
              “You make a living by what you get. You make a life by what you give.”
              <footer class="text-xs text-red-400 font-mono font-bold mt-1.5 not-italic">— Winston Churchill</footer>
            </blockquote>

            <!-- Quick Civic Tags -->
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-mono">
              <span class="px-3 py-1 rounded-lg bg-[#0e111d] border border-white/10 text-slate-300">NYC Parks Dept Partner</span>
              <span class="px-3 py-1 rounded-lg bg-[#0e111d] border border-white/10 text-slate-300">Partnership for Parks</span>
              <span class="px-3 py-1 rounded-lg bg-[#0e111d] border border-white/10 text-slate-300">Iota Nu Delta Fraternal Board</span>
              <span class="px-3 py-1 rounded-lg bg-[#0e111d] border border-white/10 text-slate-300">Own My Mile Queens</span>
            </div>
          </div>

          <!-- Right Column (5 cols): Civic Leadership Showcase -->
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="w-full max-w-sm">
              <div class="relative rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-white/15 via-[#0e111d] to-[#07080e] border border-white/15 shadow-2xl group overflow-hidden">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[3/4] w-full bg-slate-900">
                  <img 
                    src="/media/vivek-thapar-keynote.webp" 
                    alt="Vivek Thapar - Civic Mentorship and Keynote Address"
                    class="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-700"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                <!-- Caption Badge Placed Underneath Image -->
                <div class="pt-3.5 px-2 pb-1">
                  <div class="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider mb-0.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span>Civic Mentorship &amp; Advocacy</span>
                  </div>
                  <p class="text-xs sm:text-sm font-heading font-bold text-white tracking-tight">Vivek Thapar · Keynote Speaker &amp; Board Member</p>
                  <p class="text-[11px] text-slate-400 font-sans mt-0.5">Iota Nu Delta Fraternal Board &amp; NYC Parks Volunteer Group</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Detailed Community Pillars with Luxury Accent Cards -->
    <section class="py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        
        <!-- Pillar 1: Underbridge Dog Run & NYC Parks (Emerald Theme) -->
        <div class="p-6 sm:p-12 card-glass border-emerald-500/20 hover:border-emerald-500/40 rounded-3xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group">
          <div class="lg:col-span-7 space-y-4">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              CIVIC LEADERSHIP · NYC PARKS
            </span>
            <h2 class="text-2xl sm:text-3xl font-heading font-bold text-white group-hover:text-emerald-300 transition-colors">
              The Underdogs &amp; Underbridge Dog Run Volunteer Group
            </h2>
            <p class="text-sm text-slate-300 leading-relaxed font-sans">
              As President of the Underbridge Dog Run Volunteer Group, Vivek is actively involved on the ground with the <strong class="text-white">NYC Parks Department</strong>, <strong class="text-white">NYC Partnership for Parks</strong>, and the <strong class="text-white">Department of Housing &amp; Development of New York</strong>.
            </p>
            <p class="text-sm text-slate-400 leading-relaxed font-sans">
              Urban green spaces and pet-friendly recreational parks are essential to mental wellbeing and neighborly cohesion in New York City. Through regular community maintenance drives, park cleanups, and advocacy with borough officials, Vivek helps preserve and modernize community recreation.
            </p>
            <div class="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span class="px-3 py-1 rounded-lg bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 font-bold">NYC Parks Dept Partner</span>
              <span class="px-3 py-1 rounded-lg bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 font-bold">Partnership for Parks</span>
              <span class="px-3 py-1 rounded-lg bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 font-bold">Recreation Preservation</span>
            </div>
          </div>

          <div class="lg:col-span-5 rounded-2xl overflow-hidden border border-emerald-500/30 aspect-[4/3] relative bg-slate-900 shadow-xl group-hover:shadow-emerald-500/10 transition-all">
            <img 
              src="/media/vivek-thapar-founder.webp" 
              alt="Vivek Thapar - NYC Parks and Community Leadership"
              class="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <!-- Pillar 2: Iota Nu Delta Fraternal Board (Crimson Theme) -->
        <div class="p-6 sm:p-12 card-glass border-red-500/20 hover:border-red-500/40 rounded-3xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group">
          <div class="lg:col-span-5 rounded-2xl overflow-hidden border border-red-500/30 aspect-[4/3] relative order-last lg:order-first bg-gradient-to-br from-[#0c0e17] via-[#141829] to-[#0c0e17] shadow-xl group-hover:shadow-red-500/10 transition-all flex items-center justify-center p-6 sm:p-10">
            <img 
              src="/media/iota-nu-delta-crest.png" 
              alt="Iota Nu Delta Official National Crest"
              class="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_24px_rgba(239,68,68,0.25)] group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div class="lg:col-span-7 space-y-4">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
              <span class="w-2 h-2 rounded-full bg-red-500"></span>
              HERITAGE &amp; STUDENT MENTORSHIP
            </span>
            <h2 class="text-2xl sm:text-3xl font-heading font-bold text-white group-hover:text-red-300 transition-colors">
              Board of Directors — Iota Nu Delta
            </h2>
            <p class="text-sm text-slate-300 leading-relaxed font-sans">
              Vivek serves as an active member of the <strong class="text-white">Board of Directors of Iota Nu Delta</strong>, the first South Asian fraternal organization in the United States. Established in 1994, the fraternity bridges cultural identity with academic excellence, leadership development, and social action.
            </p>
            <p class="text-sm text-slate-400 leading-relaxed font-sans">
              Through nationwide alumni networks and collegiate chapters, Vivek mentors South Asian students navigating university life, career transitions into technology, and entrepreneurial ventures.
            </p>
            <div class="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span class="px-3 py-1 rounded-lg bg-red-950/40 text-red-300 border border-red-500/30 font-bold">National Board Member</span>
              <span class="px-3 py-1 rounded-lg bg-red-950/40 text-red-300 border border-red-500/30 font-bold">Collegiate Scholarship</span>
              <span class="px-3 py-1 rounded-lg bg-red-950/40 text-red-300 border border-red-500/30 font-bold">Cultural Heritage</span>
            </div>
          </div>
        </div>

        <!-- Pillar 3: Own My Mile (Blue Theme) -->
        <div class="p-6 sm:p-12 card-glass border-blue-500/20 hover:border-blue-500/40 rounded-3xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center group">
          <div class="lg:col-span-7 space-y-4">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-wider shadow-2xs">
              <span class="w-2 h-2 rounded-full bg-blue-500"></span>
              NEIGHBORHOOD CARE · QUEENS, NYC
            </span>
            <h2 class="text-2xl sm:text-3xl font-heading font-bold text-white group-hover:text-blue-300 transition-colors">
              "Own My Mile" Queens Upkeep Initiative
            </h2>
            <blockquote class="text-sm text-slate-300 leading-relaxed font-sans italic border-l-2 border-blue-500 bg-[#0c0e17]/90 pl-4 py-2.5 rounded-r-xl">
              "I care deeply about my neighborhood, and I find it necessary to work with local officials and neighbors to help upkeep our community."
              <span class="block text-xs font-mono font-bold text-blue-400 not-italic mt-1">— Vivek Thapar</span>
            </blockquote>
            <p class="text-sm text-slate-400 leading-relaxed font-sans">
              Forest Hills is not just where Vivek runs Mirch Media; it is his home. Through grassroots community walks, merchant beautification advocacy, and coordinating with municipal maintenance teams, "Own My Mile" embodies the philosophy that civic pride begins on your own street.
            </p>
            <div class="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span class="px-3 py-1 rounded-lg bg-blue-950/40 text-blue-300 border border-blue-500/30 font-bold">Local Merchant Advocacy</span>
              <span class="px-3 py-1 rounded-lg bg-blue-950/40 text-blue-300 border border-blue-500/30 font-bold">Queens Neighborhood Pride</span>
            </div>
          </div>

          <div class="lg:col-span-5 rounded-2xl overflow-hidden border border-blue-500/30 aspect-[4/3] relative bg-slate-900 shadow-xl group-hover:shadow-blue-500/10 transition-all">
            <img 
              src="/media/vivek-thapar-awards.webp" 
              alt="Vivek Thapar Community Recognition & Leadership"
              class="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { Heart } from 'lucide-vue-next'
</script>
