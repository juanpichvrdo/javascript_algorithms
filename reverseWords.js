// My first try solution using reverse() method
function reverseWords(string) {
  var wordsArr = string.split(" ");
  var newArr = [];

  wordsArr.forEach(word => {
    var individualWordArray = word.split("");
    newArr.push(individualWordArray);
  });

  newArr.forEach(word => word.reverse());

  var reversedWords = [];

  newArr.forEach(arr => reversedWords.push(arr.join("")));

  return reversedWords.join(" ");
}

reverseWords("Resolving Problems with javascript");

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
