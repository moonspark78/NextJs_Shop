import { CartItem } from '@/store/cartSlice'
import Image from 'next/image'
import React from 'react'


type Props ={
    items: CartItem[]
}

const CartSidebar = ({items}:Props) => {
  return (
    <div className='mt-6 h-full mb-6'>
        {/* Heading */}
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
                            {/* Cart item image */}
                            <div>
                                <Image
                                    src={item?.image}
                                    alt={item.title}
                                    width={60}
                                    height={60}
                                    className='object-cover mb-4'
                                />
                            </div>
                            <div>
                                {/* title */}
                                <h1 className='text-sm w-4/5 fond-semibold truncate'>{item?.title}</h1>
                                {/* Price */}
                                <h1 className='text-base font-bold mb-2'>${(item?.price * item?.quantity).toFixed(2)}</h1>
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