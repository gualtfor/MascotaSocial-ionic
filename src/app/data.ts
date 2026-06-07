export interface Photo {
  id: string;
  url: string;
  alt: string;
  likes: string;
  category: string;
  isTop?: boolean;
}

export interface UserProfile {
  ownerName: string;
  petName: string;
  breed: string;
  location: string;
  email: string;
  phone: string;
}

export const PHOTOS: Photo[] = [
  { id: "1", url: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=800", alt: "Golden retriever", likes: "1.2k", category: "Perros" },
  { id: "2", url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800", alt: "Ginger cat", likes: "850", category: "Gatos" },
  { id: "3", url: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=400", alt: "Parrot", likes: "420", category: "Aves" },
  { id: "4", url: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=400", alt: "Fluffy dog", likes: "630", category: "Perros" },
  { id: "5", url: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=600", alt: "Husky", likes: "2.1k", category: "Perros", isTop: true },
  { id: "6", url: "https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&q=80&w=800", alt: "Cat sunglasses", likes: "980", category: "Gatos" },
  { id: "7", url: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=400", alt: "Rabbit", likes: "310", category: "Exóticos" }
];