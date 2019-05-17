import {fork, all} from "redux-saga/effects";
import cartSaga from "./containers/HomePage/sagas/home";

/**
 * Combine sagas
 */
export default function* rootSaga() {
  yield all([
    fork(cartSaga),
  ]);
}
