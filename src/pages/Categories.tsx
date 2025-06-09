
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      name: 'Laptops',
      description: 'High-performance laptops for work and gaming',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop',
      count: 25
    },
    {
      name: 'Smartphones',
      description: 'Latest smartphones with cutting-edge technology',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
      count: 30
    },
    {
      name: 'Audio',
      description: 'Premium headphones and audio equipment',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      count: 20
    },
    {
      name: 'Gaming',
      description: 'Gaming accessories and peripherals',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
      count: 25
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Categories</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Browse our products by category to find exactly what you're looking for
              </p>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <Link
                  key={category.name}
                  to="/products"
                  className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-medium text-sm">
                        {category.count} products
                      </span>
                      <svg className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;
