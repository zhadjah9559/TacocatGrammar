document.getElementById("userInputBtn").addEventListener("click", ()=>{
    let userInput = document.getElementById("userInput").value

    //convert string to an array
    let arrayElements = userInput.split('')

    //reverse array
    let reverseArray = arrayElements.reverse();

    let reverseString = reverseArrayValues.join('');

    if(arrayElements == reverseArray){
        document.getElementById("output").innerHTML = "The input you entered is a Palindrome!!"
    }else{
        document.getElementById("output").innerHTML = "The input you entered is NOT a Palindrome!!"
    }


    
})