import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion } from 'framer-motion';

export default function Post() {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/posts/${slug}.md`)
      .then(res => {
        if (!res.ok) throw new Error('404');
        return res.text();
      })
      .then(setContent)
      .catch(() => setContent('# 404\nPost not found.'));
  }, [slug]);

  return (
    <motion.section
      className="min-h-screen py-20 px-6 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="/blog" className="text-blue-600 dark:text-blue-400 underline mb-6 block">
        ← Back to Blog
      </Link>

      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </motion.section>
  );
}
