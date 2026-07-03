import React from 'react';
import ProductsHero from '../components/products/ProductsHero';
import ProductEcosystem from '../components/products/ProductEcosystem';
import FeaturedProduct from '../components/products/FeaturedProduct';
import WorkflowEcosystem from '../components/products/WorkflowEcosystem';
import FutureProducts from '../components/products/FutureProducts';
import TechPlatform from '../components/products/TechPlatform';
import ProductComparison from '../components/products/ProductComparison';
import ProductRoadmap from '../components/products/ProductRoadmap';
import FAQ from '../components/home/FAQ';

const productFaqs = [
  {
    q: 'Which products are available today?',
    a: 'RebarX is currently available for full commercial use. SteelX is in beta and accessible by request.'
  },
  {
    q: 'Can I use one product without the others?',
    a: 'Yes, all Auverion products function completely independently, though they offer enhanced workflows when used together on the same project.'
  },
  {
    q: 'How does the Developer SDK work?',
    a: 'The SDK provides programmatic access to the Auverion Core Engine, allowing you to trigger automation routines from your own custom C# or Python scripts.'
  },
  {
    q: 'Is there a bundle discount?',
    a: 'We offer an Enterprise Suite license which includes access to all current and future desktop products at a single unified rate.'
  }
];

const Products = () => {
  return (
    <main>
      <ProductsHero />
      <ProductEcosystem />
      <FeaturedProduct />
      <WorkflowEcosystem />
      <FutureProducts />
      <TechPlatform />
      <ProductComparison />
      <ProductRoadmap />
      <FAQ faqsData={productFaqs} />
    </main>
  );
};

export default Products;

