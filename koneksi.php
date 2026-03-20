<?php
$host = "localhost";
$user = "root"; // sesuaikan dengan user database kamu
$pass = "";     // sesuaikan dengan password database kamu
$db   = "undangan_db";

$conn = mysqli_connect(hostname:'localhost',username:'root',password:'',database:'undangan_db');

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}
?>