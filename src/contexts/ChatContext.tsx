
import React, { createContext, useContext, useState } from 'react';
import { ChatContextType, ChatMessage, Product } from '@/types';
import { mockProducts } from '@/data/mockData';

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

// Advanced product search function migrated from chatproject
const searchProducts = (query: string, filters?: any): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  let results = mockProducts.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.brand?.toLowerCase().includes(lowercaseQuery)
  );

  if (filters) {
    if (filters.category && filters.category !== 'all') {
      results = results.filter(p => p.category.toLowerCase() === filters.category.toLowerCase());
    }
    if (filters.maxPrice) {
      results = results.filter(p => p.price <= filters.maxPrice);
    }
    if (filters.minRating) {
      results = results.filter(p => p.rating >= filters.minRating);
    }
    if (filters.availability) {
      results = results.filter(p => p.availability);
    }
  }

  return results.slice(0, 12);
};

// Enhanced AI bot response generator migrated from chatproject
const generateBotResponse = (userMessage: string): { content: string; products?: Product[]; type?: string } => {
  const message = userMessage.toLowerCase();

  // Greeting responses
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return {
      content: "Hello! 👋 Welcome to our store! I'm your personal shopping assistant. I can help you find products, answer questions, and guide you through your purchase. What are you looking for today?",
      type: 'text'
    };
  }

  // Help responses
  if (message.includes('help')) {
    return {
      content: "I'm here to help! You can ask me to:\n\n• Find products by name or category\n• Show items under a certain price\n• Filter by ratings or availability\n• Get product recommendations\n• Compare different products\n\nTry asking something like 'Show me laptops under $1000' or 'Find headphones by Sony'",
      type: 'text'
    };
  }

  // Price-based searches
  const priceMatch = message.match(/under [\$]?(\d+)/);
  if (priceMatch) {
    const maxPrice = parseInt(priceMatch[1]);
    const products = searchProducts('', { maxPrice });
    return {
      content: `Here are products under $${maxPrice}:`,
      products,
      type: 'product-list'
    };
  }

  // Category-based searches
  const categories = ['laptops', 'smartphones', 'audio', 'gaming'];
  const foundCategory = categories.find(cat => message.includes(cat));
  if (foundCategory) {
    const products = searchProducts('', { category: foundCategory });
    return {
      content: `Here are ${foundCategory} products I found:`,
      products,
      type: 'product-list'
    };
  }

  // Brand searches
  const brands = ['apple', 'samsung', 'sony', 'dell', 'hp', 'asus'];
  const foundBrand = brands.find(brand => message.includes(brand));
  if (foundBrand) {
    const products = searchProducts(foundBrand);
    return {
      content: `Here are ${foundBrand} products:`,
      products,
      type: 'product-list'
    };
  }

  // Rating-based searches
  if (message.includes('high rated') || message.includes('best rated') || message.includes('top rated')) {
    const products = searchProducts('', { minRating: 4.5 });
    return {
      content: "Here are our highest-rated products:",
      products,
      type: 'product-list'
    };
  }

  // Budget searches
  if (message.includes('cheap') || message.includes('budget') || message.includes('affordable')) {
    const products = searchProducts('', { maxPrice: 500 });
    return {
      content: "Here are our budget-friendly options:",
      products,
      type: 'product-list'
    };
  }

  // General product search
  const products = searchProducts(userMessage);
  if (products.length > 0) {
    return {
      content: `I found ${products.length} products matching "${userMessage}":`,
      products,
      type: 'product-list'
    };
  }

  // Default response
  return {
    content: `I couldn't find specific products for "${userMessage}". Try searching for categories like "laptops", "smartphones", or "audio", or ask for help to see what I can do!`,
    type: 'text'
  };
};

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      content: 'Hello! Welcome to E-commerce AI! I\'m your advanced personal shopping assistant. I can help you find the perfect products, check availability, and answer any questions. What are you looking for today?',
      sender: 'bot',
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = (message: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    const newMessage: ChatMessage = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
  };

  // Enhanced processUserMessage with AI functionality
  const processUserMessage = async (content: string) => {
    // Add user message
    addMessage({
      content,
      sender: 'user',
      type: 'text'
    });

    // Show typing indicator
    setIsTyping(true);

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));

    // Generate bot response using enhanced AI
    const response = generateBotResponse(content);

    // Add bot message
    addMessage({
      content: response.content,
      sender: 'bot',
      products: response.products,
      type: response.type as any
    });

    setIsTyping(false);
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        content: 'Hello! Welcome to E-commerce AI! I\'m your advanced personal shopping assistant. I can help you find the perfect products, check availability, and answer any questions. What are you looking for today?',
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      }
    ]);
  };

  return (
    <ChatContext.Provider value={{
      messages,
      addMessage,
      clearChat,
      isTyping,
      setIsTyping,
      processUserMessage
    }}>
      {children}
    </ChatContext.Provider>
  );
};
