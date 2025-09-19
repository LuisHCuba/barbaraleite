import React, { useState, useEffect } from 'react';
import ContactFormPopup from './ContactFormPopup';
import { useNavigate } from 'react-router-dom';
import { X, Star, Clock } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

const PopupBanner: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => String(time).padStart(2, '0');

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-300">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <div className="bg-gradient-to-r from-[#b5888b] to-[#a67d80] text-white px-4 py-2 rounded-full inline-flex items-center mb-6">
            <Star className="mr-2" size={16} />
            <span className="font-bold text-sm">{t('popup.offer')}</span>
          </div>

          <h2 className="text-2xl font-bold text-[#2e4773] mb-4">
            {t('popup.title')}
          </h2>

          <p className="text-[#151515] mb-6 leading-relaxed">
            {t('popup.desc')}
          </p>

          <div className="bg-gradient-to-r from-[#b5888b] to-[#a67d80] text-white p-4 rounded-xl mb-6">
            <div className="flex items-center justify-center mb-2">
              <Clock className="mr-2" size={20} />
              <span className="font-bold">{t('popup.countdown')}</span>
            </div>
            <div className="text-2xl font-mono font-bold">
              {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <button 
              onClick={() => {
                setIsVisible(false);
                navigate('/mapa-comportamental');
              }}
              className="bg-gradient-to-r from-[#25d366] to-[#20b358] hover:from-[#20b358] hover:to-[#1da851] text-white font-bold py-4 px-6 rounded-xl text-lg w-full inline-block transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {t('popup.cta')}
            </button>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="text-gray-500 text-sm hover:text-gray-700 transition-colors w-full"
            >
              {t('popup.decline')}
            </button>
          </div>

          <p className="text-xs text-gray-400">
            {t('popup.guarantee1')}<br/>
            {t('popup.guarantee2')}
          </p>
        </div>
      </div>
      
      <ContactFormPopup 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </div>
  );
};

export default PopupBanner;