import React from 'react';

interface ProductImageProps {
  type: string;
  name: string;
  className?: string;
}

export default function ProductPlaceholderImage({ type, name, className = "w-full h-full" }: ProductImageProps) {
  return (
    <div className={`relative bg-gradient-to-br from-slate-100 via-amber-50/50 to-slate-200 flex flex-col items-center justify-center p-6 border border-slate-200/80 rounded-t-xl select-none group overflow-hidden ${className}`}>
      
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:16px_16px] opacity-25"></div>

      {/* Direct Factory Tag overlay */}
      <span className="absolute top-2.5 right-2.5 bg-amber-500/90 text-slate-950 font-extrabold text-[9px] uppercase px-2 py-0.5 rounded tracking-wider shadow-sm z-10">
        Direct Factory
      </span>

      {/* SVG Vector Visual Representation */}
      <div className="relative z-10 transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md">
        
        {/* Flat Utility Brush */}
        {type === 'flat-brush' && (
          <svg className="w-24 h-24 sm:w-28 sm:h-28 text-slate-800" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Wooden Handle */}
            <path d="M42 60 L44 92 C44 95 56 95 56 92 L58 60 Z" fill="#D97706" stroke="#78350F" strokeWidth="2" />
            <path d="M48 60 L48 90" stroke="#B45309" strokeWidth="1.5" strokeDasharray="3 2" />
            {/* Steel Ferrule */}
            <rect x="34" y="44" width="32" height="16" rx="1" fill="#94A3B8" stroke="#475569" strokeWidth="2" />
            <line x1="34" y1="49" x2="66" y2="49" stroke="#64748B" strokeWidth="1.5" />
            <circle cx="50" cy="52" r="1.5" fill="#334155" />
            {/* Bristles */}
            <path d="M34 44 L32 10 C32 8 68 8 68 10 L66 44 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
            {/* Bristle texture lines */}
            <path d="M37 12 L38 42 M43 10 L43 43 M50 9 L50 44 M57 10 L57 43 M63 12 L62 42" stroke="#D97706" strokeWidth="1" strokeLinecap="round" />
            {/* Paint Tip */}
            <path d="M32 10 C36 6 64 6 68 10 C68 14 32 14 32 10 Z" fill="#2563EB" />
          </svg>
        )}

        {/* Wide Wall Brush / Asian Series */}
        {type === 'wide-brush' && (
          <svg className="w-24 h-24 sm:w-28 sm:h-28 text-slate-800" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M40 62 L43 93 C43 96 57 96 57 93 L60 62 Z" fill="#B45309" stroke="#78350F" strokeWidth="2" />
            <rect x="25" y="42" width="50" height="20" rx="2" fill="#CBD5E1" stroke="#475569" strokeWidth="2" />
            <circle cx="35" cy="52" r="1.5" fill="#334155" />
            <circle cx="65" cy="52" r="1.5" fill="#334155" />
            <path d="M25 42 L22 8 C22 6 78 6 78 8 L75 42 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5" />
            <path d="M28 10 L29 40 M36 8 L37 40 M44 7 L44 41 M52 7 L52 41 M60 8 L59 40 M67 10 L66 40" stroke="#F59E0B" strokeWidth="1" />
            <path d="M22 8 C30 4 70 4 78 8 L78 14 C70 12 30 12 22 14 Z" fill="#059669" />
          </svg>
        )}

        {/* Round / Classic Ergonomic Brush */}
        {type === 'round-brush' && (
          <svg className="w-24 h-24 sm:w-28 sm:h-28 text-slate-800" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 55 L45 92 C45 95 55 95 55 92 L56 55 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
            <rect x="36" y="40" width="28" height="15" rx="1" fill="#94A3B8" stroke="#475569" strokeWidth="2" />
            <path d="M36 40 L34 12 C34 10 66 10 66 12 L64 40 Z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
            <path d="M40 12 L41 38 M47 11 L47 39 M53 11 L53 39 M59 12 L58 38" stroke="#E2E8F0" strokeWidth="1" />
            <path d="M34 12 C40 8 60 8 66 12 Z" fill="#DC2626" />
          </svg>
        )}

        {/* Narrow Precision Brush / Jyoti */}
        {type === 'narrow-brush' && (
          <svg className="w-24 h-24 sm:w-28 sm:h-28 text-slate-800" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46 50 L47 94 C47 96 53 96 53 94 L54 50 Z" fill="#D97706" stroke="#78350F" strokeWidth="2" />
            <rect x="42" y="38" width="16" height="12" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
            <path d="M42 38 L40 10 C40 8 60 8 60 10 L58 38 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1.5" />
            <path d="M45 10 L46 36 M50 9 L50 37 M55 10 L54 36" stroke="#D97706" strokeWidth="1" />
            <path d="M40 10 C44 7 56 7 60 10 Z" fill="#7C3AED" />
          </svg>
        )}

        {/* Jumbo Monster Brush */}
        {type === 'jumbo-brush' && (
          <svg className="w-24 h-24 sm:w-28 sm:h-28 text-slate-800" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38 65 L43 94 C43 96 57 96 57 94 L62 65 Z" fill="#78350F" stroke="#451A03" strokeWidth="2" />
            <rect x="18" y="45" width="64" height="20" rx="2" fill="#64748B" stroke="#1E293B" strokeWidth="2.5" />
            <circle cx="28" cy="55" r="2" fill="#0F172A" />
            <circle cx="50" cy="55" r="2" fill="#0F172A" />
            <circle cx="72" cy="55" r="2" fill="#0F172A" />
            <path d="M18 45 L14 6 C14 4 86 4 86 6 L82 45 Z" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
            <path d="M22 8 L23 43 M32 6 L33 43 M42 5 L42 44 M52 5 L52 44 M62 5 L62 44 M72 6 L71 43 M80 8 L79 43" stroke="#F59E0B" strokeWidth="1.5" />
            <path d="M14 6 C30 2 70 2 86 6 Z" fill="#D97706" />
          </svg>
        )}

        {/* Standard Polyamide Roller */}
        {type === 'roller' && (
          <svg className="w-24 h-24 sm:w-28 sm:h-28 text-slate-800" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Roller Core Cylinder */}
            <rect x="22" y="20" width="56" height="24" rx="4" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
            {/* Woven Stripes */}
            <path d="M30 20 L24 44 M42 20 L36 44 M54 20 L48 44 M66 20 L60 44 M76 20 L70 44" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
            {/* Metal Cage Rod Frame */}
            <path d="M50 44 L50 56 L35 56 L35 88 L45 88" stroke="#475569" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            {/* Handle Grip */}
            <rect x="30" y="74" width="10" height="20" rx="2" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
          </svg>
        )}

        {/* Woolen Roller */}
        {type === 'woolen-roller' && (
          <svg className="w-24 h-24 sm:w-28 sm:h-28 text-slate-800" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Thick Fluffy Wool Sleeve */}
            <rect x="18" y="18" width="64" height="28" rx="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
            {/* Texture bumps */}
            <circle cx="28" cy="26" r="3" fill="#FDE68A" />
            <circle cx="42" cy="34" r="4" fill="#FDE68A" />
            <circle cx="56" cy="24" r="3.5" fill="#FDE68A" />
            <circle cx="70" cy="36" r="3" fill="#FDE68A" />
            <circle cx="34" cy="38" r="3" fill="#FDE68A" />
            <circle cx="64" cy="28" r="4" fill="#FDE68A" />
            {/* Metal Frame */}
            <path d="M50 46 L50 58 L35 58 L35 88 L45 88" stroke="#475569" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="30" y="74" width="10" height="20" rx="2" fill="#78350F" />
          </svg>
        )}

        {/* Mini Pencil Roller */}
        {type === 'pencil-roller' && (
          <svg className="w-24 h-24 sm:w-28 sm:h-28 text-slate-800" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="42" y="15" width="16" height="42" rx="3" fill="#3B82F6" stroke="#1D4ED8" strokeWidth="1.5" />
            <line x1="44" y1="25" x2="56" y2="25" stroke="#60A5FA" strokeWidth="2" />
            <line x1="44" y1="35" x2="56" y2="35" stroke="#60A5FA" strokeWidth="2" />
            <line x1="44" y1="45" x2="56" y2="45" stroke="#60A5FA" strokeWidth="2" />
            <path d="M50 57 L50 72 L42 72 L42 94" stroke="#64748B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="38" y="80" width="8" height="15" rx="1" fill="#1E293B" />
          </svg>
        )}

        {/* Rustic Trowel */}
        {type === 'trowel' && (
          <svg className="w-24 h-24 sm:w-28 sm:h-28 text-slate-800" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Trowel Stainless Blade */}
            <polygon points="20,20 80,20 74,60 26,60" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
            {/* Bevel Edge */}
            <line x1="20" y1="20" x2="80" y2="20" stroke="#94A3B8" strokeWidth="3" />
            {/* Spine Mount */}
            <rect x="38" y="32" width="24" height="14" rx="2" fill="#64748B" stroke="#334155" strokeWidth="1.5" />
            {/* Handle Post */}
            <path d="M50 46 L50 75" stroke="#D97706" strokeWidth="5" strokeLinecap="round" />
            {/* Soft-Grip Handle */}
            <rect x="42" y="65" width="16" height="26" rx="3" fill="#1E293B" stroke="#D97706" strokeWidth="2" />
          </svg>
        )}

      </div>

      {/* Label under placeholder */}
      <div className="mt-3 text-center z-10">
        <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wide block">
          {name}
        </span>
        <span className="text-[9px] text-slate-500 font-medium block">
          Raipur Factory Spec
        </span>
      </div>
    </div>
  );
}
