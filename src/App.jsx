import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SplitIt from './pages/SplitIt';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <main className="bg-white text-black dark:bg-black dark:text-white font-sans">
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/split-it" element={<SplitIt />} />
      </Routes>
    </main>
  );
}

export default App;
