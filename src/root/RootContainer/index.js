import * as React from "react";
import {withRouter} from "react-router";

import {getMainRoutes} from "../../routes/main_routes";

export const RootContainerBase = () => {

  return (
    <div>
      {getMainRoutes()}
    </div>
  );
};

export const RootContainer = withRouter(RootContainerBase);
