
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Product from '@/components/Product';
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
        <Hero />
        <Problem />
        <Product />
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
