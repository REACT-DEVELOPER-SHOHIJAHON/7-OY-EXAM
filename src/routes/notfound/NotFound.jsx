import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-400 to-orange-500 p-6">
  <h1 className="text-[10rem] font-bold text-white mb-4 drop-shadow-md">404</h1>
  <p className="text-4xl font-semibold text-white mb-2 drop-shadow-md">Oops! Page not found</p>
  <p className="text-xl text-white mb-6 drop-shadow-md">
    The page you are looking for doesn't exist or has been moved.
  </p>
  <Link to="/" className="px-8 py-4 bg-purple-600 text-white font-medium rounded-md shadow-lg hover:bg-purple-700 transition duration-300">
    Go Back Home
  </Link>
</div>

  );
};

export default NotFound;
