# Meezorika UI/UX Design System & Visual Specification Guide

This specification extracts the visual design language, UI/UX interaction dynamics, motion design patterns, typography scale, design tokens, and card/component specifications from **Meezorika**. You can use this document directly to implement or mirror this sleek visual polish in other projects (such as your **Brush Industry / Manufacturing / E-Commerce site**).

---

## 1. Core Package & Tech Stack Dependencies

To replicate the smoothness, animations, dynamic filtering, and refined layout, include these exact dependencies in your `package.json`:

```json
{
  "dependencies": {
    "next": "16.2.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^12.40.0",
    "lucide-react": "^1.16.0",
    "tailwindcss": "^4.2.0",
    "@tailwindcss/postcss": "^4.2.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.3.1",
    "class-variance-authority": "^0.7.1",
    "tw-animate-css": "^1.4.0",
    "zustand": "^4.5.7"
  }
}
```

---

## 2. Design Tokens & Color Palette (CSS Variables)

Meezorika uses an elegant, warm, luxurious aesthetic based on high-end tactile tones (Warm Clay, Deep Chestnut, Terracotta, Ethereal Cream, and Soft Sand).

### Light Mode Theme Tokens
```css
:root {
  color-scheme: light;
  
  /* Primary Tones */
  --background: #fbf7f4;           /* Warm alabaster background */
  --foreground: #2e201b;           /* Deep espresso font color */
  --card: #ffffff;                 /* Pure crisp white for cards */
  --card-foreground: #2e201b;
  
  /* Brand Accent / Actions */
  --primary: #8e3b2e;              /* Deep Terracotta / Crimson Chestnut */
  --primary-foreground: #fff7f3;   /* Soft warm white text */
  --secondary: #f6dfd8;            /* Soft Rose / Peach Cream */
  --secondary-foreground: #8e3b2e;
  
  /* Muted / Neutral Tones */
  --muted: #f3e9e3;                /* Subdued cream background */
  --muted-foreground: #786760;     /* Muted taupe body text */
  --accent: #f6dfd8;
  --accent-foreground: #8e3b2e;
  
  /* Borders & Controls */
  --border: #e6d5c9;               /* Subtle warm border line */
  --input: #e6d5c9;
  --ring: #8e3b2e;                 /* Focus ring */
  
  /* Border Radii System */
  --radius: 0.75rem;               /* 12px base radius */
  --radius-sm: calc(var(--radius) * 0.6);   /* 7.2px */
  --radius-md: calc(var(--radius) * 0.8);   /* 9.6px */
  --radius-lg: var(--radius);               /* 12px */
  --radius-xl: calc(var(--radius) * 1.4);   /* 16.8px */
  --radius-2xl: calc(var(--radius) * 1.8);  /* 21.6px (24px cards) */
  --radius-3xl: calc(var(--radius) * 2.2);  /* 26.4px (30px carousels) */
}
```

### Dark Mode Theme Tokens
```css
.dark {
  color-scheme: dark;
  --background: #171311;
  --foreground: #f1e7e1;
  --card: #211c19;
  --card-foreground: #f1e7e1;
  --primary: #d78d7c;
  --primary-foreground: #1a1310;
  --secondary: #3a2c26;
  --secondary-foreground: #f1e7e1;
  --muted: #2a221e;
  --muted-foreground: #b39f95;
  --border: #3a2c26;
}
```

---

## 3. Typography Rules

* **Heading Font**: Serif (`'Boska'`, `Georgia`, `serif`) for high-end luxury feel.
* **Sans Font**: Clean geometric sans-serif (`'Satoshi'`, `ui-sans-serif`, `system-ui`).
* **Tracking & Spacing**:
  * Eyebrow labels: `uppercase tracking-[0.3em] text-xs font-semibold text-[#8e3b2e]`
  * Headings: `text-4xl md:text-6xl font-bold text-[#2e201b] font-serif`

---

## 4. Product Card Component Specifications

### Visual Signature
1. **Curved Borders**: `rounded-2xl` (20px - 24px).
2. **Smooth Elevating Hover**: Smooth scale up of image on hover (`scale-110 duration-500`) combined with shadow expansion (`shadow-sm hover:shadow-xl hover:border-[#8e3b2e]`).
3. **Floating Badge Overlay**: Top-left position with dynamic gradients (`from-yellow-400 to-orange-500` for featured items, `#8e3b2e` solid terracotta for new arrivals).
4. **Color Swatch Circles**: Absolute bottom-right positioning over image with white border outline and subtle drop shadows (`w-6 h-6 rounded-full border-2 border-white shadow-lg`).

### React / Framer Motion Code Blueprint

```tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
  colors?: string[];
  rating?: number;
  reviewsCount?: number;
}

export function ProductCard({ product, index = 0 }: { product: ProductCardProps; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <Link
        href={`/products/${product.id}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e8ddd8] hover:border-[#8e3b2e]"
      >
        {/* Image Container with Soft Sand Tinted Background */}
        <div className="relative w-full h-80 bg-[#f5ede8] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          />

          {/* Floating Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
            {product.isNew && (
              <span className="bg-[#8e3b2e] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                New
              </span>
            )}
            {product.isFeatured && (
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-md">
                <Star className="w-3 h-3 fill-current" /> Featured
              </span>
            )}
          </div>

          {/* Floating Color Swatch Indicators */}
          {product.colors && product.colors.length > 0 && (
            <div className="absolute bottom-3 right-3 flex gap-1 z-10">
              {product.colors.slice(0, 3).map((color, idx) => (
                <div
                  key={idx}
                  className="w-6 h-6 rounded-full border-2 border-white shadow-lg transform transition-transform hover:scale-110"
                  style={{ backgroundColor: color.toLowerCase() }}
                />
              ))}
              {product.colors.length > 3 && (
                <div className="w-6 h-6 rounded-full bg-black/60 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-lg">
                  +{product.colors.length - 3}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Card Content details */}
        <div className="p-5">
          <div className="text-xs text-[#8e3b2e] font-semibold uppercase tracking-wider mb-1">
            {product.category}
          </div>
          <h3 className="font-bold text-[#2e201b] text-base group-hover:text-[#8e3b2e] transition-colors truncate mb-2">
            {product.name}
          </h3>

          {/* Rating Stars */}
          {product.rating && (
            <div className="flex items-center gap-1 mb-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating!) ? 'fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-[#786760]">({product.reviewsCount || 0})</span>
            </div>
          )}

          {/* Pricing */}
          <div className="flex items-center justify-between mt-auto">
            <p className="text-lg font-bold text-[#2e201b]">
              ₹{product.price.toLocaleString('en-IN')}
            </p>
            <span className="text-xs font-semibold text-[#8e3b2e] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              View Details &rarr;
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
```

---

## 5. UI/UX Motion Dynamics & Carousel Mechanisms

The smooth 3D fluid carousel is one of Meezorika’s signature features. It provides tactile physical depth using 3D perspective and variable blurring.

### Key Smoothness Elements:
1. **Perspective depth**: `perspective-[2000px]` on container.
2. **Rotational offset**: `rotateY: offset * 25deg` to angle peripheral cards inward.
3. **Blur & Brightness depth cue**: Center card is unblurred (`blur(0px)`), offset cards apply `blur(${absOffset * 2}px)` and reduce brightness.
4. **Ethereal Animated Background**: Soft blurred color spheres moving subtly in the background (`bg-[#f4d4c8] filter blur-3xl animate-pulse`).

### React 3D Stage Carousel Code Blueprint

```tsx
'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function Premium3DCarousel({ items }: { items: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleItems = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + items.length) % items.length;
      visible.push({ item: items[index], offset: i });
    }
    return visible;
  };

  return (
    <div className="relative h-[550px] flex items-center justify-center perspective-[2000px] overflow-hidden">
      {/* Background Soft Glow Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f4d4c8] rounded-full filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#e8c4b8] rounded-full filter blur-3xl opacity-30 animate-pulse delay-1000" />
      </div>

      {getVisibleItems().map(({ item, offset }) => {
        const isCenter = offset === 0;
        const absOffset = Math.abs(offset);

        return (
          <motion.div
            key={`${item.id}-${offset}`}
            className={`absolute cursor-pointer ${isCenter ? 'z-40' : absOffset === 1 ? 'z-30' : 'z-20'}`}
            initial={false}
            animate={{
              x: offset * 340,
              y: absOffset * 15,
              scale: isCenter ? 1 : Math.max(0.7, 1 - absOffset * 0.2),
              opacity: absOffset > 2 ? 0 : isCenter ? 1 : 0.5,
              rotateY: offset * 25,
              filter: isCenter ? 'blur(0px) brightness(1.05)' : `blur(${absOffset * 2}px) brightness(0.85)`,
            }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            onClick={() => setCurrentIndex((currentIndex + offset + items.length) % items.length)}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className={`w-[320px] h-[450px] rounded-3xl bg-white border-2 overflow-hidden shadow-2xl transition-all ${
              isCenter ? 'border-[#8e3b2e]' : 'border-[#e8ddd8]'
            }`}>
              {/* Card visual content here */}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
```

---

## 6. Adaptability Recommendation for Brush Industry Site

To adapt Meezorika's high-end feel to your **Brush Industry / Industrial Manufacturing site**:

1. **Color Mapping**:
   * Replace `--primary` (`#8e3b2e` Terracotta) with **Industrial Onyx** (`#1e293b`) or **Precision Metallic Blue / Copper Brass** (`#0f172a` or `#b45309`).
   * Keep the clean warm background (`#fcfbf9`) or crisp white to maintain readability.
2. **Product Specs**:
   * Replace garment badges ("New", "Featured") with technical badges (**"ISO Certified"**, **"Heavy Duty"**, **"Custom Filament"**).
   * Replace color swatches with **Bristle Material Swatches** (e.g., Nylon, Brass Wire, Horsehair, Abrasive).
3. **Card Micro-interactions**:
   * Retain the `group-hover:scale-110` smooth zoom on product renders or CAD model previews.
   * Retain the Framer Motion staggered entrance grid (`delay: index * 0.05`).
