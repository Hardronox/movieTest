
export function isEmptyObject(obj) {
  if (!obj) {
    return false;
  }
  return Object.entries(obj).length === 0 && obj.constructor === Object;
}

export function isObject(obj) {
  return typeof obj === "object" && obj != null;
}
