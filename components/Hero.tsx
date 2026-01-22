
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#150f1d]">
      {/* Background Brand Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#2000f5] rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#ff5b05] rounded-full filter blur-[120px] opacity-10"></div>
      
      {/* Decorative Circles from PDF identity */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[400px] h-[400px] opacity-10 hidden lg:block">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-[#2000f5]">
          <circle cx="50" cy="50" r="40" />
          <circle cx="80" cy="50" r="30" className="fill-[#ff5b05] opacity-80" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-[#ff5b05] font-semibold text-lg md:text-xl mb-4 tracking-widest uppercase">LIGA MED 360</h2>
          <h1 className="font-anton text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8">
            Quando aula deixa de <span className="text-[#2000f5]">ser o foco</span> e planejamento vira <span className="text-[#ff5b05]">prioridade</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Se você já assistiu muitas aulas e sente que não está evoluindo, a LIGA MED 360 foi criada para você. Aqui, o centro é mentoria real e decisões baseadas em dados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#planos" 
              className="bg-[#2000f5] text-white px-10 py-5 rounded-md font-anton text-2xl hover:bg-opacity-90 transition-all text-center"
            >
              GARANTIR MINHA VAGA
            </a>
            <a 
              href="#metodo" 
              className="border-2 border-white/20 text-white px-10 py-5 rounded-md font-anton text-2xl hover:bg-white hover:text-black transition-all text-center"
            >
              CONHECER O MÉTODO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
