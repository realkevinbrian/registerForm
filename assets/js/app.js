/* 
    Desafio : Elaborar um programa que receba estes dados de um utilizador.
    Desenvolvido por : Kevin Brian
    Email : kevinbrian105@gmail.com
    Tel : +258 855874201 
*/

import { nameValidate, validateChar,cellNumberValidate } from "./validator.js";


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
    let tel = form.cellNumber.value
    let errorMessages = [];
    
    //validates nuitNumber
        //->if true exec.this code
    // if(!validateChar(nuit)){
    //    errorMessages.push("Invalid Nuit Number");
    // }

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
    }

    
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