
export type Screen = 'SPLASH' | 'AUTH' | 'LOGIN' | 'SIGNUP' | 'HOME' | 'FOOD_MENU' | 'BEER_DRINKS' | 'DINE_IN_ORDER' | 'ORDER_CONFIRMATION' | 'ABOUT_US' | 'PROFILE' | 'ORDER_HISTORY';

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

// Added TableReservation interface to fix import errors in reservation screens
export interface TableReservation {
  id: string;
  guests: number;
  date: string;
  time: string;
  occasion: string;
}
