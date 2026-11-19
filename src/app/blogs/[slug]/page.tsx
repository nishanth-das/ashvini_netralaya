import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Info,
  HelpCircle,
  Phone,
  MessageCircle,
  Share2,
  Bookmark,
  Stethoscope,
  Building2,
  UserCheck,
} from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blogs";
import { siteConfig } from "@/data/siteConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Ashvini Netralaya",
    };
  }

  const postUrl = `${siteConfig.url}/blogs/${post.slug}`;
  const imageUrl = post.coverImage.startsWith("http")
    ? post.coverImage
    : `${siteConfig.url}${post.coverImage}`;

  return {
    title: `${post.seo.metaTitle}`,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      url: postUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Related articles (exclude current post, take 2)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const postUrl = `${siteConfig.url}/blogs/${post.slug}`;

  // Structured Data Schemas
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.url}${post.coverImage}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: "Ashvini Netralaya Clinical Team",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "MedicalOrganization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/ashvini-logo-white.webp`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Eye Health Articles",
        item: `${siteConfig.url}/blogs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <article className="min-h-screen bg-white">
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 1. Header / Breadcrumbs Bar */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-3 px-4 sm:px-6">
        <div className="max-w-[980px] mx-auto flex items-center justify-between text-xs text-slate-500">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-[#0c6ba1] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link href="/blogs" className="hover:text-[#0c6ba1] transition-colors">
              Blogs
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="text-slate-800 font-medium truncate max-w-[200px] sm:max-w-md">
              {post.category}
            </span>
          </nav>

          <Link
            href="/blogs"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#0c6ba1] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Articles</span>
          </Link>
        </div>
      </div>

      {/* 2. Article Header Hero */}
      <header className="pt-8 pb-10 sm:pt-12 sm:pb-14 bg-gradient-to-b from-sky-50/50 via-white to-white border-b border-slate-100">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-sky-100 text-[#0c6ba1] font-semibold text-xs border border-sky-200">
              {post.category}
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{post.readTime}</span>
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Published: {post.publishedAt}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-[1.3] font-sans">
            {post.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {post.excerpt}
          </p>

          {/* Institutional Trust Badge */}
          <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Clinically Reviewed • Ashvini Netralaya Medical Faculty</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                  `${post.title} - Read more at ${postUrl}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                title="Share on WhatsApp"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Featured Image */}
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-900">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* 4. Main Body Content */}
      <main className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        {/* Key Takeaways Box */}
        <section className="bg-sky-50/70 border border-sky-200/90 rounded-2xl p-5 sm:p-7 space-y-3.5">
          <div className="flex items-center gap-2 text-sm font-bold text-[#0c6ba1] uppercase tracking-wide">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>Key Clinical Takeaways</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
            {post.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Content Sections */}
        <div className="space-y-10">
          {post.sections.map((section, sIdx) => (
            <section key={sIdx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug font-sans pb-1 border-b border-slate-100">
                {section.heading}
              </h2>

              {section.subheading && (
                <h3 className="text-base sm:text-lg font-semibold text-[#0c6ba1]">
                  {section.subheading}
                </h3>
              )}

              <div className="space-y-3.5 text-slate-700 text-sm sm:text-[15px] leading-[1.8] font-normal">
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {/* Data Comparison Table if present */}
              {section.table && (
                <div className="my-6 overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                        {section.table.headers.map((header, hIdx) => (
                          <th key={hIdx} className="p-3 sm:p-3.5 font-bold whitespace-nowrap">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="p-3 sm:p-3.5 text-slate-700 align-top">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Callout Box if present */}
              {section.callout && (
                <div
                  className={`my-5 p-4 sm:p-5 rounded-xl border text-xs sm:text-sm flex items-start gap-3 ${
                    section.callout.type === "warning"
                      ? "bg-amber-50 border-amber-300 text-amber-900"
                      : section.callout.type === "tip"
                      ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                      : "bg-sky-50 border-sky-300 text-sky-950"
                  }`}
                >
                  {section.callout.type === "warning" ? (
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  ) : section.callout.type === "tip" ? (
                    <Lightbulb className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  ) : (
                    <Info className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <p className="font-bold">{section.callout.title}</p>
                    <p className="leading-relaxed">{section.callout.text}</p>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* 5. Clinical FAQs */}
        <section className="pt-8 border-t border-slate-200/80 space-y-5">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0c6ba1]">
              Doctor&apos;s Answers
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Frequently Asked Patient Questions
            </h2>
          </div>

          <div className="space-y-3">
            {post.faqs.map((faq, fIdx) => (
              <details
                key={fIdx}
                className="group border border-slate-200 rounded-xl bg-white overflow-hidden shadow-xs"
              >
                <summary className="flex items-center justify-between p-4 sm:p-5 font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                  <span className="flex items-start gap-2.5 pr-4">
                    <HelpCircle className="w-4 h-4 text-[#0c6ba1] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pl-4 sm:pl-10 font-normal">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* 6. Hospital Consultation Box */}
        <section className="bg-gradient-to-br from-slate-50 via-sky-50/50 to-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-sky-100 text-[#1c88c6] flex items-center justify-center shrink-0 border border-sky-200">
              <Building2 className="w-7 h-7" />
            </div>

            <div className="space-y-2 flex-1">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#0c6ba1]">
                  Ashvini Netralaya • Superspeciality Eye Hospital
                </p>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Need a Specialist Eye Consultation or Second Opinion?
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Ashvini Netralaya is Tripura&apos;s 1st and only NABH-accredited superspeciality eye hospital, offering state-of-the-art diagnostic and surgical eye care in central Agartala.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <a
                  href={`https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}&text=${encodeURIComponent(
                    `Hello Ashvini Netralaya, I read the article "${post.title}" and would like to schedule a consultation.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Schedule via WhatsApp</span>
                </a>

                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-300 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#1c88c6]" />
                  <span>Call Reception: {siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Related Clinical Services */}
        {post.relatedServices && post.relatedServices.length > 0 && (
          <section className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Related Clinical Treatments at Ashvini Netralaya
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {post.relatedServices.map((svc, sIdx) => (
                <Link
                  key={sIdx}
                  href={`/services/${svc.slug}`}
                  className="p-4 sm:p-5 rounded-xl border border-slate-200 bg-white hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-1.5">
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#0c6ba1] transition-colors flex items-center justify-between">
                      <span>{svc.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-[#0c6ba1] transition-all" />
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {svc.description}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-[#0c6ba1] pt-2 inline-flex items-center gap-1">
                    <span>View Treatment Details</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 8. Related Articles Recommendation */}
        {relatedPosts.length > 0 && (
          <section className="pt-8 border-t border-slate-200 space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Recommended Eye Health Guides
              </h3>
              <Link
                href="/blogs"
                className="text-xs font-semibold text-[#0c6ba1] hover:underline"
              >
                View all articles →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blogs/${rel.slug}`}
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all space-y-3 group"
                >
                  <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden bg-slate-100">
                    <Image
                      src={rel.coverImage}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-semibold text-sky-600 uppercase">
                      {rel.category}
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-[#0c6ba1] transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* 9. Bottom Emergency & Booking Banner */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold">
            Have Questions About Your Eye Health?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Our surgical team at Ashvini Netralaya is available for comprehensive examinations, second opinions, and surgical consultations in Agartala.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-full transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Consultation: +91 92336 17885</span>
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
            <span>📍 Bijoykumar Chowmuhani, Agartala • OPD: 10:00 AM – 5:00 PM (Thursday Closed)</span>
          </div>
        </div>
      </footer>
    </article>
  );
}
