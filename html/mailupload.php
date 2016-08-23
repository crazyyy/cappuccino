<?php
  require('phpmailer/PHPMailerAutoload.php');

  $userName = $_POST["clientname"];
  $userPhone = $_POST["clientphone"];
  $userMessage = $_POST["clientcomments"];

  if ($userName) {
    $name = "Посетитель представился как: " . $userName;
  } else {
    $name = "Посетитель не представился";
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

  $mail = new PHPMailer();

  //Set who the message is to be sent from
  $mail->setFrom('il.belkin@yandex.ru', 'Заявка с лендинга');
  //Set an alternative reply-to address
  $mail->addReplyTo('il.belkin@yandex.ru', 'Сергей');
  //Set who the message is to be sent to
  $mail->addAddress('il.belkin@yandex.ru', 'Сергей');
  $mail->Subject = $_POST["subject"];

  if(is_array($_FILES)) {
    $mail->AddAttachment($_FILES['clientfile']['tmp_name'],$_FILES['clientfile']['name']);
  }

  $mail->msgHTML($name ."\n". $userPhone ."\n". $userMessage ."\n". "\n\n\nТехническая информация:\n IP посетителя: " . $from_ip . "\n Браузер посетителя: " . $from_browser);

  $mail->IsHTML(true);

  //send the message, check for errors
  if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
  } else {
    echo "Message sent!";
  }

?>
