<?php
include 'koneksi.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = mysqli_real_escape_string(mysql: $conn, string: $_POST['nama']);
    $pesan = mysqli_real_escape_string(mysql: $conn, string: $_POST['pesan']);

    $sql = "INSERT INTO ucapan (nama, pesan) VALUES ('$nama', '$pesan')";

    if (mysqli_query(mysql: $conn, query: $sql)) {
        // Kembali ke halaman utama setelah berhasil
        header(header: "Location: index.php");
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error(mysql: $conn);
    }
}

mysqli_close(mysql: $conn);
?>;