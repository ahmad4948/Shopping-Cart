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
            <div className="flex ml-48 justify-between max-w-6xl shadow-md rounded mb-8 border border-gray-300 border-solid">
         <img  className="w-40 h-auto" src={p.image}/>
         <p className="my-auto">{p.name}</p>
         <p className="my-auto">${p.price}</p>
         <button className="bg-red-700 cursor-pointer h-8 rounded my-auto text-white p-1 mr-6" onClick={()=>hi(p.id)}>Remove</button>
         </div>
        )
        )}
       </div>
    )
}
export default Cart