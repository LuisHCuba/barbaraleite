import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  'pt-BR': {
    // Header
    'header.home': 'Início',
    'header.about': 'Sobre',
    'header.services': 'Serviços',
    'header.blog': 'Blog',
    'header.contact': 'Contato',
    'header.cta': 'Mapa Comportamental',
    'header.brand': 'Bárbara Leite',
    'header.subtitle': 'Psicopedagoga Comportamental',

    // HomePage
    'home.hero.title': 'Transforme Sua Vida Como Mãe Empreendedora',
    'home.hero.subtitle': 'Descubra como equilibrar carreira e maternidade sem culpa com o método científico da Psicopedagogia Comportamental',
    'home.hero.cta': 'Descobrir Meu Perfil',
    'home.hero.link': 'Conhecer Bárbara Leite →',
    
    'home.benefits.title': 'Por Que Escolher Nosso Método?',
    'home.benefits.clarity.title': 'Clareza de Propósito',
    'home.benefits.clarity.desc': 'Descubra seus valores e prioridades reais para tomar decisões mais assertivas',
    'home.benefits.relationships.title': 'Relacionamentos Fortalecidos',
    'home.benefits.relationships.desc': 'Melhore a comunicação e conexão com seus filhos e família',
    'home.benefits.time.title': 'Gestão de Tempo Eficaz',
    'home.benefits.time.desc': 'Organize sua rotina para ter tempo de qualidade com quem importa',
    'home.benefits.growth.title': 'Crescimento Profissional',
    'home.benefits.growth.desc': 'Desenvolva suas competências sem sacrificar a vida familiar',

    'home.services.title': 'Nossos Serviços',
    'home.services.mapping.title': 'Mapeamento Comportamental',
    'home.services.mapping.desc': 'Análise completa do seu perfil psicológico para autoconhecimento profundo',
    'home.services.mapping.feature1': 'Diagnóstico detalhado',
    'home.services.mapping.feature2': 'Pontos fortes identificados',
    'home.services.mapping.feature3': 'Plano de ação personalizado',
    'home.services.consulting.title': 'Consultoria Individual',
    'home.services.consulting.desc': 'Sessões personalizadas para resolver desafios específicos da maternidade e carreira',
    'home.services.consulting.feature1': 'Atendimento 1:1',
    'home.services.consulting.feature2': 'Estratégias customizadas',
    'home.services.consulting.feature3': 'Acompanhamento contínuo',
    'home.services.program.title': 'Programa Completo',
    'home.services.program.desc': 'Transformação total com metodologia científica comprovada',
    'home.services.program.feature1': 'Método completo',
    'home.services.program.feature2': 'Suporte integral',
    'home.services.program.feature3': 'Resultados garantidos',
    'home.services.link': 'Saiba mais →',

    'home.about.title': 'Sobre Bárbara Leite',
    'home.about.desc': 'Psicopedagoga Comportamental com mais de 10 anos de experiência, especializada em ajudar mães empreendedoras a encontrarem o equilíbrio perfeito entre carreira e família.',
    'home.about.stat1': 'Mães Transformadas',
    'home.about.stat2': 'Anos de Experiência',
    'home.about.stat3': 'Satisfação',
    'home.about.cta': 'Conhecer Mais',

    'home.cta.title': 'Pronta Para Transformar Sua Vida?',
    'home.cta.desc': 'Não espere mais para ter o equilíbrio que você merece. Descubra seu perfil comportamental e transforme sua relação com a maternidade e carreira.',
    'home.cta.button': 'COMEÇAR TRANSFORMAÇÃO AGORA',

    // About Page
    'about.title': 'Sobre Bárbara Leite',
    'about.subtitle': 'Psicopedagoga Comportamental dedicada a ajudar mães empreendedoras a encontrarem o equilíbrio perfeito entre carreira e família.',
    'about.mission.title': 'Minha Missão',
    'about.mission.desc': 'Ajudar mães empreendedoras a descobrirem que é possível ter sucesso profissional sem sacrificar a conexão com os filhos. Através do mapeamento comportamental científico, transformo vidas e fortaleço famílias.',
    'about.vision.title': 'Minha Visão',
    'about.vision.desc': 'Um mundo onde as mulheres não precisam escolher entre ser mães presentes e profissionais de sucesso. Onde o equilíbrio é possível e a culpa materna é coisa do passado.',

    // Services Page
    'services.title': 'Nossos Serviços',
    'services.subtitle': 'Transforme sua vida com nossos serviços especializados em psicopedagogia comportamental. Encontre o equilíbrio perfeito entre carreira e maternidade.',

    // Blog Page
    'blog.title': 'Blog',
    'blog.subtitle': 'Artigos, dicas e insights sobre desenvolvimento pessoal, maternidade consciente e equilíbrio entre vida pessoal e profissional.',

    // Contact Page
    'contact.title': 'Entre em Contato',
    'contact.subtitle': 'Estou aqui para ajudar você a transformar sua vida. Entre em contato e vamos conversar!',

    // Footer
    'footer.brand': 'Bárbara Leite',
    'footer.subtitle': 'Psicopedagoga Comportamental',
    'footer.desc': 'Especialista em Análise do Comportamento, com mais de 10 anos de experiência ajudando mães empreendedoras a encontrarem equilíbrio entre carreira e família.',
    'footer.quickLinks': 'Links Rápidos',
    'footer.legal': 'Legal',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Uso',
    'footer.social': 'Redes Sociais',
    'footer.copyright': '© 2025 Bárbara Leite. Todos os direitos reservados.',
    'footer.made': 'Desenvolvido com ❤️ para transformar vidas',

    // Popup Banner
    'popup.title': 'Transforme Sua Vida Como Mãe Empreendedora!',
    'popup.desc': 'Descubra como equilibrar carreira e maternidade sem culpa com o Mapa Comportamental',
    'popup.offer': 'OFERTA ESPECIAL',
    'popup.countdown': 'Oferta termina em:',
    'popup.cta': 'QUERO MEU MAPA AGORA!',
    'popup.decline': 'Não, obrigada',
    'popup.guarantee1': '✓ Método científico comprovado',
    'popup.guarantee2': '✓ Mais de 500 mães transformadas',

    // Privacy Page
    'privacy.title': 'Política de Privacidade',
    'privacy.lastUpdate': 'Última atualização: Janeiro de 2025',

    // Terms Page
    'terms.title': 'Termos de Uso',
    'terms.lastUpdate': 'Última atualização: Janeiro de 2025',

    // Common
    'common.backHome': 'Voltar ao início',
    'common.readMore': 'Ler mais',
    'common.learnMore': 'Saiba mais',
    'common.contactUs': 'Entre em contato',
    'common.email': 'E-mail',
    'common.phone': 'Telefone',
    'common.location': 'Localização',
    'common.hours': 'Horário de Atendimento',
  },
  'en-US': {
    // Header
    'header.home': 'Home',
    'header.about': 'About',
    'header.services': 'Services',
    'header.blog': 'Blog',
    'header.contact': 'Contact',
    'header.cta': 'Behavioral Map',
    'header.brand': 'Bárbara Leite',
    'header.subtitle': 'Behavioral Psychopedagogue',

    // HomePage
    'home.hero.title': 'Transform Your Life as an Entrepreneur Mom',
    'home.hero.subtitle': 'Discover how to balance career and motherhood without guilt using the scientific method of Behavioral Psychopedagogy',
    'home.hero.cta': 'Discover My Profile',
    'home.hero.link': 'Meet Bárbara Leite →',
    
    'home.benefits.title': 'Why Choose Our Method?',
    'home.benefits.clarity.title': 'Clarity of Purpose',
    'home.benefits.clarity.desc': 'Discover your real values and priorities to make more assertive decisions',
    'home.benefits.relationships.title': 'Strengthened Relationships',
    'home.benefits.relationships.desc': 'Improve communication and connection with your children and family',
    'home.benefits.time.title': 'Effective Time Management',
    'home.benefits.time.desc': 'Organize your routine to have quality time with those who matter',
    'home.benefits.growth.title': 'Professional Growth',
    'home.benefits.growth.desc': 'Develop your skills without sacrificing family life',

    'home.services.title': 'Our Services',
    'home.services.mapping.title': 'Behavioral Mapping',
    'home.services.mapping.desc': 'Complete analysis of your psychological profile for deep self-knowledge',
    'home.services.mapping.feature1': 'Detailed diagnosis',
    'home.services.mapping.feature2': 'Identified strengths',
    'home.services.mapping.feature3': 'Personalized action plan',
    'home.services.consulting.title': 'Individual Consulting',
    'home.services.consulting.desc': 'Personalized sessions to solve specific challenges of motherhood and career',
    'home.services.consulting.feature1': '1:1 Service',
    'home.services.consulting.feature2': 'Customized strategies',
    'home.services.consulting.feature3': 'Continuous follow-up',
    'home.services.program.title': 'Complete Program',
    'home.services.program.desc': 'Total transformation with proven scientific methodology',
    'home.services.program.feature1': 'Complete method',
    'home.services.program.feature2': 'Comprehensive support',
    'home.services.program.feature3': 'Guaranteed results',
    'home.services.link': 'Learn more →',

    'home.about.title': 'About Bárbara Leite',
    'home.about.desc': 'Behavioral Psychopedagogue with over 10 years of experience, specialized in helping entrepreneur mothers find the perfect balance between career and family.',
    'home.about.stat1': 'Transformed Mothers',
    'home.about.stat2': 'Years of Experience',
    'home.about.stat3': 'Satisfaction',
    'home.about.cta': 'Learn More',

    'home.cta.title': 'Ready to Transform Your Life?',
    'home.cta.desc': 'Don\'t wait any longer to have the balance you deserve. Discover your behavioral profile and transform your relationship with motherhood and career.',
    'home.cta.button': 'START TRANSFORMATION NOW',

    // About Page
    'about.title': 'About Bárbara Leite',
    'about.subtitle': 'Behavioral Psychopedagogue dedicated to helping entrepreneur mothers find the perfect balance between career and family.',
    'about.mission.title': 'My Mission',
    'about.mission.desc': 'Help entrepreneur mothers discover that it\'s possible to have professional success without sacrificing the connection with their children. Through scientific behavioral mapping, I transform lives and strengthen families.',
    'about.vision.title': 'My Vision',
    'about.vision.desc': 'A world where women don\'t need to choose between being present mothers and successful professionals. Where balance is possible and maternal guilt is a thing of the past.',

    // Services Page
    'services.title': 'Our Services',
    'services.subtitle': 'Transform your life with our specialized behavioral psychopedagogy services. Find the perfect balance between career and motherhood.',

    // Blog Page
    'blog.title': 'Blog',
    'blog.subtitle': 'Articles, tips and insights about personal development, conscious motherhood and work-life balance.',

    // Contact Page
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'I\'m here to help you transform your life. Get in touch and let\'s talk!',

    // Footer
    'footer.brand': 'Bárbara Leite',
    'footer.subtitle': 'Behavioral Psychopedagogue',
    'footer.desc': 'Behavior Analysis Specialist, with over 10 years of experience helping entrepreneur mothers find balance between career and family.',
    'footer.quickLinks': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.social': 'Social Media',
    'footer.copyright': '© 2025 Bárbara Leite. All rights reserved.',
    'footer.made': 'Made with ❤️ to transform lives',

    // Popup Banner
    'popup.title': 'Transform Your Life as an Entrepreneur Mom!',
    'popup.desc': 'Discover how to balance career and motherhood without guilt with the Behavioral Map',
    'popup.offer': 'SPECIAL OFFER',
    'popup.countdown': 'Offer ends in:',
    'popup.cta': 'I WANT MY MAP NOW!',
    'popup.decline': 'No, thanks',
    'popup.guarantee1': '✓ Proven scientific method',
    'popup.guarantee2': '✓ Over 500 transformed mothers',

    // Privacy Page
    'privacy.title': 'Privacy Policy',
    'privacy.lastUpdate': 'Last updated: January 2025',

    // Terms Page
    'terms.title': 'Terms of Use',
    'terms.lastUpdate': 'Last updated: January 2025',

    // Common
    'common.backHome': 'Back to home',
    'common.readMore': 'Read more',
    'common.learnMore': 'Learn more',
    'common.contactUs': 'Contact us',
    'common.email': 'Email',
    'common.phone': 'Phone',
    'common.location': 'Location',
    'common.hours': 'Business Hours',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>('pt-BR');

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations['pt-BR']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};