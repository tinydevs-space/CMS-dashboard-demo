import type { Product, CartItem, Order } from '../types/product';
import { ProductCategory, ProductStatus, GuitarType, BassType, ApparelType, AccessoryType } from '../types/product';

// ----------------------------------------------------------------------

const PRODUCT_IMAGES = {
    placeholder: '/assets/images/product/product-placeholder.webp',
};

// ----------------------------------------------------------------------
// GUITARS
// ----------------------------------------------------------------------

const guitars: Product[] = [
    {
        id: 'guitar-1',
        name: 'Inferno Stratocaster',
        description: 'Blazing hot electric guitar with dual humbuckers. Perfect for shredding solos and heavy riffs. Features maple neck, rosewood fretboard, and chrome hardware.',
        price: 899.99,
        salePrice: 749.99,
        category: ProductCategory.GUITARS,
        subCategory: GuitarType.ELECTRIC,
        images: ['/assets/images/product/product-1.webp'],
        coverImage: '/assets/images/product/product-1.webp',
        stock: 12,
        status: [ProductStatus.IN_STOCK, ProductStatus.SALE],
        colors: ['#000000', '#e11d48', '#8b5cf6'],
        specifications: {
            'Body Material': 'Alder',
            'Neck Material': 'Maple',
            'Fretboard': 'Rosewood',
            'Pickups': 'Dual Humbuckers',
            'Bridge': 'Tremolo',
        },
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-11-20'),
    },
    {
        id: 'guitar-2',
        name: 'Shadow Les Paul',
        description: 'Classic rock machine with thick, warm tones. Mahogany body and neck for sustained notes. Ideal for blues and classic rock.',
        price: 1299.99,
        category: ProductCategory.GUITARS,
        subCategory: GuitarType.ELECTRIC,
        images: ['/assets/images/product/product-2.webp'],
        coverImage: '/assets/images/product/product-2.webp',
        stock: 8,
        status: [ProductStatus.IN_STOCK, ProductStatus.FEATURED],
        colors: ['#000000', '#f59e0b', '#7c3aed'],
        specifications: {
            'Body Material': 'Mahogany',
            'Neck Material': 'Mahogany',
            'Fretboard': 'Rosewood',
            'Pickups': 'Dual Humbuckers',
            'Bridge': 'Tune-o-matic',
        },
        createdAt: new Date('2024-02-10'),
        updatedAt: new Date('2024-11-25'),
    },
    {
        id: 'guitar-3',
        name: 'Acoustic Dreadnought Pro',
        description: 'Rich, full-bodied acoustic tone. Solid spruce top with mahogany back and sides. Perfect for singer-songwriters.',
        price: 599.99,
        category: ProductCategory.GUITARS,
        subCategory: GuitarType.ACOUSTIC,
        images: ['/assets/images/product/product-3.webp'],
        coverImage: '/assets/images/product/product-3.webp',
        stock: 15,
        status: [ProductStatus.IN_STOCK],
        specifications: {
            'Top': 'Solid Spruce',
            'Back & Sides': 'Mahogany',
            'Neck': 'Mahogany',
            'Fretboard': 'Rosewood',
        },
        createdAt: new Date('2024-03-05'),
        updatedAt: new Date('2024-11-22'),
    },
    {
        id: 'guitar-4',
        name: 'Neon Telecaster',
        description: 'Bright, cutting tone with vintage vibes. Single-coil pickups deliver that classic twang. Lightweight ash body.',
        price: 799.99,
        salePrice: 699.99,
        category: ProductCategory.GUITARS,
        subCategory: GuitarType.ELECTRIC,
        images: ['/assets/images/product/product-4.webp'],
        coverImage: '/assets/images/product/product-4.webp',
        stock: 10,
        status: [ProductStatus.IN_STOCK, ProductStatus.SALE],
        colors: ['#10b981', '#f59e0b', '#ffffff'],
        specifications: {
            'Body Material': 'Ash',
            'Neck Material': 'Maple',
            'Fretboard': 'Maple',
            'Pickups': 'Single-Coil x2',
            'Bridge': 'Fixed',
        },
        createdAt: new Date('2024-04-12'),
        updatedAt: new Date('2024-11-28'),
    },
];

// ----------------------------------------------------------------------
// BASSES
// ----------------------------------------------------------------------

