<template>
  <section id="community" class="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-slate-50/70 border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-12 sm:mb-14 space-y-3">
        <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-700 font-bold">
          <span class="w-2 h-2 rounded-full bg-red-600"></span>
          <span>Civic Leadership &amp; Service</span>
        </div>
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-normal leading-[1.3] sm:leading-[1.32] lg:leading-[1.35]">
          Beyond Business: <span class="text-red-600">Civic Commitment</span> &amp; Community Care
        </h2>
        <blockquote class="text-sm sm:text-base text-slate-700 font-sans italic max-w-2xl pt-2 border-l-4 border-slate-900 bg-white/80 pl-4 py-2.5 rounded-r-xl shadow-2xs">
          “You make a living by what you get. You make a life by what you give.”
          <footer class="text-xs text-slate-600 font-mono font-bold mt-1.5 not-italic">
            — Winston Churchill
          </footer>
        </blockquote>
      </div>

      <!-- 3 Community Pillars Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
        
        <!-- Pillar 1: Underbridge Dog Run & NYC Parks -->
        <div class="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">Urban Public Spaces</span>
              <span class="text-xs font-mono font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">President</span>
            </div>
            
            <h3 class="text-base sm:text-lg font-heading font-bold text-slate-900 mb-2.5">Underbridge Dog Run &amp; NYC Parks</h3>
            
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              As President of the <strong>Underbridge Dog Run Volunteer Group</strong>, Vivek is actively involved on the ground with the <em>NYC Parks Department</em>, <em>NYC Partnership for Parks</em>, and the <em>Department of Housing &amp; Development of New York</em> to preserve public urban spaces and maintain vibrant community hubs.
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-mono flex items-center justify-between">
            <span>Civic Group</span>
            <span class="text-slate-800 font-bold">NYC Parks Partner</span>
          </div>
        </div>

        <!-- Pillar 2: Fraternal Affairs & Heritage -->
        <div class="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">Heritage &amp; Mentorship</span>
              <span class="text-xs font-mono font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">Board of Directors</span>
            </div>
            
            <div class="flex items-center gap-3 mb-2.5">
              <div class="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center p-1 shrink-0 border border-slate-800">
                <img src="/media/iota-nu-delta-crest.png" alt="Iota Nu Delta Crest" class="w-full h-full object-contain" />
              </div>
              <h3 class="text-base sm:text-lg font-heading font-bold text-slate-900">Iota Nu Delta Fraternal Board</h3>
            </div>
            
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Serving on the National Board of Directors of <strong>Iota Nu Delta</strong>, the first South Asian fraternal organization in the United States. Providing structured collegiate mentorship, scholarship guidance, and cultural heritage leadership.
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-mono flex items-center justify-between">
            <span>National Fraternity</span>
            <span class="text-slate-800 font-bold">Est. 1994</span>
          </div>
        </div>

        <!-- Pillar 3: Own My Mile -->
        <div class="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">Queens Neighborhood</span>
              <span class="text-xs font-mono font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">Grassroots</span>
            </div>
            
            <h3 class="text-base sm:text-lg font-heading font-bold text-slate-900 mb-2.5">"Own My Mile" Queens Upkeep</h3>
            
            <blockquote class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans italic border-l-2 border-slate-300 pl-3 py-1 mb-2">
              "I care about my neighborhood and I find it necessary to work with local officials and neighbors to help upkeep the community."
            </blockquote>

            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Grassroots community cleanups, merchant coordination, and direct partnership with borough officials to ensure Forest Hills streets and storefronts remain clean, inviting, and safe for all residents.
            </p>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 font-mono flex items-center justify-between">
            <span>Neighborhood Upkeep</span>
            <span class="text-slate-800 font-bold">Forest Hills, Queens</span>
          </div>
        </div>

      </div>

      <!-- Bottom Link -->
      <div class="text-center">
        <router-link 
          to="/community" 
          class="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-heading font-bold text-xs border border-slate-200 shadow-2xs transition-all inline-flex items-center gap-2"
        >
          <span>Explore All Civic Initiatives</span>
          <ArrowRight class="w-3.5 h-3.5 text-red-600 shrink-0" />
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'
</script>
