let maximum = parseInt(prompt("Masukkan nilai maksimal"));
while (!maximum) {
  maximum = parseInt(prompt("Masukkan nilai maksimal"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("isi tebakan pertama kamu"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Terlalu tinggi! tebak Lagi");
  } else {
    guess = prompt("Terlalu rendah! Tebak Lagi");
  }
}
alert(`Selamat tebakan Anda Benar! Dengan percobaan ${attempts} kali`);
