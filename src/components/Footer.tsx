import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO } from '@/data/products';
import { Phone, Mail, MapPin, ShieldCheck, Factory, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Overview */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center font-bold text-slate-950">
              DB
            </div>
            <span className="font-bold text-lg text-white">DEEP BRUSH INDUSTRIES</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            {COMPANY_INFO.tagline}. Leading B2B manufacturer and distributor of painter brushes, polyamide rollers, and texture tools across India.
          </p>
          <div className="flex flex-col gap-1.5 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-amber-400">
              <ShieldCheck className="w-4 h-4" /> GSTIN: {COMPANY_INFO.gstin}
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Factory className="w-4 h-4 text-emerald-400" /> Proprietor: {COMPANY_INFO.proprietor}
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><Link href="/" className="hover:text-amber-400 transition">Home</Link></li>
            <li><Link href="/products" className="hover:text-amber-400 transition">All Products & Specifications</Link></li>
            <li><Link href="/about" className="hover:text-amber-400 transition">About Raipur Factory</Link></li>
            <li><Link href="/rfq" className="hover:text-amber-400 transition">Request Wholesale Quote</Link></li>
            <li><Link href="/contact" className="hover:text-amber-400 transition">Contact Us & GST Copy</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Product Categories</h3>
          <ul className="space-y-2 text-xs text-slate-400">
            <li><Link href="/products?cat=paint-brushes" className="hover:text-amber-400 transition">Series 444 Flat Brushes</Link></li>
            <li><Link href="/products?cat=paint-brushes" className="hover:text-amber-400 transition">ASIAN & Classic Series</Link></li>
            <li><Link href="/products?cat=paint-brushes" className="hover:text-amber-400 transition">Jumbo & Star Wall Brushes</Link></li>
            <li><Link href="/products?cat=roller-brushes" className="hover:text-amber-400 transition">Polyamide & Woolen Rollers</Link></li>
            <li><Link href="/products?cat=texture-tools" className="hover:text-amber-400 transition">Rustic Trowels & Texture Tools</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Registered Address</h3>
          <div className="space-y-3 text-xs text-slate-400">
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition">{COMPANY_INFO.phone}</a>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition">{COMPANY_INFO.email}</a>
            </p>
          </div>
        </div>

      </div>

      {/* Verification & Copyright Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-4 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved. Registered GST Unit Raipur.
          </div>
          <div className="flex gap-4">
            <span className="text-slate-400">GST Registered Supplier</span>
            <span className="text-slate-400">Pan-India Wholesale Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
