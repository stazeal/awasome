// src/components/Header.tsx
"use client";



import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-500">FashionStore</Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="#home" className="text-gray-700 hover:text-indigo-600">Home</Link>
          <Link href="#products" className="text-gray-700 hover:text-indigo-600">Products</Link>
          <Link href="#features" className="text-gray-700 hover:text-indigo-600">Features</Link>
          <Link href="#register" className="text-gray-700 hover:text-indigo-600">Register</Link>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white px-4 py-2 shadow-inner">
          <div className="flex flex-col space-y-3">
            <Link href="#home" className="text-gray-700 hover:text-indigo-600 py-1">Home</Link>
            <Link href="#products" className="text-gray-700 hover:text-indigo-600 py-1">Products</Link>
            <Link href="#features" className="text-gray-700 hover:text-indigo-600 py-1">Features</Link>
            <Link href="#register" className="text-gray-700 hover:text-indigo-600 py-1">Register</Link>
          </div>
        </nav>
      )}
    </header>
  );
}