const binarySearch = (numArray, key) => {
  const middleIndex = Math.floor(numArray.length / 2);
  const middleElement = numArray[middleIndex];

  if (key === middleElement) {
    return true;
  } else if (key > middleElement && numArray.length > 1) {
    return binarySearch(numArray.splice(middleIndex, numArray.length), key);
  } else if (key < middleElement && numArray.length > 1) {
    return binarySearch(numArray.splice(0, middleIndex), key);
  } else {
    return false;
  }
};

binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71, 310, 458, 756, 835], 56);
