<?php
// the message
$msg = $_POST['message'];
 

// send email
// mail(to,subject,message,headers,parameters);
mail("mayokba@gmail.com","Eprom",$msg);
 
// $mail = new PHPMailer(true);

// //Send mail using gmail
// if($send_using_gmail){
//     $mail->IsSMTP(); // telling the class to use SMTP
//     $mail->SMTPAuth = true; // enable SMTP authentication
//     $mail->SMTPSecure = "ssl"; // sets the prefix to the servier
//     $mail->Host = "smtp.gmail.com"; // sets GMAIL as the SMTP server
//     $mail->Port = 465; // set the SMTP port for the GMAIL server
//     $mail->Username = "mayokba@gmail.com"; // GMAIL username 
// }

// //Typical mail data
// $mail->AddAddress($email, $name);
// $mail->SetFrom($email_from, $name_from);
// $mail->Subject = "My Subject";
// $mail->Body = $_POST['message'];

// try{
//     $mail->Send();
//     echo "Success!";
// } catch(Exception $e){
//     //Something went bad
//     echo "Fail ";
// }
?>