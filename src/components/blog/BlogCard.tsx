"use client";

import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { format, parseISO } from "date-fns";
import { motion } from "framer-motion";

interface BlogCardProps {
  post: any;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="block group">
        <Card className="overflow-hidden border-surface-200 dark:border-surface-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all shadow-sm hover:shadow-premium rounded-[2.5rem]">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-10 md:p-16 flex flex-col justify-center items-start border-r border-surface-100 dark:border-surface-800 bg-white dark:bg-surface-900">
               <Badge variant="primary" styleType="soft" className="mb-6 px-4 py-1.5 rounded-full uppercase text-[10px] font-black tracking-widest">
                 {post.meta.category}
               </Badge>
               <h3 className="text-3xl md:text-5xl font-black text-surface-900 dark:text-white mb-6 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-[1.1]">
                 {post.meta.title}
               </h3>
               <p className="text-lg text-surface-500 dark:text-surface-400 mb-10 line-clamp-3 font-medium leading-relaxed">
                 {post.meta.description}
               </p>
               <div className="flex items-center gap-6 text-sm font-bold text-surface-400 mt-auto">
                 <span className="flex items-center gap-2"><Calendar size={16} className="text-primary-500"/> {format(parseISO(post.meta.date), 'MMM dd, yyyy')}</span>
                 <span className="flex items-center gap-2"><Clock size={16} className="text-primary-500"/> {post.meta.readingTime}</span>
               </div>
            </div>
            <div className="bg-surface-50 dark:bg-surface-950 flex items-center justify-center p-12 relative overflow-hidden aspect-video md:aspect-auto">
               <img 
                 src={post.meta.image} 
                 alt={post.meta.title}
                 className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary-500)_0%,transparent_70%)] opacity-10" />
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 className="relative z-10 w-full aspect-video rounded-3xl bg-white dark:bg-surface-900 border border-surface-200 dark:border-surface-800 shadow-2xl overflow-hidden"
               >
                 <img 
                   src={post.meta.image} 
                   alt={post.meta.title}
                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-primary-950/20" />
               </motion.div>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <Card className="h-full border-surface-200 dark:border-surface-800 hover:border-primary-500 dark:hover:border-primary-500 transition-all shadow-sm flex flex-col rounded-[2rem] overflow-hidden group">
        <div className="aspect-video bg-surface-50 dark:bg-surface-950 flex items-center justify-center border-b border-surface-100 dark:border-surface-800 relative overflow-hidden group/img">
           <img 
             src={post.meta.image} 
             alt={post.meta.title}
             className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
           />
           <div className="absolute inset-0 bg-primary-950/20 group-hover/img:bg-transparent transition-colors" />
        </div>
        <CardContent className="p-8 flex flex-col flex-1 bg-white dark:bg-surface-900">
          <Badge variant="neutral" styleType="soft" className="w-fit mb-6 inline-block rounded-full text-[10px] font-black tracking-widest uppercase">{post.meta.category}</Badge>
          <h3 className="text-xl font-black text-surface-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
            {post.meta.title}
          </h3>
          <p className="text-sm text-surface-500 dark:text-surface-400 mb-8 line-clamp-2 flex-1 font-medium leading-relaxed">
            {post.meta.description}
          </p>
          <div className="flex items-center justify-between text-xs font-bold text-surface-400 mt-auto pt-6 border-t border-surface-50 dark:border-surface-800">
             <span className="flex items-center gap-1.5"><Calendar size={14} className="text-primary-500"/> {format(parseISO(post.meta.date), 'MMM dd')}</span>
             <span className="flex items-center gap-1.5 text-primary-600 dark:text-primary-400 group-hover:text-primary-500 transition-colors uppercase">Read <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
