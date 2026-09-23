const brushProduct = (product: Pick<Product, 'id' | 'name' | 'series' | 'shortDesc' | 'useCase' | 'sizes' | 'image' | 'svgType'> & Partial<Product>): Product => ({ category: 'paint-brushes', description: 'This brush family is documented in the updated Deep Brush Industries product list. Final construction details remain subject to factory confirmation.', painterNote: 'Contact Deep Brush Industries for current variant, pack and bulk-order details.', features: ['Family visual supplied for catalog presentation', 'Multiple variants may be available by size or handle', 'Final technical details to be confirmed by the factory'], material: 'TBD', moq: 'TBD', ...product });

export interface Product {
  id: string;
  name: string;
  series: string;
  category: 'paint-brushes' | 'roller-brushes' | 'texture-tools';
  shortDesc: string;
  description: string;
  useCase: string;
  painterNote: string;
  sizes: string[];
  features: string[];
  material: string;
  moq: string;
  popular?: boolean;
  image: string;
  svgType: 'flat-brush' | 'round-brush' | 'wide-brush' | 'narrow-brush' | 'jumbo-brush' | 'roller' | 'woolen-roller' | 'pencil-roller' | 'trowel';
}

export const PRODUCTS: Product[] = [
  // Paint Brushes — updated brush-family taxonomy
  brushProduct({
    id: '444-series',
    name: 'Deep Brush 444 Series Flat Utility Paint Brush',
    series: '444',
    shortDesc: 'Standard flat utility brush for general-purpose painting and coating work.',
    useCase: 'General painting, wall painting, surface coating, touch-up and utility work.',
    sizes: ['1"', '1.5"', '2"', '2.5"', '3"', '4"'],
    image: '/products/444-series.webp',
    svgType: 'flat-brush',
    popular: true,
  }),
  brushProduct({
    id: 'asian-series',
    name: 'Deep Brush ASIAN Series Paint Brush',
    series: 'ASIAN',
    shortDesc: 'Flat brush family with mid-to-high density synthetic and natural bristle variants.',
    useCase: 'Wall painting, general surface coating, professional painting and broad-area application.',
    sizes: ['TBD'],
    image: '/products/asian-series.webp',
    svgType: 'wide-brush',
    popular: true,
  }),
  brushProduct({
    id: 'd-2-series',
    name: 'Deep Brush D-2 Series Paint Brush',
    series: 'D-2',
    shortDesc: 'Flat utility paint brush range for general painting and surface coating.',
    useCase: 'General painting, touch-up work, wall and surface coating, and maintenance painting.',
    sizes: ['TBD'],
    image: '/products/d-2-series.webp',
    svgType: 'flat-brush',
  }),
  brushProduct({
    id: 'classic-series',
    name: 'Deep Brush Classic Series Paint Brush',
    series: 'Classic',
    shortDesc: 'Ergonomic flat paint brush range for broad-area and contractor applications.',
    useCase: 'General wall painting, surface coating, broad-area painting, and commercial use.',
    sizes: ['TBD'],
    image: '/products/classic-series.webp',
    svgType: 'wide-brush',
  }),
  brushProduct({
    id: 'jyoti-series',
    name: 'Deep Brush JYOTI Series Precision Paint Brush',
    series: 'JYOTI',
    shortDesc: 'Precision narrow-surface brush family for edges, detail work and touch-ups.',
    useCase: 'Narrow surfaces, edges, detail work, touch-up painting, and precision coating.',
    sizes: ['TBD'],
    image: '/products/jyoti-series.webp',
    svgType: 'narrow-brush',
  }),
  brushProduct({
    id: 'xxx-series',
    name: 'Deep Brush XXX Series Paint Brush',
    series: 'XXX',
    shortDesc: 'Narrow-format utility brush family for precision and edge applications.',
    useCase: 'Narrow surface painting, edge work, touch-up applications, and utility painting.',
    sizes: ['TBD'],
    image: '/products/xxx-series.webp',
    svgType: 'narrow-brush',
  }),
  brushProduct({
    id: 'star-series',
    name: 'Deep Brush STAR Series Heavy-Duty Paint Brush',
    series: 'STAR',
    shortDesc: 'Commercial heavy-duty wall brush family for broad surface coverage.',
    useCase: 'Wall painting, commercial painting, broad surface coating, and contractor applications.',
    sizes: ['TBD'],
    image: '/products/star-series.webp',
    svgType: 'wide-brush',
    popular: true,
  }),
  brushProduct({
    id: 'dom-series',
    name: 'Deep Brush DOM Series Paint Brush',
    series: 'DOM',
    shortDesc: 'Commercial wall paint brush family for broad-area surface coating.',
    useCase: 'Wall painting, commercial painting, general surface coating, and contractor use.',
    sizes: ['TBD'],
    image: '/products/dom-series.webp',
    svgType: 'wide-brush',
  }),
  brushProduct({
    id: 'd-111-series',
    name: 'Deep Brush D-111 Series Paint Brush',
    series: 'D-111',
    shortDesc: 'Commercial wall brush family with broad flat heads for high-coverage work.',
    useCase: 'Wall painting, broad surface application, commercial painting, and contractor use.',
    sizes: ['TBD'],
    image: '/products/d-111-series.webp',
    svgType: 'wide-brush',
  }),
  brushProduct({
    id: 'd-10-series',
    name: 'Deep Brush D-10 Series Paint Brush',
    series: 'D-10',
    shortDesc: 'Heavy-duty broad-format brush family for commercial and utility applications.',
    useCase: 'Wall painting, commercial painting, broad-area coating, and contractor applications.',
    sizes: ['TBD'],
    image: '/products/d-10-series.webp',
    svgType: 'wide-brush',
  }),
  brushProduct({
    id: 'jumbo-series',
    name: 'Deep Brush JUMBO Series Extra-Wide Paint Brush',
    series: 'JUMBO',
    shortDesc: 'Extra-wide brush family designed for large-surface and high-coverage painting.',
    useCase: 'Large wall areas, broad surface coating, commercial painting, and contractor applications.',
    sizes: ['5"+'],
    image: '/products/jumbo-series.webp',
    svgType: 'jumbo-brush',
    popular: true,
  }),

  // Roller Brushes
  // Roller Brushes
  {
    id: 'polyamide-roller',
    name: 'Polyamide Heavy-Duty Wall Roller (2" x 9")',
    series: 'Polyamide Series',
    category: 'roller-brushes',
    shortDesc: 'Industrial-grade woven polyamide roller sleeve for maximum paint pickup.',
    description: 'The standard choice for professional wall painting across Chhattisgarh. Our Polyamide roller sleeve features high-density woven fibers that absorb paint deeply and release it uniformly without splatter or matting down.',
    useCase: 'Interior wall emulsion application, rough plaster walls, and ceiling painting.',
    painterNote: 'Holds enough paint to cover a 10x10 wall section with far fewer tray dips.',
    sizes: ['1"x2"', '1"x4"', '1"x6"', '2"x9"'],
    features: [
      'Solvent-resistant thermo-bonded core — won’t delaminate in enamel',
      'High-density woven polyamide fibers resist matting',
      'Uniform paint release for splatter-free application',
      'Fits all standard 9-inch cage frames'
    ],
    material: 'Woven Polyamide Fiber (18mm Pile)',
    moq: '250 Pcs',
    popular: true,
    image: '/products/red-handled-paint-roller.png',
    svgType: 'roller'
  },
  {
    id: 'woolen-roller',
    name: 'Exterior Rough Masonry Woolen Roller',
    series: 'Woolen Series',
    category: 'roller-brushes',
    shortDesc: 'Thick wool-blend sleeve engineered for uneven exterior brickwork and stucco.',
    description: 'Exterior walls in India are rarely perfectly flat. Our Woolen series roller sleeve packs a thick, high-pile cushion that flexes into rough brick grooves, textured stucco, and uneven plaster coats where thin rollers fail to penetrate.',
    useCase: 'Exterior masonry walls, rough concrete surfaces, textured plaster, and brickwork.',
    painterNote: 'Pushes paint deep into wall crevices so you don’t have to go back over with a hand brush.',
    sizes: ['2"x9"'],
    features: [
      'Extra-thick 22mm cushion pile for deep groove penetration',
      'Natural wool & tough poly blend for longevity on rough surfaces',
      'Heavy paint absorption for quick exterior coverage',
      'Rinse-clean core construction'
    ],
    material: 'Natural Wool & Tough Poly Blend (22mm Pile)',
    moq: '200 Pcs',
    image: '/products/red-handled-wool-paint-roller.png',
    svgType: 'woolen-roller'
  },
  {
    id: 'microfiber-superfine-roller',
    name: 'Minimalist Smooth Interior Wall Roller',
    series: 'Super Fine Series',
    category: 'roller-brushes',
    shortDesc: 'Ultra-smooth velvet sleeve for spray-like finish on luxury interior paints.',
    description: 'When applying satin, semi-gloss, or velvet sheen interior finishes, roller marks are unpardonable. The Super Fine Microfiber sleeve uses short, dense micro-filaments that lay down paint so smoothly it looks spray-applied.',
    useCase: 'Satin sheen paints, acrylic interior walls, wood lacquers, and metal door panels.',
    painterNote: 'Leaves zero roller lint or stipple bumps on glossy accent walls.',
    sizes: ['9" Velvet Finish'],
    features: [
      'Lint-free microfiber filaments for flawless glass-smooth finish',
      'Anti-drip design minimizes splatter on floors and trim',
      'Ideal for low-VOC and high-sheen modern emulsion paints',
      'Durable inner tube won’t swell in paint solvents'
    ],
    material: 'Ultra-Fine Microfiber (9mm Short Pile)',
    moq: '300 Pcs',
    popular: true,
    image: '/products/minimalist-paint-roller-product-shot.png',
    svgType: 'roller'
  },
  {
    id: 'yellow-striped-roller',
    name: 'Yellow Striped Contractor Wall Roller',
    series: 'Yellow Striped Series',
    category: 'roller-brushes',
    shortDesc: 'High-visibility multi-layer roller for fast smooth wall coverage.',
    description: 'Heavy contractor favorite engineered for high paint pickup and smooth release across large commercial interior wall projects.',
    useCase: 'Contractor bulk painting, commercial interior walls, and primer coats.',
    painterNote: 'Sturdy steel cage handle with ergonomic yellow grip for all-day rolling.',
    sizes: ['4"', '9"'],
    features: [
      'Multi-filament yellow spiral weave for balanced paint release',
      'High resistance against water-based emulsions and distempers',
      'Sturdy chrome-plated 5-wire cage assembly'
    ],
    material: 'Woven Acrylic & Polyamide Blend',
    moq: '300 Pcs',
    image: '/products/yellow-handled-striped-paint-roller.png',
    svgType: 'roller'
  },
  {
    id: 'pencil-reach-strip-roller',
    name: 'Reach Strip & Mini Red Precision Roller Set',
    series: 'Reach Strip Series',
    category: 'roller-brushes',
    shortDesc: 'Narrow precision roller for tight spaces behind pipes, grills, and radiators.',
    description: 'Every site has hard-to-reach spots: behind AC pipes, between window grill bars, behind bathroom fixtures, and inside narrow wall recesses. This mini pencil roller set lets painters roll smoothly where standard 9-inch frames simply cannot fit.',
    useCase: 'Behind pipes, metal grills, narrow wall strips, door jambs, and cabinet interiors.',
    painterNote: 'Saves painters from painstakingly dabbing tight spots with a small brush.',
    sizes: ['2"', '4" Mini'],
    features: [
      'Ultra-slim rod frame for tight 1-inch clearance gaps',
      'Includes high-density micro-sleeves for smooth paint laydown',
      'Flexible handle angle for easy maneuvering around obstacles',
      'Replaceable mini roller sleeves available in bulk'
    ],
    material: 'Compact High-Density Foam / Microfiber',
    moq: '500 Pcs',
    image: '/products/mini-red-handled-paint-roller.png',
    svgType: 'pencil-roller'
  },
  {
    id: 'pastel-yellow-mini-roller',
    name: 'Pastel Precision Mini Roller',
    series: 'Mini Precision Series',
    category: 'roller-brushes',
    shortDesc: 'Ultra-light mini roller designed for trim work, borders, and touch-ups.',
    description: 'Compact 4-inch mini roller equipped with a lightweight pastel grip for fine edge finishing and smooth corner cutting.',
    useCase: 'Corner borders, cabinet doors, trim panels, and small touch-up areas.',
    painterNote: 'Extremely nimble for delicate detail rolling where big rollers overwrite edges.',
    sizes: ['4"'],
    features: [
      'Lightweight ergonomic grip for detailed control',
      'Smooth nap density for uniform paint distribution',
      'Easy washable core'
    ],
    material: 'Dense Micro-Sleeve + ABS Handle',
    moq: '400 Pcs',
    image: '/products/pastel-yellow-mini-paint-roller.png',
    svgType: 'pencil-roller'
  },

  // Texture Tools & Trowels
  {
    id: 'rustic-trowel-texture',
    name: 'Rustic Orange-Handled Finishing Trowel',
    series: 'Texture Series',
    category: 'texture-tools',
    shortDesc: 'Stainless steel putty trowel for decorative wall textures and plaster prep.',
    description: 'Wall putty and decorative texture work require absolute blade precision. Our Rustic Trowel features a flexible stainless steel blade with polished rounded edges that glide across wall putty without scratching or gouging fresh coats.',
    useCase: 'Wall putty leveling, rustic texture application, Venetian plaster designs, and surface prep.',
    painterNote: 'The blade flex is tuned just right — stiff enough for putty spreading, flexible enough for pattern styling.',
    sizes: ['Standard 8"', '10"'],
    features: [
      'High-grade flexible stainless steel blade — rust-proof',
      'Precision bevel-ground edges for smooth putty skimming',
      'Ergonomic orange soft-touch rubber grip reduces hand strain',
      'Heavy-duty aluminium mounting spine for zero blade wobble'
    ],
    material: 'Stainless Steel Blade + Soft-Grip ABS Handle',
    moq: '150 Pcs',
    popular: true,
    image: '/products/rustic-orange-handled-finishing-trowel.png',
    svgType: 'trowel'
  }
];

export const COMPANY_INFO = {
  legalName: 'Deep Brush Industries',
  proprietor: 'Hardeep Singh Saini',
  gstin: '22BJEPS5887HIZS',
  address: 'Behind Anand Kukreja, Shyam Nagar, Telibandha, Raipur, Chhattisgarh, 492001',
  phone: '+91 9300768484',
  whatsapp: '+917987393489',
  email: 'deepbrush.digital@gmail.com',
  tagline: 'Mfg. of High Class Painting & Artist Brush — Raipur, Chhattisgarh',
  city: 'Raipur',
  state: 'Chhattisgarh',
  pincode: '492001'
};
