function harmlessRansomNote(noteText, magazineText) {
  var noteArr = noteText.split(" ");
  var magazineArr = magazineText.split(" ");
  var magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) {
      magazineObj[word] = 0;
    }
    magazineObj[word]++;
  });

  var noteIsPosible = true;
  noteArr.forEach(word => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) {
        noteIsPosible = false;
      }
    } else {
      noteIsPosible = false;
    }
  });

  return noteIsPosible;
}

console.log(harmlessRansomNote("hola perros", "hola hijos de perros"));
