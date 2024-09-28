import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from '../Helper/SearchBox'
import { HeartIcon, UserIcon } from 'lucide-react'
import ShoppingCartButton from '../Helper/ShoppingCartButton'

const Nav = () => {
  return (
    <div className='h-[12vh] sticky top-0 z-[1] bg-white shadow-md'>
        <div className='flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full'>
            {/* Logo */}
            <Link href="/">
                <Image src="/images/logo.png" alt='logo' width={140} height={140}/>
            </Link>
            {/* icon */}
            <div className='flex items-center space-x-6'>
              {/* SearchBox */}
                <SearchBox/>
                <HeartIcon size={20} cursor={"pointer"}/>
                {/* ShoppingCartButton */}
                  <ShoppingCartButton/>
                {/* UserIcon */}
                  <UserIcon cursor={"pointer"}  size={20}/>
            </div>
        </div>
    </div>
  )
}

export default Nav