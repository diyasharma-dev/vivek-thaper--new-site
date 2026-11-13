<template>
  <section id="community" class="py-24 relative overflow-hidden bg-dark-900/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold">
          <Heart class="w-3.5 h-3.5" />
          <span>Civic Engagement &amp; Social Impact</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
          Beyond Business: <span class="gold-gradient-text">Giving Back</span>
        </h2>
        <blockquote class="text-base sm:text-lg text-slate-300 font-serif italic max-w-2xl mx-auto">
          “You make a living by what you get. You make a life by what you give.”
          <footer class="text-xs text-brand-400 font-sans font-semibold mt-1 not-italic">
            — Winston Churchill
          </footer>
        </blockquote>
      </div>

      <!-- 3 Community Pillars Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        
        <!-- Pillar 1: Underdogs & NYC Parks -->
        <div class="p-8 rounded-3xl glass-panel glass-panel-hover border border-slate-700/70 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
              <TreePine class="w-6 h-6" />
            </div>
            
            <span class="text-[10px] font-bold uppercase tracking-wider text-emerald-400 font-mono">Civic Leadership</span>
            <h3 class="text-xl font-bold font-display text-white mt-1 mb-3">The Underdogs &amp; NYC Parks</h3>
            
            <p class="text-xs text-slate-300 leading-relaxed">
              As President of the <strong>Underbridge Dog Run Volunteer Group</strong>, Vivek is actively partnered with the <em>NYC Parks Department</em>, <em>NYC Partnership for Parks</em>, and the <em>Department of Housing &amp; Development of New York</em> to preserve public urban spaces and recreational community hubs.
            </p>
          </div>

          <div class="mt-8 pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-medium flex items-center justify-between">
            <span>Urban Green Spaces</span>
            <span class="text-emerald-400 font-bold">President</span>
          </div>
        </div>

        <!-- Pillar 2: Fraternal Affairs & Heritage -->
        <div class="p-8 rounded-3xl glass-panel glass-panel-hover border border-slate-700/70 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
              <Landmark class="w-6 h-6" />
            </div>
            
            <span class="text-[10px] font-bold uppercase tracking-wider text-amber-400 font-mono">Heritage &amp; Culture</span>
            <h3 class="text-xl font-bold font-display text-white mt-1 mb-3">Iota Nu Delta Fraternal Board</h3>
            
            <p class="text-xs text-slate-300 leading-relaxed">
              Serving as a proud <strong>Board of Directors member</strong> of the first South Asian fraternal organization in America, <em>Iota Nu Delta</em>. Mentoring young South Asian collegians and emerging leaders nationwide in scholarship, cultural pride, and community service.
            </p>
          </div>

          <div class="mt-8 pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-medium flex items-center justify-between">
            <span>National South Asian Heritage</span>
            <span class="text-amber-400 font-bold">Board Director</span>
          </div>
        </div>

        <!-- Pillar 3: Own My Mile -->
        <div class="p-8 rounded-3xl glass-panel glass-panel-hover border border-slate-700/70 flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
              <MapPin class="w-6 h-6" />
            </div>
            
            <span class="text-[10px] font-bold uppercase tracking-wider text-indigo-400 font-mono">Neighborhood Care</span>
            <h3 class="text-xl font-bold font-display text-white mt-1 mb-3">"Own My Mile" Queens Initiative</h3>
            
            <p class="text-xs text-slate-300 leading-relaxed">
              "I care deeply about my neighborhood, and I find it necessary to work with local officials and neighbors to help upkeep our community." Spearheading local cleanup, beautification, and merchant advisory drives in Forest Hills, Queens.
            </p>
          </div>

          <div class="mt-8 pt-4 border-t border-slate-800 text-[11px] text-slate-400 font-medium flex items-center justify-between">
            <span>Queens Neighborhood Upkeep</span>
            <span class="text-indigo-400 font-bold">Grassroots Leader</span>
          </div>
        </div>

      </div>

      <!-- Quote Highlight Banner -->
      <div class="p-8 rounded-3xl bg-gradient-to-r from-dark-950 via-dark-900 to-dark-950 border border-slate-800 text-center space-y-3">
        <p class="text-base sm:text-lg font-serif italic text-slate-200 max-w-3xl mx-auto">
          "True success isn't measured solely by how high you climb, but by how many people you bring along with you."
        </p>
        <p class="text-xs font-bold text-brand-400 uppercase tracking-widest">— Vivek Thapar</p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { Heart, TreePine, Landmark, MapPin } from 'lucide-vue-next'
</script>
