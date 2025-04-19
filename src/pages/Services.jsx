// src/components/Services.jsx
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FaCar, FaCouch } from 'react-icons/fa';

const services = [
  {
    title: 'Exterior Detailing',
    icon: <FaCar className="text-3xl text-indigo-600" />,  
    img: 'https://images.unsplash.com/photo-1571607385429-4c3b7f3a50ae?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Hand wash & rinse',
      'Wax & polish finish',
      'Bug & tar removal',
      'Tire cleaning & shine',
      'Windows & mirrors cleaned',
    ],
  },
  {
    title: 'Interior Detailing',
    icon: <FaCouch className="text-3xl text-green-600" />,  
    img: 'https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Vacuum carpets, seats & trunk',
      'Shampoo mats & upholstery',
      'Steam clean dashboard & console',
      'Deep clean leather & fabric',
      'Interior glass & mirror cleaning',
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-blue-800 text-white">
      {/* Simple Hero Section */}
      <section
        className="relative w-full h-60 md:h-72 lg:h-80 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://firstdetailing.ca/wp-content/uploads/2020/08/24.11-2020-Mercedes-Benz-AMG-S63-Coupe-1030x773.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Our Detailing Services
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <motion.h2
          className="text-xl md:text-2xl font-medium mb-12 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Explore What We Offer
        </motion.h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          {services.map((svc) => (
            <Tilt key={svc.title} glareEnable glareMaxOpacity={0.1} scale={1.02}>
              <motion.div
                className="bg-white text-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/2 h-56 md:h-auto overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-1/2 space-y-4 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold flex items-center text-gray-800">
                    <span className="mr-3">{svc.icon}</span> {svc.title}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {svc.features.map((feat) => (
                      <li key={feat}>{feat}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>
    </div>
  );
}
