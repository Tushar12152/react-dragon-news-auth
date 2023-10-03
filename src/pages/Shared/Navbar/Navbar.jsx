import { Link, NavLink } from "react-router-dom";
import userDefaultPicture from '../../../assets/user.png'
const Navbar = () => {
const navlink=<div className="flex gap-6">
    <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-800 underline" : "" }>Home</NavLink>

    <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-800 underline" : "" }>About</NavLink>

    <NavLink to="/career" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-red-800 underline" : "" }>Career </NavLink>


</div>

    return (
        <div className="mb-10">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navlink}
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navlink}
    </ul>
  </div>
  <div className="navbar-end flex items-center justify-center gap-6">
       <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ">
          <img className="" src={userDefaultPicture}/>
        </div>
      </label>

     <Link>
  

         <button className="btn">Log In</button>
     </Link>
   
  </div>
</div>
        </div>
    );
};

export default Navbar;