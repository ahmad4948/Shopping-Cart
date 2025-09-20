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
        <div key={product.id} className="mx-auto mb-10">
        <img src={product.image} alt={product.name} className="w-80 h-80 rounded"/>
        <h2>{product.name}</h2>
        <span>Price: ${product.price}</span>
        {incart? 
        <button className="ml-42 bg-red-500 rounded p-1 text-white cursor-pointer" onClick={()=>hi(product.id)}>Remove</button>
        :<button className="ml-42 bg-blue-500 rounded p-1 text-white cursor-pointer" onClick={()=>hi(product.id)}>Add to Cart</button>
        }
        </div>
    );
    })}
 </div>
</>
)
}
export default Home