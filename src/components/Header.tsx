import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-[#b5888b]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-[#b5888b] to-[#a67d80] w-12 h-12 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center">
              <span className="text-white text-4xl font-serif italic font-bold" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>B</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#2e4773] group-hover:text-[#b5888b] transition-colors duration-300">
                {t('header.brand')}
              </h1>
              <p className="text-sm text-[#151515]/70 font-medium">
                {t('header.subtitle')}
              </p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-[#151515] hover:text-[#b5888b] font-medium transition-colors duration-300 relative group"
            >
              {t('header.home')}
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#b5888b] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/about" 
              className="text-[#151515] hover:text-[#b5888b] font-medium transition-colors duration-300 relative group"
            >
              {t('header.about')}
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#b5888b] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/services" 
              className="text-[#151515] hover:text-[#b5888b] font-medium transition-colors duration-300 relative group"
            >
              {t('header.services')}
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#b5888b] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/blog" 
              className="text-[#151515] hover:text-[#b5888b] font-medium transition-colors duration-300 relative group"
            >
              {t('header.blog')}
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#b5888b] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/contact" 
              className="text-[#151515] hover:text-[#b5888b] font-medium transition-colors duration-300 relative group"
            >
              {t('header.contact')}
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#b5888b] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
          
          {/* CTA and Language Selector */}
          <div className="hidden lg:flex items-center space-x-4">
            <select 
              value={language}
              onChange={handleLanguageChange}
              className="px-3 py-2 rounded-lg border border-[#b5888b]/30 bg-white text-[#151515] text-sm cursor-pointer transition-all duration-300 hover:border-[#b5888b] focus:ring-2 focus:ring-[#b5888b]/20 focus:outline-none"
            >
              <option value="pt-BR">PT</option>
              <option value="en-US">EN</option>
            </select>
            
            <Link 
              to="/mapa-comportamental"
              className="bg-gradient-to-r from-[#25d366] to-[#20b358] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
            >
              {t('header.cta')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#151515] hover:bg-[#f1ece8] transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#b5888b]/20 bg-white">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-[#151515] hover:text-[#b5888b] font-medium transition-colors duration-300 px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.home')}
              </Link>
              <Link 
                to="/about" 
                className="text-[#151515] hover:text-[#b5888b] font-medium transition-colors duration-300 px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.about')}
              </Link>
              <Link 
                to="/services" 
                className="text-[#151515] hover:text-[#b5888b] font-medium transition-colors duration-300 px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.services')}
              </Link>
              <Link 
                to="/blog" 
                className="text-[#151515] hover:text-[#b5888b] font-medium transition-colors duration-300 px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.blog')}
              </Link>
              <Link 
                to="/contact" 
                className="text-[#151515] hover:text-[#b5888b] font-medium transition-colors duration-300 px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('header.contact')}
              </Link>
              
              <div className="flex items-center justify-between pt-4 border-t border-[#b5888b]/20">
                <select 
                  value={language}
                  onChange={handleLanguageChange}
                  className="px-3 py-2 rounded-lg border border-[#b5888b]/30 bg-white text-[#151515] text-sm"
                >
                  <option value="pt-BR">Português</option>
                  <option value="en-US">English</option>
                </select>
                
                <Link 
                  to="/mapa-comportamental"
                  className="bg-gradient-to-r from-[#25d366] to-[#20b358] text-white px-4 py-2 rounded-lg font-semibold text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.cta')}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;