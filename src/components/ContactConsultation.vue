<template>
  <section id="contact" class="py-24 relative overflow-hidden bg-[#0c0d10] border-t border-white/[0.06]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-14 space-y-3">
        <span class="eyebrow-label">
          <Send class="w-3.5 h-3.5" />
          <span>Direct Advisory Access</span>
        </span>
        <h2 class="text-3xl sm:text-4xl font-serif font-normal text-white tracking-tight leading-tight">
          Initiate a Strategic Conversation with Vivek Thapar
        </h2>
        <p class="text-neutral-400 text-base leading-relaxed font-sans">
          Whether you need bespoke web application engineering, localized SEO supremacy, or a keynote speaker for your next summit — connect directly with Vivek.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left: Contact Information & Office Details (5 cols) -->
        <div class="lg:col-span-5 space-y-6">
          
          <div class="card-architectural p-8 space-y-6">
            <h3 class="text-xl font-serif text-white">NYC Executive Headquarters</h3>
            
            <div class="space-y-5 text-sm">
              <div class="flex items-start gap-4">
                <div class="w-9 h-9 rounded-lg bg-[#0c0d10] border border-white/[0.08] flex items-center justify-center text-[#c59b63] shrink-0 mt-0.5">
                  <MapPin class="w-4 h-4" />
                </div>
                <div>
                  <strong class="text-white block font-medium">Executive Office</strong>
                  <span class="text-neutral-400 text-xs leading-relaxed font-sans">
                    108-14 72nd Avenue<br />
                    Forest Hills, Queens, New York 11375
                  </span>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-9 h-9 rounded-lg bg-[#0c0d10] border border-white/[0.08] flex items-center justify-center text-[#c59b63] shrink-0 mt-0.5">
                  <Phone class="w-4 h-4" />
                </div>
                <div>
                  <strong class="text-white block font-medium">Direct Telephone Lines</strong>
                  <div class="space-y-0.5 text-xs text-neutral-400 mt-1 font-mono">
                    <p><a href="tel:+17182074446" class="hover:text-[#c59b63] text-neutral-300 font-medium">(718) 207-4446</a> <span class="text-neutral-500 font-sans">(Direct Desk)</span></p>
                    <p><a href="tel:+15169698550" class="hover:text-[#c59b63] text-neutral-300 font-medium">(516) 969-8550</a> <span class="text-neutral-500 font-sans">(Executive Line)</span></p>
                    <p><a href="tel:+18555064724" class="hover:text-[#c59b63] text-neutral-300 font-medium">(855) 506-4724</a> <span class="text-neutral-500 font-sans">(Toll-Free)</span></p>
                  </div>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-9 h-9 rounded-lg bg-[#0c0d10] border border-white/[0.08] flex items-center justify-center text-[#c59b63] shrink-0 mt-0.5">
                  <Mail class="w-4 h-4" />
                </div>
                <div>
                  <strong class="text-white block font-medium">Email Inquiries</strong>
                  <div class="space-y-0.5 text-xs text-neutral-400 mt-1 font-mono">
                    <p><a href="mailto:vivek@mirchmedia.com" class="hover:text-[#c59b63] text-neutral-300">vivek@mirchmedia.com</a></p>
                    <p><a href="mailto:info@vivekthapar.com" class="hover:text-[#c59b63] text-neutral-300">info@vivekthapar.com</a></p>
                  </div>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-9 h-9 rounded-lg bg-[#0c0d10] border border-white/[0.08] flex items-center justify-center text-[#c59b63] shrink-0 mt-0.5">
                  <Clock class="w-4 h-4" />
                </div>
                <div>
                  <strong class="text-white block font-medium">Office Hours</strong>
                  <p class="text-xs text-neutral-400 mt-1 font-sans">
                    Mon – Fri: 9:00 AM – 6:00 PM EST<br />
                    <span class="text-[#c59b63]">Private evening executive briefings by appointment</span>
                  </p>
                </div>
              </div>
            </div>

            <!-- Guarantee Callout -->
            <div class="pt-4 border-t border-white/[0.06] text-xs text-neutral-400 flex items-center gap-2 font-sans">
              <ShieldCheck class="w-4 h-4 text-[#c59b63] shrink-0" />
              <span>Strict Non-Disclosure Guarantee · Responses within 24 business hours.</span>
            </div>

          </div>

          <!-- NYC Office Photo Card -->
          <div class="rounded-xl overflow-hidden border border-white/[0.08] relative aspect-[4/3] bg-[#090a0d]">
            <img 
              src="/media/nyc-office.webp" 
              alt="Mirch Media NYC Headquarters"
              class="w-full h-full object-cover object-center filter contrast-[1.02]"
            />
            <div class="absolute inset-0 bg-[#0c0d10]/30 pointer-events-none"></div>
            <div class="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-[#0c0d10]/90 backdrop-blur-md border border-white/[0.1] text-[10px] font-mono uppercase tracking-wider text-neutral-300">
              Forest Hills, Queens · New York City
            </div>
          </div>

        </div>

        <!-- Right: Consultation Request Form (7 cols) -->
        <div class="lg:col-span-7">
          <div class="card-architectural p-8 sm:p-10 shadow-2xl relative">
            
            <div v-if="submitted" class="py-12 text-center space-y-4">
              <div class="w-14 h-14 rounded-full bg-[#c59b63]/15 border border-[#c59b63] text-[#c59b63] flex items-center justify-center mx-auto">
                <CheckCircle2 class="w-7 h-7" />
              </div>
              <h3 class="text-2xl font-serif text-white">Inquiry Received by Vivek Thapar</h3>
              <p class="text-sm text-neutral-400 max-w-md mx-auto leading-relaxed font-sans">
                Thank you, <strong class="text-white">{{ form.name }}</strong>. Your briefing has been transmitted directly to Vivek's desk. You will receive a personal reply or phone call within 24 business hours.
              </p>
              <div class="pt-4">
                <button 
                  @click="submitted = false"
                  class="btn-secondary text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            </div>

            <form v-else @submit.prevent="handleSubmit" class="space-y-6">
              
              <div>
                <h3 class="text-xl font-serif text-white">Schedule an Executive Consultation</h3>
                <p class="text-xs text-neutral-400 mt-1 font-sans">Direct review by Vivek Thapar · Zero junior screening</p>
              </div>

              <!-- Name & Email Row -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    v-model="form.name"
                    placeholder="e.g. David Sterling"
                    class="form-input-field"
                  />
                </div>
                <div>
                  <label class="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">Business Email *</label>
                  <input 
                    type="email" 
                    required 
                    v-model="form.email"
                    placeholder="e.g. david@firm.com"
                    class="form-input-field"
                  />
                </div>
              </div>

              <!-- Phone & Inquiry Type Row -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">Direct Phone / Mobile</label>
                  <input 
                    type="tel" 
                    v-model="form.phone"
                    placeholder="e.g. (212) 555-0199"
                    class="form-input-field font-mono"
                  />
                </div>
                <div>
                  <label class="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">Engagement Type *</label>
                  <select 
                    v-model="form.inquiryType"
                    class="form-input-field cursor-pointer"
                  >
                    <option value="strategy">Executive Growth Strategy Session</option>
                    <option value="engineering">Custom Web Architecture &amp; App Engineering</option>
                    <option value="seo">SEO &amp; Generative Engine (GEO) Dominance</option>
                    <option value="speaking">Keynote Speaking &amp; Media Appearance</option>
                    <option value="mentorship">Startup Advisory &amp; Technical Mentorship</option>
                  </select>
                </div>
              </div>

              <!-- Scope / Project Scale -->
              <div>
                <label class="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">Estimated Project Scope / Capital Allocation</label>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    v-for="b in budgetOptions"
                    :key="b"
                    @click="form.budget = b"
                    :class="[
                      'py-2.5 px-3 rounded-md text-xs font-medium border transition-all text-center cursor-pointer',
                      form.budget === b 
                        ? 'bg-[#c59b63]/20 border-[#c59b63] text-white font-semibold'
                        : 'bg-[#0c0d10] border-white/[0.08] text-neutral-400 hover:text-white'
                    ]"
                  >
                    {{ b }}
                  </button>
                </div>
              </div>

              <!-- Message / Goals -->
              <div>
                <label class="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">Project Objectives or Context *</label>
                <textarea 
                  rows="4" 
                  required
                  v-model="form.message"
                  placeholder="Tell Vivek about your business, current traffic/leads, timeline, or speaking engagement details..."
                  class="form-input-field resize-none font-sans"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full btn-primary py-3.5 cursor-pointer disabled:opacity-50"
              >
                <span v-if="!isSubmitting">Dispatch Consultation Request to Vivek Thapar</span>
                <span v-else>Transmitting Briefing...</span>
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
  }, 700)
}
</script>
