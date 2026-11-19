<template>
  <div class="pt-20 sm:pt-24 pb-20 bg-transparent text-slate-100 min-h-screen">
    
    <!-- Hero Banner with Matched Ideas & Strategy Image -->
    <section class="relative pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 overflow-hidden border-b border-white/10">
      <!-- Subtle Ambient Lighting -->
      <div class="absolute -top-24 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute -bottom-24 -left-20 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <!-- Left Column (7 cols): Copy, Search & Category Filters -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-500/30 text-red-400 font-mono text-xs font-bold tracking-wider uppercase shadow-sm">
              <BookOpen class="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Articles &amp; Industry Insights · 2006 – Present</span>
            </div>

            <h1 class="hero-headline text-3xl sm:text-5xl lg:text-[46px] font-heading font-black text-white tracking-tight leading-[1.2] text-balance">
              Articles &amp; Insights on <span class="gradient-text-brand">Strategy, Search &amp; Leadership</span>
            </h1>

            <p class="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
              Real-world perspectives on search engine marketing, project management discipline, consumer behavior, and 20+ years of digital agency experience in New York City.
            </p>

            <!-- Search Control Inside Banner -->
            <div class="pt-1 max-w-xl mx-auto lg:mx-0">
              <div class="relative w-full">
                <Search class="w-4 h-4 text-red-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  v-model="searchQuery"
                  placeholder="Search articles by keyword or topic..."
                  class="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0c0e17] border border-white/10 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 text-sm text-white placeholder-slate-500 shadow-inner transition-all outline-none"
                />
              </div>
            </div>

            <!-- Category Filter Chips -->
            <div class="w-full max-w-full flex overflow-x-auto py-1 -mx-1 px-1 scrollbar-none sm:flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <button
                v-for="cat in categories"
                :key="cat"
                @click="selectedCategory = cat"
                :class="[
                  'px-3.5 py-1.5 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer whitespace-nowrap shrink-0',
                  selectedCategory === cat 
                    ? 'bg-red-600 text-white shadow-glow-red' 
                    : 'bg-[#0c0e17] text-slate-300 hover:text-white hover:bg-white/10 border border-white/10'
                ]"
              >
                {{ cat }}
              </button>
            </div>
          </div>

          <!-- Right Column (5 cols): Authentic Thought Leadership Showcase -->
          <div class="lg:col-span-5 relative flex justify-center">
            <div class="w-full max-w-lg lg:max-w-none">
              <div class="relative rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-white/15 via-[#0e111d] to-[#07080e] border border-white/15 shadow-2xl group overflow-hidden">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] w-full bg-slate-900">
                  <img 
                    src="/media/vivek-thapar-seo.webp" 
                    alt="Vivek Thapar - Digital Marketing and SEO Thought Leadership"
                    class="w-full h-full object-cover object-center filter contrast-[1.03] group-hover:scale-[1.02] transition-transform duration-700"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                <!-- Caption Badge Placed Underneath Photo to Avoid Covering People -->
                <div class="pt-3.5 px-2 pb-1">
                  <div class="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider mb-0.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    <span>Strategic Perspectives</span>
                  </div>
                  <p class="text-xs sm:text-sm font-heading font-bold text-white tracking-tight">Original Insights &amp; Search Mastery</p>
                  <p class="text-[11px] text-slate-400 font-sans mt-0.5">Vivek Thapar · 20+ Years Agency Archives</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="py-16 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div v-if="filteredPosts.length === 0" class="text-center py-20 card-glass rounded-3xl p-8">
          <h3 class="text-lg font-heading font-bold text-white">No Essays Found</h3>
          <p class="text-xs sm:text-sm text-slate-400 mt-1 font-sans">No articles matched your search query. Try broadening your terms.</p>
          <button @click="resetFilters" class="mt-4 btn-secondary text-xs">
            Clear Filters
          </button>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in filteredPosts" 
            :key="post.slug"
            class="card-glass rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-red-500/40 hover:-translate-y-1.5 transition-all duration-300"
          >
            <div>
              <router-link :to="`/blog/${post.slug}`" class="block relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-white/10">
                <img 
                  :src="post.image" 
                  :alt="post.title"
                  class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
                <div class="absolute inset-0 bg-[#07080e]/40 pointer-events-none"></div>
                <div class="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#0c0e17]/90 backdrop-blur-md border border-red-500/30 text-[10px] font-mono uppercase tracking-wider text-red-400 font-bold shadow-xs">
                  {{ post.category }}
                </div>
              </router-link>

              <div class="p-6 space-y-3.5">
                <div class="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-slate-400 font-bold">
                  <span class="text-red-400">{{ post.date }}</span>
                  <span>·</span>
                  <span>{{ post.readTime }}</span>
                </div>

                <h2 class="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-red-300 transition-colors leading-snug">
                  <router-link :to="`/blog/${post.slug}`">
                    {{ post.title }}
                  </router-link>
                </h2>

                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 font-sans">
                  {{ post.excerpt }}
                </p>

                <div class="pt-2 flex flex-wrap gap-1.5">
                  <span 
                    v-for="tag in post.tags.slice(0, 3)" 
                    :key="tag"
                    class="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono bg-white/5 text-slate-300 font-medium border border-white/10"
                  >
                    #{{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <div class="px-6 py-4 bg-[#0e111d]/80 border-t border-white/10 flex items-center justify-between text-xs font-sans">
              <span class="text-slate-400 font-medium">By {{ post.author }}</span>
              <router-link 
                :to="`/blog/${post.slug}`" 
                class="inline-flex items-center gap-1 font-heading font-bold text-red-400 group-hover:text-red-300 hover:translate-x-0.5 transition-all"
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
