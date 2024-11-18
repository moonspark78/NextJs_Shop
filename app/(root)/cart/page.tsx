"use client";

import { RootState } from '@/store/store';
import React from 'react'
import { useSelector } from 'react-redux';

const Cart = () => {

    // Get our Cart items
    const items = useSelector((state: RootState) => state.cart.items);
    // Calculating Total Quantity
    const totalQuantity = items.reduce((total,item) => total + item.quantity, 0);
    // Calculate the total price
    const totalPrice = items
        .reduce((total,item) => total + item.price * item.quantity, 0)
        .toFixed(2);
    
    // Calculate Vat (15%)
    const vat = (+totalPrice * 0.15).toFixed(2);
    // total Price with Vat
    const totalPriceWithVat = (+totalPrice + +vat).toFixed(2);

    console.log({totalPrice, vat, totalPriceWithVat});
    

  return (
    <div>Cart</div>
  )
}

export default Cart


