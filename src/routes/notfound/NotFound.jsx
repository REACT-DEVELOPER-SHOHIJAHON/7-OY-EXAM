import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-400 to-orange-500 p-6">
      <h1 className="text-[10rem] font-bold text-white mb-4 drop-shadow-md">404</h1>
      <p className="text-4xl font-semibold text-white mb-2 drop-shadow-md">Page not found</p>
    </div>
  );
};

export default NotFound;



