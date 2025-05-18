import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import SplitIt from './pages/SplitIt';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const location = useLocation();

  return (
    <main className="bg-white text-black dark:bg-black dark:text-white font-sans">
      <ThemeToggle />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects/split-it" element={<SplitIt />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
}

export default App;
