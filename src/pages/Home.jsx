import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Brian Poon – Software Developer</title>
        <meta name="description" content="Personal portfolio of Brian Poon, a software developer." />
        <meta property="og:title" content="Brian Poon – Software Developer" />
        <meta property="og:description" content="Personal portfolio of Brian Poon, a software developer." />
      </Helmet>
      <Motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <Hero />
        <Footer />
      </Motion.div>
    </>
  );
}
