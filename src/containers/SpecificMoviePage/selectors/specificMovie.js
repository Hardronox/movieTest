import {createSelector} from 'reselect';
import {initialState} from '../reducers/specificMovie';

const selectSpecificMovie = state => state.specificMovie || initialState;


const makeSelectSpecificMovie = () =>
	createSelector(
		selectSpecificMovie,
		specificMovieState => specificMovieState.specificMovie,
	);

const makeSelectLoading = () =>
	createSelector(
		selectSpecificMovie,
		specificMovieState => specificMovieState.loading,
	);

const makeSelectError = () =>
	createSelector(
		selectSpecificMovie,
		specificMovieState => specificMovieState.error,
	);


export {
	selectSpecificMovie,
	makeSelectSpecificMovie,
	makeSelectLoading,
	makeSelectError,
};