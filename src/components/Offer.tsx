import React from 'react';
const Offer = () => {
  return <section id="oferta" className="section--spacing bg-white ">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dorama-purple">
              📃 Tudo que você recebe com sua assinatura:
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-dorama-purple">
                Assinando por R$27/mês, você tem acesso a:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-dorama-purple text-white flex items-center justify-center mr-3">✓</span>
                  <span className="text-gray-700">Grupo exclusivo no WhatsApp</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-dorama-purple text-white flex items-center justify-center mr-3">✓</span>
                  <span className="text-gray-700">Indicações semanais</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-dorama-purple text-white flex items-center justify-center mr-3">✓</span>
                  <span className="text-gray-700">Encontros ao vivo pra assistir em grupo</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-dorama-purple text-white flex items-center justify-center mr-3">✓</span>
                  <span className="text-gray-700">Espaço de conversa livre</span>
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
                  <span className="text-gray-700">Manual da Novata Acolhida (guia leve pra se sentir em casa)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-dorama-pink text-white flex items-center justify-center mr-3">🤝</span>
                  <span className="text-gray-700">Sessão especial com Bruna (fundadora do Clube)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-dorama-pink text-white flex items-center justify-center mr-3">🎵</span>
                  <span className="text-gray-700">Playlist Dorameira Raiz (Melhores OSTs)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-8 h-8 rounded-full bg-dorama-pink text-white flex items-center justify-center mr-3">📖</span>
                  <span className="text-gray-700">Guia das Dorameiras - Ebook com +50 indicações</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-dorama-purple to-dorama-pink rounded-3xl shadow-xl p-8 md:p-12 text-center text-white mb-16">

            <p className="text-4xl font-bold mt-10 mb-8">🎁 Oferta do dia</p>
            <p className="text-xl mb-2"><s>💰 De R$27</s></p>
            <p className="text-2xl font-medium mb-6">Por R$17 no 1˚ mês</p>

            <p className="text-xl font-bold">Assinatura recorrente -<span className="opacity-80"> R$27</span></p>
            
            <p className="mb-16 opacity-80">
              Sem pegadinhas. Só emoção e pertencimento real.
            </p>
            
            <div className="max-w-lg mx-auto p-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-16">
              <h3 className="text-2xl font-bold mb-4">💜 Garantia de 30 Dias</h3>
              <p className="mb-2">Cancelamento simples</p>
              <p className="opacity-90 italic">Se não for pra você, devolvemos.<br />Sem perguntas.</p>
            </div>
            
            <a href="https://pay.kiwify.com.br/iElB84z" className="bg-white text-dorama-purple font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl inline-block">
              🎯 QUERO ENTRAR COM GARANTIA
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Offer;