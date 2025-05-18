import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-600">
      <p>© {new Date().getFullYear()} Brian Poon</p>
    </footer>
  );
}
