<template>
  <div class="pt-28 pb-20">
    
    <!-- Hero Header -->
    <section class="relative py-16 overflow-hidden">
      <div class="glow-ambient -top-40 left-1/3 w-[600px] h-[400px] bg-brand-600/15"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold mb-4">
          <Mic class="w-3.5 h-3.5" />
          <span>Thought Leadership &amp; Keynotes</span>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          Keynote Speaking &amp; <br />
          <span class="gold-gradient-text">Executive Masterclasses</span>
        </h1>
        <p class="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Unfiltered, battle-tested insights on revenue architecture, generative AI search disruption, scaling agencies, and civic leadership.
        </p>
      </div>
    </section>

    <!-- Stage Photo & Signature Speeches -->
    <section class="py-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div class="lg:col-span-5 relative">
            <div class="rounded-3xl overflow-hidden border border-slate-700 bg-dark-900 shadow-2xl p-2.5">
              <!-- Exact 3:4 aspect ratio matching 3024x4032 image with object-top preventing head crop -->
              <div class="relative rounded-2xl overflow-hidden aspect-[3/4] bg-dark-950">
                <img 
                  src="/media/vivek-thapar-keynote.webp" 
                  alt="Vivek Thapar on Stage"
                  class="w-full h-full object-cover object-top filter brightness-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent"></div>
                <div class="absolute bottom-3 inset-x-3 p-3.5 rounded-xl bg-dark-900/90 backdrop-blur-md border border-slate-700">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-brand-400">Speaker Profile</span>
                  <p class="text-sm font-bold text-white">Vivek Thapar</p>
                  <p class="text-xs text-slate-300">Keynote Speaker · Agency CEO · Mentor</p>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 space-y-6">
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-white">
              Why Event Organizers Choose Vivek
            </h2>

            <p class="text-slate-300 text-sm leading-relaxed">
              Vivek doesn't deliver generic motivational cliches. Having spent 21+ years building real digital infrastructure, scaling client revenue, and weathering two economic cycles in New York City, his sessions are grounded in technical clarity, actionable frameworks, and unfiltered entrepreneurial candor.
            </p>

            <div class="space-y-3 pt-2">
              <div class="p-4 rounded-xl bg-dark-900 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 class="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <h3 class="text-sm font-bold text-white">Pragmatic Frameworks, Not Fluff</h3>
                  <p class="text-xs text-slate-400 mt-0.5">Every attendee walks away with concrete blueprints they can deploy on Monday morning.</p>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-dark-900 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 class="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <h3 class="text-sm font-bold text-white">Interactive Q&amp;A &amp; Live Site Audits</h3>
                  <p class="text-xs text-slate-400 mt-0.5">Vivek frequently audits audience businesses live on screen, diagnosing conversion leaks in real time.</p>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-dark-900 border border-slate-800 flex items-start gap-3">
                <CheckCircle2 class="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <h3 class="text-sm font-bold text-white">Diverse Formats</h3>
                  <p class="text-xs text-slate-400 mt-0.5">Keynotes (45-60 min), Executive Fireside Chats, Half-Day Workshops, and Panel Moderation.</p>
                </div>
              </div>
            </div>

            <div class="pt-2">
              <router-link 
                to="/contact" 
                class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-dark-950 bg-gradient-to-r from-brand-300 via-brand-gold to-brand-500 hover:from-brand-goldLight hover:to-brand-gold shadow-lg shadow-brand-500/30 transition-all"
              >
                <span>Inquire About Speaking Dates</span>
                <ArrowRight class="w-4 h-4" />
              </router-link>
            </div>
          </div>

        </div>

        <!-- Topics Detailed List -->
        <div class="mt-16">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <h2 class="text-2xl sm:text-3xl font-display font-bold text-white">Available Keynote Topics</h2>
            <p class="text-xs sm:text-sm text-slate-400 mt-1">Customized for your audience's industry and executive seniority.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              v-for="t in keynoteTopics" 
              :key="t.title"
              class="p-8 rounded-3xl glass-panel border border-slate-700/60 space-y-4"
            >
              <span class="text-xs font-mono font-bold text-brand-400 uppercase tracking-widest">{{ t.track }}</span>
              <h3 class="text-xl font-bold font-display text-white">{{ t.title }}</h3>
              <p class="text-xs text-slate-300 leading-relaxed">{{ t.synopsis }}</p>

              <div class="pt-2 border-t border-slate-800">
                <span class="text-[11px] text-slate-400 font-bold block mb-1">Target Audience:</span>
                <span class="text-xs text-brand-300 font-semibold">{{ t.audience }}</span>
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
    track: 'KEYNOTE / 01',
    title: 'The AI Search Revolution: Generative Engine Optimization',
    synopsis: 'How ChatGPT, Google Gemini, and Perplexity are rewriting the rules of commerce. Why 80% of legacy SEO playbooks are dead and what forward-looking brands must do today.',
    audience: 'CMOs, Agency Leaders, Enterprise Founders'
  },
  {
    track: 'KEYNOTE / 02',
    title: 'Picking The Perfect Project Manager: Execution Over Theory',
    synopsis: 'Why great ideas fail without relentless logic planning, if-this-then-that dependency flowcharting, and an obsessive commitment to on-time milestone delivery.',
    audience: 'Product Directors, Engineering Managers, Startup Teams'
  },
  {
    track: 'KEYNOTE / 03',
    title: 'Bootstrap to 20-Year Empire: The Mirch Media Playbook',
    synopsis: 'Starting with a laptop in Queens, NY to building an enduring digital agency. Lessons on zero outside funding, 98% client retention, and direct founder accountability.',
    audience: 'Entrepreneurs, Business Students, Agency Owners'
  },
  {
    track: 'KEYNOTE / 04',
    title: 'Civic Leadership & Heritage: Making a Life by What You Give',
    synopsis: 'How business leaders can meaningfully uplift public urban green spaces, mentor youth, and preserve South Asian heritage while maintaining high commercial output.',
    audience: 'Civic Leaders, University Summits, Cultural Organizations'
  }
]
</script>
