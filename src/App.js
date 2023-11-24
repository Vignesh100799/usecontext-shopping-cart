import './App.css';
import './components/Product'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import './components/Home'

import Footer from "./components/Footer";
import Allproducts from "./components/Allproducts";
import Cartpage from "./components/Cartpage";
import Navbar from "./components/Navbar";
import Popular from "./components/Popular";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/Usercontext";

function App() {



  return (
    
        <BrowserRouter>
          <UserProvider>
            <Navbar />
            <Routes>
             
                  <Route path="/" element={<Allproducts />} />
                
              <Route path="/popular" element={<Popular />} />
              <Route path='/cart' element={<Cartpage />} />
            </Routes>
            <Footer />
          </UserProvider>
        </BrowserRouter>
    
  );
}

export default App;
