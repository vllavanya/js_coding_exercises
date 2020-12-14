function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester" ;
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
  let postCode = person.address.postCode
  return isNaN(postCode.charAt(1)) ? false : postCode.charAt(0) == "M" ? true : false;
  
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
