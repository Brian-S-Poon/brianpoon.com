import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      className="py-20 px-6 max-w-xl mx-auto text-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        Want to work together or just say hi?
      </p>
      <a
        href="mailto:brian@example.com"
        className="text-blue-600 dark:text-blue-400 underline hover:opacity-80 transition"
      >
        brian@example.com
      </a>
    </motion.section>
  );
}
