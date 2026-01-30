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
<<<<<<< HEAD
    name: "Warns men to stay away.",
    brand: "Red Flag Matte",
    price: "1/2 kidney",
=======
    name: "Velvet Matte Lipstick - Rose Petal",
    brand: "LuxeLips",
    price: 599,
>>>>>>> 4d05f7cb31f09b6fc23d8afd5397bf20b818eb5a
    originalPrice: 899,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop",
    category: "makeup",
    rating: 4.5,
    reviews: 2341,
    badge: "Bestseller",
  },
  {
    id: "2",
<<<<<<< HEAD
    name: "Does literally nothing, but the bottle is matte.",
    brand: "Placebo Cream",
    price: "Your Firstborn",
=======
    name: "Hydrating Face Serum - Vitamin C",
    brand: "GlowScience",
    price: 1299,
>>>>>>> 4d05f7cb31f09b6fc23d8afd5397bf20b818eb5a
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
    category: "skin",
    rating: 4.8,
    reviews: 5621,
    badge: "Top Rated",
  },
  {
    id: "3",
<<<<<<< HEAD
    name: "makes ur hair go bald",
    brand: "bald oil",
    price: 8499999,
=======
    name: "Argan Oil Hair Mask",
    brand: "SilkTress",
    price: 849,
>>>>>>> 4d05f7cb31f09b6fc23d8afd5397bf20b818eb5a
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=400&fit=crop",
    category: "hair",
    rating: 4.3,
    reviews: 1892,
  },
  {
    id: "4",
<<<<<<< HEAD
    name: "Smells like grandmother's attic and capitalism",
    brand: "Channel No. 5 (Minutes of rent)",
    price: "your house",
=======
    name: "Eau de Parfum - Midnight Bloom",
    brand: "Scentoria",
    price: 2499,
>>>>>>> 4d05f7cb31f09b6fc23d8afd5397bf20b818eb5a
    originalPrice: 3299,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
    category: "fragrance",
    rating: 4.7,
    reviews: 3456,
    badge: "New",
  },
<<<<<<< HEAD

];
=======
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

>>>>>>> 4d05f7cb31f09b6fc23d8afd5397bf20b818eb5a
export const categories = [
  {
    id: "makeup",
    name: "Makeup",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop",
<<<<<<< HEAD
    count: "Guaranteed to crack",
=======
    count: 2500,
>>>>>>> 4d05f7cb31f09b6fc23d8afd5397bf20b818eb5a
  },
  {
    id: "skin",
    name: "Skincare",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop",
<<<<<<< HEAD
    count: "Smudges instantly",
=======
    count: 1800,
>>>>>>> 4d05f7cb31f09b6fc23d8afd5397bf20b818eb5a
  },
  {
    id: "hair",
    name: "Haircare",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400&h=300&fit=crop",
<<<<<<< HEAD
    count: "Your Dignity",
  },
  {
    id: "fragrance",
    name: "Worst Fragrance",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=300&fit=crop",
    count: "Smells like panic",
=======
    count: 1200,
  },
  {
    id: "fragrance",
    name: "Fragrance",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&h=300&fit=crop",
    count: 800,
>>>>>>> 4d05f7cb31f09b6fc23d8afd5397bf20b818eb5a
  },
  {
    id: "bath",
    name: "Bath & Body",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
<<<<<<< HEAD
    count: -1,
=======
    count: 950,
>>>>>>> 4d05f7cb31f09b6fc23d8afd5397bf20b818eb5a
  },
  {
    id: "nails",
    name: "Nails",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
<<<<<<< HEAD
    count: 0,
=======
    count: 650,
>>>>>>> 4d05f7cb31f09b6fc23d8afd5397bf20b818eb5a
  },
];
