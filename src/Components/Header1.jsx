import { Link, NavLink } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
function Header (props){
  const buttons = useSelector(state=>state.cart.buttons);
  const products = props.products;
  let items=buttons.length;
    return(
      <>
        <div className=' flex justify-between items-center mt-4 px-2 md:px-32'>
 
        <div className="flex items-center">
        <img className="w-11 md:w-12 h-auto" src="banana.jpg" alt="banana"/>

      <h1 className="ml-1 text-lg md:text-2xl ">Shopping Cart</h1>

      <nav className="ml-3.5 md:ml-82 flex space-x-1">
       <NavLink to="/" className={({ isActive }) =>(
              isActive ? "text-base md:text-2xl bg-gray-300 rounded p-1" : "text-base md:text-2xl my-auto"
            )}>Home</NavLink>

       <NavLink to="/Cart" className={({ isActive }) =>
              isActive ? "text-base md:text-2xl bg-gray-300 rounded p-1.5 mt-1" : "text-base md:text-2xl w-4 mt-1"
            }>Cart</NavLink>
       </nav>
       </div>
      <span className="text-lg md:text-2xl font-bold">Cart: {items}</span>
      </div>
         <hr className="border-t-2 border-gray-100 mt-4 md:mt-6 w-5/6 mx-auto"></hr>
         </>
    )
}
export default Header