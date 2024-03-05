<?php
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;

$mail = new PHPMailer(true);

$ini_smtp = parse_ini_file("storage.ini");

if (empty($ini_smtp['host'])) {
    echo "Error with SMTP connection!";
    exit(1);
}
$host = $ini_smtp['host'];
$username = $ini_smtp['username'];
$password = $ini_smtp['password'];
$port = $ini_smtp['port'];

if(isset($_POST['fullName']) && isset($_POST['mail']) && isset($_POST['phone']))
{
    $postName = $_POST['fullName'];
    $postPhone = $_POST['phone'];
    $postCompany = $_POST['company'];
    $postEmail = $_POST['mail'];
    $order = $postName . ', ' . $postPhone . ', ' . $postCompany . ', ' . $postEmail;
}

try {
    $mail->isSMTP();
    $mail->Host       = $host;
    $mail->SMTPAuth   = true;
    $mail->Username   = $username;
    $mail->Password   = $password;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = $port;

    //Recipients
    $mail->setFrom('yuppie@yuppie.com.pl', 'Yuppie Contact Form');
    $mail->addAddress('yuppie@yuppie.com.pl');

    //Content
    $mail->isHTML(true);
    $mail->Subject = 'Here is the subject';
    $mail->Body    = $order;
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
