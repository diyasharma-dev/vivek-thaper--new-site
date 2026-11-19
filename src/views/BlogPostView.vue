<template>
  <div class="pt-20 sm:pt-24 pb-20 bg-transparent text-slate-100 min-h-screen">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Back Link -->
      <div class="mb-6 sm:mb-8">
        <router-link 
          to="/blog"
          class="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400 hover:text-red-400 transition-colors group"
        >
          <ArrowLeft class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Articles</span>
        </router-link>
      </div>

      <div v-if="!post" class="text-center py-20 card-glass rounded-3xl p-6 sm:p-8">
        <h1 class="text-2xl font-heading font-bold text-white">Article Not Found</h1>
        <p class="text-xs text-slate-400 mt-2 font-sans">The requested article could not be found.</p>
        <router-link to="/blog" class="mt-4 btn-primary text-xs">
          Return to Articles
        </router-link>
      </div>

      <article v-else class="space-y-6 sm:space-y-8 card-glass rounded-3xl p-6 sm:p-10 md:p-12 relative overflow-hidden">
        <!-- Ambient Top Glow -->
        <div class="absolute -top-24 right-10 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <!-- Article Header -->
        <header class="space-y-4 relative z-10">
          <div class="flex flex-wrap items-center gap-2.5">
            <span class="px-3.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-red-950/70 text-red-400 font-bold border border-red-500/30 shadow-glow-red">
              {{ post.category }}
            </span>
            <span class="text-xs font-mono text-slate-400 font-bold">{{ post.readTime }}</span>
          </div>

          <h1 class="hero-headline text-2xl sm:text-4xl lg:text-[42px] font-heading font-black text-white tracking-tight leading-[1.2] my-3">
            {{ post.title }}
          </h1>

          <div class="flex items-center gap-3 pt-3 pb-4 border-b border-white/10">
            <div class="w-11 h-11 rounded-full overflow-hidden border-2 border-red-500/50 shadow-glow-red shrink-0">
              <img src="/media/vivek-thapar-ceo.webp" alt="Vivek Thapar" class="w-full h-full object-cover object-top" />
            </div>
            <div class="min-w-0">
              <p class="text-xs font-heading font-bold text-white">{{ post.author }}</p>
              <p class="text-[11px] text-red-400 font-mono leading-snug">{{ post.date }} · Founder &amp; CEO, Mirch Media</p>
            </div>
          </div>
        </header>

        <!-- Featured Banner Image -->
        <div class="rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[16/9] border border-white/10 shadow-2xl relative bg-slate-900">
          <img :src="post.image" :alt="post.title" class="w-full h-full object-cover object-center filter contrast-[1.02]" loading="eager" decoding="async" />
        </div>

        <!-- Article Rich Body -->
        <div 
          class="prose max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-5 sm:space-y-6 font-sans break-words [&>h2]:text-xl sm:[&>h2]:text-2xl [&>h2]:font-heading [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-8 sm:[&>h2]:mt-10 [&>blockquote]:p-5 sm:[&>blockquote]:p-6 [&>blockquote]:rounded-2xl [&>blockquote]:bg-[#0c0e17]/90 [&>blockquote]:border-l-4 [&>blockquote]:border-red-500 [&>blockquote]:italic [&>blockquote]:text-slate-200 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2"
          v-html="post.content"
        ></div>

        <!-- Tags -->
        <div class="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
          <span class="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">Topics:</span>
          <span 
            v-for="tag in post.tags" 
            :key="tag"
            class="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-300 font-medium border border-white/10"
          >
            #{{ tag }}
          </span>
        </div>

        <!-- Author Box -->
        <div class="p-6 sm:p-8 rounded-2xl bg-[#0c0e17]/90 border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left shadow-lg">
          <div class="w-20 h-20 rounded-2xl overflow-hidden border-2 border-red-500/40 shadow-glow-red shrink-0">
            <img src="/media/vivek-thapar-ceo.webp" alt="Vivek Thapar" class="w-full h-full object-cover object-top" />
          </div>
          <div class="space-y-2">
            <h3 class="text-base font-heading font-bold text-white">About Vivek Thapar</h3>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Serial entrepreneur, growth strategist, and Founder &amp; CEO of Mirch Media in Queens, NYC. With 20+ years in technology and digital marketing, Vivek leads custom web engineering, search visibility, and civic initiatives across New York City.
            </p>
            <div class="pt-2">
              <router-link to="/contact" class="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-red-400 hover:text-red-300 transition-colors">
                <span>Connect With Vivek</span>
                <ArrowRight class="w-3.5 h-3.5" />
              </router-link>
            </div>
          </div>
        </div>

      </article>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeft, ArrowRight } from 'lucide-vue-next'
import { blogPosts } from '@/data/blogPosts.js'

const route = useRoute()
const post = computed(() => {
  return blogPosts.find(p => p.slug === route.params.slug)
})
</script>
