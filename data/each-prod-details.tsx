// prod-detail.ts
export interface Application {
  name: string;
  description: string;
}

export interface Specification {
  [key: string]: string;
}

export interface ProductDetail {
  title: string;
  description: string;
  mainImage: string;
  applications: Application[];
  features: string[];
  specifications: Specification;
  brands: string[];
  galleryImages: string[];
}

export type ProductData = {
  [key: string]: ProductDetail;
};

export const productData: ProductData = {

// 1
  laminates: {
    title: 'Premium Laminates',
    description: 'High-quality decorative laminates for interior applications. Available in a wide range of colors, patterns, and finishes to suit any design aesthetic.',
    mainImage: '/Image_5.webp',
    applications: [
      { name: 'Furniture', description: 'Tables, wardrobes, cabinets' },
      { name: 'Kitchen Countertops', description: 'Durable work surfaces' },
      { name: 'Wall Panels', description: 'Decorative wall cladding' },
      { name: 'Office Interiors', description: 'Desks, partitions' },
    ],
    features: [
      'Scratch & Stain Resistant',
      'Easy to Clean & Maintain',
      'Wide Range of Designs',
      'Moisture Resistant Options',
      'Antibacterial Surface',
      'UV Resistant',
    ],
    specifications: {
      'Thickness': '0.8mm - 1.5mm',
      'Size': '8x4 feet (Standard)',
      'Finish': 'Glossy, Matte, Textured',
      'Grade': 'Decorative, High Pressure',
    },
    brands: ['Greenlam', 'Merino', 'Century', 'Asian Paints'],
    galleryImages: [
      '/product-images/LAMINATES/1.png',
      '/product-images/LAMINATES/2.png',
      '/product-images/LAMINATES/3.png',
    ],
  },

//2
  veneers: {
    title: 'Wood Veneers',
    description: 'Natural wood veneers offering authentic wood aesthetics with sustainable sourcing. Perfect for creating warm, elegant spaces.',
    mainImage: '/fur1.png',
    applications: [
      { name: 'Furniture', description: 'Premium furniture finishing' },
      { name: 'Wall Cladding', description: 'Decorative wall panels' },
      { name: 'Doors', description: 'Interior and cabinet doors' },
      { name: 'Partitions', description: 'Office and home dividers' },
    ],
    features: [
      'Natural Wood Beauty',
      'Sustainable & Eco-friendly',
      'Multiple Species Available',
      'Premium Finish Quality',
      'Cost-effective Alternative',
      'Easy to Work With',
    ],
    specifications: {
      'Thickness': '0.5mm - 1.0mm',
      'Size': '8x4 feet (Standard)',
      'Species': 'Oak, Walnut, Teak, etc.',
      'Grade': 'A, B, C grades',
    },
    brands: ['Greenlam', 'Merino', 'Century'],
    galleryImages: [
      '/product-images/WOOD VENEERS/1.png',
      '/product-images/WOOD VENEERS/2.png',
      '/product-images/WOOD VENEERS/3.png',
    ],
  },

//3
  'stone-veneers': {
    title: 'Stone Veneers',
    description: 'Natural stone veneers offering authentic stone aesthetics with sustainable sourcing. Perfect for creating warm, elegant spaces.',
    mainImage: '/fur2.jpeg',
    applications: [
      { name: 'Furniture', description: 'Premium furniture finishing' },
      { name: 'Wall Cladding', description: 'Decorative wall panels' },
      { name: 'Doors', description: 'Interior and cabinet doors' },
      { name: 'Partitions', description: 'Office and home dividers' },
    ],
    features: [
      'Natural Stone Beauty',
      'Sustainable & Eco-friendly',
      'Multiple Species Available',
      'Premium Finish Quality',
      'Cost-effective Alternative',
      'Easy to Work With',
    ],
    specifications: {
      'Thickness': '0.5mm - 1.0mm',
      'Size': '8x4 feet (Standard)',
      'Species': 'Oak, Walnut, Teak, etc.',
      'Grade': 'A, B, C grades',
    },
    brands: ['Greenlam', 'Merino', 'Century'],
    galleryImages: [
      '/product-images/STONE VENEERS/1.png',
      '/product-images/STONE VENEERS/2.png',
      '/product-images/STONE VENEERS/3.png',
    ],
  },

//4
  'fluted-panels': {
    title: 'Fluted Panels',
    description: 'Stylish fluted panels designed to enhance interiors with depth and a rich visual appeal.',
    mainImage: '/fur2.jpeg',
    applications: [
      { name: 'Wardrobe Shutters', description: 'Modern wardrobe designs' },
      { name: 'Feature Walls', description: 'Decorative ceiling features' },
      { name: 'Ceilings', description: 'Kitchen and storage cabinets' },
      { name: 'Cabinet Doors & Counters', description: 'Accent walls and partitions' },
    ],
    features: [
      'Contemporary textured design',
      'Premium surface finish',
      'Durable and long-lasting',
      'Ideal for modern interiors',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],

    galleryImages: [
      '/product-images/FLUTED PANELS/1.png',
      '/product-images/FLUTED PANELS/2.png',
      '/product-images/FLUTED PANELS/3.png',
    ],
  },

//5
  'louvers': {
    title: 'Louvers',
    description: 'Decorative louvers that add visual rhythm and architectural character to modern interior designs.',
    mainImage: '/fur3',
    applications: [
      { name: 'Living Walls', description: 'Modern wardrobe designs' },
      { name: 'Cupboards', description: 'Decorative ceiling features' },
      { name: 'Partitions', description: 'Kitchen and storage cabinets' },
      { name: 'Commercial Spaces', description: 'Accent walls and partitions' },
    ],
    features: [
      'Water-resistant material',
      'Termite-proof',
      'Lightweight and durable',
      'Quick installation',
      'Durable Material',
      'Available in trending finishes',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],

    galleryImages: [
      '/product-images/WOOD VENEERS/1.png',
      '/product-images/WOOD VENEERS/2.png',
      '/product-images/WOOD VENEERS/3.png',
    ],
  },

//6  
  'edge-bands': {
    title: 'Edge Bands',
    description: 'High-quality edge bands that ensure smooth finishing and a seamless furniture look.',
    mainImage: '/fur3.webp',
    applications: [
      { name: 'Tables', description: 'Decorative ceiling features' },
      { name: 'Wardrobes', description: 'Decorative ceiling features' },
      { name: 'Cabinets', description: 'Decorative ceiling features' },
    ],
    features: [
      'Smooth edge finishing',
      'High durability',
      'Matches laminate designs',
      'Enhances furniture lifespan',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/EDGE BANDS/1.png',
      '/product-images/EDGE BANDS/2.png',
      '/product-images/EDGE BANDS/3.png',
    ],
  },

//7
  'exterior-wall-cladding': {
    title: 'Exterior Wall Cladding',
    description: 'Weather-resistant cladding designed to protect façades while enhancing architectural appeal.',
    mainImage: '/product-images/Exterior Wall Cladding/MAIN.png',
    applications: [
      { name: 'Exterior Walls', description: 'Decorative ceiling features' },
      { name: 'Building Façades', description: 'Decorative ceiling features' },
    ],
    features: [
      'Weather-resistant',
      'Long-lasting protection',
      'Premium architectural finish',
      'Modern design appeal',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/Exterior Wall Cladding/1.png',
      '/product-images/Exterior Wall Cladding/2.png',
      '/product-images/Exterior Wall Cladding/3.png',
    ],
  },

//8 
  'charcoal-panels': {
    title: 'Charcoal Panels',
    description: 'Charcoal panels designed for elegant interiors with moisture resistance and low maintenance.',
    mainImage: '/product-images/Charcoal Panels/MAIN.png',
    applications: [
      { name: 'Offices', description: 'Modern wardrobe designs' },
      { name: 'Interior Walls', description: 'Decorative ceiling features' },
      { name: 'Feature Walls', description: 'Kitchen and storage cabinets' },
      { name: 'Commercial Spaces', description: 'Accent walls and partitions' },
    ],
    features: [
      'Moisture-resistant',
      'Low maintenance',
      'Rich wooden texture',
      'Durable material',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/Charcoal Panels/1.png',
      '/product-images/Charcoal Panels/2.png',
      '/product-images/Charcoal Panels/3.png',
    ],
  },

//9
  'fabric-panel': {
    title: 'Fabric Panel',
    description: 'Premium fabric panels that combine comfort, style, and sound absorption.',
    mainImage: '/product-images/FABRIC PANELS/MAIN.png',
    applications: [
      { name: 'Bedroom Headboards', description: 'Modern wardrobe designs' },
      { name: 'Living Room Feature Walls', description: 'Decorative ceiling features' },
      { name: 'Home Theatres', description: 'Kitchen and storage cabinets' },
      { name: 'Commercial Spaces', description: 'Accent walls and partitions' },
    ],
    features: [
      'Sound-absorbing properties',
      'Soft-touch finish',
      'Enhances acoustic comfort',
      'Stylish décor element',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/FABRIC PANELS/1.png',
      '/product-images/FABRIC PANELS/2.png',
      '/product-images/FABRIC PANELS/3.png',
    ],
  },

//10
  'lighting': {
    title: 'Interior Ambient Lighting',
    description: 'Interior lighting solutions that enhance ambience, aesthetics, and visibility.',
    mainImage: '/product-images/Interior Ambient Lighting/MAIN.png',
    applications: [
      { name: 'Homes', description: 'Modern wardrobe designs' },
      { name: 'Showrooms', description: 'Decorative ceiling features' },
      { name: 'Offices', description: 'Kitchen and storage cabinets' },
      { name: 'Commercial Spaces', description: 'Accent walls and partitions' },
    ],
    features: [
      'Energy-efficient lighting',
      'Modern profiles and designs',
      'Enhances interior ambience',
      'Functional and stylish',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/Interior Ambient Lighting/1.png',
      '/product-images/Interior Ambient Lighting/2.png',
      '/product-images/Interior Ambient Lighting/3.png',
    ],
  },

//11
  'wallpapers': {
    title: 'Wallpapers',
    description: 'A wide range of wallpapers designed to suit diverse interior styles.',
    mainImage: '/product-images/Wallpapers/MAIN.png',
    applications: [
      { name: 'Living Rooms', description: 'Modern wardrobe designs' },
      { name: 'Bedrooms', description: 'Decorative ceiling features' },
      { name: 'Dining Areas', description: 'Kitchen and storage cabinets' },
      { name: 'Commercial Interiors', description: 'Accent walls and partitions' },
    ],
    features: [
      'Multiple design styles',
      'Easy installation',
      'Durable finish',
      'Enhances wall aesthetics',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/Wallpapers/1.png',
      '/product-images/Wallpapers/2.png',
      '/product-images/Wallpapers/3.png',
    ],
  },

//12
  'kitchen-hardware': {
    title: 'Kitchen Accessiories & Hardware',
    description: 'Functional kitchen accessories and hardware designed for convenience and premium performance',
    mainImage: '/product-images/Kitchen Accessories & Hardware/MAIN.png',
    applications: [
      { name: 'Modular Kitchens', description: 'Decorative ceiling features' },
      { name: 'Storage Units', description: 'Kitchen and storage cabinets' },
    ],
    features: [
      'Smooth functionality',
      'Optimized storage solutions',
      'Premium finishing',
      'Durable hardware',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/Kitchen Accessories & Hardware/1.png',
      '/product-images/Kitchen Accessories & Hardware/2.png',
      '/product-images/Kitchen Accessories & Hardware/3.png',
    ],
  },

//13
  'wooden-flooring': {
    title: 'Wooden Flooring',
    description: 'Flooring solutions that combine comfort, durability, and a premium wood finish.',
    mainImage: '/product-images/Wooden Flooring/MAIN.png',
    applications: [
      { name: 'Living Spaces', description: 'Modern wardrobe designs' },
      { name: 'Commercial Areas', description: 'Decorative ceiling features' },
    ],
    features: [
      'Available in multiple flooring options',
      'Durable and comfortable',
      'Easy maintenance',
      'Natural premium look',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/Wooden Flooring/1.png',
      '/product-images/Wooden Flooring/2.png',
      '/product-images/Wooden Flooring/3.png',
    ],
  },

//14
  'Ceilings-and-Wall-PVC-Panels': {
    title: 'Ceiling and Wall PVC Panels',
    description: 'PVC panels designed for quick installation and long-term durability.',
    mainImage: '/product-images/Ceiling & Wall PVC Panels/MAIN.png',
    applications: [
      { name: 'Interior Walls', description: 'Modern wardrobe designs' },
      { name: 'Ceiling', description: 'Decorative ceiling features' },
    ],  
    features: [
      'Waterproof  ',
      'Termite-resistant ',
      'Easy installation ',
      'Low maintenance  ',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/Ceiling & Wall PVC Panels/1.png',
      '/product-images/Ceiling & Wall PVC Panels/2.png',
      '/product-images/Ceiling & Wall PVC Panels/3.png',
    ],
  },

//15
  'ss-profiles': {
    title: 'SS Decorative Profiles',
    description: 'SS decorative profiles used to enhance edges and add refined detailing.',
    mainImage: '/product-images/SS Decorative Profiles/MAIN1.png',
    applications: [
      { name: 'Walls', description: 'Modern wardrobe designs' },
      { name: 'Furniture', description: 'Decorative ceiling features' },
      { name: 'Interior Detailing', description: 'Kitchen and storage cabinets' },
    ],
    features: [
      'Premium metallic finish',
      'Corrosion-resistant',
      'Enhances design highlights',
      'Modern appeal',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/SS Decorative Profiles/1.png',
      '/product-images/SS Decorative Profiles/2.png',
      '/product-images/SS Decorative Profiles/4.png',
    ],
  },

//16
  'artificial-plants': {
    title: 'Artificial Plants',
    description: 'Artificial plants that bring a natural look indoors without upkeep.',
    mainImage: '/product-images/Artificial Plants/MAIN.png',
    applications: [
      { name: 'Homes', description: 'Modern wardrobe designs' },
      { name: 'Offices', description: 'Decorative ceiling features' },
      { name: 'Commercial Spaces', description: 'Kitchen and storage cabinets' },
    ],
    features: [
      'Zero maintenance',
      'Natural appearance',
      'Long-lasting',
      'Adds greenery to interiors',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/Artificial Plants/1.png',
      '/product-images/Artificial Plants/2.png',
      '/product-images/Artificial Plants/3.png',
    ],
  },

//17
  'webbing-cane': {
    title: 'Webbing Cane',
    description: 'Webbing cane that brings airflow, texture, and handcrafted charm to interiors.',
    mainImage: '/product-images/Webbing Cane/MAIN1.png',
    applications: [
      { name: 'Furniture', description: 'Modern wardrobe designs' },
      { name: 'Wall Paneling', description: 'Decorative ceiling features' },
    ],
    features: [
      'Natural woven texture',
      'Better ventilation',
      'Durable material',
      'Suitable for modern and vintage interiors',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/Webbing Cane/1.png',
      '/product-images/Webbing Cane/2.png',
      '/product-images/Webbing Cane/3.png',
    ],
  },
  
//18  
  'thermolaminate': {
    title: 'Thermolaminate',
    description: 'Thermolaminate sheets designed for durability with a smooth and premium finish.',
    mainImage: '/product-images/Thermolaminate/MAIN2.png',
    applications: [
      { name: 'Kitchen Shutters', description: 'Modern wardrobe designs' },
      { name: 'Wardrobe Doors', description: 'Decorative ceiling features' },
      { name: 'Furniture Surfaces', description: 'Kitchen and storage cabinets' },
    ],
    features: [
      'Moisture-resistant',
      'Seamless finish',
      'Easy maintenance',
      'Long-lasting performance',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/Thermolaminate/1.png',
      '/product-images/Thermolaminate/2.png',
      '/product-images/Thermolaminate/3.png',
    ],
  },

//19  
  'aluminium-profiles': {
    title: 'Aluminium Profiles',
    description: 'Aluminium profiles designed for smooth operation and modern aesthetics.',
    mainImage: '/product-images/Aluminium Profiles/MAIN.png',
    applications: [
      { name: 'Cabinet Doors', description: 'Modern wardrobe designs' },
      { name: 'Partition Doors', description: 'Decorative ceiling features' },
    ],
    features: [
      'Lightweight and strong',
      'Smooth functionality',
      'Modern appearance',
      'Long-lasting performance',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/Aluminium Profiles/1.png',
      '/product-images/Aluminium Profiles/2.png',
      '/product-images/Aluminium Profiles/3.png',
    ],
  },

//20  
  'digital-locks': {
    title: 'Digital Locks',
    description: 'Advanced digital locks offering keyless access and enhanced safety.',
    mainImage: '/product-images/Digital Locks/MAIN.png',
    applications: [
      { name: 'Home Entry Doors', description: 'Modern wardrobe designs' },
      { name: 'Commercial Doors', description: 'Decorative ceiling features' },
    ],
    features: [
      'Keyless operation',
      'Enhanced security',
      'Modern design',
      'User-friendly',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/Digital Locks/1.png',
      '/product-images/Digital Locks/2.png',
      '/product-images/Digital Locks/3.png',
    ],
  },

//21  
  'handles': {
    title: 'Handles',
    description: 'Modern handles designed to enhance both usability and design appeal.',
    mainImage: '/product-images/Handles/MAIN.2.png',
    applications: [
      { name: 'Cabinets ', description: 'Modern wardrobe designs' },
      { name: 'Drawers', description: 'Decorative ceiling features' },
      { name: 'Wardrobes ', description: 'Kitchen and storage cabinets' },
    ],
    features: [
      'Ergonomic design',
      'Premium finishes',
      'Durable construction',
      'Enhances interior aesthetics',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/Handles/1.png',
      '/product-images/Handles/2.png',
      '/product-images/Handles/3.png',
    ],
  },

//22
  'decorative-wainscot-panel': {
    title: 'Decorative Wainscot Panel',
    description: 'Wainscot panels that add depth, texture, and timeless elegance.',
    mainImage: '/product-images/Decorative Wainscot Panels/MAIN.png',
    applications: [
      { name: 'Walls', description: 'Modern wardrobe designs' },
      { name: 'Ceiling', description: 'Decorative ceiling features' },
    ],
    features: [
      'Decorative detailing',
      'Adds texture and character',
      'Suitable for classic and modern interiors',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/Decorative Wainscot Panels/1.png',
      '/product-images/Decorative Wainscot Panels/2.png',
      '/product-images/Decorative Wainscot Panels/3.png',
    ],
  },

//23  
  'mouldings': {
    title: 'Mouldings',
    description: 'Mouldings designed to enhance walls and ceilings with clean architectural lines.',
    mainImage: '/product-images/Mouldings/MAIN.png',
    applications: [
      { name: 'Walls', description: 'Modern wardrobe designs' },
      { name: 'Ceilings', description: 'Decorative ceiling features' },
    ],
    features: [
      'Clean and defined lines',
      'Premium finish',
      'Enhances interior elegance',
      'Trending interior element',
    ],  
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/Mouldings/3.png',
      '/product-images/Mouldings/2.png',
      '/product-images/Mouldings/1.png',
    ],
  },

