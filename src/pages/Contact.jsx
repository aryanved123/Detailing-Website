// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 px-6 text-white min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-center text-gray-200 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Have questions or ready to book? Send us a message and we'll get back to you shortly.
        </motion.p>

        <motion.form
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="p-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-4 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </motion.form>

        <motion.button
          className="block mx-auto bg-white text-indigo-600 font-semibold px-10 py-3 rounded-full shadow-lg hover:shadow-xl transition-transform"
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          Send Message
        </motion.button>

        <motion.div
          className="mt-16 space-y-4 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center justify-center">
            <FaMapMarkerAlt className="mr-2 text-lg" /> 123 GTA Drive, Toronto, ON
          </p>
          <p className="flex items-center justify-center">
            <FaPhone className="mr-2 text-lg" /> (123) 456-7890
          </p>
          <p className="flex items-center justify-center">
            <FaEnvelope className="mr-2 text-lg" /> info@mapledetailing.ca
          </p>
        </motion.div>
      </div>
    </section>
  );
}
