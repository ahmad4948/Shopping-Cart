import { useState } from "react";

function Home(props){
     const products=props.products;
     const buttons=props.buttons;
     const hi=props.hi;
return(
<>
 <div className="grid grid-cols-3 mt-12 mx-auto">
    {products.map((product) => {
        const incart = buttons.includes(product.id);

         return(
        <div key={product.id} className="mx-auto mb-10 shadow-md border border-gray-300 w-90 rounded">
        <img src={product.image} alt={product.name} className="w-full h-80 rounded"/>
        <h2>{product.name}</h2>
        <span>Price: ${product.price}</span>
        {incart? 
        <button className="ml-46 bg-red-700 rounded p-1 text-white cursor-pointer mb-2 w-18" onClick={()=>hi(product.id)}>Remove</button>
        :<button className="ml-46 bg-blue-700 rounded p-1 text-white cursor-pointer mb-2" onClick={()=>hi(product.id)}>Add to Cart</button>
        }
        </div>
    );
    })}
 </div>
</>
)
}
export default Home