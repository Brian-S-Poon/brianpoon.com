import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Phluid (Startup)',
    date: 'Apr 2025 – Present',
    bullets: [
      'Wrote end-to-end tests using Playwright and configured GitLab CI pipelines',
      'Built productivity features in a Rails web app with CI/test integration',
    ],
    tools: 'Rails, Playwright, GitLab CI, JavaScript',
  },
  {
    role: 'Cloud Engineering Intern',
    company: 'vRotors Inc.',
    date: 'Oct 2023 – Jun 2024',
    bullets: [
      'Configured GCP firewall rules, VPN access, backups, and intrusion detection systems',
      'Scheduled automated backups with Cloud Backup & DR for multi-region GCP instances',
    ],
    tools: 'Google Cloud Platform, Amazon Web Services',
  },
];

export default function Experience() {
  return (
    <motion.section
      className="py-20 px-6 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold mb-8">Experience</h2>
      {experiences.map((job, i) => (
        <motion.div
          key={i}
          className="mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold">{job.role}</h3>
          <div className="text-gray-600 dark:text-gray-400 flex justify-between text-sm mb-1">
            <span>{job.company}</span>
            <span>{job.date}</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            {job.bullets.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 italic">
            Tools: {job.tools}
          </p>
        </motion.div>
      ))}
    </motion.section>
  );
}
