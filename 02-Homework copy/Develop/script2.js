// Assignment Code




var generateBtn = document.querySelector("#generate");

// Variables

var lowercase = ("abcdefghijklmnopqrstuvwxyz").split("");
console.log(lowercase);

var uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");;
console.log (uppercase);


var numbers = ("0123456789").split("");
console.log (numbers);


var specialcharacters= ("!@#$%^&*+=").split("")
console.log (specialcharacters)

var passwordCombo = []


// If-Else Function for Prompts regarding password
function writePassword() {
   

    var verifyNC = prompt ("How many characters would you like in the password?"); 
    var characterlength= parseInt(verifyNC);
    if(characterlength<= 128 && characterlength >= 8){
         console.log (verifyNC);

    
      var verifyLC = confirm("Would you like lower-case letters?")
      console.log (verifyLC)
      if (verifyLC === true) {passwordCombo = passwordCombo.concat(lowercase);
        console.log(passwordCombo)}
          else (verifyLC === false);


     

      var verifyUC = confirm ("Would you like upper-case letters?")
      console.log (verifyUC)
      if (verifyUC === true) {passwordCombo = passwordCombo.concat(uppercase);
        console.log(passwordCombo)}
         else (verifyLC === false); 



      var verifyN = confirm ("Would you like numbers?")
      console.log (verifyN)
      if (verifyN === true) {passwordCombo = passwordCombo.concat(numbers);
        console.log(passwordCombo)}
         else (verifyN === false);

      


      var verifySC = confirm ("Would you like special characters")
      console.log (verifySC)
      if (verifySC === true) {passwordCombo = passwordCombo.concat(specialcharacters);
        console.log(passwordCombo)}
         else (verifySC === false);
         


     
     if (verifyLC === false && verifyUC === false && verifyN === false && verifySC === false){
       alert("At least one character type needs to be selected.");
       var redo = alert ("Please press 'Generate Password' button.");
       

    
       

       




    
    var password= "";
    for (i = 0; i < characterlength; i++) {
    var random = passwordCombo[Math.floor(Math.random() * passwordCombo.length)];
    console.log(random)
    password = password+=random
    console.log (password)};
    



    var passwordText = document.querySelector("#password");
    passwordText.value = password;


    //Resets Array to 0 if User needs to make changes to selections 
    passwordCombo.length = 0;
    

    
} 
else {
    alert("Your character length needs to be a minimum of 8 and maxmimum of 128.");
   
};
 }}


// Event listener to generate button
generateBtn.addEventListener("click", writePassword);{
};