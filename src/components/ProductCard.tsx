'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product, COMPANY_INFO } from '@/data/products';
import ProductPlaceholderImage from './ProductPlaceholderImage';
import { 
  Sparkles, 
  MessageSquare, 
  ArrowRight,
  Info
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=Hello%20Hardeep%20Singh%20Saini,%20I%20am%20interested%20in%20a%20wholesale%20quote%20for%20the%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.series)}).`;

  const hasRealImage = product.image && product.image.endsWith('.webp') && !imgError && product.id !== 'rustic-trowel-texture';

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between group overflow-hidden">
      
      <div>
        {/* Consistent Product Image Area */}
        <div className="relative w-full h-52 sm:h-56 bg-slate-50 border-b border-slate-100 flex items-center justify-center p-4">
          {hasRealImage ? (
            <Image
              src={product.image}
              alt={`${product.name} manufactured by Deep Brush Industries`}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-contain p-3 transition-transform duration-300 group-hover:scale-105"
              onError={() => setImgError(true)}
            />
          ) : (
            <ProductPlaceholderImage type={product.svgType} name={product.series} className="w-full h-full border-none rounded-none" />
          )}

          {/* Fast Moving badge only for genuinely popular products */}
          {product.popular && (
            <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 z-20">
              <Sparkles className="w-3 h-3 fill-slate-950" /> Fast Moving
            </span>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5 space-y-3">
          
          {/* Series & MOQ */}
          <div className="flex items-center justify-between gap-2">
            <span className="bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
              {product.series}
            </span>
            <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
              MOQ: {product.moq}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
            <Link href={`/products/${product.id}`}>
              {product.name}
            </Link>
          </h3>

          {/* One-Line Use Case */}
          <p className="text-xs text-slate-600 font-medium leading-relaxed">
            {product.useCase}
          </p>

          {/* Sizes Summary */}
          <div className="pt-2 border-t border-slate-100 text-xs text-slate-700">
            <span className="text-slate-500 font-medium">Sizes: </span>
            <strong className="text-slate-900">{product.sizes.join(' • ')}</strong>
          </div>

        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="p-5 pt-0 space-y-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow-sm"
        >
          <MessageSquare className="w-4 h-4" /> Inquire Wholesale Price
        </a>
        
        <Link
          href={`/products/${product.id}`}
          className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition"
        >
          <Info className="w-3.5 h-3.5 text-slate-500" /> View Full Specs <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
