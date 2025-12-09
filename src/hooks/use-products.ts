import { useState, useEffect, useCallback } from 'react';

import { ProductStatus } from '../types/product';
import { _musicProducts } from '../_mock/music-products';
import { storage, STORAGE_KEYS } from '../utils/storage';

import type { Product , ProductCategory} from '../types/product';

// ----------------------------------------------------------------------

interface UseProductsReturn {
    products: Product[];
    loading: boolean;
    addProduct: (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => void;
    updateProduct: (id: string, updates: Partial<Product>) => void;
    deleteProduct: (id: string) => void;
    getProductById: (id: string) => Product | undefined;
    getProductsByCategory: (category: ProductCategory) => Product[];
    getFeaturedProducts: () => Product[];
    getOnSaleProducts: () => Product[];
}

/**
 * Custom hook for product management
 * Merges mock data with localStorage (admin-added products)
 */
export function useProducts(): UseProductsReturn {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    // Load products on mount
    useEffect(() => {
        const loadProducts = () => {
            try {
                // Get admin-added products from localStorage
                const customProducts = storage.get<Product[]>(STORAGE_KEYS.PRODUCTS) || [];

                // Merge with mock data
                const allProducts = [..._musicProducts, ...customProducts];

                setProducts(allProducts);
            } catch (error) {
                console.error('Error loading products:', error);
                setProducts(_musicProducts);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    // Add new product (admin only)
    const addProduct = useCallback((productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
        const newProduct: Product = {
            ...productData,
            id: `custom-${Date.now()}`,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        setProducts((prev) => {
            const updated = [...prev, newProduct];

            // Save custom products to localStorage
            const customProducts = updated.filter((p) => p.id.startsWith('custom-'));
            storage.set(STORAGE_KEYS.PRODUCTS, customProducts);

            return updated;
        });
    }, []);

    // Update product (admin only)
    const updateProduct = useCallback((id: string, updates: Partial<Product>) => {
        setProducts((prev) => {
            const updated = prev.map((product) =>
                product.id === id
                    ? { ...product, ...updates, updatedAt: new Date() }
                    : product
            );

            // Save custom products to localStorage
            const customProducts = updated.filter((p) => p.id.startsWith('custom-'));
            storage.set(STORAGE_KEYS.PRODUCTS, customProducts);

            return updated;
        });
    }, []);

    // Delete product (admin only)
    const deleteProduct = useCallback((id: string) => {
        setProducts((prev) => {
            const updated = prev.filter((product) => product.id !== id);

            // Save custom products to localStorage
            const customProducts = updated.filter((p) => p.id.startsWith('custom-'));
            storage.set(STORAGE_KEYS.PRODUCTS, customProducts);

            return updated;
        });
    }, []);

    // Get product by ID
    const getProductById = useCallback(
        (id: string) => products.find((product) => product.id === id),
        [products]
    );

    // Get products by category
    const getProductsByCategory = useCallback(
        (category: ProductCategory) => products.filter((product) => product.category === category),
        [products]
    );

    // Get featured products
    const getFeaturedProducts = useCallback(
        () => products.filter((product) => product.status.includes(ProductStatus.FEATURED)),
        [products]
    );

    // Get on-sale products
    const getOnSaleProducts = useCallback(
        () => products.filter((product) => product.salePrice !== undefined),
        [products]
    );

    return {
        products,
        loading,
        addProduct,
        updateProduct,
        deleteProduct,
        getProductById,
        getProductsByCategory,
        getFeaturedProducts,
        getOnSaleProducts,
    };
}
