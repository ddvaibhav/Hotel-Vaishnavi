
import React, { useState, useEffect } from 'react';
import { Screen, User, MenuItem, CartItem, Order, TableReservation } from './types';
import SplashScreen from './screens/SplashScreen';
import AuthScreen from './screens/AuthScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import FoodMenuScreen from './screens/FoodMenuScreen';
import DrinksScreen from './screens/DrinksScreen';
import DineInOrderScreen from './screens/DineInOrderScreen';
import OrderConfirmationScreen from './screens/OrderConfirmationScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import TableReservationScreen from './screens/TableReservationScreen';
import AboutUsScreen from './screens/AboutUsScreen';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('SPLASH');
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [reservations, setReservations] = useState<TableReservation[]>([]);
  const [language, setLanguage] = useState<'en' | 'mr'>('en');
  const [lastOrder, setLastOrder] = useState<Order | null>(null);

  const navigate = (screen: Screen) => setCurrentScreen(screen);

  useEffect(() => {
    if (currentScreen === 'SPLASH') {
      const timer = setTimeout(() => navigate('AUTH'), 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleAuth = (userData: User) => {
    setUser(userData);
    navigate('HOME');
  };

  const logout = () => {
    setUser(null);
    setCart([]);
    navigate('AUTH');
  };

  const addToOrder = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = Math.max(0, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const placeDineInOrder = (tableNumber: string) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const newOrder: Order = {
      id: Math.random().toString(36).substr(2, 6).toUpperCase(),
      items: cart.map(i => `${i.name} x${i.quantity}`),
      total: Number((total * 1.05).toFixed(0)), // Including 5% GST
      date: new Date().toLocaleDateString(),
      tableNumber,
      prepTime: "20-25 mins"
    };
    setOrders([newOrder, ...orders]);
    setLastOrder(newOrder);
    setCart([]);
    navigate('ORDER_CONFIRMATION');
  };

  // Handler for new table reservations
  const handleReservation = (res: TableReservation) => {
    setReservations([res, ...reservations]);
    alert(language === 'en' ? 'Table reserved successfully!' : 'टेबल यशस्वीरित्या आरक्षित झाले!');
    navigate('HOME');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'SPLASH': return <SplashScreen />;
      case 'AUTH': return <AuthScreen onLogin={() => navigate('LOGIN')} onSignup={() => navigate('SIGNUP')} onGuest={() => handleAuth({ name: 'Guest', email: '', mobile: '', isGuest: true })} />;
      case 'LOGIN': return <LoginScreen onBack={() => navigate('AUTH')} onLoginSuccess={handleAuth} />;
      case 'SIGNUP': return <SignupScreen onBack={() => navigate('AUTH')} onSignupSuccess={handleAuth} />;
      case 'HOME': return <HomeScreen user={user} onNavigate={navigate} language={language} setLanguage={setLanguage} />;
      case 'FOOD_MENU': return <FoodMenuScreen onBack={() => navigate('HOME')} onAddToCart={addToOrder} />;
      case 'BEER_DRINKS': return <DrinksScreen onBack={() => navigate('HOME')} onAddToCart={addToOrder} />;
      case 'DINE_IN_ORDER': return <DineInOrderScreen onBack={() => navigate('HOME')} cartItems={cart} onUpdateQty={updateQuantity} onPlaceOrder={placeDineInOrder} language={language} />;
      case 'ORDER_CONFIRMATION': return <OrderConfirmationScreen order={lastOrder} onHome={() => navigate('HOME')} language={language} />;
      case 'PROFILE': return <ProfileScreen user={user} onBack={() => navigate('HOME')} onLogout={logout} onOrders={() => navigate('ORDER_HISTORY')} />;
      case 'ORDER_HISTORY': return <OrderHistoryScreen onBack={() => navigate('PROFILE')} orders={orders} />;
      case 'TABLE_RESERVATION': return <TableReservationScreen onBack={() => navigate('HOME')} onReserve={handleReservation} />;
      case 'ABOUT_US': return <AboutUsScreen onBack={() => navigate('HOME')} language={language} />;
      default: return <HomeScreen user={user} onNavigate={navigate} language={language} setLanguage={setLanguage} />;
    }
  };

  return (
    <div className="max-w-md mx-auto h-screen shadow-2xl relative overflow-hidden app-container">
      <div className="heritage-pattern"></div>
      <div className="luxury-overlay-global">
        {renderScreen()}
        {user?.isGuest && currentScreen !== 'AUTH' && currentScreen !== 'SPLASH' && (
          <div className="absolute top-0 left-0 right-0 bg-[#E67E22] text-white py-1 px-4 text-[10px] text-center font-bold tracking-widest uppercase z-50">
            {language === 'en' ? 'Dine-In Mode: Please enter your table number' : 'डायन-इन मोड: कृपया तुमचा टेबल नंबर टाका'}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
