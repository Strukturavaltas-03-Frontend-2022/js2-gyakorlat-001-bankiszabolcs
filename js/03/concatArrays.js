const concatArrays = function (character, ...arrays) {
  const arr = [character, ...arrays].flat().map((item) => item.trimEnd());

  const uniqueArr = new Set(arr);
  const finalArr = Array.from(uniqueArr).filter(
    (element) => ![...element].includes(character)
  );
  return finalArr;
};

concatArrays("z", [
  "kacsa",
  "nokedli     ",
  "zsíroskenyér   ",
  "agyashurka  ",
  "nokedli",
]);

///---------3/B----------------
const justConcatArray = (character, ...randomArrays) => {
  return [character, ...randomArrays].flat();
};

const uniqueArray = (arr) => Array.from(new Set(arr));

const trimmedArray = (arr) => arr.map((item) => item.trim());

export default concatArrays;
