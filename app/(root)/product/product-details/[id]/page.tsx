import { getGetASingleProduct, getRelatedProduct } from '@/Request/request';
import { Product } from '@/type';
import { StarIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const ProductDetails =  async({ params }: { params: { id: string}}) => {
    const id = params.id;
    const singleproduct: Product = await getGetASingleProduct(id);
    const relatedProduct: Product[] = await getRelatedProduct(singleproduct.category)
    
    const num = Math.round(singleproduct?.rating?.rate);
    const starArray = new Array(num).fill(0);
    
    
    

  return (
    <div className='mt-20'>
        {/* define a grid system */}
        <div className='w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4'>
            {/* image */}
            <div className='col-span-3 mb-6 lg:mb-0'>
                <Image
                    src={singleproduct.image}
                    alt={singleproduct.title}
                    width={400}
                    height={400}
                />
            </div>
            {/* content */}
            <div className='col-span-4'>
                <h1 className='lg:text-3xl text-2xl font-bold text-black'>
                    {singleproduct.title}
                </h1>
                {/* Rating */}
                <div className='mt-2 flex items-center space-x-2'>
                    <div className='flex items-center'>
                            {starArray.map(() =>{
                                return (
                                    <StarIcon
                                        key={Math.random() * 5000}
                                        size={20}
                                        fill='yellow'
                                        className='text-yellow-600'
                                    />
                                );
                            })}
                    </div>
                    <p>
                        ({singleproduct?.rating.count} Reviews)
                    </p>
                </div>
                {/* Line */}
                <span className='w-4/5 bg-gray-400 h-[1.6px] rounded-lg block mt-4 opacity-20 mb-4'></span>
                {/* Price */}
                <h1 className='lg:text-6xl text-3xl md:text-4xl text-blue-950 font-bold'>
                    ${singleproduct?.price.toFixed(2)}
                </h1>
                {/* Description */}
            </div>
        </div>
    </div>  
  )
}

export default ProductDetails;