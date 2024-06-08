const btn = document.querySelector('#showPassword');
btn.addEventListener('click', () => {
    let inputSenha = document.querySelector('#senha')

    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
});


function salvar() {
    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#senha').value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    if (users.length === 0) {
        alert("Nenhum email cadastrado. Por favor, faça um cadastro primeiramente.");
        return;
    }
    
    if (!isEmailValid(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    
    if (!validatePassword(senha, 8)) {
        alert("A senha deve ter no mínimo 8 caracteres.");
        return;
    }

    const usuarioExistente = users.find(user => user.email === email);
    if (!usuarioExistente) {
        alert("Email não cadastrado. Por favor, verifique o email digitado.");
        return;
    }

   
    usuarioExistente.senha = senha;
    localStorage.setItem("users", JSON.stringify(users));

    alert("Senha alterada com sucesso!");
}


function exibirEmails() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const listaEmails = users.map(user => user.email);
    const listaEmailsString = listaEmails.join(", ");
    alert(`Emails cadastrados: ${listaEmailsString}`);
}


function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function validatePassword(password, minChars) {
    return password.length >= minChars;
}


const abaEmail = document.querySelector("#abrirEmails");
abaEmail.addEventListener("click", exibirEmails);
