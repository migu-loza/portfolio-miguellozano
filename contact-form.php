<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $message = $_POST['Message'];

    // set up the email
    $to = "miglozano9@gmail.com"; // send to my email
    $subject = "New message from miguloza.com";
    $body = "NAME: $name\nEMAIL: $email\n\nMESSAGE: \n$message";

    // send the email
    if (mail($to, $subject, $body)) {
        echo "Email sent successfully! Please allow up to 2 business days for a reply.";
    } else {
        echo "Failed to send email. Please try again later.";
    }
}


?>