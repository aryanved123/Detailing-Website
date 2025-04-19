import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ParallaxProvider } from 'react-scroll-parallax'; // ✅ import this

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParallaxProvider> {/* ✅ wrap App for global parallax */}
      <App />
    </ParallaxProvider>
  </StrictMode>
);
