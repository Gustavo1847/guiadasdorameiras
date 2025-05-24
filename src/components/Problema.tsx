import React from 'react';
const Problema = () => {
  return <section id="problema" className="bg-white
        relative
        bg-white
        section--spacing        /* py-16 md:py-24 */
        scroll-mt-4           /* offset ao scroll-into-view */
        flex flex-col items-center text-center
        justify-start
        ">
      <div className="section-container flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-dorama-purple text-center mb-6">
          😔 Você se apega aos personagens, fica com eles na cabeça por dias...E escuta coisas como:
        </h2>
  
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700">
          
          <div className="bg-dorama-soft-bg rounded-2xl p-6 shadow-sm border border-dorama-light-purple/20">
            <p className="font-medium mb-4 text-dorama-purple">Talvez você já tenha ouvido coisas como:</p>
            <blockquote className="pl-4 border-l-4 border-dorama-pink italic mb-2">
              "Você leva essas séries a sério demais…"
            </blockquote>
            <blockquote className="pl-4 border-l-4 border-dorama-pink italic mb-2">
              "Isso é coisa de adolescente..."
            </blockquote>
            <blockquote className="pl-4 border-l-4 border-dorama-pink italic">
              "Sabe que é tudo mentira, né?"
            </blockquote>
          </div>
          
          <p>
            Você sabe que não. É conforto, é rotina, é um lugar onde você se sente bem.
          </p>
          
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold mb-4">
              E se existisse um lugar onde isso fosse NORMAL?
            </h3>
            <p>Esse lugar existe. E você pode entrar agora.</p>
            <p className="text-3xl md:text-4xl font-bold text-dorama-purple mt-4 animate-heartbeat">
              💌 Clube das Dorameiras
            </p>
          </div>
        </div>
        <div className="problema-arrow hidden md:flex absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <a href="#beneficios">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-dorama-purple text-white shadow-lg hover:bg-dorama-purple/80 transition animate-bounce">
              ↓
            </div>
          </a>
        </div>
      </div>
    </section>;
};
export default Problema;