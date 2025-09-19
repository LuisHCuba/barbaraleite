import React, { useState } from 'react';
import { X, User, Mail, Phone, MapPin, Calendar, Heart, Shield, FileText, CheckCircle } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

interface ContactFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormPopup: React.FC<ContactFormPopupProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    age: '',
    children: '',
    mainChallenge: '',
    acceptTerms: false,
    acceptLGPD: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      
      // Fechar popup após 3 segundos
      setTimeout(() => {
        setIsSubmitted(false);
        onClose();
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          city: '',
          age: '',
          children: '',
          mainChallenge: '',
          acceptTerms: false,
          acceptLGPD: false
        });
      }, 3000);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 bg-white rounded-full p-2 shadow-lg"
        >
          <X size={20} />
        </button>

        {isSubmitted ? (
          <div className="p-12 text-center">
            <div className="bg-gradient-to-r from-[#b5888b] to-[#a67d80] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-white" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-[#2e4773] mb-4">
              Formulário Enviado com Sucesso!
            </h2>
            <p className="text-lg text-[#151515] mb-6">
              Obrigada pelo seu interesse! Em breve entraremos em contato para agendar sua sessão de Mapeamento Comportamental.
            </p>
            <p className="text-sm text-[#7f8c8d]">
              Este popup será fechado automaticamente em alguns segundos...
            </p>
          </div>
        ) : (
          <>
            <div className="bg-gradient-to-r from-[#b5888b] to-[#a67d80] text-white p-8 rounded-t-2xl">
              <div className="flex items-center justify-center mb-4">
                <Heart className="mr-3" size={32} />
                <h2 className="text-3xl font-bold">Quero Meu Mapa Comportamental</h2>
              </div>
              <p className="text-center text-lg opacity-90">
                Preencha os dados abaixo e transforme sua vida como mãe empreendedora!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#2e4773] font-semibold mb-2 flex items-center">
                    <User className="mr-2" size={18} />
                    Nome Completo *
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b5888b] focus:border-transparent transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-[#2e4773] font-semibold mb-2 flex items-center">
                    <Mail className="mr-2" size={18} />
                    E-mail *
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b5888b] focus:border-transparent transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[#2e4773] font-semibold mb-2 flex items-center">
                    <Phone className="mr-2" size={18} />
                    WhatsApp *
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b5888b] focus:border-transparent transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-[#2e4773] font-semibold mb-2 flex items-center">
                    <MapPin className="mr-2" size={18} />
                    Cidade (opcional)
                  </label>
                  <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b5888b] focus:border-transparent transition-all duration-300"
                    placeholder="São Paulo, SP"
                  />
                </div>

                <div>
                  <label className="block text-[#2e4773] font-semibold mb-2 flex items-center">
                    <Calendar className="mr-2" size={18} />
                    Idade (opcional)
                  </label>
                  <select 
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b5888b] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecione sua idade</option>
                    <option value="25-30">25-30 anos</option>
                    <option value="31-35">31-35 anos</option>
                    <option value="36-40">36-40 anos</option>
                    <option value="41-45">41-45 anos</option>
                    <option value="46+">46+ anos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#2e4773] font-semibold mb-2 flex items-center">
                    <Heart className="mr-2" size={18} />
                    Quantos filhos? (opcional)
                  </label>
                  <select 
                    name="children"
                    value={formData.children}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b5888b] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecione</option>
                    <option value="1">1 filho</option>
                    <option value="2">2 filhos</option>
                    <option value="3">3 filhos</option>
                    <option value="4+">4 ou mais filhos</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#2e4773] font-semibold mb-2">
                  Qual seu maior desafio como mãe empreendedora? (opcional)
                </label>
                <textarea 
                  name="mainChallenge"
                  value={formData.mainChallenge}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b5888b] focus:border-transparent transition-all duration-300"
                  placeholder="Descreva brevemente seu principal desafio..."
                />
              </div>

              {/* Termos de Aceite */}
              <div className="bg-gradient-to-r from-[#f1ece8] to-[#e8ddd7] p-6 rounded-xl border-2 border-[#b5888b]/20">
                <h3 className="text-lg font-bold text-[#2e4773] mb-4 flex items-center">
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
                      className="mt-1 mr-3 w-4 h-4 text-[#b5888b] border-gray-300 rounded focus:ring-[#b5888b]"
                    />
                    <span className="text-sm text-[#151515] leading-relaxed">
                      Aceito os <a href="/terms" target="_blank" className="text-[#b5888b] hover:underline font-semibold">Termos de Uso</a> e declaro estar ciente de que este serviço é destinado ao desenvolvimento pessoal e não substitui acompanhamento médico ou psicológico profissional quando necessário.
                    </span>
                  </label>

                  <label className="flex items-start cursor-pointer">
                    <input 
                      type="checkbox" 
                      name="acceptLGPD"
                      checked={formData.acceptLGPD}
                      onChange={handleInputChange}
                      required
                      className="mt-1 mr-3 w-4 h-4 text-[#b5888b] border-gray-300 rounded focus:ring-[#b5888b]"
                    />
                    <span className="text-sm text-[#151515] leading-relaxed">
                      Autorizo o tratamento dos meus dados pessoais conforme a <a href="/privacy" target="_blank" className="text-[#b5888b] hover:underline font-semibold">Política de Privacidade</a> e a LGPD, para fins de contato, prestação de serviços e envio de conteúdos relacionados ao desenvolvimento pessoal e maternidade consciente.
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
                className="w-full bg-gradient-to-r from-[#25d366] to-[#20b358] hover:from-[#20b358] hover:to-[#1da851] text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Enviando...
                  </div>
                ) : (
                  'QUERO MEU MAPA COMPORTAMENTAL AGORA!'
                )}
              </button>

              <p className="text-xs text-center text-[#7f8c8d] mt-4">
                * Apenas nome, e-mail e WhatsApp são obrigatórios. Ao enviar este formulário, você será contatada em até 24 horas para agendar sua sessão.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactFormPopup;