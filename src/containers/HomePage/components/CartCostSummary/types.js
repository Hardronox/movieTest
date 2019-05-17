import PropTypes from 'prop-types';
import {TypeTranslationText} from "../../../../types/translations";

export const propTypes = {
  handleOnConfirmDelete: PropTypes.func,
  handleOnClickContinue: PropTypes.func.isRequired,
  handleChangeTermsOfService: PropTypes.func.isRequired,
  isContinueBtnDisabled: PropTypes.bool.isRequired,
  isCheckedTermsOfService: PropTypes.bool.isRequired,
  buttonTitle: TypeTranslationText,
  currentStep: PropTypes.string,
};

// Specifies the default values for props:
export const defaultProps = {
  isContinueBtnDisabled: true,
};
