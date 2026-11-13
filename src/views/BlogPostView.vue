<template>
  <div class="pt-28 pb-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Back Link -->
      <div class="mb-8">
        <router-link 
          to="/blog"
          class="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-brand-300 transition-colors"
        >
          <ArrowLeft class="w-4 h-4" />
          <span>Back to All Articles</span>
        </router-link>
      </div>

      <div v-if="!post" class="text-center py-20">
        <h1 class="text-2xl font-bold text-white">Article Not Found</h1>
        <p class="text-xs text-slate-400 mt-2">The requested essay could not be found.</p>
        <router-link to="/blog" class="mt-4 inline-block px-4 py-2 rounded-lg bg-brand-500 text-dark-950 font-bold text-xs">
          Return to Blog
        </router-link>
      </div>

      <article v-else class="space-y-8">
        
        <!-- Article Header -->
        <header class="space-y-4">
          <div class="flex items-center gap-2.5">
            <span class="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-brand-500/10 text-brand-400 border border-brand-500/20">
              {{ post.category }}
            </span>
            <span class="text-xs text-slate-400">{{ post.readTime }}</span>
          </div>

          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            {{ post.title }}
          </h1>

          <div class="flex items-center gap-3 pt-2 pb-4 border-b border-slate-800">
            <div class="w-10 h-10 rounded-full overflow-hidden border border-brand-500/40 shrink-0">
              <img src="/media/vivek-thapar-ceo.webp" alt="Vivek Thapar" class="w-full h-full object-cover object-top" />
            </div>
            <div>
              <p class="text-xs font-bold text-white">{{ post.author }}</p>
              <p class="text-[11px] text-slate-400">{{ post.date }} · Founder &amp; CEO, Mirch Media</p>
            </div>
          </div>
        </header>

        <!-- Featured Banner Image: balanced aspect ratio avoiding harsh crops -->
        <div class="rounded-3xl overflow-hidden aspect-[16/10] sm:aspect-[2/1] max-h-[440px] border border-slate-700/80 shadow-2xl relative bg-dark-950">
          <img :src="post.image" :alt="post.title" class="w-full h-full object-cover object-center" />
        </div>

        <!-- Article Rich Body -->
        <div 
          class="prose prose-invert prose-slate max-w-none text-slate-300 text-sm leading-relaxed space-y-6 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:font-display [&>h2]:mt-8 [&>blockquote]:p-5 [&>blockquote]:rounded-2xl [&>blockquote]:bg-dark-900 [&>blockquote]:border-l-4 [&>blockquote]:border-l-brand-400 [&>blockquote]:italic [&>blockquote]:text-slate-200 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2"
          v-html="post.content"
        ></div>

        <!-- Tags -->
        <div class="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
          <span class="text-xs text-slate-500 font-bold uppercase tracking-wider">Topics:</span>
          <span 
            v-for="tag in post.tags" 
            :key="tag"
            class="px-2.5 py-1 rounded-lg text-xs font-medium bg-dark-900 text-brand-300 border border-slate-800"
          >
            #{{ tag }}
          </span>
        </div>

        <!-- Author Box -->
        <div class="p-6 sm:p-8 rounded-3xl glass-panel border border-slate-700/70 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <div class="w-20 h-20 rounded-2xl overflow-hidden border-2 border-brand-500/40 shrink-0">
            <img src="/media/vivek-thapar-ceo.webp" alt="Vivek Thapar" class="w-full h-full object-cover object-top" />
          </div>
          <div class="space-y-2">
            <h3 class="text-base font-bold text-white font-display">About Vivek Thapar</h3>
            <p class="text-xs text-slate-300 leading-relaxed">
              Serial entrepreneur, growth strategist, and Founder &amp; CEO of Mirch Media in Queens, NYC. With 21+ years in tech and digital engineering, Vivek has directed 500+ digital deliverables and serves on various community and fraternal boards.
            </p>
            <div class="pt-2">
              <router-link to="/contact" class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-400 hover:text-brand-300">
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
