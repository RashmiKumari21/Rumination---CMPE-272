<?php

class Customer
{
    private $mysqli;
    private $table_name = "user_info";
    public $first_name;
    public $last_name;
    public $email;
    public $home_address;
    public $home_phone;
    public $cell_phone;
public function __construct($db)
    {
        $this->mysqli = $db;
    }

    function getAllUsersData()
    {
        $mysqli = new mysqli("localhost", "root", "", "rumination");

        if ($mysqli->connect_error) {
            die("Connection failed: " . $mysqli->connect_error);
        }
        $sql = "SELECT first_name, last_name, email, home_address, home_phone, cell_phone FROM user_info";

        $result = mysqli_query($mysqli, $sql);
        return $result;
    }
}