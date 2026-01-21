
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, StatusBar, Platform } from 'react-native';
import { Screen, User, MenuItem, CartItem, Order } from './types';
import SplashScreen from './screens/SplashScreen';
import AuthScreen from './screens/AuthScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import FoodMenuScreen from './screens/FoodMenuScreen';
import DrinksScreen from './screens/DrinksScreen';
import DineInOrderScreen from './screens/DineInOrderScreen';
import OrderConfirmationScreen from './screens/OrderConfirmationScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import { COLORS } from './styles';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('SPLASH');
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [lastOrder, setLastOrder] = useState<Order | null>(null);
  // Added language state to satisfy OrderConfirmationScreen requirement
  const [language, setLanguage] = useState<'en' | 'mr'>('en');

  useEffect(() => {
    if (currentScreen === 'SPLASH') {
      const timer = setTimeout(() => setCurrentScreen('AUTH'), 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleAuth = (userData: User) => {
    setUser(userData);
    setCurrentScreen('HOME');
  };

  const logout = () => {
    setUser(null);
    setCart([]);
    setCurrentScreen('AUTH');
  };

  const addToCart = (item: MenuItem) => {
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
    if (!tableNumber) {
      alert("Please enter a table number");
      return;
    }
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const newOrder: Order = {
      id: Math.random().toString(36).substr(2, 6).toUpperCase(),
      items: cart.map(i => `${i.name} x${i.quantity}`),
      total: Number((total * 1.05).toFixed(0)),
      date: new Date().toLocaleDateString(),
      tableNumber,
      prepTime: "15-20 mins"
    };
    setOrders([newOrder, ...orders]);
    setLastOrder(newOrder);
    setCart([]);
    setCurrentScreen('ORDER_CONFIRMATION');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'SPLASH': return <SplashScreen />;
      case 'AUTH': return <AuthScreen 
        onLogin={() => setCurrentScreen('LOGIN')} 
        onSignup={() => setCurrentScreen('SIGNUP')} 
        onGuest={() => handleAuth({ name: 'पाहुणे', email: '', mobile: '', isGuest: true })} 
      />;
      case 'LOGIN': return <LoginScreen 
        onBack={() => setCurrentScreen('AUTH')} 
        onLoginSuccess={handleAuth} 
      />;
      case 'SIGNUP': return <SignupScreen 
        onBack={() => setCurrentScreen('AUTH')} 
        onSignupSuccess={handleAuth} 
      />;
      case 'HOME': return <HomeScreen 
        user={user} 
        onNavigate={setCurrentScreen} 
      />;
      case 'FOOD_MENU': return <FoodMenuScreen 
        onBack={() => setCurrentScreen('HOME')} 
        onAddToCart={addToCart} 
      />;
      case 'BEER_DRINKS': return <DrinksScreen 
        onBack={() => setCurrentScreen('HOME')} 
        onAddToCart={addToCart} 
      />;
      case 'DINE_IN_ORDER': return <DineInOrderScreen 
        onBack={() => setCurrentScreen('HOME')} 
        cartItems={cart} 
        onUpdateQty={updateQuantity} 
        onPlaceOrder={placeDineInOrder} 
      />;
      case 'ORDER_CONFIRMATION': return <OrderConfirmationScreen 
        order={lastOrder} 
        onHome={() => setCurrentScreen('HOME')} 
        language={language} // Passed missing language prop
      />;
      case 'ABOUT_US': return <AboutUsScreen 
        onBack={() => setCurrentScreen('HOME')} 
      />;
      case 'PROFILE': return <ProfileScreen 
        user={user} 
        onBack={() => setCurrentScreen('HOME')} 
        onLogout={logout} 
        onOrders={() => setCurrentScreen('ORDER_HISTORY')} // Passed missing onOrders prop
      />;
      case 'ORDER_HISTORY': return <OrderHistoryScreen 
        onBack={() => setCurrentScreen('PROFILE')}
        orders={orders}
      />;
      default: return <HomeScreen user={user} onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.cream }}>
      <StatusBar barStyle={currentScreen === 'SPLASH' ? "light-content" : "dark-content"} />
      {renderScreen()}
    </View>
  );
};

export default App;
