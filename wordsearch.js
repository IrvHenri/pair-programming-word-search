const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  let result;
  if (horizontalJoin.length <= 0) {
    return false;
  }
  for (l of horizontalJoin) {
    //
    let reversedWord = word.split("").reverse().join("");
    if (l.includes(word) || l.includes(reversedWord)) {
      return true;
    } else {
      let newArr = transpose(letters);
      const newArrJoin = newArr.map((nls) => nls.join(""));
      for (i of newArrJoin) {
        if (i.includes(word) || i.includes(reversedWord)) {
          return true;
        } else {
          result = false;
        }
      }
      result = false; // second loop in this block ?
    }
  }
  return result;
};

module.exports = wordSearch;

const transpose = function(letters) {
  const output = [];
  for (let i = 0; i < letters[0].length; i++) {
    const currentRow = [];
    for (let j = 0; j < letters.length; j++) {
      currentRow.push(letters[j][i]);
    }
    output.push(currentRow);
  }
  return output;
};
