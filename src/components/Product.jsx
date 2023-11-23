import React, { useState } from "react";

import { StarFill } from "react-bootstrap-icons";
import { useContext } from "react";
import Usercontext from "../context/Usercontext";

const Product = () => {
  const {product,handleAdditem,handleRemoveitem,cartitem} = useContext(Usercontext);

  return (
    <>
      {product.map((product,index) => {
        return (
          <div key={index} className="col mb-5">
            <div className="card h-100">
              {/* Product image*/}
              <img
                className="card-img-top"
                src={product.image}
                width={200}
                height={200}
                alt="..."
              />
              {/* Product details*/}
              <div className="card-body p-4">
                <div className="text-center">
                  {/* Product name*/}
                  <h5 className="fw-bolder">{product.title}</h5>
                  {/* Product reviews*/}
                  <div className="d-flex justify-content-center small text-warning mb-2">
                    {Array.from(
                      { length: Math.round(product.rating.rate) },
                      (_, i) => (
                        <div key={i}>{product.rating ? <StarFill /> : ""}</div>
                      )
                    )}
                  </div>
                  {/* Product price*/}
                  &#36; {Math.round(product.price)}
                </div>
              </div>
              {/* Product actions*/}
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center">
            {(cartitem.some((item)=>item.id === product.id)?
            ( <button onClick={()=> handleRemoveitem(product)} className="btn btn-outline-dark mt-auto">Remove to cart</button>) :
            (<button onClick={()=> handleAdditem(product)} className="btn btn-outline-dark mt-auto">Add to cart</button>) 
            )}
          </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Product;
