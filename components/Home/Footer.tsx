import React from 'react'

const Footer = () => {
  return (
    /* Define grid system */
    <div className='w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1
     md:grid-cols-2 lg:grid-cols-4 gap-12'>
        {/* 1st col */}
        <div>
          <h1 className='text-[25px] uppercase font-semibold text-black mb-4'>WDW Shop</h1>
          <p className='text-sm text-black opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Quaerat excepturi vel atque sequi fuga recusandae consectetur ullam magni eius dicta.</p>
          <p className='text-base mt-6 text-black opacity-80'> +33 6 78 78 78 00</p>
        </div>

        {/* 2nd  Col */}
        <div className='lg:mx-auto'>
          <h1 className='footer__title'>Information</h1>
          <p className='footer__link'>About Us</p>
        </div>
    </div>
  )
}

export default Footer