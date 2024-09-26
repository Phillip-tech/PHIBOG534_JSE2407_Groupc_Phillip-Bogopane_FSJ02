'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, ShoppingBag, Box } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            NextEcommerce
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className={`flex items-center text-gray-600 hover:text-blue-600 space-x-2 ${currentPath === '/' ? 'font-bold' : ''}`}>
              <Home className="w-5 h-5" />
              Home
            </Link>
            <Link href="/products" className={`flex items-center text-gray-600 hover:text-blue-600 space-x-2 ${currentPath === '/products' ? 'font-bold' : ''}`}>
              <Box className="w-5 h-5" />
              Products
            </Link>
            <Link href="/cart" className={`flex items-center text-gray-600 hover:text-blue-600 space-x-2 ${currentPath === '/cart' ? 'font-bold' : ''}`}>
              <ShoppingBag className="w-5 h-5" />
              Cart
            </Link>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            <Link href="/" className={`flex items-center text-gray-600 hover:text-blue-600 space-x-2 ${currentPath === '/' ? 'font-bold' : ''}`}>
              <Home className="w-5 h-5" />
              Home
            </Link>
            <Link href="/products" className={`flex items-center text-gray-600 hover:text-blue-600 space-x-2 ${currentPath === '/products' ? 'font-bold' : ''}`}>
              <Box className="w-5 h-5" />
              Products
            </Link>
            <Link href="/cart" className={`flex items-center text-gray-600 hover:text-blue-600 space-x-2 ${currentPath === '/cart' ? 'font-bold' : ''}`}>
              <ShoppingBag className="w-5 h-5" />
              Cart
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;