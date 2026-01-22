
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[#ff5b05] font-semibold text-base md:text-lg mb-3 tracking-widest uppercase">LIGA MED 360</h2>
            <h1 className="font-anton text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6">
              Quando aula deixa de <span className="text-[#2000f5]">ser o foco</span> e planejamento vira <span className="text-[#ff5b05]">prioridade</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
              Se você já assistiu muitas aulas e sente que não está evoluindo, a LIGA MED 360 foi criada para você. Aqui, o centro é mentoria real e decisões baseadas em dados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#planos"
                className="bg-[#2000f5] text-white px-8 py-4 rounded-md font-anton text-lg hover:bg-opacity-90 transition-all text-center"
              >
                GARANTIR MINHA VAGA
              </a>
              <a
                href="#metodo"
                className="border-2 border-white/20 text-white px-8 py-4 rounded-md font-anton text-lg hover:bg-white hover:text-black transition-all text-center"
              >
                CONHECER O MÉTODO
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <img
                src="/aprovada.jpeg"
                alt="Liga Med 360"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/80 to-transparent w-full">
                <h3 className="text-white font-anton text-2xl mb-1 uppercase tracking-wide">BÁRBARA LAYANE</h3>
                <p className="text-gray-200 text-base leading-relaxed">Acadêmica de Medicina pela Unimontes e mentora de estudantes de alta performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
