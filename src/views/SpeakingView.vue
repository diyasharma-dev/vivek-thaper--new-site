<template>
  <div class="pt-20 sm:pt-24 pb-20 bg-transparent text-slate-100 min-h-screen">
    
    <!-- Hero Banner with Matched Keynote Stage Photo -->
    <section class="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 overflow-hidden border-b border-white/10">
      <div class="absolute -top-24 right-0 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-20 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>


      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Left Column (7 cols): Copy, Speaker Dossier & CTAs -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-500/30 text-red-400 font-mono text-xs font-bold tracking-wider uppercase shadow-glow-red">
              <Mic class="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Keynotes, Firesides &amp; Executive Masterclasses</span>
            </div>

            <h1 class="hero-headline text-3xl sm:text-5xl lg:text-[48px] font-heading font-black text-white tracking-tight leading-[1.18] text-balance">
              Keynote Addresses, Fireside Chats &amp; <span class="gradient-text-brand">Masterclasses</span>
            </h1>

            <p class="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
              Actionable perspectives on project management, digital marketing, building an enduring NYC agency, and civic leadership delivered to corporate conventions and collegiate audiences.
            </p>

            <!-- Quick Speaker Tags -->
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-mono">
              <span class="px-3 py-1 rounded-lg bg-[#0e111d] border border-white/10 text-slate-300">Keynote Speaker</span>
              <span class="px-3 py-1 rounded-lg bg-[#0e111d] border border-white/10 text-slate-300">Digital Strategy &amp; Systems</span>
              <span class="px-3 py-1 rounded-lg bg-[#0e111d] border border-white/10 text-slate-300">Collegiate Mentorship</span>
              <span class="px-3 py-1 rounded-lg bg-[#0e111d] border border-white/10 text-slate-300">Available Nationwide</span>
            </div>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3">
              <router-link 
                to="/contact"
                class="btn-primary text-xs sm:text-sm w-full sm:w-auto"
              >
                <span>Inquire for Speaking Dates</span>
                <ArrowRight class="w-4 h-4 ml-1 shrink-0" />
              </router-link>
              <a 
                href="#keynotes"
                class="btn-secondary text-xs sm:text-sm font-mono font-bold w-full sm:w-auto"
              >
                <span>View Keynote Topics</span>
              </a>
            </div>
          </div>

          <!-- Right Column (5 cols): Keynote Stage Photo Showcase -->
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="w-full max-w-sm">
              <div class="relative rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-gradient-to-b from-white/15 via-[#0e111d] to-[#07080e] border border-white/15 shadow-2xl shadow-red-950/30 group overflow-hidden">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[3/4] w-full bg-slate-900">
                  <img 
                    src="/media/vivek-thapar-keynote.webp" 
                    alt="Vivek Thapar Keynote Speaker on Stage"
                    class="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-700"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                <!-- Caption Badge Placed Underneath Image -->
                <div class="pt-3.5 px-2 pb-1">
                  <div class="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider mb-0.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span>Live Stage Keynote Address</span>
                  </div>
                  <p class="text-xs sm:text-sm font-heading font-bold text-white tracking-tight">Vivek Thapar</p>
                  <p class="text-[11px] text-slate-400 font-sans mt-0.5">Keynote Speaker · Agency CEO · Mentor</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Stage Photo & Signature Speeches -->
    <section class="py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-24">
          
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="w-full max-w-sm card-glass p-3 sm:p-4 rounded-3xl">
              <div class="relative rounded-2xl overflow-hidden aspect-[3/4] w-full bg-slate-900">
                <img 
                  src="/media/vivek-thapar-keynote.webp" 
                  alt="Vivek Thapar on Stage"
                  class="w-full h-full object-cover object-top filter contrast-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <!-- Caption placed underneath photo -->
              <div class="pt-3.5 px-2 pb-1">
                <span class="text-[10px] font-mono uppercase tracking-wider text-red-400 block mb-0.5 font-bold">Speaker Profile</span>
                <p class="text-sm font-heading font-bold text-white">Vivek Thapar</p>
                <p class="text-xs text-slate-400 font-sans mt-0.5">Keynote Speaker · Agency CEO · Mentor</p>
              </div>

              <div class="mt-3 px-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 font-mono">
                <span class="font-bold text-slate-300">Keynote Speaker</span>
                <span class="text-red-400">Available Worldwide</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 space-y-6">
            <div>
              <span class="text-xs font-mono uppercase tracking-widest text-red-400 font-bold block mb-1">Speaker Philosophy</span>
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-snug">
                Why Event Organizers Partner with Vivek
              </h2>
            </div>

            <p class="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              Vivek doesn't deliver generic motivational clichés. Having spent 20+ years building real digital infrastructure, scaling client revenue, and weathering economic cycles in New York City, his sessions are grounded in technical clarity, actionable frameworks, and unfiltered entrepreneurial candor.
            </p>

            <div class="space-y-3.5 pt-1">
              <div class="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex items-start gap-3.5 hover:border-red-500/30 transition-colors">
                <CheckCircle2 class="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 class="text-sm font-heading font-bold text-white">Pragmatic Blueprints, Not Theory</h3>
                  <p class="text-xs text-slate-400 mt-0.5 leading-relaxed font-sans">Every attendee leaves with concrete architectural and acquisition blueprints they can execute immediately.</p>
                </div>
              </div>

              <div class="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex items-start gap-3.5 hover:border-red-500/30 transition-colors">
                <CheckCircle2 class="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 class="text-sm font-heading font-bold text-white">Interactive Q&amp;A &amp; Live Site Audits</h3>
                  <p class="text-xs text-slate-400 mt-0.5 leading-relaxed font-sans">Vivek frequently audits audience businesses live on screen, diagnosing conversion leaks and search bottlenecks in real time.</p>
                </div>
              </div>

              <div class="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex items-start gap-3.5 hover:border-red-500/30 transition-colors">
                <CheckCircle2 class="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 class="text-sm font-heading font-bold text-white">Diverse Engagement Formats</h3>
                  <p class="text-xs text-slate-400 mt-0.5 leading-relaxed font-sans">Keynotes (45-60 min), Executive Fireside Chats, Half-Day Workshops, and High-Impact Panel Moderation.</p>
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
        <div id="keynotes" class="pt-8">
          <div class="max-w-2xl mb-10 space-y-2">
            <span class="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">Signature Keynotes</span>
            <h2 class="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">Presentation Topics</h2>
            <p class="text-xs sm:text-sm text-slate-400 font-sans">Real-world topics grounded in 20+ years of digital marketing, project management, and agency growth in NYC.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div 
              v-for="t in keynoteTopics" 
              :key="t.title"
              class="card-glass p-7 sm:p-9 flex flex-col justify-between hover:-translate-y-1 hover:border-red-500/40 transition-all duration-300 group"
            >
              <div class="space-y-3.5">
                <span class="text-xs font-mono font-bold text-red-400 uppercase tracking-widest">{{ t.track }}</span>
                <h3 class="text-base sm:text-lg font-heading font-bold text-white group-hover:text-red-300 transition-colors leading-snug">{{ t.title }}</h3>
                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{{ t.synopsis }}</p>
              </div>

              <div class="pt-5 mt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span class="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Target Audience</span>
                  <span class="text-xs text-slate-300 font-bold font-sans">{{ t.audience }}</span>
                </div>
                <router-link 
                  to="/contact" 
                  class="btn-secondary py-2 px-3.5 text-xs font-bold font-heading shrink-0 w-full sm:w-auto"
                >
                  <span>Book Topic</span>
                  <ArrowRight class="w-3.5 h-3.5 ml-1 text-red-400 shrink-0" />
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
