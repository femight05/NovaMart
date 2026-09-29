import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col py-8 items-center justify-center h-full">
      <FaExclamationTriangle className="text-8xl text-yellow-400 mb-4" />
      <h1 className="text-3xl font-bold text-gray-800">Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        The page you are looking for does not exist.
      </p>
      <button className="mt-4 bg-blue-500 hover:bg-red-500 cursor-pointer text-white font-bold py-2 px-4 rounded">
        <Link to="/">Go Back</Link>
      </button>
    </div>
  );
};

export default NotFoundPage;
