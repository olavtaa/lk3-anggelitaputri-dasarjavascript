// =========================
//  JAVASCRIPT DASAR - My PPLG Profile
//  Dibuat untuk belajar: variabel, fungsi, DOM, event, dll.
// =========================

console.log("Halo! JavaScript sudah terhubung ✨");

// ---------- 1. SALAM OTOMATIS + JAM BERJALAN ----------
const teksSalam = document.getElementById("salam");
const teksJam = document.getElementById("jam");

function updateWaktu() {
  const sekarang = new Date();
  const jam = sekarang.getHours();

  // Tentukan salam berdasarkan jam
  let salam = "Selamat malam 🌙";
  if (jam >= 4 && jam < 11) {
    salam = "Selamat pagi 🌷";
  } else if (jam >= 11 && jam < 15) {
    salam = "Selamat siang ☀️";
  } else if (jam >= 15 && jam < 19) {
    salam = "Selamat sore 🌸";
  }

  teksSalam.textContent = `Halo! ${salam}, selamat datang di profil Anggel!`;

  // Tampilkan jam HH:MM:SS
  const jamStr = sekarang.toLocaleTimeString("id-ID");
  teksJam.textContent = "⏰ " + jamStr;
}

// Jalankan sekali, lalu ulangi tiap 1 detik
updateWaktu();
setInterval(updateWaktu, 1000);

// ---------- 2. EFEK KETIK (TYPEWRITER) ----------
const teksKetik = document.getElementById("efek-ketik");
const kalimat = "Halo! Namaku Anggel, pelajar PPLG yang suka coding 💻✨";
let indexKetik = 0;

function efekMengetik() {
  if (indexKetik <= kalimat.length) {
    teksKetik.textContent = kalimat.slice(0, indexKetik);
    indexKetik++;
    setTimeout(efekMengetik, 60); // kecepatan mengetik
  }
}
efekMengetik();

// ---------- 3. TOMBOL SAPA INTERAKTIF ----------
const tombolSapa = document.getElementById("btn-sapa");
const pesanSapa = document.getElementById("pesan-sapa");

tombolSapa.addEventListener("click", function () {
  const nama = prompt("Hai! Siapa namamu? 🌸");

  if (nama) {
    pesanSapa.textContent = `Hai ${nama}! Senang bertemu denganmu 💗`;
    alert(`Halo ${nama}! Terima kasih sudah mampir ke profil Anggel 🌷`);
  } else {
    pesanSapa.textContent = "Yah, kamu belum isi nama... coba lagi yuk! 🥺";
  }
});

// ---------- 4. TOMBOL LIKE + SIMPAN KE LOCALSTORAGE ----------
const tombolLike = document.getElementById("btn-like");
const jumlahLike = document.getElementById("jumlah-like");

// Ambil jumlah like yang tersimpan (kalau ada)
let like = Number(localStorage.getItem("likeAnggel")) || 0;
jumlahLike.textContent = like;

tombolLike.addEventListener("click", function () {
  like++;
  jumlahLike.textContent = like;
  localStorage.setItem("likeAnggel", like); // simpan biar tidak hilang saat refresh

  // Animasi kecil saat diklik
  tombolLike.style.transform = "scale(1.15)";
  setTimeout(function () {
    tombolLike.style.transform = "scale(1)";
  }, 150);
});

// ---------- 5. DARK MODE ----------
const tombolTema = document.getElementById("btn-tema");

// Cek tema tersimpan saat halaman dibuka
if (localStorage.getItem("tema") === "gelap") {
  document.body.classList.add("dark-mode");
  tombolTema.textContent = "☀️ Light Mode";
}

tombolTema.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  const gelap = document.body.classList.contains("dark-mode");

  tombolTema.textContent = gelap ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("tema", gelap ? "gelap" : "terang");
});

// ---------- 6. TAHUN OTOMATIS + PENGHITUNG PENGUNJUNG ----------
document.getElementById("tahun").textContent = new Date().getFullYear();

let kunjung = Number(localStorage.getItem("kunjungAnggel")) || 0;
kunjung++;
localStorage.setItem("kunjungAnggel", kunjung);
document.getElementById("jumlah-kunjung").textContent = kunjung;
