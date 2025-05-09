import React from 'react'

export const Breadcrum = (props) => {
    const { product } = props;
    return (
        <div>
            Home <span className="mx-2"> &gt; </span> Shop <span className="mx-2"> &gt; </span> {product.category} <span className="mx-2"> &gt; </span> {product.name}
        </div>
    )
}
