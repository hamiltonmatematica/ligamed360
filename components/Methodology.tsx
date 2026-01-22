
import React from 'react';

const Methodology: React.FC = () => {
  const steps = [
    { label: "O que estudar", color: "bg-[#2000f5]" },
    { label: "Como estudar", color: "bg-[#ff5b05]" },
    { label: "Por que estudar", color: "bg-[#150f1d]" },
    { label: "O que ajustar", color: "bg-[#2000f5]" }
  ];

  return (
    <section className="py-24 bg-[#150f1d] overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="font-anton text-5xl md:text-7xl mb-8 leading-none">
            O que muda na <br/><span className="text-[#ff5b05]">LIGA MED 360</span>
          </h2>
          <p className="text-xl text-gray-400">
            Aqui você não recebe um horário genérico. Você recebe um plano de ação semanal construído para você, com metas, prioridades e acompanhamento.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className={`${step.color} p-8 rounded-xl flex flex-col justify-end min-h-[200px] group hover:scale-105 transition-transform duration-300`}>
              <span className="text-white/40 font-anton text-4xl mb-4">0{i+1}</span>
              <h3 className="font-anton text-2xl text-white">{step.label}</h3>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-white/5 border border-white/10 rounded-2xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h4 className="font-anton text-3xl mb-4 text-[#ff5b05]">Decisões baseadas em dados</h4>
              <p className="text-gray-300 leading-relaxed">
                Toda semana, você terá um planejamento individualizado entregue todo domingo. Esqueça o estudo no escuro. Analisamos cada erro em simulados para ajustar sua rota em tempo real.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="bg-[#2000f5] p-6 rounded-lg text-center">
                <p className="font-anton text-4xl text-white mb-2">30+</p>
                <p className="text-xs uppercase tracking-widest text-white/70">Simulados anuais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
