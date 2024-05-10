/// 1 objecttt//////////////
// function separateNumberToClasses(num) {
//   let obj = {};
//   let strNum = num.toString();
//   let numberClasses = [
//     "birlar",
//     "minglar",
//     "millionlar",
//     "milliardlar",
//     "trillionlar",
//   ];
//   let j = 0;
//   for (let i = strNum.length; i >= 0; i -= 3) {
//     let firstIndex = i >= 3 ? i - 3 : i - 1;
//     let lastIndex = i === 0 ? i + 1 : i;
//     obj[numberClasses[j]] = strNum.slice(firstIndex, lastIndex);
//     j++;
//   }

//   return obj;
// }
// console.log(separateNumberToClasses(8945472985629));
// 3-objekkttt
// let obj = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };

// let result = {};

// for (let key in obj) {
//   let value = obj[key];
//   if (result[value] === undefined) {
//     result[value] = [Number(key)];
//   } else {
//     result[value].push(Number(key));
//   }
// }

// console.log(result);

// 4-objecttt
// let obj1 = { a: "aa", d: "dd" };
// let obj2 = { b: "bb", c: "cc" };
// let result = {};

// for (let key in obj1) {
//   if (!obj2[key]) result[key] = obj1[key];
// }
// for (let key in obj2) {
//   if (!obj1[key]) result[key] = obj2[key];
// }

// console.log(result);

// 7-Objecttt
// const obj = {
//   it: 20,
//   mushuk: 10,
//   sigir: 200,
//   tovuq: 2,
// };

// const arr = [];

// for (const key in obj) {
//   arr.push(key);
//   arr.push(obj[key]);
// }

// console.log(arr);

// 10-objecttt
//   let obj1 = { a: 2, b: 3, c: 4, d: 6 };
//   for (let i in obj1) {
//     obj1[i] = obj1[i] * 3;
//   }
//   console.log(obj1);
//
// 11-Objectdd
// const product = {
//   name: "Iphone 14",
//   company: {
//     name: "Apple",
//     price: "200 mlrd",
//     founder: {
//       firstName: "Steve",
//       lastName: "Jobs",
//       birthDate: 1950,
//     },
//   },
// };
// const property = Object.values(product);
// console.log(property);
// 13 - objecttt;
// function baxolar() {
//   let baxo = parseFloat(prompt("balni kiriting:"));
//   if (!isNaN(baxo)) {
//     if (baxo >= 90 && baxo <= 100) {
//       console.log("5 baxo olibsiz👍");
//     } else if (baxo >= 80 && baxo < 90) {
//       console.log("4 baxo olibsiz");
//     } else if (baxo >= 70 && baxo < 80) {
//       console.log("3 baxo olibsiz");
//     } else {
//       console.log("2 baxo olibsiz😰");
//     }
//   } else {
//     console.log("");
//   }
// }

// baxolar();

// / 14 objectt
// let isPassed = 70;
// let score = +prompt("");
// if (score >= isPassed) {
//   console.log(true);
// } else {
//   console.log(false);
// }
