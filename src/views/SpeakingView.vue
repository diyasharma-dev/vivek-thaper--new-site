<template>
  <div class="pt-28 pb-20 bg-[#0c0d10]">
    
    <!-- Hero Header -->
    <section class="relative py-16 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
        <span class="eyebrow-label mb-4">
          <Mic class="w-3.5 h-3.5" />
          <span>Keynotes &amp; Speaking</span>
        </span>
        <h1 class="text-3xl sm:text-5xl lg:text-[48px] font-serif font-normal text-white tracking-tight leading-tight">
          Keynote Addresses, Fireside Chats &amp; Masterclasses
        </h1>
        <p class="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
          Unfiltered, battle-tested insights on revenue architecture, generative AI search disruption, scaling agencies, and civic leadership.
        </p>
      </div>
    </section>

    <!-- Stage Photo & Signature Speeches -->
    <section class="py-12 border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div class="lg:col-span-5 relative">
            <div class="card-architectural p-3 shadow-2xl">
              <div class="relative rounded-lg overflow-hidden aspect-[3/4] bg-[#090a0d]">
                <img 
                  src="/media/vivek-thapar-keynote.webp" 
                  alt="Vivek Thapar on Stage"
                  class="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02]"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#0c0d10]/90 via-transparent to-transparent pointer-events-none"></div>
                <div class="absolute bottom-3 inset-x-3 p-3.5 rounded-md bg-[#0c0d10]/90 backdrop-blur-md border border-white/[0.08]">
                  <span class="text-[10px] font-mono uppercase tracking-wider text-[#c59b63] block mb-0.5">Speaker Profile</span>
                  <p class="text-sm font-semibold text-white">Vivek Thapar</p>
                  <p class="text-xs text-neutral-400 font-sans">Keynote Speaker · Agency CEO · Mentor</p>
                </div>
              </div>

              <div class="mt-3 px-2 py-0.5 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>Keynote Speaker</span>
                <span class="text-neutral-500">Available Worldwide</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 space-y-6">
            <h2 class="text-2xl sm:text-3xl font-serif text-white">
              Why Event Organizers Partner with Vivek
            </h2>

            <p class="text-neutral-400 text-sm leading-relaxed font-sans">
              Vivek doesn't deliver generic motivational clichés. Having spent 21+ years building real digital infrastructure, scaling client revenue, and weathering two economic cycles in New York City, his sessions are grounded in technical clarity, actionable frameworks, and unfiltered entrepreneurial candor.
            </p>

            <div class="space-y-3 pt-2">
              <div class="card-architectural p-4 flex items-start gap-3">
                <CheckCircle2 class="w-5 h-5 text-[#c59b63] shrink-0 mt-0.5" />
                <div>
                  <h3 class="text-sm font-semibold text-white font-sans">Pragmatic Frameworks, Not Theory</h3>
                  <p class="text-xs text-neutral-400 mt-0.5 leading-relaxed font-sans">Every attendee leaves with concrete architectural and acquisition blueprints they can execute immediately.</p>
                </div>
              </div>

              <div class="card-architectural p-4 flex items-start gap-3">
                <CheckCircle2 class="w-5 h-5 text-[#c59b63] shrink-0 mt-0.5" />
                <div>
                  <h3 class="text-sm font-semibold text-white font-sans">Interactive Q&amp;A &amp; Live Site Audits</h3>
                  <p class="text-xs text-neutral-400 mt-0.5 leading-relaxed font-sans">Vivek frequently audits audience businesses live on screen, diagnosing conversion leaks and search bottlenecks in real time.</p>
                </div>
              </div>

              <div class="card-architectural p-4 flex items-start gap-3">
                <CheckCircle2 class="w-5 h-5 text-[#c59b63] shrink-0 mt-0.5" />
                <div>
                  <h3 class="text-sm font-semibold text-white font-sans">Diverse Speaking Formats</h3>
                  <p class="text-xs text-neutral-400 mt-0.5 leading-relaxed font-sans">Keynotes (45-60 min), Executive Fireside Chats, Half-Day Workshops, and High-Impact Panel Moderation.</p>
                </div>
              </div>
            </div>

            <div class="pt-2">
              <router-link 
                to="/contact" 
                class="btn-primary"
              >
                <span>Inquire About Speaking Dates</span>
                <ArrowRight class="w-4 h-4" />
              </router-link>
            </div>
          </div>

        </div>

        <!-- Topics Detailed List -->
        <div class="mt-16">
          <div class="max-w-2xl mb-12 space-y-2">
            <span class="text-xs font-mono uppercase tracking-widest text-[#c59b63]">Curated Repertoire</span>
            <h2 class="text-2xl sm:text-3xl font-serif text-white">Available Keynote Presentations</h2>
            <p class="text-xs sm:text-sm text-neutral-400 font-sans">Tailored for your audience's industry and executive seniority.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              v-for="t in keynoteTopics" 
              :key="t.title"
              class="card-architectural p-8 space-y-4"
            >
              <span class="text-xs font-mono font-semibold text-[#c59b63] uppercase tracking-widest">{{ t.track }}</span>
              <h3 class="text-lg font-serif text-white">{{ t.title }}</h3>
              <p class="text-xs text-neutral-400 leading-relaxed font-sans">{{ t.synopsis }}</p>

              <div class="pt-3 border-t border-white/[0.06]">
                <span class="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-1">Target Audience</span>
                <span class="text-xs text-neutral-300 font-medium font-sans">{{ t.audience }}</span>
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
    synopsis: 'How ChatGPT, Google Gemini, and Perplexity are rewriting the rules of commerce. Why legacy SEO playbooks are collapsing and what forward-looking brands must do today.',
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
