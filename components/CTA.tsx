
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-[#ff5b05] text-white relative overflow-hidden">
      {/* Decorative overlapping circles */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[#2000f5] rounded-full opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="font-anton text-5xl md:text-8xl mb-10 leading-[0.9]">
          NÃO É SOBRE ESTUDAR MAIS.<br/>É SOBRE ESTUDAR <span className="underline decoration-[#150f1d]">MELHOR</span>.
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-medium">
          Se você quer sair do improviso e assumir o controle da sua preparação para Medicina, a LIGA é o seu próximo passo.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a 
            href="#planos" 
            className="bg-[#150f1d] text-white px-12 py-6 rounded-md font-anton text-3xl hover:bg-[#2000f5] transition-all transform hover:scale-105"
          >
            QUERO COMEÇAR AGORA
          </a>
          <div className="text-left">
            <p className="font-anton text-xl leading-none">VAGAS LIMITADAS</p>
            <p className="text-xs uppercase tracking-widest opacity-80">Garantia de acompanhamento individual</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
