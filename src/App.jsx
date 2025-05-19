import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import Projects from './pages/Projects';
import SplitIt from './pages/SplitIt';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Now from './pages/Now';
import ThemeToggle from './components/ThemeToggle';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();

  return (
    <main className="bg-white text-black dark:bg-black dark:text-white font-sans">
      <ThemeToggle />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/split-it" element={<SplitIt />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Post />} />
          <Route path="/now" element={<Now />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
}

export default App;
