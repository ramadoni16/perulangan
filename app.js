let string = "LoL";

for (let i = 0; i <= 4; i++) {
  console.log("Outher:", i);
  for (let j = 0; j < string.length; j++) {
    console.log("Inner:", string[j]);
  }
}
