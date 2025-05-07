import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { Item } from '../Components/Item/Item';
import { ShopContext } from '../Contexts/ShopContext';

export const ShopCategory = () => {
    const { category } = useParams();
    const { all_product } = useContext(ShopContext)

    const filteredProducts = all_product.filter((product) => product.category === category)

    console.log(filteredProducts.map((product) => { return product.name; }));
    return (
        <section className='py-10'>
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6 capitalize">{category} Collection</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {
                        filteredProducts.map((product) => (
                            <Item key={product.id} name={product.name} image={product.image} new_price={product.new_price} old_price={product.old_price} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
