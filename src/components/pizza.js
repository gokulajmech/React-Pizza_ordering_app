import React,{useContext,useEffect,useState} from 'react'
import { FoodContext } from '../App'
import {useNavigate} from 'react-router-dom';
var count=0
function Pizza() {
    let context=useContext(FoodContext);
        let navigate=useNavigate();
        let [products,setProducts]=useState([]);
        
        let getData = ()=>{
            count++;
            if(context.data.length>0 )
            {
                setProducts(context.data[0]); 
            }
            else{
                console.log('first else navigate works in pizza');
                navigate('/'); 
            }

        }
        useEffect(()=>{
            getData();      
          },[])
        //   console.log(context.data.length);
         console.log( products);
        //   console.log(count);
       if(count>=1 && context.data.length>0 && products.length===undefined )
       {
            console.log('if 2')
            //  console.log();
           return <>
          
                      
                    <div className='product-wrapper'>  
                    <h3 className='product-title'>{products.subItemsData.name}</h3>
                    {
                        products.subItemsData.subItems.map((e,i)=>{
                        return  <>
                        <div className='product-item-wrapper'key={i}>
                        <div className='product-details'>
                                       
                                        <div className='product-name'><h4>{e.name}</h4></div>
                                        <div className='product-price'>&#x20B9; {e.price}</div>
                                        <div className='product-description'>{e.description}</div>
                                        <div className='cart-btn'>
                                               <button className='btn' onClick={()=>{context.cart.push(e);
                                                                     context.setCartValue(context.cart.length);
                                                                                    }}>Order Now</button> 
                                                </div>
                            </div>
                            <div className='product-image'> <img class="image-size" src={e.image}></img></div> 
                            </div>
                            </>
                        }) 
                    }
                    </div> 
                
           </>
       }

       else{
           console.log('else2');
        navigate('/'); 
           return<>pages needs to reload!!</>
           
       }

}

export default Pizza;
