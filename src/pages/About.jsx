// src/components/About.jsx
import React from 'react';
import { Parallax } from 'react-parallax';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FaStar, FaUsers, FaCar, FaGem } from 'react-icons/fa';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-800 text-white">
      {/* About Content */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white/10 backdrop-blur rounded-2xl shadow-xl overflow-hidden">
          <div className="md:w-1/2 h-64 md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1570215171323-4ec3284b22c5?auto=format&fit=crop&w=800&q=80"
              alt="Detailing Team"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 text-gray-200 space-y-6 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Who We Are</h2>
            <p className="text-base md:text-lg">
              At Maple Detailing, we’re not just cleaning cars — we’re restoring pride in your ride. Founded by car enthusiasts, we bring expert care and passion to every vehicle, ensuring it shines like new.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start"><FaStar className="text-yellow-400 mr-3 mt-1" /> Professional-grade products & equipment</li>
              <li className="flex items-start"><FaUsers className="text-green-400 mr-3 mt-1" /> Mobile services available in the GTA</li>
              <li className="flex items-start"><FaCar className="text-blue-400 mr-3 mt-1" /> Interior & exterior detailing experts</li>
              <li className="flex items-start"><FaGem className="text-purple-400 mr-3 mt-1" /> Trusted by 500+ satisfied car owners</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
