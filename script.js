var generateBtn = document.querySelector('#generate');
let big = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let little = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let stat = [0,1,2,3,4,5,6,7,8,9];
let special = ['!','@','#','$','%','^','&', "*", '(', ')'];

function generatePassword(){
    
    
    let password = "";
    let passwordIs = [];


let passwordSize;


    passwordSize = prompt("Please type a password length from 8-128 characters");
        if (passwordSize<8 || passwordSize > 128) {
            alert ("Please make password between 8-128 characters");
            return
        }


    let characterBig = confirm("Do you want to include uppercase characters?");
    let characterLittle = confirm("Do Do you want to include lowercase characters?");
    let characterStat = confirm("Do you want to include numbers?");
    let characterSpecial = confirm("Do you want to include special characters?");

        if (characterBig){
            passwordIs =passwordIs.concat(big)
    }
        if (characterLittle){
            passwordIs =passwordIs.concat(little)
    }
         if (characterStat){
            passwordIs =passwordIs.concat(stat); 
    }
        if (characterSpecial){
            passwordIs =passwordIs.concat(special)
    }



    for(var i=0; i<passwordSize; i++){
        password += passwordIs[Math.floor(Math.random()*passwordIs.length)]
    }
    return password;
}

function writePassword(){
    var password = generatePassword();
    var passwordText = document.getElementById("password");
    passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
