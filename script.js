var generateBtn = document.querySelector('#generate')
let big = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let little = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let number = [0,1,2,3,4,5,6,7,8,9];
let special = ['!','@','#','$','%','^','&', "*", '(', ')'];

function generatePassword(){
    let password = "";
    let passwordCon = [];

let passwordSize;
    passwordSize = promt("Please type a password length from 8-128 characters");
        if (passwordSize<8 || passwordSize > 128) {
            alert ("Please make password between 8-128 characters");
            return
        }
    let letterBig = confirm("Do you want to include uppercase characters?");
    let letterLittle = confirm("Do Do you want to include lowercase characters?")
    let stat = conform("Do you want to include numbers?")
    let special = confirm("Do you want to include special characters?")

    












} 
