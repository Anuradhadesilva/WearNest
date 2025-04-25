import React from 'react'
import { useParams } from 'react-router-dom';
import all_product from '../Components/Assets/all_product';

export const ShopCategory = () => {
    const { category } = useParams();

    const filteredProducts = all_product.filter((product) => product.category === category)

    console.log(filteredProducts.map((product) => { return product.name; }));
    return (
        <div className="p-4">
            <h2 className="text-3xl font-bold mb-6 capitalize">{category} Collection</h2>

        </div>
    );
};
