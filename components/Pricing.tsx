
import React from 'react';

const plans = [
  {
    name: "LIGA TOTAL MED 360",
    description: "Preparação completa ENEM + UNIMONTES + UFVJM",
    features: [
      "Aulas Teóricas presenciais ou online planejadas (somente os conteúdos necessários para o aluno a partir do planejamento individual)",
      "2 Cursos Específicos Gratuitos: Matemática e Redação",
      "3 Simulados Diagnósticos entre fevereiro e março: 2 Enem e 1 Unimontes Biológicas",
      "30 Simulados no ano: 16 Simulados Enem; 10 Simulados Unimontes; 2 Simulados UFVJM; 2 Simulados Federais de SP",
      "Simulados com RDI: Relatórios de Desempenho Individual em todas as aplicações",
      "Mentoria Full Time Semanal em Redação e Matemática (presencial ou online, de segunda a sexta. É só agendar!)",
      "30 correções presenciais e individuais de Redação",
      "Mentoria Liga de Estudos",
      "Mentoria Semanal com a acadêmica Bárbara Layane (6x aprovada em Medicina), para organização de estudos em todas as matérias",
      "Planejamento Semanal de Estudos de acordo com as metas e prioridades individuais. Entrega do planejamento todo domingo pela manhã, de forma individualizada",
      "Coleção de Material de Questões Enem e Unimontes: impresso ou digital (escolha do aluno). Enem: 5 volumes; Unimontes: 3 volumes",
      "Preparação focada em Enem, Unimontes e UFVJM"
    ],
    price: "4.790,00",
    installments: "519,00",
    highlight: true,
    color: "bg-[#2000f5]"
  },
  {
    name: "MED 360 ENEM",
    description: "Preparação focada exclusivamente no ENEM",
    features: [
      "Aulas Teóricas presenciais ou online planejadas (somente os conteúdos necessários para o aluno a partir do planejamento individual)",
      "2 Cursos Específicos Gratuitos: Matemática e Redação",
      "2 Simulados Diagnósticos Enem",
      "16 Simulados no ano: 16 Simulados Enem, todos com RDI: Relatórios de Desempenho Individual em todas as aplicações, indicando evolução e pontos de atenção em TRI",
      "Mentoria Full Time Semanal em Redação e Matemática (presencial ou online, de segunda a sexta. É só agendar!)",
      "30 correções presenciais e individuais de Redação",
      "Mentoria Liga de Estudos",
      "Mentoria Semanal com a acadêmica Bárbara Layane (6x aprovada em Medicina), para organização de estudos em todas as matérias",
      "Planejamento Semanal de Estudos de acordo com as metas e prioridades individuais. Entrega do planejamento todo domingo pela manhã, de forma individualizada",
      "Coleção de Material de Questões Enem e Unimontes: impresso ou digital 5 volumes",
      "Preparação focada no Enem 2026"
    ],
    price: "3.790,00",
    installments: "419,00",
    highlight: false,
    color: "bg-[#150f1d]"
  },
  {
    name: "MED 360 UNIMONTES",
    description: "Preparação específica para a UNIMONTES",
    features: [
      "Aulas Teóricas presenciais ou online planejadas (somente os conteúdos necessários para o aluno a partir do planejamento individual)",
      "2 Cursos Específicos Gratuitos: Biologia e Química",
      "1 Simulado Diagnóstico Unimontes",
      "10 Simulados no ano: aplicações online e presenciais em calendário – Biológicas",
      "Mentoria Full Time Semanal em Redação (presencial ou online, de segunda a sexta. É só agendar!)",
      "30 correções presenciais e individuais de Redação",
      "Mentoria Liga de Estudos",
      "Mentoria Semanal com a acadêmica Bárbara Layane (6x aprovada em Medicina), para organização de estudos em todas as matérias",
      "Planejamento Semanal de Estudos de acordo com as metas e prioridades individuais. Entrega do planejamento todo domingo pela manhã, de forma individualizada",
      "Coleção de Material de Questões Unimontes: impresso ou digital 3 volumes",
      "Preparação focada na Unimontes 2026"
    ],
    price: "2.790,00",
    installments: "319,00",
    highlight: false,
    color: "bg-[#150f1d]"
  },
  {
    name: "QUESTÕES E SIMULADOS",
    description: "Para quem quer só testar, ajustar e evoluir",
    features: [
      "3 Simulados Diagnósticos: 2 Enem e 1 Unimontes",
      "30 Simulados no ano: 16 Simulados Enem, todos com RDI: Relatórios de Desempenho Individual em todas as aplicações, indicando evolução e pontos de atenção em TRI",
      "30 correções presenciais e individuais de Redação",
      "Planejamento Semanal de Estudos de acordo com as metas e prioridades individuais. Entrega do planejamento todo domingo pela manhã, de forma individualizada",
      "Bloco de Questões Enem e Unimontes semanal",
      "Preparação focada no Enem 2026 e Unimontes 2026"
    ],
    price: "990,00",
    installments: "119,00",
    highlight: false,
    color: "bg-[#ff5b05]"
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="planos" className="py-24 bg-white text-[#150f1d]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-anton text-5xl md:text-7xl mb-4">ESCOLHA A SUA LIGA</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            A modalidade ideal para o seu objetivo e seu momento atual de preparação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-4 ${plan.highlight ? 'ring-4 ring-[#2000f5]' : 'border border-gray-200'}`}
            >
              <div className={`${plan.color} p-8 text-white`}>
                <h3 className="font-anton text-2xl mb-2">{plan.name}</h3>
                <p className="text-sm opacity-80 leading-tight h-10">{plan.description}</p>
              </div>
              <div className="p-8 flex-1 flex flex-col bg-white">
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <span className="text-[#ff5b05] font-bold">✔</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 pt-8 mt-auto">
                  <p className="text-gray-400 text-sm mb-1">Investimento à vista</p>
                  <p className="text-3xl font-anton text-[#150f1d] mb-4">R$ {plan.price}</p>
                  <p className="text-gray-600 text-sm mb-6">ou 10x de <span className="text-[#ff5b05] font-extrabold text-xl">R$ {plan.installments}</span></p>
                  <button className={`w-full py-4 rounded-md font-anton text-xl transition-colors ${plan.highlight ? 'bg-[#2000f5] text-white hover:bg-[#150f1d]' : 'bg-[#150f1d] text-white hover:bg-[#ff5b05]'}`}>
                    SELECIONAR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
