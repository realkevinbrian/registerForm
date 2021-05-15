//->importing my own Validator Library

import {validateChar,nameValidate,cellNumberValidate} from "./validateJs/validator.js";

/* 
    Desafio : Elaborar um programa que receba estes dados de um utilizador.
    Desenvolvido por : Kevin Brian
    Email : kevinbrian105@gmail.com
    Tel : +258 855874201 
*/


//->We need to create a form object
const form = {
    nuitNumber : document.getElementById("nuit"),
    name : document.getElementById("name"),
    dateOfBirth : document.getElementById("dateOfBirth"),
    cellNumber : document.getElementById("cellNumber"),
    submitBtn : document.getElementById("submitBtn")
}


//-> add event listener to the button

submitBtn.addEventListener('click', elem =>{
    //prevent Default
    elem.preventDefault();
    
})

//collect all the divs to show error message
var errorMessage = document.getElementsByClassName("input");

//->create span elem. to display message
//->style the element to show error message
var errorSpan = document.createElement("span");
errorSpan.style.color = "red";
errorSpan.style.fontSize = "15px";
errorMessage[1].after(errorSpan);
errorSpan.style.display="none";



//->live type validator
//add event listener to all forms
form.nuitNumber.addEventListener("focusout", elem=>{
    //grab the value
    let nuitNumber = elem.target.value;
    //validate
    if(validateChar(nuitNumber)){
        console.log("correct nuit number");
    }else{
        console.log("Invalid nuit number");
    }
})

//add event listener to the name
form.name.addEventListener("keyup", elem=>{
    //grab the value
    let nameCheckUp = elem.target.value;
    //validate
    if(nameValidate(nameCheckUp)){ 
        errorSpan.innerHTML = "Correct Name";
        errorSpan.style.color="lightgreen";
        var show = "block";
        var unshow = "none";
        errorSpan.style.display = show;
        console.log(show)
    }else if(!nameValidate(nameCheckUp)){
        errorSpan.style.display = unshow;

        
        
    }
})



//validate phone number
form.cellNumber.addEventListener("focusout", elem=>{
    //grab the value
    let numberCheckUp = elem.target.value;
    //validate
    if(cellNumberValidate(numberCheckUp)){
        console.log(true);
    }else{
        console.log(false);
    }
})