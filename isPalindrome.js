const isPalindrome = string => {
  string = string.toLowerCase();
  const chararctersArr = string.split("");
  const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

  const lettersArr = [];
  chararctersArr.forEach(char => {
    if (validCharacters.indexOf(char) > -1) {
      lettersArr.push(char);
    }
  });

  if (lettersArr.join("") === lettersArr.reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("Zorra Arroz"));
