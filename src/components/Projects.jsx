import React from 'react';

const projects = [
  {
    title: 'Split It',
    description: 'Instant group expense splitter with Venmo links and PDF export.',
    stack: ['React', 'Tailwind', 'Supabase'],
    link: '#',
  },
  {
    title: 'ProxiPal',
    description: 'Real-time proximity-based friend finder with Google Maps API.',
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
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid gap-6">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            className="block border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((tech, j) => (
                <span key={j} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
