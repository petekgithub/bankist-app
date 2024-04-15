// const user = "Petek Savas Hello";
// const username = user
//   .toLowerCase()
//   .split(" ")
//   .map((name) => name[0])
//   .join();

// console.log(username);
// // // return the first letter and give to a new array
// // username.map((name) => {
// //   console.log(name[0]);
// // });

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Filter method

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(movements);
// console.log(deposits);

// const withdrawal = movements.filter((mov) => {
//   return mov < 0;
// });

// console.log(withdrawal);

// Reduce method
// const balance = movements.reduce((acc, cur) => {
//   console.log(`Iteraton ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// finding a maximum value from an array
const max = movements.reduce((acc, cur) => {
  if (acc > cur) {
    return acc;
  } else {
    return cur;
  }
}, movements[0]);
console.log(max); // 3000

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);

  const adults = humanAges.filter((age) => age >= 18);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  console.log(average);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 5]);

///////////////////////////////////////
// The Magic of Chaining Methods

// 3 data transformations all in one go

const eurToUsd = 1.1;
// PIPELINE
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const calcAverageHumanAge2 = (ages) => {
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  console.log(humanAges);
};

calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 5]);

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);
