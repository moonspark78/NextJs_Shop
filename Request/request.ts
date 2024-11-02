export async function getAllCategory(){
    const categoryRes = await fetch('https://fakestoreapi.com/products/categories')
    return categoryRes.json();
}
export async function getAllProduct(){
    const categoryRes = await fetch('https://fakestoreapi.com/products')
    return categoryRes.json();
}

export async function getGetASingleProduct(id:string){
    const singleProductRes = await fetch(`https://fakestoreapi.com/products/${id}`);
    return singleProductRes.json();
}