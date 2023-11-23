import React, { useContext } from "react";
import Usercontext from "../context/Usercontext";

const Cartitem = () => {
  const { cartitem, handleRemoveitem,handleincrease,handleDecrease,qty } = useContext(Usercontext);
  return (
    <div>
      {cartitem.map((cartitem, index) => {
        return (
          <div
            key={index}
            className="row mb-4 d-flex justify-content-between align-items-center"
          >
            <div className="col-md-2 col-lg-2 col-xl-2">
              <img
                src={cartitem.image}
                className="img-fluid rounded-3"
                alt="Cotton T-shirt"
              />
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
              <h6 className="text-black mb-0">{cartitem.title}</h6>
              <span>{cartitem.description}</span>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
              <button className="btn px-2" onClick={()=>handleDecrease(cartitem)}>-</button>
            <span min={1}>{qty}</span>
              <button className="btn px-2" onClick={()=>handleincrease(cartitem)}>+</button>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h6 className="mb-0">&#36; {Math.round(cartitem.price)}</h6>
            </div>
            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
              <button
                className="btn btn-danger"
                onClick={() => handleRemoveitem(cartitem)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cartitem;
