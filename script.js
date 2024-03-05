//data

const acc1 = {
  owner: "Petek",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};
const acc2 = {
  owner: "EmreCan",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};
const acc3 = {
  owner: "Phineas",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};
const acc4 = {
  owner: "Sarah",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [acc1, acc2, acc3];

for (let i = 0; i < accounts.length; i++) {
  console.log(accounts[i].movements);
  for (let j = 0; j < accounts[i].movements.length; j++) {
    console.log(accounts[i].movements[j]);
  }
}
