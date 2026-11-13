<template>
  <section id="about" class="py-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Top Title Pill -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-brand-300 text-xs font-semibold">
          <Sparkles class="w-3.5 h-3.5 text-brand-400" />
          <span>Executive Philosophy &amp; Leadership</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
          "Picking The Perfect Project Manager <span class="gold-gradient-text">Is Essential"</span>
        </h2>
        <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
          The principles, logic systems, and obsessive attention to detail that turn complex visions into profitable realities.
        </p>
      </div>

      <!-- Feature Split Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        
        <!-- Left: Image Showcase with Vivek in Strategy Session -->
        <div class="lg:col-span-5 relative">
          <div class="relative rounded-3xl overflow-hidden border border-slate-700/70 bg-dark-900 shadow-2xl p-2.5">
            <!-- Exact 3:4 aspect ratio matching 3024x4032 image with object-top preventing head crops -->
            <div class="relative rounded-2xl overflow-hidden aspect-[3/4] bg-dark-950">
              <img 
                src="/media/vivek-thapar-strategy.webp" 
                alt="Vivek Thapar leading strategic planning session"
                class="w-full h-full object-cover object-top filter brightness-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent"></div>

              <div class="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-dark-900/90 backdrop-blur-md border border-slate-700/60">
                <p class="text-xs font-bold text-white">Interactive Media + Strategic Technology</p>
                <p class="text-[11px] text-brand-300 mt-0.5">Product branding, architectural development, and execution</p>
              </div>
            </div>
          </div>

          <!-- Bottom floating badge -->
          <div class="absolute -bottom-5 -right-5 hidden sm:block p-4 rounded-2xl bg-dark-900/95 backdrop-blur-xl border border-brand-500/30 shadow-2xl max-w-xs">
            <p class="text-xs font-serif italic text-slate-200">
              "Through years of practical knowledge, collaborating with the right partners ensures my network that I will increase their net worth."
            </p>
            <p class="text-[10px] font-bold text-brand-400 mt-2 uppercase tracking-wider">— Vivek Thapar</p>
          </div>
        </div>

        <!-- Right: The Confession & In-depth Story -->
        <div class="lg:col-span-7 space-y-6">
          <div class="p-8 rounded-3xl glass-panel border border-slate-700/70 relative">
            <div class="text-5xl font-serif text-brand-500/30 absolute top-4 right-6 pointer-events-none select-none">“</div>
            
            <h3 class="text-xl sm:text-2xl font-display font-bold text-white mb-4">
              A Confession of Relentless Craft
            </h3>
            
            <p class="text-slate-300 text-base leading-relaxed mb-4">
              I have a confession to make: <strong class="text-white">I love creating, designing, logic planning, leading teams, and working with startups.</strong> My 21+ years of experience with digital marketing and website engineering makes me a natural project manager.
            </p>

            <p class="text-slate-400 text-sm leading-relaxed mb-6">
              In 2006, I launched Mirch Media with a laptop, an internet connection, and a conviction that businesses deserve authentic execution over agency smoke-and-mirrors. Over two decades, we have scaled brands from scratch, engineered platforms handling millions in transactional volume, and directed high-stakes civic and commercial initiatives across New York City.
            </p>

            <!-- 3 Core Tenets -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div class="p-3.5 rounded-xl bg-dark-950/60 border border-slate-800">
                <span class="text-brand-400 font-mono text-xs font-bold">01 / LOGIC</span>
                <h4 class="text-sm font-bold text-white mt-1">If-This-Then-That</h4>
                <p class="text-[11px] text-slate-400 mt-1">Every branch of user behavior mapped before writing a single line.</p>
              </div>
              <div class="p-3.5 rounded-xl bg-dark-950/60 border border-slate-800">
                <span class="text-brand-400 font-mono text-xs font-bold">02 / EMPATHY</span>
                <h4 class="text-sm font-bold text-white mt-1">Feel The Product</h4>
                <p class="text-[11px] text-slate-400 mt-1">If you can't feel the product, you can't embody its value proposition.</p>
              </div>
              <div class="p-3.5 rounded-xl bg-dark-950/60 border border-slate-800">
                <span class="text-brand-400 font-mono text-xs font-bold">03 / VELOCITY</span>
                <h4 class="text-sm font-bold text-white mt-1">Scale With Automation</h4>
                <p class="text-[11px] text-slate-400 mt-1">Systematic growth hacking that frees up leadership bandwidth.</p>
              </div>
            </div>

          </div>

          <!-- Quick Quote Bar -->
          <div class="flex items-center gap-4 px-6 py-4 rounded-2xl bg-brand-500/10 border border-brand-500/20">
            <CheckCircle2 class="w-6 h-6 text-brand-400 shrink-0" />
            <p class="text-xs sm:text-sm text-brand-200">
              <strong>Direct Accountability:</strong> Clients work directly with Vivek on architecture, strategic positioning, and revenue growth.
            </p>
          </div>
        </div>

      </div>

      <!-- 4 Pillars Interactive Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Pillar 1: Strategy -->
        <div class="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
              <Compass class="w-6 h-6" />
            </div>
            <h4 class="text-lg font-bold text-white font-display mb-2">01. Strategy</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              "If you can't feel your product, you cannot become your product. I work closely with my clients and focus on strategies that grow both the business and team."
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-medium">
            <span>Market Fit &amp; Positioning</span>
            <span class="text-brand-400 font-bold">Strategic</span>
          </div>
        </div>

        <!-- Pillar 2: Development -->
        <div class="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
              <Code2 class="w-6 h-6" />
            </div>
            <h4 class="text-lg font-bold text-white font-display mb-2">02. Development</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              "If this then that: knowing all conditions of a service and applying it to software architecture. Adapting automated pipelines is fundamental to real company growth."
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-medium">
            <span>Custom Engineering</span>
            <span class="text-blue-400 font-bold">Architectural</span>
          </div>
        </div>

        <!-- Pillar 3: Marketing -->
        <div class="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
              <TrendingUp class="w-6 h-6" />
            </div>
            <h4 class="text-lg font-bold text-white font-display mb-2">03. Marketing</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              "Referred to by clients as a marketing guru: the art of persuasion and understanding consumer psychology is my motive, applying my drive to growth hack for clients."
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-medium">
            <span>Conversion Psychology</span>
            <span class="text-emerald-400 font-bold">Revenue</span>
          </div>
        </div>

        <!-- Pillar 4: Community -->
        <div class="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between">
          <div>
            <div class="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
              <HeartHandshake class="w-6 h-6" />
            </div>
            <h4 class="text-lg font-bold text-white font-display mb-2">04. Community</h4>
            <p class="text-xs text-slate-300 leading-relaxed">
              "“You make a living by what you get. You make a life by what you give.” ~ Winston Churchill. Championing NYC parks, South Asian cultural heritage, and youth mentorship."
            </p>
          </div>
          <div class="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-medium">
            <span>Civic Leadership</span>
            <span class="text-purple-400 font-bold">Impact</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { Sparkles, Compass, Code2, TrendingUp, HeartHandshake, CheckCircle2 } from 'lucide-vue-next'
</script>
