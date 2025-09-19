import { Link, NavLink } from 'react-router-dom'
function Header (){
    return(
      <>
        <div className=' flex justify-between items-center mt-4 px-32'>
 
        <div className="flex items-center">
        <img className="w-12 h-auto" src="banana.jpg" alt="banana"/>

      <h1 className="ml-2 text-2xl ">Shopping Cart</h1>

      <nav className="ml-82 flex space-x-8">
       <NavLink to="/" className={({ isActive }) =>(
              isActive ? "text-2xl bg-gray-300 rounded p-1" : "text-2xl"
            )}>Home</NavLink>

       <NavLink to="/Cart" className={({ isActive }) =>
              isActive ? "text-2xl bg-gray-300 rounded p-1.5 mt-1" : "text-2xl w-4 mt-1"
            }>Cart</NavLink>
       </nav>
       </div>
      <span className="text-2xl font-bold">Cart:</span>
      </div>
         <hr className="border-t-2 border-gray-100 mt-6 w-5/6 mx-auto"></hr>
         </>
    )
}
export default Header