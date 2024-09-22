import { useCreateUserMutation } from '../../../redux/api/userApi';
import { useState } from 'react';
import { notification } from 'antd';

const Create = () => {
  const [createUser] = useCreateUserMutation();
  const [name, setName] = useState('');
  const [job, setJob] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await createUser({ name, job }).unwrap();

      if (result.id) {
        notification.success({ message: 'User created successfully' });
        setName('');
        setJob('');
      }
    } catch (error) {
      notification.error({ message: 'User creation failed'});
    }
  };

  return (
    <div className="flex w-full items-center justify-center min-h-screen bg-gradient-to-r from-pink-400 to-purple-500">
  <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Create User</h2>
    <input 
      required 
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      type="text" 
      placeholder="Enter your name" 
      className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" 
    />
    <input 
      required 
      value={job} 
      onChange={(e) => setJob(e.target.value)} 
      type="text" 
      placeholder="Enter your job" 
      className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" 
    />
    <button 
      type="submit" 
      className="w-full py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-colors" 
    >
      Create
    </button>
  </form>
</div>

  );
};

export default Create;
