import { section } from 'motion/react-client'
import React from 'react'
import whatsapp from '../Assets/whatsapp.png'
import instagram from '../Assets/instagram.png'
import facebook from '../Assets/facebook.png'
import pinterest from '../Assets/pinterest.png'

export const Footer = () => {
    return (
        <section className='bg-black text-white py-10 px-4'>
            <div className='flex flex-wrap justify-center gap-8 md:gap-0'>
                {/* Column 1 */}
                <div className='w-full md:w-1/4 flex flex-col space-y-2'>
                    <h2 className='text-2xl mb-4 font-bold'>Shopper</h2>
                    <h3 className='text-gray-300 text-sm'>Address: 61/2 Revatha Road, Galmangoda, Balapitiya</h3>
                    <h3 className='text-gray-300 text-sm'>Phone: +94 70 253 7147</h3>
                    <h3 className='text-gray-300 text-sm'>Email: anuradhashashimal2@gmail.com</h3>
                    <div className='flex flex-wrap gap-4'>
                        <img src={whatsapp} alt="" className=' w-[25px] rounded-md' />
                        <img src={instagram} alt="" className=' w-[25px] rounded-md' />
                        <img src={facebook} alt="" className='w-[25px] rounded-sm' />
                        <img src={pinterest} alt="" className='w-[25px] rounded-sm' />
                    </div>
                </div>

                {/* Column 2 */}
                <div className='w-full md:w-1/6 flex flex-col space-y-2'>
                    <h2 className='text-2xl mb-4'>Information</h2>
                    <h3 className='text-gray-300 text-sm'>About Us</h3>
                    <h3 className='text-gray-300 text-sm'>Privacy Policy</h3>
                    <h3 className='text-gray-300 text-sm'>Terms of Service</h3>
                </div>

                {/* Column 3 */}
                <div className='w-full md:w-1/6 flex flex-col space-y-2'>
                    <h2 className='text-2xl mb-4'>Customer Service</h2>
                    <h3 className='text-gray-300 text-sm'>Shop</h3>
                    <h3 className='text-gray-300 text-sm'>Shopping Cart</h3>
                    <h3 className='text-gray-300 text-sm'>Returns</h3>
                </div>

                {/* Column 4 */}
                <div className='w-full md:w-1/4 flex flex-col space-y-4'>
                    <h2 className='text-2xl'>Join Our Newsletter Now</h2>
                    <h3 className='text-gray-300 text-sm'>
                        Get E-mail updates about our latest shop and special offers.
                    </h3>
                    <div className='flex flex-wrap gap-2'>
                        <input
                            type="text"
                            placeholder='Enter Your Email'
                            className='p-2 w-full sm:w-auto flex-1 rounded-md text-black'
                        />
                        <button className='bg-yellow-400 px-4 py-2 rounded-md text-black font-semibold'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <div className='mt-10 text-center'>
                <hr className='border-gray-700 mb-4' />
                <h3 className='text-gray-400 text-sm'>
                    © 2025 All rights reserved | This template is made with ❤️ by Shopper
                </h3>
            </div>
        </section>
    )
}
