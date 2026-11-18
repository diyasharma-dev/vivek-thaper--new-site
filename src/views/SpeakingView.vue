<template>
  <div class="pt-20 sm:pt-24 pb-20 bg-white">
    
    <!-- Hero Banner with 100% Matched Keynote Stage Photo -->
    <section class="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden bg-slate-950 text-white border-b border-slate-800">
      <div class="absolute -top-24 right-0 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-20 w-[400px] h-[400px] bg-slate-800/50 rounded-full blur-[100px] pointer-events-none"></div>
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none"></div>

      <!-- Ambient blurred watermark of keynote photo -->
      <div class="absolute inset-0 opacity-10 filter blur-3xl scale-125 pointer-events-none overflow-hidden">
        <img src="/media/vivek-thapar-keynote.webp" class="w-full h-full object-cover" alt="" />
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Left Column (7 cols): Copy, Speaker Dossier & CTAs -->
          <div class="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-500/30 text-red-400 font-mono text-xs font-bold tracking-wider uppercase shadow-2xs">
              <Mic class="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Keynotes, Firesides &amp; Executive Masterclasses</span>
            </div>

            <h1 class="hero-headline text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-heading font-extrabold text-white tracking-normal leading-[1.32] sm:leading-[1.35] lg:leading-[1.38] text-balance my-3.5 sm:my-4">
              Keynote Addresses, Fireside Chats &amp; <span class="text-red-500">Masterclasses</span>
            </h1>

            <p class="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
              Actionable perspectives on project management, digital marketing, building an enduring NYC agency, and civic leadership delivered to corporate conventions and collegiate audiences.
            </p>

            <!-- Quick Speaker Tags -->
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-mono">
              <span class="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Keynote Speaker</span>
              <span class="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Digital Strategy &amp; Systems</span>
              <span class="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Collegiate Mentorship</span>
              <span class="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">Available Nationwide</span>
            </div>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3">
              <router-link 
                to="/contact"
                class="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-xs sm:text-sm shadow-lg shadow-red-900/30 transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span>Inquire for Speaking Dates</span>
                <ArrowRight class="w-4 h-4 shrink-0" />
              </router-link>
              <a 
                href="#keynotes"
                class="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-mono font-bold text-xs sm:text-sm transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <span>View Keynote Topics</span>
              </a>
            </div>
          </div>

          <!-- Right Column (5 cols): 100% Matched Keynote Stage Photo Showcase -->
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="w-full max-w-sm sm:max-w-md lg:max-w-md">
              <div class="relative rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-slate-800/80 via-slate-900/90 to-slate-950 border border-slate-700/80 shadow-2xl shadow-red-950/30 group overflow-hidden">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] h-[480px] sm:h-[520px] lg:h-[560px] bg-slate-900">
                  <img 
                    src="/media/vivek-thapar-keynote.webp" 
                    alt="Vivek Thapar Keynote Speaker on Stage"
                    class="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none"></div>

                  <!-- Glassmorphic Caption Badge on Image -->
                  <div class="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 shadow-lg">
                    <div class="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider mb-0.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                      <span>Live Stage Keynote Address</span>
                    </div>
                    <p class="text-xs sm:text-sm font-heading font-bold text-white tracking-tight">Vivek Thapar</p>
                    <p class="text-[11px] text-slate-300 font-sans mt-0.5">Keynote Speaker · Agency CEO · Mentor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Stage Photo & Signature Speeches -->
    <section class="py-14 sm:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14 sm:mb-20">
          
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="w-full max-w-sm sm:max-w-md bg-white border border-slate-200/90 p-3 sm:p-4 rounded-3xl shadow-xl">
              <div class="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100">
                <img 
                  src="/media/vivek-thapar-keynote.webp" 
                  alt="Vivek Thapar on Stage"
                  class="w-full h-full object-cover object-top filter contrast-[1.02]"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                <div class="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                  <span class="text-[10px] font-mono uppercase tracking-wider text-red-600 block mb-0.5 font-bold">Speaker Profile</span>
                  <p class="text-sm font-heading font-bold text-slate-900">Vivek Thapar</p>
                  <p class="text-xs text-slate-600 font-sans">Keynote Speaker · Agency CEO · Mentor</p>
                </div>
              </div>

              <div class="mt-3 px-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 font-mono">
                <span class="font-bold text-slate-800">Keynote Speaker</span>
                <span class="text-slate-500">Available Worldwide</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 space-y-6">
            <div>
              <span class="text-xs font-mono uppercase tracking-widest text-red-600 font-bold block mb-1">Speaker Philosophy</span>
              <h2 class="text-2xl sm:text-3xl font-heading font-bold text-slate-900 leading-snug">
                Why Event Organizers Partner with Vivek
              </h2>
            </div>

            <p class="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Vivek doesn't deliver generic motivational clichés. Having spent 20+ years building real digital infrastructure, scaling client revenue, and weathering economic cycles in New York City, his sessions are grounded in technical clarity, actionable frameworks, and unfiltered entrepreneurial candor.
            </p>

            <div class="space-y-3.5 pt-1">
              <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-start gap-3.5 shadow-2xs">
                <CheckCircle2 class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 class="text-sm font-heading font-bold text-slate-900">Pragmatic Blueprints, Not Theory</h3>
                  <p class="text-xs text-slate-600 mt-0.5 leading-relaxed font-sans">Every attendee leaves with concrete architectural and acquisition blueprints they can execute immediately.</p>
                </div>
              </div>

              <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-start gap-3.5 shadow-2xs">
                <CheckCircle2 class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 class="text-sm font-heading font-bold text-slate-900">Interactive Q&amp;A &amp; Live Site Audits</h3>
                  <p class="text-xs text-slate-600 mt-0.5 leading-relaxed font-sans">Vivek frequently audits audience businesses live on screen, diagnosing conversion leaks and search bottlenecks in real time.</p>
                </div>
              </div>

              <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-start gap-3.5 shadow-2xs">
                <CheckCircle2 class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 class="text-sm font-heading font-bold text-slate-900">Diverse Engagement Formats</h3>
                  <p class="text-xs text-slate-600 mt-0.5 leading-relaxed font-sans">Keynotes (45-60 min), Executive Fireside Chats, Half-Day Workshops, and High-Impact Panel Moderation.</p>
                </div>
              </div>
            </div>

            <div class="pt-2 flex flex-wrap gap-3">
              <router-link 
                to="/contact" 
                class="btn-primary text-xs w-full sm:w-auto"
              >
                <span>Inquire About Speaking Dates</span>
                <ArrowRight class="w-4 h-4 ml-1 shrink-0" />
              </router-link>
            </div>
          </div>

        </div>

        <!-- Topics Detailed List -->
        <div>
          <div class="max-w-2xl mb-10 space-y-2">
            <span class="text-xs font-mono uppercase tracking-widest text-red-600 font-bold">Signature Keynotes</span>
            <h2 class="text-2xl sm:text-3xl font-heading font-bold text-slate-900 tracking-tight">Presentation Topics</h2>
            <p class="text-xs sm:text-sm text-slate-600 font-sans">Real-world topics grounded in 20+ years of digital marketing, project management, and agency growth in NYC.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div 
              v-for="t in keynoteTopics" 
              :key="t.title"
              class="card-architectural p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1 hover:border-red-300 hover:shadow-red-500/10 transition-all duration-300"
            >
              <div class="space-y-3.5">
                <span class="text-xs font-mono font-bold text-red-600 uppercase tracking-widest">{{ t.track }}</span>
                <h3 class="text-base sm:text-lg font-heading font-bold text-slate-900 leading-snug">{{ t.title }}</h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">{{ t.synopsis }}</p>
              </div>

              <div class="pt-5 mt-5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span class="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Target Audience</span>
                  <span class="text-xs text-slate-800 font-bold font-sans">{{ t.audience }}</span>
                </div>
                <router-link 
                  to="/contact" 
                  class="btn-primary py-2 px-3.5 text-xs font-bold font-heading shrink-0 shadow-2xs w-full sm:w-auto"
                >
                  <span>Book Topic</span>
                  <ArrowRight class="w-3.5 h-3.5 shrink-0" />
                </router-link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { Mic, CheckCircle2, ArrowRight } from 'lucide-vue-next'