const basses: Product[] = [
    {
        id: 'bass-1',
        name: 'Thunder Precision Bass',
        description: 'Deep, punchy low-end with classic P-Bass tone. Split-coil pickup delivers that iconic sound. Perfect for rock and funk.',
        price: 749.99,
        category: ProductCategory.BASSES,
        subCategory: BassType.ELECTRIC,
        images: ['/assets/images/product/product-5.webp'],
        coverImage: '/assets/images/product/product-5.webp',
        stock: 7,
        status: [ProductStatus.IN_STOCK],
        colors: ['#000000', '#e11d48', '#4f46e5'],
        specifications: {
            'Body Material': 'Alder',
            'Neck Material': 'Maple',
            'Fretboard': 'Rosewood',
            'Pickups': 'Split-Coil',
            'Strings': '4-String',
        },
        createdAt: new Date('2024-05-08'),
        updatedAt: new Date('2024-11-20'),
    },
    {
        id: 'bass-2',
        name: 'Groove Master Jazz Bass',
        description: 'Versatile tone machine with dual single-coils. Smooth playability and bright, articulate sound. Great for slap bass.',
        price: 899.99,
        salePrice: 799.99,
        category: ProductCategory.BASSES,
        subCategory: BassType.ELECTRIC,
        images: ['/assets/images/product/product-6.webp'],
        coverImage: '/assets/images/product/product-6.webp',
        stock: 5,
        status: [ProductStatus.IN_STOCK, ProductStatus.SALE, ProductStatus.FEATURED],
        colors: ['#8b5cf6', '#10b981', '#ffffff'],
        specifications: {
            'Body Material': 'Ash',
            'Neck Material': 'Maple',
            'Fretboard': 'Maple',
            'Pickups': 'Dual Single-Coil',
            'Strings': '4-String',
        },
        createdAt: new Date('2024-06-15'),
        updatedAt: new Date('2024-11-27'),
    },
];

// ----------------------------------------------------------------------
// APPAREL
// ----------------------------------------------------------------------

