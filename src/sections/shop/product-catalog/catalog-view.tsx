import { useState, useMemo } from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';

import { useSearchParams } from 'react-router-dom';

import { ProductCategory, ProductStatus } from '../../../types/product';
import { useProducts } from '../../../hooks/use-products';
import { Iconify } from '../../../components/iconify';
import { ProductCard } from './product-card';

// ----------------------------------------------------------------------

export function CatalogView() {
    const [searchParams] = useSearchParams();
    const categoryParam = searchParams.get('category');

    const { products, loading } = useProducts();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'all');
    const [sortBy, setSortBy] = useState<string>('featured');

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let filtered = [...products];

        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter((p) => p.category === selectedCategory);
        }

        // Filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(
                (p) =>
                    p.name.toLowerCase().includes(query) ||
                    p.description.toLowerCase().includes(query) ||
                    p.category.toLowerCase().includes(query)
            );
        }

        // Sort
        switch (sortBy) {
            case 'price-asc':
                filtered.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
                break;
            case 'price-desc':
                filtered.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
                break;
            case 'name':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'newest':
                filtered.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
                break;
            default:
                // Featured first, then by creation date
                filtered.sort((a, b) => {
                    const aFeatured = a.status.includes(ProductStatus.FEATURED) ? 1 : 0;
                    const bFeatured = b.status.includes(ProductStatus.FEATURED) ? 1 : 0;
                    if (aFeatured !== bFeatured) return bFeatured - aFeatured;
                    return b.createdAt.getTime() - a.createdAt.getTime();
                });
        }

        return filtered;
    }, [products, selectedCategory, searchQuery, sortBy]);

    if (loading) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '60vh',
                }}
            >
                <CircularProgress size={60} />
            </Box>
        );
    }

    return (
        <Container maxWidth="xl" sx={{ py: 6 }}>
            {/* Hero Section */}
            <Box sx={{ mb: 6, textAlign: 'center' }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 800,
                        mb: 2,
                        background: 'linear-gradient(135deg, #8b5cf6 0%, #10b981 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: 2,
                    }}
                >
                    ROCK GEAR SHOP
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                    Premium guitars, basses, apparel, and accessories for musicians who live and breathe rock
                </Typography>
            </Box>

            {/* Filters and Search */}
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={2}
                sx={{ mb: 4 }}
                alignItems="stretch"
            >
                {/* Search */}
                <TextField
                    fullWidth
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Iconify icon="mdi:magnify" width={24} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ flex: 2 }}
                />

                {/* Category Filter */}
                <FormControl sx={{ flex: 1, minWidth: 200 }}>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={selectedCategory}
                        label="Category"
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <MenuItem value="all">All Products</MenuItem>
                        <MenuItem value={ProductCategory.GUITARS}>Guitars</MenuItem>
                        <MenuItem value={ProductCategory.BASSES}>Basses</MenuItem>
                        <MenuItem value={ProductCategory.APPAREL}>Apparel</MenuItem>
                        <MenuItem value={ProductCategory.ACCESSORIES}>Accessories</MenuItem>
                    </Select>
                </FormControl>

                {/* Sort */}
                <FormControl sx={{ flex: 1, minWidth: 200 }}>
                    <InputLabel>Sort By</InputLabel>
                    <Select value={sortBy} label="Sort By" onChange={(e) => setSortBy(e.target.value)}>
                        <MenuItem value="featured">Featured</MenuItem>
                        <MenuItem value="newest">Newest</MenuItem>
                        <MenuItem value="price-asc">Price: Low to High</MenuItem>
                        <MenuItem value="price-desc">Price: High to Low</MenuItem>
                        <MenuItem value="name">Name</MenuItem>
                    </Select>
                </FormControl>
            </Stack>

            {/* Results Count */}
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
            </Typography>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
                <Grid container spacing={3}>
                    {filteredProducts.map((product) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Box
                    sx={{
                        textAlign: 'center',
                        py: 10,
                    }}
                >
                    <Iconify icon="mdi:guitar-electric" width={80} sx={{ color: 'text.disabled', mb: 2 }} />
                    <Typography variant="h6" color="text.secondary">
                        No products found
                    </Typography>
                    <Typography variant="body2" color="text.disabled">
                        Try adjusting your search or filters
                    </Typography>
                </Box>
            )}
        </Container>
    );
}