const keynoteTopics = [
  {
    track: 'KEYNOTE · DIGITAL ACQUISITION',
    title: 'Digital Marketing Strategy & Local Search Supremacy',
    synopsis: 'How NYC businesses capture market share through high-intent Google Maps rankings, consumer behavior psychology, and conversion funnels. Insights from 20+ years directing agency campaigns.',
    audience: 'Business Owners, CMOs, Agency Leaders'
  },
  {
    track: 'KEYNOTE · PROJECT MANAGEMENT',
    title: 'Picking The Perfect Project Manager: Execution Over Theory',
    synopsis: 'Why great ideas fail without relentless logic planning, if-this-then-that dependency flowcharting, and an obsessive commitment to on-time milestone delivery.',
    audience: 'Product Directors, Project Managers, Startup Teams'
  },
  {
    track: 'KEYNOTE · AGENCY ENTREPRENEURSHIP',
    title: '20 Years of Mirch Media: Building an Enduring Agency',
    synopsis: 'Starting with a laptop in Forest Hills, Queens, to building an enduring digital agency. Lessons on zero outside funding, direct founder accountability, and long-term client retention.',
    audience: 'Entrepreneurs, Agency Owners, Business Students'
  },
  {
    track: 'KEYNOTE · CIVIC LEADERSHIP',
    title: 'Civic Leadership & Heritage: Making a Life by What You Give',
    synopsis: '“You make a living by what you get. You make a life by what you give.” How business leaders can lead urban park preservation with NYC Parks, advocate for neighborhood upkeep, and mentor collegiate youth through Iota Nu Delta.',
    audience: 'Civic Leaders, University Summits, Cultural Groups'
  }
]
</script>
