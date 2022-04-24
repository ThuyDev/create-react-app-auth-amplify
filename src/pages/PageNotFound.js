import React from "react";
import { Link } from "react-router-dom";

function PageNotFound(props) {
  return (
    <div className="container text-center py-12 mx-auto">
      <h1 className="text-4xl font-semibold mb-4 dark:text-gray-200">
        Page not found
      </h1>
      <p className="text-gray-700 mb-10 dark:text-gray-300">
        Please check the URL in the address bar and try again.
      </p>
      <Link
        to="/"
        className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 tracking-wider uppercase text-sm"
      >
        &larr; Go back home
      </Link>
    </div>
  );
}

export default PageNotFound;
