// src/components/Layout.jsx
import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white">
      {children}
    </div>
  );
}
