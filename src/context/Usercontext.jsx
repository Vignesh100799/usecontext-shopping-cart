import React, { useEffect } from "react";
import axios from "axios";
import { createContext, useState } from "react";

const Usercontext = createContext();

export const UserProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [cartitem, setCartitem] = useState([]);
  const [total, setTotal] = useState(0);
  const [qty, setQty] = useState(1);

  const handleAdditem = (selectedProduct) => {
    setCartitem([...cartitem, selectedProduct]);
    setTotal(total + selectedProduct.price);
  };
  const handleRemoveitem = (itemToRemove) => {
    setCartitem(cartitem.filter((item) => item.id !== itemToRemove.id));
    setTotal(total - itemToRemove.price);
  };
  const handleincrease = (increase)=>{
    setQty(qty + 1)
    setTotal ( total + (qty * increase.price))
  }
  const handleDecrease = (decrease)=>{
    setQty(qty - 1)
    setTotal(total + (qty/ decrease.price))
  }

  useEffect(() => {
    let getData = async () => {
      try {
        const productData = await axios.get(
          `https://fakestoreapi.com/products`
        );
        setProduct([...productData.data]);
        setCartitem(cartitem);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const contextValue = {
    product,
    handleAdditem,
    handleRemoveitem,
    cartitem,
    handleincrease,
    handleDecrease,
    qty,
    total,
  };
  //  console.log(product)
  return (
    <Usercontext.Provider value={contextValue}>{children}</Usercontext.Provider>
  );
};

export default Usercontext;
