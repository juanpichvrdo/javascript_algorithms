// This version of the algorithm is very inefficient
// Dont try to put a position > 49

const fibonacci = position => {
  if (position < 3) {
    return 1;
  } else {
    return fibonacci(position - 1) + fibonacci(position - 2);
  }
};

console.log(fibonacci(9));
