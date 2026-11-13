<template>
  <div class="pt-28 pb-20 bg-slate-50/50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Back Link -->
      <div class="mb-8">
        <router-link 
          to="/blog"
          class="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-600 hover:text-slate-950 transition-colors"
        >
          <ArrowLeft class="w-4 h-4" />
          <span>Back to All Essays</span>
        </router-link>
      </div>

      <div v-if="!post" class="text-center py-20 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <h1 class="text-2xl font-serif font-bold text-slate-900">Essay Not Found</h1>
        <p class="text-xs text-slate-500 mt-2 font-sans">The requested essay could not be found.</p>
        <router-link to="/blog" class="mt-4 btn-primary text-xs">
          Return to Essays
        </router-link>
      </div>

      <article v-else class="space-y-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-12 shadow-md">
        
        <!-- Article Header -->
        <header class="space-y-4">
          <div class="flex items-center gap-2.5">
            <span class="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-amber-50 text-amber-800 font-bold border border-amber-200/80 shadow-2xs">
              {{ post.category }}
            </span>
            <span class="text-xs font-mono text-slate-500 font-medium">{{ post.readTime }}</span>
          </div>

          <h1 class="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-slate-900 tracking-tight leading-tight">
            {{ post.title }}
          </h1>

          <div class="flex items-center gap-3 pt-3 pb-4 border-b border-slate-100">
            <div class="w-11 h-11 rounded-full overflow-hidden border border-slate-200 shadow-2xs shrink-0">
              <img src="/media/vivek-thapar-ceo.webp" alt="Vivek Thapar" class="w-full h-full object-cover object-top" />
            </div>
            <div>
              <p class="text-xs font-bold text-slate-900 font-sans">{{ post.author }}</p>
              <p class="text-[11px] text-slate-500 font-mono">{{ post.date }} · Founder &amp; CEO, Mirch Media</p>
            </div>
          </div>
        </header>

        <!-- Featured Banner Image -->
        <div class="rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[2/1] max-h-[440px] border border-slate-200 shadow-sm relative bg-slate-100">
          <img :src="post.image" :alt="post.title" class="w-full h-full object-cover object-center filter contrast-[1.02]" />
        </div>

        <!-- Article Rich Body -->
        <div 
          class="prose max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6 font-sans [&>h2]:text-2xl [&>h2]:font-serif [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-10 [&>blockquote]:p-6 [&>blockquote]:rounded-xl [&>blockquote]:bg-amber-50/60 [&>blockquote]:border-l-4 [&>blockquote]:border-amber-600 [&>blockquote]:italic [&>blockquote]:text-slate-900 [&>blockquote]:font-serif [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2"
          v-html="post.content"
        ></div>

        <!-- Tags -->
        <div class="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <span class="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">Topics:</span>
          <span 
            v-for="tag in post.tags" 
            :key="tag"
            class="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 text-slate-700 font-medium border border-slate-200"
          >
            #{{ tag }}
          </span>
        </div>

        <!-- Author Box -->
        <div class="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left shadow-2xs">
          <div class="w-20 h-20 rounded-2xl overflow-hidden border border-slate-200 shadow-xs shrink-0">
            <img src="/media/vivek-thapar-ceo.webp" alt="Vivek Thapar" class="w-full h-full object-cover object-top" />
          </div>
          <div class="space-y-2">
            <h3 class="text-base font-serif font-bold text-slate-900">About Vivek Thapar</h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              Serial entrepreneur, growth strategist, and Founder &amp; CEO of Mirch Media in Queens, NYC. With 21+ years in technology and digital engineering, Vivek has directed 500+ digital deliverables and serves on various community and fraternal boards.
            </p>
            <div class="pt-2">
              <router-link to="/contact" class="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 transition-colors">
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
import { blogPosts } from '@/data/blogPosts'

const route = useRoute()
const post = computed(() => {
  return blogPosts.find(p => p.slug === route.params.slug)
})
</script>
