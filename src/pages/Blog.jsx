import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const posts = [
  {
    slug: 'first-post',
    title: 'How I Built brianpoon.com – My Portfolio Site',
    date: 'May 2025',
    excerpt: 'How I designed, built, and deployed my personal website with React, Tailwind, and Cloudflare Pages.',
  },
];


export default function Blog() {
  return (
    <motion.section
      className="min-h-screen py-20 px-6 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="/" className="text-blue-600 dark:text-blue-400 underline mb-6 block">← Back to Home</Link>
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-10">
        {posts.map((post, i) => (
          <div key={i}>
            <h2 className="text-2xl font-semibold mb-1">
              <Link to={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
