import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../../Contexts/ShopContext';

export const ProductDisplay = ({ product }) => {
    const images = [product.image, product.image2, product.image3, product.image4];
    const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

    const [mainImage, setMainImage] = useState(images[0]);
    const [size, setSize] = useState(null);
    const { addToCart } = useContext(ShopContext);

    useEffect(() => {
        setMainImage(product.image);
    }, [product]);

    return (
        <div className="flex flex-col items-center px-4 md:px-8">
            <div className="flex flex-col lg:flex-row gap-6 mt-6 w-full max-w-screen-lg">
                {/* Thumbnail Images */}
                <div className="flex lg:flex-col gap-3 justify-center items-center">
                    {images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            className={`w-[70px] h-[86px] object-cover cursor-pointer border rounded ${mainImage === img ? 'border-black' : 'border-gray-300'}`}
                            onClick={() => setMainImage(img)}
                        />
                    ))}
                </div>

                {/* Main Image */}
                <div className="flex justify-center">
                    <img src={mainImage} alt="" className="w-full max-w-[320px] h-auto object-cover rounded" />
                </div>

                {/* Product Info */}
                <div className="flex-1 space-y-4 overflow-y-auto">
                    <h3 className="text-2xl font-semibold">{product.name}</h3>
                    <div className="flex gap-2 text-base">
                        <span className="text-red-600 font-bold">${product.new_price.toFixed(2)}</span>
                        <span className="line-through text-gray-500">${product.old_price.toFixed(2)}</span>
                    </div>
                    <p className="text-sm font-normal text-gray-700">
                        The primary purpose of descriptive writing is to describe a person, place or thing in such a way that a picture is formed in the reader's mind.
                    </p>

                    {/* Size selection */}
                    <div className="space-y-2">
                        <h2 className="text-sm font-medium">Select Size</h2>
                        <div className="flex gap-2 flex-wrap">
                            {sizes.map((s, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSize(s)}
                                    className={`px-4 py-2 text-xs rounded transition ${size === s
                                        ? 'bg-red-500 text-white hover:bg-red-600'
                                        : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <div>
                        <button
                            onClick={() => addToCart(product.id)}
                            className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Add To Cart
                        </button>
                    </div>

                    {/* Product Tags */}
                    <div className="text-sm space-y-1">
                        <p><strong>Category:</strong> {product.category.toUpperCase()}, T-Shirt</p>
                        <p><strong>Tags:</strong> Modern, Latest</p>
                    </div>
                </div>
            </div>

            {/* Description & Reviews */}
            <div className="mt-10 w-full max-w-screen-lg border border-gray-200 rounded p-4">
                <div className="flex gap-4 flex-wrap mb-4 text-sm font-semibold">
                    <span className="cursor-pointer">Description</span>
                    <span className="cursor-pointer">Reviews (20)</span>
                </div>
                <p className="text-sm text-gray-700">
                    Experience unparalleled comfort and contemporary style with our premium {product.category.toLowerCase()} – a perfect blend of fashion and function.
                    Crafted from high-quality materials, this T-Shirt features a classic fit, breathable fabric, and a timeless design suited for any casual occasion.
                </p>
            </div>
        </div>
    );
};
