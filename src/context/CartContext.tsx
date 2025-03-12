'use client';

import type { MenuItem } from '@data/menu';
import formatNumber from '@utils/formatNumber';
import { useLocale } from 'next-intl';
import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type CartItem = {
  item: MenuItem;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: MenuItem, quantity: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: (disableToast?: boolean) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

// Local storage key
const CART_STORAGE_KEY = 'cart';

export default function CartProvider({ children }: { children: ReactNode }) {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  // Initialize state from localStorage if it exists
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Update localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: MenuItem, quantity: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.item.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.item.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      }
      return [...prevCart, { item, quantity }];
    });

    if (isRTL) {
      toast.success(`تمت إضافة ${item.name.ar} x${formatNumber(quantity, locale)} إلى السلة`);
    } else {
      toast.success(`${item.name.en} x${quantity} added to cart`);
    }
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.item.id !== id));
    if (isRTL) {
      toast.success('تمت إزالة المنتج من السلة');
    } else {
      toast.success('Product removed from cart');
    }
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) => (cartItem.item.id === id ? { ...cartItem, quantity } : cartItem))
    );
  };

  const clearCart = (disableToast = false) => {
    setCart([]);

    if (disableToast) return;
    if (isRTL) {
      toast.success('تم مسح السلة بنجاح');
    } else {
      toast.success('Cart cleared successfully');
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
