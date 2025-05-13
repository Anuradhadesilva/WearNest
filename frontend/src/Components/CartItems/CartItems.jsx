import React, { useContext } from 'react'
import { ShopContext } from '../../Contexts/ShopContext'

export const CartItems = () => {
    const { all_product, removeFromCart, cartItems } = useContext(ShopContext)
    const cartProducts = all_product.filter(product => cartItems[product.id] > 0);
    const subTotal = cartProducts.reduce((total, product) => {
        return total + product.new_price * cartItems[product.id];
    }, 0);

    const shipping = subTotal > 0 ? 30 : 0;
    const grandTotal = subTotal + shipping;

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6">Your Shopping Cart</h2>

            {cartProducts.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <table className="w-full border border-gray-300 md:text-sm  text-xs">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-2 border">Product</th>
                                <th className="p-2 border">Title</th>
                                <th className="p-2 border">Price</th>
                                <th className="p-2 border">Quantity</th>
                                <th className="p-2 border">Total</th>
                                <th className="p-2 border">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartProducts.map(product => (
                                <tr key={product.id} className="text-center">
                                    <td className="p-2 border">
                                        <img src={product.image} alt={product.name} className="w-16 h-20 object-cover mx-auto" />
                                    </td>
                                    <td className="p-2 border">{product.name}</td>
                                    <td className="p-2 border">${product.new_price.toFixed(2)}</td>
                                    <td className="p-2 border">{cartItems[product.id]}</td>
                                    <td className="p-2 border">
                                        ${(product.new_price * cartItems[product.id]).toFixed(2)}
                                    </td>
                                    <td className="p-2 border">
                                        <button
                                            onClick={() => removeFromCart(product.id)}
                                            className="text-red-500 hover:underline"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className='mt-6 max-w-[400px] w-full'>
                        <h2 className='md:text-xl text-lg font-bold'>Cart Totals</h2>
                        <div className="mt-4 space-y-2">
                            <div className="flex justify-between">
                                <span className=" md:text-lg text-md" >Subtotal:</span>
                                <span className="font-semibold md:text-lg text-md">${subTotal.toFixed(2)}</span>
                            </div>
                            <hr />
                            <div className='flex justify-between'>
                                <span className=" md:text-lg text-md">Shipping:</span>
                                <span className="font-semibold md:text-lg text-md">${shipping.toFixed(2)}</span>
                            </div>
                            <hr />
                            <div className='flex justify-between'>
                                <span className=" md:text-lg text-md">Total:</span>
                                <span className="font-semibold md:text-lg text-md">${grandTotal.toFixed(2)}</span>
                            </div>
                            <div className='flex '>
                                <button className="mt-3 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
