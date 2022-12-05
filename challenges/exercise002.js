export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const maxPeoplePerBus = 40;
  return Math.ceil(people / maxPeoplePerBus);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let numSheep = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "sheep") {
      numSheep++;
    }
  }
  return numSheep;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if (
    person.address.postCode.substring(0, 1) === "M" &&
    person.address.city === "Manchester"
  ) {
    return true;
  } else {
    return false;
  }
}
