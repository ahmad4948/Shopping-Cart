function Cart(props){
     const products = props.products;
     const buttons = props.buttons;
     const hi = props.hi;
     let items=0;
     const cartitems = buttons.map(id=>products.find(p=>p.id===id));
     const total = cartitems.reduce((sum,item) =>item.price+sum,0);
    return(
       <div>
        <h1 className=" text-center mt-12 text-3xl font-bold">Cart Items: {cartitems.length}/${total}</h1>
        <br/>
        <br/>
        {cartitems.map(p=>(
            <div className="flex justify-between ml-48 max-w-6xl shadow-md rounded mb-8 border border-gray-300 border-solid h-40">
         <img  className="w-auto h-full" src={p.image}/>
         <span className="my-auto ml-8">{p.name}</span>
         <span className="my-auto ml-80">${p.price}</span>
         <button className="bg-red-700 cursor-pointer h-8 rounded my-auto text-white p-1 mr-6 ml-80" onClick={()=>hi(p.id)}>Remove</button>
         </div>
        )
        )}
       </div>
    )
}
export default Cart