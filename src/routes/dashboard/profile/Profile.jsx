import React from 'react';
import { useGetDetailsQuery } from '../../../redux/api/userApi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const Profile = () => {
  const { id } = useSelector(state => state.auth);
  const { data } = useGetDetailsQuery({ id });
  const user = data?.data;

  

  return (
    <div className="w-full flex">
    <div className='user flex w-full justify-center items-center'>
      {user ? (
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <img
            src={user?.avatar || 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg'}
            className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-purple-600 object-cover shadow-lg"
            alt={`${user.first_name} ${user.last_name}`}
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {user.first_name} {user.last_name}
          </h1>
          <p className="text-gray-700 text-xl mb-4">{user.email}</p>
        </div>
      ) : (
        <p className="font-semibold text-2xl ml-2 font-sans text-gray-700">
          Register to enter <Link to="/auth/signup" className='text-blue-600 underline hover:text-blue-800'>Sign Up</Link>
        </p>
      )}
    </div>
  </div>
  
  );
};

export default Profile;
