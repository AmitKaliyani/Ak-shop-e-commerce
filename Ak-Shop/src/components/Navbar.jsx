import { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { Link, NavLink, Outlet } from "react-router";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/cartSlice";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const cartItems = useSelector(selectCartItems)

  useEffect(() => {
    
    if (sessionStorage.getItem("cred") !== null) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("cred");
    setIsLoggedIn(false); 
    toast.success("LoggedOut successfully")
  };
   
  const handleClick = () => {
    setToggleMenu(!toggleMenu)
  }

  return (
    <>
      <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ak's Store</h1>

          <div className="md:hidden flex items-center gap-4">
            <Link to='/cart' className="relative cursor-pointer">
              <FiShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            </Link>

            <div onClick={() => setToggleMenu(!toggleMenu)}>
              {toggleMenu ? <HiXMark size={24} /> : <HiBars3 size={24} />}
            </div>
            {toggleMenu && (
          <ul className=" flex flex-col items-center bg-gray-800 text-lg p-4 gap-4 absolute top-16 left-0  text-white w-full py-4 text-center md:hidden transition-all duration-300">
            <NavLink
              to={"/home"}
              onClick={handleClick}
              className={({ isActive }) =>
                isActive ? "text-red-500" : "cursor-pointer hover:text-gray-400"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              onClick={handleClick}
              className={({ isActive }) =>
                isActive ? "text-red-500" : "cursor-pointer hover:text-gray-400"
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/products"}
              onClick={handleClick}
              className={({ isActive }) =>
                isActive ? "text-red-500" : "cursor-pointer hover:text-gray-400"
              }
            >
              Products
            </NavLink>
            <NavLink
              to={"/contact"}
              onClick={handleClick}

              className={({ isActive }) =>
                isActive ? "text-red-500" : "cursor-pointer hover:text-gray-400"
              }
            >
              Contact Us
            </NavLink>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 w-full text-center"
              >
                Logout
              </button>
            ) : (
              <>
                <NavLink
                  to={"/register"}
              onClick={handleClick}
                  className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600 w-full text-center"
                >
                  Register
                </NavLink>
                <NavLink
                  to={"/login"}
              onClick={handleClick}
                  className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 w-full text-center"
                >
                  Login
                </NavLink>
              </>
            )}
          </ul>
        )}
          </div>

          <ul className="hidden md:flex gap-6 text-lg">
            <NavLink
              to={"/home"}
             
              className={({ isActive }) =>
                isActive ? "text-red-500" : "cursor-pointer hover:text-gray-400"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
             
              className={({ isActive }) =>
                isActive ? "text-red-500" : "cursor-pointer hover:text-gray-400"
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                isActive ? "text-red-500" : "cursor-pointer hover:text-gray-400"
              }
            >
              Products
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? "text-red-500" : "cursor-pointer hover:text-gray-400"
              }
            >
              Contact Us
            </NavLink>
          </ul>

          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <NavLink
                  onClick={handleLogout}
                  className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to={"/register"}
                  className="bg-green-500 px-4 py-2 rounded-md hover:bg-green-600"
                >
                  Register
                </NavLink>
                <NavLink
                  to={"/login"}
                  className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Login
                </NavLink>
              </>
            )}
            <Link to='/cart'  className="relative cursor-pointer">
              <FiShoppingCart size={32} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            </Link>
          </div>
        </div>

      
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;




