
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-dorama-soft-bg to-white">
      <div className="section-container flex flex-col items-center text-center">
        <h1 className="flex items-center text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-dorama-purple to-dorama-pink bg-clip-text text-transparent">
          <img src="/favicon.png" alt="Clube das Dorameiras" className="w-16" />Clube das Dorameiras
        </h1>
        <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-8 max-w-2xl">
          "Chega de assistir e guardar tudo só pra você. Aqui, cada emoção é dividida."
        </h3>
        
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-8 mb-12 border border-dorama-light-purple/20">
          <p className="text-lg md:text-xl mb-6 text-gray-700">Você termina um episódio e tudo o que queria era mandar um áudio desabafando... e ter alguém que te entenda.</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dorama-purple">
            🌟 Bem-vinda ao Clube.
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            Oferta Especial de Hoje: 1º mês por R$19,90
          </p>
          
          <a href="https://pay.kiwify.com.br/58gF7DK" className="cta-button inline-block mb-4">
            🎯 QUERO ENTRAR AGORA NO CLUBE
          </a>
          
          <p className="text-gray-600 italic">
            R$27/mês nos próximos meses
            <br />
            <span className="text-dorama-purple font-medium">
              Com garantia de 30 dias. Sem julgamentos. Só acolhimento.💜
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
