function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  return person.city === "Manchester" ? true : false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
   return Math.ceil(people / 35)
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let final = 0
  arr.forEach(element => {
    if (element === "Sheep") {
      final += 1;
    }
  });
  return result
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  let postCode = person.address.postCode
  // check for existence of letter M in postcode
  return isNaN(postCode.charAt(1)) ? false : postCode.charAt(0) == "M" ? true : false;
  
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
