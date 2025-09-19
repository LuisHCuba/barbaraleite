import React from 'react';
import { useState } from 'react';
import PopupBanner from '../components/PopupBanner';
import ContactFormPopup from '../components/ContactFormPopup';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircle, Target, Award, Users, Clock, Star, Heart, BookOpen } from 'lucide-react';
import { useLanguage } from '../components/LanguageProvider';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-[#b5888b]" />,
      title: t('home.benefits.clarity.title'),
      description: t('home.benefits.clarity.desc')
    },
    {
      icon: <Users className="w-8 h-8 text-[#b5888b]" />,
      title: t('home.benefits.relationships.title'),
      description: t('home.benefits.relationships.desc')
    },
    {
      icon: <Clock className="w-8 h-8 text-[#b5888b]" />,
      title: t('home.benefits.time.title'),
      description: t('home.benefits.time.desc')
    },
    {
      icon: <Award className="w-8 h-8 text-[#b5888b]" />,
      title: t('home.benefits.growth.title'),
      description: t('home.benefits.growth.desc')
    }
  ];

  const services = [
    {
      title: t('home.services.mapping.title'),
      description: t('home.services.mapping.desc'),
      features: [t('home.services.mapping.feature1'), t('home.services.mapping.feature2'), t('home.services.mapping.feature3')]
    },
    {
      title: t('home.services.consulting.title'),
      description: t('home.services.consulting.desc'),
      features: [t('home.services.consulting.feature1'), t('home.services.consulting.feature2'), t('home.services.consulting.feature3')]
    },
    {
      title: t('home.services.program.title'),
      description: t('home.services.program.desc'),
      features: [t('home.services.program.feature1'), t('home.services.program.feature2'), t('home.services.program.feature3')]
    }
  ];

  return (
    <>
      <PopupBanner />
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-[#f1ece8] to-[#e8ddd7] text-center">
        <div className="container-max">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2e4773] mb-8 leading-tight">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-[#151515] mb-8 font-medium max-w-4xl mx-auto leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setIsContactFormOpen(true)}
              className="bg-gradient-to-r from-[#25d366] to-[#20b358] hover:from-[#20b358] hover:to-[#1da851] text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block"
            >
              {t('home.hero.cta')}
            </button>
            <a 
              href="/about"
              className="text-[#2e4773] font-semibold hover:text-[#b5888b] transition-colors duration-300"
            >
              {t('home.hero.link')}
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-[#2e4773] text-center mb-16">
            {t('home.benefits.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#f1ece8] to-[#e8ddd7] card-hover">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-[#2e4773] mb-4 text-lg">{benefit.title}</h3>
                <p className="text-[#151515] leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gradient-to-br from-[#f1ece8] to-[#e8ddd7]">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-[#2e4773] text-center mb-16">
            {t('home.services.title')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl card-hover">
                <h3 className="text-2xl font-bold text-[#2e4773] mb-4">{service.title}</h3>
                <p className="text-[#151515] mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-[#151515]">
                      <CheckCircle className="text-[#b5888b] mr-3 flex-shrink-0" size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="/services"
                  className="text-[#b5888b] font-semibold hover:text-[#2e4773] transition-colors duration-300"
                >
                  {t('home.services.link')}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#2e4773] mb-6">
                {t('home.about.title')}
              </h2>
              <p className="text-xl text-[#151515] mb-6 leading-relaxed">
                {t('home.about.desc')}
              </p>
              <div className="flex items-center mb-6">
                <div className="flex space-x-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#b5888b]">500+</div>
                    <div className="text-sm text-[#151515]">{t('home.about.stat1')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#b5888b]">10+</div>
                    <div className="text-sm text-[#151515]">{t('home.about.stat2')}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#b5888b]">98%</div>
                    <div className="text-sm text-[#151515]">{t('home.about.stat3')}</div>
                  </div>
                </div>
              </div>
              <a 
                href="/about"
                className="btn-secondary"
              >
                {t('home.about.cta')}
              </a>
            </div>
            <div className="text-center">
              <img 
                src="https://mprorh.com.br/images/barbara.jpeg" 
                alt="Bárbara Leite - Psicopedagoga Comportamental"
                className="w-80 h-80 rounded-full object-cover shadow-2xl mx-auto border-4 border-[#b5888b]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-[#2e4773] to-[#34495e] text-white text-center">
        <div className="container-max">
          <h2 className="text-4xl font-bold mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            {t('home.cta.desc')}
          </p>
          <button 
            onClick={() => setIsContactFormOpen(true)}
            className="bg-gradient-to-r from-[#25d366] to-[#20b358] hover:from-[#20b358] hover:to-[#1da851] text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block"
          >
            {t('home.cta.button')}
          </button>
        </div>
      </section>

      <ContactFormPopup 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
      <Footer />
    </>
  );
};

export default HomePage;