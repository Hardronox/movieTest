import PropTypes from "prop-types";

export const ShapeRentalDatesState = PropTypes.shape({
  from: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
});
