// Assignment Code





var generateBtn = document.querySelector("#generate");

//Variables

var lowercase = ("abcdefghijklmnopqrstuvwxyz");
// var lowercasearray = lowercase.split("");
// console.log(lowercasearray);

var uppercase = lowercase.toUpperCase();
// var uppercasearray = uppercase.split("");
// console.log (uppercasearray)


var numbers = math.floor(math.random() * 9)+1;

console.log (numbers)


// var passwordCombo = []


var specialcharacters= ("!@#$%^&*+=")
// var specialcharactersarray = specialcharacters.split("")
// var numberofcharacters= ()

// var verifyLC = confirm("Would you like lower-case letters?")
// var verifyUC = confirm ("Would you like upper-case letters?")
// var verifyN = confirm ("Would you like numbers?")
// var verifySC = confirm ("Would you like special characters")
// var verifyNC = prompt ("How many characters would you like in the password?")  //this will have some sort if than statement confirming something is true reset

// alert("Would you like lower-case letters?" + verifyLC )


// var submitbtn = document.querySelector('btn');
//    button.onclick = function verifyLC() {
//     alert("Would you like lower-case letters?");
   
// //    }



// var random = alert("wassup")


// Write password to the #password input





function writePassword() {



  verifyLC= alert("Would you like lower-case letters?");
   
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  passwordText.value = password;

  // var verifyLC = confirm("Would you like lower-case letters?")




//  we would create a variable in here for generate password that would have like (lowercase, uppercase, number sp)
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{

  



  


}


