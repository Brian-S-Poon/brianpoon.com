import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <Motion.h1
        className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Brian Poon
      </Motion.h1>

      <Motion.h2
        className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Software Engineer
      </Motion.h2>

      {/* Social links */}
      <Motion.div
        className="mt-4 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
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
      </Motion.div>
    </section>
  );
}
