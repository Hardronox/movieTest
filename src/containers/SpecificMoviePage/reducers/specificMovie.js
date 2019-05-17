import {
  GET_MOVIE_DATA_SUCCESS, GET_MOVIE_DATA_ERROR,
  SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_ERROR,
  GET_SINGLE_MOVIE_DATA_SUCCESS, GET_SINGLE_MOVIE_DATA_ERROR
} from "../../../constants/actionTypes";
import {getReducerStatusError, getReducerStatusSuccess} from "../../../helpers/reducerHelpers";


export const initialState = {
  singleMovie: {},

  error: null,
  isLoading: false,
  isSuccess: true,
};

const specificMovieReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {

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

    default:
      return state;
  }
};

export default specificMovieReducer;
