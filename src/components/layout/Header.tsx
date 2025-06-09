
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useCartStore } from '@/stores/useCartStore';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { user, logout } = useAuth();
  const { toggleCart, getTotalItems } = useCartStore();
  const location = useLocation();
  const totalItems = getTotalItems();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-border/20 backdrop-blur-xl animate-slide-up">
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/90 to-background/80"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="h-10 w-10 gradient-primary rounded-xl shadow-glow group-hover:shadow-colored transition-all duration-300 animate-glow flex items-center justify-center mr-4">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                E-commerce AI
              </h1>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`relative transition-all duration-300 hover:scale-105 ${
                isActive('/')
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
              {isActive('/') && (
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-primary rounded-full animate-scale-in"></div>
              )}
            </Link>
            <Link
              to="/products"
              className={`relative transition-all duration-300 hover:scale-105 ${
                isActive('/products')
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Products
              {isActive('/products') && (
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-primary rounded-full animate-scale-in"></div>
              )}
            </Link>
            <Link
              to="/categories"
              className={`relative transition-all duration-300 hover:scale-105 ${
                isActive('/categories')
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Categories
              {isActive('/categories') && (
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-primary rounded-full animate-scale-in"></div>
              )}
            </Link>
            <Link
              to="/support"
              className={`relative transition-all duration-300 hover:scale-105 ${
                isActive('/support')
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Support
              {isActive('/support') && (
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-primary rounded-full animate-scale-in"></div>
              )}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />

            <Button
              variant="ghost"
              size="sm"
              className="relative group hover:bg-accent/50 transition-all duration-300 hover:scale-110 hover:shadow-glow"
              onClick={toggleCart}
            >
              <svg className="h-5 w-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 4L5.5 21M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-8m-9 4h4" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-primary text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-bounce-in shadow-glow font-semibold">
                  {totalItems}
                </span>
              )}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full group hover:shadow-glow transition-all duration-300">
                  <Avatar className="h-10 w-10 ring-2 ring-transparent group-hover:ring-primary/50 transition-all duration-300">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback className="gradient-primary text-white font-semibold">
                      {user?.name?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 glass border-border/20 shadow-large animate-scale-in" align="end" forceMount>
                <div className="flex flex-col space-y-1 p-3">
                  <p className="text-sm font-semibold leading-none">{user?.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                </div>
                <DropdownMenuItem onClick={logout} className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950 cursor-pointer transition-colors">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
