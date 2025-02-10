const password = prompt("buat password");

if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("password valid");
} else {
  console.log("password tidak memenuhi syarat");
}
