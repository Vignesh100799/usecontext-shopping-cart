import React, { useContext } from 'react'
import Usercontext from '../context/Usercontext'
import { StarFill } from "react-bootstrap-icons";


const Popular = () => {
  const {product,handleAdditem,handleRemoveitem,cartitem} = useContext(Usercontext);

  return (
    <div>
         <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
{
    product.map((product)=>{ 
        {
           if(product.rating.rate >= 4){
            return (
                <div className="col mb-5">
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
                        <div>{product.rating ? <StarFill /> : ""}</div>
                      )
                    )}
                  </div>
                  {/* Product price*/}
                  &#36; {product.price}
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
            )
           } 
        } 
    })
}
    </div>
    </div>
    </section>
    </div>
  )
}

export default Popular
