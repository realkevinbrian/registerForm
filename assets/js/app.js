/* 
    Desafio : Elaborar um programa que receba estes dados de um utilizador.
    Desenvolvido por : Kevin Brian
    Email : kevinbrian105@gmail.com
    Tel : +258 855874201 
*/



function toNum(num){

    parseInt(num);
    return num;
}


//create form object
const form = {
    formTarget : document.getElementById('form'),
    nuit : document.getElementById("nuit"),
    name : document.getElementById("name"),
    dateOfBirth : document.getElementById("dateOfBirth"),
    telNumber : document.getElementById("telNumber")
}


//-

form.formTarget.addEventListener("submit", submitForm);

function submitForm (elem) {

    //_Prevent Default
    elem.preventDefault();

    // console.log(form.nuit.value);
    
    //->init XHR
    const XHR = new XMLHttpRequest();

    //->open connection
    XHR.open("POST", "data.php", true);


    //->add new method used in post
    XHR.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    //->Onprogress
    XHR.onprogress = function () {
        console.log("Processing...");
    }

    //->set data
    // let data = `nuit=${form.nuit.value} 
    // name=${form.name.value}
    // dateOfBirth=${form.dateOfBirth.value}
    // telNumber=${form.telNumber.value}`;

    let nuitNum = parseInt(form.nuit.value);
    let data = `telNumber=${form.telNumber.value}&nuit=${form.nuit.value}&name=${form.name.value}&dateOfBirth=${form.dateOfBirth.value}`;

    //->onWhen state
    XHR.onreadystatechange = function (){

        //check for status
        if(this.status === 200 && this.readyState === 4){
            // //->
            //error displaying

            let responseObject = null;
            

            try {
          responseObject = JSON.parse(this.responseText)
            handleObject(responseObject);
        }catch(error){
                console.log(error);
            }




        }
    }
    //->send request
    XHR.send(data)
    
}


function handleObject(responseObject){
    
    console.log(responseObject['errorMessage']);

    if(!responseObject['ok']){

        //loop through errors display errors
        let responseErrors = responseObject['errorMessage'];
        let errorsContainer = document.getElementById("errors");
        errorsContainer.style.display = "flex";
        

        for(let error of responseErrors){
            let li = document.createElement("li");
            errorsContainer.appendChild(li);
            let errorMess = document.createTextNode(error);
            li.appendChild(errorMess);
        }        
    }

}



