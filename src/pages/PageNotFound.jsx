import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="h-screenheight flex justify-center items-center">
      <div>
        <p>Page not found</p>
        <Link to="/">Home page</Link>
      </div>
    </div>
  );
}

export default PageNotFound;
