import {
	GET_MOVIE_DATA_PENDING,
	SEARCH_MOVIE_PENDING,
} from "../../../constants/actionTypes";


export const getMoviesData = () => ({
	type: GET_MOVIE_DATA_PENDING,
});

export const searchMovie = (text) => ({
	type: SEARCH_MOVIE_PENDING,
	payload: text,
});
