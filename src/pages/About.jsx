// src/components/About.jsx
import React from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import { FaStar, FaCar, FaGem } from 'react-icons/fa';

export default function About() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Parallax Banner */}
      <Parallax
        bgImage="https://images.unsplash.com/photo-1570215171323-4ec3284b22c5?auto=format&fit=crop&w=1650&q=80"
        strength={300}
      >
        <div className="h-[200px] flex items-center justify-center bg-black/60">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center select-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About GLOSSLAB Detailing
          </motion.h1>
        </div>
      </Parallax>

      {/* About Content */}
      <section className="px-4 md:px-8 lg:px-16 py-20">
        <motion.div
          className="max-w-6xl mx-auto bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          {/* Image */}
          <div className="md:w-1/2 h-72 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1570215171323-4ec3284b22c5?auto=format&fit=crop&w=800&q=80"
              alt="Detailing Team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 p-6 md:p-10 space-y-6 text-gray-200 select-none">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Passion Turned Profession</h2>
            <p className="text-lg leading-loose">
              We’re two car guys from Markham, Ontario who’ve turned our passion for detailing into a business. At GLOSSLAB Detailing, our goal is simple: make every car look showroom-ready through quality and care.
            </p>
            <p className="text-lg leading-loose">
              We offer precision interior and exterior detailing — including deep vacuuming, stain lifting, leather conditioning, wax finishes, tire shine, and more.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-lg"><FaStar className="text-yellow-500 mr-3 mt-1" />Top-grade detailing products & tools</li>
              <li className="flex items-start text-lg"><FaCar className="text-blue-400 mr-3 mt-1" />Interior & exterior detailing packages</li>
              <li className="flex items-start text-lg"><FaGem className="text-purple-400 mr-3 mt-1" />Driven by quality, built with care</li>
            </ul>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
