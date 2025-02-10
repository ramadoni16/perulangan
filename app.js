const role = prompt("masukkan role akun");

if (role === "admin" || role === "spv") {
  console.log("boleh mengaksesnya");
} else {
  console.log("akses ditolak");
}
