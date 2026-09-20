'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product, COMPANY_INFO } from '@/data/products';
import ProductPlaceholderImage from './ProductPlaceholderImage';
import { 
  Sparkles, 
  MessageSquare, 
  ArrowRight
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [imgError, setImgError] = useState(false);
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=Hello%20Hardeep%20Singh%20Saini,%20I%20am%20interested%20in%20a%20wholesale%20quote%20for%20the%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.series)}).`;

  const hasRealImage = Boolean(product.image) && !imgError;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      className="h-full"
    >
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-amber-500/70 transition-all duration-300 flex flex-col justify-between group overflow-hidden h-full">
        
        <div>
          {/* Clean Product Image Container */}
          <div className="relative w-full h-52 sm:h-56 bg-slate-50 border-b border-slate-100 flex items-center justify-center p-4 overflow-hidden">
            {hasRealImage ? (
              <Image
                src={product.image}
                alt={`${product.name} manufactured by Deep Brush Industries`}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-contain p-3 group-hover:scale-105 transition-transform duration-300 ease-out"
                onError={() => setImgError(true)}
              />
            ) : (
              <ProductPlaceholderImage type={product.svgType} name={product.series} className="w-full h-full border-none rounded-none group-hover:scale-105 transition-transform duration-300 ease-out" />
            )}

            {/* Fast Moving Badge */}
            {product.popular && (
              <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 z-10">
                <Sparkles className="w-3 h-3 fill-slate-950" /> Fast Moving
              </span>
            )}
          </div>

          {/* Clean Content Section */}
          <div className="p-5 space-y-3">
            
            {/* Series & MOQ Header */}
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

            {/* Application / Use Case */}
            <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">
              {product.useCase}
            </p>

            {/* Available Sizes */}
            <div className="pt-2 border-t border-slate-100 text-xs text-slate-700 flex items-center justify-between">
              <span className="text-slate-500 font-medium">Sizes:</span>
              <strong className="text-slate-900 text-[11px]">{product.sizes.join(' • ')}</strong>
            </div>

          </div>
        </div>

        {/* Clean Single Action Footer */}
        <div className="p-5 pt-0 grid grid-cols-2 gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" /> Direct Quote
          </a>
          
          <Link
            href={`/products/${product.id}`}
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1 transition"
          >
            Full Specs <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </motion.div>
  );
}

