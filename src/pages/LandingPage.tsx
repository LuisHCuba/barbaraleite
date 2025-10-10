import React, { useState, useEffect } from 'react';
import ContactFormPopup from '../components/ContactFormPopup';
import { Clock, CheckCircle, Lock, Star, Award, Key, Lightbulb, Frown, Zap, Smartphone, AlertTriangle, Target, HeartCrack, ChevronLeft, ChevronRight } from 'lucide-react';

const LandingPage: React.FC = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 10,
    seconds: 0
  });

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

  const testimonials = [
    {
      text: "Em 7 dias, consegui organizar minha rotina de forma que tenho tempo de qualidade com meus filhos sem prejudicar meu negócio. A culpa desapareceu e a conexão com eles nunca foi tão forte.",
      author: "Marina Silva",
      role: "Consultora de Marketing Digital",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "O Mapa Comportamental me ajudou a entender meus gatilhos e a criar uma rotina que realmente funciona para mim e minha família. Recomendo muito!",
      author: "Ana Costa",
      role: "CEO de Startup",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "Finalmente consegui equilibrar minha carreira e ser a mãe presente que sempre quis ser. Meus filhos notaram a diferença e nosso relacionamento melhorou muito.",
      author: "Carla Mendes",
      role: "Arquiteta e Mãe de 2",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "O método da Bárbara transformou completamente minha perspectiva sobre maternidade e trabalho. Agora tenho clareza sobre minhas prioridades e vivo com muito mais propósito.",
      author: "Juliana Santos",
      role: "Advogada e Empresária",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "Antes eu vivia correndo e me sentindo culpada o tempo todo. Hoje sei exatamente onde focar minha energia e meus filhos percebem que estou mais presente, mesmo trabalhando.",
      author: "Fernanda Lima",
      role: "Dentista e Empreendedora",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "Descobri que não preciso escolher entre ser mãe e ser profissional. O mapeamento me mostrou como ser excelente nas duas áreas sem me esgotar.",
      author: "Patrícia Oliveira",
      role: "Psicóloga Clínica",
      image: "https://images.unsplash.com/photo-1594736797933-d0fa2d2c8cc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "Meu negócio cresceu 150% depois que apliquei as estratégias do mapa. Consegui delegar melhor e ter mais tempo para estar com minha família.",
      author: "Roberta Alves",
      role: "Proprietária de E-commerce",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      text: "Entendi que minha forma de comunicar estava afastando meus filhos. Hoje nossa relação é muito mais próxima e eles me procuram para conversar.",
      author: "Luciana Ferreira",
      role: "Gerente de Vendas",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  // Auto-scroll dos depoimentos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const painPoints = [
    {
      icon: <Frown className="w-12 h-12 text-[#b5888b]" />,
      title: "Culpa Materna",
      text: "Você tenta compensar a ausência com presentes,\nmas culpa insiste em pesar, com frequência"
    },
    {
      icon: <Zap className="w-12 h-12 text-[#b5888b]" />,
      title: "Sobrecarga",
      text: "Você tenta dar conta de tudo sozinha…\ne acaba sempre se deixando por último."
    },
    {
      icon: <Smartphone className="w-12 h-12 text-[#b5888b]" />,
      title: "Presença Dividida",
      text: "Você confunde produtividade com estar disponível sempre…\ne perde os poucos momentos reais com seus filhos."
    },
    {
      icon: <Target className="w-12 h-12 text-[#b5888b]" />,
      title: "Sem Autocuidado",
      text: "Você adia o autocuidado e o autoconhecimento,\nesperando um \"momento ideal\" que nunca chega."
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-[#b5888b]" />,
      title: "Sinais Ignorados",
      text: "Você ignora os pequenos sinais de afastamento do seu filho…\naté que eles se tornam grandes problemas."
    },
    {
      icon: <HeartCrack className="w-12 h-12 text-[#b5888b]" />,
      title: "Desconexão",
      text: "Você sente que está se desconectando de si mesma\ne de quem mais ama, vivendo no piloto automático."
    }
  ];

  const benefits = [
    {
      title: "✓ Definir prioridades com clareza",
      text: "Pare de se sentir dividida. O mapeamento mostra quais atividades realmente importam e onde colocar sua energia para crescer no trabalho sem perder o vínculo com os filhos."
    },
    {
      title: "✓ Organizar sua rotina para criar tempo de qualidade",
      text: "Não é sobre ter mais horas no dia, é sobre usar o tempo certo com a presença certa. Você vai aprender a encaixar momentos significativos mesmo em dias cheios."
    },
    {
      title: "✓ Reduzir a culpa materna",
      text: "Ao entender seu perfil e como ele influencia suas escolhas, você vai substituir a culpa por ação intencional e sentir orgulho de como está vivendo a maternidade."
    },
    {
      title: "✓ Fortalecer a conexão com seus filhos",
      text: "Descubra como eles preferem receber amor e comunicação, para que cada momento juntos seja verdadeiro, leve e memorável."
    },
    {
      title: "✓ Ter mais energia para si mesma",
      text: "O plano de ação personalizado inclui ajustes simples que devolvem seu tempo e energia, para que você também seja prioridade na sua vida."
    },
    {
      title: "✓ Tomar decisões mais rápidas e assertivas",
      text: "Com clareza sobre seu perfil comportamental, você para de hesitar e passa a agir com confiança em todas as áreas da vida."
    }
  ];

  const beforeItems = [
    "Viver no piloto automático",
    "Tentar 'dar conta' de tudo",
    "Culpa constante",
    "Presença dividida",
    "Energia sempre em baixa",
    "Filhos distantes emocionalmente",
    "Autoestima abalada"
  ];

  const afterItems = [
    "Clareza total sobre prioridades",
    "Equilíbrio entre trabalho e família",
    "Presença intencional e de qualidade",
    "Vínculos fortalecidos com os filhos",
    "Energia renovada para si mesma",
    "Orgulho do seu papel como mãe",
    "Confiança em suas escolhas"
  ];

  const essentialFeatures = [
    "Diagnóstico Comportamental Completo - Descubra seu perfil psicológico detalhado",
    "Mapeamento de Pontos Fortes - Identifique seus talentos naturais",
    "Análise de Gatilhos de Sabotagem - Reconheça o que te paralisa",
    "Guia de Autoconhecimento - Entenda como você funciona",
    "Estratégias de Equilíbrio - Técnicas para alinhar carreira e maternidade",
    "Acesso por 1 ano - Consulte sempre que precisar"
  ];

  const strategicFeatures = [
    "Tudo do Mapa Essencial +",
    "Sessão Estratégica de 2h comigo - Interpretação personalizada do seu perfil",
    "Plano de Ação Personalizado - Passos específicos para sua realidade",
    "Estratégias de Comunicação com os Filhos - Baseadas no perfil deles",
    "Roteiro de Organização Familiar - Sistema prático para o dia a dia",
    "Acompanhamento por 7 dias - Suporte para implementação"
  ];

  return (
    <div className="min-h-screen bg-[#f1ece8] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-[#f1ece8] to-[#e8ddd7] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/BANNER_BARBARA.png" 
            alt="Banner Barbara Leite" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[50vh]">
            
            {/* Coluna do Conteúdo */}
            <div className="text-center lg:text-left space-y-8 order-2 lg:order-1">
              {/* Badge de Credibilidade */}
              <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-[#b5888b]/20">
                <Star className="text-[#b5888b] mr-2" size={20} />
                <span className="text-[#2e4773] font-semibold text-sm">500+ Mães Já Transformaram Suas Vidas</span>
              </div>

              {/* Título Principal */}
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2e4773] leading-tight">
                Equilibre <span className="bg-gradient-to-r from-[#b5888b] to-[#a67d80] bg-clip-text text-transparent">Carreira</span> e <span className="bg-gradient-to-r from-[#b5888b] to-[#a67d80] bg-clip-text text-transparent">Maternidade</span>
                <br />
                <span className="text-xl md:text-2xl lg:text-3xl text-[#2e4773]">Sem Culpa</span>
              </h1>

              {/* Subtítulo */}
              <p className="text-base md:text-lg text-[#151515] leading-relaxed font-light">
                Descubra seu perfil comportamental único e crie uma rotina que <strong className="text-[#2e4773]">fortalece vínculos familiares</strong> enquanto <strong className="text-[#2e4773]">acelera seu crescimento profissional</strong>
              </p>


              {/* CTA Principal */}
              <div className="space-y-4">
                <button 
                  onClick={() => setIsContactFormOpen(true)}
                  className="group relative bg-gradient-to-r from-[#25d366] to-[#20b358] hover:from-[#20b358] hover:to-[#1da851] text-white font-bold py-5 px-10 rounded-2xl text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transform active:scale-95 w-full lg:w-auto"
                >
                  <span className="relative z-10">QUERO MEU MAPA COMPORTAMENTAL</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#20b358] to-[#1da851] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-[#7f8c8d]">
                  <div className="flex items-center">
                    <Lock className="mr-2" size={16} />
                    <span>Compra 100% segura</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna da Imagem */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            </div>
            </div>
            
        </div>
        
        {/* Cartões de Benefícios - DENTRO da seção hero */}
        <div className="relative max-w-6xl mx-auto px-6 mt-16 pb-8 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-[#b5888b]/90 backdrop-blur-sm p-6 rounded-xl text-center text-white shadow-xl">
              <CheckCircle className="mx-auto mb-3 text-white" size={28} />
              <p className="text-sm font-semibold text-white leading-tight">Elimine a culpa materna de uma vez por todas</p>
            </div>
            
            <div className="bg-[#2e4773]/90 backdrop-blur-sm p-6 rounded-xl text-center text-white shadow-xl">
              <CheckCircle className="mx-auto mb-3 text-white" size={28} />
              <p className="text-sm font-semibold text-white leading-tight">Crie momentos de qualidade mesmo em dias corridos</p>
            </div>
            
            <div className="bg-[#b5888b]/90 backdrop-blur-sm p-6 rounded-xl text-center text-white shadow-xl">
              <CheckCircle className="mx-auto mb-3 text-white" size={28} />
              <p className="text-sm font-semibold text-white leading-tight">Fortaleça a conexão emocional com seus filhos</p>
            </div>
            
            <div className="bg-[#2e4773]/90 backdrop-blur-sm p-6 rounded-xl text-center text-white shadow-xl">
              <CheckCircle className="mx-auto mb-3 text-white" size={28} />
              <p className="text-sm font-semibold text-white leading-tight">Tenha mais energia e foco para crescer profissionalmente</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#fff5f5] to-[#fef2f2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2e4773] mb-6">
              Você se reconhece nestes cenários?
            </h2>
            <p className="text-xl text-[#7f8c8d] max-w-3xl mx-auto leading-relaxed">
              Estes são os principais desafios que mães empreendedoras enfrentam no dia a dia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-[#b5888b]/10 hover:border-[#b5888b]/30">
                {/* Ícone */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-[#b5888b]/10 to-[#b5888b]/20 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </div>
                </div>

                {/* Título */}
                <h3 className="text-xl font-bold text-[#2e4773] mb-4 text-center group-hover:text-[#b5888b] transition-colors duration-300">
                  {point.title}
                </h3>

                {/* Texto - máximo 2 linhas */}
                <div className="text-[#151515] leading-relaxed text-center text-sm h-12 overflow-hidden">
                  {point.text.split('\n').map((line, i) => (
                    <div key={i} className="leading-6">{line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA após os pain points */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-[#e8f5e8] to-[#f0fff0] p-8 rounded-2xl shadow-xl border-2 border-[#27ae60]/20 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-[#2e4773] mb-4">
                <CheckCircle className="inline mr-3" size={28} />
                Se você se identificou com pelo menos 3 desses cenários...
            </h3>
              <p className="text-lg text-[#151515] mb-6 leading-relaxed">
                É hora de descobrir seu perfil comportamental e transformar esses desafios em oportunidades de crescimento
            </p>
            <button 
              onClick={() => setIsContactFormOpen(true)}
                className="bg-gradient-to-r from-[#25d366] to-[#20b358] hover:from-[#20b358] hover:to-[#1da851] text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform active:scale-95"
            >
                QUERO RESOLVER ESSES DESAFIOS AGORA
            </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gradient-to-br from-[#f1ece8] to-[#e8ddd7]">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-3xl text-center text-[#2e4773] mb-8 font-bold">
            A Transformação É Possível
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
            <div className="bg-gradient-to-br from-[#ffe4e1] to-[#fff0f5] p-6 rounded-xl shadow-lg border-l-4 border-[#e74c3c]">
              <h3 className="text-[#e74c3c] text-xl font-bold mb-4">ANTES</h3>
              <ul className="space-y-2">
                {beforeItems.map((item, index) => (
                  <li key={index} className="text-[#151515] flex items-center">
                    <span className="mr-3">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-[#e8f5e8] to-[#f0fff0] p-6 rounded-xl shadow-lg border-l-4 border-[#27ae60]">
              <h3 className="text-[#27ae60] text-xl font-bold mb-4">DEPOIS</h3>
              <ul className="space-y-2">
                {afterItems.map((item, index) => (
                  <li key={index} className="text-[#151515] flex items-center">
                    <span className="text-[#27ae60] mr-3 font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#8e44ad] to-[#9b59b6] text-white p-8 rounded-xl text-center my-8 shadow-lg">
            <h3 className="mb-4 text-xl font-bold">A PONTE Entre Essas Duas Realidades:</h3>
            <h2 className="text-3xl mb-4 font-bold">MAPA COMPORTAMENTAL</h2>
            <p className="text-lg leading-relaxed">
              O método científico que revela quem você é de verdade, seus pontos fortes, gatilhos de sabotagem e o que precisa para viver no seu máximo — como mãe, mulher e profissional.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#e8f5e8] to-[#f0fff0] p-8 rounded-xl mt-12 shadow-lg text-center border-2 border-[#32cd32]">
            <h3 className="text-[#2e4773] mb-4 text-xl font-bold">
              <Key className="inline mr-3" size={28} />
              Este é o método que já transformou centenas de mães empreendedoras!
            </h3>
            <p className="text-lg mb-6 leading-relaxed text-[#151515]">
              Baseado em ciência comportamental, não em 'achismos'. Você vai ter um plano claro e personalizado para sua realidade única.
            </p>
            <button 
              onClick={() => setIsContactFormOpen(true)}
              className="bg-gradient-to-r from-[#25d366] to-[#20b358] hover:from-[#20b358] hover:to-[#1da851] text-white py-4 px-8 rounded-lg text-lg font-bold inline-block transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl"
            >
              QUERO MINHA TRANSFORMAÇÃO
            </button>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center text-[#2e4773] mb-10 font-bold">
            Como o Mapa Comportamental Resolve Seu Maior Desafio
          </h2>
          
          <p className="text-center text-xl mb-12 text-[#151515] max-w-5xl mx-auto font-medium leading-relaxed">
            <strong>Você quer prosperar profissionalmente E ser a mãe presente que seus filhos precisam. O problema é que, tentando dar conta de tudo, você acaba sacrificando tempo de qualidade — gerando culpa e sobrecarga.</strong>
          </p>

          <div className="bg-gradient-to-br from-[#e8f5e8] to-[#f0fff0] p-10 rounded-2xl my-12 shadow-xl border-2 border-[#32cd32] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <h3 className="text-[#2e4773] mb-8 text-center text-2xl font-bold">
              <CheckCircle className="inline mr-3" size={28} />
              Com o Mapeamento Comportamental, você vai:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-4 rounded-xl bg-white/50 backdrop-blur-sm">
                  <h4 className="text-[#27ae60] mb-4 text-lg font-bold">{benefit.title}</h4>
                  <p className="text-[#151515] leading-relaxed text-base">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#fff8dc] to-[#fffacd] p-8 rounded-xl mt-12 shadow-lg text-center border-2 border-[#ffd700]">
            <h3 className="text-[#2e4773] mb-4 text-xl font-bold">
              <Lightbulb className="inline mr-3" size={28} />
              'Não tenho tempo para mais uma coisa'? Este método se ADAPTA à sua rotina!
            </h3>
            <p className="text-lg mb-6 leading-relaxed text-[#151515]">
              O Mapa Comportamental não adiciona mais tarefas à sua lista - ele ORGANIZA o que você já faz, tornando tudo mais eficiente e prazeroso.
            </p>
            <button 
              onClick={() => setIsContactFormOpen(true)}
              className="bg-gradient-to-r from-[#25d366] to-[#20b358] hover:from-[#20b358] hover:to-[#1da851] text-white py-4 px-8 rounded-lg text-lg font-bold inline-block transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl"
            >
              QUERO OTIMIZAR MINHA VIDA
            </button>
          </div>

          <h2 className="text-4xl md:text-5xl text-center text-gray-900 mt-20 mb-16 font-light">
            Escolha Seu Caminho
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            {/* Essential Map */}
            <div className="bg-white rounded-3xl p-12 text-center shadow-sm relative transition-all duration-300 hover:shadow-lg border border-gray-200 flex flex-col justify-between min-h-[700px] group">
              <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-[#27ae60] text-white px-8 py-2 rounded-full font-medium text-sm shadow-sm">
                <Star className="inline mr-2" size={14} />
                MAIS POPULAR
              </div>
              
              <div className="relative z-10">
                <h3 className="text-gray-900 mb-3 text-2xl font-semibold mt-6">MAPA ESSENCIAL</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">Para quem quer começar a transformação hoje</p>
                <div className="text-4xl text-gray-900 font-light my-8">
                  <span className="line-through text-gray-400 text-xl mr-4">R$ 497</span>
                  <span className="text-[#27ae60] font-medium">R$ 247</span>
                </div>
                
                {/* Oferta especial clean */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8">
                  <p className="text-sm font-medium text-gray-900 mb-3">🔥 OFERTA ESPECIAL</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="line-through text-gray-400">de R$ 3654,00</span><br/>
                    por apenas <span className="font-medium">12x de</span><br/>
                    <span className="text-2xl font-medium text-[#27ae60]">R$ 29,70</span><br/>
                    <span className="text-sm text-gray-600">ou R$ 297,00 à vista</span>
                  </p>
                </div>
              </div>
              
              <ul className="text-left my-8 space-y-4 flex-grow relative z-10">
                {essentialFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#27ae60] font-medium mr-4 mt-1">✓</span>
                    <span className="text-gray-700 text-base leading-relaxed">
                      <strong className="text-gray-900">{feature.split(' - ')[0]}</strong>
                      {feature.includes(' - ') ? ` - ${feature.split(' - ')[1]}` : ''}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto relative z-10">
                <button 
                  onClick={() => setIsContactFormOpen(true)}
                  className="bg-[#27ae60] hover:bg-[#229954] text-white font-medium py-4 px-8 rounded-2xl text-lg transition-all duration-200 w-full mb-6 shadow-sm hover:shadow-md"
                >
                  QUERO ME TORNAR HIPNÓLOGO!
                </button>
                
                {/* Imagem de segurança */}
                <div className="flex justify-center">
                  <img 
                    src="/compra-segura.webp" 
                    alt="Compra Segura"
                    className="max-w-full h-auto opacity-80"
                  />
                </div>
              </div>
            </div>

            {/* Strategic Map */}
            <div className="bg-white rounded-3xl p-12 text-center shadow-sm relative transition-all duration-300 hover:shadow-lg border border-gray-200 flex flex-col justify-between min-h-[700px] group">
              <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-[#8e44ad] text-white px-8 py-2 rounded-full font-medium text-sm shadow-sm">
                <Star className="inline mr-2" size={14} />
                PREMIUM
              </div>
              
              <div className="relative z-10">
                <h3 className="text-gray-900 mb-3 text-2xl font-semibold mt-6">MAPA ESTRATÉGICO</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">Para quem quer transformação completa e acelerada</p>
                <div className="text-4xl text-gray-900 font-light my-8">
                  <span className="line-through text-gray-400 text-xl mr-4">R$ 997</span>
                  <span className="text-[#8e44ad] font-medium">R$ 497</span>
                </div>
              </div>
              
              <ul className="text-left my-8 space-y-4 flex-grow relative z-10">
                {strategicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#27ae60] font-medium mr-4 mt-1">✓</span>
                    <span className="text-gray-700 text-base leading-relaxed">
                      <strong className="text-gray-900">{feature.split(' - ')[0]}</strong>
                      {feature.includes(' - ') ? ` - ${feature.split(' - ')[1]}` : ''}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto relative z-10">
                <button 
                  onClick={() => setIsContactFormOpen(true)}
                  className="bg-[#8e44ad] hover:bg-[#7d3c98] text-white font-medium py-4 px-8 rounded-2xl text-lg transition-all duration-200 w-full mb-6 shadow-sm hover:shadow-md"
                >
                  QUERO MEU MAPA ESTRATÉGICO
                </button>
                
                {/* Imagem de segurança */}
                <div className="flex justify-center">
                  <img 
                    src="/compra-segura.webp" 
                    alt="Compra Segura"
                    className="max-w-full h-auto opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#8e44ad]/10 text-[#8e44ad] px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-[#8e44ad]/20">
              <Star className="w-5 h-5 mr-2" />
              DEPOIMENTOS REAIS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Que Nossas Clientes Dizem
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transformações reais de mães que encontraram o equilíbrio perfeito entre carreira e família
            </p>
          </div>
          
          <div className="relative overflow-hidden group">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 406}px)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-[400px] flex-shrink-0 mx-3">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-center mb-6">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-gray-100">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-base">{testimonial.author}</div>
                        <div className="text-gray-600 text-sm">{testimonial.role}</div>
                      </div>
                    </div>
                    
                    <div className="relative mb-6">
                      <div className="absolute top-[-8px] left-[-8px] text-4xl text-[#8e44ad] opacity-20">"</div>
                      <p className="text-gray-700 leading-relaxed text-sm italic pl-6">
                        {testimonial.text}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill="currentColor" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500 font-medium">Cliente Verificada</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Botões de navegação */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 backdrop-blur-sm z-10 group-hover:opacity-100 opacity-60"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 backdrop-blur-sm z-10 group-hover:opacity-100 opacity-60"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Gradientes laterais para fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-20"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-20"></div>
          </div>
          
          {/* Indicadores de navegação */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => goToTestimonial(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-[#8e44ad] w-8' : 'bg-gray-300 w-3 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          
          {/* CTA após depoimentos */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[#8e44ad]/5 to-[#9b59b6]/5 rounded-2xl p-8 border-2 border-[#8e44ad]/20 shadow-lg max-w-4xl mx-auto">
              <div className="mb-6">
                <div className="w-16 h-16 bg-[#8e44ad] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Quer Resultados Como Estes?
                </h3>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                  Nossas clientes <span className="font-bold text-[#8e44ad]">transformaram suas vidas</span> em poucos dias. 
                  Chegou a sua vez de <span className="font-bold text-[#8e44ad]">conquistar o equilíbrio perfeito</span>.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button 
                  onClick={() => setIsContactFormOpen(true)}
                  className="bg-[#8e44ad] hover:bg-[#7d3c98] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center text-lg"
                >
                  <CheckCircle className="w-6 h-6 mr-3" />
                  Quero Ser o Próximo Case
                </button>
                
                <div className="flex items-center text-[#8e44ad] font-semibold">
                  <Star className="w-5 h-5 mr-2" />
                  <span>Transformação Garantida</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="flex items-center justify-center text-[#8e44ad] font-medium">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="text-sm">Resultados em 7 dias</span>
                </div>
                <div className="flex items-center justify-center text-[#8e44ad] font-medium">
                  <Star className="w-5 h-5 mr-2" />
                  <span className="text-sm">500+ transformações</span>
                </div>
                <div className="flex items-center justify-center text-[#8e44ad] font-medium">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="text-sm">Método científico</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-12 font-light">
            Sobre Bárbara Leite
          </h2>
          
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Coluna das Imagens */}
              <div className="space-y-6">
                {/* Imagem Instagram - Retangular Horizontal */}
                <div className="relative">
                  <img 
                    src="/instagram_barabara_leite.webp" 
                    alt="Bárbara Leite - Instagram @soubarbaraleite"
                    className="w-full max-w-xl mx-auto rounded-2xl object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
                    style={{ aspectRatio: '1195/377' }}
                  />
                  <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-[#E4405F] to-[#C13584] text-white px-4 py-2 rounded-xl shadow-lg">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span className="font-medium text-xs">Instagram</span>
                    </div>
                  </div>
                </div>
                
                {/* Imagem TikTok - Quadrada */}
                <div className="relative flex justify-center">
                  <img 
                    src="/tiktok_barabara_leite.webp" 
                    alt="Bárbara Leite - TikTok"
                    className="w-64 h-64 rounded-2xl object-cover shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-[#000000] text-white px-4 py-2 rounded-xl shadow-lg">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                      <span className="font-medium text-xs">TikTok</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Coluna do Conteúdo */}
              <div className="text-center lg:text-left space-y-6">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <Award className="text-[#8e44ad] mr-4" size={36} />
                  <h3 className="text-3xl font-semibold text-gray-900">Bárbara Leite</h3>
                </div>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  <strong className="text-gray-900">Psicopedagoga Comportamental</strong> e <strong className="text-gray-900">Especialista em Comportamento Humano</strong>, atua há mais de <strong className="text-[#8e44ad]">20 anos</strong> com famílias, já transformou a vida de <strong className="text-[#8e44ad]">milhares de famílias</strong>, através de seus atendimentos, mentorias, workshops, treinamentos e palestras.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Acumula hoje mais de <strong className="text-[#8e44ad]">300 mil seguidores</strong> em suas redes sociais, onde ensina diariamente mães empreendedoras a encontrarem equilíbrio entre carreira e família.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-8">
                  Seu método, <strong className="text-gray-900">baseado em ciência</strong>, já transformou a vida de <strong className="text-[#8e44ad]">milhares de mulheres</strong>.
                </p>
                
                {/* Estatísticas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-2xl text-center">
                    <div className="text-2xl font-bold text-[#8e44ad] mb-2">20+</div>
                    <div className="text-sm text-gray-600">Anos de Experiência</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl text-center">
                    <div className="text-2xl font-bold text-[#8e44ad] mb-2">300K+</div>
                    <div className="text-sm text-gray-600">Seguidores</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl text-center">
                    <div className="text-2xl font-bold text-[#8e44ad] mb-2">1000+</div>
                    <div className="text-sm text-gray-600">Famílias Transformadas</div>
                  </div>
                </div>
                
                {/* Botões Redes Sociais */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                  <a 
                    href="https://www.instagram.com/soubarbaraleite/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#E4405F] to-[#C13584] hover:from-[#C13584] hover:to-[#E4405F] text-white font-medium px-6 py-3 rounded-2xl inline-flex items-center transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                  
                  <a 
                    href="https://www.tiktok.com/@soubarbaraleite" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#000000] hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-2xl inline-flex items-center transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                    TikTok
                  </a>
                  
                  <a 
                    href="https://linktr.ee/soubarbaraleite" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#39e09b] to-[#43e97b] hover:from-[#43e97b] hover:to-[#39e09b] text-white font-medium px-6 py-3 rounded-2xl inline-flex items-center transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.528.897 1.052.897.447 0 .864-.284 1.016-.73l.161-.486c.08-.284.285-.568.569-.65l.081-.081c.284-.08.568-.284.65-.569l.081-.162c.152-.446.73-.853 1.177-.853.568 0 .975.407.975.975 0 .325-.203.65-.528.772l-.325.162c-.284.081-.569.325-.65.65l-.081.325c-.081.284-.325.568-.65.65l-.324.081c-.284.081-.569.325-.65.65-.081.324-.325.568-.65.65-.324.081-.568.325-.65.65-.081.324-.325.568-.65.65-.324.081-.568.325-.65.65l-.081.325c-.081.284-.325.568-.65.65l-.325.081c-.284.081-.568.325-.65.65l-.081.324c-.081.284-.325.569-.65.65-.324.081-.568.325-.65.65-.081.324-.325.568-.65.65-.324.081-.568.325-.65.65l-.081.325c-.081.284-.325.568-.65.65l-.325.081c-.284.081-.568.325-.65.65l-.081.324c-.081.284-.325.569-.65.65-.324.081-.568.325-.65.65-.081.324-.325.568-.65.65-.324.081-.568.325-.65.65l-.081.325c-.081.284-.325.568-.65.65l-.325.081c-.284.081-.568.325-.65.65l-.081.324c-.081.284-.325.569-.65.65-.324.081-.568.325-.65.65-.081.324-.325.568-.65.65-.324.081-.568.325-.65.65l-.081.325c-.081.284-.325.568-.65.65l-.325.081c-.284.081-.568.325-.65.65l-.081.324c-.081.284-.325.569-.65.65-.324.081-.568.325-.65.65-.081.324-.325.568-.65.65-.324.081-.568.325-.65.65l-.081.325c-.081.284-.325.568-.65.65l-.325.081c-.284.081-.568.325-.65.65l-.081.324c-.081.284-.325.569-.65.65-.324.081-.568.325-.65.65-.081.324-.325.568-.65.65-.324.081-.568.325-.65.65l-.081.325c-.081.284-.325.568-.65.65l-.325.081c-.284.081-.568.325-.65.65l-.081.324c-.081.284-.325.569-.65.65-.324.081-.568.325-.65.65-.081.324-.325.568-.65.65-.324.081-.568.325-.65.65l-.081.325c-.081.284-.325.568-.65.65l-.325.081c-.284.081-.568.325-.65.65l-.081.324c-.081.284-.325.569-.65.65-.324.081-.568.325-.65.65-.081.324-.325.568-.65.65-.324.081-.568.325-.65.65l-.081.325c-.081.284-.325.568-.65.65l-.325.081c-.284.081-.568.325-.65.65l-.081.324c-.081.284-.325.569-.65.65-.324.081-.568.325-.65.65-.081.324-.325.568-.65.65-.324.081-.568.325-.65.65l-.081.325c-.081.284-.325.568-.65.65l-.325.081c-.284.081-.568.325-.65.65l-.081.324c-.081.284-.325.569-.65.65-.324.081-.568.325-.65.65-.081.324-.325.568-.65.65-.324.081-.568.325-.65.65z"/>
                    </svg>
                    Todos os Links
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-gradient-to-br from-[#f1ece8] to-[#e8ddd7] text-center">
        <div className="max-w-7xl mx-auto">
          {/* SEGUNDO AIDA - ATENÇÃO */}
          <div className="bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] text-white p-6 rounded-2xl mx-auto max-w-4xl font-bold text-xl mb-12 shadow-2xl">
            🔥 ÚLTIMA CHANCE: Esta oferta NUNCA mais será repetida!
          </div>
          
          {/* SEGUNDO AIDA - INTERESSE */}
          <h2 className="text-4xl md:text-5xl text-[#2e4773] mb-12 font-bold">
            Você Tem 2 Escolhas AGORA:
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#ffe4e1] to-[#fff0f5] p-8 rounded-2xl shadow-xl border-2 border-[#e74c3c]">
              <h3 className="text-2xl font-bold text-[#e74c3c] mb-6">❌ ESCOLHA 1: Continuar Como Está</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start text-[#151515]">
                  <span className="text-[#e74c3c] mr-3 font-bold">•</span>
                  <span>Continuar se sentindo dividida entre trabalho e filhos</span>
                </li>
                <li className="flex items-start text-[#151515]">
                  <span className="text-[#e74c3c] mr-3 font-bold">•</span>
                  <span>Carregar a culpa materna todos os dias</span>
                </li>
                <li className="flex items-start text-[#151515]">
                  <span className="text-[#e74c3c] mr-3 font-bold">•</span>
                  <span>Ver seus filhos se afastando emocionalmente</span>
                </li>
                <li className="flex items-start text-[#151515]">
                  <span className="text-[#e74c3c] mr-3 font-bold">•</span>
                  <span>Perder momentos únicos que não voltam mais</span>
                </li>
                <li className="flex items-start text-[#151515]">
                  <span className="text-[#e74c3c] mr-3 font-bold">•</span>
                  <span>Viver no piloto automático, sempre correndo</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-white/50 rounded-lg">
                <p className="text-[#e74c3c] font-bold">CUSTO: Sua paz, sua conexão familiar e sua realização pessoal</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#e8f5e8] to-[#f0fff0] p-8 rounded-2xl shadow-xl border-2 border-[#27ae60]">
              <h3 className="text-2xl font-bold text-[#27ae60] mb-6">✅ ESCOLHA 2: Transformar Sua Vida HOJE</h3>
              <ul className="space-y-3 text-left">
                <li className="flex items-start text-[#151515]">
                  <span className="text-[#27ae60] mr-3 font-bold">✓</span>
                  <span>Ter clareza total sobre suas prioridades</span>
                </li>
                <li className="flex items-start text-[#151515]">
                  <span className="text-[#27ae60] mr-3 font-bold">✓</span>
                  <span>Eliminar a culpa e viver com propósito</span>
                </li>
                <li className="flex items-start text-[#151515]">
                  <span className="text-[#27ae60] mr-3 font-bold">✓</span>
                  <span>Fortalecer a conexão com seus filhos</span>
                </li>
                <li className="flex items-start text-[#151515]">
                  <span className="text-[#27ae60] mr-3 font-bold">✓</span>
                  <span>Crescer profissionalmente sem sacrifícios</span>
                </li>
                <li className="flex items-start text-[#151515]">
                  <span className="text-[#27ae60] mr-3 font-bold">✓</span>
                  <span>Ter energia e tempo para si mesma</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-white/50 rounded-lg">
                <p className="text-[#27ae60] font-bold">INVESTIMENTO: Apenas R$ 997 (ou R$ 247 no essencial)</p>
              </div>
            </div>
          </div>
          
          {/* SEGUNDO AIDA - DESEJO */}
          <div className="bg-gradient-to-r from-[#8e44ad] to-[#9b59b6] text-white p-8 rounded-2xl mx-auto max-w-4xl mb-12 shadow-2xl">
            <h3 className="text-3xl font-bold mb-6">🎯 A Decisão Que Mudará Sua Vida Para Sempre</h3>
            <p className="text-xl leading-relaxed mb-6">
              <strong>Daqui a 1 ano, você vai olhar para trás e agradecer por ter tomado esta decisão HOJE.</strong>
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Seus filhos vão lembrar de uma mãe presente, confiante e realizada. Seu negócio vai prosperar porque você terá clareza e foco. E você vai se orgulhar da mulher que se tornou.
            </p>
            <p className="text-xl font-bold">
              Mas isso só acontece se você AGIR AGORA. Amanhã pode ser tarde demais.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white p-8 rounded-2xl my-12 font-bold shadow-2xl animate-pulse">
            <p className="text-xl mb-4">
              <Clock className="inline mr-4" size={28} />
              OFERTA TERMINA EM:
            </p>
            <div className="text-3xl font-mono tracking-wider text-red-100">
              {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </div>
            <p className="text-lg mt-4 opacity-90">
              ⚠️ Após este prazo, o preço volta ao valor normal de R$ 2.497
            </p>
          </div>
          
          {/* SEGUNDO AIDA - AÇÃO */}
          <button 
            onClick={() => setIsContactFormOpen(true)}
            className="bg-gradient-to-r from-[#25d366] to-[#20b358] hover:from-[#20b358] hover:to-[#1da851] text-white font-semibold py-6 px-16 rounded-2xl text-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 inline-block"
          >
            SIM! EU ESCOLHO A TRANSFORMAÇÃO AGORA!
          </button>
        </div>
      </section>

      <ContactFormPopup 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#2e4773] to-[#34495e] text-white py-12 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="mb-6 text-base font-medium">© 2025 Bárbara Leite. Todos os direitos reservados.</p>
          <p>
            <a href="/privacy" className="text-[#b5888b] hover:text-white transition-colors duration-300 mx-4 text-base">Política de Privacidade</a>
            |
            <a href="/terms" className="text-[#b5888b] hover:text-white transition-colors duration-300 mx-4 text-base">Termos de Uso</a>
            |
            <a href="/contact" className="text-[#b5888b] hover:text-white transition-colors duration-300 mx-4 text-base">Contato</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;