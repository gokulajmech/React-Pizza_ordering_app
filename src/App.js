import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Pizza from './components/pizza';
import Home from './components/home';
import Cart from './components/cart';
import Burger from './components/burger';
import axios from 'axios';
import Header from './components/header';
export const FoodContext = React.createContext();

const url='http://fod-app.herokuapp.com';
function App() {
      let [data,setData]=useState([]);
      let [cart,setCart]=useState([]);
      let [cartValue,setCartValue]=useState(cart.length);

useEffect(()=>{
  getData();
},[])

let getData=async ()=>{
  let d=await axios.get(`${url}/food`);
// console.log(d.data);
setData(d.data);
}

  return (
   
    <Router>
       <FoodContext.Provider value={{url,data,cart,setCart,cartValue,setCartValue}}>
         <Header/>
      <Routes>
        <Route path='/pizza' element={<Pizza/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/burger' element={<Burger/>}></Route>
      </Routes>
      </FoodContext.Provider>
    </Router>
    
  );
}

export default App;
