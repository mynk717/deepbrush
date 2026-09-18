import React from 'react';
import { COMPANY_INFO } from '@/data/products';
import { MapPin, Phone, Mail, ShieldCheck, Factory, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      <div className="text-center mb-12">
        <span className="text-amber-600 font-bold uppercase tracking-wider text-xs block mb-1">Factory Location & Legal Compliance</span>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Contact & Verification Details</h1>
        <p className="text-slate-600 text-sm max-w-2xl mx-auto">
          Deep Brush Industries operates out of Raipur, Chhattisgarh. Find our registered business coordinates and GST verification breakdown below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Contact Info Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
            Factory Address & Contact
          </h2>

          <div className="space-y-4 text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
              <div>
                <strong className="block text-slate-900">Registered Manufacturing Unit</strong>
                <p className="text-slate-600 text-xs leading-relaxed">{COMPANY_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-amber-500 shrink-0" />
              <div>
                <strong className="block text-slate-900">Primary Contact Phone</strong>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-amber-600 font-semibold hover:underline text-xs">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-amber-500 shrink-0" />
              <div>
                <strong className="block text-slate-900">Primary Business Email</strong>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-amber-600 font-semibold hover:underline text-xs">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=Hello%20Deep%20Brush%20Industries,%20I%20want%20to%20visit%20the%20Raipur%20factory.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 text-center rounded-xl block transition text-sm shadow"
            >
              Direct WhatsApp Inquiry
            </a>
          </div>
        </div>

        {/* GST & Legal Matrix Card */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-amber-400" /> Compliance Matrix
            </h2>
            <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase border border-emerald-500/30">
              Active GST
            </span>
          </div>

          <div className="space-y-4 text-xs">
            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <span className="text-slate-400 block mb-1">Legal Trade Name</span>
              <strong className="text-sm text-white">{COMPANY_INFO.legalName}</strong>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <span className="text-slate-400 block mb-1">Proprietor Name</span>
              <strong className="text-sm text-white">{COMPANY_INFO.proprietor}</strong>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <span className="text-slate-400 block mb-1">GSTIN Registration</span>
              <strong className="text-sm text-amber-400 tracking-wider">{COMPANY_INFO.gstin}</strong>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
              <span className="text-slate-400 block mb-1">Jurisdiction / Location</span>
              <strong className="text-sm text-white">Telibandha, Raipur, Chhattisgarh (492001)</strong>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-400">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Authorized for B2B Pan-India Wholesale Supply & Export Invoicing</span>
          </div>
        </div>

      </div>
    </div>
  );
}
