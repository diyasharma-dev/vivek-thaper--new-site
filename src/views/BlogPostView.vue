<template>
  <div class="pt-28 pb-20 bg-[#0c0d10]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Back Link -->
      <div class="mb-8">
        <router-link 
          to="/blog"
          class="inline-flex items-center gap-2 text-xs font-mono font-medium text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft class="w-4 h-4" />
          <span>Back to All Essays</span>
        </router-link>
      </div>

      <div v-if="!post" class="text-center py-20">
        <h1 class="text-2xl font-serif text-white">Essay Not Found</h1>
        <p class="text-xs text-neutral-400 mt-2 font-sans">The requested essay could not be found.</p>
        <router-link to="/blog" class="mt-4 btn-primary text-xs">
          Return to Essays
        </router-link>
      </div>

      <article v-else class="space-y-8">
        
        <!-- Article Header -->
        <header class="space-y-4">
          <div class="flex items-center gap-2.5">
            <span class="px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-[#12141a] text-[#c59b63] border border-white/[0.08]">
              {{ post.category }}
            </span>
            <span class="text-xs font-mono text-neutral-500">{{ post.readTime }}</span>
          </div>

          <h1 class="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-white tracking-tight leading-tight">
            {{ post.title }}
          </h1>

          <div class="flex items-center gap-3 pt-3 pb-4 border-b border-white/[0.08]">
            <div class="w-10 h-10 rounded-full overflow-hidden border border-white/[0.1] shrink-0">
              <img src="/media/vivek-thapar-ceo.webp" alt="Vivek Thapar" class="w-full h-full object-cover object-top" />
            </div>
            <div>
              <p class="text-xs font-semibold text-white font-sans">{{ post.author }}</p>
              <p class="text-[11px] text-neutral-400 font-mono">{{ post.date }} · Founder &amp; CEO, Mirch Media</p>
            </div>
          </div>
        </header>

        <!-- Featured Banner Image -->
        <div class="rounded-xl overflow-hidden aspect-[16/10] sm:aspect-[2/1] max-h-[440px] border border-white/[0.08] shadow-2xl relative bg-[#090a0d]">
          <img :src="post.image" :alt="post.title" class="w-full h-full object-cover object-center filter contrast-[1.02]" />
        </div>

        <!-- Article Rich Body -->
        <div 
          class="prose prose-invert max-w-none text-neutral-300 text-sm leading-relaxed space-y-6 font-sans [&>h2]:text-2xl [&>h2]:font-serif [&>h2]:text-white [&>h2]:mt-10 [&>blockquote]:p-5 [&>blockquote]:rounded-lg [&>blockquote]:bg-[#12141a] [&>blockquote]:border-l-2 [&>blockquote]:border-[#c59b63] [&>blockquote]:italic [&>blockquote]:text-neutral-200 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2"
          v-html="post.content"
        ></div>

        <!-- Tags -->
        <div class="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
          <span class="text-xs font-mono uppercase tracking-wider text-neutral-500">Topics:</span>
          <span 
            v-for="tag in post.tags" 
            :key="tag"
            class="px-2.5 py-1 rounded text-xs font-mono bg-[#12141a] text-[#c59b63] border border-white/[0.06]"
          >
            #{{ tag }}
          </span>
        </div>

        <!-- Author Box -->
        <div class="p-6 sm:p-8 rounded-xl card-architectural flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <div class="w-20 h-20 rounded-lg overflow-hidden border border-white/[0.1] shrink-0">
            <img src="/media/vivek-thapar-ceo.webp" alt="Vivek Thapar" class="w-full h-full object-cover object-top" />
          </div>
          <div class="space-y-2">
            <h3 class="text-base font-serif text-white">About Vivek Thapar</h3>
            <p class="text-xs text-neutral-400 leading-relaxed font-sans">
              Serial entrepreneur, growth strategist, and Founder &amp; CEO of Mirch Media in Queens, NYC. With 21+ years in technology and digital engineering, Vivek has directed 500+ digital deliverables and serves on various community and fraternal boards.
            </p>
            <div class="pt-2">
              <router-link to="/contact" class="inline-flex items-center gap-1.5 text-xs font-medium text-[#c59b63] hover:text-white transition-colors">
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
