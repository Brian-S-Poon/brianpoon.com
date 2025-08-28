import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | Brian Poon</title>
        <meta name="description" content="The page you’re looking for doesn’t exist." />
        <meta property="og:title" content="404 – Page Not Found | Brian Poon" />
        <meta property="og:description" content="The page you’re looking for doesn’t exist." />
      </Helmet>
      <Motion.section
        className="min-h-screen flex flex-col items-center justify-center text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-4xl font-bold mb-4">404 – Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="underline text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          Go back home
        </Link>
      </Motion.section>
    </>
  );
}
