import React from 'react'
import { Item } from '../Item/Item'
import data_product from '../Assets/data_product';


export const RelatedProduct = ({ product }) => {
    const relatedProduct = data_product.filter((item) => item.category === product.category && item.id !== product.id)
    return (
        <div className="max-w-5xl mx-auto px-4 text-center py-6">
            <h2 className='font-semibold text-2xl mb-5 underline'>Related Product</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {relatedProduct.slice(0, 4).map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    )
}
