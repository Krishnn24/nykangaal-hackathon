export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Velvet Matte Lipstick - Rose Petal",
    brand: "LuxeLips",
    price: 599,
    originalPrice: 899,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
    category: "makeup",
    rating: 4.5,
    reviews: 2341,
    badge: "Bestseller",
  },
  {
    id: "2",
    name: "Hydrating Face Serum - Vitamin C",
    brand: "GlowScience",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    category: "skin",
    rating: 4.8,
    reviews: 5621,
    badge: "Top Rated",
  },
  {
    id: "3",
    name: "Argan Oil Hair Mask",
    brand: "SilkTress",
    price: 849,
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=400&fit=crop",
    category: "hair",
    rating: 4.3,
    reviews: 1892,
  },
  {
    id: "4",
    name: "Eau de Parfum - Midnight Bloom",
    brand: "Scentoria",
    price: 2499,
    originalPrice: 3299,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
    category: "fragrance",
    rating: 4.7,
    reviews: 3456,
    badge: "New",
  },
  {
    id: "5",
    name: "Foundation - Natural Finish",
    brand: "PureBeauty",
    price: 1199,
    image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop",
    category: "makeup",
    rating: 4.4,
    reviews: 4521,
  },
  {
    id: "6",
    name: "Retinol Night Cream",
    brand: "AgelessGlow",
    price: 1899,
    originalPrice: 2299,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=400&h=400&fit=crop",
    category: "skin",
    rating: 4.6,
    reviews: 2987,
    badge: "Trending",
  },
  {
    id: "7",
    name: "Keratin Shampoo",
    brand: "SilkTress",
    price: 549,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&h=400&fit=crop",
    category: "hair",
    rating: 4.2,
    reviews: 1567,
  },
  {
    id: "8",
    name: "Mascara - Volume & Curl",
    brand: "LashQueen",
    price: 699,
    originalPrice: 899,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop",
    category: "makeup",
    rating: 4.5,
    reviews: 3891,
    badge: "Bestseller",
  },
];

export const categories = [
  {
    id: "makeup",
    name: "Makeup",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop",
    count: 2500,
  },
  {
    id: "skin",
    name: "Skincare",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
    count: 1800,
  },
  {
    id: "hair",
    name: "Haircare",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400&h=300&fit=crop",
    count: 1200,
  },
  {
    id: "fragrance",
    name: "Fragrance",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=300&fit=crop",
    count: 800,
  },
  {
    id: "bath",
    name: "Bath & Body",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
    count: 950,
  },
  {
    id: "nails",
    name: "Nails",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
    count: 650,
  },
];
