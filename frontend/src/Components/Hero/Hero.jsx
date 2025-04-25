import React from 'react'
import hero from '../Assets/hero_image.png'
import handIcon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'


export const Hero = () => {
    return (
        <div className='w-full h-screen bg-gradient-to-b from-pink-300 via-pink-100 to-white"'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 flex justify-center items-center p-8'>
                    <div className=' space-y-4 text-start'>
                        <h2 className='lg:text-1xl font-semibold'>NEW ARRIVAL ONLY</h2>
                        <h1 className='flex lg:text-6xl text-4xl font-semibold items-center'>new <span><img width={50} height={50} src={handIcon} alt="" /></span></h1>
                        <h1 className='lg:text-6xl text-4xl font-semibold'>Collections</h1>
                        <h1 className='lg:text-6xl text-4xl font-semibold'>for everyone</h1>
                        <button className=' flex rounded-full px-5 py-2 bg-red-700 text-white justify-center items-center gap-2 text-1xl font-serif'>Latest Collection <span><img className='w-4' src={arrow} alt="" /></span></button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
                    <img src={hero} alt="Hero" className="max-w-full object-contain lg:w-[500px] lg:h-[500px] w-[300px] h-[300px]" />
                </div>
            </div>
        </div>
    )
}
