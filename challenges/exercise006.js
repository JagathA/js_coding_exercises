/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
  return arr
    .filter((number) => number % 3 === 0 || number % 5 === 0)
    .reduce((sum, currentValue) => sum + currentValue, 0);
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  const validDNAChar = ["C", "G", "T", "A"];

  return (
    [...str].filter((char) => validDNAChar.includes(char)).length === str.length
  );
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
  if (str === undefined) throw new Error("str is required");
  if (!isValidDNA(str)) return null;

  const complementDNA = {
    C: "G",
    G: "C",
    T: "A",
    A: "T",
  };

  return [...str].map((char) => complementDNA[char]).join("");
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
  if (n === undefined) throw new Error("n is required");

  let prime = n != 1;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");

  const matrix = [];

  for (let i = 0; i < n; i++) {
    const matrixLine = Array(n).fill(fill);
    matrix.push(matrixLine);
  }
  return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  
  let numOnDuty = 0;
  const REQUIRED_NUM_OF_STAFF = 3;
  for (const key in staff) {
    //let numOnDuty = 0;

    //console.log("**** staff",key );

    numOnDuty += 
    staff[key].rota.reduce((numOnDuty, v) => (v === day ? numOnDuty + 1 : numOnDuty), 0);
  //  console.log("***** staff",staff[key], numOnDuty  );
  }
  return (numOnDuty >= REQUIRED_NUM_OF_STAFF);

};
