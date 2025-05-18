import React from 'react';
const Testimonials = () => {
  return <section id="depoimentos" className="bg-dorama-soft-bg ">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dorama-purple">
            🫶 O Que Dizem Nossas Dorameiras
          </h2>
          <p className="text-2xl font-medium text-gray-700">
            "Achei que era exagero meu... até encontrar esse lugar."
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <div className="quote-box flex flex-col">
            <div className="mb-4 text-4xl text-dorama-pink">❝</div>
            <blockquote className="text-gray-700 flex-grow mb-4">
              Já chorei com desconhecidas que viraram amigas. Esse grupo me salvou de me sentir invisível.
            </blockquote>
            <div className="text-right">
              <cite className="font-medium text-dorama-purple not-italic">— Letícia</cite>
            </div>
          </div>
          
          <div className="quote-box flex flex-col">
            <div className="mb-4 text-4xl text-dorama-pink">❝</div>
            <blockquote className="text-gray-700 flex-grow mb-4">
              Nunca pensei que alguém fosse entender TANTO o que eu tava sentindo.
            </blockquote>
            <div className="text-right">
              <cite className="font-medium text-dorama-purple not-italic">— Ana</cite>
            </div>
          </div>
          
          <div className="quote-box flex flex-col">
            <div className="mb-4 text-4xl text-dorama-pink">❝</div>
            <blockquote className="text-gray-700 flex-grow mb-4">
              Sempre escondi esse lado, achando que iam me julgar. Hoje, compartilho sem medo.
            </blockquote>
            <div className="text-right">
              <cite className="font-medium text-dorama-purple not-italic">— Cláudia</cite>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xl font-medium text-gray-700 mb-6">
            Você pode ser a próxima.
          </p>
          <a href="https://pay.kiwify.com.br/NZHluog" className="cta-button inline-block">
            🎯 QUERO PARTICIPAR
          </a>
        </div>
      </div>
    </section>;
};
export default Testimonials;