import { Link } from 'react-router-dom'
function Header (){
    return(
        <>
        <div className="flex mt-4">
        <img className="w-12 h-auto ml-32" src="banana.jpg" alt="banana"/>

      <h1 className="ml-2 text-2xl ">Shopping Cart</h1>
      <nav className="ml-100">
       <Link to="/" className="text-2xl">Home </Link>
       <Link to="/cart" className="text-2xl ml-16">Cart  </Link>
      </nav>
      <span className="text-2xl font-bold ml-105">Cart:</span>
      </div>
         <hr className="border-t-2 border-gray-100 mt-6 w-5/6 mx-auto"></hr>
      </>
    )
}
export default Header