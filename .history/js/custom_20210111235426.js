document.getElementById("userInputBtn").addEventListener("click", ()=>{
    userInput = document.getElementById("userInput").value;

    //check to see if the user's input is even or odd
    //if user input is odd, then there is a chance of it being a palindrome
    //if even, no chance of it being a palindrome
    

    if( (userInput.length %2) == 0 )
        document.getElementById("output").innerHTML = `The word you enetered is <span class="boldy">${word1}</span>`;




    //array of chars that will
    let temp[userInput.length];
});