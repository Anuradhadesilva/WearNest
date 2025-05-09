import React from 'react'
import { Link } from 'react-router-dom'


export const Item = ({ id, name, image, old_price, new_price }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center space-y-3 hover:scale-105 transition-all">
            <Link to={`/product/${id}`}>
                <img src={image} alt={name} className="object-contain" />
            </Link>
            <h3 className="text-lg font-semibold text-center">{name}</h3>
            <div className="flex gap-2 text-base">
                <span className="text-red-600 font-bold">${new_price.toFixed(2)}</span>
                <span className="line-through text-gray-500">${old_price.toFixed(2)}</span>
            </div>
        </div>
    )
}
