const LoginForm = document.getElementById('LoginForm');
const errorMessage = document.getElementById('errorMessage');

LoginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let emailValue = document.getElementById('email').value;
    let passwordValue = document.getElementById('password').value;

    console.log({emailValue,passwordValue});

    if (!emailValue.includes('@')){
        errorMessage.textContent = 'Электронды пошта қате енгізілген';
    } else if (passwordValue.length < 6){
        errorMessage.textContent = 'Құпия сқз кемінде 6 симболдан тұру керек';
    } else {
        errorMessage.style.color = 'green';
        errorMessage.textContent = 'Форма түрде жіберілді';
        window.location.href = "index1.html";
    }
});