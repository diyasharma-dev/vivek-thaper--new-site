<template>
  <section id="about" class="py-14 sm:py-16 md:py-20 relative overflow-hidden bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Feature Split Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        <!-- Left: Image Showcase with Vivek in Strategy Session -->
        <div class="lg:col-span-5 relative flex justify-center">
          <div class="w-full max-w-sm sm:max-w-md bg-slate-50 border border-slate-200/90 p-3 sm:p-3.5 rounded-3xl shadow-lg">
            <div class="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100">
              <img 
                src="/media/vivek-thapar-strategy.webp" 
                alt="Vivek Thapar leading strategic planning session"
                class="w-full h-full object-cover object-top filter contrast-[1.02]"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none"></div>

              <!-- Video trigger on portrait -->
              <button 
                @click="$emit('open-video')"
                class="absolute top-3.5 right-3.5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 hover:border-brand-500 text-slate-900 text-xs font-bold transition-all cursor-pointer shadow-md hover:scale-105"
              >
                <Play class="w-3 h-3 text-brand-500 fill-brand-500" />
                <span>Watch Intro</span>
              </button>

              <div class="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                <p class="text-xs font-heading font-bold text-slate-900">Interactive Media + Systems Architecture</p>
                <p class="text-[11px] text-brand-600 mt-0.5 font-bold">20+ years directing software, search, and startups</p>
              </div>
            </div>

            <!-- Quote caption below portrait -->
            <div class="mt-3 px-2 py-1 text-xs text-slate-700 font-sans">
              "We don't just do marketing — we have built the actual businesses that marketing needs to support."
              <span class="block text-[11px] font-mono font-bold text-brand-700 mt-1">— Vivek Thapar, Founder &amp; CEO</span>
            </div>
          </div>
        </div>

        <!-- Right: The Confession & Narrative -->
        <div class="lg:col-span-7 space-y-5 sm:space-y-6">
          
          <div class="space-y-2.5 sm:space-y-3 text-center lg:text-left">
            <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-900 font-mono text-[11px] font-bold tracking-wider uppercase shadow-2xs">
              <span class="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
              <span>The Founder &amp; Craftsman</span>
            </span>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
              Direct Founder Accountability Over Agency Middlemen
            </h2>
          </div>

          <div class="space-y-3.5 sm:space-y-4 text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed font-sans">
            <blockquote class="border-l-4 border-brand-500 bg-brand-50/70 p-3.5 sm:p-4 rounded-r-xl text-left text-xs sm:text-sm md:text-base text-slate-800 font-sans leading-relaxed shadow-2xs">
              <span class="text-slate-950 font-bold">"I have a confession to make:</span> I love creating, designing, logic planning, leading teams, and working with startups. My 20+ years of experience with digital marketing and website development makes me a natural project manager."
            </blockquote>

            <p class="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              In 2006, I founded <strong class="text-slate-900 font-bold">Mirch Media</strong> in Forest Hills, Queens, with a laptop, an internet connection, and a conviction that businesses deserve authentic execution over agency smoke-and-mirrors.
            </p>

            <p class="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              When you work with me, you collaborate directly with the leader directing the strategy, mapping user logic, and managing technical execution alongside my senior agency team. No account managers, no junior runaround — just seasoned leadership with an owner's mentality.
            </p>
          </div>

          <!-- 3 Guiding Principles (Rich Distinct Brand Themes) -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50/90 to-indigo-50/50 border border-blue-200/90 shadow-2xs hover:-translate-y-0.5 transition-transform">
              <span class="text-blue-600 font-mono text-xs font-bold">01 / LOGIC</span>
              <h4 class="text-sm font-heading font-bold text-slate-900 mt-1">If-This-Then-That</h4>
              <p class="text-xs text-slate-600 mt-1 leading-relaxed font-sans">Every conditional user state mapped before code is written.</p>
            </div>

            <div class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-50/90 to-amber-50/50 border border-orange-200/90 shadow-2xs hover:-translate-y-0.5 transition-transform">
              <span class="text-orange-600 font-mono text-xs font-bold">02 / EMPATHY</span>
              <h4 class="text-sm font-heading font-bold text-slate-900 mt-1">Feel The Product</h4>
              <p class="text-xs text-slate-600 mt-1 leading-relaxed font-sans">Deep commercial understanding of consumer psychology.</p>
            </div>

            <div class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-50/90 to-teal-50/50 border border-emerald-200/90 shadow-2xs hover:-translate-y-0.5 transition-transform">
              <span class="text-emerald-600 font-mono text-xs font-bold">03 / OWNERSHIP</span>
              <h4 class="text-sm font-heading font-bold text-slate-900 mt-1">100% Code Control</h4>
              <p class="text-xs text-slate-600 mt-1 leading-relaxed font-sans">Clients own every line of code, design file, and server outright.</p>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="pt-2 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
            <router-link 
              to="/about"
              class="btn-primary text-xs w-full sm:w-auto"
            >
              <span>Read Full Founder Story</span>
              <ArrowRight class="w-3.5 h-3.5 text-brand-300 shrink-0" />
            </router-link>

            <router-link 
              to="/contact"
              class="btn-secondary text-xs w-full sm:w-auto"
            >
              <span>Schedule a Call</span>
              <ArrowUpRight class="w-3.5 h-3.5 text-brand-600 shrink-0" />
            </router-link>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { Play, ArrowRight, ArrowUpRight } from 'lucide-vue-next'

defineEmits(['open-video'])
</script>