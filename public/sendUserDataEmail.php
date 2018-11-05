<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$isPost = (!empty($_POST)) ? true : false;
if ($isPost) {

    $commission = filter_var($_POST["commission"], FILTER_SANITIZE_STRING);

    $q1 = filter_var($_POST["q1"], FILTER_SANITIZE_STRING);
    $q2 = filter_var($_POST["q2"], FILTER_SANITIZE_STRING);
    $q3 = filter_var($_POST["q3"], FILTER_SANITIZE_STRING);
    $q4 = filter_var($_POST["q4"], FILTER_SANITIZE_STRING);
    $q5 = filter_var($_POST["q5"], FILTER_SANITIZE_STRING);

    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $phone = filter_var($_POST["phone"], FILTER_SANITIZE_STRING);
    $years = filter_var($_POST["years"], FILTER_SANITIZE_STRING);
    $homefound = filter_var($_POST["homefound"], FILTER_SANITIZE_STRING);
    $location = filter_var($_POST["location"], FILTER_SANITIZE_STRING);

    $subject ="Новая заявка Муравей";

    $message = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width"/>
        <style type="text/css">
        * {
          margin: 0;
          padding: 0;
          font-size: 100%;
          font-family: "Avenir Next", "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
          line-height: 1.65; }

        img {
          max-width: 100%;
          margin: 0 auto;
          display: block; }

        body,
        .body-wrap {
          width: 100% !important;
          height: 100%;
          background: #efefef;
          -webkit-font-smoothing: antialiased;
          -webkit-text-size-adjust: none; }

        a {
          color: #71bc37;
          text-decoration: none; }

        .text-center {
          text-align: center; }

        .text-right {
          text-align: right; }

        .text-left {
          text-align: left; }

        .button {
          display: inline-block;
          color: white;
          background: #71bc37;
          border: solid #71bc37;
          border-width: 10px 20px 8px;
          font-weight: bold;
          border-radius: 4px; }

        h1, h2, h3, h4, h5, h6 {
          margin-bottom: 20px;
          line-height: 1.25; }

        h1 {
          font-size: 32px; }

        h2 {
          font-size: 28px; }

        h3 {
          font-size: 24px; }

        h4 {
          font-size: 20px; }

        h5 {
          font-size: 16px; }

        p, ul, ol {
          font-size: 16px;
          font-weight: normal;
          margin-bottom: 20px; }

        .container {
          display: block !important;
          clear: both !important;
          margin: 0 auto !important;
          max-width: 580px !important; }
          .container table {
            width: 100% !important;
            border-collapse: collapse; }
          .container .masthead {
            padding: 80px 0;
            background: #71bc37;
            color: white; }
            .container .masthead h1 {
              margin: 0 auto !important;
              max-width: 90%;
              text-transform: uppercase; }
          .container .content {
            background: white;
            padding: 30px 35px; }
            .container .content.footer {
              background: none; }
              .container .content.footer p {
                margin-bottom: 0;
                color: #888;
                text-align: center;
                font-size: 14px; }
              .container .content.footer a {
                color: #888;
                text-decoration: none;
                font-weight: bold; }
        </style>
    </head>
    <body>
    <table class="body-wrap">
        <tr>
            <td class="container">

                <!-- Message start -->
                <table>
                    <tr>
                        <td align="center" class="masthead">

                            <h1>КПК "Муравей"</h1>

                        </td>
                    </tr>
                    <tr>
                        <td class="content">

                            <h2>Новая заявка на консультацию! </h2>

                            <h4>Данные пользователя:</h4>
                            <table>
                                <tr>
                                    <th align="center">
                                    Поле
                                    </th>
                                    <th align="center">
                                    Значение
                                    </th>
                                </tr>
                                <tr><td></td><td></td></tr>
                                <tr>
                                    <td>Имя</td>
                                    <td>'.$name.'</td>
                                </tr>
                                <tr>
                                    <td>Телефон</td>
                                    <td> +7-'.$phone.' </td>
                                </tr>
                                <tr>
                                    <td>Лет ребенку</td>
                                    <td>'.$years.'</td>
                                </tr>
                                <tr>
                                    <td>Жильё нашли?</td>
                                    <td>'.$homefound.'</td>
                                </tr>
                                <tr>
                                    <td>Населенный пункт</td>
                                    <td>'.$location.'</td>
                                </tr>
                             </table>
                            <br/>
                            <br/>
                             <h4>Результаты опроса:</h4>
                             <table>
                             <tr>
                                 <th align="center">
                                 Вопрос
                                 </th>
                                 <th align="center">
                                 Ответ
                                 </th>
                             </tr>
                             <tr><td></td><td></td></tr>
                             <tr>
                                 <td>Готов ждать всю сумму 39 дней</td>
                                 <td>'. $q1 .'</td>
                             </tr>
                             <tr>
                                 <td>Проценты внесу наличными</td>
                                 <td>'. $q2 .'</td>
                             </tr>
                             <tr>
                                 <td>Оформлением документов КПК Муравей</td>
                                 <td>'. $q3 .'</td>
                             </tr>
                             <tr>
                                 <td>Жилье в городской черте</td>
                                 <td>'. $q4 .'</td>
                             </tr>
                             <tr>
                                 <td>Сделка с родственниками</td>
                                 <td>'. $q5 .'</td>
                             </tr>
                          </table>

                            <br/>
                            <br/>
                            <table>
                                <tr>
                                    <td align="center">
                                        <h3>
                                        Комиссия пользователя:  '. $commission .' т.р.
                                        </h3>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>

            </td>
        </tr>
        <tr>
            <td class="container">

                <!-- Message start -->
                <table>
                    <tr>
                        <td class="content footer" align="center">
                            <p>Кредитный потребительский коооператив «МУРАВЕЙ»
                            <p>Ставропольский край, Невинномысск, переулок Крымский 8</p>
                        </td>
                    </tr>
                </table>

            </td>
        </tr>
    </table>
    </body>
    </html>';

// khmelnikov.andrey@gmail.com
    $mail = mail("vitaliy.webmaster@gmail.com", $subject, $message,
        "From: <webmaster@webmaster-dev.kl.com.ua> \r\n"."Reply-To: webmaster@webmaster-dev.kl.com.ua \r\n"."X-Mailer: PHP/".phpversion()." \r\n"."Content-Type: text/html; charset=UTF-8\r\n");
    if ($mail)
    {
        echo "Success";
    } else {
        echo "Error";
    }



//	$guid = trim(filter_var($_POST["guid"], FILTER_SANITIZE_STRING));
//	$barcode = trim(filter_var($_POST["barcode"], FILTER_SANITIZE_STRING));
//	$culture = trim(filter_var($_POST["culture"], FILTER_SANITIZE_STRING));
//	//echo $guid." \r\n".$barcode." \r\n".$culture;
//	$client = new SoapClient('http://services.ukrposhta.ua/barcodestatistic/barcodestatistic.asmx?WSDL');
//	$params = new stdClass();
//	$params->guid = $guid;
//	$params->barcode = $barcode;
//	$params->culture = $culture;
//	$result = $client->GetBarcodeInfo($params)->GetBarcodeInfoResult;
//	// header('Content-Type: application/json');
//	echo json_encode((array)$result);
}
?>