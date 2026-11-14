<template>
  <footer class="bg-slate-950 border-t border-slate-800/90 pt-14 sm:pt-16 pb-12 relative overflow-hidden text-slate-300">
    <!-- Warm subtle ambient glow in footer -->
    <div class="absolute -bottom-24 -left-12 w-96 h-96 bg-gradient-to-tr from-orange-500/10 via-amber-400/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -top-24 right-0 w-80 h-80 bg-gradient-to-bl from-blue-600/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
        
        <!-- Col 1 & 2: Brand & Bio (2 cols) -->
        <div class="sm:col-span-2 space-y-4">
          <router-link to="/" class="flex items-center gap-3 group">
            <!-- Razor-Sharp Vector Brand Logo -->
            <div class="relative w-10 h-10 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 p-1.5 flex items-center justify-center shadow-sm">
              <svg viewBox="0 0 36 36" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 7L13 27H16.5L24.5 7H20.5L14.8 22.2L9 7H5Z" fill="#FFFFFF"/>
                <path d="M16 10H30V13.5H25V27H21V13.5H16V10Z" fill="#F97316"/>
                <circle cx="28.5" cy="7.5" r="2" fill="#FBBF24"/>
              </svg>
            </div>
            <div>
              <span class="font-heading font-extrabold text-lg text-white group-hover:text-brand-400 transition-colors">
                Vivek Thapar
              </span>
              <p class="text-xs text-brand-400 font-mono font-bold tracking-tight">
                Founder &amp; CEO · Mirch Media NYC
              </p>
            </div>
          </router-link>

          <p class="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-sans">
            20+ years architecting digital marketing, high-performance web engineering, and enterprise project management. Based in Forest Hills, Queens, New York City.
          </p>

          <!-- Mirch Media Agency Lockup -->
          <div class="pt-2">
            <a 
              href="https://www.mirchmedia.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all group"
            >
              <div class="h-6 px-2 py-0.5 bg-white rounded flex items-center justify-center">
                <img src="/media/mirch-logo.webp" alt="Mirch Media" class="h-4 w-auto object-contain" />
              </div>
              <div class="text-[11px] leading-tight">
                <span class="text-slate-200 font-bold block group-hover:text-brand-400 transition-colors">Mirch Media Official</span>
                <span class="text-slate-500 font-mono text-[10px]">Where Media Meets Technology</span>
              </div>
            </a>
          </div>

          <!-- Social Links -->
          <div class="pt-2 flex items-center gap-2 text-slate-400">
            <a 
              href="https://www.linkedin.com/in/vivekthapar" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-brand-400 flex items-center justify-center hover:text-white transition-all shadow-2xs"
              title="LinkedIn Profile"
            >
              <Linkedin class="w-4 h-4" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-brand-400 flex items-center justify-center hover:text-white transition-all shadow-2xs"
              title="Twitter / X"
            >
              <Twitter class="w-4 h-4" />
            </a>
            <a 
              href="https://instagram.com/mirchmedia" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-brand-400 flex items-center justify-center hover:text-white transition-all shadow-2xs"
              title="Instagram"
            >
              <Instagram class="w-4 h-4" />
            </a>
            <a 
              href="https://www.mirchmedia.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 hover:border-brand-400 flex items-center justify-center hover:text-white transition-all shadow-2xs"
              title="Mirch Media Agency"
            >
              <Globe class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Col 3: Navigation Pages -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4">Navigation</h4>
          <ul class="space-y-2.5 text-xs sm:text-sm text-slate-400 font-sans">
            <li><router-link to="/" class="hover:text-white transition-colors">Home Portfolio</router-link></li>
            <li><router-link to="/case-studies" class="hover:text-white transition-colors">Selected Work</router-link></li>
            <li><router-link to="/about" class="hover:text-white transition-colors">About Vivek</router-link></li>
            <li><router-link to="/services" class="hover:text-white transition-colors">Capabilities &amp; Stack</router-link></li>
            <li><router-link to="/speaking" class="hover:text-white transition-colors">Keynotes &amp; Speaking</router-link></li>
            <li><router-link to="/community" class="hover:text-white transition-colors">Civic &amp; Community</router-link></li>
            <li><router-link to="/blog" class="hover:text-white transition-colors">Essays &amp; Insights</router-link></li>
          </ul>
        </div>

        <!-- Col 4: Core Capabilities -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4">Capabilities</h4>
          <ul class="space-y-2.5 text-xs sm:text-sm text-slate-400 font-sans">
            <li><router-link to="/services" class="hover:text-white transition-colors">Custom Vue Engineering</router-link></li>
            <li><router-link to="/services" class="hover:text-white transition-colors">Local 3-Pack SEO</router-link></li>
            <li><router-link to="/services" class="hover:text-white transition-colors">Generative AI Search (GEO)</router-link></li>
            <li><router-link to="/services" class="hover:text-white transition-colors">High-ROI Paid Ads</router-link></li>
            <li><router-link to="/services" class="hover:text-white transition-colors">Conversion Architecture</router-link></li>
            <li><router-link to="/case-studies" class="hover:text-white transition-colors">Verified Case Studies</router-link></li>
          </ul>
        </div>

        <!-- Col 5: Executive Office -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold mb-4">NYC Studio</h4>
          <div class="space-y-2 text-xs sm:text-sm text-slate-400 font-sans">
            <p class="text-white font-bold font-heading">Queens Headquarters</p>
            <p class="text-slate-400">108-14 72nd Ave, Forest Hills, NY 11375</p>
            <p><a href="tel:+17182074446" class="hover:text-brand-400 font-mono text-slate-300 font-bold">(718) 207-4446</a></p>
            <p><a href="tel:+15169698550" class="hover:text-brand-400 font-mono text-slate-300 font-bold">(516) 969-8550</a></p>
            <p class="pt-2"><a href="mailto:vivek@mirchmedia.com" class="hover:underline font-mono text-brand-400 font-bold">vivek@mirchmedia.com</a></p>
          </div>
        </div>

      </div>

      <!-- Copyright & Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
        <div>
          &copy; {{ new Date().getFullYear() }} Vivek Thapar · Founder &amp; CEO, Mirch Media. All rights reserved.
        </div>
        <div class="flex items-center gap-4 sm:gap-6">
          <router-link to="/contact" class="hover:text-slate-300 transition-colors">Direct Desk Access</router-link>
          <span>·</span>
          <span>Forest Hills, Queens, NYC</span>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { Linkedin, Twitter, Instagram, Globe } from 'lucide-vue-next'
</script>