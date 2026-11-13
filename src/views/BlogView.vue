<template>
  <div class="pt-28 pb-20">
    
    <!-- Hero Header -->
    <section class="relative py-16 overflow-hidden">
      <div class="glow-ambient -top-40 right-1/3 w-[600px] h-[400px] bg-brand-600/15"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-semibold mb-4">
          <BookOpen class="w-3.5 h-3.5" />
          <span>Articles, Guides &amp; Perspectives</span>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
          Thoughts On <span class="gold-gradient-text">Tech, Growth &amp; Life</span>
        </h1>
        <p class="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
          Essays on machine learning, executive discipline, project architecture, minimalism, and search engine mastery.
        </p>

        <!-- Search & Filter Controls -->
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <div class="relative w-full">
            <Search class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              v-model="searchQuery"
              placeholder="Search articles by keyword or topic..."
              class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-400 transition-colors"
            />
          </div>
        </div>

        <!-- Category Pills -->
        <div class="flex flex-wrap items-center justify-center gap-2 pt-4">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              'px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer',
              selectedCategory === cat 
                ? 'bg-brand-500/20 text-brand-300 border border-brand-500/40'
                : 'bg-dark-900 text-slate-400 border border-slate-800 hover:text-white'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-12 border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div v-if="filteredPosts.length === 0" class="text-center py-16 text-slate-400 text-sm">
          No articles found matching your criteria. Try searching for "machine learning" or "SEO".
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in filteredPosts" 
            :key="post.slug"
            class="rounded-3xl overflow-hidden glass-panel glass-panel-hover border border-slate-700/60 flex flex-col justify-between group"
          >
            <div>
              <!-- aspect-[4/3] avoids awkward cropping of square visual covers -->
              <router-link :to="`/blog/${post.slug}`" class="block relative aspect-[4/3] overflow-hidden bg-dark-950">
                <img 
                  :src="post.image" 
                  :alt="post.title"
                  class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent"></div>
                <div class="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-dark-950/80 backdrop-blur-md border border-slate-700 text-[10px] font-bold uppercase tracking-wider text-brand-300">
                  {{ post.category }}
                </div>
              </router-link>

              <div class="p-6 space-y-3">
                <div class="flex items-center gap-3 text-[11px] text-slate-400">
                  <span>{{ post.date }}</span>
                  <span>•</span>
                  <span>{{ post.readTime }}</span>
                </div>

                <h2 class="text-lg font-bold text-white font-display group-hover:text-brand-300 transition-colors leading-snug">
                  <router-link :to="`/blog/${post.slug}`">
                    {{ post.title }}
                  </router-link>
                </h2>

                <p class="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {{ post.excerpt }}
                </p>

                <div class="pt-3 flex flex-wrap gap-1.5">
                  <span 
                    v-for="tag in post.tags.slice(0, 3)" 
                    :key="tag"
                    class="px-2 py-0.5 rounded text-[10px] font-medium bg-dark-950 text-slate-400 border border-slate-800"
                  >
                    #{{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <div class="px-6 py-4 bg-dark-950/60 border-t border-slate-800/80 flex items-center justify-between">
              <span class="text-xs font-bold text-slate-400">By {{ post.author }}</span>
              <router-link 
                :to="`/blog/${post.slug}`" 
                class="inline-flex items-center gap-1 text-xs font-bold text-brand-400 group-hover:text-brand-300 transition-colors"
              >
                <span>Read Essay</span>
                <ArrowRight class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </router-link>
            </div>
          </article>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { BookOpen, Search, ArrowRight } from 'lucide-vue-next'
import { blogPosts } from '@/data/blogPosts'

const searchQuery = ref('')
const selectedCategory = ref('All')

const categories = ['All', 'Development', 'SEO Optimizations', 'Strategy', 'Philosophy', 'Lifestyle']

const filteredPosts = computed(() => {
  return blogPosts.filter(post => {
    const matchesCategory = selectedCategory.value === 'All' || post.category === selectedCategory.value
    const q = searchQuery.value.toLowerCase().trim()
    const matchesSearch = !q || 
      post.title.toLowerCase().includes(q) || 
      post.excerpt.toLowerCase().includes(q) ||
      post.tags.some(t => t.toLowerCase().includes(q))
    return matchesCategory && matchesSearch
  })
})
</script>
