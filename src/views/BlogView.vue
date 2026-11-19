<template>
  <div class="pt-20 sm:pt-24 pb-16 bg-white">
    
    <!-- Hero Banner with Light Luxury Editorial Styling -->
    <section class="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white border-b border-slate-200/80 text-slate-900">
      <!-- Subtle architectural grid background -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_25%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <!-- Soft Warm Ambient Glow -->
      <div class="absolute -top-24 -right-12 w-96 h-96 bg-gradient-to-br from-red-400/10 via-rose-300/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Left Column (7 cols): Copy, Search & Category Filters -->
          <div class="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs font-semibold tracking-wider uppercase shadow-2xs">
              <BookOpen class="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span>Essays &amp; Technical Perspectives · 2006 – Present</span>
            </div>

            <h1 class="hero-headline text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-heading font-extrabold text-slate-900 tracking-normal leading-[1.32] sm:leading-[1.35] lg:leading-[1.38] text-balance my-3.5 sm:my-4">
              Essays on Engineering, <span class="text-red-600">Search &amp; Leadership</span>
            </h1>

            <p class="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
              Deep architectural perspectives on search engine mastery, high-performance web systems, executive discipline, and 20+ years of digital agency craftsmanship.
            </p>

            <!-- Search Control Inside Banner -->
            <div class="pt-1 max-w-xl mx-auto lg:mx-0">
              <div class="relative w-full">
                <Search class="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  v-model="searchQuery"
                  placeholder="Search essays by keyword, topic, or technology..."
                  class="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-sm text-slate-900 placeholder-slate-400 shadow-2xs transition-all outline-none"
                />
              </div>
            </div>

            <!-- Category Filter Chips -->
            <div class="w-full max-w-full flex overflow-x-auto py-1 -mx-1 px-1 scrollbar-none sm:flex-wrap items-center justify-center lg:justify-start gap-1.5 pt-1">
              <button
                v-for="cat in categories"
                :key="cat"
                @click="selectedCategory = cat"
                :class="[
                  'px-3.5 py-1.5 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-2xs',
                  selectedCategory === cat 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200'
                ]"
              >
                {{ cat }}
              </button>
            </div>
          </div>

          <!-- Right Column (5 cols): Matched Ideas & Strategy Image -->
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="w-full max-w-md lg:max-w-none">
              <div class="relative rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 bg-white border border-slate-200/90 shadow-xl group overflow-hidden">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                  <img 
                    src="/media/work-ideas.webp" 
                    alt="Strategic Ideas and Thought Leadership - Vivek Thapar"
                    class="w-full h-full object-cover object-center filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500"
                    loading="eager"
                  />
                </div>

                <!-- Editorial Caption Beneath Photo -->
                <div class="pt-3 px-1">
                  <div class="flex items-center gap-1.5 text-[11px] font-mono text-slate-700 font-bold uppercase tracking-wider mb-0.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                    <span>Strategic Perspectives</span>
                  </div>
                  <p class="text-sm font-heading font-bold text-slate-900 tracking-tight">Original Insights &amp; Search Mastery</p>
                  <p class="text-[11px] text-slate-500 font-sans mt-0.5">Vivek Thapar · 20+ Years Agency Archives</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-12 sm:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div v-if="filteredPosts.length === 0" class="text-center py-16 bg-red-50/30 border border-red-100 rounded-2xl sm:rounded-3xl p-8">
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
            class="bg-white border border-slate-200/90 hover:border-red-300 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
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
                <div class="absolute top-3 left-3 px-3 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-red-200 text-[10px] font-mono uppercase tracking-wider text-red-700 font-bold shadow-xs">
                  {{ post.category }}
                </div>
              </router-link>

              <div class="p-5 sm:p-6 space-y-3">
                <div class="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-slate-500 font-bold">
                  <span class="text-red-600">{{ post.date }}</span>
                  <span>·</span>
                  <span>{{ post.readTime }}</span>
                </div>

                <h2 class="text-lg sm:text-xl font-heading font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
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
                    class="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono bg-red-50 text-red-800 font-semibold border border-red-200/60"
                  >
                    #{{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <div class="px-5 sm:px-6 py-3.5 bg-gradient-to-r from-slate-50 to-red-50/30 border-t border-slate-100 flex items-center justify-between text-xs font-sans">
              <span class="text-slate-500 font-medium">By {{ post.author }}</span>
              <router-link 
                :to="`/blog/${post.slug}`" 
                class="inline-flex items-center gap-1 font-heading font-bold text-red-600 group-hover:text-red-700 hover:translate-x-0.5 transition-all"
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

const categories = ['All', 'Development', 'Leadership', 'Strategy', 'SEO', 'Philosophy', 'Lifestyle']

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
