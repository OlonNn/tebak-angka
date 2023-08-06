// Game Tebak angka
var tanya = true;
while (tanya) {
  var chance = 3;
  while (chance > 0) {
    var p = parseInt(
      prompt(
        "Masukkan angka tebakanmu!! \nBilangan bulat 1-10 \nKamu punya " +
          chance +
          "x kesempatan"
      )
    );
    console.log(p);

    var nilairandom = 10;
    var bot = Math.floor(Math.random() * nilairandom) + 1;

    hasil = "";
    if (p == bot) {
      alert("Selamat!! tebakan anda benar " + "\nAngka yang dicari " + bot);
      break;
    } else if (p < bot && p <= 10 && p > 0) {
      alert("Angka terlalu rendah!!");
    } else if (p > bot && p <= 10 && p > 0) {
      alert("Angka terlalu besar!!");
    } else {
      hasil = "Hasil tidak sesui dengan kriteria";
    }
    console.log(hasil)
    alert('Tebakanmu ' + p);
    chance--;
  }

  tanya = confirm("Ingin lanjut bermain??");
}

alert("TERIMA KASIH TELAH BERMAIN");
