
/**
 * submit form while field is in focus
 */
export function onEnterClick(e, callback) {
  const KeyID = e.keyCode;

  switch (KeyID) {
    case 13:
      callback();
      break;

    default:
      break;
  }
}

export function isEmptyObject(obj) {
  if (!obj) {
    return false;
  }
  return Object.entries(obj).length === 0 && obj.constructor === Object;
}

export function isObject(obj) {
  return typeof obj === "object" && obj != null;
}

export function IsValidJsonString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
