// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return (
    firstName.substring(0, 1).toUpperCase() +
    "." +
    lastName.substring(0, 1).toUpperCase()
  );
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return (
    originalPrice + parseFloat(((originalPrice * vatRate) / 100).toFixed(2))
  );
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  return (
    originalPrice - parseFloat(((originalPrice * reduction) / 100).toFixed(2))
  );
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  let position;
  let length;

  if (str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }

  return str.substring(position, position + length);
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  let newStr = "";

  for (let i = 0; i < word.length; i++) {
    newStr += word[word.length - i - 1];
  }
  return newStr;
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  for (let i = 0; i < words.length; i++) {
    words[i] = reverseWord(words[i]);
  }
  return words;
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  let numberOfLinuxUsers = 0;
  for (let i = 0; i < users.length; i++) {
    if (users[i].type == "Linux") {
      numberOfLinuxUsers++;
    }
  }
  return numberOfLinuxUsers;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  let mean = parseFloat((sum / scores.length).toFixed(2));
  return mean;
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");


  if (n % 3 !== 0 && n % 5 !== 0) {
    return n;
  } else {
    let result = "";
    if (n % 3 === 0) {
      result += "fizz";
    }
    if (n % 5 === 0) {
      result += "buzz";
    }
    return result;
  }
}
