
import React from 'react';

interface Mentor {
  name: string;
  role: string;
  description: string;
  img: string;
  approvals?: string[];
  specialties?: string[];
}

const mentorsList: Mentor[] = [
  {
    name: "Bárbara Layane",
    role: "Acadêmica de Medicina pela Unimontes",
    description: "9 aprovações em Medicina por diferentes processos seletivos.",
    img: "/barbara_mentora.jpeg",
    approvals: [
      "Unimontes vestibular tradicional",
      "Unifipmoc vestibular",
      "Unifipmoc PROUNI 100%",
      "FIP Guanambi PROUNI 100%",
      "UFVJM SASI",
      "UFVJM SISU",
      "Uninove FIES"
    ],
    specialties: [
      "Planejamento estratégico de estudos ao longo do ano",
      "Organização da rotina com metas semanais e prioridades claras",
      "Técnicas de prova e controle emocional em dias de simulado e aplicação real",
      "Acompanhamento contínuo do estudante, com ajustes constantes conforme desempenho e evolução"
    ]
  },
  {
    name: "Hamilton Vinícius",
    role: "Professor de Matemática - Especialista em ENEM, TRI e análise de desempenho educacional",
    description: "Especialista em ENEM, TRI e análise de desempenho. Responsável pelas mentorias estratégicas em Matemática e leitura de dados dos simulados.",
    img: "/hamilton.png"
  },
  {
    name: "Alysson Luiz",
    role: "Professor de Redação e Ciências Humanas - Mestre em História pela UFMG e Doutor pela USP",
    description: "Especialista em competências do ENEM e vestibulares tradicionais. Responsável pelas mentorias de Redação, estratégia argumentativa e acompanhamento individual.",
    img: "/alysson.png"
  }
];

const Mentors: React.FC = () => {
  return (
    <section id="mentores" className="py-24 bg-[#150f1d] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/4">
            <h2 className="font-anton text-5xl md:text-7xl mb-8">Nossos <br /><span className="text-[#ff5b05]">Mentores</span></h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-8">
              Equipe de especialistas focados no seu resultado. Mentoria real para sua aprovação.
            </p>
            <div className="p-6 bg-[#2000f5] rounded-xl hidden lg:block">
              <h4 className="font-anton text-2xl mb-2 text-white italic">"Foco no essencial"</h4>
              <p className="text-sm text-white/80">
                Otimizamos cada minuto do seu estudo com estratégia e dados.
              </p>
            </div>
          </div>

          <div className="lg:w-3/4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {mentorsList.map((mentor, i) => (
              <div key={i} className="group bg-white/5 p-6 rounded-3xl border border-white/10 hover:border-[#2000f5]/50 transition-all">
                <div className="aspect-[4/4] bg-gray-800 rounded-2xl mb-6 overflow-hidden relative">
                  <img
                    src={mentor.img}
                    alt={mentor.name}
                    className={`w-full h-full object-cover ${mentor.name === 'Hamilton Vinícius' ? 'scale-150 object-[center_30%]' :
                      mentor.name === 'Alysson Luiz' ? 'object-[center_15%]' : ''
                      }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150f1d] to-transparent opacity-60"></div>
                </div>
                <h3 className="font-anton text-2xl mb-1 text-[#ff5b05]">{mentor.name}</h3>
                <p className="text-xs uppercase tracking-widest text-[#2000f5] font-extrabold mb-4">{mentor.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{mentor.description}</p>

                {mentor.approvals && (
                  <div className="mb-4">
                    <h4 className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-2">Aprovações</h4>
                    <ul className="text-[11px] text-gray-400 space-y-1">
                      {mentor.approvals.map((app, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#ff5b05] rounded-full"></span> {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {mentor.specialties && (
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-2">Especialista em</h4>
                    <ul className="text-[11px] text-gray-400 space-y-1">
                      {mentor.specialties.map((spec, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-[#2000f5] rounded-full"></span> {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
