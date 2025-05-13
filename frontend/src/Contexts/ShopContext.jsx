import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext();

const getDefalutCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

export const ShopContextProvider = ({ children }) => {
    const [cartItems, setcartItems] = useState(getDefalutCart());
    console.log(cartItems)

    const addToCart = (itemId) => {
        setcartItems((prev) => (
            { ...prev, [itemId]: prev[itemId] + 1 }
        ))
    }

    const removeFromCart = (itemId) => {
        setcartItems((prev) => (
            { ...prev, [itemId]: prev[itemId] - 1 }
        ))
    }

    return (
        <ShopContext.Provider value={{ all_product, cartItems, addToCart, removeFromCart }}>
            {children}
        </ShopContext.Provider>
    )
}
