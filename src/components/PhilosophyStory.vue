<template>
  <section id="about" class="py-24 relative overflow-hidden bg-[#0d0f12]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Top Title Label -->
      <div class="max-w-3xl mb-16 space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13161c] border border-white/[0.08] text-neutral-300 text-xs">
          <span class="w-1.5 h-1.5 rounded-full bg-[#c59b63]"></span>
          <span class="font-mono uppercase tracking-widest text-[11px] text-[#d4a36a]">Executive Philosophy &amp; Leadership</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-white tracking-tight leading-tight">
          "Picking the right project manager is the single most critical decision in company growth."
        </h2>
        <p class="text-neutral-400 text-base leading-relaxed font-sans">
          The engineering logic, practical empathy, and obsessive discipline required to turn complex visions into profitable realities.
        </p>
      </div>

      <!-- Feature Split Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
        
        <!-- Left: Image Showcase with Vivek in Strategy Session -->
        <div class="lg:col-span-5 relative">
          <div class="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#13161c] shadow-2xl p-3">
            <div class="relative rounded-xl overflow-hidden aspect-[3/4] bg-[#090a0d]">
              <img 
                src="/media/vivek-thapar-strategy.webp" 
                alt="Vivek Thapar leading strategic planning session"
                class="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02]"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-[#0d0f12]/90 via-transparent to-transparent pointer-events-none"></div>

              <div class="absolute bottom-3 inset-x-3 p-3.5 rounded-lg bg-[#0d0f12]/90 backdrop-blur-md border border-white/[0.08]">
                <p class="text-xs font-semibold text-white">Interactive Media + Systems Architecture</p>
                <p class="text-[11px] text-[#d4a36a] mt-0.5 font-normal">Strategic technology, logic planning, and execution</p>
              </div>
            </div>

            <!-- Quote caption below portrait -->
            <div class="mt-3 px-2 py-1 text-xs text-neutral-400 font-serif italic">
              "Through years of practical knowledge, collaborating with the right partners ensures my network that I will increase their net worth."
              <span class="block text-[11px] font-sans font-medium text-[#d4a36a] not-italic mt-1">— Vivek Thapar</span>
            </div>
          </div>
        </div>

        <!-- Right: The Confession & In-depth Story -->
        <div class="lg:col-span-7 space-y-6">
          <div class="p-8 rounded-2xl bg-[#13161c] border border-white/[0.08] relative">
            <h3 class="text-xl sm:text-2xl font-serif text-white mb-4">
              A Confession of Relentless Craft
            </h3>
            
            <p class="text-neutral-300 text-base leading-relaxed mb-4 font-sans">
              I have a confession to make: <strong class="text-white font-medium">I love creating, designing, logic planning, leading teams, and working with startups.</strong> My 21+ years of experience with digital marketing and website engineering makes me a natural project manager.
            </p>

            <p class="text-neutral-400 text-sm leading-relaxed mb-6 font-sans">
              In 2006, I founded Mirch Media with a laptop, an internet connection, and a conviction that businesses deserve authentic execution over agency smoke-and-mirrors. Over two decades, we have scaled brands from scratch, engineered platforms handling millions in transactional volume, and directed high-stakes civic and commercial initiatives across New York City.
            </p>

            <!-- 3 Core Tenets in clean tabular layout -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-white/[0.08]">
              <div class="p-4 rounded-lg bg-[#0d0f12] border border-white/[0.06]">
                <span class="text-[#d4a36a] font-mono text-xs font-semibold">01 / LOGIC</span>
                <h4 class="text-sm font-semibold text-white mt-1">If-This-Then-That</h4>
                <p class="text-[11px] text-neutral-400 mt-1 leading-relaxed">Every condition of a user journey mapped before writing a single line of code.</p>
              </div>

              <div class="p-4 rounded-lg bg-[#0d0f12] border border-white/[0.06]">
                <span class="text-[#d4a36a] font-mono text-xs font-semibold">02 / EMPATHY</span>
                <h4 class="text-sm font-semibold text-white mt-1">Feel The Product</h4>
                <p class="text-[11px] text-neutral-400 mt-1 leading-relaxed">If you cannot genuinely feel your product, you cannot embody its market value.</p>
              </div>

              <div class="p-4 rounded-lg bg-[#0d0f12] border border-white/[0.06]">
                <span class="text-[#d4a36a] font-mono text-xs font-semibold">03 / VELOCITY</span>
                <h4 class="text-sm font-semibold text-white mt-1">Automated Systems</h4>
                <p class="text-[11px] text-neutral-400 mt-1 leading-relaxed">Systematic conversion pipelines that free leadership bandwidth to grow.</p>
              </div>
            </div>

          </div>

          <!-- Quick Quote Bar -->
          <div class="flex items-center gap-4 px-6 py-4 rounded-xl bg-[#13161c] border border-white/[0.08]">
            <CheckCircle2 class="w-5 h-5 text-[#d4a36a] shrink-0" />
            <p class="text-xs sm:text-sm text-neutral-300">
              <strong class="text-white font-medium">Direct Founder Oversight:</strong> Every client collaborates directly with Vivek on technical architecture, positioning, and revenue growth.
            </p>
          </div>
        </div>

      </div>

      <!-- 4 Pillars Clean Editorial Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <!-- Pillar 1: Strategy -->
        <div class="p-6 rounded-xl bg-[#13161c] border border-white/[0.07] hover:border-white/[0.15] transition-all flex flex-col justify-between">
          <div>
            <span class="text-xs font-mono font-semibold text-[#d4a36a] block mb-3">01 / STRATEGY</span>
            <h4 class="text-base font-semibold text-white mb-2">Market Fit &amp; Positioning</h4>
            <p class="text-xs text-neutral-400 leading-relaxed font-serif italic">
              "If you can't feel your product, you cannot become your product. I work closely with my clients and focus on strategies that grow both the business and team."
            </p>
          </div>
          <div class="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-neutral-400">
            <span>Executive Roadmap</span>
            <span class="text-[#d4a36a] font-mono">Strategic</span>
          </div>
        </div>

        <!-- Pillar 2: Development -->
        <div class="p-6 rounded-xl bg-[#13161c] border border-white/[0.07] hover:border-white/[0.15] transition-all flex flex-col justify-between">
          <div>
            <span class="text-xs font-mono font-semibold text-[#d4a36a] block mb-3">02 / ENGINEERING</span>
            <h4 class="text-base font-semibold text-white mb-2">Custom Software Systems</h4>
            <p class="text-xs text-neutral-400 leading-relaxed font-serif italic">
              "If this then that: knowing all conditions of a service and applying it to software architecture. Adapting automated pipelines is fundamental to real company growth."
            </p>
          </div>
          <div class="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-neutral-400">
            <span>Clean Architecture</span>
            <span class="text-[#d4a36a] font-mono">Engineering</span>
          </div>
        </div>

        <!-- Pillar 3: Marketing -->
        <div class="p-6 rounded-xl bg-[#13161c] border border-white/[0.07] hover:border-white/[0.15] transition-all flex flex-col justify-between">
          <div>
            <span class="text-xs font-mono font-semibold text-[#d4a36a] block mb-3">03 / CONVERSION</span>
            <h4 class="text-base font-semibold text-white mb-2">Search &amp; Consumer Psychology</h4>
            <p class="text-xs text-neutral-400 leading-relaxed font-serif italic">
              "The art of persuasion and understanding consumer psychology is my motive, applying my drive to systematically acquire and retain high-value customers."
            </p>
          </div>
          <div class="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-neutral-400">
            <span>High Intent Lead Gen</span>
            <span class="text-[#d4a36a] font-mono">Revenue</span>
          </div>
        </div>

        <!-- Pillar 4: Community -->
        <div class="p-6 rounded-xl bg-[#13161c] border border-white/[0.07] hover:border-white/[0.15] transition-all flex flex-col justify-between">
          <div>
            <span class="text-xs font-mono font-semibold text-[#d4a36a] block mb-3">04 / CIVIC IMPACT</span>
            <h4 class="text-base font-semibold text-white mb-2">Community &amp; Mentorship</h4>
            <p class="text-xs text-neutral-400 leading-relaxed font-serif italic">
              "“You make a living by what you get. You make a life by what you give.” Championing NYC parks, collegiate mentorship, and neighborhood upkeep in Queens."
            </p>
          </div>
          <div class="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-neutral-400">
            <span>Civic Leadership</span>
            <span class="text-[#d4a36a] font-mono">Impact</span>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { CheckCircle2 } from 'lucide-vue-next'
</script>
