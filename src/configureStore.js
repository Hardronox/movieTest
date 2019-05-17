/** @format */

import {createStore, compose, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {createBrowserHistory} from "history";
import {routerMiddleware} from "connected-react-router";
import createRootReducer from "./rootReducer";

import rootSaga from "./rootSaga";
/* eslint-env node */
export const history = createBrowserHistory();
history.listen((location) => {
  // eslint-disable-next-line
  window.scrollTo(0, 0);
});
const sagaMiddleware = createSagaMiddleware();

function configureStoreProd(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [reactRouterMiddleware, sagaMiddleware];

  const store = createStore(createRootReducer(history), initialState, compose(applyMiddleware(...middlewares)));
  sagaMiddleware.run(rootSaga);

  return store;
}

function configureStoreDev(initialState) {
  const reactRouterMiddleware = routerMiddleware(history);
  const middlewares = [reactRouterMiddleware, sagaMiddleware];

  // eslint-disable-next-line
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./rootReducer", () => {
      const nextReducer = require("./rootReducer").default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
// eslint-disable-next-line
const configureStore = process.env.NODE_ENV === "production" ? configureStoreProd : configureStoreDev;

export default configureStore;
