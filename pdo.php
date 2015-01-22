<?php

DB_HOST — The IP address to connect to

DB_NAME — The database to connect to

DB_USER — The MySQL user to use

DB_PASS — Password for the MySQL user

$dbc = new PDO('mysql:host=127.0.0.1;dbname=employees', 'codeup', 'codeup');

define("DB_HOST", "mysql:host=127.0.0.1");
define("DB_NAME", "dbname=employees");
define("DB_USER", "codeup");
define("DB_PASS", "codeup");



require_once('db_connect.php');

echo $dbc->getAttribute(PDO::ATTR_CONNECTION_STATUS) . "\n";







