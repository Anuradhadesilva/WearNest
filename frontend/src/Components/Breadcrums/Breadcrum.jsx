import React from 'react'
import { Link } from 'react-router-dom';

export const Breadcrum = (props) => {
    const { product } = props;
    return (
        <div className='mx-4 mt-2 lg:text-sm text-xs '>
            <Link to={'/'}>Home</Link>  <span className="mx-2"> &gt; </span> <Link to={'/'}>Shop</Link>  <span className="mx-2"> &gt; </span> <Link to={`/${product.category}`}>{product.category}</Link>  <span className="mx-2"> &gt; </span> {product.name}
        </div>
    )
}
