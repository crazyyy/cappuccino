<?php

  $send_to = "il.belkin@yandex.ru";
  $send_subject = "Заявка на кухню";

  $userName = $_POST["name"];
  $userEmail = $_POST["uemail"];
  $userPhone = $_POST["phone"];
  $userMessage = $_POST["umessage"];

  if ($userName) {
    $name = "Посетитель представился как: " . $userName;
  } else {
    $name = "Посетитель не представился";
  }

  if ($userEmail) {
    $email = "email посетителя: " . $userEmail;
  } else {
    $email = "email посетителя неизвестен";
  }

  if ($userPhone) {
    $phone = "телефон посетителя: " . $userPhone;
  } else {
    $phone = "телефон посетителя неизвестен";
  }

  if ($userMessage) {
    $comment = "пользователь сообщил следующее: " . $userMessage;
  } else {
    $comment = "пользователь не добавил сопроводительной информации";
  }

  $from_ip = $_SERVER['REMOTE_ADDR'];
  $from_browser = $_SERVER['HTTP_USER_AGENT'];
  $uid = md5(uniqid(time()));

  // header
  $header = "From: ".$userName." <".$send_to.">\r\n";
  $header .= "Reply-To: ".$send_to."\r\n";
  $header .= "MIME-Version: 1.0\r\n";
  $header .= "Content-Type: multipart/mixed; boundary=\"".$uid."\"\r\n\r\n";

  $message = "Это сообщение было добавлено: " . date('m-d-Y') ."\n". $name ."\n". $phone ."\n". $email ."\n". $comment ."\n". "\n\n\nТехническая информация:\n IP посетителя: " . $from_ip . "\n Браузер посетителя: " . $from_browser;

  $send_subject .= " - {$userName}";

  if(mail($send_to, $send_subject, $message)){
    echo '<span class="h1"><strong class="modal-title">Мы получили ваше сообщение и перезвоним в ближайшее время</strong></span>';
  }
  else{
    echo '<span class="h1"><strong class="modal-title"><span style="color:#F16161;">Ошибка! Попробуйте позже</span></strong></span>';
  }

?>
