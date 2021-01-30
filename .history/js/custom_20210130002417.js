document.getElementById("userInputBtn").addEventListener("click", ()=>{
    //userInput = {"input"}
    let userInput = document.getElementById("userInput").value

    //cast to lowercase so there are no discrepancies
    let lowerCaseInput = userInput.toLowerCase()
    lowerCaseInput.split()


    //convert string to an array  { "i", "n", "p", "u", "t" }
    let arrayElements = lowerCaseInput.split('')

    //reverse array  =  { "t", "u", "p", "n", "i"}
    let reverseArray = arrayElements.reverse()

    //reversestring  =  {"tupni"}
    let reversedString = reverseArray.join('')

    if(lowerCaseInput == reversedString){
        document.getElementById("output").innerHTML = `🌮 ${userInput} is a palindrome!!😻`
    }else{
        document.getElementById("output").innerHTML = `❌ ${userInput} is NOT a palindrome😿`
    }    
    userInput.value = ""
    lowerCaseInput = ""
})

function clear(){
    document.getElementById("userInput").innerText = ""
}