// src/components/Contact.jsx
import React from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import { FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white select-none">
      {/* Parallax Banner */}
      <Parallax
        bgImage="https://images.unsplash.com/photo-1585421514287-27b2c045efd7?auto=format&fit=crop&w=1650&q=80"
        strength={300}
      >
        <div className="h-[200px] flex items-center justify-center bg-black/60">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center select-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>
        </div>
      </Parallax>

      {/* Contact Cards */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 select-none">
        {[
  {
    icon: <FaInstagram className="text-pink-500 text-3xl" />,
    label: '@glosslabdetailing',
    href: 'https://instagram.com/glosslabdetailing'
  },
  {
    icon: <FaPhone className="text-green-400 text-3xl" />,
    label: '(437) 993-7776',
    href: 'tel:4379937776'
  },
  {
    icon: <FaEnvelope className="text-yellow-300 text-3xl" />,
    label: 'glosslabs1@gmail.com',
    href: 'mailto:glosslabs1@gmail.com'
  }
].map((contact, index) => (
  <motion.a
    key={index}
    href={contact.href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-900 p-10 rounded-2xl shadow-lg text-center hover:scale-105 hover:shadow-2xl transition-all flex flex-col items-center select-none no-underline"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: false }}
  >
    <div className="mb-4 flex justify-center">{contact.icon}</div>
    <p className="text-lg text-gray-200 text-center break-words max-w-full">{contact.label}</p>
  </motion.a>
))}


        </div>
      </section>
    </div>
  );
}