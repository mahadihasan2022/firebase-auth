import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './CheckOut.css'

const CheckOut = () => {

    const [products, setProducts] = useState([]);
  

  useEffect(() => {
    fetch("name.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
    return (
        <div className='checkbox pt-16'>
            <h1 className='text-center font-bold text-5xl p-8'>Our CheckOut Page</h1>
            <div className="grid">
          <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-gap-4">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
              ></Product>
            ))}
          </div>
        </div>
        </div>
    );
};

export default CheckOut;