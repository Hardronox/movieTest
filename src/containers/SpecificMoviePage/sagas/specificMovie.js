import {put, takeEvery} from "redux-saga/es/effects";
import {
  GET_SINGLE_MOVIE_DATA_PENDING, GET_SINGLE_MOVIE_DATA_SUCCESS, GET_SINGLE_MOVIE_DATA_ERROR
} from "../../../constants/actionTypes";
import movies from '../../../fixtures/movies'
import {errorFindingMoviesMessage} from '../messages'


export function* getSingleMovieSaga(data) {
  try {
    const response = movies;
    console.log(response);

    if (response) {
      yield put({type: GET_SINGLE_MOVIE_DATA_SUCCESS, payload: response});
    } else {
      yield put({type: GET_SINGLE_MOVIE_DATA_ERROR, payload: errorFindingMoviesMessage});
    }
  } catch (e) {
    yield put({type: GET_SINGLE_MOVIE_DATA_ERROR, payload: errorFindingMoviesMessage});
  }
}

/**
 * Connect actions to generators
 */
function* specificMovieSaga() {
  yield takeEvery(GET_SINGLE_MOVIE_DATA_PENDING, getSingleMovieSaga);
}

export default specificMovieSaga;
