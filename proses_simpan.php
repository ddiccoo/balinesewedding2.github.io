<?php
include 'koneksi.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = mysqli_real_escape_string($conn, $_POST['nama']);
    $pesan = mysqli_real_escape_string($conn, $_POST['pesan']);
    $konfirmasi = mysqli_real_escape_string($conn, $_POST['konfirmasi']); // Tambahan RSVP

    $sql = "INSERT INTO ucapan (nama, pesan, konfirmasi) VALUES ('$nama', '$pesan', '$konfirmasi')";

    if (mysqli_query($conn, $sql)) {
        echo "success"; // Respon untuk AJAX
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
mysqli_close($conn);
?>