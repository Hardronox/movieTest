import {put, takeEvery} from "redux-saga/es/effects";
import {
  GET_SINGLE_MOVIE_DATA_PENDING, GET_SINGLE_MOVIE_DATA_SUCCESS, GET_SINGLE_MOVIE_DATA_ERROR
} from "../../../constants/actionTypes";
import movies from '../../../fixtures/movies'
import {errorFindingMoviesMessage} from '../../../messages'


// here we're finding movie from the list by id
export function* getSpecificMovieSaga(data) {
  try {
    const response = movies;
    const movie = response.find((movie => movie.id === data.payload));

    if (movie) {
      yield put({type: GET_SINGLE_MOVIE_DATA_SUCCESS, payload: movie});
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
  yield takeEvery(GET_SINGLE_MOVIE_DATA_PENDING, getSpecificMovieSaga);
}

export default specificMovieSaga;
