import { useParams } from "react-router-dom";
import { useGetDetailsQuery } from "../../redux/api/userApi";

const Details = () => {
  const { id } = useParams();
  const { data } = useGetDetailsQuery({ id });
  const user = data?.data;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 p-6">
  {user ? (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-lg p-8 text-center">
      <img
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-blue-400 object-cover shadow-lg"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-3">
        {user.first_name} {user.last_name}
      </h1>
      <p className="text-gray-700 text-lg mb-5">{user.email}</p>
      <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200">
        Contact
      </button>
    </div>
  ) : (
    <p className="text-gray-500 text-xl">Loading...</p>
  )}
</div>

  );
};

export default Details;
