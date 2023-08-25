import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-white rounded-lg shadow-lg p-8 m-4 max-w-md w-full">
        <h1 className="text-4xl font-semibold mb-4 text-center text-red-600">
          Oops, you made a mistake
        </h1>
        <p className="text-xl text-center mb-6">
          {err.status}: {err.statusText}
        </p>
        <Link to="/">
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg w-full">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
