
<!-- 
    Desafio : Elaborar um programa que receba estes dados de um utilizador.
    Desenvolvido por : Kevin Brian
    Email : kevinbrian105@gmail.com
    Tel : +258 855874201
 -->


 <?php 

 if(isset($_REQUEST['submit'])){
     
 }

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile</title>
    <link rel="stylesheet" href="./assets/css/profile.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
</head>
<body>


    <!-- container -->
    <div class="profileContainer">

        <div class="InfoContainer"> <!-- container for the login Form-->

            <div class="header">
                <div class="userIcon">
                    <!-- <i class="fas fa-user"></i> -->
                    <img src="./assets/avatar/avatar.svg" alt="Avatar" >
                </div>

                
            </div>

            <div class="main">

                
                <div class="showInfo">
                    <p>
                        <span>Informação</span>
                    </p>
                    
                    <ul>
                        <li>
                            <span>NUIT :</span>
                            <span>1234567</span>
                        </li>

                        <li>
                            <span>Nome Completo :</span>
                            <span>Kevin Brian</span>
                        </li>

                        <li>
                            <span>Data :</span>
                            <span>12/23/1969</span>
                        </li>

                        <li>
                            <span>Numero de Telefone :</span>
                            <span>+258 855874201</span>
                        </li>
                    </ul>

                </div>
            </div>


            <!-- <div class="developerInfo">
                <p>
                    Desenvolvido por : Kevin Brian
                    <br>
                    +258 855874201
                </p>
            </div> -->
            

        </div>

    </div>


    

    
    



    <script src="./assets/js/app.js"></script>
</body>
</html>