const form = document.querySelector("#Form");
const nameInput = document.querySelector("#Nome");
const emailInput = document.querySelector("#Email");
const passwordInput = document.querySelector("#senha");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio
    if (nameInput.value.trim() === "") {
        alert("Por favor, preencha o seu nome.");
        return;
    }

    // Verifica se o email está vazio ou inválido
    if (emailInput.value.trim() === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, verifique seu e-mail.");
        return;
    }
    
    if (!validatePassword(passwordInput.value, 8)) {
        alert("A senha deve ter no mínimo 8 dígitos!");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const newUser = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Dados salvos com sucesso!");
});

function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validatePassword(password, minDigits) {
    return password.length >= minDigits;
}


