import { ShopLayout } from '../layouts/shop/shop-layout';
import { CatalogView } from '../sections/shop/product-catalog/catalog-view';

// ----------------------------------------------------------------------

export default function ShopPage() {
    return (
        <>
            <title>Shop - Rock Gear Shop</title>
            <ShopLayout>
                <CatalogView />
            </ShopLayout>
        </>
    );
}
