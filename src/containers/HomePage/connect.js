import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
	makeSelectError, makeSelectLoading, makeSelectMovies
} from "./selectors/home";
import {getMoviesData, searchMovie} from "./actions/home";
import {createStructuredSelector} from 'reselect';

const mapDispatchToProps = (dispatch) => bindActionCreators({
	getMoviesData,
	searchMovie,
}, dispatch);

// const mapStateToProps = (state) => {
//   const cartStateData = state.cart;
//   return {
//     // cartCount: selectorGetOverallRealCountFromState(cartStateData),
//     // isCartCountLoading: selectorIsCartCountLoading(cartStateData),
//   };
// };

const mapStateToProps = createStructuredSelector({
	movies: makeSelectMovies(),
	loading: makeSelectLoading(),
	error: makeSelectError(),
});

export const connected = connect(
	mapStateToProps,
	mapDispatchToProps,
	null
);
