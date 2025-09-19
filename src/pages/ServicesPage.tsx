import React from 'react';
import { CheckCircle, Star, Clock, Users, Target, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Mapa Comportamental Essencial",
      price: "R$ 247",
      originalPrice: "R$ 497",
      description: "Ideal para quem está começando a jornada de autoconhecimento",
      features: [
        "Diagnóstico Comportamental Completo",
        "Mapeamento de Pontos Fortes",
        "Análise de Gatilhos de Sabotagem",
        "Guia de Autoconhecimento",
        "Estratégias de Equilíbrio",
        "Acesso por 1 ano"
      ],
      popular: false
    },
    {
      title: "Mapa Comportamental Estratégico",
      price: "R$ 997",
      originalPrice: "R$ 2.241",
      description: "Para transformação completa e acelerada com acompanhamento personalizado",
      features: [
        "Tudo do Mapa Essencial",
        "Sessão Estratégica de 2h comigo",
        "Plano de Ação Personalizado",
        "Estratégias de Comunicação com os Filhos",
        "Roteiro de Organização Familiar",
        "Acompanhamento por 7 dias",
        "Garantia de 7 dias"
      ],
      popular: true
    },
    {
      title: "Consultoria Individual",
      price: "R$ 497",
      originalPrice: "",
      description: "Sessão individual para resolver questões específicas",
      features: [
        "Sessão de 90 minutos",
        "Análise personalizada do seu caso",
        "Estratégias específicas",
        "Material de apoio",
        "Follow-up por e-mail",
        "Gravação da sessão"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-[#4A90E2]" />,
      title: "Clareza de Propósito",
      description: "Descubra seus valores e prioridades reais para tomar decisões mais assertivas"
    },
    {
      icon: <Users className="w-8 h-8 text-[#4A90E2]" />,
      title: "Relacionamentos Fortalecidos",
      description: "Melhore a comunicação e conexão com seus filhos e família"
    },
    {
      icon: <Clock className="w-8 h-8 text-[#4A90E2]" />,
      title: "Gestão de Tempo Eficaz",
      description: "Organize sua rotina para ter tempo de qualidade com quem importa"
    },
    {
      icon: <Award className="w-8 h-8 text-[#4A90E2]" />,
      title: "Crescimento Profissional",
      description: "Desenvolva suas competências sem sacrificar a vida familiar"
    }
  ];

  return (
    <>
      <Header />
      <main className="section-padding">
        <div className="container-max">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-[#34495E] max-w-3xl mx-auto leading-relaxed">
              Transforme sua vida com nossos serviços especializados em psicopedagogia comportamental. Encontre o equilíbrio perfeito entre carreira e maternidade.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-[#E8F5E8] to-[#F0FFF0] rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-[#2C3E50] text-center mb-12">
              Por que Escolher Nossos Serviços?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-[#2C3E50] mb-2">{benefit.title}</h3>
                  <p className="text-[#34495E] text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 relative card-hover ${service.popular ? 'border-2 border-[#FF6B9D] transform scale-105' : ''}`}>
                {service.popular && (
                  <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FF6B9D] to-[#FF8FA3] text-white px-6 py-2 rounded-full font-bold text-sm">
                    <Star className="inline mr-1" size={14} />
                    MAIS POPULAR
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-[#2C3E50] mb-2">{service.title}</h3>
                  <p className="text-[#7F8C8D] mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    {service.originalPrice && (
                      <span className="text-[#95A5A6] line-through text-lg mr-2">{service.originalPrice}</span>
                    )}
                    <span className="text-3xl font-bold gradient-text">{service.price}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="text-[#27AE60] mr-3 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-[#34495E]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="btn-primary w-full">
                  Escolher Este Plano
                </button>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-[#2C3E50] text-center mb-12">
              Como Funciona Nosso Processo
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-r from-[#4A90E2] to-[#6BB6FF] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  1
                </div>
                <h3 className="font-bold text-[#2C3E50] mb-2">Avaliação Inicial</h3>
                <p className="text-[#34495E] text-sm">Análise completa do seu perfil comportamental atual</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-[#FF6B9D] to-[#FF8FA3] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  2
                </div>
                <h3 className="font-bold text-[#2C3E50] mb-2">Mapeamento</h3>
                <p className="text-[#34495E] text-sm">Identificação de pontos fortes e áreas de desenvolvimento</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-[#27AE60] to-[#2ECC71] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  3
                </div>
                <h3 className="font-bold text-[#2C3E50] mb-2">Plano de Ação</h3>
                <p className="text-[#34495E] text-sm">Estratégias personalizadas para sua transformação</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-[#8E44AD] to-[#9B59B6] text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  4
                </div>
                <h3 className="font-bold text-[#2C3E50] mb-2">Acompanhamento</h3>
                <p className="text-[#34495E] text-sm">Suporte contínuo para garantir resultados duradouros</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-[#FF6B9D] to-[#FF8FA3] rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Pronta para Transformar Sua Vida?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Não espere mais para ter o equilíbrio que você merece. Comece sua jornada de transformação hoje mesmo!
            </p>
            <button className="bg-white text-[#FF6B9D] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
              COMEÇAR AGORA
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;