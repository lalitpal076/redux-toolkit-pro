import Header from "./Header"
import './App.css'; 
import { useDispatch } from "react-redux";
import FetchedProduct from './FetchedProduct'
import { useEffect, useState } from "react";

import {fetchProduct} from './redux-toolkit/productSlice'
import { useSelector } from 'react-redux';

import {addItem} from './redux-toolkit/slice'
import Cart from "./CartCard";

function App() {
    const dispatch=useDispatch();

    useEffect(() => {
      dispatch(fetchProduct());
    }, [])

    const [isCartClose,setIsCartClose]=useState(true);

    const data=useSelector((state)=>state.data)
    const products=data.item;
    console.log(data);

    const handleAddToCart = (product) => {
      dispatch(addItem(product));
    };
  return (
    <>  
  <Header cartToggle={setIsCartClose} isCartClose={isCartClose}/>
  {isCartClose?
   <div className="products-container">
      {products.map((product) => (
        <FetchedProduct
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
    :<Cart />
  }
    </>
  )
}

export default App
