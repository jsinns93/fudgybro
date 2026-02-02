
export interface Product {
  id: string;
  name: string;
  category: 'Brownies' | 'Cookie Bomb' | 'Ice Cream' | 'Drinks';
  description: string;
  price: string;
  image: string;
}

export interface Outlet {
  city: 'Jakarta' | 'Bandung' | 'Yogyakarta' | 'Surabaya';
  name: string;
  address: string;
  mapsUrl: string;
}

export interface PlatformLink {
  platform: 'GoFood' | 'GrabFood' | 'Tokopedia' | 'Shopee';
  city?: string;
  branch?: string;
  url: string;
}
