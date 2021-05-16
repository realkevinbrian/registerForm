/* 
    Desafio : Elaborar um programa que receba estes dados de um utilizador.
    Desenvolvido por : Kevin Brian
    Email : kevinbrian105@gmail.com
    Tel : +258 855874201 
*/

import { nameValidate, validateChar,cellNumberValidate,validateDate } from "./validator.js";


//create the form object
const form = {
    formTarget : document.getElementById("form"),
    nuitNumber : document.getElementById("nuitNumber"),
    fullName : document.getElementById("fullName"),
    dateOfBirth : document.getElementById("dateOfBirth"),
    cellNumber : document.getElementById("cellNumber")
}




//add an event listener to the form
form.formTarget.addEventListener('submit', submitForm);


//init the submit function
function submitForm (e){
    //prevent its default
    e.preventDefault();

    //validate the forms
    //->call the function
    let nuit = form.nuitNumber.value;
    let name = form.fullName.value;
    let tel = form.cellNumber.value;
    let dob = form.dateOfBirth.value;
    let errorMessages = [];


    //create a switch case to hec condition
    let val = false;
    switch(val){

        case validateChar(nuit):
            errorMessages.push("invalid nuit");
            break;

        case nameValidate(name):
            errorMessages.push("invalid name");
            break;
        
        case cellNumberValidate(tel):
            errorMessages.push("Invalid tel number");
            break;

        case validateDate(dob):
            errorMessages.push("DOB incorrecto");
            break;
    }



    if(nuit ==="" && name === "" && tel === "" && dob === "" ){
        //check if every form is filled up
        errorMessages.push("nao pode deixar nenhum espaço vazio");
    }else{
        
    //start outputting messages;
    var errorDiv = document.getElementById("errorDiv");
    // var li = document.createElement("li");
    var error = document.getElementById("error");
    if(errorMessages.length < 0){
        console.log("Going...");
   
    }
    else if(errorMessages.length > 0){
        //display the message
       
        // li.innerText = errorMessages;
        //append to the element
        errorDiv.style.display = "flex";
        // errorDiv.appendChild(li);
        error.innerText = errorMessages;
        

    }
    else{
        errorDiv.style.display = "none";
    }
      
    }
    
     //->GO TO BACKEND
        //->Am gonna be using AJAX Technology
        // everything is good untill here
         //or we can use ternary   

    //init xhr request
    var xhr = new XMLHttpRequest();

    //->OPEN CONNECTION
    xhr.open("POST", "process.php", true);

    //->CHECK ON LOAD
    xhr.onprogress = function() {
        console.log("Processing");
    };

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    const param = `nuit=${form.nuitNumber}`;

    //check for status
    xhr.onreadystatechange = function() {

        //->if
        if (this.status === 200 && this.readyState === 4 ) {
            
            console.log("=>" + this.responseText);
        }


        
    };

    xhr.send(param);




    

}
   