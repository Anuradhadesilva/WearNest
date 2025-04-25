import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { NewArrival } from '../Components/NewArrival/NewArrival'

export const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <NewArrival />
        </div>
    )
}
