const input = document.getElementById("number")
const result = document.getElementById("result")
const confirm = document.getElementById("submit")
const count  = document.getElementById("count")
let attempts = 0;
const randomNumber = Math.floor(Math.random()*10);


confirm.addEventListener("click",()=>{
    event.preventDefault(); 
    const inputValue = parseInt(input.value);
    attempts++; 
    // console.log(inputValue);
    if(isNaN(inputValue))
    {
        alert("Not a Number")
    }
    else if(randomNumber > inputValue){
        result.textContent = "Enter a higher number";
    }
    else if(randomNumber < inputValue){
        result.textContent = "Enter a lower number"
    }
    else{
        result.textContent = "Correct"
    }
    count.textContent = attempts;

})




