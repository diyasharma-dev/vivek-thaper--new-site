<template>
  <section id="community" class="py-24 relative overflow-hidden bg-slate-50/70 border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 space-y-3">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 font-mono text-[11px] font-semibold tracking-wider uppercase shadow-2xs">
          <Heart class="w-3.5 h-3.5 text-rose-600" />
          <span>Civic Leadership &amp; Service</span>
        </span>
        <h2 class="text-3xl sm:text-4xl font-serif font-normal text-slate-900 tracking-tight leading-tight">
          Beyond Business: Deep Civic Commitment &amp; Community Care
        </h2>
        <blockquote class="text-base sm:text-lg text-slate-700 font-serif italic max-w-2xl pt-2">
          “You make a living by what you get. You make a life by what you give.”
          <footer class="text-xs text-amber-800 font-sans font-bold mt-1 not-italic">
            — Winston Churchill
          </footer>
        </blockquote>
      </div>

      <!-- 3 Community Pillars Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
        
        <!-- Pillar 1: Underdogs & NYC Parks -->
        <div class="card-architectural p-8 flex flex-col justify-between hover:-translate-y-1">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[10px] font-mono uppercase tracking-widest text-amber-700 font-bold">Urban Green Spaces</span>
              <span class="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">President</span>
            </div>
            
            <h3 class="text-lg font-serif font-bold text-slate-900 mb-3">Underbridge Dog Run &amp; NYC Parks</h3>
            
            <p class="text-sm text-slate-600 leading-relaxed font-sans">
              As President of the <strong>Underbridge Dog Run Volunteer Group</strong>, Vivek partners actively with the <em>NYC Parks Department</em>, <em>NYC Partnership for Parks</em>, and the <em>Department of Housing &amp; Development of New York</em> to preserve public urban spaces and maintain vibrant community hubs.
            </p>
          </div>

          <div class="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-500 font-sans flex items-center justify-between">
            <span>Civic Group</span>
            <span class="text-slate-900 font-semibold">NYC Parks Dept Partner</span>
          </div>
        </div>

        <!-- Pillar 2: Fraternal Affairs & Heritage -->
        <div class="card-architectural p-8 flex flex-col justify-between hover:-translate-y-1">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[10px] font-mono uppercase tracking-widest text-amber-700 font-bold">Heritage &amp; Mentorship</span>
              <span class="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">Board Director</span>
            </div>
            
            <h3 class="text-lg font-serif font-bold text-slate-900 mb-3">Iota Nu Delta Fraternal Board</h3>
            
            <p class="text-sm text-slate-600 leading-relaxed font-sans">
              Serving on the <strong>Board of Directors</strong> of <em>Iota Nu Delta</em>, the first South Asian fraternal organization in the United States. Mentoring collegians and emerging leaders nationwide in academic scholarship, cultural pride, and community service.
            </p>
          </div>

          <div class="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-500 font-sans flex items-center justify-between">
            <span>National South Asian Heritage</span>
            <span class="text-slate-900 font-semibold">Board of Directors</span>
          </div>
        </div>

        <!-- Pillar 3: Own My Mile -->
        <div class="card-architectural p-8 flex flex-col justify-between hover:-translate-y-1">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[10px] font-mono uppercase tracking-widest text-amber-700 font-bold">Queens Neighborhood</span>
              <span class="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">Initiative Founder</span>
            </div>
            
            <h3 class="text-lg font-serif font-bold text-slate-900 mb-3">"Own My Mile" Queens Neighborhood Upkeep</h3>
            
            <p class="text-sm text-slate-600 leading-relaxed font-sans">
              "I care deeply about my neighborhood, and I find it necessary to work with local officials and neighbors to help upkeep our community." Spearheading local cleanup, beautification, and merchant advisory drives in Forest Hills, Queens.
            </p>
          </div>

          <div class="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-500 font-sans flex items-center justify-between">
            <span>Forest Hills, Queens</span>
            <span class="text-slate-900 font-semibold">Grassroots Care</span>
          </div>
        </div>

      </div>

      <!-- Quote Highlight Banner -->
      <div class="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-2">
        <p class="text-base sm:text-lg font-serif italic text-slate-800 max-w-2xl mx-auto">
          "True success isn't measured solely by how high you climb, but by how many people you bring along with you."
        </p>
        <p class="text-xs font-mono text-amber-700 font-bold uppercase tracking-widest">— Vivek Thapar</p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Heart } from 'lucide-vue-next'
</script>
