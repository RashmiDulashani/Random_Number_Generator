var generateBtn = document.getElementById("generate-btn");
var numberElement = document.getElementById("random-number");

generateBtn.addEventListener("click",()=>{
    var randomNumber = Math.floor(Math.random()*100)+1;
    numberElement.textContent = randomNumber;
});