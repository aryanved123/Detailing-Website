// src/components/About.jsx
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { FaStar, FaCar, FaGem } from 'react-icons/fa';

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 40 });
    }
  }, [controls, inView]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
      {/* About Content */}
      <motion.section
        ref={ref}
        className="px-4 md:px-8 lg:px-16 w-full"
        animate={controls}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="max-w-6xl mx-auto flex flex-col md:flex-row bg-gray-900 text-white rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="md:w-1/2 h-64 md:h-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1570215171323-4ec3284b22c5?auto=format&fit=crop&w=800&q=80"
              alt="Detailing Team"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 p-8 space-y-6 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold">About GLOSSLAB Detailing</h2>
            <p className="text-base md:text-lg">
              We're two car guys from Markham, Ontario with a passion for detailing and making cars look as amazing as possible. GLOSSLAB Detailing is a new business built from that drive — with an eye for perfection and a love for the process.
            </p>
            <p className="text-base md:text-lg">
              At GLOSSLAB, we offer interior and exterior detailing services that go beyond the basics. From deep vacuuming, stain removal, and leather conditioning to exterior washes, tire shine, and paint polish — our goal is to bring out the best in your car every single time.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start"><FaStar className="text-yellow-500 mr-3 mt-1" /> Professional-grade products & equipment</li>
              <li className="flex items-start"><FaCar className="text-blue-400 mr-3 mt-1" /> Interior & exterior detailing specialists</li>
              <li className="flex items-start"><FaGem className="text-purple-400 mr-3 mt-1" /> Passionate about quality and care</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}
