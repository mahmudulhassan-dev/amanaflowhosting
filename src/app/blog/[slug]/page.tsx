import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { MDXComponents } from '@/components/mdx/MDXComponents';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Badge } from '@/components/ui/Badge';
import { Calendar, Clock, Share2, MessageCircle, ArrowRight } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import { getCanonicalUrl } from '@/lib/seo';
import { BlogCard } from '@/components/blog/BlogCard';
import { Button } from '@/components/ui/Button';

const BASE_URL = getCanonicalUrl();

export async function generateStaticParams() {
  const posts = getAllPosts('en');
  return posts.map((post) => ({
    slug: post?.meta.slug || '',
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const locale = (await getLocale()) || 'en';
  const post = getPostBySlug(slug, locale);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  const canonicalPath = `${BASE_URL}/blog/${post.meta.slug}`;

  return {
    title: `${post.meta.title} | AmanaFlow Blog`,
    description: post.meta.description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        'en': `${BASE_URL}/blog/${post.meta.slug}`,
        'bn': `${BASE_URL}/blog/${post.meta.slug}`,
        'x-default': `${BASE_URL}/blog/${post.meta.slug}`
      },
    },
    openGraph: {
      type: 'article',
      publishedTime: post.meta.date,
      authors: ['AmanaFlow Engineering'],
      url: canonicalPath,
    }
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const locale = (await getLocale()) || 'en';
  const post = getPostBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  const { meta, content } = post;
  const allPosts = getAllPosts(locale);
  const relatedPosts = allPosts
    .filter(p => p && p.meta && p.meta.category === meta.category && p.slug !== slug)
    .slice(0, 3);

  return (
    <article className="min-h-screen bg-white dark:bg-[#030712] pb-32">
      {/* ─── BREADCRUMBS & HERO ─── */}
      <div className="bg-surface-50 dark:bg-[#080d1a] border-b border-surface-100 dark:border-surface-900 pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-20">
           <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-primary-500/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-xs font-bold text-surface-400 uppercase tracking-widest mb-10 overflow-x-auto no-scrollbar">
            <Link href="/blog" className="hover:text-primary-600 transition-colors whitespace-nowrap">Blog</Link>
            <span className="text-surface-200">/</span>
            <Link href={`/blog/category/${meta.category?.toLowerCase().replace(/ /g, '-')}`} className="hover:text-primary-600 transition-colors whitespace-nowrap">{meta.category}</Link>
            <span className="text-surface-200">/</span>
            <span className="text-surface-900 dark:text-white truncate max-w-[200px] md:max-w-none">{meta.title}</span>
          </nav>
          
          <Badge variant="primary" styleType="soft" className="mb-8 px-4 py-1.5 rounded-full uppercase text-[10px] font-black tracking-widest">
            {meta.category}
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-surface-900 dark:text-white tracking-tighter leading-[1] mb-10">
            {meta.title}
          </h1>

          {/* Featured Image */}
          {meta.image && (
            <div className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl border border-white/10 group">
              <img 
                src={meta.image} 
                alt={meta.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-2xl">
                   <p className="text-[10px] text-white/70 uppercase font-black tracking-[0.2em]">Verified Knowledge</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex flex-wrap items-center gap-8 text-surface-500 text-sm font-bold">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-black text-xs">AF</div>
              <div>
                <div className="text-surface-900 dark:text-white">AmanaFlow Engineering</div>
                <div className="text-[10px] uppercase tracking-widest opacity-60">L3 Systems Team</div>
              </div>
            </div>
            <div className="h-8 w-px bg-surface-200 dark:border-surface-800 hidden md:block" />
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-primary-500" />
              <time dateTime={meta.date}>{format(parseISO(meta.date), 'MMMM dd, yyyy')}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-primary-500" />
              <span>{meta.readingTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── CONTENT GRID ─── */}
      <SectionWrapper className="!pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-7xl mx-auto">
           {/* Sidebar / TOC (Desktop Only) */}
           <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit space-y-12">
              <div className="space-y-6">
                 <h4 className="text-xs font-black uppercase tracking-widest text-surface-400">Jump to Section</h4>
                 <div className="flex flex-col gap-4 text-sm font-bold text-surface-500 border-l-2 border-surface-100 dark:border-surface-800 pl-6">
                    <span className="hover:text-primary-600 transition-colors cursor-pointer text-primary-600">Introduction</span>
                    <span className="hover:text-primary-600 transition-colors cursor-pointer">Technical Overview</span>
                    <span className="hover:text-primary-600 transition-colors cursor-pointer">Best Practices</span>
                    <span className="hover:text-primary-600 transition-colors cursor-pointer">Final Summary</span>
                 </div>
              </div>

              <div className="bg-primary-600 rounded-3xl p-8 text-white space-y-6 shadow-glow relative overflow-hidden">
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                 <h4 className="text-xl font-black leading-tight">Ready to scale?</h4>
                 <p className="text-xs text-primary-100 font-medium">Get 85% OFF your first year on our Managed VPS plans.</p>
                 <Button fullWidth className="bg-white text-primary-600 hover:bg-surface-50 font-black rounded-xl h-12 text-sm">
                    View Pricing
                 </Button>
              </div>
           </aside>

           {/* Main Content */}
           <div className="lg:col-span-6">
              <div className="prose prose-lg dark:prose-invert max-w-none 
                prose-headings:font-black prose-headings:tracking-tighter 
                prose-h2:text-4xl prose-h3:text-2xl 
                prose-p:text-surface-600 dark:prose-p:text-surface-400 prose-p:leading-relaxed 
                prose-strong:text-surface-900 dark:prose-strong:text-white
                prose-code:text-primary-600 dark:prose-code:text-primary-400 prose-code:bg-primary-50 dark:prose-code:bg-primary-900/20 prose-code:px-2 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
              ">
                <MDXRemote source={content} components={MDXComponents} />
              </div>

              {/* Share & Support Block */}
              <div className="mt-16 pt-10 border-t border-surface-100 dark:border-surface-800 flex flex-col md:flex-row justify-between items-center gap-8">
                 <div className="flex items-center gap-4">
                    <span className="text-xs font-black uppercase tracking-widest text-surface-400">Share this post</span>
                    <div className="flex gap-2">
                       <div className="w-10 h-10 rounded-full bg-surface-50 dark:bg-surface-900 flex items-center justify-center hover:bg-primary-50 dark:hover:bg-primary-900/30 text-surface-500 hover:text-primary-600 transition-all cursor-pointer"><Share2 size={16}/></div>
                       <div className="w-10 h-10 rounded-full bg-surface-50 dark:bg-surface-900 flex items-center justify-center hover:bg-primary-50 dark:hover:bg-primary-900/30 text-surface-500 hover:text-primary-600 transition-all cursor-pointer"><MessageCircle size={16}/></div>
                    </div>
                 </div>
                 <Badge variant="neutral" styleType="soft" className="rounded-full">Last updated March 2026</Badge>
              </div>
           </div>

           {/* Related Column / Author Bio (Optional) */}
           <div className="lg:col-span-3 space-y-8">
              {/* Optional Right Sidebar content */}
           </div>
        </div>
      </SectionWrapper>

      {/* ─── RELATED POSTS ─── */}
      {relatedPosts.length > 0 && (
        <SectionWrapper hasBackground paddingY="xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
               <h2 className="text-3xl font-black text-surface-900 dark:text-white">More from {meta.category}</h2>
               <Link href={`/blog/category/${meta.category?.toLowerCase().replace(/ /g, '-')}`} className="text-primary-600 font-bold hover:underline flex items-center gap-2 uppercase text-xs tracking-widest">
                  View Category <ArrowRight size={14} />
               </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}

    </article>
  );
}
