
<!-- 
    Desafio : Elaborar um programa que receba estes dados de um utilizador.
    Desenvolvido por : Kevin Brian
    Email : kevinbrian105@gmail.com
    Tel : +258 855874201
 -->


 <?php 


if(isset($_REQUEST['submit'])){


    //check if everything is submitted;
    $nuit  = isset($_REQUEST['nuit']) ? $_REQUEST['nuit'] : "";
    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : "";
    $dateOfBirth = isset($_REQUEST['date']) ? $_REQUEST['date'] : "";
    $telNumber = isset($_REQUEST['tel']) ? $_REQUEST['tel'] : "";

    //init status
    $ok = true;
    $statusMessage = array();
    $data = array();

    //check for condition of nuit
    if(!isset($nuit) || empty($nuit)){

        $ok = false;
        $statusMessage [] = "NUIT MUST NOT BE EMPTY";
    }

    //check for condition of name
    if(!isset($name) || empty($name)){

        $ok = false;
        $statusMessage [] = "NAME MUST NOT BE EMPTY";
    }

    
    //check for condition of TELEPHONE
    if(!isset($telNumber) || empty($telNumber)){

        $ok = false;
        $statusMessage [] = "TEL NUMBER MUST NOT BE EMPTY";
    }
    
    
    //check for condition of birth day
    if(!isset($dateOfBirth) || empty($dateOfBirth)){

        $ok = false;
        $statusMessage [] = "DOB MUST NOT BE EMPTY";
    }

    
    if($ok){

        //correct all data
        
        //Add form data to the form
        $data ['name'] = $name;
        $data ['nuit'] = $nuit;
        $data ['telNumber'] = $telNumber;
        $data['dob'] = $dateOfBirth;
        
    }else {

        header("Location:index.html");
    }

    
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
                        <span></span>
                    </p>
                    
                    <ul>
                        <li>
                            <span>NUIT :</span>
                            <span><?php echo $data['nuit']?></span>
                        </li>

                        <li>
                            <span>Nome Completo :</span>
                            <span><?php echo $data['name']?></span>
                        </li>

                        <li>
                            <span>Data :</span>
                            <span><?php echo $data['dob']?></span>
                        </li>

                        <li>
                            <span>Numero de Telefone :</span>
                            <span><?php echo $data['telNumber']?></span>
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