'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { PRODUCTS, COMPANY_INFO } from '@/data/products';
import { Filter, CheckCircle, ArrowRight } from 'lucide-react';

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';
  const [category, setCategory] = useState(initialCategory);

  const filteredProducts = category === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Factory Product Catalog</h1>
        <p className="text-slate-600 text-sm">
          Explore our complete range of commercial paint brushes, polyamide wall rollers, and rustic trowel tools manufactured in Raipur.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-slate-200 pb-4">
        <span className="text-xs font-bold text-slate-500 flex items-center gap-1 mr-2">
          <Filter className="w-3.5 h-3.5" /> Category Filter:
        </span>
        <button
          onClick={() => setCategory('all')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
            category === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          All Products ({PRODUCTS.length})
        </button>
        <button
          onClick={() => setCategory('paint-brushes')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
            category === 'paint-brushes' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Paint Brushes (5)
        </button>
        <button
          onClick={() => setCategory('roller-brushes')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
            category === 'roller-brushes' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Roller Brushes (4)
        </button>
        <button
          onClick={() => setCategory('texture-tools')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition ${
            category === 'texture-tools' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Texture & Trowels (1)
        </button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="bg-amber-100 text-amber-900 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded">
                  {product.series}
                </span>
                <span className="text-slate-500 text-xs">MOQ: {product.moq}</span>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h3>
              <p className="text-slate-600 text-xs mb-4 leading-relaxed">{product.description}</p>
              
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 mb-4 space-y-1.5 text-xs text-slate-700">
                <p><strong>Available Sizes:</strong> {product.sizes.join(', ')}</p>
                <p><strong>Material Specs:</strong> {product.material}</p>
              </div>

              <div className="space-y-1 mb-6">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=Hello,%20I%20want%20wholesale%20rates%20for%20${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 text-center rounded-lg text-xs block transition"
              >
                Inquire via WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading Catalog...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
