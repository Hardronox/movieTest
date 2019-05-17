import PropTypes from "prop-types";

export const ShapeDeliveryLocationVariant = PropTypes.shape({
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired,
  location_name: PropTypes.string.isRequired,
  location_id: PropTypes.number.isRequired,
});

export const ShapeDataAttributeVariant = PropTypes.shape({
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
});
