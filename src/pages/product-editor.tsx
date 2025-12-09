import { CONFIG } from '../config-global';

import { ProductEditorView } from '../sections/product/view';

// ----------------------------------------------------------------------

export default function ProductEditorPage() {
    return (
        <>
            <title> {`Product Editor - ${CONFIG.appName}`}</title>
            <ProductEditorView />
        </>
    );
}
