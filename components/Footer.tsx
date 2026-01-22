
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#150f1d] py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex items-center gap-4">
             <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#ff5b05]">
               <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4" />
               <circle cx="50" cy="65" r="25" fill="none" stroke="currentColor" strokeWidth="4" />
               <circle cx="50" cy="75" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
               <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="4" />
             </svg>
             <span className="font-outfit text-3xl font-medium tracking-tight">áurea</span>
          </div>
          <div className="flex gap-8 text-gray-500 text-sm uppercase tracking-widest font-semibold">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-tighter">
          <p>© 2024 Áurea - LIGA MED 360. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#">Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
