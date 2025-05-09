import { button, div } from 'motion/react-m';
import React, { useState } from 'react';

export const ProductDisplay = ({ product }) => {
    const images = [
        product.image,
        product.image2,
        product.image3,
        product.image4,
    ];

    const sizes = [
        'S', 'M', 'L', 'XL', 'XXL'
    ];

    const [mainImage, setMainImage] = useState(images[0]);
    const [size, setSize] = useState(null);
    return (
        <div className="min-h-screen flex gap-4 justify-center items-center">
            <div className='flex flex-col gap-4'>
                {images.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        className={`w-[80px] h-[100px] object-cover cursor-pointer border rounded  ${mainImage === img ? 'border-black' : 'border-gray-300'
                            }`}
                        onClick={() => setMainImage(img)}
                    />))
                }
            </div>
            <div>
                <img src={mainImage} alt="" className="w-[320px] h-[450px] object-cover rounded" />
            </div>
            <div className='space-y-6'>
                <h3 className="text-2xl font-semibold max-w-[500px]">{product.name}</h3>
                <div className="flex gap-2 text-base">
                    <span className="text-red-600 font-bold">${product.new_price.toFixed(2)}</span>
                    <span className="line-through text-gray-500">${product.old_price.toFixed(2)}</span>
                </div>
                <p className="text-sm font-normal max-w-[500px]">The primary purpose of descriptive writing is to describe a person, place or thing in such a way that a picture is formed in the reader's mind.</p>
                <h2>Select Size</h2>
                <div className='flex flex-row gap-2'>
                    {sizes.map((s, index) => (
                        <button
                            key={index}
                            onClick={() => setSize(s)}
                            className={`px-4 py-3  text-xs rounded transition 
                                ${size === s
                                    ? 'bg-red-500 text-white hover:bg-red-600'
                                    : 'bg-gray-200 hover:bg-gray-300'
                                }`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
                <div>
                    <button className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>Add To Cart</button>
                </div>
            </div>

        </div>
    );
};