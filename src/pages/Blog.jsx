import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const posts = [
  {
    slug: 'first-post',
    title: 'How I Built brianpoon.com – My Portfolio Site',
    date: '2025-05-19',
    excerpt: 'How I designed, built, and deployed my personal website with React, Tailwind, and Cloudflare Pages.',
    minutesToRead: 3,
  },
];

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Blog() {
  return (
    <motion.section
      className="min-h-screen py-20 px-6 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="/" className="text-blue-600 dark:text-blue-400 underline mb-8 block">← Back to Home</Link>
      <h1 className="text-4xl font-bold mb-12">Blog</h1>

      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post, i) => (
          <Link
            key={i}
            to={`/blog/${post.slug}`}
            className="group block border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition bg-white dark:bg-gray-900"
          >
            <h2 className="text-xl font-semibold group-hover:underline">{post.title}</h2>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {formatDate(post.date)} · {post.minutesToRead} min read
            </div>
            <p className="text-gray-700 dark:text-gray-300 mt-3">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}
