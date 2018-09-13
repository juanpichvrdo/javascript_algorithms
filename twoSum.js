const twoSum = (numArray, sum) => {
  let pairs = [];
  const hashTable = [];

  for (let i = 0; i < numArray.length; i++) {
    let currNum = numArray[i];
    let counterPart = sum - currNum;

    if (hashTable.indexOf(counterPart) > -1) {
      pairs = [...pairs, [currNum, counterPart]];
    }
    hashTable.push(currNum);
  }
  return pairs;
};

const array = [1, 6, 4, 5, 3, 3];

twoSum(array, 7);
