import {createSelector} from 'reselect';
import {initialState} from '../reducers/home';

const selectHome = state => state.home || initialState;


const makeSelectMovies = () =>
	createSelector(
		selectHome,
		homeState => homeState.movies,
	);

const makeSelectLoading = () =>
	createSelector(
		selectHome,
		homeState => homeState.loading,
	);

const makeSelectError = () =>
	createSelector(
		selectHome,
		homeState => homeState.error,
	);


export {
	selectHome,
	makeSelectMovies,
	makeSelectLoading,
	makeSelectError,
};