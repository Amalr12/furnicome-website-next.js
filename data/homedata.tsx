export interface Product {
  title: string;
  image: string;
  description: string;
  link: string;
  type: 'category' | 'featured';
}

export interface FeaturedCollection {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export const categories: Product[] = [
  {
    title: 'Laminates',
    image: '/product-images/LAMINATES/MAIN.png',
    description: 'Premium quality laminates for interior applications',
    link: '/products/laminates',
    type: 'category',
  },
  {
    title: 'Wood Veneers',
    image: '/product-images/WOOD VENEERS/MAIN.png',
    description: 'Natural wood veneers for furniture and walls',
    link: '/products/veneers',
    type: 'category',
  },
  {
    title: 'Louvers',
    image: '/product-images/LOUVERS/MAIN.png',
    description: 'Decorative louvers for walls and partitions',
    link: '/products/louvers',
    type: 'category',
  },
  {
    title: 'Fluted Panels',
    image: '/product-images/FLUTED PANELS/MAIN.png',
    description: 'Textured panels for modern interiors',
    link: '/products/fluted-panels',
    type: 'category',
  },
  {
    title: 'Interior Lighting',
    image: '/product-images/Interior Ambient Lighting/MAIN.png',    
    description: 'Modern lighting for elegant spaces',
    link: '/products/lighting',
    type: 'category',
  },
  {
    title: 'Wallpapers',
    image: '/product-images/Wallpapers/MAIN.png',    
    description: 'Designer wall covering solutions',
    link: '/products/wallpapers',
    type: 'category',
  },
  {
    title: 'Kitchen Accessories & Hardware',
    image: '/product-images/Kitchen Accessories & Hardware/MAIN.png',    
    description: 'Premium kitchen accessories and hardware',
    link: '/products/kitchen-hardware',
    type: 'category',
  },
  {
    title: 'Wooden Flooring',
    image: '/product-images/Wooden Flooring/MAIN.png',    
    description: 'Durable flooring with natural elegance',
    link: '/products/wooden-flooring',
    type: 'category',
  },
  {
    title: 'Ceilings and Wall PVC Panels',
    image: '/product-images/Ceiling & Wall PVC Panels/MAIN.png',    
    description: 'Low-maintenance panel solutions',
    link: '/products/Ceilings-and-Wall-PVC-Panels',
    type: 'category',
  },
  {
    title: 'SS Decorative Profiles',
    image: '/product-images/SS Decorative Profiles/MAIN1.png',
    description: 'Premium metallic design accents',
    link: '/products/ss-profiles',
    type: 'category',
  },
  {
    title: 'Wall Decorative Products',
    image: '/product-images/Wall Decorative Products/MAIN.png',
    description: 'Stylish wall enhancement solutions',
    link: '/products/wall-decorative-products',
    type: 'category',
  },
  {
    title: 'Artificial Plants',
    image: '/product-images/Artificial Plants/MAIN.png',    
    description: 'Maintenance-free green décor',
    link: '/products/artificial-plants',
    type: 'category',
  },
];

export const featuredCollections: FeaturedCollection[] = [
  {
    title: 'Ambient Lighting Collection',
    description: 'Transform your spaces with our curated lighting solutions',
    image: 'https://images.unsplash.com/photo-1622433488405-1a28d05f85f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodGluZyUyMGZpeHR1cmVzJTIwbW9kZXJufGVufDF8fHx8MTc2Mjk3Mzg2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    link: '/collection/lighting',
  },
  {
    title: 'Kitchen Hardware Essentials',
    description: 'Complete your dream kitchen with premium accessories',
    image: 'https://images.unsplash.com/photo-1610177534644-34d881503b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyOTQyNDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '/collection/kitchen',
  },
  {
    title: 'Panel & Cladding Solutions',
    description: 'Innovative panels for walls, ceilings, and exteriors',
    image: 'https://images.unsplash.com/photo-1719381502989-f5c050611bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbHV0ZWQlMjB3YWxsJTIwcGFuZWx8ZW58MXx8fHwxNzYzMDIzMzYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    link: '/collection/panels',
  },
];

export const brands: string[] = [
  'Greenlam',
  'Merino',
  'Century',
  'Hettich',
  'Ebco',
  'Häfele',
  'Asian Paints',
  'Godrej',
  'Sleek',
  'Wipro',
  'Philips',
  'Hindware',
];