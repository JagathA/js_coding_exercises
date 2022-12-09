import { capitalize } from "./exercise001";

export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  return nums.map((n) => n * n);
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  const camelCased = words.map((word, index) => {
    if (index > 0) {
      return capitalize(word);
    }
    return word;
  });
  return camelCased.join("");
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  return people.reduce(
    (accumulator, currentValue) => accumulator + currentValue.subjects.length,
    0
  );
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  return (
    menu.filter((item) => item.ingredients.includes(ingredient)).length > 0
  );
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  const duplicates = arr1.filter((element) => arr2.includes(element));

  const uniqueDuplicates = duplicates
    .filter((element, index) => {
      return duplicates.indexOf(element) === index;
    })
    .sort();

  return uniqueDuplicates;
}
