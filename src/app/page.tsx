import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO, PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { 
  ShieldCheck, 
  Factory, 
  Truck, 
  ArrowRight, 
  HelpCircle,
  PackageCheck,
  Building2,
  PhoneCall
} from 'lucide-react';

export default function Home() {
  const featuredProducts = PRODUCTS.filter(p => p.popular);

  return (
    <div className="w-full bg-slate-50">
      
      {/* 1. Hero Artwork Section */}
      <section className="w-full bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Responsive Hero Image Container */}
          <div className="relative w-full h-[260px] sm:h-[380px] md:h-[480px] lg:h-[580px]">
            <Image
              src="/hero-section.webp"
              alt="Deep Brush Industries painting brushes and rollers used by professional painters"
              fill
              priority
              sizes="100vw"
              className="object-contain md:object-cover object-top md:object-center"
            />
          </div>
        </div>
      </section>

      {/* 2. Clear Wholesale CTA Panel (Outside Artwork) */}
      <section className="bg-slate-900 text-white border-b border-slate-800 py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider flex items-center justify-center md:justify-start gap-1.5">
              <Factory className="w-4 h-4" /> B2B Wholesale Portal &middot; Raipur Unit
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white">
              Direct Factory Supply for Hardware Stores & Wholesale Buyers
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Bulk transport delivery across India. Direct inquiries with Proprietor Hardeep Singh Saini.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
            <Link 
              href="/rfq" 
              className="flex-1 sm:flex-initial bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm transition"
            >
              Request Wholesale Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/products" 
              className="flex-1 sm:flex-initial bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-5 py-3.5 rounded-xl text-sm transition flex items-center justify-center"
            >
              Browse Catalog
            </Link>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=Hello%20Hardeep%20Singh%20Saini,%20I%20am%20interested%20in%20a%20wholesale%20deal%20for%20Deep%20Brush%20products.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3.5 rounded-xl shadow text-sm flex items-center justify-center gap-2 transition"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>

      {/* 3. Trust Strip */}
      <section className="bg-white border-b border-slate-200 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 space-y-1">
            <ShieldCheck className="w-6 h-6 text-amber-500 mx-auto" />
            <h4 className="text-xs font-bold text-slate-900">GST Registered Supplier</h4>
            <p className="text-[11px] text-slate-500">Full invoice compliance</p>
          </div>
          <div className="p-3 space-y-1">
            <Factory className="w-6 h-6 text-amber-500 mx-auto" />
            <h4 className="text-xs font-bold text-slate-900">Direct Factory Unit</h4>
            <p className="text-[11px] text-slate-500">Manufactured in Raipur</p>
          </div>
          <div className="p-3 space-y-1">
            <Truck className="w-6 h-6 text-amber-500 mx-auto" />
            <h4 className="text-xs font-bold text-slate-900">Pan-India Transport</h4>
            <p className="text-[11px] text-slate-500">Safe bulk dispatch</p>
          </div>
          <div className="p-3 space-y-1">
            <PackageCheck className="w-6 h-6 text-amber-500 mx-auto" />
            <h4 className="text-xs font-bold text-slate-900">Custom Branding</h4>
            <p className="text-[11px] text-slate-500">Bulk OEM packaging</p>
          </div>
        </div>
      </section>

      {/* 4. Product Categories */}
      <section className="py-14 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-amber-600 font-bold uppercase tracking-wider text-xs block">Manufacturing Divisions</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Our Core Product Categories</h2>
          <p className="text-slate-600 text-xs sm:text-sm">Built to handle Indian wall paints, harsh enamels, and heavy contractor use.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/products?cat=paint-brushes" className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-amber-400 transition space-y-3 group">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 font-bold group-hover:bg-amber-500 group-hover:text-slate-950 transition">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-900">Paint Brushes</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Series 444, ASIAN Series, D-2 Classic, JYOTI Precision, and JUMBO STAR commercial broad wall brushes.
            </p>
            <span className="text-amber-600 font-bold text-xs inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Explore Brushes <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link href="/products?cat=roller-brushes" className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-amber-400 transition space-y-3 group">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 font-bold group-hover:bg-amber-500 group-hover:text-slate-950 transition">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900">Paint Rollers</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Heavy-duty Polyamide wall rollers, Woolen masonry rollers, Super Fine Microfiber, and Reach Strip Pencil rollers.
            </p>
            <span className="text-amber-600 font-bold text-xs inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Explore Rollers <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>

          <Link href="/products?cat=texture-tools" className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-amber-400 transition space-y-3 group">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 font-bold group-hover:bg-amber-500 group-hover:text-slate-950 transition">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900">Texture Tools & Trowels</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Stainless steel Rustic Trowels for wall putty application, Venetian plastering, and decorative surface prep.
            </p>
            <span className="text-amber-600 font-bold text-xs inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Explore Trowels <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </section>

      {/* 5. Featured Products Grid */}
      <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <span className="text-amber-600 font-bold uppercase tracking-wider text-xs block mb-1">Fast Moving Stock</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Featured Manufacturing Series</h2>
          </div>
          <Link href="/products" className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl flex items-center gap-1.5 transition">
            View All Products Catalog <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 6. Wholesale Ordering Process */}
      <section className="bg-white border-y border-slate-200 py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-amber-600 font-bold uppercase tracking-wider text-xs block">Simple B2B Workflow</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How Wholesale Ordering Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
              <span className="w-8 h-8 bg-amber-500 text-slate-950 font-black rounded-full inline-flex items-center justify-center text-sm">1</span>
              <h3 className="font-bold text-slate-900 text-sm">Select Series & Sizes</h3>
              <p className="text-xs text-slate-600">Browse our product catalog or select items for your custom RFQ.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
              <span className="w-8 h-8 bg-amber-500 text-slate-950 font-black rounded-full inline-flex items-center justify-center text-sm">2</span>
              <h3 className="font-bold text-slate-900 text-sm">Send Quantity Inquiry</h3>
              <p className="text-xs text-slate-600">Connect via WhatsApp or submit our RFQ form with required box quantities.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
              <span className="w-8 h-8 bg-amber-500 text-slate-950 font-black rounded-full inline-flex items-center justify-center text-sm">3</span>
              <h3 className="font-bold text-slate-900 text-sm">Factory Quote & GST Invoice</h3>
              <p className="text-xs text-slate-600">Receive direct factory rates and formal GST invoice terms from Raipur.</p>
            </div>
            <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
              <span className="w-8 h-8 bg-amber-500 text-slate-950 font-black rounded-full inline-flex items-center justify-center text-sm">4</span>
              <h3 className="font-bold text-slate-900 text-sm">Transport Dispatch</h3>
              <p className="text-xs text-slate-600">Orders packed safely and dispatched via trusted transport carriers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-16 px-4 sm:px-8 max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-amber-600" /> Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">Key information for buyers, distributors, and hardware stores.</p>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Q: Who is the primary paint brush manufacturer in Raipur, Chhattisgarh?</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              <strong>A:</strong> Deep Brush Industries (Proprietor: Hardeep Singh Saini) is a primary manufacturer and wholesale supplier of paint brushes, polyamide rollers, and texture tools located in Telibandha, Raipur.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Q: What is the Minimum Order Quantity (MOQ) for wholesale orders?</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              <strong>A:</strong> MOQs depend on the series — typically 200–500 pcs per box/carton for brushes and 200–300 pcs for roller sleeves. Custom bulk orders can be discussed directly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">Q: Do you supply custom OEM branded packaging?</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              <strong>A:</strong> Yes, we provide custom brand printing and packaging for bulk hardware stockists and regional distributors.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
