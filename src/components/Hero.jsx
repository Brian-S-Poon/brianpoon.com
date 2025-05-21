import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        className="text-5xl font-bold tracking-tight mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Brian Poon
      </motion.h1>
      <motion.h2
        className="text-xl text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Software Engineer & Cloud Developer
      </motion.h2>
      <motion.p
        className="mt-6 max-w-xl text-lg text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        I build tools that solve real-world problems.
      </motion.p>

      {/* Social links */}
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <a
          href="https://github.com/Brian-S-Poon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-black dark:hover:text-white transition text-2xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/brian-s-poon/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition text-2xl"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </motion.div>
    </section>
  );
}
