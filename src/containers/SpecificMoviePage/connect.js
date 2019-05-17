import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
  makeSelectError, makeSelectLoading
} from "./selectors/home";
import {getSingleMovieData} from "./actions/specificMovie";
import { createStructuredSelector } from 'reselect';

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getSingleMovieData,
}, dispatch);

// const mapStateToProps = (state) => {
//   const cartStateData = state.cart;
//   return {
//     // cartCount: selectorGetOverallRealCountFromState(cartStateData),
//     // isCartCountLoading: selectorIsCartCountLoading(cartStateData),
//   };
// };

const mapStateToProps = createStructuredSelector({
    // repos: makeSelectRepos(),
    // loading: makeSelectLoading(),
    // error: makeSelectError(),
});

export const connected = connect(
  mapStateToProps,
  mapDispatchToProps,
  null
);
