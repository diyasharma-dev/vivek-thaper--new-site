<template>
  <footer class="bg-[#090a0d] border-t border-white/[0.08] pt-16 pb-12 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
        
        <!-- Col 1 & 2: Brand & Bio (2 cols) -->
        <div class="lg:col-span-2 space-y-4">
          <router-link to="/" class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-lg bg-[#12141a] border border-white/[0.1] flex items-center justify-center font-serif font-bold text-base text-[#c59b63]">
              VT
            </div>
            <div>
              <span class="font-sans font-semibold text-base text-white">Vivek Thapar</span>
              <p class="text-xs text-[#c59b63] font-mono">Founder &amp; CEO · Mirch Media NYC</p>
            </div>
          </router-link>

          <p class="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-sm font-sans">
            21+ years architecting digital marketing, high-performance web engineering, and enterprise project management. Proudly based in Forest Hills, Queens, New York City.
          </p>

          <div class="pt-2 flex items-center gap-2.5 text-neutral-300">
            <a 
              href="https://www.linkedin.com/in/vivekthapar" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-md bg-[#12141a] border border-white/[0.08] hover:border-[#c59b63] flex items-center justify-center hover:text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin class="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-md bg-[#12141a] border border-white/[0.08] hover:border-[#c59b63] flex items-center justify-center hover:text-white transition-colors"
              title="Twitter / X"
            >
              <Twitter class="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-md bg-[#12141a] border border-white/[0.08] hover:border-[#c59b63] flex items-center justify-center hover:text-white transition-colors"
              title="Instagram"
            >
              <Instagram class="w-3.5 h-3.5" />
            </a>
            <a 
              href="https://mirchmedia.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-8 h-8 rounded-md bg-[#12141a] border border-white/[0.08] hover:border-[#c59b63] flex items-center justify-center hover:text-white transition-colors"
              title="Mirch Media Agency"
            >
              <Globe class="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <!-- Col 3: Navigation Pages -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-neutral-200 font-semibold mb-4">Navigation</h4>
          <ul class="space-y-2 text-xs sm:text-sm text-neutral-300 font-sans">
            <li><router-link to="/" class="hover:text-white transition-colors">Home Page</router-link></li>
            <li><router-link to="/about" class="hover:text-white transition-colors">About Vivek</router-link></li>
            <li><router-link to="/services" class="hover:text-white transition-colors">Services &amp; Architecture</router-link></li>
            <li><router-link to="/case-studies" class="hover:text-white transition-colors">Case Studies</router-link></li>
            <li><router-link to="/speaking" class="hover:text-white transition-colors">Keynotes &amp; Speaking</router-link></li>
            <li><router-link to="/community" class="hover:text-white transition-colors">Civic &amp; Community</router-link></li>
            <li><router-link to="/blog" class="hover:text-white transition-colors">Essays &amp; Insights</router-link></li>
            <li><router-link to="/contact" class="hover:text-white transition-colors">Contact Office</router-link></li>
          </ul>
        </div>

        <!-- Col 4: Core Capabilities -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-neutral-200 font-semibold mb-4">Capabilities</h4>
          <ul class="space-y-2 text-xs sm:text-sm text-neutral-300 font-sans">
            <li><router-link to="/services" class="hover:text-white transition-colors">Digital Strategy</router-link></li>
            <li><router-link to="/services" class="hover:text-white transition-colors">Local SEO &amp; AI Search</router-link></li>
            <li><router-link to="/services" class="hover:text-white transition-colors">Custom Vue Engineering</router-link></li>
            <li><router-link to="/services" class="hover:text-white transition-colors">High-ROI Performance PPC</router-link></li>
            <li><router-link to="/services" class="hover:text-white transition-colors">Conversion Funnel Systems</router-link></li>
            <li><router-link to="/case-studies" class="hover:text-white transition-colors">Verified Results</router-link></li>
          </ul>
        </div>

        <!-- Col 5: Executive Office -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-neutral-200 font-semibold mb-4">NYC Office</h4>
          <div class="space-y-2 text-xs sm:text-sm text-neutral-300 font-sans">
            <p class="text-white font-medium">Queens Headquarters</p>
            <p class="text-neutral-300">108-14 72nd Ave, Forest Hills, NY 11375</p>
            <p><a href="tel:+17182074446" class="hover:text-[#c59b63] font-mono text-neutral-200">(718) 207-4446</a></p>
            <p><a href="tel:+15169698550" class="hover:text-[#c59b63] font-mono text-neutral-200">(516) 969-8550</a></p>
            <p class="pt-2"><a href="mailto:vivek@mirchmedia.com" class="hover:text-[#c59b63] font-mono text-[#c59b63] font-medium">vivek@mirchmedia.com</a></p>
          </div>
        </div>

      </div>

      <!-- Copyright & Bottom Bar -->
      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-sans">
        <div>
          &copy; {{ new Date().getFullYear() }} Vivek Thapar &amp; Mirch Media. All rights reserved.
        </div>
        <div class="flex items-center gap-6">
          <router-link to="/contact" class="hover:text-neutral-200 transition-colors">Executive Inquiries</router-link>
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
