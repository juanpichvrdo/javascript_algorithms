const fizzBuzz = num => {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

console.log(fizzBuzz(30));
