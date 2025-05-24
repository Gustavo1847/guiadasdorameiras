
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-dorama-purple to-dorama-pink py-2 sticky top-0 inset-x-0 z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <div className="logo inline-flex items-center"><img src="/favicon-white.png" alt="Clube das Dorameiras" className="w-5 mr-2" />
          <span className="text-white text-2xl font-display font-bold">
            Clube das Dorameiras
          </span>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#beneficios" className="text-white hover:text-dorama-purple transition-colors">Benefícios</a></li>
          <li><a href="#depoimentos" className="text-white hover:text-dorama-purple transition-colors">Depoimentos</a></li>
          <li><a href="#oferta" className="text-white hover:text-dorama-purple transition-colors">Oferta</a></li>
          <li><a href="#sobre" className="text-white hover:text-dorama-purple transition-colors">Sobre</a></li>
        </ul>
        <a
          href="https://pay.kiwify.com.br/…"
          className="cta-button whitespace-nowrap ml-4"
        >
          Quero Entrar
        </a>
      </nav>
    </header>

  );
};

export default Header;
