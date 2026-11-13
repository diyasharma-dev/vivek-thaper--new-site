<template>
  <div class="pt-28 pb-20 bg-[#0d0f12]">
    
    <!-- Hero Header -->
    <section class="relative py-16 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13161c] border border-white/[0.08] text-neutral-300 text-xs mb-4">
          <BookOpen class="w-3.5 h-3.5 text-[#d4a36a]" />
          <span class="font-mono uppercase tracking-widest text-[11px] text-[#d4a36a]">Essays &amp; Technical Perspectives</span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-[46px] font-serif font-normal text-white tracking-tight leading-tight">
          Essays on Engineering, Search &amp; Leadership
        </h1>
        <p class="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed font-sans">
          Perspectives on machine learning, executive discipline, project architecture, minimalism, and search engine mastery.
        </p>

        <!-- Search & Filter Controls -->
        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <div class="relative w-full">
            <Search class="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              v-model="searchQuery"
              placeholder="Search essays by keyword, topic, or technology..."
              class="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#13161c] border border-white/[0.08] text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#c59b63] transition-colors"
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
              'px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer',
              selectedCategory === cat 
                ? 'bg-[#c59b63] text-[#0d0f12] font-semibold'
                : 'bg-[#13161c] text-neutral-400 border border-white/[0.08] hover:text-white'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-12 border-t border-white/[0.06]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div v-if="filteredPosts.length === 0" class="text-center py-16 text-neutral-400 text-sm">
          No essays found matching your criteria.
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in filteredPosts" 
            :key="post.slug"
            class="rounded-xl overflow-hidden bg-[#13161c] border border-white/[0.08] hover:border-white/[0.18] flex flex-col justify-between transition-all group"
          >
            <div>
              <router-link :to="`/blog/${post.slug}`" class="block relative aspect-[4/3] overflow-hidden bg-[#090a0d]">
                <img 
                  :src="post.image" 
                  :alt="post.title"
                  class="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 filter contrast-[1.02]"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#13161c] via-transparent to-transparent pointer-events-none"></div>
                <div class="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0d0f12]/90 backdrop-blur-md border border-white/[0.1] text-[10px] font-mono uppercase tracking-wider text-[#d4a36a]">
                  {{ post.category }}
                </div>
              </router-link>

              <div class="p-6 space-y-3">
                <div class="flex items-center gap-2 text-[11px] font-mono text-neutral-500">
                  <span>{{ post.date }}</span>
                  <span>·</span>
                  <span>{{ post.readTime }}</span>
                </div>

                <h2 class="text-lg font-serif text-white group-hover:text-[#d4a36a] transition-colors leading-snug">
                  <router-link :to="`/blog/${post.slug}`">
                    {{ post.title }}
                  </router-link>
                </h2>

                <p class="text-xs text-neutral-400 leading-relaxed line-clamp-3 font-sans">
                  {{ post.excerpt }}
                </p>

                <div class="pt-2 flex flex-wrap gap-1.5">
                  <span 
                    v-for="tag in post.tags.slice(0, 3)" 
                    :key="tag"
                    class="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0d0f12] text-neutral-400 border border-white/[0.06]"
                  >
                    #{{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <div class="px-6 py-4 bg-[#0d0f12] border-t border-white/[0.06] flex items-center justify-between text-xs">
              <span class="text-neutral-500">By {{ post.author }}</span>
              <router-link 
                :to="`/blog/${post.slug}`" 
                class="inline-flex items-center gap-1 font-medium text-[#d4a36a] hover:text-white transition-colors"
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
