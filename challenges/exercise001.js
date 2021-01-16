
function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  if (word.length > 2) {
    let firstCharacter = word.charAt(0);
    let remaining = word.slice(1);
    return firstCharacter.toUpperCase() + remaining
}
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
  else if (str.length % 2 === 1) 
  return str.charAt(str.length / 2)

else return str.substring((str.length / 2 ) - 1, str.length / 2 + 1)
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("")
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let resultWord = [];
  words.forEach(word => {
    resultWord.push(reverseWord(word))
  });
  return resultWord
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let result = 0;
  users.forEach(user => {
    if (user.type === "Linux") { result += 1 }
  })
  return result
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let totalScore = 0;
  scores.forEach(score => {
    totalScore += score;
  })
  return Math.round(totalScore / scores.length * 100) / 100
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  return n % 5 === 0 && n % 3 == 0 ? "fizzbuzz" : n % 5 === 0 ? "buzz" : n % 3 === 0 ? "fizz" : n;
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
