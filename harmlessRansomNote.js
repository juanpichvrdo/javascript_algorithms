const harmlessRansomNote = (noteText, magazineText) => {
  const noteArr = noteText.split(" ");
  const magazineArr = magazineText.split(" ");
  const magazineObj = {};

  magazineArr.forEach(word => {
    if (!magazineObj[word]) {
      magazineObj[word] = 0;
    }
    magazineObj[word]++;
  });

  let noteIsPosible = true;
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
};

console.log(harmlessRansomNote("hola amigos", "hola hijos de amigos"));
