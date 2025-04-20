// src/components/Services.jsx
import React, { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCar, FaCouch, FaGem } from 'react-icons/fa';
import pkg3Img from '../../public/pkg3.png';


const services = [
  {
    title: 'Package 1: Exterior Wash',
    icon: <FaCar className="text-3xl text-indigo-400" />,  
    price: '$25',
    img: 'https://firstdetailing.ca/wp-content/uploads/2020/08/24.11-2020-Mercedes-Benz-AMG-S63-Coupe-1030x773.jpg',
    features: [
      'Hand wash & rinse',
      'Wax & polish finish',
      'Bug & tar removal',
      'Tire cleaning & shine',
      'Windows & mirrors cleaned',
    ],
  },
  {
    title: 'Package 2: Interior Detailing',
    icon: <FaCouch className="text-3xl text-green-400" />,  
    price: '$25',
    img: 'https://cavallistables.com/wp-content/uploads/2020/05/Luxury-Car-Detailing-Toronto.jpg',
    features: [
      'Vacuum carpets, seats & trunk',
      'Shampoo mats & upholstery',
      'Steam clean dashboard & console',
      'Deep clean leather & fabric',
      'Interior glass & mirror cleaning',
    ],
  },
  {
    title: 'Package 3: Full Interior & Exterior',
    icon: <FaGem className="text-3xl text-purple-400" />,  
    price: '$40',
    img: pkg3Img,
    features: [
      'All exterior detailing features',
      'All interior detailing features'
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="relative w-full h-60 md:h-72 lg:h-80 bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Our Detailing Services
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <motion.h2
        
        >
        </motion.h2>

        <div className="space-y-12 max-w-4xl mx-auto">
          {services.map((svc, index) => {
            const controls = useAnimation();
            const [ref, inView] = useInView({ triggerOnce: false });

            useEffect(() => {
              if (inView) {
                controls.start({ opacity: 1, x: 0 });
              } else {
                controls.start({ opacity: 0, x: index % 2 === 0 ? -100 : 100 });
              }
            }, [controls, inView, index]);

            return (
              <Tilt key={svc.title} glareEnable glareMaxOpacity={0.1} scale={1.02}>
                <motion.div
                  ref={ref}
                  className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow flex flex-col md:flex-row"
                  animate={controls}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="md:w-1/2 h-56 md:h-auto overflow-hidden">
                    <img
                      src={svc.img}
                      alt={svc.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-1/2 space-y-4 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold flex items-center text-white">
                      <span className="mr-3">{svc.icon}</span> {svc.title}
                    </h3>
                    <p className="text-lg font-semibold text-indigo-300">{svc.price}</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {svc.features.map((feat) => (
                        <li key={feat}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Tilt>
            );
          })}
        </div>
      </section>
    </div>
  );
}