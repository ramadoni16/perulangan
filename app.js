// MENGGUNAKAN WHILE
// let num = 0;

// while (num < 10) {
//   console.log(num);
//   num++;
// }

// MENGGUNAKAN FOR
// for (let num = 0; num < 10; num++) {
//   console.log(num);
// }

const password = "Pass123";

let guess = prompt("etnter the password");
while (guess !== password) {
  guess = prompt("enter the password");
}
alert("congrats! the password is correct");
