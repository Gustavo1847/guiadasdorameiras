import React from 'react';
const FinalCta = () => {
  return <section className="section--spacing bg-gradient-to-b from-white to-dorama-soft-bg">
      <div className="section-container mt-6 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dorama-purple">
            ⏳ Última Chamada
          </h2>
          
          <p className="text-xl text-gray-700 mb-6">
            O Clube é pra quem ama Doramas e quer um espaço seguro.
          </p>
          
          <div className="bg-white rounded-3xl shadow-lg p-6 border border-dorama-pink mb-10">
            <p className="flex items-center justify-center text-xl font-bold text-dorama-pink mb-4">
              <span className="text-2xl mr-2">🚨</span>
              O Guia das Dorameiras é bônus exclusivo e só fica disponível POUCO TEMPO.
            </p>
          </div>
          
          <a href="https://pay.kiwify.com.br/iElB84z" className="cta-button inline-block text-xl">
            💜 SIM! EU QUERO ENTRAR AGORA NO CLUBE DAS DORAMEIRAS
          </a>
        </div>
      </div>
    </section>;
};
export default FinalCta;