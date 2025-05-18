
import React from 'react';

const Problem = () => {
  return (
    <section className="bg-white py-16" id="problema">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-dorama-purple text-center">
          Você também sente que ninguém entende o quanto os doramas significam pra você?
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-700">
          <p>
            Você assiste um episódio que te deixa em prantos, que parece ter sido escrito com a sua alma…
            <br />
            Mas quando olha pro lado, <span className="font-bold">não tem com quem compartilhar tudo isso</span>.
          </p>
          
          <div className="bg-dorama-soft-bg rounded-2xl p-6 shadow-sm border border-dorama-light-purple/20">
            <p className="font-medium mb-4 text-dorama-purple">Talvez você já tenha ouvido coisas como:</p>
            <blockquote className="pl-4 border-l-4 border-dorama-pink italic mb-2">
              "Você leva essas séries a sério demais…"
            </blockquote>
            <blockquote className="pl-4 border-l-4 border-dorama-pink italic mb-2">
              "Isso é coisa de adolescente."
            </blockquote>
            <blockquote className="pl-4 border-l-4 border-dorama-pink italic">
              "Mas isso é só ficção, né?"
            </blockquote>
          </div>
          
          <p>
            Mas pra você, os doramas <span className="font-bold">não são só entretenimento.</span>
            <br />
            Eles são abrigo, catarse, reencontro emocional.
          </p>
          
          <div className="text-center py-8">
            <h3 className="text-2xl font-bold mb-4">
              E se existisse um espaço onde cada emoção sua fosse acolhida — e nunca julgada?
            </h3>
            <p>Esse espaço existe. E ele se chama:</p>
            <p className="text-3xl md:text-4xl font-bold text-dorama-purple mt-4 animate-heartbeat">
              💌 Clube do Dorama
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
