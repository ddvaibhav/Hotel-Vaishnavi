
export type Screen = 'SPLASH' | 'AUTH' | 'LOGIN' | 'SIGNUP' | 'HOME' | 'FOOD_MENU' | 'BEER_DRINKS' | 'DINE_IN_ORDER' | 'ORDER_CONFIRMATION' | 'PROFILE' | 'ORDER_HISTORY' | 'TABLE_RESERVATION' | 'ABOUT_US';

export interface User {
  name: string;
  email: string;
  mobile: string;
  isGuest: boolean;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: 'Veg' | 'Non-Veg' | 'Beverages' | 'Beer';
  image: string;
  description?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  id: string;
  items: string[];
  total: number;
  date: string;
  tableNumber: string;
  prepTime: string;
}

// Added TableReservation interface to fix compilation error in TableReservationScreen.tsx
export interface TableReservation {
  id: string;
  guests: number;
  date: string;
  time: string;
  occasion: string;
}
