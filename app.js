const role = prompt("masukkan role akun");

if (role !== "admin") {
  console.log("akses ditolak");
} else {
  console.log("boleh mengaksesnya");
}
