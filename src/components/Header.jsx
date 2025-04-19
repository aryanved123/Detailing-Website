// src/components/Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-md text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <a
          href="#home"
          className="text-2xl font-bold hover:text-indigo-400 transition-colors"
        >
          GLOSSLAB Detailing
        </a>
        <nav className="space-x-6 text-sm">
          <a
            href="#about"
            className="hover:text-indigo-400 transition-colors"
          >
            About Us
          </a>
          <a
            href="#services"
            className="hover:text-indigo-400 transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            className="hover:text-indigo-400 transition-colors"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
