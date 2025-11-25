import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {toggle} from '../store'
function Home(props){
      const dispatch = useDispatch()
      const buttons = useSelector(state=>state.cart.buttons);
      const products=props.products;

return(
<>
 <div className="grid grid-cols-3 mt-12 mx-auto">
    {products.map((product) => {
        const incart = buttons.includes(product.id);

         return(
        <div key={product.id} className="mx-auto mb-10 shadow-md border border-gray-300 w-full md:w-90 rounded">
        <img src={product.image} alt={product.name} className="md:w-full h-18 md:h-80 rounded"/>
        <h2 className="text-sm md:text-base">{product.name}</h2>
        <span className="text-sm md:text-base">Price: ${product.price}</span>
        {incart? 
        <button className="text-xs md:text-base md:ml-46 bg-red-700 rounded p-1 text-white cursor-pointer mb-2 md:w-18" onClick={()=>dispatch(toggle(product.id))}>Remove</button>
        :<button className="text-xs md:text-base md:ml-46 bg-blue-700 rounded p-1 text-white cursor-pointer mb-2" onClick={()=>dispatch(toggle(product.id))}>Add to Cart</button>
        }
        </div>
    );
    })}
 </div>
</>
)
}
export default Home