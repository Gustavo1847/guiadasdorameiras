import React from 'react';
const About = () => {
  return <section id="sobre" className="section--spacing bg-dorama-soft-bg ">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-dorama-purple">
              👩‍💻 Quem criou o Clube?
            </h2>
            <p className="text-lg text-gray-700">
              Bruna Bohn, social media e dorameira de coração.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-md p-8 border border-dorama-light-purple/20 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
              <div className="md:w-1/3 flex-shrink-0">
                <div className="w-48 h-48 mx-auto overflow-hidden rounded-full border-4 border-dorama-light-purple/20 shadow-lg">
                  <img
                    src="/Foto-Bruna.jpeg"
                    alt="Bruna Bohn"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-gray-700 mb-6">
                  Cansou de esconder o que sentia, e decidiu criar o espaço que gostaria de ter tido:
                </p>
                
                <blockquote className="border-l-4 border-dorama-pink pl-4 italic text-gray-700 mb-4">
                  Leve, acolhedor e verdadeiro.
                </blockquote>
                
                <p className="text-gray-700">
                  Hoje, ela te convida pra viver o dorama com companhia e conexão.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="https://pay.kiwify.com.br/iElB84z" className="cta-button inline-block">
              🎯 QUERO FAZER PARTE DISSO
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default About;