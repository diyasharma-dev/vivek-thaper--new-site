<template>
  <section class="py-20 sm:py-24 md:py-28 relative overflow-hidden border-b border-white/[0.08]">
    <!-- Ambient Glow Layer -->
    <div class="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div class="max-w-3xl space-y-3">
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-200 font-mono text-[11px] font-bold tracking-wider uppercase shadow-xs">
            <!-- Google 4-color icon -->
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
            <span>Google Business Reviews · 5.0 ★</span>
          </span>
          <h2 class="hero-headline text-2xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight">
            What Clients Say on <span class="gradient-text-brand">Google</span>
          </h2>
          <p class="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-sans">
            Real 5-star Google Business Profile reviews from CPAs, event organizers, business owners, and long-term partners.
          </p>
        </div>

        <!-- Google Rating Badge & Link -->
        <div class="flex items-center gap-3 shrink-0">
          <a 
            href="https://g.page/r/CYRWKmu-WcghEAI/review" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-red-500/50 shadow-xs hover:shadow-glow-red transition-all group w-full sm:w-auto"
          >
            <div class="flex items-center gap-1 text-amber-400">
              <Star v-for="n in 5" :key="n" class="w-3.5 h-3.5 fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
            </div>
            <span class="text-xs font-bold text-white font-heading">5.0 on Google</span>
            <ExternalLink class="w-3.5 h-3.5 text-slate-400 group-hover:text-red-400 transition-colors" />
          </a>
        </div>
      </div>

      <!-- Testimonials Grid (6 Real GMB Reviews) -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        
        <div 
          v-for="item in testimonials" 
          :key="item.author"
          class="card-glass p-5 sm:p-7 flex flex-col justify-between hover:-translate-y-1.5 hover:border-red-500/50 hover:shadow-glow-card transition-all duration-300 group"
        >
          <div>
            <!-- Header: Star rating & Verified Google badge -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-1 text-amber-400">
                <Star v-for="n in item.rating" :key="n" class="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]" />
              </div>
              <span class="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
                <CheckCircle2 class="w-3 h-3 text-emerald-400" />
                Verified
              </span>
            </div>

            <!-- Quote Text -->
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans italic mb-6">
              "{{ item.quote }}"
            </p>
          </div>

          <!-- Card Footer: Author info & Google badge -->
          <div class="pt-4 sm:pt-5 border-t border-white/[0.08] space-y-3">
            <div class="flex items-center gap-3">
              <div 
                :class="[
                  'w-10 h-10 rounded-xl flex items-center justify-center font-mono text-xs font-bold text-white shadow-md shrink-0 border border-white/20',
                  item.avatarBg
                ]"
              >
                {{ item.initials }}
              </div>
              <div class="min-w-0">
                <h4 class="text-xs sm:text-sm font-heading font-bold text-white truncate">{{ item.author }}</h4>
                <p class="text-[11px] text-red-400 font-bold font-sans truncate">{{ item.role }}</p>
                <p v-if="item.company" class="text-[10px] text-slate-400 font-sans truncate">{{ item.company }}</p>
              </div>
            </div>

            <div class="flex items-center justify-between pt-1 text-[10px] text-slate-400 font-medium">
              <span class="inline-flex items-center gap-1.5">
                <svg class="w-3 h-3 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                Google Business Review
              </span>
              <span class="font-mono text-slate-300 font-bold">5.0 ★</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { Star, CheckCircle2, ExternalLink } from 'lucide-vue-next'

const testimonials = [
  {
    quote: "We’ve had the pleasure of working with Vivek and his team at Mirch Media for several years, and they are truly amazing. Their creativity, professionalism, and dedication consistently deliver results that exceed our expectations. They take the time to understand our goals and provide thoughtful, strategic solutions that help our business grow. Communication is clear, deadlines are always met, and working with them is a genuinely positive experience. We highly recommend Vivek and the Mirch Media team to anyone looking for a talented and reliable marketing partner.",
    author: "Edward Torres, CPA PC",
    role: "ETCPA Team · Client for 8+ Years",
    company: "Edward Torres CPA PC",
    rating: 5,
    initials: "ET",
    avatarBg: "bg-gradient-to-br from-blue-500 to-indigo-600"
  },
  {
    quote: "Used Mirch Media's marketing services for promoting our organization. The team is proactive and super responsive. They are quick to accommodate my requests despite time zone differences while I was traveling. They have also helped us with hosting events across many countries. Getting consultations from Mr. Vik has been a game changer, especially for our web3 events. His network and references also provided us extra added value beyond their commitment.",
    author: "Siddhant Pandey",
    role: "Global Events & Web3 Initiatives",
    company: "International Web3 Summit",
    rating: 5,
    initials: "SP",
    avatarBg: "bg-gradient-to-br from-red-600 to-rose-600"
  },
  {
    quote: "I’ve had the pleasure of working with Vivek over the past few years, and I can’t recommend him enough! He’s incredibly easy to work with, always responsive, and consistently delivers high-quality work on time and to a high standard. Whether it’s websites, marketing, or troubleshooting, Vivek is always helpful, knowledgeable, and willing to go the extra mile.",
    author: "Zoe Fernandez",
    role: "Web & Digital Marketing Client",
    company: "Digital Growth Brand",
    rating: 5,
    initials: "ZF",
    avatarBg: "bg-gradient-to-br from-emerald-500 to-teal-600"
  },
  {
    quote: "Working with Mirch Media has been an excellent experience. Their creativity, professionalism, and dedication have made a significant impact on our social media presence. They consistently create engaging content, maintain a strong brand voice, and stay on top of trends to keep our audience engaged. Their communication is outstanding, and they are always proactive in bringing fresh ideas and strategies to the table.",
    author: "Iris Alvarez",
    role: "Optical Practice Owner",
    company: "Austin Optics",
    rating: 5,
    initials: "IA",
    avatarBg: "bg-gradient-to-br from-purple-500 to-pink-600"
  },
  {
    quote: "Thank you for the work completed on the updated Fast Track Training & Learning Group Inc. website. We appreciate the effort your team put into improving our online presence and creating a more professional platform that better reflects our organization and the services we provide. Personally, I appreciated the constant communication, which allowed us to be a major part of the process.",
    author: "Estefania Notice",
    role: "Executive Director",
    company: "Fast Track Training & Learning Group",
    rating: 5,
    initials: "EN",
    avatarBg: "bg-gradient-to-br from-cyan-500 to-blue-600"
  },
  {
    quote: "I’ve used Mirch Media's services for 2 websites. They are professional and forthcoming on work and projects. I recommend anyone starting or redesigning their website to use Mirch Media.",
    author: "Heriberto Santiago",
    role: "Business Owner",
    company: "2 Website Projects Completed",
    rating: 5,
    initials: "HS",
    avatarBg: "bg-gradient-to-br from-amber-500 to-red-500"
  }
]
</script>
