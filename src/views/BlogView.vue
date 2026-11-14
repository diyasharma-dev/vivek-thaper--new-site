<template>
  <div class="pt-20 sm:pt-24 pb-16 bg-white">
    
    <!-- Hero Header with Warm Radiant Ambient Glows -->
    <section class="relative py-14 sm:py-20 overflow-hidden bg-gradient-to-b from-orange-50/40 via-amber-50/20 to-white border-b border-slate-100">
      <!-- Ambient Lighting Blobs -->
      <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-orange-400/15 via-amber-300/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -top-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 text-orange-700 font-mono text-[11px] font-bold tracking-wider uppercase shadow-2xs mb-4">
          <BookOpen class="w-3.5 h-3.5 text-orange-500" />
          <span>Essays &amp; Technical Perspectives</span>
        </span>
        <h1 class="text-3xl sm:text-4xl lg:text-[48px] font-heading font-extrabold text-slate-900 tracking-tight leading-tight">
          Essays on Engineering, <span class="gradient-text-brand">Search &amp; Leadership</span>
        </h1>
        <p class="mt-4 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto">
          Deep architectural perspectives on search engine mastery, high-performance web systems, executive discipline, and 20+ years of digital agency craftsmanship.
        </p>

        <!-- Search & Filter Controls -->
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
          <div class="relative w-full">
            <Search class="w-4 h-4 text-orange-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              v-model="searchQuery"
              placeholder="Search essays by keyword, topic, or technology..."
              class="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-xs sm:text-sm text-slate-900 placeholder-slate-400 shadow-sm transition-all outline-none"
            />
          </div>
        </div>

        <!-- Category Pills (Horizontal Scrollable on Mobile) with Fiery Active State -->
        <div class="flex overflow-x-auto pb-1 scrollbar-none sm:flex-wrap items-center justify-start sm:justify-center gap-2 pt-5">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              'px-4 py-1.5 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap shadow-2xs',
              selectedCategory === cat 
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25 border border-white/20 scale-105'
                : 'bg-white text-slate-700 hover:text-orange-600 border border-slate-200 hover:border-orange-300 hover:bg-orange-50/50'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div v-if="filteredPosts.length === 0" class="text-center py-16 bg-orange-50/30 border border-orange-100 rounded-2xl sm:rounded-3xl p-8">
          <h3 class="text-base sm:text-lg font-heading font-bold text-slate-900">No Essays Found</h3>
          <p class="text-xs text-slate-500 mt-1 font-sans">No articles matched your search query. Try broadening your terms.</p>
          <button @click="resetFilters" class="mt-4 btn-secondary text-xs">
            Clear Filters
          </button>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <article 
            v-for="post in filteredPosts" 
            :key="post.slug"
            class="bg-white border border-slate-200/90 hover:border-orange-300 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <router-link :to="`/blog/${post.slug}`" class="block relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  :src="post.image" 
                  :alt="post.title"
                  class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none"></div>
                <div class="absolute top-3 left-3 px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-orange-200 text-[10px] font-mono uppercase tracking-wider text-orange-700 font-bold shadow-xs">
                  {{ post.category }}
                </div>
              </router-link>

              <div class="p-5 sm:p-6 space-y-3">
                <div class="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-slate-500 font-bold">
                  <span class="text-orange-600">{{ post.date }}</span>
                  <span>·</span>
                  <span>{{ post.readTime }}</span>
                </div>

                <h2 class="text-lg sm:text-xl font-heading font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                  <router-link :to="`/blog/${post.slug}`">
                    {{ post.title }}
                  </router-link>
                </h2>

                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 font-sans">
                  {{ post.excerpt }}
                </p>

                <div class="pt-2 flex flex-wrap gap-1.5">
                  <span 
                    v-for="tag in post.tags.slice(0, 3)" 
                    :key="tag"
                    class="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono bg-orange-50 text-orange-800 font-semibold border border-orange-200/60"
                  >
                    #{{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <div class="px-5 sm:px-6 py-3.5 bg-gradient-to-r from-slate-50 to-orange-50/30 border-t border-slate-100 flex items-center justify-between text-xs font-sans">
              <span class="text-slate-500 font-medium">By {{ post.author }}</span>
              <router-link 
                :to="`/blog/${post.slug}`" 
                class="inline-flex items-center gap-1 font-heading font-bold text-orange-600 group-hover:text-orange-700 hover:translate-x-0.5 transition-all"
              >
                <span>Read Essay</span>
                <ArrowRight class="w-3.5 h-3.5" />
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
import { blogPosts } from '@/data/blogPosts.js'

const searchQuery = ref('')
const selectedCategory = ref('All')

const categories = ['All', 'Development', 'SEO', 'Strategy', 'Philosophy', 'Lifestyle']

const filteredPosts = computed(() => {
  return blogPosts.filter(post => {
    const matchesCategory = selectedCategory.value === 'All' || post.category === selectedCategory.value
    const matchesSearch = searchQuery.value === '' || 
      post.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.value.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })
})

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = 'All'
}
</script>
