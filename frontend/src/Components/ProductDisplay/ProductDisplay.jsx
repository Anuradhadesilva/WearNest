import React, { useEffect, useState } from 'react';
import { Item } from '../Item/Item';
import data_product from '../Assets/data_product';

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

    useEffect(() => {
        setMainImage(product.image)
    }, [product]);

    return (
        <div className="flex flex-col items-center justify-center ">
            <div className='flex gap-8 flex-wrap justify-center items-center mt-6'>
                <div className='flex flex-col gap-4'>
                    {images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            className={`w-[80px] h-[100px] object-cover cursor-pointer border rounded ${mainImage === img ? 'border-black' : 'border-gray-300'}`}
                            onClick={() => setMainImage(img)}
                        />
                    ))}
                </div>
                <div>
                    <img src={mainImage} alt="" className="w-[320px] h-[450px] object-cover rounded" />
                </div>
                <div className='space-y-6 h-[450px] overflow-y-auto'>
                    <h3 className="text-2xl font-semibold max-w-[500px]">{product.name}</h3>
                    <div className="flex gap-2 text-base">
                        <span className="text-red-600 font-bold">${product.new_price.toFixed(2)}</span>
                        <span className="line-through text-gray-500">${product.old_price.toFixed(2)}</span>
                    </div>
                    <p className="text-sm font-normal max-w-[500px]">The primary purpose of descriptive writing is to describe a person, place or thing in such a way that a picture is formed in the reader's mind.</p>
                    <div className='space-y-2'>
                        <h2>Select Size</h2>
                        <div className='flex flex-row gap-2 flex-wrap'>
                            {sizes.map((s, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSize(s)}
                                    className={`px-4 py-3 text-xs rounded transition ${size === s ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-200 hover:bg-gray-300'}`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <button className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>Add To Cart</button>
                    </div>
                    <div className='space-y-1'>
                        <div className='flex gap-1'>
                            <h2 className='text-sm font-semibold'>Category:</h2>
                            <h2 className='text-sm '>{product.category.toUpperCase()}, T-Shirt</h2>
                        </div>
                        <div className='flex gap-1'>
                            <h2 className='text-sm font-semibold'>Tags:</h2>
                            <h2 className='text-sm '>Modern, Latest</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 px-4 max-w-[960px] w-full border 'border-gray-300 p-4">
                <div className="flex flex-wrap gap-4 mb-4">
                    <h2 className="text-lg font-semibold border 'border-gray-300 py-2 px-4">Description</h2>
                    <h2 className="text-lg font-semibold border 'border-gray-300 py-2 px-4">Reviews (20)</h2>
                </div>
                <p className="text-sm text-gray-700">
                    Experience unparalleled comfort and contemporary style with our premium {product.category.toLowerCase()} – a perfect blend of fashion and function.
                    Crafted from high-quality materials, this T-Shirt features a classic fit, breathable fabric, and a timeless design suited for any casual occasion.
                    Whether you're out with friends or relaxing at home, this staple piece adds effortless style to your wardrobe.
                </p>
            </div>
        </div>
    );
};