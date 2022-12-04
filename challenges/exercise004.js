export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.filter(number => (number < 1.0));
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  return names.filter((name) => (name.substring(0,1) === char));
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here

  return words.filter((word) => (word.substring(0,3) === "to "));
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.filter((number) => (Number.isInteger(number)));
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  return users.map((user) => (user.data.city.displayName));
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.map((number) => parseFloat(Math.sqrt(number).toFixed(2)));
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here

  return sentences.filter((sentence) => 
  (sentence.toLowerCase().includes(str.toLowerCase())));
   
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here

  return triangles.map((traingle)=>traingle.reduce((a, b) => Math.max(a, b)));
}
