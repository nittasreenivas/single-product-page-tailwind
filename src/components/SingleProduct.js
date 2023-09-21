import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SingleProduct() {
  const [singleProd, setSingleProd] = useState(null);
  const [value, setValue] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetchSingleProd = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}?limit=100`);
        const data = await res.json();
        console.log("single-data::", data);
        setSingleProd(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchSingleProd();
  }, [id]);

  return (
    <section className='py-10 text-center'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10'>
        {singleProd && (
          <article className=' mt-10'>
            <h3 className='text-white font-bold text-xl mb-4 capitalize'>{singleProd.title}</h3>
            <p className='text-white text-sm mb-4 lg:text-base opacity-75'>{singleProd.description}</p>
            <h5 className='text-white font-bold'>${singleProd.price}</h5>
          </article>
        )}
        {singleProd && (
          <article className='col-span-2'>
            <img alt='' src={singleProd.images[value]}  />
            <ul className='flex flex-wrap items-start justify-start gap-5 mt-5'>
              {singleProd.images.map((image, index) => (
                <li key={index} onClick={() => setValue(index)} className={`${index === value && "border-2 border-white p-1"}`}>
                  <img alt='' src={image}  className="w-28 h-20  cursor-pointer" />
                </li>
              ))}
            </ul>
          </article>
        )}
      </div>
    </section>
  );
}

export default SingleProduct;
