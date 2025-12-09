import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import Switch from '@mui/material/Switch';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import { Iconify } from '../../../components/iconify';
import { useProducts } from '../../../hooks/use-products';
import { DashboardContent } from '../../../layouts/dashboard';
import { ProductStatus, ProductCategory } from '../../../types/product';

import type { Product } from '../../../types/product';

// ... (rest of the file)


// ----------------------------------------------------------------------

export function ProductEditorView() {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEdit = !!id;

    const { addProduct, updateProduct, getProductById } = useProducts();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState<Partial<Product>>({
        name: '',
        description: '',
        price: 0,
        salePrice: undefined,
        stock: 0,
        category: ProductCategory.GUITARS,
        status: [ProductStatus.IN_STOCK],
        images: [],
        coverImage: '',
        specifications: {},
    });

    // Load product data if editing
    useEffect(() => {
        if (isEdit && id) {
            const product = getProductById(id);
            if (product) {
                setFormData(product);
            } else {
                setError('Product not found');
            }
        }
    }, [isEdit, id, getProductById]);

    const handleChange = (field: keyof Product, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64 = reader.result as string;
                setFormData((prev) => ({
                    ...prev,
                    coverImage: base64,
                    images: [base64, ...(prev.images || [])],
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        try {
            setLoading(true);
            setError(null);

            // Basic validation
            if (!formData.name || !formData.price) {
                throw new Error('Name and Price are required');
            }

            if (isEdit && id) {
                updateProduct(id, formData);
            } else {
                addProduct(formData as Omit<Product, 'id' | 'createdAt' | 'updatedAt'>);
            }

            navigate('/admin/products');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <DashboardContent>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 5 }}>
                <Typography variant="h4">{isEdit ? 'Edit Product' : 'New Product'}</Typography>
            </Stack>

            {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Card sx={{ p: 3 }}>
                        <Stack spacing={3}>
                            <TextField
                                label="Product Name"
                                fullWidth
                                value={formData.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                            />

                            <TextField
                                label="Description"
                                fullWidth
                                multiline
                                rows={4}
                                value={formData.description}
                                onChange={(e) => handleChange('description', e.target.value)}
                            />

                            <Typography variant="h6" sx={{ mb: 0.5 }}>Images</Typography>

                            <Box
                                sx={{
                                    p: 3,
                                    border: '1px dashed',
                                    borderColor: 'grey.500',
                                    borderRadius: 1,
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    '&:hover': { bgcolor: 'action.hover' },
                                }}
                                component="label"
                            >
                                <input
                                    type="file"
                                    hidden
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                                <Stack spacing={1} alignItems="center">
                                    <Iconify icon="eva:cloud-upload-fill" width={40} sx={{ color: 'primary.main' }} />
                                    <Typography variant="body2">Upload Image</Typography>
                                </Stack>
                            </Box>

                            {formData.coverImage && (
                                <Box
                                    component="img"
                                    src={formData.coverImage}
                                    sx={{
                                        width: '100%',
                                        height: 300,
                                        objectFit: 'cover',
                                        borderRadius: 1,
                                    }}
                                />
                            )}
                        </Stack>
                    </Card>
                </Grid>

                <Grid size={{ xs: 12, md: 4 }}>
                    <Card sx={{ p: 3 }}>
                        <Stack spacing={3}>
                            <FormControl fullWidth>
                                <InputLabel>Category</InputLabel>
                                <Select
                                    value={formData.category}
                                    label="Category"
                                    onChange={(e) => handleChange('category', e.target.value)}
                                >
                                    {Object.values(ProductCategory).map((category) => (
                                        <MenuItem key={category} value={category}>
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <TextField
                                label="Price"
                                type="number"
                                fullWidth
                                InputProps={{ startAdornment: '$' }}
                                value={formData.price}
                                onChange={(e) => handleChange('price', Number(e.target.value))}
                            />

                            <TextField
                                label="Sale Price"
                                type="number"
                                fullWidth
                                InputProps={{ startAdornment: '$' }}
                                value={formData.salePrice || ''}
                                onChange={(e) => handleChange('salePrice', e.target.value ? Number(e.target.value) : undefined)}
                            />

                            <TextField
                                label="Stock"
                                type="number"
                                fullWidth
                                value={formData.stock}
                                onChange={(e) => handleChange('stock', Number(e.target.value))}
                            />

                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={formData.status?.includes(ProductStatus.IN_STOCK)}
                                        onChange={(e) => {
                                            const newStatus = e.target.checked
                                                ? [...(formData.status || []), ProductStatus.IN_STOCK]
                                                : (formData.status || []).filter(s => s !== ProductStatus.IN_STOCK);
                                            handleChange('status', newStatus);
                                        }}
                                    />
                                }
                                label="In Stock"
                            />

                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={formData.status?.includes(ProductStatus.FEATURED)}
                                        onChange={(e) => {
                                            const newStatus = e.target.checked
                                                ? [...(formData.status || []), ProductStatus.FEATURED]
                                                : (formData.status || []).filter(s => s !== ProductStatus.FEATURED);
                                            handleChange('status', newStatus);
                                        }}
                                    />
                                }
                                label="Featured Product"
                            />

                            <LoadingButton
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                loading={loading}
                                onClick={handleSubmit}
                            >
                                {isEdit ? 'Update Product' : 'Create Product'}
                            </LoadingButton>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
        </DashboardContent>
    );
}
