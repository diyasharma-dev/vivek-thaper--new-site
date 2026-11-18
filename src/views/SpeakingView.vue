<template>
  <div class="pt-20 sm:pt-24 pb-16 bg-white">
    
    <!-- Hero Header with Warm Ambient Glow -->
    <section class="relative py-12 sm:py-16 overflow-hidden bg-gradient-to-b from-orange-50/30 via-amber-50/15 to-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/90 text-orange-700 font-mono text-[11px] font-bold tracking-wider uppercase shadow-2xs mb-3">
          <Mic class="w-3.5 h-3.5 text-orange-600" />
          <span>Keynotes &amp; Speaking</span>
        </span>
        <h1 class="text-2xl sm:text-4xl lg:text-[46px] font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
          Keynote Addresses, Fireside Chats &amp; <span class="gradient-text-brand">Masterclasses</span>
        </h1>
        <p class="mt-3 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-sans">
          Unfiltered, battle-tested insights on revenue architecture, generative AI search disruption, scaling agencies, and civic leadership.
        </p>
      </div>
    </section>

    <!-- Stage Photo & Signature Speeches -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-12 sm:mb-16">
          
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="w-full max-w-sm sm:max-w-md bg-slate-50 border border-slate-200/90 p-3 sm:p-3.5 rounded-3xl shadow-lg">
              <div class="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100">
                <img 
                  src="/media/vivek-thapar-keynote.webp" 
                  alt="Vivek Thapar on Stage"
                  class="w-full h-full object-cover object-top filter contrast-[1.02]"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>
                <div class="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-md">
                  <span class="text-[10px] font-mono uppercase tracking-wider text-brand-600 block mb-0.5 font-bold">Speaker Profile</span>
                  <p class="text-sm font-heading font-bold text-slate-900">Vivek Thapar</p>
                  <p class="text-xs text-slate-600 font-sans">Keynote Speaker · Agency CEO · Mentor</p>
                </div>
              </div>

              <div class="mt-2.5 px-1 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-600 font-mono">
                <span class="font-bold text-slate-800">Keynote Speaker</span>
                <span class="text-slate-400">Available Worldwide</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 space-y-5 sm:space-y-6">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-slate-900">
              Why Event Organizers Partner with Vivek
            </h2>

            <p class="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-sans">
              Vivek doesn't deliver generic motivational clichés. Having spent 20+ years building real digital infrastructure, scaling client revenue, and weathering economic cycles in New York City, his sessions are grounded in technical clarity, actionable frameworks, and unfiltered entrepreneurial candor.
            </p>

            <div class="space-y-3 pt-1">
              <div class="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 sm:p-4 flex items-start gap-3 shadow-2xs">
                <CheckCircle2 class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 class="text-xs sm:text-sm font-heading font-bold text-slate-900">Pragmatic Frameworks, Not Theory</h3>
                  <p class="text-xs text-slate-600 mt-0.5 leading-relaxed font-sans">Every attendee leaves with concrete architectural and acquisition blueprints they can execute immediately.</p>
                </div>
              </div>

              <div class="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 sm:p-4 flex items-start gap-3 shadow-2xs">
                <CheckCircle2 class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 class="text-xs sm:text-sm font-heading font-bold text-slate-900">Interactive Q&amp;A &amp; Live Site Audits</h3>
                  <p class="text-xs text-slate-600 mt-0.5 leading-relaxed font-sans">Vivek frequently audits audience businesses live on screen, diagnosing conversion leaks and search bottlenecks in real time.</p>
                </div>
              </div>

              <div class="bg-slate-50 border border-slate-200 rounded-2xl p-3.5 sm:p-4 flex items-start gap-3 shadow-2xs">
                <CheckCircle2 class="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 class="text-xs sm:text-sm font-heading font-bold text-slate-900">Diverse Speaking Formats</h3>
                  <p class="text-xs text-slate-600 mt-0.5 leading-relaxed font-sans">Keynotes (45-60 min), Executive Fireside Chats, Half-Day Workshops, and High-Impact Panel Moderation.</p>
                </div>
              </div>
            </div>

            <div class="pt-2">
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
        <div class="mt-12 sm:mt-16">
          <div class="max-w-2xl mb-8 sm:mb-10 space-y-2">
            <span class="text-xs font-mono uppercase tracking-widest text-brand-600 font-bold">Speaking &amp; Advisory Topics</span>
            <h2 class="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-slate-900">Keynote Addresses &amp; Panel Topics</h2>
            <p class="text-xs sm:text-sm text-slate-600 font-sans">Real-world topics grounded in 20+ years of digital marketing, project management, and agency growth in NYC.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <div 
              v-for="t in keynoteTopics" 
              :key="t.title"
              class="card-architectural p-5 sm:p-8 flex flex-col justify-between hover:-translate-y-1 hover:border-orange-300 hover:shadow-orange-500/10 transition-all duration-300"
            >
              <div class="space-y-3.5">
                <span class="text-xs font-mono font-bold text-brand-600 uppercase tracking-widest">{{ t.track }}</span>
                <h3 class="text-base sm:text-lg font-heading font-bold text-slate-900">{{ t.title }}</h3>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">{{ t.synopsis }}</p>
              </div>

              <div class="pt-4 mt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span class="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">Target Audience</span>
                  <span class="text-xs text-slate-800 font-bold font-sans">{{ t.audience }}</span>
                </div>
                <router-link 
                  to="/contact" 
                  class="btn-primary py-2 px-3.5 text-xs font-bold font-heading shrink-0 shadow-2xs w-full sm:w-auto"
                >
                  <span>Schedule a Call</span>
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
    track: 'SESSION / 01',
    title: 'Digital Marketing Strategy & Local SEO Supremacy',
    synopsis: 'How NYC businesses capture market share through high-intent Google Maps rankings, consumer behavior psychology, and conversion funnels. Insights from 20+ years directing agency campaigns.',
    audience: 'Business Owners, CMOs, Agency Leaders'
  },
  {
    track: 'SESSION / 02',
    title: 'Picking The Perfect Project Manager: Execution Over Theory',
    synopsis: 'Why great ideas fail without relentless logic planning, if-this-then-that dependency flowcharting, and an obsessive commitment to on-time milestone delivery.',
    audience: 'Product Directors, Project Managers, Startup Teams'
  },
  {
    track: 'SESSION / 03',
    title: '20 Years of Mirch Media: Building an Enduring Agency',
    synopsis: 'Starting with a laptop in Forest Hills, Queens, to building an enduring digital agency. Lessons on zero outside funding, direct founder accountability, and long-term client retention.',
    audience: 'Entrepreneurs, Agency Owners, Business Students'
  },
  {
    track: 'SESSION / 04',
    title: 'Civic Leadership & Heritage: Making a Life by What You Give',
    synopsis: '“You make a living by what you get. You make a life by what you give.” How business leaders can lead urban park preservation with NYC Parks, advocate for neighborhood upkeep, and mentor collegiate youth through Iota Nu Delta.',
    audience: 'Civic Leaders, University Summits, Cultural Groups'
  }
]
</script>