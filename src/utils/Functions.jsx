// check if object is empty
export const isEmpty = (obj) => {
  if (obj === null || obj === undefined) return !obj;
  else if (typeof obj === "string" || Array.isArray(obj))
    return obj.length === 0;
  else if (typeof obj === 'number') return isNaN(obj);
  else if (typeof obj === "object") return Object.keys(obj).length === 0;
  else return !obj;
};

// convert string to boolean
export const strToBool = (str) => {
  if (str.toUpperCase() === "TRUE") return true;
  else if (str.toUpperCase() === "FALSE") return false;
  else return undefined;
}