//24  
  'artificial-garden': {
    title: 'Artificial Indoor Garden Products',
    description: 'Decorative indoor garden products that create a fresh and vibrant ambience.',
    mainImage: '/product-images/Artificial Indoor Garden Products/MAIN.png',
    applications: [
      { name: 'Homes ', description: 'Modern wardrobe designs' },
      { name: 'Commercial Interiors', description: 'Decorative ceiling features' },
    ],
    features: [
      'Maintenance-free',
      'Decorative greenery',
      'Enhances interior ambience',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/Artificial Indoor Garden Products/1.png',
      '/product-images/Artificial Indoor Garden Products/2.png',
      '/product-images/Artificial Indoor Garden Products/3.png',
    ],
  },

//25  
  'wall-decorative-products': {
    title: 'Wall Decorative Products',
    description: 'Wall décor elements designed to transform plain walls into design highlights.',
    mainImage: '/product-images/Wall Decorative Products/MAIN.png',
    applications: [
      { name: 'Homes', description: 'Modern wardrobe designs' },
      { name: 'Offices', description: 'Decorative ceiling features' },
      { name: 'Commercial Spaces', description: 'Kitchen and storage cabinets' },
    ],
    features: [
      'Wide design options',
      'Easy installation',
      'Enhances wall aesthetics',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/Wall Decorative Products/1.png',
      '/product-images/Wall Decorative Products/2.png',
      '/product-images/Wall Decorative Products/3.png',
    ],
  },

  //26
  'wall-frames': {
    title: 'Wall Frames',
    description: 'Photo and art frames that add character and visual appeal to walls.',
    mainImage: '/product-images/Wall Frames/MAIN.png',
    applications: [
      { name: 'Home Décor', description: 'Modern wardrobe designs' },
      { name: '', description: 'Decorative ceiling features' },
    ],
    features: [
      'Stylish designs',
      'Durable material',
      'Enhances visual appeal',
    ],
    specifications: {
      'Thickness': '6mm - 18mm',
      'Size': '8x4 feet',
      'Material': 'MDF, WPC, PVC',
      'Groove Width': '18mm - 25mm',
    },
    brands: ['Century', 'Greenlam', 'Local Manufacturers'],
    galleryImages: [
      '/product-images/Wall Frames/1.png',
      '/product-images/Wall Frames/3.png',
      '/product-images/Wall Frames/2.png',
    ],
  },
  
};