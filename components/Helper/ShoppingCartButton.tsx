import { ShoppingCartIcon } from 'lucide-react'
import React from 'react'

const ShoppingCartButton = () => {
  return (
    <div className='relative'>
        <span className='absolute -top-3 -right-2 w-4 h-4 bg-red-500 text-center flex items-center justify-center 
        flex-col text-[9px] text-white rounded-full'>
            6
        </span>
        <ShoppingCartIcon cursor={"pointer"} size={26}/>
    </div>
  )
}

export default ShoppingCartButton