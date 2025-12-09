import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';

import { fCurrency } from '../../utils/format-number';
import { Label } from '../../components/label';
import { Iconify } from '../../components/iconify';
import type { Product } from '../../types/product';
import { ProductStatus } from '../../types/product';

// ----------------------------------------------------------------------

type ProductItemProps = {
  product: Product;
  onDelete: (id: string) => void;
};

export function ProductItem({ product, onDelete }: ProductItemProps) {
  const navigate = useNavigate();
  const [open, setOpen] = useState<HTMLButtonElement | null>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleEdit = () => {
    handleCloseMenu();
    navigate(`/admin/products/${product.id}/edit`);
  };

  const handleDelete = () => {
    handleCloseMenu();
    onDelete(product.id);
  };

  const renderStatus = (
    <Stack
      direction="row"
      spacing={0.5}
      sx={{
        zIndex: 9,
        top: 16,
        left: 16,
        position: 'absolute',
      }}
    >
      {product.status.includes(ProductStatus.SALE) && (
        <Label variant="filled" color="error">
          SALE
        </Label>
      )}
      {product.status.includes(ProductStatus.NEW) && (
        <Label variant="filled" color="info">
          NEW
        </Label>
      )}
    </Stack>
  );

  const renderImg = (
    <Box
      component="img"
      alt={product.name}
      src={product.coverImage}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: 'cover',
        position: 'absolute',
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      {product.salePrice && (
        <Typography
          component="span"
          variant="body1"
          sx={{
            color: 'text.disabled',
            textDecoration: 'line-through',
            mr: 1,
          }}
        >
          {fCurrency(product.price)}
        </Typography>
      )}
      {fCurrency(product.salePrice || product.price)}
    </Typography>
  );

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {product.status.length > 0 && renderStatus}
        {renderImg}

        <IconButton
          onClick={handleOpenMenu}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 9,
            bgcolor: 'background.paper',
            '&:hover': { bgcolor: 'background.neutral' },
          }}
        >
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {product.name}
        </Link>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Stock: {product.stock}
          </Typography>
          {renderPrice}
        </Box>
      </Stack>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleEdit}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </Card>
  );
}
