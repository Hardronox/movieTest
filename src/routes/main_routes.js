import * as React from "react";
import {Route, Switch} from "react-router-dom";

import {HomePage} from "../containers/HomePage/index";
import {SpecificMovie} from "../containers/SpecificMoviePage/index";
import {NotFoundPage} from "../containers/NotFoundPage/index";

import {
  PathHome,
  PathSpecificMovie
} from "./constants";

export const getMainRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path={PathHome} component={HomePage} />
        <Route path={PathSpecificMovie} component={SpecificMovie} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
};
