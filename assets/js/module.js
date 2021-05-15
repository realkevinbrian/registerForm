export {showProfile,addCSS}


function addCSS(args){
    args.toString();
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = args;
    document.head.appendChild(link);
}



function showProfile(nuit,nome,date,cellNumber){

    let data = '';

    data += `
    <div class="profileContainer">

        <div class="InfoContainer">

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
                            <span>${nuit}</span>
                        </li>

                        <li>
                            <span>Nome Completo :</span>
                            <span>${nome}</span>
                        </li>

                        <li>
                            <span>Data :</span>
                            <span>${date}</span>
                        </li>

                        <li>
                            <span>Numero de Telefone :</span>
                            <span>${cellNumber}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `;

    return data;
    
}