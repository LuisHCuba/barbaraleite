import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#2e4773] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-[#b5888b] to-[#a67d80] p-3 rounded-xl shadow-lg">
                <Heart className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {t('footer.brand')}
                </h3>
                <p className="text-white/80 text-sm font-medium">
                  {t('footer.subtitle')}
                </p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              {t('footer.desc')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <Mail size={18} />
                <span>contato@barbaraleite.com.br</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <Phone size={18} />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin size={18} />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-white/80 hover:text-[#b5888b] transition-colors duration-300"
                >
                  {t('header.home')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-white/80 hover:text-[#b5888b] transition-colors duration-300"
                >
                  {t('header.about')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-white/80 hover:text-[#b5888b] transition-colors duration-300"
                >
                  {t('header.services')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-white/80 hover:text-[#b5888b] transition-colors duration-300"
                >
                  {t('header.blog')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-white/80 hover:text-[#b5888b] transition-colors duration-300"
                >
                  {t('header.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-white/80 hover:text-[#b5888b] transition-colors duration-300"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-white/80 hover:text-[#b5888b] transition-colors duration-300"
                >
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="text-lg font-bold text-white mb-4">{t('footer.social')}</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-white/10 p-3 rounded-lg hover:bg-[#b5888b] transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 p-3 rounded-lg hover:bg-[#b5888b] transition-colors duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-white/10 p-3 rounded-lg hover:bg-[#b5888b] transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/80 text-sm">
            {t('footer.copyright')}
          </p>
          <p className="text-white/60 text-xs mt-2">
            {t('footer.made')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;