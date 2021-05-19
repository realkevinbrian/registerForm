/* 
    Desafio : Elaborar um programa que receba estes dados de um utilizador.
    Desenvolvido por : Kevin Brian
    Email : kevinbrian105@gmail.com
    Tel : +258 855874201 
*/



import{validateChar,validateName,validateCellNumber,dateValidate} from "./validate.js";

//Grab all inputs
let nuit = document.getElementById("nuit");
let name = document.getElementById("name");
let tel = document.getElementById("tel");
let dob = document.getElementById("dob");
let submitBtn = document.getElementById("submitBtn");
// let spanError = document.getElementById("error");
let spanError = document.getElementsByClassName("error");

//submitBtn



//nuit validation
nuit.addEventListener("focusout" , validate);
function validate (e){
    //console.log(validateChar(this.value));

    if(!validateChar(this.value)){
        spanError[0].innerText = "Numero de Nuit Invalido";
        spanError[0].style.display = "block";
    }
    else{
        spanError[0].style.display = "none";
    }

}

//name validation
name.addEventListener("focusout" , validatename);

function validatename (e){
    //console.log(validateChar(this.value));

    if(!validateName(this.value)){
        console.log("name Invalid");
        spanError[1].innerText = "Nome Invalido";
        spanError[1].style.display = "block";
        
        
    }else{
        spanError[1].style.display = "none";
    }

}


//telefone validation
tel.addEventListener("focusout" , validatetel);

function validatetel (e){
    //console.log(validateChar(this.value));

    if(!validateCellNumber(this.value)){
        spanError[3].innerText = "Numero de Telefone Invalido";
        spanError[3].style.display = "block";
    }
    else{
        spanError[3].style.display = "none";
    }


}


//lets check if everything is fulfilled

submitBtn.addEventListener("click" , submit);
function submit(e){
if(!validateChar(nuit.value) && !validateName(name.value) && !validateCellNumber(tel.value) && !dateValidate(dob.value)){
e.preventDefault();
spanError[4].innerText = "Todos os Espaços Devem ser Preenchidos";
spanError[4].style.display = "block";
}else{
    spanError[4].style.display = "none";

}


}


spanError[4].innerText = "Todos os Espaços Devem ser Preenchidos";
spanError[4].style.display = "block";


// //dob validation
// if(dateValidate(dob.value)){
//     spanError[2].innerText = "Não pode deixar espaço em Vazio";
//     spanError[2].style.display = "block";
// }else{
//     spanError[2].style.display = "none";
// }