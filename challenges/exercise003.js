import { capitalize } from "./exercise001";

export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  nums.forEach((number, index) => {
    nums[index] = number * number;
  });

  return nums;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  let camelCased = words[0];

  words.forEach((word, index) => {
    if (index > 0) {
      camelCased += capitalize(word);
    }
  });
  return camelCased;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  let numTotalSubjects = 0;
  people.forEach((person) => {
    numTotalSubjects += person.subjects.length;
  });
  return numTotalSubjects;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let ingredientFound = false;
  menu.forEach((item) => {
    item.ingredients.forEach((menuIngredient) => {
      if (menuIngredient === ingredient) {
        ingredientFound = true;
      }
    });
  });
  return ingredientFound;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  
  let duplicateNumArr = [];

  arr1.forEach((arr1Number) => {
    arr2.forEach((arr2Number) => {
      if (arr1Number === arr2Number && !duplicateNumArr.includes(arr1Number)) {
        duplicateNumArr.push(arr1Number);
      }
    });
  });
  return duplicateNumArr.sort();
}
