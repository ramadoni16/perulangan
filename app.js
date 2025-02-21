const fruits = ["Banana", "orange", "Apple", "Manggo"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`Buah ${fruits[i]}`);
// }

// for (let fruit of fruits) {
//   console.log(`Buah ${fruit}`);
// }

const studentRow = [
  ["olivia", "liam", "Emma", "Noah"],
  ["Amelia", "oliver", "ava", "Elijah"],
  ["Sophia", "Mateo", "Isabella", "Lucass"],
];

// for (let i = 0; i < studentRow.length; i++) {
//   const row = studentRow[i];
//   console.log(`Seat Row #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(` ${row[j]}`);
//   }
// }

for (let row of studentRow) {
  for (let student of row) {
    console.log(student);
  }
}
