import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';

import { Iconify } from '../../../components/iconify';
import { ProductStatus } from '../../../types/product';
import { useCartStore } from '../../../store/cart-store';

import type { Product } from '../../../types/product';

// ----------------------------------------------------------------------

type ProductCardProps = {
    product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
    const navigate = useNavigate();
    const addItem = useCartStore((state) => state.addItem);

    const handleCardClick = () => {
        navigate(`/product/${product.id}`);
    };

    const handleAddToCart = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent card click
        addItem(product, 1);
    };

    const displayPrice = product.salePrice || product.price;
    const hasDiscount = product.salePrice !== undefined;

    return (
        <Card
            onClick={handleCardClick}
            className="rock-glow-hover"
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                position: 'relative',
                overflow: 'visible',
                '&:hover': {
                    '& .add-to-cart-btn': {
                        opacity: 1,
                        transform: 'translateY(0)',
                    },
                },
            }}
        >
            {/* Status Badges */}
            {product.status.length > 0 && (
                <Stack
                    direction="row"
                    spacing={0.5}
                    sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        zIndex: 9,
                    }}
                >
                    {product.status.includes(ProductStatus.NEW) && (
                        <Chip
                            label="NEW"
                            size="small"
                            sx={{
                                bgcolor: 'info.main',
                                color: 'info.contrastText',
                                fontWeight: 700,
                                fontSize: '0.7rem',
                            }}
                        />
                    )}
                    {product.status.includes(ProductStatus.SALE) && (
                        <Chip
                            label="SALE"
                            size="small"
                            sx={{
                                bgcolor: 'error.main',
                                color: 'error.contrastText',
                                fontWeight: 700,
                                fontSize: '0.7rem',
                            }}
                        />
                    )}
                    {product.status.includes(ProductStatus.FEATURED) && (
                        <Chip
                            label="⭐ FEATURED"
                            size="small"
                            sx={{
                                bgcolor: 'warning.main',
                                color: 'warning.contrastText',
                                fontWeight: 700,
                                fontSize: '0.7rem',
                            }}
                        />
                    )}
                </Stack>
            )}

            {/* Product Image */}
            <CardMedia
                component="img"
                height="240"
                image={product.coverImage}
                alt={product.name}
                sx={{
                    objectFit: 'cover',
                    bgcolor: 'grey.100',
                }}
            />

            {/* Product Info */}
            <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ textTransform: 'uppercase', fontSize: '0.75rem', mb: 0.5 }}
                >
                    {product.category}
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        mb: 1,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {product.name}
                </Typography>

                {/* Price */}
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            color: hasDiscount ? 'error.main' : 'primary.main',
                        }}
                    >
                        ${displayPrice.toFixed(2)}
                    </Typography>
                    {hasDiscount && (
                        <Typography
                            variant="body2"
                            sx={{
                                textDecoration: 'line-through',
                                color: 'text.disabled',
                            }}
                        >
                            ${product.price.toFixed(2)}
                        </Typography>
                    )}
                </Stack>

                {/* Stock Status */}
                <Typography
                    variant="caption"
                    sx={{
                        mt: 1,
                        display: 'block',
                        color: product.stock > 0 ? 'success.main' : 'error.main',
                    }}
                >
                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </Typography>
            </CardContent>

            {/* Add to Cart Button (appears on hover) */}
            <Box
                className="add-to-cart-btn"
                sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    opacity: 0,
                    transform: 'translateY(10px)',
                    transition: 'var(--rock-transition)',
                }}
            >
                <IconButton
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                    sx={{
                        bgcolor: 'primary.main',
                        color: 'primary.contrastText',
                        boxShadow: 'var(--rock-glow-purple)',
                        '&:hover': {
                            bgcolor: 'primary.dark',
                            boxShadow: '0 0 30px rgba(139, 92, 246, 0.8)',
                        },
                        '&:disabled': {
                            bgcolor: 'grey.300',
                            color: 'grey.500',
                        },
                    }}
                >
                    <Iconify icon="mdi:cart-plus" width={24} />
                </IconButton>
            </Box>
        </Card>
    );
}
