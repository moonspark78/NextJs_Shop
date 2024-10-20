"use client"

import React from 'react'
import {Product} from "@/type"
import Image from 'next/image';


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
                width={100}
                height={100}
                className='w-[80%] h-[80%] object-contain'
            />
        </div>
    </div>
  )
}

export default ProductCard