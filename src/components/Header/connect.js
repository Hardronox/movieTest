import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
	makeSelectError, makeSelectLoading, makeSelectMovies
} from "../../containers/HomePage/selectors/home";
import {searchMovie} from "../../containers/HomePage/actions/home";
import {createStructuredSelector} from 'reselect';


const mapDispatchToProps = (dispatch) => bindActionCreators({
	searchMovie,
}, dispatch);

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
