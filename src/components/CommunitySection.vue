<template>
  <section id="community" class="py-24 relative overflow-hidden bg-slate-50/70 border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 space-y-3">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 text-orange-700 font-mono text-[11px] font-bold tracking-wider uppercase shadow-2xs">
          <Heart class="w-3.5 h-3.5 text-orange-500 fill-orange-500/20" />
          <span>Civic Leadership &amp; Service</span>
        </span>
        <h2 class="text-3xl sm:text-4xl font-heading font-bold text-slate-900 tracking-tight leading-tight">
          Beyond Business: <span class="gradient-text-brand">Deep Civic Commitment</span> &amp; Community Care
        </h2>
        <blockquote class="text-sm sm:text-base text-slate-700 font-sans italic max-w-2xl pt-2 border-l-4 border-orange-500 bg-orange-50/40 pl-4 py-2 rounded-r-xl">
          “You make a living by what you get. You make a life by what you give.”
          <footer class="text-xs text-orange-600 font-mono font-bold mt-1 not-italic">
            — Winston Churchill
          </footer>
        </blockquote>
      </div>

      <!-- 3 Community Pillars Cards with Distinct Color Themes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
        
        <!-- Pillar 1: Underdogs & NYC Parks (Emerald) -->
        <div class="p-8 rounded-2xl bg-gradient-to-br from-white via-emerald-50/20 to-emerald-50/30 border border-emerald-200/80 hover:border-emerald-400 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[10px] font-mono uppercase tracking-widest text-emerald-700 font-bold">Urban Green Spaces</span>
              <span class="text-xs font-mono font-bold text-emerald-800 bg-emerald-100/60 px-2.5 py-1 rounded-md border border-emerald-200">President</span>
            </div>
            
            <h3 class="text-lg font-heading font-bold text-slate-900 group-hover:text-emerald-950 transition-colors mb-3">Underbridge Dog Run &amp; NYC Parks</h3>
            
            <p class="text-sm text-slate-600 leading-relaxed font-sans">
              As President of the <strong>Underbridge Dog Run Volunteer Group</strong>, Vivek partners actively with the <em>NYC Parks Department</em>, <em>NYC Partnership for Parks</em>, and the <em>Department of Housing &amp; Development of New York</em> to preserve public urban spaces and maintain vibrant community hubs.
            </p>
          </div>

          <div class="mt-8 pt-4 border-t border-emerald-100 text-xs text-slate-500 font-sans flex items-center justify-between">
            <span>Civic Group</span>
            <span class="text-emerald-800 font-bold font-mono">NYC Parks Dept Partner</span>
          </div>
        </div>

        <!-- Pillar 2: Fraternal Affairs & Heritage (Mirch Orange) -->
        <div class="p-8 rounded-2xl bg-gradient-to-br from-white via-orange-50/25 to-amber-50/30 border border-orange-200/80 hover:border-orange-400 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[10px] font-mono uppercase tracking-widest text-orange-700 font-bold">Heritage &amp; Mentorship</span>
              <span class="text-xs font-mono font-bold text-orange-800 bg-orange-100/60 px-2.5 py-1 rounded-md border border-orange-200">Director</span>
            </div>
            
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center p-1.5 shrink-0 shadow-xs border border-slate-800">
                <img src="/media/iota-nu-delta-crest.png" alt="Iota Nu Delta Crest" class="w-full h-full object-contain" />
              </div>
              <h3 class="text-lg font-heading font-bold text-slate-900 group-hover:text-orange-950 transition-colors">Iota Nu Delta Fraternal Board</h3>
            </div>
            
            <p class="text-sm text-slate-600 leading-relaxed font-sans">
              Serving on the National Board of Directors of <strong>Iota Nu Delta</strong>, the first South Asian fraternal organization in the United States. Providing structured collegiate mentorship, scholarship guidance, and cultural heritage leadership.
            </p>
          </div>

          <div class="mt-8 pt-4 border-t border-orange-100 text-xs text-slate-500 font-sans flex items-center justify-between">
            <span>Fraternal Board</span>
            <span class="text-orange-800 font-bold font-mono">Board of Directors</span>
          </div>
        </div>

        <!-- Pillar 3: Own My Mile (Royal Blue) -->
        <div class="p-8 rounded-2xl bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 border border-blue-200/80 hover:border-blue-400 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[10px] font-mono uppercase tracking-widest text-blue-700 font-bold">Queens Neighborhood</span>
              <span class="text-xs font-mono font-bold text-blue-800 bg-blue-100/60 px-2.5 py-1 rounded-md border border-blue-200">Grassroots</span>
            </div>
            
            <h3 class="text-lg font-heading font-bold text-slate-900 group-hover:text-blue-950 transition-colors mb-3">"Own My Mile" Queens Neighborhood Upkeep</h3>
            
            <p class="text-sm text-slate-600 leading-relaxed font-sans">
              Grassroots community street cleanups, local business coordination, and direct partnership with borough officials to ensure Forest Hills streets and storefronts remain clean, inviting, and safe for all residents.
            </p>
          </div>

          <div class="mt-8 pt-4 border-t border-blue-100 text-xs text-slate-500 font-sans flex items-center justify-between">
            <span>Grassroots Program</span>
            <span class="text-blue-800 font-bold font-mono">Forest Hills, Queens</span>
          </div>
        </div>

      </div>

      <!-- Bottom Link to Full Community Page -->
      <div class="text-center">
        <router-link 
          to="/community" 
          class="btn-secondary text-xs"
        >
          <span>Explore All Civic Initiatives &amp; Photos</span>
          <ArrowRight class="w-3.5 h-3.5 text-orange-600" />
        </router-link>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Heart, ArrowRight } from 'lucide-vue-next'
</script>
