<?php

$msg = $_POST['message'];
//$msg = "gtna neela f 7azzena el hebab";
$header = "From:yassmeenmahmoud@gmail.com \r\n";
$header .= "MIME-Version: 1.0\r\n";
$header .= "Content-type: text/html\r\n";
$returnedValue=mail("mayokba@gmail.com","Eprom",$msg,$header);

echo $returnedValue;

?>