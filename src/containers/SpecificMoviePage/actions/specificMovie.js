import {
	GET_SINGLE_MOVIE_DATA_PENDING,
} from "../../../constants/actionTypes";


export const getSpecificMovieData = (id) => ({
	type: GET_SINGLE_MOVIE_DATA_PENDING,
	payload: id,
});
