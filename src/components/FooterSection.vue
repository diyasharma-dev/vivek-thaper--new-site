<template>
  <footer class="bg-dark-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
        
        <!-- Col 1 & 2: Brand & Bio (2 cols) -->
        <div class="lg:col-span-2 space-y-4">
          <router-link to="/" class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 via-brand-600 to-brand-800 p-[1px] shadow-lg shadow-brand-900/40">
              <div class="w-full h-full bg-dark-950 rounded-[11px] flex items-center justify-center font-display font-black text-lg gold-gradient-text tracking-tighter">
                VT
              </div>
            </div>
            <div>
              <span class="font-display font-bold text-lg text-white">Vivek Thapar</span>
              <p class="text-xs text-brand-400 font-medium">Founder &amp; CEO · Mirch Media NYC</p>
            </div>
          </router-link>

          <p class="text-xs text-slate-400 leading-relaxed max-w-sm">
            21+ years architecting digital marketing, high-performance web engineering, and enterprise project management. Proudly based in Forest Hills, Queens, New York City.
          </p>

          <div class="pt-2 flex items-center gap-3 text-slate-400">
            <a 
              href="https://www.linkedin.com/in/vivekthapar" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-lg bg-dark-900 border border-slate-800 hover:border-brand-500 flex items-center justify-center hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin class="w-4 h-4" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-lg bg-dark-900 border border-slate-800 hover:border-brand-500 flex items-center justify-center hover:text-white transition-colors"
              title="Twitter / X"
            >
              <Twitter class="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-lg bg-dark-900 border border-slate-800 hover:border-brand-500 flex items-center justify-center hover:text-white transition-colors"
              title="Instagram"
            >
              <Instagram class="w-4 h-4" />
            </a>
            <a 
              href="https://mirchmedia.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-lg bg-dark-900 border border-slate-800 hover:border-brand-500 flex items-center justify-center hover:text-white transition-colors"
              title="Mirch Media Agency"
            >
              <Globe class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Col 3: Navigation Pages -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Website Pages</h4>
          <ul class="space-y-2 text-xs text-slate-400">
            <li><router-link to="/" class="hover:text-brand-300 transition-colors">Home Page</router-link></li>
            <li><router-link to="/about" class="hover:text-brand-300 transition-colors">About Vivek</router-link></li>
            <li><router-link to="/services" class="hover:text-brand-300 transition-colors">Services &amp; Architecture</router-link></li>
            <li><router-link to="/case-studies" class="hover:text-brand-300 transition-colors">Case Studies</router-link></li>
            <li><router-link to="/speaking" class="hover:text-brand-300 transition-colors">Keynotes &amp; Speaking</router-link></li>
            <li><router-link to="/community" class="hover:text-brand-300 transition-colors">Civic &amp; Community</router-link></li>
            <li><router-link to="/blog" class="hover:text-brand-300 transition-colors">Blog &amp; Essays</router-link></li>
            <li><router-link to="/contact" class="hover:text-brand-300 transition-colors">Contact Office</router-link></li>
          </ul>
        </div>

        <!-- Col 4: Core Capabilities -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Core Focus</h4>
          <ul class="space-y-2 text-xs text-slate-400">
            <li><router-link to="/services" class="hover:text-brand-300 transition-colors">Digital Strategy</router-link></li>
            <li><router-link to="/services" class="hover:text-brand-300 transition-colors">Local SEO &amp; AI Search</router-link></li>
            <li><router-link to="/services" class="hover:text-brand-300 transition-colors">Custom Vue Engineering</router-link></li>
            <li><router-link to="/services" class="hover:text-brand-300 transition-colors">High-ROI Performance PPC</router-link></li>
            <li><router-link to="/services" class="hover:text-brand-300 transition-colors">Sales Funnel Automation</router-link></li>
            <li><router-link to="/case-studies" class="hover:text-brand-300 transition-colors">Verified Results</router-link></li>
          </ul>
        </div>

        <!-- Col 5: Executive Office -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Direct Contact</h4>
          <div class="space-y-2 text-xs text-slate-400">
            <p class="text-white font-semibold">Queens, NYC Office</p>
            <p>108-14 72nd Ave, Forest Hills, NY 11375</p>
            <p><a href="tel:+17182074446" class="hover:text-brand-300 font-mono">(718) 207-4446</a></p>
            <p><a href="tel:+15169698550" class="hover:text-brand-300 font-mono">(516) 969-8550</a></p>
            <p><a href="mailto:vivek@mirchmedia.com" class="hover:text-brand-300">vivek@mirchmedia.com</a></p>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>
          &copy; 2006–2026 Vivek Thapar. All Rights Reserved. Powered by <a href="https://mirchmedia.com" target="_blank" class="text-slate-400 hover:text-white underline">Mirch Media Inc.</a>
        </p>

        <button 
          @click="scrollToTop"
          class="flex items-center gap-1.5 text-slate-400 hover:text-brand-300 transition-colors cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp class="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { Linkedin, Twitter, Instagram, Globe, ArrowUp } from 'lucide-vue-next'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
