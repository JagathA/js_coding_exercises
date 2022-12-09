import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} from "../challenges/exercise007";

describe("sumDigits", () => {
  test("returns  a range of numbers from a start, an end and a step", () => {
    expect(sumDigits(1234)).toBe(10);
    expect(sumDigits(0)).toBe(0);
    expect(sumDigits(675)).toBe(18);
    expect(sumDigits(8605)).toBe(19);
    expect(sumDigits(8650)).toBe(19);
  });
});

describe("createRange", () => {
  test("returns  a range of numbers from a start, an end and a step", () => {
    expect(createRange(0, 6, 2)).toEqual([0, 2, 4, 6]);
    expect(createRange(10, 20, 3)).toEqual([10, 13, 16, 19]);
    expect(createRange(10, 10, 3)).toEqual([10]);
    expect(createRange(10, 9, 3)).toEqual([]);
  });

  test("returns  a range of numbers from a start, an end and a step. if stepis not defined use step =1 ", () => {
    expect(createRange(0, 6)).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });
});

describe("getScreentimeAlertList", () => {
  test("returns  screentime of a user", () => {
    const usersData = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 15, facebook: 19 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-05-02",
            usage: { mapMyRun: 41, whatsApp: 50, facebook: 0, safari: 10 },
          },
          {
            date: "2019-05-04",
            usage: { mapMyRun: 40, whatsApp: 50, facebook: 9, safari: 0 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
    ];
    expect(getScreentimeAlertList(usersData, "2019-05-02")).toEqual([
      "beth_1234",
      "sam_j_1989",
    ]);
    expect(getScreentimeAlertList(usersData, "2019-05-04")).toEqual([
      "beth_1234",
    ]);
    expect(getScreentimeAlertList(usersData, "2019-06-05")).toEqual([]);
    expect(getScreentimeAlertList(usersData, "2019-06-14")).toEqual([]);
  });
});

describe("hexToRGB", () => {
  test("transforms valid hex code into an RGB code", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    expect(hexToRGB("#FFFFFF")).toBe("rgb(255,255,255)");
    expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
  });

  test("returns null for invalid RGB code", () => {
    expect(hexToRGB("FF1133")).toBe(null);
    expect(hexToRGB("#FTFFFF")).toBe(null);
    expect(hexToRGB("#000K00")).toBe(null);
    expect(hexToRGB("#FFF1133")).toBe(null);
  });
});

describe("findWinner", () => {
    test("returns winner", () => {
      const board0WinHorizontal  = [["0", "0", "0"],[null, null, null],["0", "0", "X"] ];
      const board0WinVertical  = [["0", null, "0"],[null, "X", "0"],["0", "X", "0"] ];
      const board0WinDiagonal  = [["0", null, "0"],[null, "0", "0"],["X", "X", "0"] ];
      const boardXWinHorizontal  = [["0", null, "0"],[null, null, null],["X", "X", "X"] ];
      const boardXWinVertical  = [[null, "X", null],[null, "X", "0"],["0", "X", "0"] ];
      const boardXWinDiagonal  = [["0", null, "X"],[null, "X", "0"],["X", "X", "0"] ];
      const noOneWins = [["0", null, "0"],[null, null, null],["X", "0", "X"] ];
      const BlannkBoard = [[null, null, null],[null, null, null],[null, null, null] ];

      expect(findWinner(board0WinHorizontal)).toEqual("0");
      expect(findWinner(board0WinVertical)).toEqual("0");
      expect(findWinner(board0WinDiagonal)).toEqual("0");
      expect(findWinner(boardXWinHorizontal)).toEqual("X");
      expect(findWinner(boardXWinVertical)).toEqual("X");
      expect(findWinner(boardXWinDiagonal)).toEqual("X");
      expect(findWinner(noOneWins)).toEqual(null);
      expect(findWinner(BlannkBoard)).toEqual(null);
  
  
  });

/*   test("returns null for invalid RGB code", () => {
    expect(hexToRGB("FF1133")).toBe(null);
    expect(hexToRGB("#FTFFFF")).toBe(null);
    expect(hexToRGB("#000K00")).toBe(null);
    expect(hexToRGB("#FFF1133")).toBe(null);
  }); */
});
