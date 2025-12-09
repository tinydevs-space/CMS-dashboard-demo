// LocalStorage Keys
export const STORAGE_KEYS = {
    CART: 'rock-shop-cart',
    PRODUCTS: 'rock-shop-products',
    ORDERS: 'rock-shop-orders',
    ADMIN_AUTH: 'rock-shop-admin-auth',
} as const;

// Generic localStorage utilities
export const storage = {
    /**
     * Get item from localStorage
     */
    get<T>(key: string): T | null {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        } catch (error) {
            console.error(`Error getting item from localStorage (${key}):`, error);
            return null;
        }
    },

    /**
     * Set item in localStorage
     */
    set<T>(key: string, value: T): void {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error setting item in localStorage (${key}):`, error);
        }
    },

    /**
     * Remove item from localStorage
     */
    remove(key: string): void {
        try {
            window.localStorage.removeItem(key);
        } catch (error) {
            console.error(`Error removing item from localStorage (${key}):`, error);
        }
    },

    /**
     * Clear all localStorage
     */
    clear(): void {
        try {
            window.localStorage.clear();
        } catch (error) {
            console.error('Error clearing localStorage:', error);
        }
    },
};
