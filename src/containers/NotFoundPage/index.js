import React from "react";

import {PathHome} from "../../routes/constants";
import {Link} from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>

      <Link to={PathHome}>
        Go to Homepage
      </Link>
    </div>
  );
};
