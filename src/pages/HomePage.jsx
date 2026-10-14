import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ProductSuite from '../components/ProductSuite';
import IndustrySolutions from '../components/IndustrySolutions';
import DeveloperHub from '../components/DeveloperHub';
import PricingCalculator from '../components/PricingCalculator';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProductSuite />
      <IndustrySolutions />
      <DeveloperHub />
      <PricingCalculator />
      <Testimonials />
      <FAQ />
    </>
  );
}
