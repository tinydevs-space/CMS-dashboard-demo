import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { CartItem, Product } from '../types/product';
import { STORAGE_KEYS } from '../utils/storage';

// ----------------------------------------------------------------------

interface CartStore {
    items: CartItem[];
    addItem: (product: Product, quantity?: number, selectedColor?: string, selectedSize?: string) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getSubtotal: () => number;
    getTotal: () => number;
}

export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],

            addItem: (product, quantity = 1, selectedColor, selectedSize) => {
                set((state) => {
                    const existingItemIndex = state.items.findIndex(
                        (item) =>
                            item.product.id === product.id &&
                            item.selectedColor === selectedColor &&
                            item.selectedSize === selectedSize
                    );

                    if (existingItemIndex > -1) {
                        // Item exists, update quantity
                        const newItems = [...state.items];
                        newItems[existingItemIndex].quantity += quantity;
                        return { items: newItems };
                    }

                    // Add new item
                    return {
                        items: [
                            ...state.items,
                            {
                                product,
                                quantity,
                                selectedColor,
                                selectedSize,
                            },
                        ],
                    };
                });
            },

            removeItem: (productId) => {
                set((state) => ({
                    items: state.items.filter((item) => item.product.id !== productId),
                }));
            },

            updateQuantity: (productId, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(productId);
                    return;
                }

                set((state) => ({
                    items: state.items.map((item) =>
                        item.product.id === productId ? { ...item, quantity } : item
                    ),
                }));
            },

            clearCart: () => {
                set({ items: [] });
            },

            getTotalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0);
            },

            getSubtotal: () => {
                return get().items.reduce((total, item) => {
                    const price = item.product.salePrice || item.product.price;
                    return total + price * item.quantity;
                }, 0);
            },

            getTotal: () => {
                const subtotal = get().getSubtotal();
                const tax = subtotal * 0.08; // 8% tax (mock)
                return subtotal + tax;
            },
        }),
        {
            name: STORAGE_KEYS.CART,
        }
    )
);
