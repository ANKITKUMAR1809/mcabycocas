import React from "react";
import { NavLink } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100 gap-4">
      <h1 className="text-4xl font-bold text-red-500">404 Not Found</h1>
      <p className="mt-4 font-semibold text-lg text-gray-700">
        The page you are looking for does not exist.
      </p>
      <div>
        <NavLink to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go to Home
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
