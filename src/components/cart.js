import React,{useContext,useEffect,useState} from 'react'
import { FoodContext } from '../App'
import {Link} from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';

function Cart() {
    let context=useContext(FoodContext);
   let [cartPrice]=useState(0);
    let handleRemove = (e)=>{
        context.cart.splice(context.cart.indexOf(e),1);
        context.setCartValue(context.cart.length);
        cartPrice-=Number(e.price);
       
    }
    
       return <>
       
                {context.cart.length?<>
                    <div className='product-wrapper'>  
                            <h3 className='product-title'>Cart Items</h3>
                            <div className='Product-item-wrapper'>
                                {
                                    context.cart.map((e,i)=>{
                                        cartPrice+=Number(e.price)
                                    return  <>
                                                <div className='product-item-wrapper'key={i}>
                                                            <div className='product-details'>
                                                        
                                                                    <div className='product-name'><h4>{e.name}</h4></div>
                                                                    <div className='product-price'>&#x20B9; {e.price}</div>
                                                                    <div className='product-description'>{e.description}</div>
                                                                    <div className='cart-btn'>
                                                                    <button className='btn' onClick={()=>handleRemove(e)}>Remove</button> 
                                                                    </div>
                                                            </div>
                                                                    <div className='product-image'> <img class="image-size" src={e.image}></img></div> 
                                                    </div>
                                            </>
                                    }) 
                                }

                            </div> 
                 
                        <div className='placeholder'>
                            <div className='Total-price'>Total Price:{cartPrice}</div>
                            <Link to='/'> <button className='place-order' onClick={()=>{context.setCart([]);
                                                                context.setCartValue(0)}}>Place Order <SendIcon style={{width:'30px',height:'40px'}}/></button></Link>
                        </div>
                     </div> 
                </>: 
                 <>your cart is Empty!</>}       
     </>
}
export default Cart

