import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("return the sum any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([7])).toBe(0);
    expect(sumMultiples([3])).toBe(3);
    expect(sumMultiples([5])).toBe(5);
    expect(sumMultiples([0, 3, 4, 7, 27, 9])).toBe(39);
  });

  test("return zero if no number divisiable by 3 or 5 is found ", () => {
    expect(sumMultiples([1, 7, 8, 22, 53])).toBe(0);
  });

  test("return zero if array is empty ", () => {
    expect(sumMultiples([])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("return true if it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.", () => {
    expect(isValidDNA("CGTA")).toBe(true);
    expect(isValidDNA("CTA")).toBe(true);
    expect(isValidDNA("AG")).toBe(true);
    expect(isValidDNA("G")).toBe(true);
    expect(isValidDNA("CGATGGTTCCGTACTTGA")).toBe(true);
  });

  test("return false if it is NOT avalid DNA string. A valid DNA string may contain characters C, G, T or A only.", () => {
    expect(isValidDNA("CGTYA")).toBe(false);
    expect(isValidDNA("CT8A")).toBe(false);
    expect(isValidDNA("AFG")).toBe(false);
    expect(isValidDNA("EG")).toBe(false);
    expect(isValidDNA("CGATGGTTCCGTKACTTGA")).toBe(false);
    expect(isValidDNA(" ")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("Invert a valid DNA string", () => {
    expect(getComplementaryDNA("CGTA")).toBe("GCAT");
    expect(getComplementaryDNA("C")).toBe("G");
    expect(getComplementaryDNA("CCGTTAAA")).toBe("GGCAATTT");
  });

  test("Return null string for invalid DNA string", () => {
    expect(getComplementaryDNA("CGTA")).toBe("GCAT");
    expect(getComplementaryDNA("C")).toBe("G");
    expect(getComplementaryDNA("CCGTTAAA")).toBe("GGCAATTT");
  });
});

describe("isItPrime", () => {
  test("return true/false depending on whether it is a prime number or not. ", () => {
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(2)).toBe(true);
    expect(isItPrime(3)).toBe(true);
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(5)).toBe(true);
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(11)).toBe(true);
    expect(isItPrime(55)).toBe(false);
    expect(isItPrime(1187)).toBe(true);
    expect(isItPrime(1193)).toBe(true);
    expect(isItPrime(9679)).toBe(true);
  });
});

describe("createMatrix", () => {
  test("return filled matrix. ", () => {
    expect(createMatrix(2, 1)).toEqual([
      [1, 1],
      [1, 1],
    ]);
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
  });
});

describe("areWeCovered", () => {
  test("true/false depending on whether there are enough staff scheduled for the given day. filled matrix. ", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday", "Saturday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      {
        name: "John",
        rota: ["Monday", "Tuesday", "Friday", "Saturday", "Sunday"],
      },
    ];

    expect(areWeCovered(staff, "Monday")).toBe(false);
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
    expect(areWeCovered(staff, "Friday")).toBe(false);
    expect(areWeCovered(staff, "Saturday")).toBe(true);
  });
});
