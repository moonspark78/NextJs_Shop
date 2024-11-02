import { getGetASingleProduct } from '@/Request/request';
import { Product } from '@/type';
import React from 'react'

const ProductDetails =  async({ params }: { params: { id: string}}) => {
    const id = params.id;
    const singleproduct: Product = await getGetASingleProduct(id);
    console.log(singleproduct);
    
    

  return (
    <div>ProductDetails</div>  
  )
}

export default ProductDetails;