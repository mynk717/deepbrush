import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, CheckCircle2, ShieldCheck, Factory, Award } from 'lucide-react';
import { COMPANY_INFO } from '@/data/products';

export default function Header() {
  return (
    <header className="w-full bg-slate-900 text-slate-100 shadow-md sticky top-0 z-50">
      {/* Top Bar for B2B Verification */}
      <div className="bg-slate-950 border-b border-slate-800 text-xs py-1.5 px-4 sm:px-8 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-4 text-slate-300">
          <span className="flex items-center gap-1 text-amber-400 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            GST Registered: {COMPANY_INFO.gstin}
          </span>
          <span className="hidden md:flex items-center gap-1 text-emerald-400">
            <Factory className="w-3.5 h-3.5" /> Direct Factory Manufacturer
          </span>
          <span className="hidden lg:flex items-center gap-1 text-blue-400">
            <Award className="w-3.5 h-3.5" /> Made in Raipur, India
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-300">
          <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-amber-400 flex items-center gap-1 transition">
            <Phone className="w-3 h-3 text-amber-400" /> {COMPANY_INFO.phone}
          </a>
          <a href={`mailto:${COMPANY_INFO.email}`} className="hidden sm:flex items-center gap-1 hover:text-amber-400 transition">
            <Mail className="w-3 h-3 text-amber-400" /> {COMPANY_INFO.email}
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center font-bold text-slate-950 text-xl shadow-lg group-hover:bg-amber-400 transition">
            DB
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-white block leading-none">
              DEEP BRUSH <span className="text-amber-400">INDUSTRIES</span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wide block uppercase mt-0.5">
              Wholesale Brush & Roller Manufacturer
            </span>
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-slate-200 hover:text-amber-400 transition">
            Home
          </Link>
          <Link href="/products" className="text-slate-200 hover:text-amber-400 transition">
            Product Catalog
          </Link>
          <Link href="/about" className="text-slate-200 hover:text-amber-400 transition">
            About Factory
          </Link>
          <Link href="/rfq" className="text-slate-200 hover:text-amber-400 transition">
            Wholesale RFQ
          </Link>
          <Link href="/contact" className="text-slate-200 hover:text-amber-400 transition">
            Contact & GST Details
          </Link>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=Hello%20Deep%20Brush%20Industries,%20I%20want%20to%20inquire%20about%20wholesale%20rates.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-md shadow flex items-center gap-1.5 transition"
          >
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </header>
  );
}
