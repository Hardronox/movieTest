import {connect} from "react-redux";
import {bindActionCreators} from "redux/index";
import {selectorGetCostSummary} from "../../selectors/home";
import {getCostSummaryCart} from "../../actions/home";

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getCostSummaryCart,
    },
    dispatch
  );

const mapStateToProps = (state) => {
  const cartStateData = state.cart;
  const generalStateData = state.general;

  return {
    costSummary: selectorGetCostSummary(cartStateData),
  };
};

export const connected = connect(
  mapStateToProps,
  mapDispatchToProps,
  null
);
