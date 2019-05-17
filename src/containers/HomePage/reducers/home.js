import {
	GET_MOVIE_DATA_SUCCESS, GET_MOVIE_DATA_ERROR,
	SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_ERROR,
	GET_SINGLE_MOVIE_DATA_SUCCESS, GET_SINGLE_MOVIE_DATA_ERROR
} from "../../../constants/actionTypes";
import {getReducerStatusError, getReducerStatusPending, getReducerStatusSuccess} from "../../../helpers/reducerHelpers";


export const initialState = {
	movies: [],
	singleMovie: {},

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

		case GET_SINGLE_MOVIE_DATA_SUCCESS: {
			return {
				...state,
				movies: payload,
				...getReducerStatusSuccess(),
			};
		}

		case GET_SINGLE_MOVIE_DATA_ERROR: {
			return {
				...state,
				...getReducerStatusError(payload),
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
				userData: {
					data: {
						...state.userData.data,
						firstName: payload.user_data && payload.user_data.first_name ? payload.user_data.first_name : null,
						deliveryLocations: payload.user_data && payload.user_data.locations ? payload.user_data.locations : [],
					},
					...getReducerStatusSuccess(),
				},
			};
		}

		case SEARCH_MOVIE_ERROR: {
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

		default:
			return state;
	}
};

export default homeReducer;
