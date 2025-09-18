function Home(){
    const products = [
  {
    id: 1,
    name: "Sony Wh-Ch510 Bluetooth Wireless",
    price: 149,
    image: "sony.jpg"
  },
  {
    id: 2,
    name: "boAt Rockerz 450",
    price: 49,
    image: "boat.jpg"
  },
  {
    id: 3,
    name: "JBL Tune 760NC",
    price: 179,
    image: "jbl.jpg"
  },
  {
    id: 4,
    name: "Logitech H111 Wired",
    price: 39,
    image: "logitech.jpg"
  },
  {
    id: 5,
    name: "APPLE Airpods Max Bluetooth Headset",
    price: 199,
    image: "apple.jpg"
  },
  {
    id: 6,
    name: "ZEBRONICS Zeb-Thunder Wired",
    price: 29,
    image: "zebronics.jpg"
  }
]
return(
<>
 <div className="grid grid-cols-3 mt-12 mx-auto">
    {products.map((product) => (
        <div key={product.id} className="mx-auto mb-10">
        <img src={product.image} alt={product.name} className="w-80 h-80"/>
        <h2>{product.name}</h2>
        <span>Price: ${product.price}</span>
        <button className="ml-42 bg-blue-500 rounded p-1 text-white cursor-pointer">Add to Cart</button>
        </div>
    ))}
 </div>
</>
)
}
export default Home