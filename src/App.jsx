import { useState } from 'react'
import Header from './Components/Header1'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'
import './App.css'

function App() {

  return (
    <>
       <Header/>
       <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
       </Routes>
   </>
  )
}

export default App
