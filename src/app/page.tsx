import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO, PRODUCTS } from '@/data/products';
import { 
  ShieldCheck, 
  Factory, 
  Truck, 
  CheckCircle, 
  ArrowRight, 
  PhoneCall, 
  HelpCircle,
  Award,
  Layers,
  Sparkles
} from 'lucide-react';

export default function Home() {
  const featuredProducts = PRODUCTS.filter(p => p.popular);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24 px-4 sm:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs px-3.5 py-1.5 rounded-full font-medium">
              <Factory className="w-3.5 h-3.5" /> Direct Factory Manufacturer • Raipur, Chhattisgarh
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              High Class Painting & <span className="text-amber-400">Artist Brushes</span> — Factory Direct Supply
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Deep Brush Industries produces commercial grade paint brushes, polyamide rollers, and texture tools for wholesale distributors, paint dealers, and contractors across India.
            </p>

            {/* B2B Trust Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-lg text-xs">
                <span className="text-amber-400 font-bold block text-sm">GST Registered</span>
                <span className="text-slate-400">{COMPANY_INFO.gstin}</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-lg text-xs">
                <span className="text-emerald-400 font-bold block text-sm">Pan-India Wholesale</span>
                <span className="text-slate-400">Direct Transport Delivery</span>
              </div>
              <div className="bg-slate-800/80 border border-slate-700 p-3 rounded-lg text-xs col-span-2 sm:col-span-1">
                <span className="text-blue-400 font-bold block text-sm">Custom Branding</span>
                <span className="text-slate-400">Bulk OEM Packaging</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/rfq" 
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-lg shadow-lg flex items-center gap-2 transition"
              >
                Request Wholesale Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/products" 
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold px-6 py-3.5 rounded-lg transition"
              >
                Browse Catalog
              </Link>
            </div>
          </div>

          {/* Quick Wholesale Card */}
          <div className="lg:col-span-5 bg-slate-800 border border-slate-700 p-6 sm:p-8 rounded-2xl shadow-2xl relative">
            <div className="absolute -top-3 -right-3 bg-amber-500 text-slate-950 font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wide">
              B2B Portal
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2">Instant Factory Wholesale Order</h3>
            <p className="text-slate-300 text-xs mb-6">Connect directly with Proprietor Hardeep Singh Saini for bulk rate inquiries.</p>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-200">Series 444 & Asian Series</h4>
                  <p className="text-slate-400 text-xs">Standard & High-Density Flat Brushes (1" to 4")</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-200">Polyamide & Microfiber Rollers</h4>
                  <p className="text-slate-400 text-xs">Smooth & Rough Wall Painting Sleeves (2"x9", 1"x4")</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-200">Texture Tools & Rustic Trowels</h4>
                  <p className="text-slate-400 text-xs">Putty Application & Decorative Surface Prep</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700 flex flex-col gap-3">
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=Hello%20Hardeep%20Singh%20Saini,%20I%20am%20interested%20in%20a%20wholesale%20deal%20for%20Deep%20Brush%20products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 text-center rounded-lg shadow flex items-center justify-center gap-2 transition text-sm"
              >
                Chat on WhatsApp Now
              </a>
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold py-2.5 text-center rounded-lg flex items-center justify-center gap-2 transition text-xs"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" /> Direct Call: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div>
            <span className="text-amber-600 font-bold uppercase tracking-wider text-xs block mb-1">Factory Catalog</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Featured Manufacturing Series</h2>
          </div>
          <Link href="/products" className="text-amber-600 hover:text-amber-700 font-bold text-sm flex items-center gap-1 mt-2 md:mt-0">
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-amber-100 text-amber-800 text-[10px] font-bold uppercase px-2.5 py-1 rounded">
                    {product.series}
                  </span>
                  <span className="text-slate-500 text-xs font-medium">MOQ: {product.moq}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">{product.description}</p>
                
                <div className="border-t border-slate-100 pt-3 mb-4 space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span><strong>Sizes:</strong> {product.sizes.join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-amber-500" />
                    <span><strong>Material:</strong> {product.material}</span>
                  </div>
                </div>
              </div>

              <Link 
                href={`/rfq?product=${product.id}`}
                className="w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 rounded-lg text-xs transition"
              >
                Inquire Wholesale Price
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* AI Q&A / Search Snippet Section */}
      <section className="bg-slate-100 py-16 px-4 sm:px-8 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-amber-600" /> Frequently Asked Questions & Wholesale Details
            </h2>
            <p className="text-slate-600 text-sm">Key information for buyers, distributors, and hardware stores.</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 text-base mb-2">Q: Who is the leading paint brush manufacturer in Raipur, Chhattisgarh?</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong>A:</strong> Deep Brush Industries (Proprietor: Hardeep Singh Saini, GSTIN: 22BJEPS5887HIZS) is a primary direct manufacturer and wholesale distributor of painting brushes, polyamide rollers, and rustic trowel tools located in Telibandha, Raipur, Chhattisgarh.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 text-base mb-2">Q: What product series and roller sizes does Deep Brush Industries manufacture?</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong>A:</strong> We manufacture Flat Brushes (Series 444, Asian, Classic D-2, Jyoti, Jumbo 5"+), Polyamide Rollers (1"x2", 1"x4", 1"x6", 2"x9"), Woolen Exterior Rollers, Super Fine Microfiber Interior Rollers, and Reach Strip Pencil Rollers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 text-base mb-2">Q: How can I verify the GST registration of Deep Brush Industries?</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong>A:</strong> Deep Brush Industries is registered under GSTIN <strong>22BJEPS5887HIZS</strong>. Our registered address is Behind Anand Kukreja, Shyam Nagar, Telibandha, Raipur, Chhattisgarh 492001. All wholesale invoices carry valid GST compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
