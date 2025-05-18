import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Split It',
    description: 'Instant group expense splitter with Venmo and PDF export.',
    stack: ['React', 'Tailwind', 'Supabase'],
    route: '/projects/split-it',
  },
  {
    title: 'ProxiPal',
    description: 'Real-time proximity-based friend finder using Google Maps.',
    stack: ['Flutter', 'Firebase'],
    link: '#',
  },
  {
    title: 'Budget Manager',
    description: 'Track income, expenses, and financial goals with graphs.',
    stack: ['Python', 'SQLite', 'Tkinter'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <motion.section
      className="min-h-screen py-20 px-6 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Link to="/" className="text-blue-600 dark:text-blue-400 underline mb-6 block">← Back to Home</Link>
      <h1 className="text-4xl font-bold mb-10">Projects</h1>
      <div className="grid gap-6">
        {projects.map((project, i) => {
          const Wrapper = project.route ? Link : 'a';
          const props = project.route
            ? { to: project.route }
            : { href: project.link, target: '_blank', rel: 'noopener noreferrer' };

          return (
            <Wrapper key={i} {...props} className="block border border-gray-300 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((tech, j) => (
                  <span key={j} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </Wrapper>
          );
        })}
      </div>
    </motion.section>
  );
}
