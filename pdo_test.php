<?php


define("DB_HOST", "127.0.0.1");
define("DB_NAME", "national_parks");
define("DB_USER", "codeup");
define("DB_PASS", "codeup");

// Require the file that connects to the database.
require 'db_connect.php';

// Statement used to test the connection to the database.
echo $dbc->getAttribute(PDO::ATTR_CONNECTION_STATUS) . "\n";


// Create the query and assign to var
$query = 'CREATE TABLE users (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    email VARCHAR(240) NOT NULL,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
)';

// Run query, if there are errors they will be thrown as PDOExceptions
$dbc->exec($query);




