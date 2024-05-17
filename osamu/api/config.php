<?php
error_reporting(E_ALL);
ini_set('display_errors', 'on');

try {
	$conn = new PDO("mysql:host=localhost;dbname=osamu;charset=utf8", "root", "Samsung5445");
}
catch (PDOException $e){
	echo 'Ошибка подключения к базе: ' . $e->getMessage();
}
?>

