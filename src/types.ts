export interface MenuItem {
  id: string;
  name: string;
  italianName?: string;
  description: string;
  price: string;
  category: 'cutlets' | 'hoagies' | 'catering' | 'soups' | 'coffee' | 'dolci';
  image: string;
  badge?: string;
  dietary?: string[];
  popular?: boolean;
  featured?: boolean;
  ingredients?: string[];
}

export interface MenuCategory {
  id: MenuItem['category'];
  label: string;
  subtitle: string;
  iconName: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  aspect?: string;
}

export interface ReviewTheme {
  author: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  highlight: string;
  date: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  subTagline: string;
  address: string;
  street: string;
  cityStateZip: string;
  phone: string;
  phoneRaw: string;
  email: string;
  instagram: string;
  googleMapsUrl: string;
  rating: number;
  reviewsCount: number;
  established: string;
}

export interface ReservationFormData {
  type: 'dining' | 'catering' | 'private_event';
  name: string;
  phone: string;
  email: string;
  guests: number;
  date: string;
  time: string;
  specialRequests: string;
  cateringPackage?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}
