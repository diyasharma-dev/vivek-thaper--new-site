<template>
  <section id="community" class="py-24 relative overflow-hidden bg-[#0d0f12] border-t border-white/[0.06]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13161c] border border-white/[0.08] text-neutral-300 text-xs">
          <Heart class="w-3.5 h-3.5 text-[#d4a36a]" />
          <span class="font-mono uppercase tracking-widest text-[11px] text-[#d4a36a]">Civic Leadership &amp; Service</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight leading-tight">
          Beyond Business: Deep Civic Commitment &amp; Community Care
        </h2>
        <blockquote class="text-base sm:text-lg text-neutral-300 font-serif italic max-w-2xl pt-2">
          “You make a living by what you get. You make a life by what you give.”
          <footer class="text-xs text-[#d4a36a] font-sans font-medium mt-1 not-italic">
            — Winston Churchill
          </footer>
        </blockquote>
      </div>

      <!-- 3 Community Pillars Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
        
        <!-- Pillar 1: Underdogs & NYC Parks -->
        <div class="p-8 rounded-xl bg-[#13161c] border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[10px] font-mono uppercase tracking-widest text-[#d4a36a]">Urban Green Spaces</span>
              <span class="text-xs font-mono font-semibold text-neutral-400">President</span>
            </div>
            
            <h3 class="text-lg font-serif text-white mb-3">Underbridge Dog Run &amp; NYC Parks</h3>
            
            <p class="text-xs text-neutral-400 leading-relaxed font-sans">
              As President of the <strong>Underbridge Dog Run Volunteer Group</strong>, Vivek partners actively with the <em>NYC Parks Department</em>, <em>NYC Partnership for Parks</em>, and the <em>Department of Housing &amp; Development of New York</em> to preserve public urban spaces and maintain vibrant community hubs.
            </p>
          </div>

          <div class="mt-8 pt-4 border-t border-white/[0.06] text-[11px] text-neutral-400 flex items-center justify-between">
            <span>Civic Group</span>
            <span class="text-neutral-200 font-medium">NYC Parks Dept Partner</span>
          </div>
        </div>

        <!-- Pillar 2: Fraternal Affairs & Heritage -->
        <div class="p-8 rounded-xl bg-[#13161c] border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[10px] font-mono uppercase tracking-widest text-[#d4a36a]">Heritage &amp; Mentorship</span>
              <span class="text-xs font-mono font-semibold text-neutral-400">Board Director</span>
            </div>
            
            <h3 class="text-lg font-serif text-white mb-3">Iota Nu Delta Fraternal Board</h3>
            
            <p class="text-xs text-neutral-400 leading-relaxed font-sans">
              Serving on the <strong>Board of Directors</strong> of <em>Iota Nu Delta</em>, the first South Asian fraternal organization in America. Mentoring collegians and emerging leaders nationwide in academic scholarship, cultural pride, and community service.
            </p>
          </div>

          <div class="mt-8 pt-4 border-t border-white/[0.06] text-[11px] text-neutral-400 flex items-center justify-between">
            <span>National South Asian Heritage</span>
            <span class="text-neutral-200 font-medium">Board of Directors</span>
          </div>
        </div>

        <!-- Pillar 3: Own My Mile -->
        <div class="p-8 rounded-xl bg-[#13161c] border border-white/[0.08] flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-[10px] font-mono uppercase tracking-widest text-[#d4a36a]">Queens Neighborhood</span>
              <span class="text-xs font-mono font-semibold text-neutral-400">Initiative Founder</span>
            </div>
            
            <h3 class="text-lg font-serif text-white mb-3">"Own My Mile" Queens Neighborhood Upkeep</h3>
            
            <p class="text-xs text-neutral-400 leading-relaxed font-sans">
              "I care deeply about my neighborhood, and I find it necessary to work with local officials and neighbors to help upkeep our community." Spearheading local cleanup, beautification, and merchant advisory drives in Forest Hills, Queens.
            </p>
          </div>

          <div class="mt-8 pt-4 border-t border-white/[0.06] text-[11px] text-neutral-400 flex items-center justify-between">
            <span>Forest Hills, Queens</span>
            <span class="text-neutral-200 font-medium">Grassroots Care</span>
          </div>
        </div>

      </div>

      <!-- Quote Highlight Banner -->
      <div class="p-8 rounded-xl bg-[#13161c] border border-white/[0.08] text-center space-y-2">
        <p class="text-base sm:text-lg font-serif italic text-neutral-200 max-w-2xl mx-auto">
          "True success isn't measured solely by how high you climb, but by how many people you bring along with you."
        </p>
        <p class="text-xs font-mono text-[#d4a36a] uppercase tracking-widest">— Vivek Thapar</p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Heart } from 'lucide-vue-next'
</script>
