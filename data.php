<?php

if(isset($_REQUEST['nuit'])){


    //check if everything is submitted;
    $nuit  = $_REQUEST['nuit'];
    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : "";
    $dateOfBirth = isset($_REQUEST['dateOfBirth']) ? $_REQUEST['dateOfBirth'] : "";
    $telNumber = isset($_REQUEST['telNumber']) ? $_REQUEST['telNumber'] : "";

    //init status
    $ok = true;
    $statusMessage = array();
    $data = array();

    //check for condition of nuit
    if(!isset($nuit) || empty($nuit)){

        $ok = false;
        $statusMessage [] = "NAME MUST NOT BE EMPTY";
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
        
    }


    //encode all data into JSON FORMAT

    echo json_encode ( 

        array (
            'ok' => $ok,
            'errorMessage' => $statusMessage,
            'data' => $data
        )
        );



    

    



}