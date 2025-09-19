import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageProvider';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-[#f1ece8] overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mapa-comportamental" element={<LandingPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;