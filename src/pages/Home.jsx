// src/components/Home.jsx
import React from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaCar, FaCouch, FaGem } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-800 text-white">
      {/* Hero Section */}
      <Parallax
  bgImage="https://mwcompany-adv.transforms.svdcdn.com/production/wpImported/2018/Pearl-White-Mercedes-Benz-S63-Coupe-ADV10R-M_V2-CS-Series-Wheels-Featured-Image-1.jpg?w=1920&h=650&auto=compress%2Cformat&fit=crop&dm=1696439876&s=e8e3f7f67953a828a8072c604817e456"
  strength={400}
  bgImageStyle={{
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    filter: 'brightness(20%)',
  }}
>
  <div className="h-screen relative">
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/40 z-10" />

    {/* Content */}
    <div className="relative z-20 flex flex-col items-center justify-center h-full text-white select-none">
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bring Back the Shine to Your Ride
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl mb-8 max-w-2xl text-center text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Interior, exterior, and full-package detailing services designed to make your car look brand new.
      </motion.p>
      <motion.a
        href="https://calendly.com/aved010404/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-12 py-4 rounded-full shadow-2xl transform transition hover:scale-105"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 90 }}
      >
        Book Now
      </motion.a>
    </div>
  </div>
</Parallax>
    </div>
  );
} 



