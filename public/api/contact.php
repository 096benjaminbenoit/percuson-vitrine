<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $prenom = htmlspecialchars($_POST['firstname']);
    $nom = htmlspecialchars($_POST['lastname']);
    $email = htmlspecialchars($_POST['email']);
    $telephone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

    $to = "096benjaminbenoit@gmail.com";
    $subject = "Nouveau message de $prenom $nom";
    $headers = "De: $email";

    $fullMessage = "Email: $email\nTéléphone: $telephone\nMessage: $message";

    if(mail($to, $subject, $fullMessage, $headers)) {
        echo "Message envoyé avec succès.";
    } else {
        echo "Erreur lors de l'envoi du message.";
    }
}
?>
