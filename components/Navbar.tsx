
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#150f1d]/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
             {/* Simple representation of the Áurea symbol based on the PDF */}
             <svg viewBox="0 0 100 100" className="w-full h-full text-[#2000f5]">
               <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
               <circle cx="50" cy="65" r="25" fill="none" stroke="currentColor" strokeWidth="4" />
               <circle cx="50" cy="75" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
               <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="4" />
             </svg>
          </div>
          <span className="font-outfit text-2xl font-medium tracking-tight">áurea</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
          <a href="#metodo" className="hover:text-[#ff5b05] transition-colors">O Método</a>
          <a href="#planos" className="hover:text-[#ff5b05] transition-colors">Planos</a>
          <a href="#mentores" className="hover:text-[#ff5b05] transition-colors">Mentores</a>
          <a 
            href="#planos" 
            className="bg-[#2000f5] text-white px-6 py-2 rounded-full hover:bg-[#2000f5]/80 transition-all"
          >
            Quero minha vaga
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
