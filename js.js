document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Mengumpulkan nilai dari input
  var nama = document.getElementById('textField').value;
  var kotaAcara = document.getElementById('exampleDataList').value;
  var tanggalAcara = document.getElementById('dateField').value;
  var kategoriTiket = document.getElementById('selectField').value;
  var metodePembayaran = document.querySelector('input[name="radioOptions"]:checked').value;
  var alamat = document.getElementById('textareaField').value;
  var fotoProfil = document.getElementById('formFile').value; // Ingat bahwa Anda perlu logika khusus untuk menangani file input

  // Menampilkan nilai input dalam Alert
  var message = "Nama: " + nama + "\n";
  message += "Kota Konser: " + kotaAcara + "\n";
  message += "Tanggal Konser: " + tanggalAcara + "\n";
  message += "Kategori Tiket: " + kategoriTiket + "\n";
  message += "Metode Pembayaran: " + metodePembayaran + "\n";
  message += "Alamat: " + alamat + "\n";
  message += "Bukti Pembayaran: " + fotoProfil;

  // Menampilkan alert dengan tombol serta konfirmasi dan batal
  var confirmation = confirm(message +"\n\nApakah Anda ingin melanjutkan pendaftaran?");
  if (confirmation) {
    // Lakukan tindakan ketika dikonfirmasi
    alert('Pendaftaran berhasil!');
  } else {
    // Lakukan tindakan ketika dibatalkan
    alert('Pendaftaran dibatalkan.');
  }
});
