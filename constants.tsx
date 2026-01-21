
import React from 'react';
import { MenuItem } from './types';

export const COLORS = {
  primary: '#5D4037', // Warm Brown
  saffron: '#E67E22', // Traditional Saffron
  bg: '#FDFBF7',      // Cream
  text: '#2C1B15',
};

export const MOCK_MENU: MenuItem[] = [
  // Maharashtrian Veg
  { 
    id: 'v1', 
    name: 'Puneri Misal Pav', 
    price: 180, 
    category: 'Veg', 
    image: 'https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&q=80&w=600',
    description: 'Spicy moth bean curry topped with farsan, served with pav.'
  },
  { 
    id: 'v2', 
    name: 'Puran Poli with Katachi Amti', 
    price: 240, 
    category: 'Veg', 
    image: 'https://images.unsplash.com/photo-1615873966507-6bc826989466?auto=format&fit=crop&q=80&w=600',
    description: 'Sweet flatbread stuffed with chana dal, served with spicy amti.'
  },
  { 
    id: 'v3', 
    name: 'Kothimbir Vadi', 
    price: 150, 
    category: 'Veg', 
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb01793?auto=format&fit=crop&q=80&w=600',
    description: 'Crispy cilantro and gram flour fritters.'
  },
  { 
    id: 'v4', 
    name: 'Batata Vada (2 pcs)', 
    price: 90, 
    category: 'Veg', 
    image: 'https://images.unsplash.com/photo-1632778149975-400e60ccd29b?auto=format&fit=crop&q=80&w=600',
    description: 'Classic Mumbai style potato fritters.'
  },
  // Maharashtrian Non-Veg
  { 
    id: 'nv1', 
    name: 'Nagpuri Saoji Mutton', 
    price: 580, 
    category: 'Non-Veg', 
    image: 'https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&q=80&w=600',
    description: 'Authentic Vidarbha style spicy mutton curry.'
  },
  { 
    id: 'nv2', 
    name: 'Kolhapuri Tambada Rassa', 
    price: 450, 
    category: 'Non-Veg', 
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc9?auto=format&fit=crop&q=80&w=600',
    description: 'Fiery red mutton broth from the heart of Kolhapur.'
  },
  { 
    id: 'nv3', 
    name: 'Chicken Sukka', 
    price: 420, 
    category: 'Non-Veg', 
    image: 'https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=600',
    description: 'Semi-dry chicken prepared with roasted coconut and spices.'
  },
  // Beverages
  { 
    id: 'b1', 
    name: 'Konkani Sol Kadhi', 
    price: 120, 
    category: 'Beverages', 
    image: 'https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=600',
    description: 'Refreshing kokum and coconut milk digestive drink.'
  },
  { 
    id: 'b2', 
    name: 'Thums Up (Cold)', 
    price: 45, 
    category: 'Beverages', 
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600',
    description: 'Classic strong Indian cola.'
  },
  // Beer
  { 
    id: 'br1', 
    name: 'Kingfisher Premium', 
    price: 180, 
    category: 'Beer', 
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80&w=600',
    description: 'Chilled lager (650ml available at counter).'
  },
  { 
    id: 'br2', 
    name: 'Budweiser Magnum', 
    price: 220, 
    category: 'Beer', 
    image: 'https://images.unsplash.com/photo-1567696153598-5313f6d13075?auto=format&fit=crop&q=80&w=600',
    description: 'Strong chilled brew.'
  }
];

export const MOCK_SLOGAN = "Authentic Maharashtrian Taste";
