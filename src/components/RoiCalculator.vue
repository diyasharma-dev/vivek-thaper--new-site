<template>
  <section id="calculator" class="py-24 relative overflow-hidden bg-[#0c0d10] border-t border-white/[0.06]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 space-y-3">
        <span class="eyebrow-label">
          <Calculator class="w-3.5 h-3.5" />
          <span>Financial Modeling</span>
        </span>
        <h2 class="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight leading-tight">
          Executive Project Economics &amp; Revenue Scope Estimator
        </h2>
        <p class="text-neutral-400 text-base leading-relaxed font-sans">
          Calculate the tangible financial return of optimizing your conversion architecture, organic search dominance, and digital acquisition channels.
        </p>
      </div>

      <!-- Main Calculator Card -->
      <div class="card-architectural p-6 sm:p-10 shadow-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left: Input Controls (7 cols) -->
          <div class="lg:col-span-7 space-y-7">
            
            <!-- Industry Selection -->
            <div>
              <label class="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">
                1. Select Industry Sector
              </label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <button
                  v-for="ind in industryList"
                  :key="ind.id"
                  @click="selectedIndustry = ind"
                  :class="[
                    'p-3 rounded-lg text-xs font-medium border transition-all text-center cursor-pointer',
                    selectedIndustry.id === ind.id 
                      ? 'bg-[#c59b63]/20 border-[#c59b63] text-white font-semibold'
                      : 'bg-[#0c0d10] border-white/[0.08] text-neutral-400 hover:text-white'
                  ]"
                >
                  {{ ind.name }}
                </button>
              </div>
            </div>

            <!-- Monthly Visitors Slider -->
            <div class="p-5 rounded-xl bg-[#0c0d10] border border-white/[0.06]">
              <div class="flex items-center justify-between mb-3">
                <label class="text-xs font-mono uppercase tracking-wider text-neutral-300">
                  2. Current Monthly Visitors
                </label>
                <span class="text-base font-mono font-bold text-[#c59b63]">
                  {{ monthlyVisitors.toLocaleString() }} / mo
                </span>
              </div>
              <input 
                type="range" 
                v-model.number="monthlyVisitors" 
                min="500" 
                max="50000" 
                step="500"
                class="w-full h-1.5 bg-[#20232c] rounded-lg appearance-none cursor-pointer accent-[#c59b63]"
              />
              <div class="flex justify-between text-[11px] text-neutral-500 mt-2 font-mono">
                <span>500</span>
                <span>25,000</span>
                <span>50,000+</span>
              </div>
            </div>

            <!-- Average Customer Value -->
            <div class="p-5 rounded-xl bg-[#0c0d10] border border-white/[0.06]">
              <div class="flex items-center justify-between mb-3">
                <label class="text-xs font-mono uppercase tracking-wider text-neutral-300">
                  3. Average Value Per Client / Transaction
                </label>
                <span class="text-base font-mono font-bold text-[#c59b63]">
                  ${{ avgClientValue.toLocaleString() }}
                </span>
              </div>
              <input 
                type="range" 
                v-model.number="avgClientValue" 
                min="100" 
                max="10000" 
                step="100"
                class="w-full h-1.5 bg-[#20232c] rounded-lg appearance-none cursor-pointer accent-[#c59b63]"
              />
              <div class="flex justify-between text-[11px] text-neutral-500 mt-2 font-mono">
                <span>$100</span>
                <span>$5,000</span>
                <span>$10,000+</span>
              </div>
            </div>

            <p class="text-xs text-neutral-500 italic font-sans">
              *Model based on historical benchmark lifts across 500+ web architecture deployments (conservative conversion improvement of +1.4% to +2.8%).
            </p>

          </div>

          <!-- Right: Output Financial Card (5 cols) -->
          <div class="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-[#0c0d10] border border-white/[0.08] flex flex-col justify-between">
            <div class="space-y-6">
              
              <div class="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <span class="text-xs font-mono uppercase tracking-widest text-neutral-400">Projection Output</span>
                <span class="text-[11px] text-[#c59b63] font-mono font-medium">12-Month Horizon</span>
              </div>

              <!-- Estimated Monthly Additional Leads -->
              <div class="space-y-1">
                <span class="text-xs text-neutral-400 font-sans">Projected Additional Qualified Inbounds</span>
                <div class="text-2xl sm:text-3xl font-mono font-bold text-white">
                  +{{ Math.round(monthlyVisitors * 0.018) }}
                  <span class="text-xs text-neutral-400 font-normal">/ month</span>
                </div>
              </div>

              <!-- Additional Monthly Revenue -->
              <div class="space-y-1">
                <span class="text-xs text-neutral-400 font-sans">Estimated Additional Monthly Revenue</span>
                <div class="text-2xl sm:text-3xl font-mono font-bold text-[#c59b63]">
                  ${{ Math.round(monthlyVisitors * 0.018 * (avgClientValue * 0.15)).toLocaleString() }}
                  <span class="text-xs text-neutral-400 font-normal">/ mo</span>
                </div>
              </div>

              <!-- Total Annualized Enterprise Lift -->
              <div class="p-4 rounded-lg bg-[#12141a] border border-white/[0.08]">
                <span class="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                  Annualized Growth Upside
                </span>
                <div class="text-3xl sm:text-4xl font-serif text-white">
                  ${{ Math.round(monthlyVisitors * 0.018 * (avgClientValue * 0.15) * 12).toLocaleString() }}
                </div>
                <p class="text-[11px] text-neutral-400 mt-1 font-sans">
                  Cumulative annual revenue expansion based on Vivek Thapar's architectural baseline.
                </p>
              </div>

            </div>

            <!-- CTA -->
            <div class="pt-6 mt-6 border-t border-white/[0.06]">
              <router-link
                to="/contact"
                class="w-full btn-primary"
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
  { id: 'healthcare', name: 'Healthcare / Clinics' },
  { id: 'realestate', name: 'Real Estate / Property' },
  { id: 'ecommerce', name: 'E-Commerce / Retail' }
]

const selectedIndustry = ref(industryList[0])
const monthlyVisitors = ref(4500)
const avgClientValue = ref(2500)
</script>