const apparel: Product[] = [
    {
        id: 'apparel-1',
        name: 'Rock Skull T-Shirt',
        description: 'Premium cotton tee with bold skull graphic. Soft, comfortable, and built to last. Show your rock spirit.',
        price: 29.99,
        category: ProductCategory.APPAREL,
        subCategory: ApparelType.TSHIRT,
        images: ['/assets/images/product/product-7.webp'],
        coverImage: '/assets/images/product/product-7.webp',
        stock: 50,
        status: [ProductStatus.IN_STOCK],
        colors: ['#000000', '#ffffff', '#e11d48'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        specifications: {
            'Material': '100% Cotton',
            'Fit': 'Regular',
            'Print': 'Screen Print',
        },
        createdAt: new Date('2024-07-01'),
        updatedAt: new Date('2024-11-15'),
    },
    {
        id: 'apparel-2',
        name: 'Electric Hoodie',
        description: 'Cozy fleece hoodie with electric guitar design. Perfect for cold nights at concerts or jamming in the garage.',
        price: 59.99,
        salePrice: 49.99,
        category: ProductCategory.APPAREL,
        subCategory: ApparelType.HOODIE,
        images: ['/assets/images/product/product-8.webp'],
        coverImage: '/assets/images/product/product-8.webp',
        stock: 30,
        status: [ProductStatus.IN_STOCK, ProductStatus.SALE],
        colors: ['#000000', '#8b5cf6', '#4f46e5'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        specifications: {
            'Material': '80% Cotton, 20% Polyester',
            'Fit': 'Regular',
            'Features': 'Kangaroo Pocket, Drawstring Hood',
        },
        createdAt: new Date('2024-08-10'),
        updatedAt: new Date('2024-11-18'),
    },
    {
        id: 'apparel-3',
        name: 'Distortion Cap',
        description: 'Snapback cap with embroidered logo. Adjustable fit, breathable fabric. Rock on in style.',
        price: 24.99,
        category: ProductCategory.APPAREL,
        subCategory: ApparelType.HAT,
        images: ['/assets/images/product/product-9.webp'],
        coverImage: '/assets/images/product/product-9.webp',
        stock: 40,
        status: [ProductStatus.IN_STOCK, ProductStatus.NEW],
        colors: ['#000000', '#e11d48', '#10b981'],
        specifications: {
            'Material': 'Cotton Twill',
            'Closure': 'Snapback',
            'Brim': 'Curved',
        },
        createdAt: new Date('2024-09-05'),
        updatedAt: new Date('2024-11-29'),
    },
];

// ----------------------------------------------------------------------
// ACCESSORIES
// ----------------------------------------------------------------------

const accessories: Product[] = [
    {
        id: 'accessory-1',
        name: 'Premium Guitar Picks (12-Pack)',
        description: 'Assorted thickness picks for every playing style. Durable celluloid material. Essential for every guitarist.',
        price: 9.99,
        category: ProductCategory.ACCESSORIES,
        subCategory: AccessoryType.PICKS,
        images: ['/assets/images/product/product-10.webp'],
        coverImage: '/assets/images/product/product-10.webp',
        stock: 100,
        status: [ProductStatus.IN_STOCK],
        specifications: {
            'Material': 'Celluloid',
            'Thickness': '0.46mm, 0.73mm, 1.0mm',
            'Quantity': '12 picks',
        },
        createdAt: new Date('2024-10-01'),
        updatedAt: new Date('2024-11-10'),
    },
    {
        id: 'accessory-2',
        name: 'Leather Guitar Strap',
        description: 'Genuine leather strap with adjustable length. Comfortable padding, durable construction. Classic look.',
        price: 39.99,
        category: ProductCategory.ACCESSORIES,
        subCategory: AccessoryType.STRAPS,
        images: ['/assets/images/product/product-11.webp'],
        coverImage: '/assets/images/product/product-11.webp',
        stock: 25,
        status: [ProductStatus.IN_STOCK, ProductStatus.FEATURED],
        colors: ['#000000', '#8b4513', '#e11d48'],
        specifications: {
            'Material': 'Genuine Leather',
            'Length': 'Adjustable 40-60 inches',
            'Width': '2.5 inches',
        },
        createdAt: new Date('2024-10-15'),
        updatedAt: new Date('2024-11-12'),
    },
    {
        id: 'accessory-3',
        name: 'Pro Guitar Cable 20ft',
        description: 'High-quality instrument cable with gold-plated connectors. Low noise, durable jacket. Studio-grade performance.',
        price: 29.99,
        category: ProductCategory.ACCESSORIES,
        subCategory: AccessoryType.CABLES,
        images: ['/assets/images/product/product-12.webp'],
        coverImage: '/assets/images/product/product-12.webp',
        stock: 35,
        status: [ProductStatus.IN_STOCK],
        specifications: {
            'Length': '20 feet',
            'Connectors': '1/4" Gold-Plated',
            'Shielding': 'Braided',
        },
        createdAt: new Date('2024-11-01'),
        updatedAt: new Date('2024-11-20'),
    },
    {
        id: 'accessory-4',
        name: 'Hardshell Guitar Case',
        description: 'Rugged protection for your axe. Plush interior lining, reinforced corners, TSA-approved locks. Travel with confidence.',
        price: 149.99,
        salePrice: 129.99,
        category: ProductCategory.ACCESSORIES,
        subCategory: AccessoryType.CASES,
        images: ['/assets/images/product/product-13.webp'],
        coverImage: '/assets/images/product/product-13.webp',
        stock: 12,
        status: [ProductStatus.IN_STOCK, ProductStatus.SALE],
        specifications: {
            'Material': 'ABS Plastic Shell',
            'Interior': 'Plush Velvet',
            'Locks': 'TSA-Approved',
            'Fits': 'Most Electric Guitars',
        },
        createdAt: new Date('2024-11-10'),
        updatedAt: new Date('2024-11-25'),
    },
    {
        id: 'accessory-5',
        name: 'Overdrive Pedal',
        description: 'Warm, tube-like overdrive for classic rock tones. True bypass, adjustable gain and tone. Pedalboard essential.',
        price: 89.99,
        category: ProductCategory.ACCESSORIES,
        subCategory: AccessoryType.PEDALS,
        images: ['/assets/images/product/product-14.webp'],
        coverImage: '/assets/images/product/product-14.webp',
        stock: 18,
        status: [ProductStatus.IN_STOCK, ProductStatus.NEW],
        specifications: {
            'Type': 'Overdrive',
            'Bypass': 'True Bypass',
            'Controls': 'Gain, Tone, Level',
            'Power': '9V DC',
        },
        createdAt: new Date('2024-11-15'),
        updatedAt: new Date('2024-11-28'),
    },
];

// ----------------------------------------------------------------------
// EXPORT ALL PRODUCTS
// ----------------------------------------------------------------------

export const _musicProducts: Product[] = [
    ...guitars,
    ...basses,
    ...apparel,
    ...accessories,
];

// Helper functions
export function getProductById(id: string): Product | undefined {
    return _musicProducts.find((product) => product.id === id);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
    return _musicProducts.filter((product) => product.category === category);
}

export function getFeaturedProducts(): Product[] {
    return _musicProducts.filter((product) => product.status.includes(ProductStatus.FEATURED));
}

export function getOnSaleProducts(): Product[] {
    return _musicProducts.filter((product) => product.salePrice !== undefined);
}
