import React from 'react';
const About = () => {
  return <section id="sobre" className="bg-dorama-soft-bg ">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-dorama-purple">
              👩‍💻 Quem é Bruna Bohn?
            </h2>
            <p className="text-lg text-gray-700">
              Social media por profissão. Dorameira por paixão.
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
                  Bruna criou o Clube das Dorameiras após anos sentindo que precisava esconder seu lado emocional para ser levada a sério.
                </p>
                
                <blockquote className="border-l-4 border-dorama-pink pl-4 italic text-gray-700 mb-4">
                  "E se isso que me toca tanto, também puder tocar outras mulheres?"
                </blockquote>
                
                <p className="text-gray-700">
                  Hoje, ela guia outras mulheres intensas a viverem doramas com liberdade, conexão e acolhimento.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="https://pay.kiwify.com.br/58gF7DK" className="cta-button inline-block">
              🎯 QUERO FAZER PARTE DISSO
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default About;