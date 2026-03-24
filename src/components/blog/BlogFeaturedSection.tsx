"use client";

import React from "react";
import { BlogCard } from "./BlogCard";

export function BlogFeaturedSection({ posts }: { posts: any[] }) {
  if (!posts || posts.length === 0) return null;

  const mainPost = posts[0];
  const secondaryPosts = posts.slice(1, 4);

  return (
    <section className="py-12">
      <div className="flex flex-col gap-12">
        {/* Main Featured */}
        <div className="w-full">
          <BlogCard post={mainPost} featured />
        </div>

        {/* Secondary Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondaryPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
