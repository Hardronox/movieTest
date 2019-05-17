import {put, takeEvery} from "redux-saga/es/effects";
import {
	GET_MOVIE_DATA_PENDING, GET_MOVIE_DATA_SUCCESS, GET_MOVIE_DATA_ERROR,
	SEARCH_MOVIE_PENDING, SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_ERROR
} from "../../../constants/actionTypes";
import movies from '../../../fixtures/movies'
import {errorFindingMoviesMessage, errorLoadingMoviesMessage} from '../../../messages'


export function* getMoviesDataSaga() {
	try {
		const response = movies;

		if (response) {
			yield put({type: GET_MOVIE_DATA_SUCCESS, payload: response});
		} else {
			yield put({type: GET_MOVIE_DATA_ERROR, payload: errorLoadingMoviesMessage});
		}
	} catch (e) {
		yield put({type: GET_MOVIE_DATA_ERROR, payload: errorLoadingMoviesMessage});
	}
}

// in case of working with an api - here would be no filtering(just request to the server)
export function* searchMovieSaga(data) {
	try {
		const response = movies;

		const filteredResponse = response.filter((item) => {
			return (item.movie_title.indexOf(data.payload) !== -1 || item.movie_description.indexOf(data.payload) !== -1);
		});

		if (response) {
			yield put({type: SEARCH_MOVIE_SUCCESS, payload: filteredResponse});
		} else {
			yield put({type: SEARCH_MOVIE_ERROR, payload: errorFindingMoviesMessage});
		}
	} catch (e) {
		yield put({type: SEARCH_MOVIE_ERROR, payload: errorFindingMoviesMessage});
	}
}


/**
 * Connect actions to generators
 */
function* homeSaga() {
	yield takeEvery(GET_MOVIE_DATA_PENDING, getMoviesDataSaga);
	yield takeEvery(SEARCH_MOVIE_PENDING, searchMovieSaga);
}

export default homeSaga;
