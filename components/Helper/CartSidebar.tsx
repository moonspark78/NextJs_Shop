import { CartItem } from '@/store/cartSlice'
import Image from 'next/image'
import React from 'react'


type Props ={
    items: CartItem[]
}

const CartSidebar = ({items}:Props) => {
  return (
    <div className='mt-6 h-full mb-6'>
        <h1 className='text-center font-bold text-lg mb-6'>
            Votre Panier
        </h1>
        {items.length == 0 && (
            <div className='flex items-center w-full h-[80%] flex-col justify-center'>
                <Image
                    src="/images/cart.svg"
                    alt='empty_cart'
                    width={200}
                    height={200}
                    className='object-cover mx-auto'
                />
                <h1 className='mt-8 text-2xl font-semibold'>Votre Panier est vide.</h1>
            </div>
        )}
        {items.length > 0 && (
            <div>
                {items.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className='pb-4 border-b-2 border-gray-300 border-opacity-60 p-4'
                        >
                            <div>
                                <Image
                                    src={}
                                    alt={}
                                    width={}
                                    height={}
                                    className='object-cover mb-4'
                                />
                            </div>

                        </div>
                    )
                })}
            </div>
        )}
    </div>
  )
}

export default CartSidebar