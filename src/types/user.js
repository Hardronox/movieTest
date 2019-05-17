import PropTypes from "prop-types";

export const ShapeUserProfileDeliveryAddressData = PropTypes.shape({
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  streetAddress: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
}).isRequired;

export const ShapeUserProfileData = PropTypes.shape({
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  teamEmail: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  deliveryAddress: ShapeUserProfileDeliveryAddressData,
  deliveryType: PropTypes.string,
});
