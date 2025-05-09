import { section } from 'motion/react-client'
import React from 'react'
import new_collections from '../Assets/new_collections'
import { Item } from '../Item/Item'

export const NewArrival = () => {
    return (
        <section className='py-12 '>
            <div className='max-w-7xl mx-auto'>
                <h2>New Arrivals</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
                    {new_collections.map((item) => (
                        <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    ))}
                </div>
            </div>
        </section>
    )
}
