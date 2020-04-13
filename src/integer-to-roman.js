/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const map = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };
  let string = "";
  const array = Array.from(num + "");
  for (let idx = 0; idx < array.length; idx++) {
    const element = +array[idx];
    const mul = Math.pow(10, array.length - idx - 1);
    if (element === 0) continue;
    if (map[element * mul]) {
      console.log("go to");
      string += map[element * mul];
      continue;
    }

    if (element === 9 || element === 4) {
      let suf = mul;
      string += `${map[suf]}${map[(element + 1) * mul]}`;
      continue;
    }
    const startPt = element > 5 ? 5 : 1;
    let suf = "";
    let tar = map[startPt * mul];
    const times = element - startPt;
    for (let step = 0; step < times; step++) {
      suf += map[mul];
    }
    string += `${tar}${suf}`;
    tar = map[5 * mul];
  }

  return string;
};

// console.log(intToRoman(1994));
// console.log(intToRoman(3));
// console.log(intToRoman(61));
// console.log(intToRoman(64));
// console.log(intToRoman(10));

// if (element > 5 && element < 9) {
//     let suf = "";
//     const times = element - 5;
//     for (let step = 0; step < times; step++) {
//       suf += map[mul];
//     }
//     string += `${tar}${suf}`;
//     console.log(59, { string });
//     continue;
//   }

//   if (element < 5 && element > 3) {
//     let suf = "";
//     const times = 5 - element;
//     console.log({ times });
//     for (let step = 1; step <= times; step++) {
//       suf += map[mul];
//       console.log({ suf });
//     }
//     string += `${suf}${tar}`;
//     console.log(4, { string });
//     continue;
//   }
//   if (element > 1 && element < 4) {
//     tar = map[1];
//     const times = element;
//     let suf = "";
//     for (let step = 1; step <= times; step++) {
//       suf += map[mul];
//     }
//     string += `${suf}`;
//     continue;
//   }
