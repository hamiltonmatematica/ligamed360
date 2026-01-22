
import React from 'react';

const Audience: React.FC = () => {
  const points = [
    "Já tem boa base teórica",
    "Quer parar de estudar no escuro",
    "Precisa de direcionamento semanal claro",
    "Quer testar, errar, corrigir e evoluir com simulados",
    "Busca autonomia sem abrir mão de acompanhamento profissional",
    "Está focado em Medicina via ENEM, Unimontes ou UFVJM"
  ];

  return (
    <section id="metodo" className="py-24 bg-white text-[#150f1d]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-anton text-5xl md:text-6xl mb-8 leading-none">
              Para quem é a <br/><span className="text-[#2000f5]">LIGA MED 360</span>
            </h2>
            <div className="space-y-4">
              {points.map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 flex-shrink-0 bg-[#ff5b05] rounded-full flex items-center justify-center text-white">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-[#2000f5] rounded-2xl overflow-hidden relative">
              <img 
                src="/aprovada.jpeg" 
                alt="Medicina" 
                className="w-full h-full object-cover mix-blend-multiply opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <blockquote className="text-4xl font-anton text-white italic text-center">
                  "O melhor dos <br/>dois mundos"
                </blockquote>
              </div>
            </div>
            {/* Floating Brand Element */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#ff5b05] rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
