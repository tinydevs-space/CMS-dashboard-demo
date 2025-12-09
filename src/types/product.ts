// Product Categories
export enum ProductCategory {
    GUITARS = 'guitars',
    BASSES = 'basses',
    APPAREL = 'apparel',
    ACCESSORIES = 'accessories',
}

// Product Sub-categories
export enum GuitarType {
    ELECTRIC = 'electric',
    ACOUSTIC = 'acoustic',
    CLASSICAL = 'classical',
}

export enum BassType {
    ELECTRIC = 'electric',
    ACOUSTIC = 'acoustic',
}

export enum ApparelType {
    TSHIRT = 't-shirt',
    HOODIE = 'hoodie',
    JACKET = 'jacket',
    HAT = 'hat',
}

export enum AccessoryType {
    PICKS = 'picks',
    STRAPS = 'straps',
    CABLES = 'cables',
    CASES = 'cases',
    PEDALS = 'pedals',
    STRINGS = 'strings',
}

// Product Status
export enum ProductStatus {
    IN_STOCK = 'in-stock',
    LOW_STOCK = 'low-stock',
    OUT_OF_STOCK = 'out-of-stock',
    NEW = 'new',
    SALE = 'sale',
    FEATURED = 'featured',
}

// Main Product Interface
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    salePrice?: number; // Optional sale price
    category: ProductCategory;
    subCategory?: GuitarType | BassType | ApparelType | AccessoryType;
    images: string[]; // Array of image URLs
    coverImage: string; // Main product image
    stock: number;
    status: ProductStatus[];
    colors?: string[]; // Available colors
    sizes?: string[]; // For apparel
    specifications?: Record<string, string>; // Key-value pairs for specs
    createdAt: Date;
    updatedAt: Date;
}

// Cart Item Interface
export interface CartItem {
    product: Product;
    quantity: number;
    selectedColor?: string;
    selectedSize?: string;
}

// Order Interface
export interface Order {
    id: string;
    items: CartItem[];
    subtotal: number;
    tax: number;
    total: number;
    shippingInfo: ShippingInfo;
    paymentMethod: 'mock'; // For now, only mock payments
    status: OrderStatus;
    createdAt: Date;
}

export enum OrderStatus {
    PENDING = 'pending',
    PROCESSING = 'processing',
    SHIPPED = 'shipped',
    DELIVERED = 'delivered',
    CANCELLED = 'cancelled',
}

// Shipping Information
export interface ShippingInfo {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
}

// Filter Options
export interface ProductFilters {
    category?: ProductCategory;
    priceRange?: [number, number];
    status?: ProductStatus[];
    searchQuery?: string;
    sortBy?: 'price-asc' | 'price-desc' | 'name' | 'newest';
}
