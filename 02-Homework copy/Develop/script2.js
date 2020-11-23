// Assignment Code
var generateBtn = document.querySelector("#generate");

// verifyNC.length =(verifyNC)

var lowercase = ("abcdefghijklmnopqrstuvwxyz").split("");
console.log(lowercase);

var uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");;
console.log (uppercase);

// var numbers= (math.floor(math.random() * 9)+1);
var numbers = ("0123456789").split("");
console.log (numbers);


var specialcharacters= ("!@#$%^&*+=").split("")
console.log (specialcharacters)

var passwordCombo = []


// Write password to the #password input
function writePassword() {
  
var verifyNC = prompt ("How many characters would you like in the password?"); 
var characterlength= parseInt(verifyNC);
  if(characterlength<= 128 && characterlength >= 8){
      // return true;
      //add something to add combo pw
    console.log (verifyNC)

    
      var verifyLC = confirm("Would you like lower-case letters?")
      console.log (verifyLC)
      if (verifyLC) {passwordCombo = passwordCombo.concat(lowercase);
        console.log(passwordCombo)}
          
      

      var verifyUC = confirm ("Would you like upper-case letters?")
      console.log (verifyUC)
      if (verifyUC) {passwordCombo = passwordCombo.concat(uppercase);
        console.log(passwordCombo)}



      var verifyN = confirm ("Would you like numbers?")
      console.log (verifyN)
      if (verifyN) {passwordCombo = passwordCombo.concat(numbers);
        console.log(passwordCombo)}

      


      var verifySC = confirm ("Would you like special characters")
      console.log (verifySC)
      if (verifySC) {passwordCombo = passwordCombo.concat(specialcharacters);
        console.log(passwordCombo)}



        var password= "";
        for (i = 0; i < characterlength; i++) {
        var random = randomChoices [math.floor(math.random() * characterlength)];
        password = characterlength[random]
        console.log (password)}

  

  


//   var password = generatePassword();



    

//   var passwordText = document.querySelector("#password");

//   passwordText.value = password
} 
else {
    alert("Your character length needs to be a minimum of 8 and maxmimum of 128.");
    // return false;
};

    
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);{}
