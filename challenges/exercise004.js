function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(abc=>abc<1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let word = []
  names.forEach(element => {
    if (element.charAt(0) === char) {
      word.push(element)
    }
  })
  return word
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(word => word.substring(0, 3) === "to ");
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(num => Number.isInteger(num));
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = [];
  for (let i = 0; i < users.length; i++) {
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(abc => parseFloat(Math.sqrt(abc).toFixed(2)));
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let findsentence = [];
  sentences.forEach(element => {
    if (element.toUpperCase().indexOf(str.toUpperCase()) != (-1)) {
      findsentence.push(element);
    }
  })
  return findsentence;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let Maxside = [];
  triangles.forEach(x => {
    Maxside.push(Math.max.apply(Math, x));
  })
  return Maxside;
}
module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
