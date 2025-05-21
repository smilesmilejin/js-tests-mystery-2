export const mystery2 = (num) => {
  // dividable by 4 and 400 return true
  // dividable by 100 return false
  // if it is dividalbe by 100, it is dividable by 100
  if (num % 400 === 0 || (num % 4 === 0 && num % 100 !== 0)) {
    return true;
  }
  return false;
};
