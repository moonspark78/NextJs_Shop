"use client"

import React from 'react'
import {Product} from "@/type"
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from 'lucide-react';


type Props = {
    product: Product
};


const ProductCard = ({product}:Props) => {

    const num = Math.round(product.rating.rate)
    const ratingArry = new Array(num).fill(0);

  return (
    <div className='p-4'>
        <div className='w-[200px] h-[150px]'>
            <Image
                src={product.image}
                alt={product.title} 
                width={170}
                height={170}
                className='w-[80%] h-[80%] object-contain'
            />
        </div>
        <p className='mt-5 text-xs capitalize text-gray-600'>
            {product.category}
        </p>

        {/* Title */}
        <Link href={`/product/product-details/${product.id}`}>
            <h1 className='text-lg cursor-pointer hover:text-blue-900 transition-all hover:underline sm:w-full 
            sm:truncate mt-2 text-black font-semibold'>
                {product.title}
            </h1>
        </Link>

        {/* Rating */}
        <div className='flex items-center'>
           {
            ratingArry.map(() =>{
                return (
                    <StarIcon
                        key={Math.random()*1000}
                        size={20}
                        fill="yellow"
                        className='text-yellow-500'
                    />
                )
            })
           }
        </div>

    </div>
  )
}

export default ProductCard