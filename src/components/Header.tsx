'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '@/data/products';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-slate-900 text-slate-100 shadow-md sticky top-0 z-50">
      {/* Top Bar for B2B Verification - Compact */}
      <div className="bg-slate-950 border-b border-slate-800/80 text-[11px] sm:text-xs py-1.5 px-4 sm:px-8 text-center sm:text-left font-medium text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-between">
          <span className="tracking-wide text-slate-300">
            <strong className="text-amber-400 font-semibold">GST Registered Supplier</strong> &middot; Direct Factory Manufacturer &middot; Made in Raipur
          </span>
          <span className="hidden md:inline-block text-slate-400 text-[11px]">
            Pan-India B2B Wholesale Delivery
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-[130px] sm:w-[165px] h-[42px] sm:h-[50px]">
            <Image
              src="/brand/logo.png"
              alt="Deep Brush Industries Logo"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs lg:text-sm font-semibold text-slate-200">
          <Link href="/" className="hover:text-amber-400 transition-colors">
            Home
          </Link>
          <Link href="/products" className="hover:text-amber-400 transition-colors">
            Product Catalog
          </Link>
          <Link href="/about" className="hover:text-amber-400 transition-colors">
            About Factory
          </Link>
          <Link href="/rfq" className="hover:text-amber-400 transition-colors">
            Wholesale RFQ
          </Link>
          <Link href="/contact" className="hover:text-amber-400 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=Hello%20Deep%20Brush%20Industries,%20I%20want%20to%20inquire%20about%20wholesale%20rates.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3.5 py-2 rounded-lg shadow flex items-center gap-1.5 transition"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Inquire</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden text-slate-300 hover:text-white p-1.5 rounded-lg border border-slate-700 bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-4 py-4 space-y-3">
          <Link 
            href="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-200 hover:text-amber-400 py-1 border-b border-slate-800/50"
          >
            Home
          </Link>
          <Link 
            href="/products" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-200 hover:text-amber-400 py-1 border-b border-slate-800/50"
          >
            Product Catalog
          </Link>
          <Link 
            href="/about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-200 hover:text-amber-400 py-1 border-b border-slate-800/50"
          >
            About Factory
          </Link>
          <Link 
            href="/rfq" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-200 hover:text-amber-400 py-1 border-b border-slate-800/50"
          >
            Wholesale RFQ
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold text-slate-200 hover:text-amber-400 py-1"
          >
            Contact & GST Details
          </Link>
        </div>
      )}
    </header>
  );
}
