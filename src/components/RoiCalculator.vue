<template>
  <section id="calculator" class="py-24 relative overflow-hidden bg-slate-50/70 border-b border-slate-200/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 space-y-3">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 font-mono text-[11px] font-semibold tracking-wider uppercase shadow-2xs">
          <Calculator class="w-3.5 h-3.5 text-amber-600" />
          <span>Financial Modeling</span>
        </span>
        <h2 class="text-3xl sm:text-4xl font-serif font-normal text-slate-900 tracking-tight leading-tight">
          Executive Project Economics &amp; Revenue Scope Estimator
        </h2>
        <p class="text-slate-600 text-base leading-relaxed font-sans">
          Calculate the tangible financial return of optimizing your conversion architecture, organic search dominance, and digital acquisition channels.
        </p>
      </div>

      <!-- Main Calculator Card -->
      <div class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left: Input Controls (7 cols) -->
          <div class="lg:col-span-7 space-y-7">
            
            <!-- Industry Selection -->
            <div>
              <label class="block text-xs font-mono uppercase tracking-widest text-slate-600 font-bold mb-3">
                1. Select Industry Sector
              </label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <button
                  v-for="ind in industryList"
                  :key="ind.id"
                  @click="selectedIndustry = ind"
                  :class="[
                    'p-3 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer',
                    selectedIndustry.id === ind.id 
                      ? 'bg-slate-900 border-slate-900 text-white shadow-xs'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                  ]"
                >
                  {{ ind.name }}
                </button>
              </div>
            </div>

            <!-- Monthly Visitors Slider -->
            <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div class="flex items-center justify-between mb-3">
                <label class="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">
                  2. Current Monthly Traffic
                </label>
                <span class="text-base font-mono font-bold text-slate-900">
                  {{ monthlyVisitors.toLocaleString() }} visitors / mo
                </span>
              </div>
              <input 
                type="range" 
                v-model.number="monthlyVisitors" 
                min="500" 
                max="50000" 
                step="500"
                class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
              <div class="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
                <span>500</span>
                <span>25,000</span>
                <span>50,000+</span>
              </div>
            </div>

            <!-- Average Customer Value -->
            <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div class="flex items-center justify-between mb-3">
                <label class="text-xs font-mono uppercase tracking-wider text-slate-700 font-bold">
                  3. Average Value Per Client / Transaction
                </label>
                <span class="text-base font-mono font-bold text-amber-700">
                  ${{ avgClientValue.toLocaleString() }}
                </span>
              </div>
              <input 
                type="range" 
                v-model.number="avgClientValue" 
                min="100" 
                max="10000" 
                step="100"
                class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
              <div class="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
                <span>$100</span>
                <span>$5,000</span>
                <span>$10,000+</span>
              </div>
            </div>

            <p class="text-xs text-slate-500 italic font-sans">
              *Model based on historical benchmark lifts across 500+ web architecture deployments (conservative conversion improvement of +1.4% to +2.8%).
            </p>

          </div>

          <!-- Right: Output Financial Card (5 cols) -->
          <div class="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-2xl flex flex-col justify-between">
            <div class="space-y-6">
              
              <div class="flex items-center justify-between pb-4 border-b border-slate-800">
                <span class="text-xs font-mono uppercase tracking-widest text-slate-400">Projection Output</span>
                <span class="text-xs text-amber-400 font-mono font-semibold px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">12-Month Horizon</span>
              </div>

              <!-- Estimated Monthly Additional Leads -->
              <div class="space-y-1">
                <span class="text-xs text-slate-400 font-sans">Projected Additional Qualified Inbounds</span>
                <div class="text-2xl sm:text-3xl font-mono font-bold text-white">
                  +{{ Math.round(monthlyVisitors * 0.018) }}
                  <span class="text-xs text-slate-400 font-normal">/ month</span>
                </div>
              </div>

              <!-- Additional Monthly Revenue -->
              <div class="space-y-1">
                <span class="text-xs text-slate-400 font-sans">Estimated Additional Monthly Revenue</span>
                <div class="text-2xl sm:text-3xl font-mono font-bold text-amber-400">
                  ${{ Math.round(monthlyVisitors * 0.018 * (avgClientValue * 0.15)).toLocaleString() }}
                  <span class="text-xs text-slate-400 font-normal">/ mo</span>
                </div>
              </div>

              <!-- Total Annualized Enterprise Lift -->
              <div class="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <span class="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                  Annualized Growth Upside
                </span>
                <div class="text-3xl sm:text-4xl font-serif text-white font-bold">
                  ${{ Math.round(monthlyVisitors * 0.018 * (avgClientValue * 0.15) * 12).toLocaleString() }}
                </div>
                <p class="text-xs text-slate-300 mt-1 font-sans">
                  Cumulative annual revenue expansion based on Vivek Thapar's architectural baseline.
                </p>
              </div>

            </div>

            <!-- CTA -->
            <div class="pt-6 mt-6 border-t border-slate-800">
              <router-link
                to="/contact"
                class="w-full flex items-center justify-center gap-2 p-3.5 rounded-xl font-bold text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Request Comprehensive Scope Audit</span>
                <ArrowRight class="w-4 h-4" />
              </router-link>
            </div>

          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Calculator, ArrowRight } from 'lucide-vue-next'

const industryList = [
  { id: 'legal', name: 'Legal / Litigation' },
  { id: 'healthcare', name: 'Healthcare / Medical' },
  { id: 'realestate', name: 'Real Estate / Property' },
  { id: 'ecommerce', name: 'E-Commerce / Consumer' }
]

const selectedIndustry = ref(industryList[0])
const monthlyVisitors = ref(4500)
const avgClientValue = ref(2500)
</script>
