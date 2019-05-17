import React, {Component} from "react";
import {propTypes, defaultProps} from "./types";
import {connected} from "./connect";
import {
  CartCostSummaryContainer,
  CostSummaryButton,
  PricePart,
} from "./styled";
import {withRouter} from "react-router-dom";

class CartCostSummaryBase extends Component {
  componentDidMount() {
    const {currentStep} = this.props;
      this.props.getCostSummaryCart({currentStep});
  }

  render() {
    const {
      costSummary,
      currentLocale,
      location,
      handleChangeTermsOfService,
      isCheckedTermsOfService,
      buttonTitle,
    } = this.props;

    if (!costSummary) {
      return null;
    }
    return (
      <AppBlock blockWidth="440px" blockBackgroundColor={gentleGrey}>
        <CartCostSummaryContainer>

          {costSummary && costSummary.location_summaries ? (
            <div>
              <Accordion options={[costSummary.location_summaries]} currentLocale={currentLocale} />
            </div>
          ) : null}

          {costSummary && costSummary.transportation_cost ? (
            <PricePart>
              <div>
              </div>

            </PricePart>
          ) : null}

          {costSummary && costSummary.insurance_cost ? (
            <PricePart>
              <div>
              </div>

            </PricePart>
          ) : null}

          <PricePart>
            <div>
            </div>

          </PricePart>

          )}

          <CostSummaryButton disabled={this.props.isContinueBtnDisabled} onClick={this.props.handleOnClickContinue}>
            {buttonTitle}
          </CostSummaryButton>
        </CartCostSummaryContainer>
      </AppBlock>
    );
  }
}

export const CartCostSummary = withRouter(connected(CartCostSummaryBase));

CartCostSummary.propTypes = propTypes;
CartCostSummary.defaultProps = defaultProps;
