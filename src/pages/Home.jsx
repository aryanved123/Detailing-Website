// src/components/Home.jsx
import React from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaCar, FaCouch, FaGem } from 'react-icons/fa';

const features = [
  {
    icon: <FaCar className="text-4xl text-indigo-600" />,
    title: 'Exterior Detailing',
    desc: 'Wash, wax, polish, tire shine – we make your vehicle turn heads.',
    bg: 'bg-white',
    img: 'https://images.unsplash.com/photo-1571607385429-4c3b7f3a50ae?auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: <FaCouch className="text-4xl text-green-600" />,
    title: 'Interior Detailing',
    desc: 'Deep cleaning of seats, carpets, dashboard & all nooks for a like-new feel.',
    bg: 'bg-white',
    img: 'https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&w=400&q=80'
  },
  {
    icon: <FaGem className="text-4xl text-purple-600" />,
    title: 'Full Package',
    desc: 'Restore your vehicle inside and out — our most popular service.',
    bg: 'bg-white',
    img: 'https://images.unsplash.com/photo-1611186871348-bb3a1b0629e2?auto=format&fit=crop&w=400&q=80'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-800 text-white">
      {/* Hero Section */}
      <Parallax
        bgImage="https://mwcompany-adv.transforms.svdcdn.com/production/wpImported/2019-2021/White-Mercedes-S63-AMG-ADV5.2-M.V2-Advanced-Series-Wheels-Featured-Image-1.jpg?w=1500&h=650&auto=compress%2Cformat&fit=crop&dm=1696441609&s=94a4f9b67d874adfdc281c93d950b0e8"
        bgImageStyle={{ filter: 'brightness(50%)' }}
        strength={400}
      >
        <div className="h-screen flex flex-col items-center justify-center bg-black/40">
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
      </Parallax>
    </div>
  );
}
