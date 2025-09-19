import React from 'react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Shield, FileText, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    acceptTerms: false,
    acceptLGPD: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptTerms || !formData.acceptLGPD) {
      alert('Por favor, aceite os termos de uso e a política de privacidade para continuar.');
      return;
    }

    setIsSubmitting(true);
    
    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form após 3 segundos
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          acceptTerms: false,
          acceptLGPD: false
        });
      }, 3000);
    }, 2000);
  };

  return (
    <>
      <Header />
      <main className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl text-[#34495E] max-w-3xl mx-auto">
              Estou aqui para ajudar você a transformar sua vida. Entre em contato e vamos conversar!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-6">Informações de Contato</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-[#4A90E2] mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#2C3E50] mb-1">E-mail</h3>
                    <p className="text-[#34495E]">contato@barbaraleite.com.br</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="text-[#4A90E2] mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#2C3E50] mb-1">Telefone</h3>
                    <p className="text-[#34495E]">(11) 99999-9999</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-[#4A90E2] mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#2C3E50] mb-1">Localização</h3>
                    <p className="text-[#34495E]">São Paulo, SP - Brasil</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-[#4A90E2] mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-[#2C3E50] mb-1">Horário de Atendimento</h3>
                    <p className="text-[#34495E]">Segunda a Sexta: 9h às 18h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-6">Envie uma Mensagem</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-[#b5888b] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-white" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C3E50] mb-4">
                    Mensagem Enviada com Sucesso!
                  </h3>
                  <p className="text-lg text-[#34495E] mb-4">
                    Obrigada pelo seu contato! Retornaremos em breve.
                  </p>
                  <p className="text-sm text-[#7f8c8d]">
                    O formulário será resetado automaticamente...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[#2C3E50] font-semibold mb-2">Nome Completo *</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-300"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-[#2C3E50] font-semibold mb-2">E-mail *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[#2C3E50] font-semibold mb-2">Telefone *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-300"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label className="block text-[#2C3E50] font-semibold mb-2">Mensagem</label>
                    <textarea 
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent transition-all duration-300"
                      placeholder="Como posso ajudar você?"
                    />
                  </div>

                  {/* Termos de Aceite */}
                  <div className="bg-gradient-to-r from-[#f1ece8] to-[#e8ddd7] p-6 rounded-xl border-2 border-[#4A90E2]/20">
                    <h3 className="text-lg font-bold text-[#2C3E50] mb-4 flex items-center">
                      <Shield className="mr-2" size={20} />
                      Termos de Aceite e Privacidade
                    </h3>
                    
                    <div className="space-y-4">
                      <label className="flex items-start cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="acceptTerms"
                          checked={formData.acceptTerms}
                          onChange={handleInputChange}
                          required
                          className="mt-1 mr-3 w-4 h-4 text-[#4A90E2] border-gray-300 rounded focus:ring-[#4A90E2]"
                        />
                        <span className="text-sm text-[#2C3E50] leading-relaxed">
                          Aceito os <a href="/terms" target="_blank" className="text-[#4A90E2] hover:underline font-semibold">Termos de Uso</a> e declaro estar ciente de que este serviço é destinado ao desenvolvimento pessoal e não substitui acompanhamento médico ou psicológico profissional quando necessário. *
                        </span>
                      </label>

                      <label className="flex items-start cursor-pointer">
                        <input 
                          type="checkbox" 
                          name="acceptLGPD"
                          checked={formData.acceptLGPD}
                          onChange={handleInputChange}
                          required
                          className="mt-1 mr-3 w-4 h-4 text-[#4A90E2] border-gray-300 rounded focus:ring-[#4A90E2]"
                        />
                        <span className="text-sm text-[#2C3E50] leading-relaxed">
                          Autorizo o tratamento dos meus dados pessoais conforme a <a href="/privacy" target="_blank" className="text-[#4A90E2] hover:underline font-semibold">Política de Privacidade</a> e a LGPD, para fins de contato, prestação de serviços e envio de conteúdos relacionados ao desenvolvimento pessoal e maternidade consciente. *
                        </span>
                      </label>
                    </div>

                    <div className="mt-4 p-4 bg-white/50 rounded-lg">
                      <p className="text-xs text-[#7f8c8d] flex items-start">
                        <FileText className="mr-2 mt-0.5 flex-shrink-0" size={14} />
                        <span>
                          <strong>Proteção de Dados:</strong> Seus dados são tratados com total segurança e confidencialidade. Você pode solicitar alteração, exclusão ou portabilidade dos seus dados a qualquer momento através do e-mail contato@barbaraleite.com.br
                        </span>
                      </p>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting || !formData.acceptTerms || !formData.acceptLGPD}
                    className="btn-primary w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Enviando...
                      </div>
                    ) : (
                      <>
                        <MessageCircle className="mr-2" size={20} />
                        Enviar Mensagem
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-[#7f8c8d] mt-4">
                    * Campos obrigatórios. Ao enviar este formulário, você será contatada em até 24 horas.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;