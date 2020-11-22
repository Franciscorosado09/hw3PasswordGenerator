// Assignment Code
var generateBtn = document.querySelector("#generate");

// verifyNC.length =(verifyNC)

var lowercase = ("abcdefghijklmnopqrstuvwxyz").split("");
console.log(lowercase);

var uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");;
console.log (uppercase);


var numbers = ("0123456789").split("");
console.log (numbers);


var specialcharacters= ("!@#$%^&*+=").split("")
console.log (specialcharacters)


// Write password to the #password input
function writePassword() {


  var verifyNC = prompt ("How many characters would you like in the password?"); 
  
  var characterlength= parseInt(verifyNC);
    if(characterlength<= 128 && characterlength >= 8){
        return true;
    }
    
    else{
        alert("Your character length needs to be a minimum of 8 and maxmimum of 128.");
        return false;
    };



  
  




  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
