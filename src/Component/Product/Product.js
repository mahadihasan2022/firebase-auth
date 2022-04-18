import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props.product);
  const { product, showCheckout } = props;
  const { name, img, price, detail } = product;
  // console.log(props);
  return (
    <div className="product sm:w-64 sm:h-64">
      <img src={img} alt=""></img>
      <div className="product-details">
        <p className="details">Name:{name}</p>
        <p className="details">price:{price}</p>
        <p className="details">Details:{detail}</p>
      </div>
      <button onClick={() => showCheckout ()} className="btn-cart">
        <p className="btn-text"> Contact</p>
        
      </button>
    </div>
    );
};

export default Product;