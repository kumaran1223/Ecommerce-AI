
import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '@/contexts/ChatContext';
import { useCartStore } from '@/stores/useCartStore';
import { ChatMessage } from '@/types';
import ChatMessageComponent from './ChatMessage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { mockProducts } from '@/data/mockData';
import { useToast } from '@/hooks/use-toast';

interface ChatBotProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen: externalIsOpen, onClose }) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { messages, addMessage, clearChat, isTyping, setIsTyping, processUserMessage } = useChat();
  const { addItem } = useCartStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Use external isOpen if provided, otherwise use internal state
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = onClose ? onClose : setInternalIsOpen;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Use the enhanced processUserMessage from context

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      await processUserMessage(input.trim());
      setInput('');
    }
  };

  const handleProductSelect = (product: any) => {
    // Add to cart
    addItem(product);

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });

    addMessage({
      content: `Add ${product.name} to cart`,
      sender: 'user',
      type: 'text'
    });

    setTimeout(() => {
      addMessage({
        content: `Perfect! I've added the ${product.name} to your cart. Here are the details:\n\n• Price: $${product.price}\n• Rating: ${product.rating}/5 stars\n• Category: ${product.category}\n• Brand: ${product.brand}\n• ${product.availability ? `In stock (${product.stock} available)` : 'Currently out of stock'}\n\n${product.description}\n\nYou can view your cart by clicking the cart icon in the header. Would you like to see similar products or continue shopping?`,
        sender: 'bot',
        type: 'text'
      });
    }, 500);
  };

  return (
    <>
      {/* Enhanced Chat Toggle Button - only show if no external control */}
      {externalIsOpen === undefined && (
        <Button
          onClick={() => setInternalIsOpen(true)}
          className={`fixed bottom-6 right-6 h-16 w-16 rounded-2xl gradient-primary text-white shadow-large hover:shadow-glow transition-all duration-300 z-50 group ${
            isOpen ? 'hidden' : 'flex'
          } items-center justify-center animate-float`}
        >
          <div className="relative">
            <svg className="h-7 w-7 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.418 8-9.85 8a9.9 9.9 0 01-4.5-1.1L3 21l1.9-3.65A9.9 9.9 0 013 12c0-5.43 4.57-10 10-10s10 4.57 10 10z" />
            </svg>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-glow"></div>
          </div>
        </Button>
      )}

      {/* Enhanced Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] glass border border-border/20 rounded-2xl shadow-2xl flex flex-col z-50 animate-scale-in backdrop-blur-xl">
          {/* Enhanced Header */}
          <div className="gradient-primary p-5 rounded-t-2xl text-white flex justify-between items-center shadow-medium">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-white/20 rounded-xl flex items-center justify-center mr-3 shadow-soft">
                <span className="text-sm font-bold">AI</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Shopping Assistant</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-xs opacity-90">Online • Ready to help</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearChat}
                className="text-white hover:bg-white/20 p-2 h-9 w-9 rounded-xl transition-all duration-200 hover:scale-110"
                title="Clear chat"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => externalIsOpen !== undefined ? onClose?.() : setInternalIsOpen(false)}
                className="text-white hover:bg-red-500/20 p-2 h-9 w-9 rounded-xl transition-all duration-200 hover:scale-110"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Enhanced Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gradient-to-b from-background/50 to-muted/20">
            {messages.map((message) => (
              <ChatMessageComponent
                key={message.id}
                message={message}
                onProductSelect={handleProductSelect}
              />
            ))}
            {isTyping && (
              <div className="flex items-center space-x-3 text-muted-foreground animate-slide-up">
                <div className="flex space-x-1">
                  <div className="h-3 w-3 bg-primary rounded-full animate-bounce"></div>
                  <div className="h-3 w-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="h-3 w-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-sm font-medium">AI is thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Enhanced Input */}
          <form onSubmit={handleSubmit} className="p-5 border-t border-border/20 bg-gradient-to-t from-background/80 to-background/60 backdrop-blur-xl rounded-b-2xl">
            <div className="flex space-x-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about products, get recommendations..."
                className="flex-1 transition-all duration-300 focus:ring-2 focus:ring-primary/50 border-border/50 bg-background/80 backdrop-blur-sm rounded-xl"
                disabled={isTyping}
              />
              <Button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="gradient-primary text-white hover:shadow-glow hover:scale-105 transition-all duration-300 px-4 rounded-xl"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBot;
