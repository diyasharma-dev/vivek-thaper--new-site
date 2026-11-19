<template>
  <section id="about" class="py-20 sm:py-24 md:py-28 relative overflow-hidden border-b border-white/[0.08]">
    <!-- Ambient Glow Layer -->
    <div class="absolute top-1/2 left-10 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Feature Split Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        <!-- Left: Image Showcase with Vivek in Strategy Session -->
        <div class="lg:col-span-5 relative flex justify-center">
          <div class="w-full max-w-sm sm:max-w-md relative group">
            
            <!-- Glow behind frame -->
            <div class="absolute -inset-2 bg-gradient-to-tr from-red-600/30 to-amber-500/20 rounded-[2.5rem] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity"></div>

            <div class="relative bg-gradient-to-b from-white/10 via-white/[0.04] to-black/50 p-3 sm:p-3.5 rounded-3xl border border-white/15 shadow-2xl backdrop-blur-xl group-hover:border-red-500/50 transition-all duration-300">
              <div class="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-900">
                <img 
                  src="/media/vivek-thapar-strategy.webp" 
                  alt="Vivek Thapar leading strategic planning session"
                  class="w-full h-full object-cover object-top filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none"></div>

                <!-- Video trigger on portrait -->
                <button 
                  @click="$emit('open-video')"
                  class="absolute top-3.5 right-3.5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 hover:border-red-500 text-white text-xs font-bold transition-all cursor-pointer shadow-lg hover:scale-105"
                >
                  <Play class="w-3 h-3 text-red-500 fill-red-500" />
                  <span>Watch Intro</span>
                </button>

                <div class="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-black/80 backdrop-blur-xl border border-white/15 shadow-lg">
                  <p class="text-xs font-heading font-bold text-white">Interactive Media + Technology</p>
                  <p class="text-[11px] text-red-400 mt-0.5 font-bold">Product branding, development, and strategy</p>
                </div>
              </div>

              <!-- Quote caption below portrait -->
              <div class="mt-3 px-2 py-1 text-xs text-slate-300 font-sans leading-relaxed">
                "We don't just do marketing — we have built the actual businesses that marketing needs to support."
                <span class="block text-[11px] font-mono font-bold text-white mt-1">— Vivek Thapar, Founder &amp; CEO</span>
              </div>
            </div>

          </div>
        </div>

        <!-- Right: The Authentic Knowledgebase & Philosophy Narrative -->
        <div class="lg:col-span-7 space-y-6">
          
          <div class="space-y-3 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
              <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span>Interactive Media + Technology</span>
            </div>
            <h2 class="hero-headline text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
              Product Branding, Development, <span class="gradient-text-brand">Training &amp; Strategy</span>
            </h2>
          </div>

          <div class="space-y-4 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-sans">
            <!-- Knowledgebase statement from vivekthapar.com -->
            <blockquote class="card-glass border-l-4 border-l-red-500 p-4 sm:p-5 rounded-2xl text-left text-xs sm:text-sm md:text-base text-slate-200 font-sans leading-relaxed shadow-glow-card">
              "Through years of experience, practical knowledge, collaborating with the right partners, and hiring a talented crew ensures my network that I will increase their net worth."
              <footer class="block text-xs font-mono font-bold text-red-400 mt-2 not-italic">
                — Vivek Thapar, Knowledgebase
              </footer>
            </blockquote>

            <p class="text-slate-300">
              In 2006, Vivek founded <strong class="text-white font-bold">Mirch Media</strong> in Forest Hills, Queens, with a laptop, an internet connection, and a conviction that businesses deserve authentic execution over agency smoke-and-mirrors.
            </p>

            <p class="text-slate-300">
              When you work with Vivek, you collaborate directly with the leader directing the strategy, mapping user logic, and managing technical execution alongside his dedicated agency team. No account managers, no junior runaround — just seasoned leadership with an owner's mentality.
            </p>
          </div>

          <!-- 3 Core Authentic Disciplines -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <!-- 01 Strategy -->
            <div class="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-red-500/40 hover:bg-white/[0.06] transition-all">
              <span class="text-red-400 font-mono text-xs font-bold block mb-1">01 / STRATEGY</span>
              <h4 class="text-sm font-heading font-bold text-white mb-1.5">Feel The Product</h4>
              <p class="text-xs text-slate-300 leading-relaxed font-sans">
                "If you can't feel your product you cannot become your product." Working closely with clients on core strategies that grow the business and team.
              </p>
            </div>

            <!-- 02 Development -->
            <div class="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-red-500/40 hover:bg-white/[0.06] transition-all">
              <span class="text-red-400 font-mono text-xs font-bold block mb-1">02 / DEVELOPMENT</span>
              <h4 class="text-sm font-heading font-bold text-white mb-1.5">If This, Then That</h4>
              <p class="text-xs text-slate-300 leading-relaxed font-sans">
                Knowing every operational condition of a product or service, applying solid software architecture, and integrating practical automation.
              </p>
            </div>

            <!-- 03 Marketing -->
            <div class="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-red-500/40 hover:bg-white/[0.06] transition-all">
              <span class="text-red-400 font-mono text-xs font-bold block mb-1">03 / MARKETING</span>
              <h4 class="text-sm font-heading font-bold text-white mb-1.5">The Art of Persuasion</h4>
              <p class="text-xs text-slate-300 leading-relaxed font-sans">
                Understanding consumer behavior and psychology, applying real drive and targeted customer acquisition for clients.
              </p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="pt-2 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3">
            <router-link 
              to="/about"
              class="btn-primary text-xs sm:text-sm"
            >
              <span>Read Full Founder Profile</span>
              <ArrowRight class="w-4 h-4" />
            </router-link>

            <router-link 
              to="/contact"
              class="btn-secondary text-xs sm:text-sm"
            >
              <span>Connect with Vivek</span>
              <ArrowUpRight class="w-4 h-4 text-red-400" />
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
