import React from 'react';
const FinalCta = () => {
  return <section className=" bg-gradient-to-b from-white to-dorama-soft-bg">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dorama-purple">
            ⏳ Última Chamada
          </h2>
          
          <p className="text-xl text-gray-700 mb-6">
            Você sente demais pra assistir doramas sozinha.
            <br />
            O Clube das Dorameiras é o espaço onde você pode rir, chorar, desabafar e pertencer — com quem realmente entende.
          </p>
          
          <div className="bg-white rounded-3xl shadow-lg p-6 border border-dorama-pink mb-10">
            <p className="flex items-center justify-center text-xl font-bold text-dorama-pink mb-4">
              <span className="text-2xl mr-2">⚠️</span>
              O bônus <span className="font-bold">"Guia das Dorameiras 2.0"</span> só está disponível HOJE.
            </p>
            <p className="text-gray-700">Depois, sai do ar.</p>
          </div>
          
          <a href="https://pay.kiwify.com.br/NZHluog" className="cta-button inline-block text-xl">
            💜 SIM! EU QUERO ENTRAR AGORA NO Clube das Dorameiras
          </a>
        </div>
      </div>
    </section>;
};
export default FinalCta;