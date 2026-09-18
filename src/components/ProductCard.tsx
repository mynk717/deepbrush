import React from 'react';
import Link from 'next/link';
import { Product, COMPANY_INFO } from '@/data/products';
import ProductPlaceholderImage from './ProductPlaceholderImage';
import { 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=Hello%20Hardeep%20Singh%20Saini,%20I%20am%20interested%20in%20a%20wholesale%20quote%20for%20the%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.series)}).`;

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-xl hover:border-amber-400/80 transition-all duration-300 flex flex-col justify-between group overflow-hidden">
      
      <div>
        {/* Top Product Image / SVG Visual */}
        <div className="relative">
          <ProductPlaceholderImage type={product.svgType} name={product.series} />
          {product.popular && (
            <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 z-20">
              <Sparkles className="w-3 h-3 fill-slate-950" /> Fast Moving
            </span>
          )}
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-6 space-y-4">
          
          {/* Category & Series Badges */}
          <div className="flex items-center justify-between gap-2">
            <span className="bg-slate-100 border border-slate-200 text-slate-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
              {product.series}
            </span>
            <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
              MOQ: {product.moq}
            </span>
          </div>

          {/* Product Title */}
          <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
            <Link href={`/products/${product.id}`}>
              {product.name}
            </Link>
          </h3>

          {/* Human Catchy Tagline */}
          <p className="text-xs font-semibold text-slate-700 italic border-l-2 border-amber-500 pl-2.5 py-0.5">
            "{product.shortDesc}"
          </p>

          {/* Human Narrative Description */}
          <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
            {product.description}
          </p>

          {/* Painter Note (Local Craftsmanship Insight) */}
          <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 space-y-1">
            <span className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wide flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-500" /> Painter's On-Site Feedback:
            </span>
            <p className="text-[11px] text-slate-700 font-medium leading-normal">
              {product.painterNote}
            </p>
          </div>

          {/* Specs breakdown */}
          <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Sizes:</strong> {product.sizes.join(' • ')}</span>
            </div>
            <div className="flex items-start gap-2">
              <Layers className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
              <span><strong>Material:</strong> {product.material}</span>
            </div>
          </div>

        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="p-5 sm:p-6 pt-0 space-y-2">
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
          <Info className="w-3.5 h-3.5 text-slate-500" /> View Full Specs & Story <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

    </div>
  );
}
