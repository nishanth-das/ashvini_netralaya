"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Bell,
  Phone,
  MessageCircle,
  ChevronRight,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { blogPosts } from "@/data/blogs";
import { siteConfig } from "@/data/siteConfig";

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  // Designate the first post as the featured post
  const featuredPost = blogPosts[0];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50">
      {/* 1. Hero Header (No Category Pills) */}
      <section className="relative pt-12 pb-14 lg:pt-16 lg:pb-16 bg-gradient-to-b from-sky-50 via-white to-slate-50 border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-[#0c6ba1] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Clinical Knowledge &amp; Eye Health Guides</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-sans">
            Eye Health Articles &amp; Clinical Insights
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Authoritative, evidence-based guides curated by Ashvini Netralaya. Learn about modern stitchless cataract surgery, diabetic eye care, glaucoma, and pediatric vision.
          </p>

          {/* Search bar */}
          <div className="mt-6 max-w-lg mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cataract lenses, retina symptoms, glaucoma..."
              className="w-full pl-11 pr-4 py-3 rounded-full border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#1c88c6]/40 bg-white shadow-xs"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* 2. Featured Post Showcase (No author info) */}
      {searchQuery.trim() === "" && featuredPost && (
        <section className="py-8 sm:py-12 bg-white border-b border-slate-200/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0c6ba1] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Featured Guide</span>
              </span>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-[#072448] text-white rounded-2xl overflow-hidden shadow-xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12">
              {/* Cover Image */}
              <div className="lg:col-span-6 relative min-h-[260px] lg:min-h-[380px] bg-slate-950">
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
              </div>

              {/* Text Info */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 font-semibold border border-sky-400/30">
                      {featuredPost.category}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featuredPost.readTime}</span>
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{featuredPost.publishedAt}</span>
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-white hover:text-sky-300 transition-colors">
                    <Link href={`/blogs/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 font-normal">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-sky-300 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Clinically Verified Medical Guide</span>
                  </div>

                  <Link
                    href={`/blogs/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1c88c6] hover:bg-[#1578b0] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Main Articles Grid (No author display) */}
      <section className="py-12 sm:py-16 flex-1">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Clinical Articles
              <span className="text-sm font-normal text-slate-500 ml-2">
                ({filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"})
              </span>
            </h2>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-4">
              <BookOpen className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800">No articles found</h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
                No articles matched your search query &quot;{searchQuery}&quot;. Try adjusting your keywords.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Cover Thumbnail */}
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="block relative w-full aspect-[16/10] overflow-hidden bg-slate-100"
                    >
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10 shadow-xs">
                          {post.category}
                        </span>
                      </div>
                    </Link>

                    {/* Metadata Header */}
                    <div className="px-5 sm:px-6 space-y-2.5">
                      <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          <span>{post.publishedAt}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0c6ba1] transition-colors line-clamp-2">
                        <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-3 font-normal">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Clean Footer (No author) */}
                  <div className="p-5 sm:px-6 pt-4 border-t border-slate-100 mt-4 flex items-center justify-between gap-3 text-xs">
                    <span className="text-slate-500 font-medium">
                      Ashvini Netralaya
                    </span>

                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-1 font-bold text-[#0c6ba1] hover:text-sky-800 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Read Article</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* 4. Newsletter & Health Camps Alert Box */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white border border-slate-800 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                <Bell className="w-3 h-3" />
                <span>Free Community Vision Updates</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Stay Informed on Eye Health &amp; Free Diagnostic Camps
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Receive newly published clinical articles, community health updates, and Sarva Drishti Yojana free eye screening camp schedules directly in your inbox.
              </p>
            </div>

            <div className="w-full md:w-auto min-w-[280px] sm:min-w-[340px]">
              {subscribed ? (
                <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-200 text-xs rounded-xl font-medium text-center">
                  ✓ Thank you! You will receive our latest health articles and camp notifications.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2.5 rounded-full text-xs sm:text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 w-full"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-[#1c88c6] hover:bg-[#1578b0] text-white text-xs font-semibold whitespace-nowrap transition-colors shadow-sm"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Support & Direct Consultation Banner */}
      <section className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold">
            Need Immediate Guidance on an Eye Condition?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Do not let eye symptoms or blurred vision go unchecked. Speak directly with our care desk or schedule a consultation with our specialist surgeons in Agartala.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-full transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp: {siteConfig.phone}</span>
            </a>
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-full border border-white/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-300" />
              <span>Call: {siteConfig.phone}</span>
            </a>
            <a
              href={`tel:${siteConfig.altPhoneClean}`}
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-full border border-white/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-300" />
              <span>Call: {siteConfig.altPhone}</span>
            </a>
          </div>

          <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400">
            <span>OPD Timings: 10:00 AM – 5:00 PM (Thursday Closed) • Bijoykumar Chowmuhani, Agartala</span>
          </div>
        </div>
      </section>
    </div>
  );
}
