import React, {useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProducttItem from './ProductItem'
const LatestCollection = () => {
    const {products} = useContext(ShopContext)
   
    const[latestProducts,setLatestProducts] =useState([])
    console.log(products)

    useEffect(()=>{
        setLatestProducts(products.slice(0,10))
    },[])
  return (
    <div className="my-10">
    <div className='text-center py-8 text-3xl'>
      <Title text1={'LATEST'} text2={'COLLECTIONS'} />
      <p className='w-3/4 m-auto text-x5 sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, inventore! Tempore et veniam ullam? Dolorem adipisci praesentium eius ea, corrupti consequuntur cumque laudantium natus exercitationem libero asperiores vero suscipit quasi.</p>
    </div>
{/* Rendering Products */}
<div className='grid grid-cols-2 sm:grid-cols3 md:grid-cols4 lg:grid-cols-5 gap-4 gap-y-6'>
{
    latestProducts.map((item,index)=>(
<ProducttItem
key = {index} 
id = {item._id} 
image={item.image} 
name={item.name} 
price={item.price}/>
    ))
}
</div>
    </div>
  )
}

export default LatestCollection
