document.getElementById("userInputBtn").addEventListener("click", ()=>{
    
    let userInput = document.getElementById("userInput").value

    While(userInput === "") {
        document.getElementById("output").innerHTML = `Please enter a string of characters`
    }

        //cast to lowercase so there are no discrepancies
        let lowerCaseInput = userInput.toLowerCase()


        let reversedString = lowerCaseInput.split("").reverse().join("")

        //lowerCaseInput.split('')
        //convert string to an array  { "i", "n", "p", "u", "t" }
    
        //LowerCaseInput.reverse()
        //reverse array  =  { "t", "u", "p", "n", "i"}
        
        //lowerCaseInput.join('')
        //reversestring  =  {"tupni"}
        

        if(lowerCaseInput == reversedString){
            document.getElementById("output").innerHTML = `🌮 ${userInput} is a palindrome!!😻`
        }else{
            document.getElementById("output").innerHTML = `❌ ${userInput} is NOT a palindrome😿`
        } 
        
        userInput.value() = ""
    
    
})

document.getElementById("clearBtn").addEventListener("click", ()=>{
    document.getElementById("userInput").value = ""
})


