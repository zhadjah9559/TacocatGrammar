document.getElementById("userInputBtn").addEventListener("click", ()=>{
    let userInput = document.getElementById("userInput").value

    //convert string to an array  {i,n,p,u,t}
    let arrayElements = userInput.split('')

    //reverse array  {t,u,p,i,n}
    let reverseArray = arrayElements.reverse();

    //reversestring  {tupin}
    let reversedString = reverseArray.join('');

    if(userInput == reversedString){
        document.getElementById("output").innerHTML = "🌮The input you entered is a Palindrome!!😻"
    }else{
        document.getElementById("output").innerHTML = "❌The input you entered is NOT a Palindrome"
    }    
})