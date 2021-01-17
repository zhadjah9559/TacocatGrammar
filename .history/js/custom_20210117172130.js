document.getElementById("userInputBtn").addEventListener("click", ()=>{
    //userInput = {"input"}
    let userInput = document.getElementById("userInput").value

    //convert string to an array  { "i", "n", "p", "u", "t" }
    let arrayElements = userInput.split('')

    //reverse array  =  { "t", "u", "p", "n", "i"}
    let reverseArray = arrayElements.reverse();

    //reversestring  =  {"tupni"}
    let reversedString = reverseArray.join('');

    if(userInput == reversedString){
        document.getElementById("output").innerHTML = "🌮The input you entered is a Palindrome!!😻"
    }else{
        document.getElementById("output").innerHTML = "❌The input you entered is NOT a Palindrome😿"
    }    
    userInput.value = ""
})

function clear(){
    document.getElementById(userI) = "";
}