import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
	makeSelectSpecificMovie, makeSelectLoading, makeSelectError
} from "./selectors/specificMovie";
import {getSpecificMovieData} from "./actions/specificMovie";
import {createStructuredSelector} from 'reselect';


const mapDispatchToProps = (dispatch) => bindActionCreators({
	getSpecificMovieData,
}, dispatch);


const mapStateToProps = createStructuredSelector({
	specificMovie: makeSelectSpecificMovie(),
	loading: makeSelectLoading(),
	error: makeSelectError(),
});

export const connected = connect(
	mapStateToProps,
	mapDispatchToProps,
	null
);
