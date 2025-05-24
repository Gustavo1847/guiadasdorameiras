import React from 'react';
const Beneficios = () => {
  return <section id="beneficios" className="section--spacing bg-gradient-to-b from-white to-dorama-soft-bg scroll-mt-4">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dorama-purple">
            📬 O que é o Clube das Dorameiras?
          </h2>
          <p className="text-xl text-gray-700">
            Um grupo seguro, leve e acolhedor pra quem ama doramas.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-6">
          <h3 className="text-2xl font-bold mb-6 text-center">Você vai ter acesso a:</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="feature-card">
              <h4 className="text-xl font-bold text-dorama-purple mb-2">📱 Grupo no WhatsApp </h4>
              <p className="text-gray-700">
                Com pessoas que entendem cada detalhe dos doramas.
              </p>
            </div>
            
            <div className="feature-card">
              <h4 className="text-xl font-bold text-dorama-purple mb-2">📺 Indicações semanais </h4>
              <p className="text-gray-700">
                Nada aleatório. Só o que vai te abraçar por dentro.
              </p>
            </div>
            
            <div className="feature-card">
              <h4 className="text-xl font-bold text-dorama-purple mb-2">🍵 Sessões "Chá & Episódio" ao vivo</h4>
              <p className="text-gray-700">
                Assistir junto e comentar em tempo real muda tudo.
              </p>
            </div>
            
            <div className="feature-card">
              <h4 className="text-xl font-bold text-dorama-purple mb-2">💬 Sexta das Emoções</h4>
              <p className="text-gray-700">
                Um espaço leve e livre pra soltar o que ficou guardado.
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-dorama-purple">💖 Benefícios reais pra quem ama doramas:</h3>
          
          <ul className="text-left max-w-lg mx-auto space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-dorama-purple font-bold mr-2">✔️</span>
              <span className="text-gray-700">Pare de assistir sozinha</span>
            </li>
            <li className="flex items-start">
              <span className="text-dorama-purple font-bold mr-2">✔️</span>
              <span className="text-gray-700">Receba indicações que fazem sentido pra dorameiras</span>
            </li>
            <li className="flex items-start">
              <span className="text-dorama-purple font-bold mr-2">✔️</span>
              <span className="text-gray-700">Conheça gente que sente parecido</span>
            </li>
            <li className="flex items-start">
              <span className="text-dorama-purple font-bold mr-2">✔️</span>
              <span className="text-gray-700">Liberdade pra falar o que quiser</span>
            </li>
            <li className="flex items-start">
              <span className="text-dorama-purple font-bold mr-2">✔️</span>
              <span className="text-gray-700">Sinta-se parte de algo desde o primeiro dia</span>
            </li>
          </ul>
          
          <a href="https://pay.kiwify.com.br/iElB84z" className="cta-button inline-block">
            🎯 QUERO PARTICIPAR AGORA
          </a>
        </div>
      </div>
    </section>;
};
export default Beneficios;