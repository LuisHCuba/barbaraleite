import React from 'react';
import { Award, BookOpen, Users, Heart, Target, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="section-padding">
        <div className="container-max">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
              Sobre Bárbara Leite
            </h1>
            <p className="text-xl text-[#34495E] max-w-3xl mx-auto leading-relaxed">
              Psicopedagoga Comportamental dedicada a ajudar mães empreendedoras a encontrarem o equilíbrio perfeito entre carreira e família.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex justify-center mb-8">
                <img 
                  src="https://mprorh.com.br/images/barbara.jpeg" 
                  alt="Bárbara Leite - Psicopedagoga Comportamental"
                  className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-[#8E44AD]"
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">Bárbara Leite</h2>
                <p className="text-[#8E44AD] font-semibold mb-4">Psicopedagoga Comportamental</p>
                <div className="bg-gradient-to-r from-[#8E44AD] to-[#9B59B6] text-white px-6 py-3 rounded-xl inline-block">
                  <span className="font-bold">✓ Mais de 10 anos de experiência</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-[#2C3E50] mb-4 flex items-center">
                  <Heart className="mr-3 text-[#FF6B9D]" size={28} />
                  Minha Missão
                </h3>
                <p className="text-[#34495E] leading-relaxed">
                  Ajudar mães empreendedoras a descobrirem que é possível ter sucesso profissional sem sacrificar a conexão com os filhos. Através do mapeamento comportamental científico, transformo vidas e fortaleço famílias.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-[#2C3E50] mb-4 flex items-center">
                  <Target className="mr-3 text-[#4A90E2]" size={28} />
                  Minha Visão
                </h3>
                <p className="text-[#34495E] leading-relaxed">
                  Um mundo onde as mulheres não precisam escolher entre ser mães presentes e profissionais de sucesso. Onde o equilíbrio é possível e a culpa materna é coisa do passado.
                </p>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="bg-gradient-to-br from-[#E8F5E8] to-[#F0FFF0] rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-[#2C3E50] text-center mb-12">
              Formação e Especialidades
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BookOpen className="text-[#27AE60]" size={32} />
                </div>
                <h3 className="font-bold text-[#2C3E50] mb-2">Psicopedagogia</h3>
                <p className="text-[#34495E]">Especialista em processos de aprendizagem e desenvolvimento humano</p>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="text-[#27AE60]" size={32} />
                </div>
                <h3 className="font-bold text-[#2C3E50] mb-2">Análise Comportamental</h3>
                <p className="text-[#34495E]">Certificada em técnicas avançadas de mapeamento comportamental</p>
              </div>

              <div className="text-center">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="text-[#27AE60]" size={32} />
                </div>
                <h3 className="font-bold text-[#2C3E50] mb-2">Coaching Familiar</h3>
                <p className="text-[#34495E]">Especialização em dinâmicas familiares e relacionamentos</p>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-[#2C3E50] text-center mb-12">
              Resultados Comprovados
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#FF6B9D] mb-2">500+</div>
                <p className="text-[#34495E]">Mães Transformadas</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#4A90E2] mb-2">10+</div>
                <p className="text-[#34495E]">Anos de Experiência</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#27AE60] mb-2">98%</div>
                <p className="text-[#34495E]">Taxa de Satisfação</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#8E44AD] mb-2">1000+</div>
                <p className="text-[#34495E]">Famílias Impactadas</p>
              </div>
            </div>
          </div>

          {/* Personal Story */}
          <div className="bg-gradient-to-br from-[#FFE4E1] to-[#FFF0F5] rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-[#2C3E50] text-center mb-8">
              Minha História
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-[#34495E] leading-relaxed mb-6">
                Como mãe e profissional, eu também vivi a angústia de tentar equilibrar carreira e maternidade. A culpa constante, a sensação de estar falhando em ambos os papéis, a exaustão emocional... Eu conhecia bem essa dor.
              </p>
              <p className="text-lg text-[#34495E] leading-relaxed mb-6">
                Foi através da ciência comportamental que encontrei as respostas que procurava. Descobri que o problema não era falta de tempo ou organização - era falta de autoconhecimento e clareza sobre minhas prioridades reais.
              </p>
              <p className="text-lg text-[#34495E] leading-relaxed">
                Hoje, dedico minha vida a compartilhar essa transformação com outras mães. Porque acredito que toda mulher merece viver plenamente, sem culpa, sendo a mãe e a profissional que deseja ser.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;