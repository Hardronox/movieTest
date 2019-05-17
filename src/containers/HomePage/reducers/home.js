import {
	GET_MOVIE_DATA_SUCCESS, GET_MOVIE_DATA_ERROR,
	SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_ERROR,
} from "../../../constants/actionTypes";
import {getReducerStatusError, getReducerStatusSuccess} from "../../../helpers/reducerHelpers";


export const initialState = {
	movies: [],

	error: null,
	isLoading: false,
	isSuccess: true,
};

const homeReducer = (state = initialState, action) => {
	const {type, payload} = action;
	switch (type) {

		case GET_MOVIE_DATA_SUCCESS: {
			return {
				...state,
				movies: payload,
				...getReducerStatusSuccess(),
			};
		}

		case GET_MOVIE_DATA_ERROR: {
			return {
				...state,
				userData: {
					data: {
						...state.userData.data,
					},
					...getReducerStatusError(payload),
				},
			};
		}

		case SEARCH_MOVIE_SUCCESS: {
			return {
				...state,
				movies: payload,
				...getReducerStatusSuccess(),
			};
		}

		case SEARCH_MOVIE_ERROR: {
			return {
				...state,

				...getReducerStatusError(payload),
			};
		}

		default:
			return state;
	}
};

export default homeReducer;
