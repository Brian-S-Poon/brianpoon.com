import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function SplitIt() {
  return (
    <>
      <Helmet>
        <title>Split It – Group Expense App | Brian Poon</title>
        <meta name="description" content="Split It is a fast, no-login web app for instantly splitting group expenses." />
        <meta property="og:title" content="Split It – Group Expense App | Brian Poon" />
        <meta property="og:description" content="Split It is a fast, no-login web app for instantly splitting group expenses." />
      </Helmet>
      <Motion.section
        className="min-h-screen py-20 px-6 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/" className="text-blue-600 dark:text-blue-400 underline mb-4 block">← Back to Home</Link>
        <h1 className="text-4xl font-bold mb-4">Split It – Group Expense App</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Split It is a fast, no-login web app for instantly splitting group expenses. It solves a real pain point during hangouts, trips, or dinners where people need to fairly divide costs but hate using bloated apps.
        </p>

        <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
          <li>Add and remove participants</li>
          <li>Track expenses, amounts, and payers</li>
          <li>Instantly see who owes what</li>
          <li>Venmo username support (auto-links)</li>
          <li>Undo, edit, and delete transactions</li>
          <li>Dark mode and local storage</li>
        </ul>

        <div className="mb-6">
          <h2 className="text-xl font-semibold">Stack</h2>
          <p className="text-gray-700 dark:text-gray-300">React, Tailwind CSS, Vite, Supabase (optional), LocalStorage</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/Brian-S-Poon/split-it"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black dark:border-white px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            💻 View Code
          </a>
        </div>
      </Motion.section>
    </>
  );
}
