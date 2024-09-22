import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Nav = () => {
  const { token } = useSelector(state => state.auth)
  

  return (
    <nav className="bg-gray-800 shadow-md">
    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <Link to={"/"} className="text-2xl font-bold text-white">
        HOME
      </Link>
      <ul className="flex space-x-4">
        {
          !token ? (
            <ul className="flex space-x-4">
              <li>
                <Link to="/auth/login" className="text-gray-300 hover:text-yellow-400 transition duration-200 text-lg">
                  LOG IN
                </Link>
              </li>
              <li>
                <Link to="/auth/signup" className="text-gray-300 hover:text-yellow-400 transition duration-200 text-lg">
                  SIGN UP
                </Link>
              </li>
            </ul>
          ) : (
            <li>
              <Link to="/dashboard/profile" className="text-gray-300 hover:text-yellow-400 transition duration-200 text-lg">
                PROFILE
              </Link>
            </li>
          )
        }
      </ul>
    </div>
  </nav>
  
  );
};

export default Nav;


