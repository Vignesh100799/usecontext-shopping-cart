import React, { useContext } from "react";
import Header from "./Header";
import Product from "./Product";
import "bootstrap/dist/css/bootstrap.min.css";
import Usercontext, { UserProvider } from "../context/Usercontext";

const Allproducts = () => {
  
  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Product  />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Allproducts;