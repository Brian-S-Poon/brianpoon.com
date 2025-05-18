import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold tracking-tight mb-4">Brian Poon</h1>
      <h2 className="text-xl text-gray-600 dark:text-gray-400">Software Engineer & Cloud Developer</h2>
      <p className="mt-6 max-w-xl text-lg text-gray-700 dark:text-gray-300">
        I build tools that solve real-world problems.
      </p>
    </section>
  );
}
