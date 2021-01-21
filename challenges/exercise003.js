function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if (nums.length == 0) {
    return [];
  } else {
    return (Array.from(nums, abc => abc * abc));
  }
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let final = "";
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
  let final = 0;
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
  for (let a = 0; a < menu.length; a++) {
    for (let b = 0; b < menu[a].ingredients.length; b++) {
      if (menu[a].ingredients[b] === ingredient) {
        return true;
      }
    }
  }
  return false;
}


function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  let abc = arr1.filter(x => arr2.includes(x));
  list = abc.filter(function (x, i, a) {
    return a.indexOf(x) === i;
  });
  return list.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
