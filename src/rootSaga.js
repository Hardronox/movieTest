import {fork, all} from "redux-saga/effects";
import homeSaga from "./containers/HomePage/sagas/home";
import SpecificMovieSaga from "./containers/SpecificMoviePage/sagas/specificMovie";

/**
 * Combine sagas
 */
export default function* rootSaga() {
  yield all([
    fork(homeSaga),
    fork(SpecificMovieSaga),
  ]);
}
