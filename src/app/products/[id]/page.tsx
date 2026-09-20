import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PRODUCTS, COMPANY_INFO } from '@/data/products';
import ProductPlaceholderImage from '@/components/ProductPlaceholderImage';
import { 
  ArrowLeft, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  Truck, 
  Sparkles,
  Zap,
  Factory,
  Package,
  Camera
} from 'lucide-react';

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const hasRealImage = Boolean(product.image);
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=Hello%20Hardeep%20Singh%20Saini,%20I%20want%20to%20place%20a%20bulk%20order%20for%20the%20${encodeURIComponent(product.name)}%20(${encodeURIComponent(product.series)}).`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-10">
      
      {/* Back Navigation */}
      <div>
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 font-bold text-xs bg-white border border-slate-200 px-4 py-2 rounded-xl transition shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Product Catalog
        </Link>
      </div>

      {/* Main Product Hero Layout */}
      <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Visual Image or Vector Placeholder */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative w-full h-80 sm:h-96 rounded-2xl border border-slate-200 overflow-hidden shadow-inner bg-slate-50 flex items-center justify-center p-6">
            {hasRealImage ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain p-4"
              />
            ) : (
              <ProductPlaceholderImage 
                type={product.svgType} 
                name={product.series} 
                className="w-full h-full border-none rounded-none"
              />
            )}
          </div>
          
          {/* Note for temporary crop or placeholder */}
          {product.id === 'jyoti-xxx' && (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-[11px] text-slate-600 flex items-center gap-2">
              <Camera className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Product reference image (factory photo crop).</span>
            </div>
          )}

          {/* Placeholder Notice only when a product image is unavailable */}
          {!hasRealImage && (
            <div className="bg-amber-50 border border-amber-200/70 rounded-2xl p-4 text-xs text-amber-900 space-y-1">
              <span className="font-extrabold flex items-center gap-1.5 text-amber-800 uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-amber-600" /> Placeholder Image Notice
              </span>
              <p className="leading-relaxed">
                This vector preview highlights technical specs until a product image is uploaded.
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Human Story & Specs */}
        <div className="lg:col-span-7 space-y-6">
          
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="bg-slate-900 text-amber-400 text-[10px] font-extrabold uppercase px-3 py-1 rounded-md tracking-wider">
                {product.series}
              </span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase px-3 py-1 rounded-md border border-emerald-200">
                Minimum Order: {product.moq}
              </span>
              {product.popular && (
                <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-md">
                  High Demand Item
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              {product.name}
            </h1>
            
            <p className="text-slate-700 text-sm font-semibold italic mt-2 border-l-3 border-amber-500 pl-3">
              &ldquo;{product.shortDesc}&rdquo;
            </p>
          </div>

          {/* Detailed Story Narrative */}
          <div className="space-y-3 text-slate-700 text-sm leading-relaxed border-t border-b border-slate-100 py-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Behind the Manufacturing</h3>
            <p>{product.description}</p>
          </div>

          {/* On-Site Practical Use Case */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-1">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Package className="w-4 h-4 text-amber-500" /> Recommended Use Case
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {product.useCase}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-2xl space-y-1">
              <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" /> Real Painter Feedback
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {product.painterNote}
              </p>
            </div>
          </div>

          {/* Technical Specs List */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Technical Specifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="bg-white border border-slate-200 p-3 rounded-xl flex items-center justify-between">
                <span className="text-slate-500">Available Sizes</span>
                <strong className="text-slate-900">{product.sizes.join(', ')}</strong>
              </div>
              <div className="bg-white border border-slate-200 p-3 rounded-xl flex items-center justify-between">
                <span className="text-slate-500">Material Composition</span>
                <strong className="text-slate-900">{product.material}</strong>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct WhatsApp Call to Action */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 transition shadow-lg"
            >
              <MessageSquare className="w-5 h-5" /> Request Wholesale Pricing on WhatsApp
            </a>

            <Link
              href={`/rfq?product=${encodeURIComponent(product.name)}`}
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 transition"
            >
              Build Custom Order (RFQ)
            </Link>
          </div>

          {/* Trust Guarantee */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span className="flex items-center gap-1 text-slate-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-500" /> GST Invoice (22BJEPS5887HIZS)
            </span>
            <span className="flex items-center gap-1 text-slate-700 font-medium">
              <Factory className="w-4 h-4 text-emerald-500" /> Direct Factory Raipur
            </span>
            <span className="flex items-center gap-1 text-slate-700 font-medium">
              <Truck className="w-4 h-4 text-blue-500" /> Pan-India Transport
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}
