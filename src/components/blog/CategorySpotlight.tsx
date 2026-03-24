"use client";

import React from "react";
import { BlogCard } from "./BlogCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CategorySpotlightProps {
  title: string;
  description: string;
  slug: string;
  posts: any[];
}

export function CategorySpotlight({ title, description, slug, posts }: CategorySpotlightProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="py-16 border-t border-surface-100 dark:border-surface-800 first:border-t-0">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-black text-surface-900 dark:text-white mb-4 leading-tight">{title}</h2>
          <p className="text-lg text-surface-500 dark:text-surface-400 font-medium">{description}</p>
        </div>
        <Link 
          href={`/blog/category/${slug}`} 
          className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-black uppercase text-sm tracking-widest hover:text-primary-500 transition-colors group"
        >
          View All {title} <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.slice(0, 3).map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
