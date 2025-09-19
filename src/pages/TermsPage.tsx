import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertTriangle, CreditCard, RefreshCw, Scale, Phone, Mail } from 'lucide-react';

const TermsPage: React.FC = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8F8F8] via-[#FDF7F0] to-[#F0F8FF]">
      <header className="bg-gradient-to-br from-[#4A90E2] via-[#5B9BD5] to-[#6BB6FF] text-white py-6 shadow-2xl">
        <div className="max-w-4xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center text-white hover:text-[#FFB6C1] transition-colors duration-300 mb-4">
            <ArrowLeft className="mr-2" size={20} />
            Voltar ao início
          </Link>
          <h1 className="text-3xl font-bold flex items-center">
            <FileText className="mr-3" size={32} />
            Termos de Uso
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
                <AlertTriangle className="mr-3 text-[#4A90E2]" size={24} />
                1. Aceitação dos Termos
              </h2>
              <p className="text-[#34495E] leading-relaxed mb-4">
                Ao acessar e usar este site, você aceita e concorda em cumprir estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.
              </p>
              <p className="text-[#34495E] leading-relaxed">
                Estes termos se aplicam a todos os visitantes, usuários e outras pessoas que acessam ou usam o serviço.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">2. Descrição do Serviço</h2>
              <p className="text-[#34495E] leading-relaxed mb-4">
                Oferecemos serviços de psicopedagogia comportamental, incluindo:
              </p>
              <ul className="list-disc list-inside text-[#34495E] space-y-2 ml-4">
                <li>Mapeamento comportamental personalizado</li>
                <li>Consultoria em desenvolvimento pessoal</li>
                <li>Materiais educativos e guias práticos</li>
                <li>Sessões de orientação e acompanhamento</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">3. Elegibilidade</h2>
              <p className="text-[#34495E] leading-relaxed">
                Você deve ter pelo menos 18 anos de idade para usar nossos serviços. Ao usar este site, você declara e garante que tem pelo menos 18 anos e tem capacidade legal para celebrar este contrato.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4 flex items-center">
                <CreditCard className="mr-3 text-[#4A90E2]" size={24} />
                4. Pagamentos e Preços
              </h2>
              <p className="text-[#34495E] leading-relaxed mb-4">
                Os preços dos nossos produtos e serviços estão claramente indicados no site e incluem todos os impostos aplicáveis.
              </p>
              <ul className="list-disc list-inside text-[#34495E] space-y-2 ml-4">
                <li>Pagamentos são processados através de plataformas seguras</li>
                <li>Preços podem ser alterados sem aviso prévio</li>
                <li>Ofertas promocionais têm prazo limitado</li>
                <li>Não há cobrança de taxas ocultas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4 flex items-center">
                <RefreshCw className="mr-3 text-[#4A90E2]" size={24} />
                5. Política de Reembolso
              </h2>
              <div className="bg-gradient-to-r from-[#E8F5E8] to-[#F0FFF0] p-6 rounded-xl mb-4">
                <h3 className="text-xl font-bold text-[#27AE60] mb-3">Garantia de 7 Dias</h3>
                <p className="text-[#2C3E50] leading-relaxed mb-3">
                  Oferecemos uma garantia incondicional de 7 dias para todos os nossos produtos digitais.
                </p>
                <ul className="list-disc list-inside text-[#34495E] space-y-2 ml-4">
                  <li>Reembolso de 100% do valor pago</li>
                  <li>Sem perguntas ou justificativas necessárias</li>
                  <li>Processamento em até 5 dias úteis</li>
                  <li>Válido apenas para primeira compra do produto</li>
                </ul>
              </div>
              <p className="text-[#34495E] leading-relaxed">
                Para solicitar reembolso, entre em contato através dos canais oficiais dentro do prazo estabelecido.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">6. Propriedade Intelectual</h2>
              <p className="text-[#34495E] leading-relaxed mb-4">
                Todo o conteúdo deste site, incluindo textos, gráficos, logos, ícones, imagens, clipes de áudio, downloads digitais e software, é propriedade de Bárbara Leite ou de seus fornecedores de conteúdo.
              </p>
              <ul className="list-disc list-inside text-[#34495E] space-y-2 ml-4">
                <li>Uso pessoal e não comercial permitido</li>
                <li>Proibida reprodução sem autorização</li>
                <li>Direitos autorais protegidos por lei</li>
                <li>Violações serão processadas judicialmente</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">7. Conduta do Usuário</h2>
              <p className="text-[#34495E] leading-relaxed mb-4">
                Você concorda em não usar o serviço para:
              </p>
              <ul className="list-disc list-inside text-[#34495E] space-y-2 ml-4">
                <li>Atividades ilegais ou não autorizadas</li>
                <li>Violar direitos de terceiros</li>
                <li>Transmitir vírus ou códigos maliciosos</li>
                <li>Fazer engenharia reversa dos produtos</li>
                <li>Compartilhar credenciais de acesso</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">8. Limitação de Responsabilidade</h2>
              <p className="text-[#34495E] leading-relaxed mb-4">
                Nossos serviços são fornecidos "como estão" e "conforme disponíveis". Não garantimos que:
              </p>
              <ul className="list-disc list-inside text-[#34495E] space-y-2 ml-4">
                <li>O serviço será ininterrupto ou livre de erros</li>
                <li>Os resultados obtidos serão específicos</li>
                <li>Todos os defeitos serão corrigidos</li>
              </ul>
              <p className="text-[#34495E] leading-relaxed mt-4">
                Nossa responsabilidade total não excederá o valor pago pelo produto ou serviço.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4 flex items-center">
                <Scale className="mr-3 text-[#4A90E2]" size={24} />
                9. Lei Aplicável
              </h2>
              <p className="text-[#34495E] leading-relaxed">
                Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer disputa será resolvida nos tribunais competentes do Brasil, especificamente na comarca de São Paulo/SP.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">10. Alterações nos Termos</h2>
              <p className="text-[#34495E] leading-relaxed">
                Reservamos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. O uso continuado do serviço constitui aceitação dos termos modificados.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4 flex items-center">
                <Mail className="mr-3 text-[#4A90E2]" size={24} />
                11. Contato
              </h2>
              <p className="text-[#34495E] leading-relaxed mb-4">
                Para dúvidas sobre estes termos ou nossos serviços:
              </p>
              <div className="bg-gradient-to-r from-[#E8F5E8] to-[#F0FFF0] p-6 rounded-xl">
                <p className="text-[#2C3E50] font-semibold mb-2">Bárbara Leite - Psicopedagoga Comportamental</p>
                <p className="text-[#34495E] flex items-center mb-2">
                  <Mail className="mr-2" size={16} />
                  contato@barbaraleite.com.br
                </p>
                <p className="text-[#34495E] flex items-center mb-2">
                  <Phone className="mr-2" size={16} />
                  (11) 99999-9999
                </p>
                <p className="text-[#34495E] text-sm">
                  Horário de atendimento: Segunda a Sexta, 9h às 18h
                </p>
              </div>
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

export default TermsPage;