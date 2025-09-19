import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Sinais de que Você Precisa de um Mapa Comportamental",
      excerpt: "Descubra os principais indicadores de que é hora de fazer uma análise profunda do seu comportamento para transformar sua vida.",
      date: "15 Jan 2025",
      author: "Bárbara Leite",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 2,
      title: "Como Equilibrar Maternidade e Empreendedorismo",
      excerpt: "Estratégias práticas para mães empreendedoras que querem crescer profissionalmente sem perder a conexão com os filhos.",
      date: "12 Jan 2025",
      author: "Bárbara Leite",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 3,
      title: "A Culpa Materna: Como Transformá-la em Ação Positiva",
      excerpt: "Entenda de onde vem a culpa materna e aprenda técnicas para transformar esse sentimento em motivação para mudanças positivas.",
      date: "10 Jan 2025",
      author: "Bárbara Leite",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 4,
      title: "Autoconhecimento: A Chave para o Sucesso Pessoal",
      excerpt: "Por que conhecer seu perfil comportamental é fundamental para tomar decisões mais assertivas em todas as áreas da vida.",
      date: "8 Jan 2025",
      author: "Bárbara Leite",
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 5,
      title: "Organizando a Rotina Familiar com Inteligência",
      excerpt: "Dicas práticas para criar uma rotina que funciona para toda a família, respeitando as necessidades de cada membro.",
      date: "5 Jan 2025",
      author: "Bárbara Leite",
      image: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      id: 6,
      title: "Os Benefícios da Psicopedagogia Comportamental",
      excerpt: "Conheça como a psicopedagogia comportamental pode transformar relacionamentos familiares e profissionais.",
      date: "3 Jan 2025",
      author: "Bárbara Leite",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <>
      <Header />
      <main className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
              Blog
            </h1>
            <p className="text-xl text-[#34495E] max-w-3xl mx-auto leading-relaxed">
              Artigos, dicas e insights sobre desenvolvimento pessoal, maternidade consciente e equilíbrio entre vida pessoal e profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-[#7F8C8D] mb-3">
                    <Calendar className="mr-2" size={16} />
                    <span className="mr-4">{post.date}</span>
                    <User className="mr-2" size={16} />
                    <span>{post.author}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-[#2C3E50] mb-3 group-hover:text-[#4A90E2] transition-colors duration-300">
                    {post.title}
                  </h2>
                  
                  <p className="text-[#34495E] leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center text-[#4A90E2] font-semibold hover:text-[#FF6B9D] transition-colors duration-300">
                    Ler mais
                    <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-[#4A90E2] to-[#6BB6FF] rounded-2xl p-12 mt-16 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Receba Conteúdos Exclusivos
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Inscreva-se na nossa newsletter e receba dicas semanais sobre desenvolvimento pessoal e maternidade consciente.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg text-[#2C3E50] focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-[#FF6B9D] hover:bg-[#FF8FA3] px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Inscrever
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;