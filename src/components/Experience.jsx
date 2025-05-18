import React from 'react';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Phluid (Startup)',
    date: 'Apr 2025 – Present',
    bullets: [
      'Wrote Playwright E2E tests and GitLab CI config',
      'Built features for a productivity web app in Rails',
    ],
  },
  {
    role: 'Cloud Engineer Intern',
    company: 'vRotors Inc.',
    date: 'Oct 2023 – Jun 2024',
    bullets: [
      'Configured GCP firewall, VPN, backups, and IDS',
      'Implemented object detection using Google Cloud Video API',
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Experience</h2>
      {experiences.map((job, i) => (
        <div key={i} className="mb-8">
          <h3 className="text-xl font-bold">{job.role}</h3>
          <div className="text-gray-600 dark:text-gray-400 flex justify-between">
            <span>{job.company}</span>
            <span>{job.date}</span>
          </div>
          <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            {job.bullets.map((item, j) => <li key={j}>{item}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}
