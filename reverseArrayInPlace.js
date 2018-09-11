const reverseArrayInPlace = array => {
  for (let i = 0; i < array.length / 2; i++) {
    let tempVar = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = tempVar;
  }

  return array;
};

const arrayTest = [1, 2, 3, 4, 5, 6, 8, 9, 10];

console.log(reverseArrayInPlace(arrayTest));
