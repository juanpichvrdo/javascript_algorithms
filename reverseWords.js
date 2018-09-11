// My first try solution using reverse() method
const reverseWords = string => {
  const wordsArr = string.split(" ");
  const newArr = [];

  wordsArr.forEach(word => {
    const individualWordArray = word.split("");
    newArr.push(individualWordArray);
  });

  newArr.forEach(word => word.reverse());

  const reversedWords = [];

  newArr.forEach(arr => reversedWords.push(arr.join("")));

  return reversedWords.join(" ");
};

console.log(reverseWords("Resolving Problems with javascript"));

// Instructor solution

// function reverseWords(string) {
//   var wordsArr = string.split(' ')
//   var reverseWordsArray = []

//   wordsArr.forEach(word => {
//     var reversedWords = '';
//     for (var i = word.length - 1; i >= 0; i--) {
//       reversedWords += word[i]
//     }
//     reverseWordsArray.push(reversedWords)
//   })

//   return reverseWordsArray.join(' ')
// }

// reverseWords('Resolving problems in javascript')
