'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { COMPANY_INFO, PRODUCTS } from '@/data/products';
import { Send, PhoneCall, CheckCircle2 } from 'lucide-react';

function RFQContent() {
  const searchParams = useSearchParams();
  const preselectedProduct = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    city: '',
    product: preselectedProduct,
    quantity: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*Wholesale RFQ Inquiry - Deep Brush Industries*%0A%0A*Name:* ${formData.name}%0A*Business:* ${formData.businessName}%0A*Phone:* ${formData.phone}%0A*City/State:* ${formData.city}%0A*Product:* ${formData.product || 'General Catalog Inquiry'}%0A*Quantity:* ${formData.quantity}%0A*Notes:* ${formData.notes}`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp.replace('+', '')}?text=${msg}`, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
      <div className="text-center mb-10">
        <span className="text-amber-600 font-bold uppercase tracking-wider text-xs block mb-1">Direct Factory Pricing</span>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Request Wholesale Quote (RFQ)</h1>
        <p className="text-slate-600 text-sm">Fill out your business requirements below to receive direct factory pricing and transport details.</p>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Rajesh Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Business / Shop Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Royal Hardware & Paints"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Mobile / WhatsApp Number *</label>
              <input
                type="tel"
                required
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">City & State *</label>
              <input
                type="text"
                required
                placeholder="e.g. Raipur, Chhattisgarh"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Select Product Series</label>
              <select
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">-- Select Product --</option>
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.name}>{p.name} ({p.series})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Estimated Order Quantity</label>
              <input
                type="text"
                placeholder="e.g. 1000 Pcs / 10 Cartons"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Additional Specifications / Requirements</label>
            <textarea
              rows={3}
              placeholder="Specify custom branding, packaging preferences, or specific size breakdowns..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition text-base"
          >
            Submit RFQ via WhatsApp <Send className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500">
          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          <span>GST Invoice & Transport Slip Provided with All Wholesale Dispatches</span>
        </div>
      </div>
    </div>
  );
}

export default function RFQPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading Order Builder...</div>}>
      <RFQContent />
    </Suspense>
  );
}
