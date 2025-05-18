
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-dorama-soft-bg to-white">
      <div className="section-container flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-dorama-purple to-dorama-pink bg-clip-text text-transparent">
          💜 Clube do Dorama
        </h1>
        <h3 className="text-xl md:text-2xl font-medium text-gray-700 mb-8 max-w-2xl">
          "Chega de assistir doramas sozinha. Aqui, você é acolhida, entendida e tem com quem surtar."
        </h3>
        
        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-8 mb-12 border border-dorama-light-purple/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dorama-purple">
            Você ama doramas, mas está cansada de assistir sozinha?
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            Entre para o <span className="italic font-medium">Clube do Dorama</span> — o único espaço criado para mulheres intensas que querem <span className="font-bold">recomendações que tocam</span> e <span className="font-bold">amizades que entendem de verdade o surto emocional de cada episódio</span>.
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Aqui, você pode sentir sem medo e pertencer sem se explicar.
          </p>
          
          <a href="#oferta" className="cta-button inline-block mb-4">
            🎯 QUERO ENTRAR NO CLUBE AGORA
          </a>
          
          <p className="text-gray-600 italic">
            Acesso por apenas R$67 por ano
            <br />
            <span className="text-dorama-purple font-medium">
              Com garantia amorosa de 30 dias 💜
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
