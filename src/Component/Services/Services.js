import React, { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import Product from "../Product/Product";
import './Services.css'

const Services = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("name.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  
  const showCheckout = () =>{
     const path = `/CheckOut`;
     navigate(path);
  }
 
  return (
    <div className="cont-cont">
      <div className=" md:p-16">
        <div className="grid">
          <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-gap-4">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                showCheckout={showCheckout}
              ></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
