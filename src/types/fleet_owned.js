import PropTypes from "prop-types";
import {ShapeDataAttributeVariant} from "./shapes";

export const ShapeFleetOwnedItem = PropTypes.shape({
  model_attributes: PropTypes.arrayOf(ShapeDataAttributeVariant),
  product_attributes: PropTypes.arrayOf(ShapeDataAttributeVariant),
  model_attributes_map: PropTypes.object,
  product_attributes_map: PropTypes.object,
  product: PropTypes.object.isRequired,
  product_model: PropTypes.object.isRequired,
});

export const ShapeFleetOwnedCounts = PropTypes.shape({
  totalCounts: PropTypes.number,
  availableCount: PropTypes.number,
  rentalCount: PropTypes.number,
  unavailableCount: PropTypes.number,
});
