import React from 'react';
const Product = () => {
  return <section id="beneficios" className="bg-gradient-to-b from-white to-dorama-soft-bg ">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dorama-purple">
            📦 O Que é o Clube do Dorama
          </h2>
          <p className="text-xl text-gray-700">
            Um espaço leve, íntimo e emocionalmente seguro — feito para mulheres que <span className="font-bold">sentem demais</span> ao assistir doramas.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">No Clube, você recebe:</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="feature-card">
              <h4 className="text-xl font-bold text-dorama-purple mb-2">Comunidade no WhatsApp</h4>
              <p className="text-gray-700">
                Um espaço seguro para compartilhar emoções, discutir episódios e fazer amizades reais com mulheres que entendem seus sentimentos.
              </p>
            </div>
            
            <div className="feature-card">
              <h4 className="text-xl font-bold text-dorama-purple mb-2">Recomendações afetivas semanais</h4>
              <p className="text-gray-700">
                Indicações personalizadas baseadas em estados emocionais, não em algoritmos frios e genéricos.
              </p>
            </div>
            
            <div className="feature-card">
              <h4 className="text-xl font-bold text-dorama-purple mb-2">Sessões do Chá & Surto</h4>
              <p className="text-gray-700">
                Encontros ao vivo para assistir juntas, criar conexões reais e compartilhar momentos marcantes.
              </p>
            </div>
            
            <div className="feature-card">
              <h4 className="text-xl font-bold text-dorama-purple mb-2">Sexta do Surto Emocional</h4>
              <p className="text-gray-700">
                Dia dedicado para desabafar sobre aquelas cenas que mexeram profundamente com seu coração.
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-dorama-purple">💖 Benefícios Reais:</h3>
          
          <ul className="text-left max-w-lg mx-auto space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-dorama-purple font-bold mr-2">✔️</span>
              <span className="text-gray-700">Adeus à solidão emocional</span>
            </li>
            <li className="flex items-start">
              <span className="text-dorama-purple font-bold mr-2">✔️</span>
              <span className="text-gray-700">Recomendações com alma (não listas frias)</span>
            </li>
            <li className="flex items-start">
              <span className="text-dorama-purple font-bold mr-2">✔️</span>
              <span className="text-gray-700">Amizades com quem sente como você</span>
            </li>
            <li className="flex items-start">
              <span className="text-dorama-purple font-bold mr-2">✔️</span>
              <span className="text-gray-700">Liberdade para se expressar sem filtros</span>
            </li>
            <li className="flex items-start">
              <span className="text-dorama-purple font-bold mr-2">✔️</span>
              <span className="text-gray-700">Um espaço onde você pertence — de verdade</span>
            </li>
          </ul>
          
          <a href="https://pay.kiwify.com.br/NZHluog" className="cta-button inline-block">
            🎯 ENTRAR AGORA
          </a>
        </div>
      </div>
    </section>;
};
export default Product;