import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { getAllPosts } from '@/lib/mdx';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { generateAlternateLanguages } from '@/lib/seo';
import { Badge } from '@/components/ui/Badge';
import { BlogCategoryRail } from '@/components/blog/BlogCategoryRail';
import { BlogCard } from '@/components/blog/BlogCard';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const categoryName = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return {
    title: `${categoryName} | AmanaFlow Blog`,
    description: `Explore authoritative guides and tutorials on ${categoryName} by the AmanaFlow engineering team.`,
    alternates: {
      canonical: `/blog/category/${category}`,
      languages: generateAlternateLanguages(`/blog/category/${category}`),
    }
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const locale = (await getLocale()) || 'en';
  const allPosts = getAllPosts(locale);
  
  // Filter posts by category (Case-insensitive match with slug)
  const categorySlug = category.toLowerCase();
  const posts = allPosts.filter(p => {
    // Current mapping for testing (should be standardized in taxonomy)
    const postCat = p.meta.category?.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-');
    return postCat === categorySlug || 
           (categorySlug === "wordpress" && postCat === "wordpress-excellence") ||
           (categorySlug === "vps-cloud" && postCat === "cloud-infrastructure");
  });

  if (posts.length === 0 && categorySlug !== "") {
    // In a real scenario, we might want to check against a master list of categories
    // but for now, if no posts, we show an empty state or 404
  }

  const categoryName = category.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div className="min-h-screen bg-white dark:bg-[#030712] pb-24">
      {/* ─── HEADER ─── */}
      <section className="bg-white dark:bg-[#030712] border-b border-surface-100 dark:border-surface-900 pt-32 pb-24 text-center px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Badge variant="primary" styleType="soft" className="mb-8 px-6 py-2 rounded-full border border-primary-100 dark:border-primary-900/30 text-sm font-bold uppercase tracking-widest">Category Archive</Badge>
          <h1 className="text-5xl md:text-7xl font-black text-surface-900 dark:text-white tracking-tighter mb-8 leading-[1]">
            {categoryName}
          </h1>
          <p className="text-xl md:text-2xl text-surface-500 dark:text-surface-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Everything we know about {categoryName.toLowerCase()}. Technical guides and automation workflows.
          </p>
        </div>
      </section>

      {/* ─── CATEGORY NAVIGATION ─── */}
      <BlogCategoryRail activeSlug={categorySlug} />

      <SectionWrapper paddingY="xl">
        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post!.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="p-32 text-center border-2 border-dashed border-surface-100 dark:border-surface-800 rounded-[3rem]">
             <div className="max-w-md mx-auto space-y-6">
                <h3 className="text-2xl font-black text-surface-900 dark:text-white">Planning more content...</h3>
                <p className="text-surface-500 font-medium">We haven't published any articles in <b>{categoryName}</b> yet, but our roadmap includes 10+ posts for this cluster.</p>
                <div className="pt-4">
                   <Badge variant="neutral">Roadmap Phase A-D</Badge>
                </div>
             </div>
          </div>
        )}
      </SectionWrapper>
    </div>
  );
}
