<template>
  <div class="pt-20 sm:pt-24 pb-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Back Link -->
      <div class="mb-8">
        <router-link 
          to="/blog"
          class="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-600 hover:text-orange-600 transition-colors group"
        >
          <ArrowLeft class="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Essays</span>
        </router-link>
      </div>

      <div v-if="!post" class="text-center py-20 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <h1 class="text-2xl font-heading font-bold text-slate-900">Essay Not Found</h1>
        <p class="text-xs text-slate-500 mt-2 font-sans">The requested essay could not be found.</p>
        <router-link to="/blog" class="mt-4 btn-primary text-xs">
          Return to Essays
        </router-link>
      </div>

      <article v-else class="space-y-8 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-12 shadow-md relative overflow-hidden">
        <!-- Subtle Top Color Glow -->
        <div class="absolute -top-24 right-10 w-72 h-72 bg-gradient-to-br from-orange-400/10 via-amber-300/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <!-- Article Header -->
        <header class="space-y-4 relative z-10">
          <div class="flex items-center gap-2.5">
            <span class="px-3.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-gradient-to-r from-orange-50 to-amber-50 text-orange-700 font-bold border border-orange-200/80 shadow-2xs">
              {{ post.category }}
            </span>
            <span class="text-xs font-mono text-slate-500 font-bold">{{ post.readTime }}</span>
          </div>

          <h1 class="text-3xl sm:text-4xl lg:text-[44px] font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
            {{ post.title }}
          </h1>

          <div class="flex items-center gap-3 pt-3 pb-4 border-b border-slate-100">
            <div class="w-11 h-11 rounded-full overflow-hidden border-2 border-orange-300 shadow-2xs shrink-0">
              <img src="/media/vivek-thapar-ceo.webp" alt="Vivek Thapar" class="w-full h-full object-cover object-top" />
            </div>
            <div>
              <p class="text-xs font-heading font-bold text-slate-900">{{ post.author }}</p>
              <p class="text-[11px] text-orange-600 font-mono">{{ post.date }} · Founder &amp; CEO, Mirch Media</p>
            </div>
          </div>
        </header>

        <!-- Featured Banner Image -->
        <div class="rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[2/1] max-h-[440px] border border-slate-200 shadow-sm relative bg-slate-100">
          <img :src="post.image" :alt="post.title" class="w-full h-full object-cover object-center filter contrast-[1.02]" />
        </div>

        <!-- Article Rich Body -->
        <div 
          class="prose max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6 font-sans [&>h2]:text-2xl [&>h2]:font-heading [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-10 [&>blockquote]:p-6 [&>blockquote]:rounded-2xl [&>blockquote]:bg-orange-50/70 [&>blockquote]:border-l-4 [&>blockquote]:border-orange-500 [&>blockquote]:italic [&>blockquote]:text-slate-900 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2"
          v-html="post.content"
        ></div>

        <!-- Tags -->
        <div class="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <span class="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">Topics:</span>
          <span 
            v-for="tag in post.tags" 
            :key="tag"
            class="px-3 py-1 rounded-lg text-xs font-mono bg-orange-50 text-orange-800 font-semibold border border-orange-200/80"
          >
            #{{ tag }}
          </span>
        </div>

        <!-- Author Box -->
        <div class="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white via-orange-50/30 to-amber-50/40 border border-orange-200/80 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left shadow-sm">
          <div class="w-20 h-20 rounded-2xl overflow-hidden border-2 border-orange-300 shadow-sm shrink-0">
            <img src="/media/vivek-thapar-ceo.webp" alt="Vivek Thapar" class="w-full h-full object-cover object-top" />
          </div>
          <div class="space-y-2">
            <h3 class="text-base font-heading font-bold text-slate-900">About Vivek Thapar</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Serial entrepreneur, growth strategist, and Founder &amp; CEO of Mirch Media in Queens, NYC. With 20+ years in technology and digital engineering, Vivek has directed 500+ digital deliverables and serves on various community and fraternal boards.
            </p>
            <div class="pt-2">
              <router-link to="/contact" class="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-orange-600 hover:text-orange-700 transition-colors">
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
