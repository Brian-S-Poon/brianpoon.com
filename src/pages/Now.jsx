import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Now() {
  return (
    <motion.section
      className="min-h-screen py-20 px-6 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="/" className="text-blue-600 dark:text-blue-400 underline mb-4 block">← Back to Home</Link>
      <h1 className="text-4xl font-bold mb-6">What I'm Doing Now</h1>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
        I'm currently building and refining my personal portfolio, shipping features for a startup project, and experimenting with indie apps like <strong>Split It</strong>.
        <br /><br />
        On the side, I'm exploring ideas for revenue-generating solo dev tools, brushing up on React Router, and sharing my learning journey online.
        <br /><br />
        I recently implemented Playwright tests and GitLab CI pipelines for a productivity web app, and I’m continuing to build full-stack apps with Tailwind, Supabase, and GCP.
      </p>
    </motion.section>
  );
}
