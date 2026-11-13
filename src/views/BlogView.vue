<template>
  <div class="pt-28 pb-20 bg-slate-50/50">
    
    <!-- Hero Header -->
    <section class="relative py-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
        <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 font-mono text-[11px] font-semibold tracking-wider uppercase shadow-2xs mb-4">
          <BookOpen class="w-3.5 h-3.5 text-amber-600" />
          <span>Essays &amp; Technical Perspectives</span>
        </span>
        <h1 class="text-3xl sm:text-5xl lg:text-[48px] font-serif font-normal text-slate-900 tracking-tight leading-tight">
          Essays on Engineering, Search &amp; Leadership
        </h1>
        <p class="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans">
          Perspectives on machine learning, executive discipline, project architecture, minimalism, and search engine mastery.
        </p>

        <!-- Search & Filter Controls -->
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <div class="relative w-full">
            <Search class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              v-model="searchQuery"
              placeholder="Search essays by keyword, topic, or technology..."
              class="form-input-field pl-10 shadow-2xs"
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
              'px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-2xs',
              selectedCategory === cat 
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-16 bg-white border-b border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div v-if="filteredPosts.length === 0" class="text-center py-16 text-slate-500 text-sm font-sans">
          No essays found matching your criteria.
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in filteredPosts" 
            :key="post.slug"
            class="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
          >
            <div>
              <router-link :to="`/blog/${post.slug}`" class="block relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img 
                  :src="post.image" 
                  :alt="post.title"
                  class="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 filter contrast-[1.02]"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
                <div class="absolute top-3 left-3 px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-mono uppercase tracking-wider text-slate-900 font-bold shadow-xs">
                  {{ post.category }}
                </div>
              </router-link>

              <div class="p-6 space-y-3">
                <div class="flex items-center gap-2 text-[11px] font-mono text-slate-500 font-medium">
                  <span>{{ post.date }}</span>
                  <span>·</span>
                  <span>{{ post.readTime }}</span>
                </div>

                <h2 class="text-lg font-serif font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
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
                    class="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 text-slate-700 font-medium border border-slate-200/80"
                  >
                    #{{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <div class="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs font-sans">
              <span class="text-slate-500 font-medium">By {{ post.author }}</span>
              <router-link 
                :to="`/blog/${post.slug}`" 
                class="inline-flex items-center gap-1 font-bold text-amber-700 hover:text-amber-900 transition-colors"
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
