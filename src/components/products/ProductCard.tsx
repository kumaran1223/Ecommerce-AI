
import React from 'react';
import { Product } from '@/types';
import { useCartStore } from '@/stores/useCartStore';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  compact?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, compact = false }) => {
  const { addItem } = useCartStore();
  const { toast } = useToast();
  const [imageError, setImageError] = React.useState(false);
  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const handleAddToCart = () => {
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
    // Also call the optional onAddToCart prop for backward compatibility
    onAddToCart?.(product);
  };

  return (
    <Card className={`group overflow-hidden transition-all duration-500 hover:shadow-large hover:-translate-y-3 hover:shadow-colored bg-gradient-to-br from-card to-card/50 border-border/50 backdrop-blur-sm animate-fade-in interactive ${compact ? 'h-auto' : 'h-full'}`}>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {imageError ? (
          <div className={`w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center ${compact ? 'h-32' : 'h-56'}`}>
            <div className="text-center">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-xs text-gray-500">{product.name}</p>
            </div>
          </div>
        ) : (
          <img
            src={product.image_url}
            alt={product.name}
            className={`w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 ${compact ? 'h-32' : 'h-56'}`}
            onError={() => setImageError(true)}
          />
        )}
        {product.discount && (
          <Badge className="absolute top-3 left-3 bg-gradient-warning text-white font-semibold px-2 py-1 text-xs animate-bounce-in shadow-medium z-20">
            -{product.discount}%
          </Badge>
        )}
        {!product.availability && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-30">
            <Badge variant="destructive" className="text-sm font-semibold animate-pulse px-3 py-1">Out of Stock</Badge>
          </div>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
          <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full p-2 shadow-medium hover:scale-110 transition-transform cursor-pointer">
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
      
      <CardContent className="p-5 relative">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="text-xs font-medium bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary border-primary/20 px-2 py-1">
            {product.brand}
          </Badge>
          <div className="flex items-center space-x-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-muted-foreground font-medium">{product.rating}</span>
          </div>
        </div>

        <h3 className={`font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 ${compact ? 'text-sm' : 'text-lg'} line-clamp-2 leading-tight`}>
          {product.name}
        </h3>

        {!compact && (
          <p className="text-muted-foreground text-xs mb-4 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        )}

        <div className="flex flex-col space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className={`font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent ${compact ? 'text-base' : 'text-lg'}`}>
                ${discountedPrice.toFixed(2)}
              </span>
              {product.discount && (
                <span className="text-xs text-muted-foreground line-through opacity-75">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            {product.stock && product.stock < 10 && (
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">
                  Only {product.stock} left
                </span>
              </div>
            )}
          </div>

          <Button
            size={compact ? "sm" : "default"}
            onClick={handleAddToCart}
            disabled={!product.availability}
            className="w-full gradient-primary text-white hover:shadow-glow hover:scale-105 transition-all duration-300 font-medium text-sm"
          >
            {compact ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            ) : (
              <>
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 4L5.5 21M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-8m-9 4h4" />
                </svg>
                Add to Cart
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
