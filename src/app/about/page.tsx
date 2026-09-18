import React from 'react';
import { COMPANY_INFO } from '@/data/products';
import { Factory, ShieldCheck, Award, MapPin } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-amber-600 font-bold uppercase tracking-wider text-xs block mb-1">Manufacturing Unit Profile</span>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">About Deep Brush Industries</h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          Deep Brush Industries is a premiere painting tool manufacturing enterprise founded by <strong>Hardeep Singh Saini</strong> in Raipur, Chhattisgarh. We specialize in precision engineering of commercial flat brushes, polyamide wall paint rollers, and texture application trowels.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-700">
            <Factory className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-2">Direct Factory Manufacturing</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            Eliminating middleman markups by producing directly in our Raipur unit under strict quality control.
          </p>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-700">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-2">GST Compliant Wholesale</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            Fully GST registered (22BJEPS5887HIZS) with standard B2B billing for hardware stockists and painting contractors.
          </p>
        </div>

        <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm text-center">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-700">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-base mb-2">High Class Craftsmanship</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            Using premium natural bristle blends, solvent-resistant cores, and ergonomic wooden/plastic handles.
          </p>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center space-y-4">
        <h2 className="text-2xl font-bold">Wholesale Partnerships & Transport Across India</h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Whether you are a regional hardware dealer in Chhattisgarh or a pan-India paint distributor, Deep Brush Industries offers competitive bulk pricing and reliable dispatch.
        </p>
        <div className="pt-4">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="inline-block bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl shadow transition text-sm"
          >
            Call Factory Owner: {COMPANY_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
