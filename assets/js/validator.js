//->exporting Modules

export {validateChar,nameValidate,cellNumberValidate}

/*
this file contains validator function

Developer : @realKevinBrian
Email : kevinbrian105@gmail.com

*/


/*
char validator
*/

function validateChar(args){

    args.toString(); 
    let charCount = args.split("");

    if(charCount.length === 9){
        return true;
    
    }else if(charCount.length > 9){
        return false;
    
    }
    else{
        return false;
    }



}

/*
name Validator
*/

function nameValidate(args) {

    args.toString();
    let pattern = /[0-9,_”’/*+-]|[)('\}{./]/ig;
    let check = pattern.test(args);
    
    if (args === "") {

        return false;
        
    } else if(check){
        
        return false;
    }else {

        return true;

    }
}


/* 
cell Number Valitor

*/

function cellNumberValidate(number) {
    let checkNums = number.split(" ").join("").split("");

    //->we join the chucks into a string and slice the first index of the string
    //->And we remove the (+) sign because its a string
    let checkChar = checkNums.join("").slice(1, checkNums.length);

    //->we Regex the remaining string to check if it contains any String in it
    const patternChar = /[a-z]/ig;
    const valChar = patternChar.test(checkChar);

    //->we set a condition if it doesnt contain any string
    if (!valChar) {

        /*<->If the expression falled to true it gonna run this code*/
        //-<Check how many digits we have in our telefone number
        //->if they fall to 9 digits
        if (checkNums.length === 9) {
            //<->we gonnna run this code
            /*
             We apply this code only when a number is 9 sequences
            */
            //->we separate numbers into chucks
            let prefixCode = checkNums.slice(0, 2).join("");
            let restNum = checkNums.slice(2, checkNums.length).join("");
            let number = [];
            number.push(prefixCode);
            number.push(restNum);
            let newNumb = number;

            //<-create pattern for each Case
            //->>create pattern for area Code
            let patternAreaCode = /[+]258/;
            let matchAreaCode = patternAreaCode.test(newNumb);

            //->>create pattern for prefix code
            let patternprefixCode = /85|82|83|84|86|87/;
            let matchPrefixCode = patternprefixCode.test(newNumb[0]);

            //->>validate the condition (AreaCode and PrefixCode)
            //>= matchAreaCode = false but i turn into true using (!)
            //>=matchPrefixCode = true
            if (!matchAreaCode && matchPrefixCode) {
                return true;

            }


            //>= matchAreaCode = false but i turn into true using (!) 
            //>= matchPrefixCode = false but i turn into true using (!) 
            else if (!matchAreaCode && !matchPrefixCode) {
                return false;
            }
        }


        //->if they fall to 13 digits
        else if (checkNums.length === 13) {

            // console.log(checkNums.length)
            //separated Numbers 
            //areaCode
            //PrefixCode
            let areaCode = checkNums.slice(0, 4).join("");
            let prefixCode = checkNums.slice(4, 6).join("");
            let restNum = checkNums.slice(6, checkNums.length).join("");
            let number = [];
            number.push(areaCode);
            number.push(prefixCode);
            number.push(restNum);
            let newNumb = number;

            //create pattern for each Case
            //create pattern for area Code
            let patternAreaCode = /[+]258/;
            let matchAreaCode = patternAreaCode.test(newNumb[0]);

            //create pattern for prefix code
            let patternprefixCode = /85|82|83|84|86|87/;
            let matchPrefixCode = patternprefixCode.test(newNumb[1]);

            //validate
            if (matchAreaCode && matchPrefixCode) {
                return true;

            } else if (newNumb[2].length > 7 && newNumb[2].length < 7) {
                return false

            }
            else {
                return false;
            }
        }

        else if (checkNums.length !== 13 && checkNums.length !== 9) {
            return false;
        }
    } 
    else {
        return false;
    }
}



