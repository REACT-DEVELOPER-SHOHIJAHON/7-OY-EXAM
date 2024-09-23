import { Link } from 'react-router-dom';
import { useGetUsersQuery, useDeleteUserMutation } from '../../redux/api/userApi';
import { Button, notification } from 'antd';
import { AiOutlineLoading } from 'react-icons/ai';

const Users = () => {
    const { data, isLoading: usersIsLoading } = useGetUsersQuery();
    const [deleteUser, { isSuccess }] = useDeleteUserMutation();
    const users = data?.data;

    const handleDelete = async ({ id }) => {
        await deleteUser({ id }).unwrap();
        if (isSuccess) {
            notification.success({ message: 'User deleted successfully' });
        }
    }

    return (
        <div className="container max-w-[1600px] mx-auto w-full flex items-center justify-center py-10">
            <div className="grid grid-cols-3 max-w-[1200px] gap-6 w-full px-4">
                {usersIsLoading ? (
                    <p className="flex items-center justify-center h-screen text-gray-500"></p>
                ) : users && users.length > 0 ? (
                    users.map((user) => (
                        <div 
                            to={`/details/${user.id}`} 
                            key={user.id} 
                            className="flex flex-col items-center pb-6 bg-indigo-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-300"
                        >
                            <Link to={`/details/${user.id}`} className="flex flex-col items-center w-full px-6 pt-6 pb-4">
                                <img 
                                    src={user.avatar} 
                                    alt={`${user.first_name} ${user.last_name}`} 
                                    className="w-48 h-48 mb-4 object-cover border-4" 
                                />
                                <h2 className="text-2xl font-semibold text-green-900">
                                    {user.first_name} {user.last_name}
                                </h2>
                                <p className="text-yellow-700 text-lg">{user.email}</p>
                            </Link>
                            <Button 
                                className='w-[200px] h-[45px] bg-green-500' 
                                onClick={() => handleDelete({ id: user.id })} 
                                type="primary" 
                                danger
                            >
                                Delete
                            </Button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-700">No users found</p>
                )}
            </div>
        </div>
    );
};

export default Users;


