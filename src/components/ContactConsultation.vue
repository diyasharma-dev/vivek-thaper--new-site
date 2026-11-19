<template>
  <section id="contact" class="py-20 sm:py-24 md:py-28 relative overflow-hidden border-b border-white/[0.08]">
    <!-- Ambient Lighting Layer -->
    <div class="absolute bottom-10 left-10 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>
    <div class="absolute top-10 right-10 w-[400px] h-[400px] bg-amber-500/[0.06] rounded-full blur-[140px] pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="max-w-3xl mb-12 sm:mb-16 space-y-3">
        <div class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
          <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span>Direct Connect &amp; Office</span>
        </div>
        <h2 class="hero-headline text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
          Connect Directly with <span class="gradient-text-brand">Vivek Thapar</span>
        </h2>
        <p class="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
          Whether you need custom web development, digital growth strategy, or hands-on project management — reach out directly.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        
        <!-- Left: Contact Information & Office Details (5 cols) -->
        <div class="lg:col-span-5 space-y-6">
          
          <div class="card-glass p-6 sm:p-8 space-y-6 shadow-glow-card">
            <div>
              <span class="text-[11px] font-mono uppercase tracking-widest text-red-400 font-bold block mb-1">Office Headquarters</span>
              <h3 class="text-lg sm:text-xl font-heading font-bold text-white">Queens Executive Studio</h3>
            </div>
            
            <div class="space-y-5 text-sm">
              <!-- Physical Office Location -->
              <div class="flex items-start gap-3.5">
                <div class="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                  <MapPin class="w-4 h-4" />
                </div>
                <div class="min-w-0">
                  <strong class="text-white block font-bold font-heading text-sm">Forest Hills Headquarters</strong>
                  <span class="text-slate-300 text-xs leading-relaxed font-sans block mt-0.5">
                    108-14 72nd Avenue<br />
                    Forest Hills, Queens, New York 11375
                  </span>
                  <span class="text-[11px] font-mono text-slate-400 block mt-1">Austin Street &amp; E/F Subway Lines</span>
                </div>
              </div>

              <!-- Direct Telephones -->
              <div class="flex items-start gap-3.5">
                <div class="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                  <Phone class="w-4 h-4" />
                </div>
                <div class="min-w-0">
                  <strong class="text-white block font-bold font-heading text-sm">Telephone Lines</strong>
                  <div class="space-y-1 text-xs mt-1 font-mono">
                    <p class="flex items-baseline gap-1.5">
                      <a href="tel:+17182074446" class="text-white hover:text-red-400 font-bold transition-colors">(718) 207-4446</a>
                      <span class="text-slate-400 font-sans text-[11px]">(Direct Desk)</span>
                    </p>
                    <p class="flex items-baseline gap-1.5">
                      <a href="tel:+15169698550" class="text-slate-300 hover:text-red-400 font-medium transition-colors">(516) 969-8550</a>
                      <span class="text-slate-400 font-sans text-[11px]">(Mirch Media Office)</span>
                    </p>
                  </div>
                </div>
              </div>

              <!-- Direct Email -->
              <div class="flex items-start gap-3.5">
                <div class="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                  <Mail class="w-4 h-4" />
                </div>
                <div class="min-w-0">
                  <strong class="text-white block font-bold font-heading text-sm">Direct Inbox</strong>
                  <a href="mailto:vivek@mirchmedia.com" class="text-red-400 hover:text-red-300 font-mono text-xs font-bold block mt-1 transition-colors break-all">
                    vivek@mirchmedia.com
                  </a>
                  <span class="text-[11px] font-mono text-slate-400 block mt-0.5">Confidential direct founder inbox</span>
                </div>
              </div>

              <!-- Office Hours -->
              <div class="flex items-start gap-3.5">
                <div class="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                  <Clock class="w-4 h-4" />
                </div>
                <div class="min-w-0">
                  <strong class="text-white block font-bold font-heading text-sm">Availability</strong>
                  <span class="text-slate-300 text-xs font-sans block mt-0.5">
                    Monday – Friday: 9:00 AM – 6:00 PM EST
                  </span>
                  <span class="text-[11px] font-mono text-slate-400 block mt-0.5">Evening briefings by appointment</span>
                </div>
              </div>
            </div>

            <!-- Professional Commitments -->
            <div class="pt-4 border-t border-white/[0.08] text-xs text-slate-300 space-y-2 font-sans">
              <div class="flex items-start gap-2">
                <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span class="font-medium text-slate-200">Direct Founder Review — Hands-on project assessment</span>
              </div>
              <div class="flex items-start gap-2">
                <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span class="font-medium text-slate-200">Clear response within one business day</span>
              </div>
            </div>

          </div>

        </div>

        <!-- Right: Consultation Request Form (7 cols) -->
        <div class="lg:col-span-7 min-w-0">
          <div class="card-glass p-6 sm:p-8 md:p-10 shadow-glow-card relative">
            
            <div v-if="submitted" class="py-10 text-center space-y-4">
              <div class="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 class="w-7 h-7" />
              </div>
              <h3 class="text-xl sm:text-2xl font-heading font-bold text-white">Message Received</h3>
              <p class="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-sans">
                Thank you, <strong class="text-white font-bold">{{ form.name }}</strong>. Your message has been sent directly to Vivek. You will receive a response within one business day.
              </p>
              <div class="pt-3">
                <button 
                  @click="submitted = false"
                  class="btn-primary text-xs"
                >
                  Send Another Message
                </button>
              </div>
            </div>

            <form v-else @submit.prevent="handleSubmit" class="space-y-5">
              
              <div>
                <h3 class="text-lg sm:text-2xl font-heading font-bold text-white">Start a Project Conversation</h3>
                <p class="text-xs text-slate-400 mt-1 font-sans">Confidential inquiry · Direct review by Vivek Thapar</p>
              </div>

              <!-- Name & Email Row -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-1.5">Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    v-model="form.name"
                    placeholder="e.g. David Sterling"
                    class="form-input-field"
                  />
                </div>
                <div>
                  <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-1.5">Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    v-model="form.email"
                    placeholder="e.g. david@firm.com"
                    class="form-input-field"
                  />
                </div>
              </div>

              <!-- Phone & Inquiry Scope Row -->
              <div>
                <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-1.5">Phone Number (Optional)</label>
                <input 
                  type="tel" 
                  v-model="form.phone"
                  placeholder="e.g. (718) 555-0199"
                  class="form-input-field font-mono"
                />
              </div>

              <!-- Interactive Scope Selector Chips -->
              <div>
                <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">Project Scope *</label>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    v-for="scope in scopeOptions"
                    :key="scope.value"
                    @click="form.inquiryType = scope.value"
                    :class="[
                      'px-3 py-2.5 rounded-xl text-xs font-heading font-bold border transition-all text-center cursor-pointer',
                      form.inquiryType === scope.value
                        ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white border-red-500 shadow-glow-red'
                        : 'bg-white/[0.04] text-slate-300 border-white/10 hover:border-white/20 hover:text-white'
                    ]"
                  >
                    {{ scope.label }}
                  </button>
                </div>
              </div>

              <!-- Message / Goals -->
              <div>
                <label class="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-1.5">Project Details / Goals *</label>
                <textarea 
                  rows="4" 
                  required
                  v-model="form.message"
                  placeholder="Tell Vivek about your project requirements, current challenges, timeline, or objectives..."
                  class="form-input-field resize-none font-sans"
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="btn-primary w-full py-3.5 text-xs sm:text-sm font-bold shadow-glow-red hover:shadow-glow-red-lg disabled:opacity-50"
              >
                <span v-if="!isSubmitting">Send Direct Inquiry</span>
                <span v-else>Sending Message...</span>
                <ArrowRight class="w-4 h-4" />
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
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight } from 'lucide-vue-next'

const submitted = ref(false)
const isSubmitting = ref(false)

const scopeOptions = [
  { value: 'web', label: 'Web & Apps' },
  { value: 'seo', label: 'SEO & Maps' },
  { value: 'strategy', label: 'PM & Strategy' },
  { value: 'speaking', label: 'Keynotes & Press' }
]

const form = reactive({
  name: '',
  email: '',
  phone: '',
  inquiryType: 'web',
  message: ''
})

function handleSubmit() {
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    submitted.value = true
  }, 600)
}
</script>
