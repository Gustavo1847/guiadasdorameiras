
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-dorama-purple to-dorama-pink py-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <span className="text-white text-2xl font-display font-bold">
            Clube do Dorama
          </span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#beneficios" className="text-white hover:text-dorama-light-pink transition-colors">
            Benefícios
          </a>
          <a href="#depoimentos" className="text-white hover:text-dorama-light-pink transition-colors">
            Depoimentos
          </a>
          <a href="#oferta" className="text-white hover:text-dorama-light-pink transition-colors">
            Oferta
          </a>
          <a href="#sobre" className="text-white hover:text-dorama-light-pink transition-colors">
            Sobre
          </a>
        </div>
        <a 
          href="#oferta" 
          className="bg-white text-dorama-purple px-4 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
        >
          Quero Entrar
        </a>
      </div>
    </header>
  );
};

export default Header;
