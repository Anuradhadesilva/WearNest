import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Contexts/ShopContext';
import { Breadcrum } from '../Components/Breadcrums/Breadcrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';

export const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams(); // ✅ CORRECT use

    const product = all_product.find(pdt => pdt.id === Number(productId));
    console.log(product)
    if (!product) return <div>Product not found.</div>;

    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
        </div>
    );
};