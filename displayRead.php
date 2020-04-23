<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once 'Customer.php';
include_once 'phptodb.php';

$num = new Customer($mysqli)->getAllUsersData()->num_rows;

if ($num > 0) {

   
    $users_arr = array();
    $users_arr["records"] = array();

   
    while ($row = $stmt->fetch_assoc()) {
       
        extract($row);

        $user_item = array(
            "first_name" => $first_name,
            "last_name" => $last_name,
            "email" => $email,
            "home_address" => $home_address,
            "home_phone" => $home_phone,
            "cell_phone" => $cell_phone
        );

        array_push($users_arr["records"], $user_item);
    }

    http_response_code(200);

    echo json_encode($users_arr);
}

else {

    http_response_code(404);

    echo json_encode(array(
        "message" => "Null Returned"
    ));
}