import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      className="py-20 px-6 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold mb-6">About</h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        I’m a software engineer based in California, experienced in full-stack development and cloud infrastructure.
        I’ve worked with startups and built apps from scratch using React, Python, and GCP.
        I’m passionate about solving real-world problems with simple, elegant code.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {['Python', 'JavaScript', 'React', 'GCP', 'AWS', 'Docker', 'Tailwind'].map(skill => (
          <span key={skill} className="bg-gray-100 dark:bg-gray-800 text-sm px-3 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
