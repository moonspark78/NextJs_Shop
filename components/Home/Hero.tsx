import React from 'react'
import { Button } from '../ui/button'

const Hero = () => {
  return (
    <div className='w-full h-[calc(100vh-12vh)] flex justify-center flex-col'>
        {/* Define Grid */}
        <div className='w-4/5 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Content */}
            <div>
                <h1 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl text-black font-bold uppercase'>
                    mega sale <span className='text-red-600'>Special</span> Offer up to
                     <span className='text-orange-500'>60%</span> off
                </h1>
                <p className='text-sm md:text-base lg:text-lg text-black text-opacity-70 mt-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, labore? Illo suscipit 
                    quis mollitia voluptates veritatis soluta ipsum, doloremque culpa perferendis dolorum.
                     Porro eum excepturi, saepe culpa quos voluptatibus officiis?
                </p>
                <div className='flex mt-6 items-center space-x-3'>
                    <Button size={"lg"} className='bg-blue-700'>
                        Show Now
                    </Button>
                    <Button size={"lg"}>
                        Explor More
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero