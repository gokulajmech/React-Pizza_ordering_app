import React ,{useContext,Fragment}from 'react'
import { FoodContext } from '../App'
import {Link} from 'react-router-dom';
function Home() {
    let context=useContext(FoodContext);
    
    
    return  <div className='home-wrapper'>
        {

            context.data.map((e,i)=>{
            return <Fragment key={i}>
                    <Link to={`/`+e.name.toLowerCase()}>
                        <div className='home-item-wrapper'>
                            <img className="home-item-image" src={e.image}></img>
                            <div className='home-item-name'>{e.name.toUpperCase()}</div>
                        </div>
                    </Link>
                </Fragment>
            })
        }
    </div>
}

export default Home
