function Cart(props){
     const products = props.products;
     const buttons = props.buttons;
     let items=0;
     const cartitems = buttons.map(id=>products.find(p=>p.id===id));
     const total = cartitems.reduce((sum,item) =>item.price+sum,0);
    return(
       <div>
        <h1 className=" text-center mt-12 text-3xl font-bold">Cart Items: {items.length}/${total}</h1>
        <br/>
        <br/>
        {cartitems.map(p=>(
            <div className="flex ml-16 justify-between">
         <img  className="w-40 h-auto" src={p.image}/>
         <p>{p.name}</p>
         <p>{p.price}</p>
         <button>remove</button>
         </div>
        )
        )}
       </div>
    )
}
export default Cart