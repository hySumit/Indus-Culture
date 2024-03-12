import React, { useContext } from "react";
import { Sidebar1 } from "../Sidebar/Sidebar1";
import { RxHamburgerMenu } from "react-icons/rx"
import { Link } from "react-router-dom";
import { Context } from "../Auth/Context";

export const Navbar = ({val}) => {
  const {isAuth} = useContext(Context)
  const {name} = useContext(Context)
  return (
    <>
      <div className="flex justify-between items-center mt-[-29px]">
        <div className="logo flex items-center">
          <div>
            <Sidebar1 val={<RxHamburgerMenu  className="mt-3 text-gray-700 sidebar"/>} />
          </div>
          <h1>Indus Culture</h1>
        </div>
        <nav>
          <ul className="flex nav-ul justify-evenly items-center gap-2 btns1">
            <Link to={'/'}>Home</Link>
            <a href="#">About</a>
            <Link to={'/shop'}>Shop</Link>
            <Link to={'/cart'}>Cart </Link>
            
            <div>
              {isAuth ? (
                <h1>{name}</h1>
              ):(
                <Link to={'/login'} >Login</Link>
              )}
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};
