import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { getAllPosts } from '@/lib/mdx';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { generateAlternateLanguages } from '@/lib/seo';
import { Badge } from '@/components/ui/Badge';
import { BlogCategoryRail } from '@/components/blog/BlogCategoryRail';
import { BlogFeaturedSection } from '@/components/blog/BlogFeaturedSection';
import { CategorySpotlight } from '@/components/blog/CategorySpotlight';
import { BlogCTA } from '@/components/blog/BlogCTA';
import { BlogCard } from '@/components/blog/BlogCard';

export const metadata: Metadata = {
  title: "Engineering Blog & Tutorials | AmanaFlow",
  description: "Read technical guides on cloud infrastructure, WordPress optimization, and web security by the AmanaFlow engineering team.",
  alternates: {
    canonical: "/blog",
    languages: generateAlternateLanguages("/blog"),
  }
};

export default async function BlogIndex() {
  const locale = (await getLocale()) || 'en';
  const posts = getAllPosts(locale);
  
  const featuredPosts = posts.slice(0, 4);
  const regularPosts = posts.slice(4);

  // Group posts for spotlights (Simplified logic for now)
  const wordpressPosts = posts.filter(p => p.meta.category?.toLowerCase() === "wordpress excellence").slice(0, 3);
  const cloudPosts = posts.filter(p => p.meta.category?.toLowerCase() === "cloud infrastructure").slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-[#030712] pb-24">
      {/* ─── HEADER (UNTOUCHED HERO) ─── */}
      <section className="bg-white dark:bg-[#030712] border-b border-surface-100 dark:border-surface-900 pt-32 pb-24 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-30">
           <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-100 dark:bg-primary-900/10 rounded-full blur-[100px]" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100 dark:bg-indigo-900/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <Badge variant="primary" styleType="soft" className="mb-8 px-6 py-2 rounded-full border border-primary-100 dark:border-primary-900/30 text-sm font-bold">The AmanaFlow Engineering Blog</Badge>
          <h1 className="text-5xl md:text-7xl font-black text-surface-900 dark:text-white tracking-tighter mb-8 leading-[1]">
            Insights from the <br/> <span className="text-primary-600">Cloud Experts.</span>
          </h1>
          <p className="text-xl md:text-2xl text-surface-500 dark:text-surface-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Deep technical guides, hosting tutorials, and engineering news from our L3 systems engineers.
          </p>
        </div>
      </section>

      {/* ─── CATEGORY NAVIGATION ─── */}
      <BlogCategoryRail />

      <SectionWrapper paddingY="xl">
        {/* ─── FEATURED SECTION ─── */}
        <section className="mb-24">
           <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-surface-900 dark:text-white">Featured Stories</h2>
              <div className="h-px bg-surface-100 dark:bg-surface-800 flex-1 mx-8 hidden md:block" />
              <Badge variant="primary" styleType="soft" className="hidden md:block">Top Editorial Picks</Badge>
           </div>
           <BlogFeaturedSection posts={featuredPosts} />
        </section>

        {/* ─── LATEST POSTS GRID ─── */}
        <section className="mb-24">
           <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-surface-900 dark:text-white">Latest Intelligence</h2>
              <div className="h-px bg-surface-100 dark:bg-surface-800 flex-1 mx-8 hidden md:block" />
           </div>
           {regularPosts.length > 0 ? (
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {regularPosts.map((post) => (
                 <BlogCard key={post!.slug} post={post} />
               ))}
             </div>
           ) : (
             <div className="p-20 text-center border-2 border-dashed border-surface-100 dark:border-surface-800 rounded-[3rem]">
                <p className="text-surface-400 font-bold italic">More technical insights coming soon...</p>
             </div>
           )}
        </section>

        {/* ─── CATEGORY SPOTLIGHTS ─── */}
        {wordpressPosts.length > 0 && (
          <CategorySpotlight 
            title="WordPress Excellence"
            slug="wordpress"
            description="Optimize, secure, and scale your WordPress sites on LiteSpeed infrastructure."
            posts={wordpressPosts}
          />
        )}

        {cloudPosts.length > 0 && (
          <CategorySpotlight 
            title="Cloud Infrastructure"
            slug="vps-cloud"
            description="Deep dives into KVM, NVMe storage, and global network architecture."
            posts={cloudPosts}
          />
        )}

        {/* ─── NEWSLETTER CTA ─── */}
        <BlogCTA />
        
      </SectionWrapper>
    </div>
  );
}
