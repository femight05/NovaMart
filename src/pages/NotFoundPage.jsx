import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <FaExclamationTriangle className="text-5xl text-red-500 mb-4" />
      <h1 className="text-3xl font-bold text-gray-800">Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        The page you are looking for does not exist.
      </p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
