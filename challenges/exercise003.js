function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  if (nums.length == 0) {
    return [];
  } else {
    return (Array.from(nums, abc => abc * abc));
  }
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!

  var final = "";
  words.forEach((word, index) => {
    if (index === 0) {
      final += word.charAt(0);
    } else {
      final += word.charAt(0).toUpperCase()
    }
    final += word.slice(1);
  });

  return final;

}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  var final = 0;
  people.forEach(person => {
    if (person !== undefined || person !== null) {
      final += person.subjects.length;
    }
  });

  return final;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
