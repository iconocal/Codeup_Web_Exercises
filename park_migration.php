<?php

define("DB_HOST", "127.0.0.1");
define("DB_NAME", "national_parks_db");
define("DB_USER", "parks_user");
define("DB_PASS", "codeup");

// Require the file that connects to the database.
require 'db_connect.php';


$query = 'CREATE TABLE national_parks (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    name VARCHAR(240) NOT NULL,
    location VARCHAR(125) NOT NULL,
    date_established DATE,
    area_in_acres FLOAT(12,2) NOT NULL,
    PRIMARY KEY (id)
)';

$dbc->exec($query);







