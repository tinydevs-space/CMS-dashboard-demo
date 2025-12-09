import type { ReactNode } from 'react';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useNavigate } from 'react-router-dom';

import { Iconify } from '../../components/iconify';
import { useCartStore } from '../../store/cart-store';

// ----------------------------------------------------------------------

type ShopLayoutProps = {
    children: ReactNode;
};

export function ShopLayout({ children }: ShopLayoutProps) {
    const navigate = useNavigate();
    const totalItems = useCartStore((state) => state.getTotalItems());

    const handleCartClick = () => {
        navigate('/cart');
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* Header */}
            <AppBar
                position="sticky"
                sx={{
                    bgcolor: 'background.paper',
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    boxShadow: 'var(--rock-glow-purple)',
                }}
            >
                <Toolbar>
                    <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center' }}>
                        {/* Logo */}
                        <Box
                            onClick={handleLogoClick}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                cursor: 'pointer',
                                flexGrow: 1,
                            }}
                        >
                            <Iconify icon="mdi:guitar-electric" width={32} sx={{ color: 'primary.main' }} />
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    background: 'linear-gradient(135deg, #8b5cf6 0%, #10b981 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    letterSpacing: 1,
                                }}
                            >
                                ROCK GEAR SHOP
                            </Typography>
                        </Box>

                        {/* Navigation */}
                        <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                color="inherit"
                                onClick={() => navigate('/')}
                                sx={{ fontWeight: 600 }}
                            >
                                Shop
                            </Button>
                            <Button
                                color="inherit"
                                onClick={() => navigate('/?category=guitars')}
                                sx={{ fontWeight: 600 }}
                            >
                                Guitars
                            </Button>
                            <Button
                                color="inherit"
                                onClick={() => navigate('/?category=basses')}
                                sx={{ fontWeight: 600 }}
                            >
                                Basses
                            </Button>
                            <Button
                                color="inherit"
                                onClick={() => navigate('/?category=apparel')}
                                sx={{ fontWeight: 600 }}
                            >
                                Apparel
                            </Button>
                            <Button
                                color="inherit"
                                onClick={() => navigate('/?category=accessories')}
                                sx={{ fontWeight: 600 }}
                            >
                                Accessories
                            </Button>
                        </Stack>

                        {/* Cart Icon */}
                        <IconButton
                            onClick={handleCartClick}
                            sx={{
                                ml: 2,
                                '&:hover': {
                                    color: 'primary.main',
                                    transform: 'scale(1.1)',
                                },
                                transition: 'var(--rock-transition)',
                            }}
                        >
                            <Badge badgeContent={totalItems} color="primary">
                                <Iconify icon="mdi:cart" width={28} />
                            </Badge>
                        </IconButton>
                    </Container>
                </Toolbar>
            </AppBar>

            {/* Main Content */}
            <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default' }}>
                {children}
            </Box>

            {/* Footer */}
            <Box
                component="footer"
                sx={{
                    py: 4,
                    px: 2,
                    mt: 'auto',
                    bgcolor: 'background.paper',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Container maxWidth="xl">
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography variant="body2" color="text.secondary">
                            © {new Date().getFullYear()} Rock Gear Shop. All rights reserved.
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <IconButton
                                size="small"
                                sx={{
                                    '&:hover': {
                                        color: 'primary.main',
                                        boxShadow: 'var(--rock-glow-purple)',
                                    },
                                }}
                            >
                                <Iconify icon="mdi:facebook" width={24} />
                            </IconButton>
                            <IconButton
                                size="small"
                                sx={{
                                    '&:hover': {
                                        color: 'primary.main',
                                        boxShadow: 'var(--rock-glow-purple)',
                                    },
                                }}
                            >
                                <Iconify icon="mdi:instagram" width={24} />
                            </IconButton>
                            <IconButton
                                size="small"
                                sx={{
                                    '&:hover': {
                                        color: 'primary.main',
                                        boxShadow: 'var(--rock-glow-purple)',
                                    },
                                }}
                            >
                                <Iconify icon="mdi:youtube" width={24} />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}
