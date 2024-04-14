const dogsKate = [
  {
    dogNum: 1,
    age: 5,
  },
  {
    dogNum: 2,
    age: 3,
  },
  {
    dogNum: 3,
    age: 2,
  },
  {
    dogNum: 4,
    age: 1,
  },
  {
    dogNum: 5,
    age: 6,
  },
];

const dogsJulia = [
  {
    dogNum: 1,
    age: 5,
  },
  {
    dogNum: 2,
    age: 3,
  },
  {
    dogNum: 3,
    age: 2,
  },
  {
    dogNum: 4,
    age: 1,
  },
  {
    dogNum: 5,
    age: 6,
  },
];

// // shallow copy
// const _dogsJulia = [
//   {
//     owner: "eco",
//     age: 5,
//   },
//   {
//     owner: "pop",
//     age: 3,
//   },
//   {
//     owner: "kanye",
//     age: 2,
//   },
//   {
//     owner: "riü",
//     age: 1,
//   },
//   {
//     owner: "asd",
//     age: 6,
//   },
// ];

const checkDogs = (dogsJulia, dogsKate) => {
  const dogsJuliaCOrrected = dogsJulia.slice();
  dogsJuliaCOrrected.splice(0, 1);
  dogsJuliaCOrrected.splice(-2);

  const dogs = dogsJuliaCOrrected.concat(dogsKate);
  console.log(dogs);

  // "dog number 1 is an adult, and is 5 years old" or a pupy

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult and ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is an puppyy and ${dog} years old`);
    }
  });
};

checkDogs([3, 5, 2, 13, 7], [3, 5, 2, 13, 7]);

/**
 *   dogsJuliaCOrrected.splice(0, 1);
  dogsJuliaCOrrected.splice(-2);

  with these, we removed the fitrst and last two element from the array. SPLICE
 */

/**
 * what is the value of i each time it is logged to the console? What causes this behavior?
 */

for (var i = 0; i < 10; i++) {
  window.setTimeout(function () {
    console.log(i);
  }, i * 100);
}

// write a function that calculates the nth term in the fibonacci sequence

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// iterative version:
function fibonacci(n) {
  let a = 0;
  b = 1;
  temp;
  if (n === 0) return a;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
}
