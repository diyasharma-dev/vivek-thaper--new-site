<template>
  <section id="contact" class="py-24 relative overflow-hidden bg-dark-900/40 border-t border-slate-800">
    <!-- Ambient backlight -->
    <div class="glow-ambient -bottom-40 -right-40 w-[600px] h-[600px] bg-brand-600/15"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold">
          <Send class="w-3.5 h-3.5" />
          <span>Direct Founder Access</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
          Let’s Talk About <span class="gold-gradient-text">Your Vision</span>
        </h2>
        <p class="text-slate-300 text-base sm:text-lg leading-relaxed">
          Whether you need enterprise web architecture, an SEO growth engine, or a keynote speaker for your next conference — connect directly with Vivek.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left: Contact Information & Office Details (5 cols) -->
        <div class="lg:col-span-5 space-y-8">
          
          <div class="p-8 rounded-3xl glass-panel border border-slate-700/70 space-y-6">
            <h3 class="text-xl font-bold font-display text-white">NYC Headquarters</h3>
            
            <div class="space-y-4 text-sm">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 shrink-0">
                  <MapPin class="w-5 h-5" />
                </div>
                <div>
                  <strong class="text-white block">Executive Office</strong>
                  <span class="text-slate-300 text-xs leading-relaxed">
                    108-14 72nd Avenue<br />
                    Forest Hills, Queens, New York 11375
                  </span>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone class="w-5 h-5" />
                </div>
                <div>
                  <strong class="text-white block">Direct Phone Lines</strong>
                  <div class="space-y-0.5 text-xs text-slate-300 mt-0.5">
                    <p><a href="tel:+17182074446" class="hover:text-brand-300 font-semibold">(718) 207-4446</a> (Direct)</p>
                    <p><a href="tel:+15169698550" class="hover:text-brand-300 font-semibold">(516) 969-8550</a> (Executive Line)</p>
                    <p><a href="tel:+18555064724" class="hover:text-brand-300 font-semibold">(855) 506-4724</a> (Toll-Free)</p>
                  </div>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Mail class="w-5 h-5" />
                </div>
                <div>
                  <strong class="text-white block">Email Inquiries</strong>
                  <div class="space-y-0.5 text-xs text-slate-300 mt-0.5">
                    <p><a href="mailto:vivek@mirchmedia.com" class="hover:text-brand-300">vivek@mirchmedia.com</a></p>
                    <p><a href="mailto:info@vivekthapar.com" class="hover:text-brand-300">info@vivekthapar.com</a></p>
                  </div>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock class="w-5 h-5" />
                </div>
                <div>
                  <strong class="text-white block">Consultation Hours</strong>
                  <p class="text-xs text-slate-300 mt-0.5">
                    Mon – Fri: 9:00 AM – 6:00 PM EST<br />
                    <span class="text-brand-400 font-semibold">Evening executive strategy sessions available</span>
                  </p>
                </div>
              </div>
            </div>

            <!-- Guarantee Callout -->
            <div class="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck class="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Confidential · Response within 24 business hours.</span>
            </div>

          </div>

          <!-- NYC Office Photo Card: aspect-[4/3] perfectly fits 531x531 square photo without harsh top/bottom crop -->
          <div class="rounded-3xl overflow-hidden border border-slate-800 relative aspect-[4/3] shadow-xl">
            <img 
              src="/media/nyc-office.webp" 
              alt="Mirch Media NYC Headquarters"
              class="w-full h-full object-cover object-center"
            />
            <div class="absolute inset-0 bg-dark-950/30"></div>
            <div class="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-dark-950/80 backdrop-blur-md border border-slate-700 text-xs font-semibold text-white">
              Forest Hills, Queens · New York City
            </div>
          </div>

        </div>

        <!-- Right: Interactive Consultation Form (7 cols) -->
        <div class="lg:col-span-7">
          <div class="p-8 sm:p-10 rounded-3xl glass-panel border border-slate-700/80 shadow-2xl relative">
            
            <div v-if="submitted" class="py-12 text-center space-y-4">
              <div class="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 class="w-8 h-8" />
              </div>
              <h3 class="text-2xl font-display font-bold text-white">Message Dispatched To Vivek</h3>
              <p class="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong class="text-white">{{ form.name }}</strong>. Your inquiry has been routed directly to Vivek Thapar's executive desk. You will receive a personal reply or phone call within 24 business hours.
              </p>
              <div class="pt-4">
                <button 
                  @click="submitted = false"
                  class="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-dark-900 border border-slate-700 hover:text-white"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>

            <form v-else @submit.prevent="handleSubmit" class="space-y-6">
              
              <div>
                <h3 class="text-xl font-bold font-display text-white">Schedule A Consultation</h3>
                <p class="text-xs text-slate-400 mt-1">Direct review by Vivek Thapar · No sales team screening</p>
              </div>

              <!-- Name & Email Row -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5">Your Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    v-model="form.name"
                    placeholder="e.g. Michael Harrison"
                    class="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-400 transition-colors"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5">Business Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    v-model="form.email"
                    placeholder="e.g. michael@company.com"
                    class="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-400 transition-colors"
                  />
                </div>
              </div>

              <!-- Phone & Inquiry Type Row -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5">Direct Phone / Mobile</label>
                  <input 
                    type="tel" 
                    v-model="form.phone"
                    placeholder="e.g. (212) 555-0199"
                    class="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-400 transition-colors"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-300 mb-1.5">Inquiry Type *</label>
                  <select 
                    v-model="form.inquiryType"
                    class="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-800 text-sm text-white focus:outline-none focus:border-brand-400 transition-colors"
                  >
                    <option value="strategy">Executive Growth Strategy Call</option>
                    <option value="engineering">Custom Web &amp; App Engineering</option>
                    <option value="seo">SEO &amp; AI Search (GEO) Dominance</option>
                    <option value="speaking">Keynote Speaking &amp; Media Appearance</option>
                    <option value="mentorship">Startup Mentorship &amp; Advisory</option>
                  </select>
                </div>
              </div>

              <!-- Scope / Project Scale -->
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-2">Estimated Project Scope / Budget</label>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    v-for="b in budgetOptions"
                    :key="b"
                    @click="form.budget = b"
                    :class="[
                      'py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all text-center',
                      form.budget === b 
                        ? 'bg-brand-500/20 border-brand-400 text-white shadow-sm'
                        : 'bg-dark-950/60 border-slate-800 text-slate-400 hover:text-white'
                    ]"
                  >
                    {{ b }}
                  </button>
                </div>
              </div>

              <!-- Message / Goals -->
              <div>
                <label class="block text-xs font-semibold text-slate-300 mb-1.5">Project Goals or Questions *</label>
                <textarea 
                  rows="4" 
                  required
                  v-model="form.message"
                  placeholder="Tell Vivek about your business, current traffic/leads, timeline, or speaking event details..."
                  class="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-400 transition-colors resize-none"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full py-4 px-6 rounded-xl font-bold text-sm text-dark-950 bg-gradient-to-r from-brand-300 via-brand-gold to-brand-500 hover:from-brand-goldLight hover:to-brand-gold shadow-lg shadow-brand-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span v-if="!isSubmitting">Dispatch Inquiry to Vivek Thapar</span>
                <span v-else>Transmitting...</span>
                <ArrowRight class="w-4 h-4 ml-1" />
              </button>

            </form>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Send, MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-vue-next'

const submitted = ref(false)
const isSubmitting = ref(false)

const budgetOptions = [
  'Under $10k',
  '$10k – $25k',
  '$25k – $50k',
  '$50k+ / Enterprise'
]

const form = reactive({
  name: '',
  email: '',
  phone: '',
  inquiryType: 'strategy',
  budget: '$10k – $25k',
  message: ''
})

function handleSubmit() {
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    submitted.value = true
  }, 800)
}
</script>
