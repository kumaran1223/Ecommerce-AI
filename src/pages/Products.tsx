
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductGrid from '@/components/products/ProductGrid';
import { mockProducts } from '@/data/mockData';
import { Product } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Laptops', 'Smartphones', 'Audio', 'Gaming'];

  const filteredProducts = selectedCategory === 'All'
    ? mockProducts
    : mockProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our complete collection of premium tech products
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "gradient-primary text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {selectedCategory === 'All' ? 'All Products' : selectedCategory}
              </h2>
              <p className="text-sm text-gray-600">
                {filteredProducts.length} products found
              </p>
            </div>
            
            <ProductGrid products={filteredProducts} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
