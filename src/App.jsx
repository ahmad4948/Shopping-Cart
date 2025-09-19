import { useState } from 'react'
import Header from './Components/Header1'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
import './App.css'

function App() {
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

  return (
    <>
       <Header/>
       <Routes>
      <Route path="/" element={<Home products={products}/>}/>
      <Route path="/cart" element={<Cart/>}/>
       </Routes>
   </>
  )
}

export default App
