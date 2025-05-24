import React from "react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <section className="home section--spacing scroll-mt-20">
      <div className="home-container transform -translate-y-8 md:-translate-y-12 lg:-translate-y-16">
        <h1 className="flex items-center text-4xl md:text-5xl lg:text-6xl font-extrabold
                       bg-gradient-to-r from-dorama-purple to-dorama-pink bg-clip-text text-transparent">
          <img src="/favicon.png" alt="Clube das Dorameiras" className="w-16 mr-2" />
          Clube das Dorameiras
        </h1>

        <h3 className="text-xl md:text-2xl font-medium text-gray-700 max-w-2xl">
          "Chega de assistir e guardar tudo só pra você. Aqui, cada emoção é dividida."
        </h3>

        <div className="w-full bg-white rounded-3xl shadow-xl
                        py-8 px-6 md:py-10 md:px-8 lg:py-12 lg:px-10
                        border border-dorama-light-purple/20">
          <p className="text-lg md:text-xl text-gray-700">
            Você termina um episódio e tudo o que queria era mandar um áudio desabafando... e ter alguém que te entenda.
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-dorama-purple mt-4">
            🌟 Bem-vinda ao Clube.
          </h2>

          <p className="text-lg md:text-xl text-gray-700 mt-2">
            Oferta Especial de Hoje: 1º mês por R$19,90
          </p>

          <a href="https://pay.kiwify.com.br/Y54zk9U" className="cta-button inline-block mt-4">
            🎯 QUERO ENTRAR AGORA NO CLUBE
          </a>

          <p className="text-gray-600 italic mt-4">
            R$27/mês nos próximos meses
            <br />
            <span className="text-dorama-purple font-medium">
              Com garantia de 30 dias. Sem julgamentos. Só acolhimento.💜
            </span>
          </p>
        </div>
      </div>

      <div className="home-arrow">
        <a href="#problema">
          <div className="w-12 h-12 flex items-center justify-center
                          rounded-full bg-dorama-purple text-white shadow-lg
                          hover:bg-dorama-purple/80 transition animate-bounce">
            ↓
          </div>
        </a>
      </div>
    </section>
  );
};

export default Home;
