const form = document.querySelector("#Form")
const nameInput = document.querySelector("#Nome")
const emailInput = document.querySelector("#Email")
const passwordInput = document.querySelector("#senha")
   
form.addEventListener("submit" ,  (event) => {

    event.preventDefault();

    // Verifica se o nome está vazio
    if(nameInput.value === ""){
        alert("Por favor , preencha o seu nome.");
        return;
    }

// Verifica se o email está vazio
if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor , verifique seu e-mail.");
    return;
}});

function isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}

function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        return true;
    }
    return false;
}
if(!validatePassword(passwordInput.value, 8)){
    alert("A senha deve ter no mínimo 8 digitos!"); 
    ;
}


