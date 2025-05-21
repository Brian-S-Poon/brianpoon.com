import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Split It',
    description: 'Instant group expense splitter with Venmo links and PDF export.',
    stack: ['React', 'Tailwind', 'Supabase'],
    route: '/projects/split-it',
  },

];

export default function Projects() {
  return (
    <motion.section
      className="py-20 px-6 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid gap-6">
        {projects.map((project, i) => {
          const Wrapper = project.route ? Link : 'a';
          const props = project.route
            ? { to: project.route }
            : { href: project.link, target: '_blank', rel: 'noopener noreferrer' };

          return (
            <motion.div
              key={i}
              className="block border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition"
              whileHover={{ scale: 1.02 }}
            >
              <Wrapper {...props}>
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
            </motion.div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/projects"
          className="inline-block text-blue-600 dark:text-blue-400 font-medium underline underline-offset-4 hover:opacity-80 transition"
        >
          View all projects →
        </Link>
      </div>
    </motion.section>
  );
}
