import { useEffect, useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.theme === 'dark' || (
      !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.theme = isDark ? 'dark' : 'light';
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle dark mode"
      className="fixed top-4 right-4 z-50 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm rounded-full px-3 py-1 transition-colors flex items-center gap-1"
    >
      {isDark ? (
        <>
          <HiSun />
          <span>Light</span>
        </>
      ) : (
        <>
          <HiMoon />
          <span>Dark</span>
        </>
      )}
    </button>
  );
}
