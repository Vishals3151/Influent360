import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="text-center">

        {/* 404 Number */}
        <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">
          404
        </h1>

        {/* Small Box */}
        <div className="bg-blue-600 text-white px-4 py-1 text-sm rounded rotate-6 inline-block mt-2">
          Page Not Found
        </div>

        {/* Message */}
        <p className="mt-6 text-gray-600 text-lg">
          Oops! The page you're looking for doesn't exist.
        </p>

        {/* Back Button */}
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </Link>

      </div>
    </div>
  );
}

export default NotFound;
