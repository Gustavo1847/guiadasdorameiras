
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dorama-purple text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Clube do Dorama</h3>
            <p className="text-sm opacity-80">
              Um espaço para mulheres que sentem demais.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm opacity-80 mb-2">
              © {new Date().getFullYear()} Clube do Dorama. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/guiadasdorameiras/" className="text-white hover:text-dorama-light-pink transition-colors">
                Instagram
              </a>
              <a href="wa.me/5583993559063" className="text-white hover:text-dorama-light-pink transition-colors">
                WhatsApp
              </a>
              <a href="mailto:brunacostads@outlook.com" className="text-white hover:text-dorama-light-pink transition-colors">
                E-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
