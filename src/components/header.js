import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
import { FoodContext } from '../App';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header() {
    let context=useContext(FoodContext);
    return <>
            <div className="header-wrap">
                <div className='head-title'>
                    Food Ordering Portal
                </div>
                <div className='head-cart'>
                    <Link to="/cart"><ShoppingCartIcon/></Link>
                    <span className='head-cart-count'>{context.cartValue}</span>
                </div>

            </div>
    </>
}

export default Header

// for access the (Material UI)need to install npm i @emotion/core and npm i @emotion/style
