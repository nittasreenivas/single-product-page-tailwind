import React from 'react'
import { useState,useEffect } from 'react';
import Loading from "./Loading";
import { Link } from 'react-router-dom';
function Products() {
    const [prod,setProd] = useState([])

    const fetchProducts = async () => {
        const res = await fetch(`https://dummyjson.com/products?limit=100`)
        const data = await res.json()
        console.log("data::",data.products)
        setProd(data.products)
    }
    useEffect(() => {
     fetchProducts()
    },[])
  return (
   <>
   <section className='py-10 text-center'>
    <div className='max-w-6xl mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8 lg:grid-cols-5 lg:gap-10'>
        {!prod ? <Loading/> : (
            <>
           
                 {prod.map((p) => {
                    const {id,title,images} = p;
                    return(
                        <Link key={id} to={`/products/${id}`}>
                        <article  className='relative'>
                         <img alt='' src={images[0]} className='h-52 w-full object-cover'/>
                         <h3 className='absolute bottom-5 left-5 font-bold text-white'>{title}</h3>
                        </article>
                        </Link>
                    )
                 })}
           
            </>
        )}
    </div>
    
   </section>
   </>
  )
}

export default Products