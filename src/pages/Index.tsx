
import React from 'react';
import Header from '@/components/Header';
import Home from '@/components/Home';
import Problema from '@/components/Problema';
import Beneficios from '@/components/Beneficios';
import Testimonials from '@/components/Testimonials';
import Offer from '@/components/Offer';
import About from '@/components/About';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Home />
        <Problema />
        <Beneficios />
        <Testimonials />
        <Offer />
        <About />
        <FinalCta />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
