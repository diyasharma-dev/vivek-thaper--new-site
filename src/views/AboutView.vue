<template>
  <div class="pt-20 sm:pt-24 pb-20 bg-white">
    
    <!-- Hero Banner with 100% Matched Founder Portrait -->
    <section class="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden bg-slate-950 text-white border-b border-slate-800">
      <div class="absolute -top-24 right-0 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-20 w-[400px] h-[400px] bg-slate-800/50 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>

      <!-- Ambient blurred watermark of founder photo -->
      <div class="absolute inset-0 opacity-10 filter blur-3xl scale-125 pointer-events-none overflow-hidden">
        <img src="/media/vivek-thapar-founder.webp" class="w-full h-full object-cover" alt="" />
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Left Column (7 cols): Copy & Credentials -->
          <div class="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-500/30 text-red-400 font-mono text-xs font-bold tracking-wider uppercase shadow-2xs">
              <User class="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Executive Profile &amp; Biography · Queens, NYC</span>
            </div>

            <h1 class="hero-headline text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-heading font-extrabold text-white tracking-normal leading-[1.32] sm:leading-[1.35] lg:leading-[1.38] text-balance my-3.5 sm:my-4">
              Twenty years building digital businesses, directing strategy, and leading teams in <span class="text-red-500">New York City</span>.
            </h1>

            <p class="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
              Founder &amp; CEO of Mirch Media, natural project manager, serial entrepreneur, and civic champion based in Forest Hills, Queens.
            </p>

            <!-- Quick Credential Tags -->
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-mono">
              <span class="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Est. 2006 in Queens</span>
              <span class="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">20+ Years Field Experience</span>
              <span class="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Direct Founder Oversight</span>
              <span class="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Civic Advocate</span>
            </div>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3">
              <router-link 
                to="/case-studies"
                class="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-xs sm:text-sm shadow-lg shadow-red-900/30 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span>View Commercial Client Work</span>
                <ArrowRight class="w-4 h-4 shrink-0" />
              </router-link>
              <router-link 
                to="/contact"
                class="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-mono font-bold text-xs sm:text-sm transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span>Connect Directly</span>
              </router-link>
            </div>
          </div>

          <!-- Right Column (5 cols): 100% Matched Founder Portrait Showcase -->
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="w-full max-w-sm sm:max-w-md lg:max-w-md">
              <div class="relative rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-slate-800/80 via-slate-900/90 to-slate-950 border border-slate-700/80 shadow-2xl shadow-red-950/30 group overflow-hidden">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] h-[480px] sm:h-[520px] lg:h-[560px] bg-slate-900">
                  <img 
                    src="/media/vivek-thapar-founder.webp" 
                    alt="Vivek Thapar - Founder & CEO of Mirch Media"
                    class="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none"></div>

                  <!-- Glassmorphic Caption Badge on Image -->
                  <div class="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 shadow-lg">
                    <div class="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider mb-0.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                      <span>Agency Founder &amp; CEO</span>
                    </div>
                    <p class="text-xs sm:text-sm font-heading font-bold text-white tracking-tight">Vivek Thapar</p>
                    <p class="text-[11px] text-slate-300 font-sans mt-0.5">Founder &amp; Principal Consultant · Mirch Media (Est. 2006)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Narrative Biography Section: Two-Column Editorial Layout -->
    <section class="py-14 sm:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <!-- Story Content (7 cols) -->
          <div class="lg:col-span-7 space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
            <div>
              <span class="text-xs font-mono uppercase tracking-widest text-red-600 font-bold block mb-2">The Queens Foundation</span>
              <h2 class="text-2xl sm:text-3xl font-heading font-bold text-slate-900 tracking-tight leading-snug">
                From a Solo Freelancer in Forest Hills to an Enduring Agency Leader
              </h2>
            </div>

            <p>
              In 2006, Vivek Thapar founded <strong class="text-slate-950 font-bold">Mirch Media</strong> in Queens, New York, armed with nothing more than a laptop, an internet connection, and a conviction that businesses deserved an agency that prioritized genuine execution over inflated promises.
            </p>

            <p>
              What began as a hands-on operation engineering responsive websites for local New York legal practices and medical offices has grown over two decades into an enduring full-service digital agency. Throughout this journey, Vivek has directly managed technical deliverables across diverse industries—including personal injury law, commercial real estate, multi-location healthcare systems, and hospitality brands.
            </p>

            <!-- Prominent Executive Pull Quote -->
            <blockquote class="my-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-red-50/60 to-rose-50/40 border-l-4 border-red-600 font-sans italic text-base sm:text-lg text-slate-900 shadow-2xs">
              “We don't just do marketing; we have built and managed the actual businesses that marketing needs to support.”
              <footer class="block text-xs font-mono font-bold text-red-700 not-italic mt-3">
                — Vivek Thapar, Founder &amp; CEO
              </footer>
            </blockquote>

            <p>
              As a serial entrepreneur with firsthand experience founding, capitalizing, and operating companies, Vivek looks at technical and marketing problems through an owner's lens. He understands the anxiety of payroll, the necessity of predictable cash flow, and the critical importance of digital infrastructure that consistently converts visitors into paying customers.
            </p>

            <!-- Key Grounded Milestones -->
            <div class="pt-3 grid grid-cols-3 gap-3 sm:gap-4 text-center sm:text-left">
              <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div class="text-xl sm:text-2xl font-heading font-extrabold text-slate-900">2006</div>
                <div class="text-[10px] sm:text-[11px] font-mono text-slate-600 font-bold uppercase tracking-wider mt-0.5">Est. in Queens</div>
              </div>
              <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div class="text-xl sm:text-2xl font-heading font-extrabold text-slate-900">20+ Yrs</div>
                <div class="text-[10px] sm:text-[11px] font-mono text-slate-600 font-bold uppercase tracking-wider mt-0.5">Project Management</div>
              </div>
              <div class="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div class="text-xl sm:text-2xl font-heading font-extrabold text-red-600">Direct</div>
                <div class="text-[10px] sm:text-[11px] font-mono text-slate-600 font-bold uppercase tracking-wider mt-0.5">Founder Oversight</div>
              </div>
            </div>
          </div>

          <!-- Portrait & Studio Frame (5 cols) -->
          <div class="lg:col-span-5 relative flex justify-center sticky top-28">
            <div class="w-full max-w-sm sm:max-w-md bg-white border border-slate-200/90 p-3 sm:p-4 rounded-3xl shadow-xl">
              <div class="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100">
                <img 
                  src="/media/vivek-thapar-ceo.webp" 
                  alt="Vivek Thapar Executive Leadership"
                  class="w-full h-full object-cover object-top filter contrast-[1.02]"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                <div class="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                  <h3 class="text-sm font-heading font-bold text-slate-900">Vivek Thapar</h3>
                  <p class="text-xs text-red-600 font-bold">Executive Agency Leadership · NYC</p>
                </div>
              </div>

              <div class="mt-3 px-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 font-mono">
                <span class="font-bold text-slate-800">Executive Leadership</span>
                <span>Forest Hills, Queens</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Vivek's 3 Core Disciplines (Directly from vivekthapar.com) -->
    <section class="py-14 sm:py-20 bg-slate-50/70 border-y border-slate-200/70">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="max-w-3xl mb-12 space-y-2.5">
          <span class="text-xs font-mono uppercase tracking-widest text-red-600 font-bold">Original Framework</span>
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 tracking-tight">
            The Three Pillars of Vivek's Methodology
          </h2>
          <p class="text-sm sm:text-base text-slate-600 font-sans">
            Drawn from Vivek's original philosophy on uniting business intuition, technical precision, and customer psychology.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          <!-- Pillar 1: Strategy -->
          <div class="card-architectural p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1">
            <div class="space-y-4">
              <div class="w-10 h-10 rounded-xl bg-red-100/70 text-red-600 flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 class="text-xl font-heading font-bold text-slate-900">Strategy</h3>
              <blockquote class="italic text-xs sm:text-sm text-red-700 bg-red-50/60 p-3 rounded-xl border-l-2 border-red-500 font-sans">
                “If you can't feel your product you cannot become your product.”
              </blockquote>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Vivek works closely alongside business owners to deeply understand their unit economics, audience motivations, and competitive moats before writing a single line of code.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-500 font-bold uppercase tracking-wider">
              Focus: Market Alignment &amp; Economics
            </div>
          </div>

          <!-- Pillar 2: Development -->
          <div class="card-architectural p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1">
            <div class="space-y-4">
              <div class="w-10 h-10 rounded-xl bg-red-100/70 text-red-600 flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 class="text-xl font-heading font-bold text-slate-900">Development</h3>
              <blockquote class="italic text-xs sm:text-sm text-red-700 bg-red-50/60 p-3 rounded-xl border-l-2 border-red-500 font-sans">
                “If this then that.”
              </blockquote>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                It is essential to map out every single condition of a product or service. Applying strict conditional logic to software architecture and automating repetitive workflows creates scalable platforms.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-500 font-bold uppercase tracking-wider">
              Focus: Logic Architecture &amp; Automation
            </div>
          </div>

          <!-- Pillar 3: Marketing -->
          <div class="card-architectural p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1">
            <div class="space-y-4">
              <div class="w-10 h-10 rounded-xl bg-red-100/70 text-red-600 flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 class="text-xl font-heading font-bold text-slate-900">Marketing</h3>
              <blockquote class="italic text-xs sm:text-sm text-red-700 bg-red-50/60 p-3 rounded-xl border-l-2 border-red-500 font-sans">
                “The art of persuasion &amp; consumer behavior.”
              </blockquote>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Understanding human psychology and friction points is the motive. By engineering clear, high-intent user journeys and targeted search visibility, visitors turn into long-term clients.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-500 font-bold uppercase tracking-wider">
              Focus: Conversion &amp; Consumer Psychology
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Agency Values (From mirch_founder.html) -->
    <section class="py-14 sm:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div class="lg:col-span-5 space-y-4">
            <span class="text-xs font-mono uppercase tracking-widest text-red-600 font-bold">Guiding Standards</span>
            <h2 class="text-2xl sm:text-3xl font-heading font-bold text-slate-900 tracking-tight">
              Values That Drive Every Engagement
            </h2>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              These are the core operating principles that have anchored Mirch Media and Vivek's partnerships for twenty years in New York City.
            </p>

            <div class="pt-4">
              <router-link to="/contact" class="btn-primary text-xs">
                <span>Start a Project Discussion</span>
                <ArrowRight class="w-4 h-4 ml-1 shrink-0" />
              </router-link>
            </div>
          </div>

          <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            
            <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 class="text-base font-heading font-bold text-slate-900">Growth</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Every technical and strategic decision must move the needle for your business. If it doesn't support measurable progress, we don't build it.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 class="text-base font-heading font-bold text-slate-900">Innovation</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                The digital ecosystem shifts continuously. We engineer custom modern reactive code so your platforms remain fast, secure, and modern for years.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 class="text-base font-heading font-bold text-slate-900">Collaboration</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Your goals are our goals. We operate as a dedicated extension of your leadership team, offering direct transparency at every sprint.
              </p>
            </div>

            <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 class="text-base font-heading font-bold text-slate-900">Excellence</h3>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                We do not ship cut-corner work. Every line of code, design component, and marketing funnel is vetted to executive standards before release.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>

    <!-- Direct Founder Engagement Standard with Strategy Session Photo -->
    <section class="py-14 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div class="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-700 aspect-[4/3] bg-slate-800 shadow-2xl">
            <img 
              src="/media/vivek-thapar-strategy.webp" 
              alt="Vivek Thapar Strategy Session"
              class="w-full h-full object-cover object-top"
            />
          </div>

          <div class="lg:col-span-7 space-y-4">
            <span class="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">Engagement Standard</span>
            <h2 class="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
              Direct Founder Oversight. Zero Junior Agency Handoff.
            </h2>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Unlike traditional corporate agencies where senior executives pitch you and immediately delegate your project to junior coordinators or overseas subcontractors, Vivek Thapar personally directs every engagement.
            </p>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Vivek architects your logic diagrams, reviews every sprint milestone, and collaborates directly with his senior developers, designers, and copywriters at Mirch Media to ensure on-time delivery.
            </p>

            <div class="pt-3 flex flex-wrap items-center gap-3">
              <router-link to="/contact" class="btn-primary text-xs">
                <span>Connect With Vivek</span>
                <ArrowRight class="w-4 h-4 ml-1 shrink-0" />
              </router-link>
              <a href="tel:+17182074446" class="px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-xs font-mono font-bold transition-all">
                Call (718) 207-4446
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { User, ArrowRight } from 'lucide-vue-next'
</script>
