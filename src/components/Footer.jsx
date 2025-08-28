import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-600">
      <p>© {new Date().getFullYear()} Brian Poon</p>
      <p className="mt-2 space-x-2">
        <Link to="/now" className="underline hover:text-blue-500 dark:hover:text-blue-400">Now</Link> ·
        <Link to="/blog" className="underline hover:text-blue-500 dark:hover:text-blue-400">Blog</Link> ·
        <Link to="/projects" className="underline hover:text-blue-500 dark:hover:text-blue-400">Projects</Link> ·
        <a
          href="mailto:brian@brianpoon.com"
          className="underline hover:text-blue-500 dark:hover:text-blue-400"
        >
          Email
        </a>
      </p>
      {/* TODO: Consider obfuscating the email or using a contact form to reduce spam */}
    </footer>
  );
}
