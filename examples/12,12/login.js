const nameField = document.getElementById("name") 
const help = document.getElementById("help") 
const statusText = document.getElementById("status") 
 
nameField.addEventListener("focus", () =>{ 
  if (nameField.value === '')help.textContent = "enter your full name" 
} )  
 
nameField/addEventListener('blur', () => { 
    if(nameField.value !== '') 
    help.textContent = '' 
    statusText.style.color = "green" 
    statusText.textContent = "Correct" 
})

const liveInput = document.getElementById('liveInput') 
const liveOutput = document.getElementById('liveOutput') 
 
liveInput.addEventListener('input', () => { 
    liveOutput.textContent = liveInput.value 
})