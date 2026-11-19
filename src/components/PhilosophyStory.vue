<template>
  <section id="about" class="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-white border-b border-slate-200/80">
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
                class="absolute top-3.5 right-3.5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 hover:border-red-500 text-slate-900 text-xs font-bold transition-all cursor-pointer shadow-md hover:scale-105"
              >
                <Play class="w-3 h-3 text-red-600 fill-red-600" />
                <span>Watch Intro</span>
              </button>

              <div class="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                <p class="text-xs font-heading font-bold text-slate-900">Interactive Media + Technology</p>
                <p class="text-[11px] text-red-700 mt-0.5 font-bold">Product branding, development, and strategy</p>
              </div>
            </div>

            <!-- Quote caption below portrait -->
            <div class="mt-3 px-2 py-1 text-xs text-slate-700 font-sans leading-relaxed">
              "We don't just do marketing — we have built the actual businesses that marketing needs to support."
              <span class="block text-[11px] font-mono font-bold text-slate-900 mt-1">— Vivek Thapar, Founder &amp; CEO</span>
            </div>
          </div>
        </div>

        <!-- Right: The Authentic Knowledgebase & Philosophy Narrative -->
        <div class="lg:col-span-7 space-y-6">
          
          <div class="space-y-2.5 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-700 font-bold">
              <span class="w-2 h-2 rounded-full bg-red-600"></span>
              <span>Interactive Media + Technology</span>
            </div>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-slate-900 tracking-normal leading-[1.3] sm:leading-[1.32] lg:leading-[1.35]">
              Product Branding, Development, Training &amp; Strategy
            </h2>
          </div>

          <div class="space-y-4 text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed font-sans">
            <!-- Knowledgebase statement from vivekthapar.com -->
            <blockquote class="border-l-4 border-slate-900 bg-slate-50 p-4 sm:p-5 rounded-r-2xl text-left text-xs sm:text-sm md:text-base text-slate-800 font-sans leading-relaxed">
              "Through years of experience, practical knowledge, collaborating with the right partners, and hiring a talented crew ensures my network that I will increase their net worth."
              <footer class="block text-xs font-mono font-bold text-slate-600 mt-2 not-italic">
                — Vivek Thapar, Knowledgebase
              </footer>
            </blockquote>

            <p class="text-slate-600">
              In 2006, Vivek founded <strong class="text-slate-900 font-bold">Mirch Media</strong> in Forest Hills, Queens, with a laptop, an internet connection, and a conviction that businesses deserve authentic execution over agency smoke-and-mirrors.
            </p>

            <p class="text-slate-600">
              When you work with Vivek, you collaborate directly with the leader directing the strategy, mapping user logic, and managing technical execution alongside his dedicated agency team. No account managers, no junior runaround — just seasoned leadership with an owner's mentality.
            </p>
          </div>

          <!-- 3 Core Authentic Disciplines from vivekthapar.com -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            <!-- 01 Strategy -->
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
              <span class="text-red-700 font-mono text-xs font-bold block mb-1">01 / STRATEGY</span>
              <h4 class="text-sm font-heading font-bold text-slate-900 mb-1">Feel The Product</h4>
              <p class="text-xs text-slate-600 leading-relaxed font-sans">
                "If you can't feel your product you cannot become your product." Working closely with clients on core strategies that grow the business and team.
              </p>
            </div>

            <!-- 02 Development -->
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
              <span class="text-red-700 font-mono text-xs font-bold block mb-1">02 / DEVELOPMENT</span>
              <h4 class="text-sm font-heading font-bold text-slate-900 mb-1">If This, Then That</h4>
              <p class="text-xs text-slate-600 leading-relaxed font-sans">
                Knowing every operational condition of a product or service, applying solid software architecture, and integrating practical automation.
              </p>
            </div>

            <!-- 03 Marketing -->
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200/80 shadow-2xs">
              <span class="text-red-700 font-mono text-xs font-bold block mb-1">03 / MARKETING</span>
              <h4 class="text-sm font-heading font-bold text-slate-900 mb-1">The Art of Persuasion</h4>
              <p class="text-xs text-slate-600 leading-relaxed font-sans">
                Understanding consumer behavior and psychology, applying real drive and targeted customer acquisition for clients.
              </p>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="pt-2 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-3">
            <router-link 
              to="/about"
              class="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-heading font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Read Full Founder Profile</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </router-link>

            <router-link 
              to="/contact"
              class="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-heading font-bold text-xs border border-slate-200 shadow-2xs transition-all flex items-center justify-center gap-2"
            >
              <span>Connect with Vivek</span>
              <ArrowUpRight class="w-3.5 h-3.5 text-red-600" />
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
