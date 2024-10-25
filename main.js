// Tampilkan pesan ucapan ulang tahun menggunakan alert
function showAlerts() {
    alert("Hy bububbbbbb!!!!!");
    alert("Selamat ulang tahun ya");
    alert("Panjang umur");
    alert("Sehat selalu");
    alert("Semoga menjadi anak yang pandai");
    alert("Lebih pandai mengatur waktunya");
    alert("Bisa membanggakan orang tua");
    alert("Cita-citanya dapat di gapai dengan mudah");
    alert("Semoga dengan bertambahnya umur kamu");
    alert("Kamu lebih mudah menghadapi semua rintangan yaaaaa");
    alert("Ehh... hampir lupa pulaa");
    alert("Jangan lupa ibadah yang banyak dan berdoa");
    alert("Dahhh...");
    alert("LOVE UUUUUUUU CINTAAAA");
    alert("Papaiiiiiii.......");
    alert("Sekali lagi, happy birthday sayang!!!!");

    // Tampilkan konten setelah semua alert selesai
    document.getElementById('content').style.display = 'block';
}

// Fungsi untuk menampilkan waktu saat ini
function showTime() {
    document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}

// Fungsi untuk efek animasi salju
function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowflake.innerHTML = "❄";
    document.getElementById("snowflakes").appendChild(snowflake);

    // Hapus elemen setelah animasi selesai
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

// Jalankan fungsi showAlerts dan efek salju
showAlerts();
showTime();
setInterval(showTime, 1000);
setInterval(createSnowflake, 100);
