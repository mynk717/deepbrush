'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Filter, Factory, ShieldCheck, Truck, Sparkles } from 'lucide-react';

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';
  const [category, setCategory] = useState(initialCategory);

  const filteredProducts = category === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-10">
      
      {/* Page Header */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(#475569_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs px-3.5 py-1.5 rounded-full font-bold">
            <Factory className="w-3.5 h-3.5" /> Direct Factory Wholesale Catalog • Raipur Unit
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Handcrafted for <span className="text-amber-400">Indian Painters</span> & Hardware Stores
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Every brush and roller in our catalog is engineered to withstand harsh solvents, rough plaster walls, and long contractor hours. Hand-sorted bristles, solvent-sealed cores, and direct factory pricing.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300 border-t border-slate-800/80">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <ShieldCheck className="w-4 h-4" /> GST Compliant (22BJEPS5887HIZS)
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <Truck className="w-4 h-4" /> Pan-India Transport Delivery
            </span>
            <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
              <Sparkles className="w-4 h-4" /> Custom Branding Available
            </span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 flex items-center gap-1 mr-2 uppercase tracking-wide">
            <Filter className="w-4 h-4 text-amber-500" /> Filter Category:
          </span>
          <button
            onClick={() => setCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              category === 'all' 
                ? 'bg-slate-900 text-amber-400 shadow-md scale-105' 
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            All Products ({PRODUCTS.length})
          </button>
          <button
            onClick={() => setCategory('paint-brushes')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              category === 'paint-brushes' 
                ? 'bg-slate-900 text-amber-400 shadow-md scale-105' 
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            Paint Brushes (5)
          </button>
          <button
            onClick={() => setCategory('roller-brushes')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              category === 'roller-brushes' 
                ? 'bg-slate-900 text-amber-400 shadow-md scale-105' 
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            Roller Brushes (4)
          </button>
          <button
            onClick={() => setCategory('texture-tools')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              category === 'texture-tools' 
                ? 'bg-slate-900 text-amber-400 shadow-md scale-105' 
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            Texture & Trowels (1)
          </button>
        </div>

        <span className="text-xs text-slate-500 font-medium">
          Showing <strong>{filteredProducts.length}</strong> manufacturing series
        </span>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-600 font-semibold">Loading Deep Brush Catalog...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
