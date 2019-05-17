import {isObject} from "../servises/utils";
import {numberWithDots} from "./numberToString";


function checkProductFormat(product) {
  if (!product || isObject(product) === false) {
    return false;
  }
  return true;
}

export const getCartRentalFrom = (product) => {
  if (!checkProductFormat(product)) {
    return null;
  }
  if (!product.rental_from) {
    return null;
  }
  return new Date(product.rental_from);
};

export const getCartRentalTo = (product) => {
  if (!checkProductFormat(product)) {
    return null;
  }
  if (!product.rental_to) {
    return null;
  }
  return new Date(product.rental_to);
};
