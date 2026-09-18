export interface Product {
  id: string;
  name: string;
  series: string;
  category: 'paint-brushes' | 'roller-brushes' | 'texture-tools';
  description: string;
  sizes: string[];
  features: string[];
  material: string;
  moq: string;
  popular?: boolean;
  image: string;
}

export const PRODUCTS: Product[] = [
  // Paint Brushes
  {
    id: 'series-444',
    name: 'Series 444 Flat Utility Brush',
    series: 'Series 444',
    category: 'paint-brushes',
    description: 'High-durability flat utility brush designed for smooth laydown across flat surfaces and general painting tasks.',
    sizes: ['1"', '1.5"', '2"', '2.5"', '3"', '4"'],
    features: ['High-density bristles', 'Varnished wooden handle', 'Corrosion-resistant ferrule', 'Smooth liquid retention'],
    material: 'Natural & Synthetic Blend Bristle',
    moq: '500 Pcs / Size',
    popular: true,
    image: '/products/brush-series-444.jpeg'
  },
  {
    id: 'asian-series',
    name: 'ASIAN Series High Density Paint Brush',
    series: 'ASIAN Series',
    category: 'paint-brushes',
    description: 'Premium mid-to-high density bristle brushes optimized for enamel, distemper, and emulsion paints.',
    sizes: ['1"', '2"', '3"', '4"'],
    features: ['Extra paint loading capacity', 'Splitting resistant fibers', 'Ergonomic grip'],
    material: 'Premium Synthetic Bristles',
    moq: '300 Pcs',
    popular: true,
    image: '/products/brush-asian.jpeg'
  },
  {
    id: 'd2-classic',
    name: 'D-2 & Classic Series Ergonomic Brush',
    series: 'D-2 & Classic',
    category: 'paint-brushes',
    description: 'Ergonomic plastic & varnished wood handle brushes built for long-duration painter comfort and fine line accuracy.',
    sizes: ['1"', '1.5"', '2"', '3"', '4"'],
    features: ['Comfortable ergonomic handle', 'Zero shedding guarantee', 'Easy clean resin core'],
    material: 'Pure White Bristle Blend',
    moq: '400 Pcs',
    image: '/products/brush-classic.jpeg'
  },
  {
    id: 'jyoti-xxx',
    name: 'JYOTI / XXX Precision Narrow Brush',
    series: 'JYOTI / XXX',
    category: 'paint-brushes',
    description: 'Precision narrow surface brush for tight corners, window trims, touch-ups, and fine detail wall borders.',
    sizes: ['0.5"', '1"', '1.5"'],
    features: ['Precision narrow profile', 'Flex-control bristles', 'Lightweight wooden slim body'],
    material: 'Soft Synthetic Hair',
    moq: '600 Pcs',
    image: '/products/brush-jyoti.jpeg'
  },
  {
    id: 'star-jumbo-d111',
    name: 'JUMBO & STAR Heavy Duty Wall Brush',
    series: 'JUMBO / STAR / D-111 / D-10',
    category: 'paint-brushes',
    description: 'Commercial extra-wide broad surface painting brushes engineered for fast coverage of massive interior & exterior walls.',
    sizes: ['4"', '5"', '6"'],
    features: ['Extra wide 5"+ surface reach', 'Heavy duty steel ferrule', 'Maximum paint pickup'],
    material: 'Thick White Natural Bristle',
    moq: '200 Pcs',
    popular: true,
    image: '/products/brush-jumbo.jpeg'
  },

  // Roller Brushes
  {
    id: 'polyamide-roller',
    name: 'Polyamide Heavy Duty Wall Roller',
    series: 'Polyamide Series',
    category: 'roller-brushes',
    description: 'Industrial polyamide roller offering maximum paint absorption and even release for rough wall surfaces.',
    sizes: ['1"x2"', '1"x4"', '1"x6"', '2"x9"'],
    features: ['Heavy-duty paint pickup', 'Resistant to harsh solvents', 'Core sealed against liquid seepage'],
    material: 'High-Density Woven Polyamide Fiber',
    moq: '250 Pcs',
    popular: true,
    image: '/products/roller-polyamide.jpeg'
  },
  {
    id: 'woolen-roller',
    name: 'Exterior Rough Masonry Woolen Roller',
    series: 'Woolen Series',
    category: 'roller-brushes',
    description: 'Specially engineered woolen roller sleeve for rough exterior brickwork, stucco, and textured masonry walls.',
    sizes: ['2"x9"'],
    features: ['Deep seam penetration', 'High coverage rate', 'Durable high-pile cushion'],
    material: 'Natural Wool & Polyester Blend',
    moq: '200 Pcs',
    image: '/products/roller-woolen.jpeg'
  },
  {
    id: 'microfiber-superfine-roller',
    name: 'Super Fine Interior Microfiber Roller',
    series: 'Super Fine Series',
    category: 'roller-brushes',
    description: 'Ultra-smooth finish interior wall roller designed for high-gloss, satin, and velvet sheen paints without stippling.',
    sizes: ['2"x9"'],
    features: ['Zero linting microfiber', 'Ultra-smooth spray-like finish', 'Anti-drip technology'],
    material: 'Ultra-Fine Microfiber',
    moq: '300 Pcs',
    popular: true,
    image: '/products/roller-microfiber.jpeg'
  },
  {
    id: 'pencil-reach-strip-roller',
    name: 'Reach Strip & Pencil Precision Roller',
    series: 'Reach Strip Series',
    category: 'roller-brushes',
    description: 'Narrow reach precision roller for hard-to-access areas behind radiators, pipes, corners, and small surface panels.',
    sizes: ['1"x2"', '1"x4"', '1"x6"'],
    features: ['Slim rod clearance', 'Flexible pivot core', 'Multi-surface compatibility'],
    material: 'Polyfoam / Microfiber Compact',
    moq: '500 Pcs',
    image: '/products/roller-pencil.jpeg'
  },

  // Texture Tools & Trowels
  {
    id: 'rustic-trowel-texture',
    name: 'Rustic Trowel & Decorative Wall Texture Tool',
    series: 'Texture Series',
    category: 'texture-tools',
    description: 'Professional surface preparation and decorative texturing trowel for wall putty, rustic patterns, and plaster design.',
    sizes: ['Standard 8"', '10"'],
    features: ['Flexible stainless steel blade', 'Ergonomic rubberized grip', 'Precise edge control'],
    material: 'Stainless Steel & ABS Grip',
    moq: '150 Pcs',
    popular: true,
    image: '/products/tool-trowel.jpeg'
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
