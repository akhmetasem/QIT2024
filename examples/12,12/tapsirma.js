const registerForm = document.getElementById('registerForm');
const errorMessage = document.getElementById('errorMessage');

registerForm.addEventListener('submit',(event) => {
    event.preventDefault();
    let nameValue = document.getElementById('name').value;
    let emailValue = document.getElementById('email').value;
    let passwordValue = document.getElementById('password').value;
    let confirmPasswordValue = document.getElementById("confirmPassword").value
    
    if(nameValue === ''){
        errorMessage.textContent = 'Атыңыз бос болмау керек'
    } else if (!emailValue.includes("@")) {
        errorMessage.textContent = "email qate"
    } else if (passwordValue.length < 6){
        errorMessage.textContent = "Құпиясөз 6 болу керек"
    } else if(passwordValue !== confirmPasswordValue){
        errorMessage.textContent ='пароль Сәйкес емес'

    }else {
        alert("Жарайсың барлығы сәтті аяқталды!")
    }
})
