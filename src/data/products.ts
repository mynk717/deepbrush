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
  // Paint Brushes
  {
    id: 'series-444',
    name: 'Series 444 Everyday Flat Utility Brush',
    series: 'Series 444',
    category: 'paint-brushes',
    shortDesc: 'The reliable workhorse brush hardware stores restock every season.',
    description: 'If there is one brush every painter in Raipur keeps in their toolkit, it’s the Series 444. Built with a solid varnished wooden handle and double-epoxy bound bristles, this flat utility brush handles oil enamels, primers, and distemper paints without shedding on fresh walls.',
    useCase: 'Best for wall priming, door frames, metal grills, and general contract painting.',
    painterNote: 'Painters love this series because the bristles don’t splay open after a long day in solvent.',
    sizes: ['1"', '1.5"', '2"', '2.5"', '3"', '4"'],
    features: [
      'Double-epoxy set bristles — zero shedding on wet paint',
      'Smooth varnished wooden handle for non-slip grip',
      'Rust-proof tinplate ferrule triple-crimped for safety',
      'Holds high paint volume for fewer dips'
    ],
    material: 'Natural & Synthetic Fiber Blend',
    moq: '500 Pcs / Box',
    popular: true,
    image: '/products/series-444.webp',
    svgType: 'flat-brush'
  },
  {
    id: 'asian-series',
    name: 'ASIAN Series Heavy-Density Wall Brush',
    series: 'ASIAN Series',
    category: 'paint-brushes',
    shortDesc: 'Extra bristle density engineered specifically for emulsion wall paints.',
    description: 'Designed for painters who demand ultra-smooth laydown when applying modern interior emulsions and plastic paints. The ASIAN series packs up to 35% more bristle volume than standard utility brushes, laying down an even coat without stroke marks.',
    useCase: 'Ideal for premium interior walls, ceiling borders, and smooth plaster finishes.',
    painterNote: 'Cuts down painting time on broad wall areas because of its deep paint-carrying core.',
    sizes: ['1"', '2"', '3"', '4"'],
    features: [
      '35% higher bristle density for streak-free emulsion coverage',
      'Split-resistant synthetic tips that stay soft and flexible',
      'Contoured hardwood handle designed for all-day comfort',
      'Easy to clean under running water after water-based paint use'
    ],
    material: 'High-Density Tapered Synthetic Bristles',
    moq: '300 Pcs',
    popular: true,
    image: '/products/asian-series.webp',
    svgType: 'wide-brush'
  },
  {
    id: 'd2-classic',
    name: 'D-2 & Classic Comfort-Grip Brush',
    series: 'D-2 & Classic',
    category: 'paint-brushes',
    shortDesc: 'Lightweight ergonomic handle built for full-day interior jobs.',
    description: 'Fatigue is the enemy of a clean paint edge. The D-2 & Classic series combines a lightweight, molded ergonomic handle with hand-sorted natural white bristles. Perfect for contractors taking on long multi-room interior residential contracts.',
    useCase: 'Great for interior trim, window frames, baseboards, and cabinet painting.',
    painterNote: 'Light in the hand, perfect when you’re standing on a ladder painting upper trims for hours.',
    sizes: ['1"', '1.5"', '2"', '3"', '4"'],
    features: [
      'Featherweight ergonomic composite handle',
      'Hand-sorted pure white bristle blend',
      'Resin-encapsulated core prevents liquid seepage',
      'Tapered edge for crisp cutting-in along corners'
    ],
    material: 'Pure White Natural Bristle Blend',
    moq: '400 Pcs',
    image: '/products/d2-classic.webp',
    svgType: 'round-brush'
  },
  {
    id: 'jyoti-xxx',
    name: 'JYOTI / XXX Precision Touch-Up Brush',
    series: 'JYOTI / XXX',
    category: 'paint-brushes',
    shortDesc: 'Slim profile brush for tight corners, trim work, and detailed touch-ups.',
    description: 'When standard 2-inch brushes are too bulky, the JYOTI precision series gets into tight spots. Designed with a slim wooden ferrule neck, this brush gives painters pinpoint accuracy around window frames, metal grills, electrical switchboards, and narrow wall gaps.',
    useCase: 'Window grills, switchboard borders, corner cutting-in, and furniture touch-ups.',
    painterNote: 'The go-to brush for finishing work right before handing over the completed site to the homeowner.',
    sizes: ['0.5"', '1"', '1.5"'],
    features: [
      'Ultra-slim profile for millimeter precision',
      'Flex-control bristles that don’t bend out of shape',
      'Long slim wood handle for extended reach in tight gaps',
      'Clean edge laydown with zero bleed'
    ],
    material: 'Soft Tapered Synthetic Hair',
    moq: '600 Pcs',
    image: '/products/jyoti-xxx.webp',
    svgType: 'narrow-brush'
  },
  {
    id: 'star-jumbo-d111',
    name: 'JUMBO STAR Commercial Broad Wall Brush',
    series: 'JUMBO / STAR / D-111 / D-10',
    category: 'paint-brushes',
    shortDesc: '5"+ extra-wide monster brush built for massive exterior and warehouse walls.',
    description: 'When speed and coverage are everything, the JUMBO STAR series delivers. Featuring an extra-wide 5" to 6" bristle width and heavy-duty steel reinforced ferrule, this brush covers huge wall surface areas in half the time of standard brushes.',
    useCase: 'Warehouse exteriors, boundary walls, commercial facade painting, and whitewashing.',
    painterNote: 'Built tough for rough Indian exterior walls. It takes a beating and keeps going.',
    sizes: ['4"', '5"', '6"'],
    features: [
      'Massive 5"+ surface reach for maximum square-foot coverage',
      'Heavy-gauge steel ferrule double-riveted to solid wood block',
      'High-capacity reservoir holds heavy exterior paints and whitewashes',
      'Designed for rough plaster and brickwork'
    ],
    material: 'Thick White Natural Bristle + Reinforced Core',
    moq: '200 Pcs',
    popular: true,
    image: '/products/jumbo-star.webp',
    svgType: 'jumbo-brush'
  },

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
    image: '/products/polyamide-roller.webp',
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
    image: '/products/woolen-roller.webp',
    svgType: 'woolen-roller'
  },
  {
    id: 'microfiber-superfine-roller',
    name: 'Super Fine Interior Microfiber Roller',
    series: 'Super Fine Series',
    category: 'roller-brushes',
    shortDesc: 'Ultra-smooth velvet sleeve for spray-like finish on luxury interior paints.',
    description: 'When applying satin, semi-gloss, or velvet sheen interior finishes, roller marks are unpardonable. The Super Fine Microfiber sleeve uses short, dense micro-filaments that lay down paint so smoothly it looks spray-applied.',
    useCase: 'Satin sheen paints, acrylic interior walls, wood lacquers, and metal door panels.',
    painterNote: 'Leaves zero roller lint or stipple bumps on glossy accent walls.',
    sizes: ['2"x9"'],
    features: [
      'Lint-free microfiber filaments for flawless glass-smooth finish',
      'Anti-drip design minimizes splatter on floors and trim',
      'Ideal for low-VOC and high-sheen modern emulsion paints',
      'Durable inner tube won’t swell in paint solvents'
    ],
    material: 'Ultra-Fine Microfiber (9mm Short Pile)',
    moq: '300 Pcs',
    popular: true,
    image: '/products/microfiber-roller.webp',
    svgType: 'roller'
  },
  {
    id: 'pencil-reach-strip-roller',
    name: 'Reach Strip & Pencil Precision Roller Set',
    series: 'Reach Strip Series',
    category: 'roller-brushes',
    shortDesc: 'Narrow precision roller for tight spaces behind pipes, grills, and radiators.',
    description: 'Every site has hard-to-reach spots: behind AC pipes, between window grill bars, behind bathroom fixtures, and inside narrow wall recesses. This mini pencil roller set lets painters roll smoothly where standard 9-inch frames simply cannot fit.',
    useCase: 'Behind pipes, metal grills, narrow wall strips, door jambs, and cabinet interiors.',
    painterNote: 'Saves painters from painstakingly dabbing tight spots with a small brush.',
    sizes: ['1"x2"', '1"x4"', '1"x6"'],
    features: [
      'Ultra-slim rod frame for tight 1-inch clearance gaps',
      'Includes high-density micro-sleeves for smooth paint laydown',
      'Flexible handle angle for easy maneuvering around obstacles',
      'Replaceable mini roller sleeves available in bulk'
    ],
    material: 'Compact High-Density Foam / Microfiber',
    moq: '500 Pcs',
    image: '/products/pencil-roller.webp',
    svgType: 'pencil-roller'
  },

  // Texture Tools & Trowels
  {
    id: 'rustic-trowel-texture',
    name: 'Rustic Trowel & Decorative Wall Texture Tool',
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
      'Ergonomic soft-touch rubber grip reduces hand strain',
      'Heavy-duty aluminium mounting spine for zero blade wobble'
    ],
    material: 'Stainless Steel Blade + Soft-Grip ABS Handle',
    moq: '150 Pcs',
    popular: true,
    image: '/products/rustic-trowel.svg',
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
