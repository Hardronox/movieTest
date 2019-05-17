import * as React from "react";
import {ConnectedRouter} from "connected-react-router";
import "react-toastify/dist/ReactToastify.css";
import {RootContainer} from "./RootContainer/index";
import {history} from "./../configureStore";

export const App = (props) => {
  return (
      <div className="App">
        <ConnectedRouter history={history}>
          <RootContainer parentProps={props} />
        </ConnectedRouter>
      </div>
  );
};

