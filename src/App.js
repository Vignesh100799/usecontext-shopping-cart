import './App.css';
import './components/Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import './components/Home'
import React, { useContext, useState } from "react";

import Footer from "./components/Footer";
import Allproducts from "./components/Allproducts";
import Cartpage from "./components/Cartpage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Popular from "./components/Popular";
import Product from "./components/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Usercontext, { UserProvider } from "./context/Usercontext";

function App() {
  


  return (
    <div className='container-fluid'>
      <div className='row'>
        <BrowserRouter>
          <UserProvider>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Allproducts />} />
              <Route path="/popular" element={<Popular />} />
              <Route path='/cart' element={<Cartpage />} />
            </Routes>
            <Footer />
          </UserProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
