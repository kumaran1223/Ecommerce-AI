import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCartStore } from '@/stores/useCartStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const CartSidebar: React.FC = () => {
  const { 
    items, 
    isOpen, 
    toggleCart, 
    updateQuantity, 
    removeItem, 
    getTotalPrice, 
    getTotalItems,
    clearCart
  } = useCartStore();
  
  const total = getTotalPrice();
  const totalItems = getTotalItems();

  if (!isOpen) return null;

  return (
    <>
      {/* Enhanced Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300"
        onClick={toggleCart}
      />

      {/* Enhanced Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md glass border-l border-border/20 shadow-2xl z-50 flex flex-col animate-slide-in-right">
        {/* Enhanced Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/20 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-xl">
          <div className="flex items-center space-x-3">
            <div className="p-2 gradient-primary rounded-xl shadow-glow">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">
                Shopping Cart
              </h2>
              {totalItems > 0 && (
                <span className="text-sm text-muted-foreground">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </span>
              )}
            </div>
            {totalItems > 0 && (
              <span className="bg-gradient-primary text-white text-sm font-bold px-3 py-1 rounded-full shadow-glow animate-pulse">
                {totalItems}
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleCart}
            className="h-10 w-10 p-0 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-950 transition-colors rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        {/* Enhanced Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-background/50 to-background">
          {items.length === 0 ? (
            <div className="text-center py-20 animate-fade-in">
              <div className="relative mb-8">
                <div className="w-24 h-24 gradient-primary rounded-full mx-auto flex items-center justify-center shadow-glow animate-pulse">
                  <ShoppingBag className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-secondary rounded-full animate-bounce"></div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Your cart is empty
              </h3>
              <p className="text-muted-foreground mb-8 text-lg">
                Start shopping to add items to your cart and experience our amazing products
              </p>
              <Button
                onClick={toggleCart}
                className="gradient-primary text-white hover:shadow-glow hover:scale-105 transition-all duration-300 px-8 py-3 text-lg font-semibold rounded-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => (
                <Card key={item.product.id} className="overflow-hidden glass border-border/20 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-5">
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <img
                          src={item.product.image_url}
                          alt={item.product.name}
                          className="w-20 h-20 object-cover rounded-xl flex-shrink-0 shadow-medium"
                        />
                        <div className="absolute -top-2 -right-2 bg-gradient-primary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-glow">
                          {item.quantity}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-foreground truncate text-lg mb-1">
                          {item.product.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          ${item.product.price.toFixed(2)} each
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 bg-muted/50 rounded-xl p-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="h-8 w-8 p-0 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-950 rounded-lg"
                            >
                              <Minus className="w-4 h-4" />
                            </Button>
                            <span className="text-lg font-bold w-8 text-center text-primary">
                              {item.quantity}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="h-8 w-8 p-0 hover:bg-green-100 hover:text-green-600 dark:hover:bg-green-950 rounded-lg"
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.product.id)}
                            className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950 h-10 w-10 p-0 rounded-xl transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-muted-foreground">Subtotal:</span>
                        <span className="font-bold text-xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
        
        {/* Enhanced Footer */}
        {items.length > 0 && (
          <div className="border-t border-border/20 p-6 space-y-6 bg-gradient-to-t from-background/80 to-background/60 backdrop-blur-xl">
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>Shipping:</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="border-t border-border/50 pt-3">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-2xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <Button
                className="w-full gradient-primary text-white hover:shadow-glow hover:scale-105 transition-all duration-300 py-4 text-lg font-bold rounded-xl group"
                size="lg"
              >
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                Proceed to Checkout
              </Button>
              <Button
                variant="outline"
                className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950 transition-colors py-3 rounded-xl"
                onClick={clearCart}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
