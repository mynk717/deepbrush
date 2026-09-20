'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { ArrowLeft, ArrowRight, ShieldCheck, Sparkles, Box } from 'lucide-react';
import ProductPlaceholderImage from './ProductPlaceholderImage';

interface Carousel3DProps {
  products: Product[];
}

export default function Carousel3D({ products }: Carousel3DProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!products || products.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const getVisibleItems = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + products.length) % products.length;
      visible.push({ product: products[index], offset: i });
    }
    return visible;
  };

  return (
    <div className="relative w-full py-10 overflow-hidden">
      {/* Background Soft Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-amber-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="w-[400px] h-[400px] bg-slate-800/10 rounded-full filter blur-3xl animate-pulse delay-700" />
      </div>

      {/* 3D Perspective Stage */}
      <div className="relative h-[480px] sm:h-[520px] flex items-center justify-center perspective-[2000px]">
        {getVisibleItems().map(({ product, offset }) => {
          const isCenter = offset === 0;
          const absOffset = Math.abs(offset);
          const hasRealImage = Boolean(product.image);

          return (
            <motion.div
              key={`${product.id}-${offset}`}
              className={`absolute cursor-pointer ${
                isCenter ? 'z-40' : absOffset === 1 ? 'z-30' : 'z-20'
              }`}
              initial={false}
              animate={{
                x: offset * 280,
                y: absOffset * 16,
                scale: isCenter ? 1 : Math.max(0.65, 1 - absOffset * 0.18),
                opacity: absOffset > 2 ? 0 : isCenter ? 1 : 0.6,
                rotateY: offset * 22,
                filter: isCenter
                  ? 'blur(0px) brightness(1)'
                  : `blur(${absOffset * 2}px) brightness(0.85)`,
              }}
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              onClick={() => setCurrentIndex((currentIndex + offset + products.length) % products.length)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div
                className={`w-[290px] sm:w-[330px] h-[420px] sm:h-[450px] rounded-3xl bg-white border-2 overflow-hidden shadow-2xl transition-all flex flex-col justify-between p-5 ${
                  isCenter ? 'border-amber-500 ring-4 ring-amber-500/10' : 'border-slate-200'
                }`}
              >
                <div>
                  {/* Image Container */}
                  <div className="relative w-full h-48 bg-slate-50 rounded-2xl overflow-hidden mb-4 border border-slate-100 flex items-center justify-center p-3">
                    {hasRealImage ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="300px"
                        className="object-contain p-2"
                      />
                    ) : (
                      <ProductPlaceholderImage type={product.svgType} name={product.series} className="w-full h-full border-none rounded-none" />
                    )}

                    {/* Fast Moving Badge */}
                    {product.popular && (
                      <div className="absolute top-2 left-2 z-10">
                        <span className="bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase shadow-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3 fill-slate-950" /> Fast Moving
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                      {product.series}
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base leading-snug line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {product.useCase}
                    </p>
                  </div>
                </div>

                {/* Footer specs & CTA */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-slate-700 font-bold">
                    <Box className="w-3.5 h-3.5 text-amber-500" /> MOQ: {product.moq}
                  </div>
                  {isCenter && (
                    <Link
                      href={`/products/${product.id}`}
                      className="bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-xl transition flex items-center gap-1"
                    >
                      View Specs &rarr;
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={handlePrev}
          aria-label="Previous Product"
          className="w-10 h-10 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 transition shadow flex items-center justify-center"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          {currentIndex + 1} / {products.length} Series
        </span>
        <button
          onClick={handleNext}
          aria-label="Next Product"
          className="w-10 h-10 rounded-full bg-white border border-slate-300 text-slate-700 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-500 transition shadow flex items-center justify-center"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
