// KATA KUNCI BREAK UNTUK MEMBERHENTIKAN PERULANGAN

// let input = prompt("Hei, say something");

// while (true) {
//   input = prompt(input);
//   if (input === "stop") break;
// }
// alert("ok");

for (let i = 0; i < 10000; i++) {
  console.log(i);
  if (i === 100) break;
}
