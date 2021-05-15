/* 
    Desafio : Elaborar um programa que receba estes dados de um utilizador.
    Desenvolvido por : Kevin Brian
    Email : kevinbrian105@gmail.com
    Tel : +258 855874201 
*/


import {showProfile,addCSS} from "./module.js";






//create form object

const form = {
    formTarget : document.getElementById("form")
}


//add event listener to the form
form.formTarget.addEventListener("submit", submitForm);


//initialize function attached to the form
function submitForm (elem){

    //prevent default
    elem.preventDefault();

    //on submit the form remove the div 
    const appContainer = document.getElementById("appContainer");
    // appContainer.style.display="none";
    document.body.removeChild(appContainer);

    //remove the style link of the first page
    var link = document.getElementsByTagName("link")
    document.head.removeChild(link[0]);

    //call our style function
    let path = "./assets/css/profile.css";
    addCSS(path);

    //add the profile page
    var data = showProfile("1145","kevin","09-98-2010","855874201");
    document.body.innerHTML = data;

    


}










