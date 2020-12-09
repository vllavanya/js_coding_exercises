function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  if (word.length > 2) {
    let firstCharacter = word.charAt(0);
    let remaining = word.slice(1);
    return firstCharacter.toUpperCase() + remaining
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase()
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return vatRate > 0 ? Math.round(originalPrice * (vatRate / 100 + 1) * 100) / 100 : originalPrice;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let result = originalPrice - ((reduction / 100) * originalPrice)
  return Math.round(result * 100) / 100
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  return str.length % 2 === 1 ? str.charAt(str.length / 2) : str.substring(str.length / 2 - 1, str.length
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  let arrayWord = word.split("");
  arrayWord.reverse();
  //concatinating
  let result = arrayWord.join("")
  return result
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
