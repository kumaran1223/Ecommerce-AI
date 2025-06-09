
import React from 'react';
import { ChatMessage as ChatMessageType } from '@/types';
import ProductCard from '@/components/products/ProductCard';

interface ChatMessageProps {
  message: ChatMessageType;
  onProductSelect?: (product: any) => void;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, onProductSelect }) => {
  const isUser = message.sender === 'user';

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-slide-up`}>
      <div className={`max-w-[80%] ${isUser ? 'order-2' : 'order-1'}`}>
        {!isUser && (
          <div className="flex items-center mb-1">
            <div className="h-6 w-6 gradient-primary rounded-full flex items-center justify-center mr-2">
              <span className="text-xs font-bold text-white">AI</span>
            </div>
            <span className="text-xs text-muted-foreground">Shopping Assistant</span>
          </div>
        )}
        
        <div className={`rounded-lg p-3 ${
          isUser 
            ? 'chat-user ml-auto' 
            : 'chat-bot'
        }`}>
          <p className="text-sm whitespace-pre-line">{message.content}</p>
          
          {/* Product suggestions */}
          {message.products && message.products.length > 0 && (
            <div className="mt-4 space-y-3">
              {message.type === 'product-suggestion' ? (
                <div className="grid gap-3">
                  {message.products.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => onProductSelect?.(product)}
                      className="bg-card dark:bg-card rounded-lg p-4 border border-border cursor-pointer hover:shadow-md transition-all duration-200 hover:bg-accent/10 dark:hover:bg-accent/10"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="h-16 w-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-foreground truncate">{product.name}</h4>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-lg font-bold text-primary">${product.price}</span>
                            <div className="flex items-center space-x-1">
                              <span className="text-yellow-400 text-sm">★</span>
                              <span className="text-xs text-muted-foreground">{product.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-3 max-w-sm">
                  {message.products.slice(0, 4).map((product) => (
                    <div
                      key={product.id}
                      onClick={() => onProductSelect?.(product)}
                      className="cursor-pointer transform hover:scale-[1.02] transition-transform duration-200"
                    >
                      <ProductCard product={product} compact />
                    </div>
                  ))}
                  {message.products.length > 4 && (
                    <div className="text-center py-2">
                      <span className="text-xs text-muted-foreground">
                        +{message.products.length - 4} more products available
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        
        <div className={`text-xs text-muted-foreground mt-1 ${isUser ? 'text-right' : 'text-left'}`}>
          {formatTimestamp(message.timestamp)}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
