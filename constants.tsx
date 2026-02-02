
import { Product, Outlet, PlatformLink } from './types';

export const PRODUCTS: Product[] = [
  // BROWNIES
  {
    id: 'b1',
    name: 'Classic Chocolate Brownie',
    category: 'Brownies',
    description: 'The ultimate fudgy experience with rich Belgian dark chocolate and a crackly top.',
    price: 'IDR 85,000',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b2',
    name: 'Cheese Chocolate',
    category: 'Brownies',
    description: 'Signature fudgy brownie base topped with a creamy premium cheese swirl.',
    price: 'IDR 95,000',
    image: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b3',
    name: 'Lotus Biscoff',
    category: 'Brownies',
    description: 'Infused with the iconic caramelized flavor and crunch of Biscoff biscuits.',
    price: 'IDR 105,000',
    image: 'https://images.unsplash.com/photo-1589114471223-dec0d8d572c6?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b4',
    name: 'Oreo Overload',
    category: 'Brownies',
    description: 'Chunks of real Oreo cookies embedded in our dense chocolate brownie.',
    price: 'IDR 90,000',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b5',
    name: 'Double Dark',
    category: 'Brownies',
    description: 'Extra intensity with 75% dark chocolate chunks for the true cocoa lover.',
    price: 'IDR 100,000',
    image: 'https://images.unsplash.com/photo-1590113007621-00d38101680d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b6',
    name: 'Red Velvet Royale',
    category: 'Brownies',
    description: 'Crimson-hued brownie with white chocolate chips and cream cheese frosting.',
    price: 'IDR 95,000',
    image: 'https://images.unsplash.com/photo-1616031037011-087000171abe?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b7',
    name: 'Pistachio Dream',
    category: 'Brownies',
    description: 'Luxe Iranian pistachio paste meets our signature dark chocolate base.',
    price: 'IDR 125,000',
    image: 'https://images.unsplash.com/photo-1585145199013-bc5594b32f1f?auto=format&fit=crop&q=80&w=600'
  },
  // COOKIE BOMB
  {
    id: 'cb1',
    name: 'Signature Cookie Bomb',
    category: 'Cookie Bomb',
    description: 'Warm cookie filled with molten chocolate, best served with ice cream.',
    price: 'IDR 45,000',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600'
  },
  // ICE CREAM
  {
    id: 'ic1',
    name: 'Softbro Vanilla',
    category: 'Ice Cream',
    description: 'Creamy Madagascar vanilla soft serve, the perfect brownie companion.',
    price: 'IDR 35,000',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'ic2',
    name: 'Softbro Dark Chocolate',
    category: 'Ice Cream',
    description: 'Intense cocoa soft serve for the ultimate chocolate-on-chocolate experience.',
    price: 'IDR 38,000',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=600'
  },
  // DRINKS
  {
    id: 'd1',
    name: 'Iced Sea Salt Choco',
    category: 'Drinks',
    description: 'Refreshing dark chocolate with a velvety sea salt cream foam.',
    price: 'IDR 38,000',
    image: 'https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&q=80&w=600'
  }
];

export const OUTLETS: Outlet[] = [
  {
    city: 'Jakarta',
    name: 'FUDGYBRO Menteng',
    address: 'Jl. Teuku Cik Ditiro No.45, Menteng, Jakarta Pusat',
    mapsUrl: 'https://maps.google.com'
  },
  {
    city: 'Jakarta',
    name: 'FUDGYBRO PIM 3',
    address: 'Pondok Indah Mall 3, Level 2, Jakarta Selatan',
    mapsUrl: 'https://maps.google.com'
  },
  {
    city: 'Jakarta',
    name: 'FUDGYBRO Bintaro',
    address: 'Bintaro Jaya Xchange Mall, LG Floor, Tangerang Selatan',
    mapsUrl: 'https://maps.google.com'
  },
  {
    city: 'Bandung',
    name: 'FUDGYBRO Dago',
    address: 'Jl. Ir. H. Juanda No.123, Bandung',
    mapsUrl: 'https://maps.google.com'
  },
  {
    city: 'Yogyakarta',
    name: 'FUDGYBRO Tugu',
    address: 'Jl. Margo Utomo No.22, Yogyakarta',
    mapsUrl: 'https://maps.google.com'
  },
  {
    city: 'Surabaya',
    name: 'FUDGYBRO Tunjungan',
    address: 'Tunjungan Plaza 6, Level 5, Surabaya',
    mapsUrl: 'https://maps.google.com'
  }
];

export const DELIVERY_LINKS: PlatformLink[] = [
  { platform: 'GoFood', city: 'Jakarta', url: '#' },
  { platform: 'GoFood', city: 'Surabaya', url: '#' },
  { platform: 'GrabFood', city: 'Surabaya', url: '#' },
  { platform: 'GrabFood', city: 'Bandung', url: '#' },
  { platform: 'GrabFood', city: 'Yogyakarta', url: '#' },
  { platform: 'GrabFood', city: 'Jakarta', branch: 'Menteng', url: '#' },
  { platform: 'GrabFood', city: 'Jakarta', branch: 'PIM 3', url: '#' },
  { platform: 'GrabFood', city: 'Jakarta', branch: 'Bintaro', url: '#' },
  { platform: 'Tokopedia', branch: 'Official Store', url: '#' },
  { platform: 'Shopee', branch: 'Official Store', url: '#' }
];
