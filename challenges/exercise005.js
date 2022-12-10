export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  let index = nums.findIndex((number) => number === n);
  if (index < 0 || index === nums.length - 1) {
    return null;
  } else {
    return nums[index + 1];
  }
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  const strArray = str.split("");

  return {
    0: strArray.filter((char) => char === "0").length,
    1: strArray.filter((char) => char === "1").length,
  };
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");

  return parseFloat(n.toString().split("").reverse().join("") * Math.sign(n));
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");

  return arrs.flat().reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  for (const key in haystack) {
    if (
      haystack[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return true;
    }
  }
  //if we get here that means serachitem has not been found
  return false;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");

  const words = str
    .replace(/[^A-Za-z0-9\s]/g, "")
    //  .replace(/\s{2,}/g, " ")
    .toLowerCase()
    .split(/\s/);

  const freqMap = {};

  words.forEach((word) => {
    if (!freqMap[word]) {
      freqMap[word] = 0;
    }
    freqMap[word] += 1;
  });

  return freqMap;
};
