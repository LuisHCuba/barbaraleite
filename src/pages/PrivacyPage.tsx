import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';

const PrivacyPage: React.FC = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F8F8] via-[#FDF7F0] to-[#F0F8FF]">
      <header className="bg-gradient-to-br from-[#4A90E2] via-[#5B9BD5] to-[#6BB6FF] text-white py-6 shadow-2xl">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-white hover:text-[#FFB6C1] transition-colors duration-300 mb-4">
            <ArrowLeft className="mr-2" size={20} />
            Voltar ao início
          </Link>
          <h1 className="text-3xl font-bold flex items-center">
            <Shield className="mr-3" size={32} />
            Política de Privacidade
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[#34495E] mb-8 leading-relaxed">
              <strong>Última atualização:</strong> Janeiro de 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4 flex items-center">
                <Eye className="mr-3 text-[#4A90E2]" size={24} />
                1. Informações que Coletamos
              </h2>
              <p className="text-[#34495E] leading-relaxed mb-4">
                Coletamos informações que você nos fornece diretamente, incluindo:
              </p>
              <ul className="list-disc list-inside text-[#34495E] space-y-2 ml-4">
                <li>Nome completo e informações de contato (e-mail, telefone)</li>
                <li>Informações de pagamento processadas por terceiros seguros</li>
                <li>Dados de navegação e uso do site através de cookies</li>
                <li>Informações fornecidas em formulários e questionários</li>
                <li>Comunicações que você envia para nós</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4 flex items-center">
                <Database className="mr-3 text-[#4A90E2]" size={24} />
                2. Como Usamos Suas Informações
              </h2>
              <p className="text-[#34495E] leading-relaxed mb-4">
                Utilizamos suas informações para:
              </p>
              <ul className="list-disc list-inside text-[#34495E] space-y-2 ml-4">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Processar pagamentos e enviar confirmações</li>
                <li>Enviar comunicações importantes sobre seus pedidos</li>
                <li>Personalizar sua experiência em nosso site</li>
                <li>Cumprir obrigações legais e regulamentares</li>
                <li>Prevenir fraudes e garantir a segurança</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4 flex items-center">
                <Lock className="mr-3 text-[#4A90E2]" size={24} />
                3. Proteção de Dados
              </h2>
              <p className="text-[#34495E] leading-relaxed mb-4">
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
              <ul className="list-disc list-inside text-[#34495E] space-y-2 ml-4">
                <li>Criptografia SSL/TLS para transmissão de dados</li>
                <li>Armazenamento seguro em servidores protegidos</li>
                <li>Acesso restrito apenas a funcionários autorizados</li>
                <li>Monitoramento regular de segurança</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">4. Compartilhamento de Informações</h2>
              <p className="text-[#34495E] leading-relaxed mb-4">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:
              </p>
              <ul className="list-disc list-inside text-[#34495E] space-y-2 ml-4">
                <li>Com processadores de pagamento para completar transações</li>
                <li>Com provedores de serviços que nos ajudam a operar o site</li>
                <li>Quando exigido por lei ou ordem judicial</li>
                <li>Para proteger nossos direitos legais</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">5. Seus Direitos (LGPD)</h2>
              <p className="text-[#34495E] leading-relaxed mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
              </p>
              <ul className="list-disc list-inside text-[#34495E] space-y-2 ml-4">
                <li>Confirmar a existência de tratamento de dados pessoais</li>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                <li>Solicitar a exclusão de dados pessoais</li>
                <li>Revogar o consentimento</li>
                <li>Solicitar a portabilidade dos dados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">6. Cookies</h2>
              <p className="text-[#34495E] leading-relaxed">
                Utilizamos cookies para melhorar sua experiência de navegação, analisar o tráfego do site e personalizar conteúdo. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">7. Retenção de Dados</h2>
              <p className="text-[#34495E] leading-relaxed">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta política, salvo quando a retenção for exigida ou permitida por lei.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4 flex items-center">
                <Mail className="mr-3 text-[#4A90E2]" size={24} />
                8. Contato
              </h2>
              <p className="text-[#34495E] leading-relaxed mb-4">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
              </p>
              <div className="bg-gradient-to-r from-[#E8F5E8] to-[#F0FFF0] p-6 rounded-xl">
                <p className="text-[#2C3E50] font-semibold mb-2">Bárbara Leite - Psicopedagoga Comportamental</p>
                <p className="text-[#34495E] flex items-center mb-2">
                  <Mail className="mr-2" size={16} />
                  contato@barbaraleite.com.br
                </p>
                <p className="text-[#34495E] flex items-center">
                  <Phone className="mr-2" size={16} />
                  (11) 99999-9999
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">9. Alterações na Política</h2>
              <p className="text-[#34495E] leading-relaxed">
                Esta política pode ser atualizada periodicamente. Notificaremos sobre mudanças significativas através do e-mail cadastrado ou aviso em nosso site.
              </p>
            </section>
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/" 
            className="btn-primary inline-block"
          >
            Voltar ao Início
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPage;