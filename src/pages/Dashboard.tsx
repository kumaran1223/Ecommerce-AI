
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductGrid from '@/components/products/ProductGrid';
import ChatBot from '@/components/chat/ChatBot';
import { CartSidebar } from '@/components/cart/CartSidebar';
import { mockProducts } from '@/data/mockData';
import { Product } from '@/types';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const categories = [
    {
      name: 'Laptops',
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop',
      icon: 'L'
    },
    {
      name: 'Smartphones',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
      icon: 'S'
    },
    {
      name: 'Audio',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      icon: 'A'
    },
    {
      name: 'Gaming',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
      icon: 'G'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Refined Professional Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Elegant Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>

        {/* Subtle Geometric Pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #6366f1 2px, transparent 2px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Enhanced Interactive Floating Elements */}
        <div className="absolute top-1/4 left-[10%] w-3 h-3 bg-blue-500/30 rounded-full animate-pulse hover:scale-150 hover:bg-blue-500/50 transition-all duration-500 cursor-pointer"></div>
        <div className="absolute top-1/3 right-[15%] w-2 h-2 bg-indigo-500/30 rounded-full animate-pulse hover:scale-150 hover:bg-indigo-500/50 transition-all duration-500 cursor-pointer" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-[20%] w-2.5 h-2.5 bg-purple-500/30 rounded-full animate-pulse hover:scale-150 hover:bg-purple-500/50 transition-all duration-500 cursor-pointer" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 right-[10%] w-3 h-3 bg-blue-600/30 rounded-full animate-pulse hover:scale-150 hover:bg-blue-600/50 transition-all duration-500 cursor-pointer" style={{animationDelay: '0.5s'}}></div>

        {/* Additional Floating Particles */}
        <div className="absolute top-[15%] left-[30%] w-1 h-1 bg-cyan-500/40 rounded-full animate-pulse hover:scale-200 transition-all duration-300 cursor-pointer" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-[60%] right-[25%] w-1.5 h-1.5 bg-pink-500/40 rounded-full animate-pulse hover:scale-200 transition-all duration-300 cursor-pointer" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-[15%] left-[40%] w-1 h-1 bg-emerald-500/40 rounded-full animate-pulse hover:scale-200 transition-all duration-300 cursor-pointer" style={{animationDelay: '2.5s'}}></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-fade-in">
            {/* Compact Status Badge with 3D Effect */}
            <div className="mb-6">
              <div className="inline-flex items-center px-3 py-1.5 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 mb-4 animate-slide-up transform-gpu hover:rotate-1">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 animate-pulse shadow-emerald-500/50 shadow-sm"></div>
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">AI-Powered Shopping Experience</span>
              </div>
            </div>

            {/* Compact Title with 3D Hover Effects */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 animate-slide-up transform-gpu hover:scale-105 transition-all duration-500 cursor-default" style={{animationDelay: '0.2s'}}>
                <span className="block mb-1 hover:text-blue-600 transition-colors duration-300">Welcome to</span>
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-500 transform hover:scale-110 inline-block">
                  E-commerce AI
                </span>
              </h1>

              {/* Interactive Accent Line */}
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full animate-slide-up hover:w-24 hover:h-1 transition-all duration-500 cursor-pointer" style={{animationDelay: '0.4s'}}></div>
            </div>

            {/* Compact Description with Hover Effect */}
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up hover:text-slate-800 dark:hover:text-slate-100 transition-colors duration-300 cursor-default" style={{animationDelay: '0.6s'}}>
              Experience the future of shopping with our AI-powered platform. Get personalized recommendations and discover products you'll love.
            </p>

            {/* Enhanced 3D Buttons with Advanced Effects */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-slide-up" style={{animationDelay: '0.8s'}}>
              <Link
                to="/products"
                className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-500 px-6 py-3 text-base font-semibold rounded-lg inline-flex items-center shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 hover:scale-105 transform-gpu overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <svg className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:rotate-12 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="relative z-10">Start Shopping</span>
              </Link>
              <button
                onClick={() => setIsChatOpen(true)}
                className="group relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-500 px-6 py-3 text-base font-semibold rounded-lg inline-flex items-center shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:scale-105 transform-gpu overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <svg className="w-4 h-4 mr-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="relative z-10">Chat with AI Assistant</span>
              </button>
            </div>

            {/* Compact 3D Stats Section with Advanced Effects */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 animate-slide-up" style={{animationDelay: '1s'}}>
              <div className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105 transform-gpu cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">10K+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Products Available</div>
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
              </div>

              <div className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105 transform-gpu cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">50K+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Happy Customers</div>
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
              </div>

              <div className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105 transform-gpu cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">99%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">Satisfaction Rate</div>
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Interactive Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-125 transition-all duration-300 cursor-pointer group">
          <div className="relative p-3 rounded-full bg-white/10 dark:bg-slate-800/30 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
            <svg className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-blue-500 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <div className="absolute inset-0 rounded-full bg-blue-500/20 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
          </div>
        </div>
      </section>

      {/* Enhanced Featured Categories */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 animate-slide-up">
              Shop by <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Category</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
              Explore our carefully curated categories designed to help you find exactly what you're looking for
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to="/categories"
                className="group glass rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden animate-fade-in interactive"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
                    <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full p-2 shadow-medium">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <div className="h-14 w-14 gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-glow group-hover:shadow-colored transition-all duration-300 group-hover:scale-110">
                    <span className="text-white font-bold text-lg">{category.icon}</span>
                  </div>
                  <h3 className="font-semibold text-base text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm text-muted-foreground">Explore Collection</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Products Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 animate-slide-up">
              Featured <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Products</span>
            </h2>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
              Discover our handpicked selection of premium tech products, carefully chosen for quality, innovation, and value
            </p>
          </div>

          <div className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <ProductGrid products={mockProducts.slice(0, 8)} />
          </div>

          <div className="text-center mt-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 gradient-primary text-white font-bold text-lg rounded-2xl hover:shadow-glow hover:scale-105 transition-all duration-300 group"
            >
              <span>View All Products</span>
              <svg className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Chat Bot */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Cart Sidebar */}
      <CartSidebar />

      <Footer />
    </div>
  );
};

export default Dashboard;
