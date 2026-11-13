<template>
  <section id="calculator" class="py-24 relative overflow-hidden bg-dark-950">
    <!-- Ambient glow behind calculator -->
    <div class="glow-ambient top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-brand-600/10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold">
          <Calculator class="w-3.5 h-3.5" />
          <span>Interactive Growth Simulator · Unique Tool</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
          Calculate Your <span class="gold-gradient-text">Revenue Growth Potential</span>
        </h2>
        <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
          See how optimizing your conversion architecture, speed, and acquisition funnels with Vivek Thapar's methodology directly impacts your bottom line.
        </p>
      </div>

      <!-- Main Calculator Card -->
      <div class="max-w-5xl mx-auto p-6 sm:p-10 rounded-3xl glass-panel border border-slate-700/80 shadow-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <!-- Left: Input Controls (7 cols) -->
          <div class="lg:col-span-7 space-y-8">
            
            <!-- Industry Selection -->
            <div>
              <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                1. Select Your Business Industry
              </label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  v-for="ind in industryList"
                  :key="ind.id"
                  @click="selectedIndustry = ind"
                  :class="[
                    'p-2.5 rounded-xl text-xs font-semibold border transition-all text-center',
                    selectedIndustry.id === ind.id 
                      ? 'bg-brand-500/20 border-brand-400 text-white shadow-md shadow-brand-500/10'
                      : 'bg-dark-900 border-slate-800 text-slate-400 hover:text-white'
                  ]"
                >
                  {{ ind.name }}
                </button>
              </div>
            </div>

            <!-- Monthly Visitors Slider -->
            <div>
              <div class="flex items-center justify-between mb-2">
                <label class="text-xs font-bold uppercase tracking-wider text-slate-300">
                  2. Monthly Website Visitors
                </label>
                <span class="text-base font-bold font-mono text-brand-400">
                  {{ monthlyVisitors.toLocaleString() }} / mo
                </span>
              </div>
              <input 
                type="range" 
                v-model.number="monthlyVisitors" 
                min="500" 
                max="50000" 
                step="500"
                class="w-full h-2 bg-dark-900 rounded-lg appearance-none cursor-pointer accent-brand-500"
              />
              <div class="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>500</span>
                <span>25,000</span>
                <span>50,000+</span>
              </div>
            </div>

            <!-- Average Customer Value -->
            <div>
              <div class="flex items-center justify-between mb-2">
                <label class="text-xs font-bold uppercase tracking-wider text-slate-300">
                  3. Average Value Per Client / Transaction
                </label>
                <span class="text-base font-bold font-mono text-emerald-400">
                  ${{ avgDealValue.toLocaleString() }}
                </span>
              </div>
              <input 
                type="range" 
                v-model.number="avgDealValue" 
                min="100" 
                max="25000" 
                step="100"
                class="w-full h-2 bg-dark-900 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div class="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>$100</span>
                <span>$10,000</span>
                <span>$25,000+</span>
              </div>
            </div>

            <!-- Baseline Info Callout -->
            <div class="p-4 rounded-xl bg-dark-900/80 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
              <Sparkles class="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
              <p>
                Based on benchmark data across <strong class="text-slate-200">{{ selectedIndustry.name }}</strong> clients. Typical websites convert at ~1.2%. Vivek's conversion architecture elevates this to <strong class="text-brand-300 font-semibold">{{ optimizedRate }}%</strong>.
              </p>
            </div>

          </div>

          <!-- Right: Calculated Results Card (5 cols) -->
          <div class="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-dark-900 to-dark-950 border border-brand-500/30 shadow-2xl flex flex-col justify-between">
            <div class="space-y-6">
              
              <div class="flex items-center justify-between border-b border-slate-800 pb-4">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Projected Uplift</span>
                <span class="px-2.5 py-1 rounded-full text-xs font-extrabold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  +{{ Math.round((optimizedRate / 1.2 - 1) * 100) }}% Increase
                </span>
              </div>

              <!-- Estimated Monthly Additional Revenue -->
              <div>
                <span class="text-xs text-slate-400 block mb-1">Estimated Additional Monthly Revenue</span>
                <div class="text-3xl sm:text-4xl font-display font-black text-white gold-gradient-text tracking-tight">
                  +${{ estimatedMonthlyUplift.toLocaleString() }}
                </div>
                <span class="text-[11px] text-slate-500 font-medium">per month in newly captured opportunities</span>
              </div>

              <!-- Annualized Pipeline Impact -->
              <div class="p-4 rounded-xl bg-dark-850/80 border border-slate-800 space-y-1">
                <span class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Annualized Pipeline Impact</span>
                <div class="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                  +${{ (estimatedMonthlyUplift * 12).toLocaleString() }} / yr
                </div>
              </div>

              <!-- New Client Inquiries Generated -->
              <div class="flex items-center justify-between text-xs text-slate-300">
                <span>New Qualified Leads / Calls:</span>
                <strong class="text-white font-mono text-sm">+{{ additionalLeadsPerMonth }} leads / mo</strong>
              </div>

            </div>

            <!-- Action Button -->
            <div class="pt-6 mt-6 border-t border-slate-800 space-y-3">
              <a 
                href="#contact"
                class="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-dark-950 bg-gradient-to-r from-brand-300 via-brand-gold to-brand-500 hover:from-brand-goldLight hover:to-brand-gold shadow-lg shadow-brand-500/25 transition-all text-center"
              >
                <span>Unlock This Blueprint With Vivek</span>
                <ArrowRight class="w-4 h-4" />
              </a>
              <p class="text-[10px] text-center text-slate-500">
                100% Free Strategy Session · Direct Founder Review
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Calculator, Sparkles, ArrowRight } from 'lucide-vue-next'

const industryList = [
  { id: 'legal', name: 'Legal / PI Law', rate: 3.4 },
  { id: 'medical', name: 'Healthcare & Medical', rate: 3.6 },
  { id: 'b2b', name: 'B2B & Professional', rate: 3.2 },
  { id: 'retail', name: 'Retail & Service', rate: 3.8 }
]

const selectedIndustry = ref(industryList[0])
const monthlyVisitors = ref(4500)
const avgDealValue = ref(3500)

const optimizedRate = computed(() => selectedIndustry.value.rate)

const currentLeads = computed(() => {
  return Math.round(monthlyVisitors.value * 0.012)
})

const optimizedLeads = computed(() => {
  return Math.round(monthlyVisitors.value * (optimizedRate.value / 100))
})

const additionalLeadsPerMonth = computed(() => {
  return Math.max(1, optimizedLeads.value - currentLeads.value)
})

const estimatedMonthlyUplift = computed(() => {
  // Conservative estimate: 20% of new qualified leads close
  const closedDeals = Math.max(1, Math.round(additionalLeadsPerMonth.value * 0.20))
  return closedDeals * avgDealValue.value
})
</script>
