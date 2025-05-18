import React from 'react';
const Offer = () => {
  return <section id="oferta" className="bg-white ">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dorama-purple">
              📚 O Que Está Incluso
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-dorama-purple">
                ✔️ O que você vai receber:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-dorama-purple text-white flex items-center justify-center mr-3">✓</span>
                  <span className="text-gray-700">Grupo exclusivo no WhatsApp</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-dorama-purple text-white flex items-center justify-center mr-3">✓</span>
                  <span className="text-gray-700">Indicação semanal com propósito emocional</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-dorama-purple text-white flex items-center justify-center mr-3">✓</span>
                  <span className="text-gray-700">Encontros ao vivo para assistir juntas</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-dorama-purple text-white flex items-center justify-center mr-3">✓</span>
                  <span className="text-gray-700">Dia do surto emocional (sexta)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-dorama-pink">
                🎁 Bônus especiais:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-dorama-pink text-white flex items-center justify-center mr-3">📘</span>
                  <span className="text-gray-700">Guia das Dorameiras</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-dorama-pink text-white flex items-center justify-center mr-3">🤝</span>
                  <span className="text-gray-700">Manual da Novata Acolhida</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-dorama-pink text-white flex items-center justify-center mr-3">💻</span>
                  <span className="text-gray-700">Sessão Especial com Bruna Bohn</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-dorama-pink text-white flex items-center justify-center mr-3">🎧</span>
                  <span className="text-gray-700">Playlist Dorameira Raiz</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-dorama-pink text-white flex items-center justify-center mr-3">🎀</span>
                  <span className="text-gray-700 font-medium">Guia das Dorameiras 2.0 (bônus secreto e exclusivo)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-dorama-purple to-dorama-pink rounded-3xl shadow-xl p-8 md:p-12 text-center text-white mb-16">
            <p className="text-xl mb-2">Valor Total Percebido: </p>
            <p className="text-3xl font-bold mb-8 line-through opacity-75">R$297</p>
            
            <p className="text-xl mb-2">Mas você garante tudo isso por:</p>
            <p className="text-5xl font-bold mb-2">R$67</p>
            <p className="text-2xl font-medium mb-6">por 6 meses</p>
            
            <p className="mb-8 opacity-90">
              Sem mensalidade. Sem pegadinhas. Só emoção e pertencimento real.
            </p>
            
            <div className="max-w-lg mx-auto p-6 bg-white/20 backdrop-blur-sm rounded-2xl mb-8">
              <h3 className="text-2xl font-bold mb-4">💜 Garantia Amorosa de 30 Dias</h3>
              <p className="mb-2">Se não for pra você, devolvemos 100% do valor.</p>
              <p className="opacity-90 italic">Sem perguntas. Sem julgamentos. Só carinho.</p>
            </div>
            
            <a href="#" className="bg-white text-dorama-purple font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl inline-block">
              🎯 QUERO ENTRAR COM SEGURANÇA
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Offer;